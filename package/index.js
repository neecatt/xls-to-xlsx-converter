import fs from 'fs';
import ExcelJS from 'exceljs';

function convertXlsToXlsx(inputFilePath, outputFilePath) {
  return new Promise((resolve, reject) => {
    const workbook = new ExcelJS.Workbook();

    workbook.xlsx.readFile(inputFilePath).then(() => {
      workbook.xlsx.writeFile(outputFilePath).then(() => {
        resolve(`Conversion successful. File saved at: ${outputFilePath}`);
      }).catch((error) => {
        reject(`Error writing xlsx file: ${error.message}`);
      });
    }).catch((error) => {
      reject(`Error reading xls file: ${error.message}`);
    });
  });
}

module.exports = { convertXlsToXlsx };
