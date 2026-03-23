const https = require('https');

async function searchWiki(query) {
    return new Promise((resolve) => {
        const q = encodeURIComponent(`${query} food`);
        https.get(`https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${q}&format=json`, res => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                const parsed = JSON.parse(data);
                if(parsed.query && parsed.query.search && parsed.query.search.length > 0) {
                    resolve(parsed.query.search[0].title);
                } else {
                    resolve(null);
                }
            });
        });
    });
}

async function getImageUrl(title) {
    return new Promise((resolve) => {
        https.get(`https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&format=json`, res => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                const parsed = JSON.parse(data);
                const pages = parsed.query.pages;
                const pageId = Object.keys(pages)[0];
                if(pages[pageId].imageinfo && pages[pageId].imageinfo.length > 0) {
                    resolve(pages[pageId].imageinfo[0].url);
                } else {
                    resolve(null);
                }
            });
        });
    });
}

async function test() {
    const dishes = ["Sinigang na Baboy", "Crispy Pata", "Tapsilog", "Dynamite Lumpia"];
    for(let d of dishes) {
        let t = await searchWiki(d);
        if(t) {
            let url = await getImageUrl(t);
            console.log(d, " -> ", url);
        } else {
            console.log(d, " -> Not found");
        }
    }
}

test();
