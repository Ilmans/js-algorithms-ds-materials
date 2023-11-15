

export const describe = (description, test) => {
        console.log(`\n\n${description} : `);
        test();
}

export const it = (text = "", testFunction) => {
    try {
        testFunction();
        console.log(`  ✅ ${text}`);
    } catch (error) {
        console.error(`  ❌ ${text}: ${error.message}`);
    }
}

