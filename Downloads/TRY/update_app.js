const fs = require('fs');
const path = require('path');
const appPath = path.join(__dirname, 'app.js');
const menuPath = path.join(__dirname, 'menu_gen.js');

let appCode = fs.readFileSync(appPath, 'utf8');
const menuCode = fs.readFileSync(menuPath, 'utf8');

// Replace the original initialMenu array block
appCode = appCode.replace(/const initialMenu = \[[\s\S]*?\];/, menuCode);

// Force sync the menu to bypass the !getItem check, so it updates universally
appCode = appCode.replace(
    "if (!localStorage.getItem('sr_menuInventory')) Librarian.set('sr_menuInventory', initialMenu);", 
    "Librarian.set('sr_menuInventory', initialMenu);"
);

fs.writeFileSync(appPath, appCode);
console.log('App JS successfully injected with latest DB.');
