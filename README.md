case'fb':{     	    

             if (!text) return reply(`*Please give me a link*`)
               
            let bocil = require('@bochilteam/scraper')  
                bocil.facebookdl(`${text}`).then(async (data) => {                   
                    
                buf = await getBuffer(data.thumbnail)    

                for (let i of data.result) {     
                ElisaBotMd.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*Quality :* ${i.quality}`}, { quoted: m })
                }          
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break



https://chat.whatsapp.com/LMMPM2ZLjyJKFpNFkMoY1r




[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/MR-NIMA-X/Zim-Bot-Nima-Edition)

## BUILD PACKS

```
https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest

https://github.com/DuckyTeam/heroku-buildpack-imagemagick


https://github.com/clhuang/heroku-buildpack-webp-binaries.git

```

 ##  > THIS BOT CODED BY DRIPS MEMES ZIM BOT INC 


## >  FOLLOW STEPS BELOW FOR INSTALLATION

## >  THIS BOT IT USE MULTI DEVICE BAILEYS


