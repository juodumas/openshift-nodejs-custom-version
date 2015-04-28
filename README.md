# openshift-nodejs-custom-version
Deploys OpenShift's nodejs cartridge with a custom node version.

Couldn't get [ryanj/nodejs-custom-version-openshift][1] to work (OpenShift seems to be resetting PATH just before starting node), so here an alternative implementation. Currently this is for a single experimental project only and I don't expect to update it.

[1]: https://github.com/ryanj/nodejs-custom-version-openshift

Example usage:

1. Create `rhc app create nodeapp nodejs mongodb-2 --scaling --from-code=git://github.com/juodumas/openshift-nodejs-custom-version --timeout 600`
2. `rhc scale-cartridge nodejs --app nodeapp --min 1 --max 2`
    A
    
This step will take a while. The `--scaling` options is used only to get a separate gear for the database. The `.openshift/action_hooks` scripts for deploying custom node version don't support nodejs scaling at the moment, so node Scaling for it should be disabled for production (though it should be simple to impement).

Edit `engines.node` in `package.json` to specify your node version.
