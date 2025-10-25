// Script to update all localhost API URLs to Railway backend
const fs = require('fs');
const path = require('path');

const RAILWAY_URL = 'https://sdaw-production.up.railway.app';
const JS_DIR = './js';

// Files to update
const filesToUpdate = [
    'login.js',
    'product-fixed.js', 
    'shop.js',
    'shop.js.backup',
    'addressModal.js',
    'auth.js',
    'headerSearch.js',
    'cart.js',
    'cart-tab.js',
    'stockManager.js',
    'simple-auth-client.js'
];

function updateFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Replace localhost:3000 with Railway URL
        content = content.replace(/http:\/\/localhost:3000/g, RAILWAY_URL);
        content = content.replace(/http:\/\/localhost:3001/g, RAILWAY_URL);
        content = content.replace(/localhost:3000/g, RAILWAY_URL);
        content = content.replace(/localhost:3001/g, RAILWAY_URL);
        
        // Update baseURL in simple-auth-client.js
        content = content.replace(/this\.baseURL = 'http:\/\/localhost:3001';/, `this.baseURL = '${RAILWAY_URL}';`);
        
        fs.writeFileSync(filePath, content);
        console.log(`✅ Updated ${filePath}`);
    } catch (error) {
        console.error(`❌ Error updating ${filePath}:`, error.message);
    }
}

console.log('🚀 Updating API URLs to Railway backend...');
console.log(`📍 Railway URL: ${RAILWAY_URL}`);

filesToUpdate.forEach(file => {
    const filePath = path.join(JS_DIR, file);
    if (fs.existsSync(filePath)) {
        updateFile(filePath);
    } else {
        console.log(`⚠️  File not found: ${filePath}`);
    }
});

console.log('✅ API URL update complete!');
console.log('📝 Next: Upload your files to Hostinger');
