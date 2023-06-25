const util = require("./util");

module.exports = function generateDotFile(graph) {
    let dot = 'digraph DependencyGraph {\n';

    for (const [packageName, { dependencies, level }] of Object.entries(graph)) {
        const formattedPackageName = packageName.replace('@', '').replaceAll('-', '_');
        dot += `  ${formattedPackageName} [label="${packageName}", level=${level}];\n`;

        for (const dependency of dependencies) {
            const formattedDependency = dependency.replace('@', '').replaceAll('-', '_');
            dot += `  ${formattedPackageName} -> ${formattedDependency};\n`;
        }
    }

    dot += '}\n';

    util.saveDotFile(dot);
}