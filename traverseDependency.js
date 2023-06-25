const util = require("./util");

module.exports =   function traverseDependency(graph, packageName, isMainPackage, mainPackagePath) {
    const packageJson = util.getPackageJsonPath(packageName, isMainPackage, mainPackagePath)
    const dependencies = Object.keys(packageJson.dependencies || {});

    packageName = util.getSanitizedPackageName(packageName);

    if (!graph[packageName]) {
      graph[packageName] = { dependencies: [], level: 0 };
    }

    for (const dependency of dependencies) {
      if (!graph[dependency]) {
        graph[dependency] = { dependencies: [], level: graph[packageName].level + 1 };
      }

      graph[packageName].dependencies.push(dependency);
      traverseDependency(graph, dependency, false, mainPackagePath);
    }
  }