let media = './media/menus/Menu4paypal.jpg'
let handler = async (m, { conn, command }) => {
let pp = './src/apoyo.jpg'
//await conn.sendButton(m.chat, wm, `https://paypal.me/OficialGD`, pp, m)
await conn.sendButton(m.chat, `${wm}`, `https://paypal.me/OficialGD`, pp, [['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', `/menu`]], m) //[['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', `/menu`]]
  
let str = `
π ππ€π‘π!!  *si quiere apoya al bot. con cosa mucha gracias*
βββββββββββββββββ
*forma parte grupo asistencia de facebook*

*https://facebook.com/groups/721802642266362/*
βββββββββββββββββ
*agradecimiento al gatabot-MD*
*agracimiento al themystic-bot-MD* . ππ§πππππ¨!
βββββββββββββββββ
`.trim()
  
await conn.sendHydrated(m.chat, str, wm, media, 'https://paypal.me/OficialGD', 'π πΏπ€π£ππ§', null, null, [
['ππ§πͺπ₯π€π¨ πππππππ‘ππ¨ π°', '.grupos'],
['πΎπ§ππππ€π§ π', '#owner'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', '/menu']
], m,)}



handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i
handler.exp = 80
export default handler
