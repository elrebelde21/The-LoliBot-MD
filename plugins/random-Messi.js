import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/messi")
let json = res.data
let url = json.url
conn.sendButton(m.chat, "*Messi*", author, url, [['β½ πΊππππππππ β½', `${usedPrefix + command}`]], m)}
handler.help = ['messi']
handler.tags = ['internet']
handler.command = /^(messi)$/i
export default handler
