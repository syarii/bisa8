/**
* jangan ganti ya kakak kakak sekalian
* ini cuma buat ninggalin credit gw doang :)
* jangan dihilangin, boleh di tambahin 🐦
**/

let handler = async (m, { conn }) => {
bear = "Source Code"
let esce = `
BIG THANKS TO

⤿ Nurutomo
    📮 https://github.com/Nurutomo
⤿ Elyas
    📮 https://github.com/Paquito1923
⤿ Hyzer Official
    📮 https://github.com/Hyzerr
⤿ Krizyn Ofc
    📮 https://github.com/krizynofc
⤿ Zifabotz_offc1
    📮 https://github.com/Botynyakamu
⤿ Jarot ofc 
    📮 https://github.com/alpiii22 
    
THANKS PARA DONASI YANG TERHORMAT
`
conn.sendButtonImg(m.chat, fla + 'Thanks To', esce, wm2, 'Menu', '.menu', m) 
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(tqto|team)$/i

module.exports = handler
