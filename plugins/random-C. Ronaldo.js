import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/Cristianoronaldo")
let json = res.data
let url = json.url
conn.sendButton(m.chat, "*Siiiuuuuuu*", author, url, [['β½ πΊππππππππ β½', `${usedPrefix + command}`]], m)}
handler.help = ['cristianoronaldo']
handler.tags = ['internet']
handler.command = /^(cristianoronaldo)$/i
export default handler
