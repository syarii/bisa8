const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
let krizyn = `
•·––––––––––––––––––––––––––·•
❑ *Nama* : Jarot
❑ *Umur* : 18 Tahun
❑ *Kelas* : Lulus
❑ *Ulang Tahun* : 30 Januari 2004
❑ *Alamat* : AS, AS, Pelabuhan
•·––––––––––––––––––––––––––·•
	`.trim()
  let message = await prepareWAMessageMedia({ image: await (await require('node-fetch')(fotonya7)).buffer()}, { upload: conn.waUploadToServer }) 
    const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
        templateMessage: {
            hydratedTemplate: {
                hydratedContentText: krizyn,
                imageMessage: message.imageMessage, 
           hydratedFooterText: 'salam kenal bang👋',
           hydratedButtons: [{
             urlButton: {
               displayText: 'GroupBot 🐈',
               url: 'https://chat.whatsapp.com/IqZke0cAG6G3iVsnB9myfL'
             }

           },
                {
               urlButton: {
               displayText: '🌍 Link Youtube 🌍',
               url: 'https://youtube.com/channel/UCW7iXlE7TgvJMIXQck4NYBQ'
             }

           },
               {
             quickReplyButton: {
               displayText: 'Sewa Bot',
               id: '.sewaoscar',
             }
             
           },
               {
             quickReplyButton: {
               displayText: 'Menu',
               id: '.menu',
             }
             
             },
               {
             quickReplyButton: {
               displayText: 'Donasi bang',
               id: '.donasi',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.tags = ['main', 'info']
handler.customPrefix = /^(biodata|.biodata)$/i
handler.command = new RegExp
handler.help = ['.biodata']
module.exports = handler
