# dependencyGraph
To up and running this follow the below steps:
- Clone the repository on your machine
- Make sure you have node and npm installed in your machine if not follow the official documentation on https://nodejs.org/en/download.
- Change your working directory to the repository directory.
- Run npm install
- Also make sure graphviz library is installed on your system which is responsible for generating the PNG image of the graph, if not run brew install graphviz.
- After that run the below command node index.js --mainPackage="path to the project"
- Here path should be the absolute path of the project directory which includes the package.json file.
