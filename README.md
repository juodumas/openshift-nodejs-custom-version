# openshift-nodejs-custom-version
Deploys OpenShift's nodejs cartridge with a custom node version.

Couldn't get [ryanj/nodejs-custom-version-openshift][1] to work (OpenShift seems to be resetting PATH just before starting node), so here an alternative implementation. Currently this is for a single experimental project only and I don't expect to update it.

[1]: https://github.com/ryanj/nodejs-custom-version-openshift

Example usage:

    rhc app create nodeapp nodejs mongodb-2 --scaling --from-code=git://github.com/juodumas/openshift-nodejs-custom-version

Edit `engines.node` in `package.json` to specify your node version.
