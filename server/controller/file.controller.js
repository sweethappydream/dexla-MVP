
const fs = require('fs');
const stat = fs.statSync;
const AdmZip = require('adm-zip');

/**
 * Example usage
 */

function makeZipfile(fileName) {
  newArchive(fileName, [
    'myapp'
  ]);
}

function newArchive(zipFileName, pathNames) {

    const zip = new AdmZip();

    pathNames.forEach(path => {
        const p = stat(path);
        if (p.isFile()) {
            zip.addLocalFile(path);
        } else if (p.isDirectory()) {
            zip.addLocalFolder(path, path);
        }
    });

    zip.writeZip(zipFileName);
}

function updateFile(filename, replacements) {
  return new Promise(function(resolve) {
      fs.readFile(filename, 'utf-8', function(err, data) {
          if (err) {
            throw (err);
          } else {
            const subData = data.split("//code");
            data = subData[0] + "//code\n const basket = " + JSON.stringify(replacements)  + "\n//code" + subData[2];
          }
          fs.writeFile(filename, data, 'utf-8', function(err) {

              if (err) {
                  throw (err);
              } else {
                  resolve();
              }
          });
      });
  })
}

async function insertData(req, res) {
  const data = req.body;
  console.log(data.basket)
  const result = await updateFile('myapp/src/pages/Home.js', data.basket);
  const fileName = `test-${+new Date}.zip`;
  makeZipfile(fileName);
  res.download(fileName);
}

module.exports = { insertData };