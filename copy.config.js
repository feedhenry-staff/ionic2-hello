// this is a custom dictionary to make it easy to extend/override
// provide a name for an entry, it can be anything such as 'copyAssets' or 'copyFonts'
// then provide an object with a `src` array of globs and a `dest` string
let originalCopyConfig = require('@ionic/app-scripts/config/copy.config')

originalCopyConfig.copyIndexContent.src.push('./fhconfig.json');

module.exports = originalCopyConfig;
