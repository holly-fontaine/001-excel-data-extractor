// import modules
const xlsx = require('xlsx');  // need to install 'npm install xlsx'
const fs = require('fs');      // built-in module; no need to install

// extract data from excel workbook
const workbook = xlsx.readFile('./source.xlsm'); // read and parse into object
const sheet = workbook.Sheets['AllWords']; // find sheet w/ the data I want
const data = xlsx.utils.sheet_to_json(sheet); // rows => objects (col headers = keys, cells = values)

// transform into format I want
const clean = data.map(word=>{  // word = rows
    return {                
        persian: word.Entry,
        english: word.Definition,
        lesson: word['List Name'],
        type: word['Word Type']
    };
});

// create vocab.json and write cleaned data into it
fs.writeFileSync( 
    'vocab.json',
    JSON.stringify(clean, null, 2) // null = no filter, 2 = spacing
)