const fs = require("fs") 
global.owner = "t.me/daffadevv"
global.session = "sessions"
global.recording = true  
global.typing = false      
global.status = {
Public: true
}
global.menu = {
show: "𝐒͢𝐇𝚯͢𝐖̥ 𝐌͢𝐄͢𝐍͢𝐔",
name_bot: "𝐑͢𝚫𝐕𝐀͢𝐆𝐄̥ 𝐈𝐍͢𝐕𝐀͢𝐒𝐈͢𝚯𝚴"
}
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
