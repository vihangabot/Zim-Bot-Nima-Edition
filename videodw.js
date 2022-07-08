case 'video': {
                if (!text) return reply(`Example : ${prefix + command} Stay`)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[0]
                let buttons = [
                    {buttonId: `ytmp4 ${anu.url} 360p`, buttonText: {displayText: '360p'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url} 480p`, buttonText: {displayText: '480p'}, type: 1}
                    {buttonId: `ytmp4 ${anu.url} 720p`, buttonText: {displayText: '720p'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
🐦 Title : ${anu.title}
🐦 Ext : Search
🐦 ID : ${anu.videoId}
🐦 Duration : ${anu.timestamp}
🐦 Viewes : ${anu.views}
🐦 Uploaded On : ${anu.ago}
🐦 Author : ${anu.author.name}
🐦 Channel : ${anu.author.url}
🐦 Description : ${anu.description}
🐦 Url : ${anu.url}`,
                    footer: GojoMdNx.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
