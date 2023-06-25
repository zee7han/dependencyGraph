
const fs = require('fs');

module.exports = {
    parseNamedArguments: (args) => {
        const namedArgs = {};
        for (let i = 0; i < args.length; i++) {
            if (args[i].startsWith('--')) {
                const [argName, argValue] = args[i].substring(2).split('=');
                namedArgs[argName] = argValue || true;
            }
        }
        return namedArgs;
    },

    getPackageJsonPath: (packageName, isMainPackage, mainPackagePath) => {
        let packageJson;
        if (isMainPackage) {
            packageJson = require(`${packageName}/package.json`);
        } else {
            packageJson = require(`${mainPackagePath}/node_modules/${packageName}/package.json`);
        }
        return packageJson;
    },

    saveDotFile: (dot) => {
        fs.writeFileSync('dependency_graph.dot', dot);
        console.log('Dependency graph generated successfully.');
    },

    getSanitizedPackageName: (packageName) => {
        let data = packageName.split("/")
        return data[data.length - 1];
    }
}

