const fs = require('fs');
const lines = fs.readFileSync('c:\\Users\\John Darev\\Downloads\\TRY\\raw_menu.txt', 'utf8').split('\n').map(l => l.trim()).filter(l => l);

const menuArray = [];
let currentCat = '';
let currentName = '';

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Categories don't have prices or specific keywords
    if (!line.includes('P') && !line.includes(':') && !lines[i+1]?.includes(':') && !lines[i+1]?.startsWith('P')) {
        currentCat = line;
        continue;
    }

    if (line.startsWith('P')) {
        const price = parseFloat(line.replace('P', '').replace(',', ''));
        menuArray.push({
            id: 'm_' + Date.now().toString(36) + Math.random().toString(36).substring(2, 5),
            cat: currentCat,
            name: currentName,
            price: price,
            img: `https://picsum.photos/seed/${currentName.replace(/\s+/g, '')}/300/200`,
            inStock: true
        });
        currentName = '';
    } else if (line.includes(':')) {
        // Variant line e.g "Hot 12oz: 110.00"
        const [variant, priceStr] = line.split(':');
        const price = parseFloat(priceStr.replace(',', '').trim());
        const variantName = variant.trim();
        let fullName = currentName;
        if(variantName && !variantName.includes('Good for') && !variantName.includes('sticks')) {
            fullName = `${currentName} (${variantName})`;
        } else if (variantName.includes('Good for')) {
            fullName = `${currentName} (${variantName})`; 
        } else if (variantName.includes('sticks')) {
            fullName = `${currentName} (${variantName})`;
        }
        
        menuArray.push({
            id: 'm_' + Date.now().toString(36) + Math.random().toString(36).substring(2, 5),
            cat: currentCat,
            name: fullName,
            price: price,
            img: `https://picsum.photos/seed/${currentName.replace(/\s+/g, '')}/300/200`,
            inStock: true
        });
        // don't clear currentName since there might be more variants
    } else {
        // This is a name line
        if(line !== 'Serving:') {
            currentName = line;
        }
    }
}

// Generate the output array as a string
const output = `const initialMenu = ${JSON.stringify(menuArray, null, 4)};`;
fs.writeFileSync('c:\\Users\\John Darev\\Downloads\\TRY\\menu_gen.js', output);
console.log('Successfully generated menu of size ' + menuArray.length);
