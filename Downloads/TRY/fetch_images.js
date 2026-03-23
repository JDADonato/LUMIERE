const fs = require('fs');
const https = require('https');

const appJsPath = 'c:\\Users\\John Darev\\Downloads\\TRY\\app.js';
let appCode = fs.readFileSync(appJsPath, 'utf8');

const startMarker = 'const initialMenu = [';
const endMarker = '];\n\nconst defaultSettings =';
const startIndex = appCode.indexOf(startMarker);
const endIndex = appCode.indexOf(endMarker, startIndex);

if(startIndex === -1 || endIndex === -1) {
    console.log("Could not find initialMenu block");
    process.exit(1);
}

const menuCode = appCode.substring(startIndex + 'const initialMenu = '.length, endIndex + 1);
let menuArray = eval(menuCode);

async function searchWikiImage(query) {
    return new Promise((resolve) => {
        const options = {
            hostname: 'en.wikipedia.org',
            path: `/w/api.php?action=query&prop=pageimages&format=json&piprop=thumbnail&pithumbsize=400&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrlimit=1`,
            headers: { 'User-Agent': 'SenoritaRicaBot/1.0 (test@example.com)' }
        };

        https.get(options, res => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const parsed = JSON.parse(data);
                    if(parsed.query && parsed.query.pages) {
                        const pages = parsed.query.pages;
                        const pageId = Object.keys(pages)[0];
                        if(pages[pageId].thumbnail && pages[pageId].thumbnail.source) {
                            resolve(pages[pageId].thumbnail.source);
                            return;
                        }
                    }
                } catch(e) {}
                resolve(null);
            });
        }).on('error', () => resolve(null));
    });
}

(async () => {
    console.log(`Processing ${menuArray.length} items...`);
    let successful = 0;
    
    for(let i=0; i<menuArray.length; i++) {
        let item = menuArray[i];
        if(!item.name || item.name.trim() === '') continue;
        
        let url = await searchWikiImage(`${item.name} filipino food`);
        
        if(!url) url = await searchWikiImage(`${item.name} dish`);
        if(!url) url = await searchWikiImage(`${item.name} meat`);
        
        if(url) {
            item.img = url;
            successful++;
            console.log(`Found: ${item.name} -> ${url}`);
        } else {
             // Fallback
             item.img = `https://loremflickr.com/400/300/${encodeURIComponent(item.name.split(" ")[0])},food`;
             console.log(`Fallback: ${item.name}`);
        }
        
        await new Promise(r => setTimeout(r, 80));
    }
    
    let newMenuCode = "[\n" + menuArray.map(obj => "    " + JSON.stringify(obj)).join(",\n") + "\n]";
    let newAppCode = appCode.substring(0, startIndex + 'const initialMenu = '.length) + 
                     newMenuCode + 
                     appCode.substring(endIndex + 1);
                     
    fs.writeFileSync(appJsPath, newAppCode);
    console.log(`\n✅ Completed! Sourced ${successful}/${menuArray.length} images directly from Wikipedia's open database.`);
})();
