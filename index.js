const fs = require('fs');
const util = require("./util");
const traverseDependency = require("./traverseDependency");
const generateDotFile = require("./generateDotFile");
const convertGraphIntoImage = require("./convertGraphIntoImage");
const constant = require("./constant");

function generateDependencyGraph(mainPackage, isMainPackage, mainPackagePath) {
    const graph = {};
    traverseDependency(graph, mainPackage, isMainPackage, mainPackagePath);

    return graph;
}


// Access the command-line arguments
const args = process.argv.slice(2);

// Parse named arguments
const namedArgs = util.parseNamedArguments(args);

const mainPackage = namedArgs["mainPackage"];

const dependencyGraph = generateDependencyGraph(mainPackage, true, mainPackage);
// Call the function to create the DOT file and save it.
generateDotFile(dependencyGraph);
// Call the function to convert the DOT file to an image.
convertGraphIntoImage(constant.dotFilePath, constant.outputImagePath, constant.outputFormat);