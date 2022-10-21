const fs = require('fs');
const path = require('path');

const filterList = (list, filterTerms) => {
    const tempf = Object.keys(filterTerms).filter(k => filterTerms[k] !== null);
    let tempFilteredArray = [...list];
    tempf.forEach(k => {
        tempFilteredArray = tempFilteredArray.filter(obj => obj[k] === filterTerms[k]);
    })
    return tempFilteredArray;
}


const writeToFile = (content, filePath) => {
    fs.writeFile(path.resolve(__dirname + filePath), content, function (err) {
        if (err) throw err;
        console.log('Saved!');
    })
}

module.exports = { filterList, writeToFile };