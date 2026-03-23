const fs = require('fs');

// Mock browser objects
global.window = {
    addEventListener: () => {},
    scrollTo: () => {}
};
global.document = {
    addEventListener: () => {},
    getElementById: () => ({ classList: { remove: ()=>{}, add: ()=>{} } }),
    createElement: () => ({}),
    querySelectorAll: () => []
};
global.localStorage = {
    getItem: () => null,
    setItem: () => {}
};

try {
    require('c:\\Users\\John Darev\\Downloads\\TRY\\app.js');
    console.log("APP.JS LOADED PERFECTLY WITHOUT RUNTIME CRASH");
} catch(e) {
    console.log("RUNTIME CRASH DETECTED:");
    console.error(e);
}
