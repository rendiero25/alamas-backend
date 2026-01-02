const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const excelFilePath = path.join(__dirname, 'AlamasChemicalProducts.xlsx');
const jsonFilePath = path.join(__dirname, 'products.json');

try {
    const workbook = XLSX.readFile(excelFilePath);
    const sheetName = workbook.SheetNames[0];
    const datasheet = workbook.Sheets[sheetName];
    const rawData = XLSX.utils.sheet_to_json(datasheet);

    const industries = [];
    let currentIndustry = null;
    let currentCategory = null;

    rawData.forEach((row) => {
        // Skip labels
        if (row.Chemical === 'Category') return;

        // Check for new Industry
        if (row.Industry) {
            currentIndustry = {
                name: row.Industry,
                categories: []
            };
            industries.push(currentIndustry);
        }

        // Check for Category (Chemical row)
        if (row.Chemical) {
            currentCategory = {
                name: row.Chemical,
                products: []
            };
            if (currentIndustry) {
                currentIndustry.categories.push(currentCategory);
            }
        }

        // Collect products from __EMPTY columns
        if (currentCategory) {
            Object.keys(row).forEach(key => {
                if (key.startsWith('__EMPTY')) {
                    const productName = row[key];
                    if (productName && typeof productName === 'string' && productName !== 'Chemical Name') {
                        currentCategory.products.push(productName.trim());
                    }
                }
            });
        }
    });

    fs.writeFileSync(jsonFilePath, JSON.stringify(industries, null, 2));
    console.log(`Success! Hierarchical JSON file created at: ${jsonFilePath}`);
} catch (error) {
    console.error('Error during conversion:', error);
}
