let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) throw `${mg}š¬šššššššš ššššš ššššššš šššš šššššššš\nš¬šššššš\n*${usedPrefix + command} @tag*`
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${mg}š¬šššššššš ššššš ššššššš šššš šššššššš\nš¬šššššš\n*${usedPrefix + command} @tag*`
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `${eg}š¬š ššššššš ššš šššššššššš(š)š¤©\nš·šššš ššš š ${gt}`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.group = true
handler.admin = true 
export default handler
