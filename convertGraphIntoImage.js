const fs = require('fs');
const { execSync } = require('child_process');

module.exports = function convertGraphIntoImage(dotFilePath, outputImagePath, outputFormat) {
    try {
        execSync(`dot -T${outputFormat} -o ${outputImagePath} ${dotFilePath}`);
        console.log('DOT file converted to image successfully.');
    } catch (error) {
        console.error('Error converting DOT file to image:', error.message);
    }
}