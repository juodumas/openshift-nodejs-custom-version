# openshift-nodejs-custom-version
Deploys OpenShift's nodejs cartridge with a custom node version.

Couldn't get [ryanj/nodejs-custom-version-openshift][1] to work (OpenShift seems to be resetting PATH just before starting node), so here an alternative implementation. Currently this is for a single experimental project only and I don't expect to update it.

[1]: https://github.com/ryanj/nodejs-custom-version-openshift

## Usage

1. Create a node app (this step will take a while):

    `rhc app create nodeapp nodejs mongodb-2 --scaling --from-code=git://github.com/juodumas/openshift-nodejs-custom-version --timeout 1200 --nogit`
    
2. The `--scaling` option above was used to get a separate gear for the database. The `.openshift/action_hooks` scripts for deploying custom node version don't support nodejs scaling at the moment, so we disable node scaling (though it should be simple to implement by mostly copying the contents of `action_hooks/pre_build` to `action_hooks/deploy`):
    
    `rhc scale-cartridge nodejs --app nodeapp --min 1 --max 1`

3. Clone the app's repository:

    `rhc git-clone nodeapp`

4. Now edit the package.json file in the cloned repository and specify your desired node version in engines.node.
