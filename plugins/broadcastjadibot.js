import Connection from '../lib/connection.js'
import { randomBytes } from 'crypto'
import { areJidsSameUser, jidNormalizedUser } from '@adiwajshing/baileys'

let handler = async (m, { conn, text, usedPrefix }) => {
    const parent = await Connection.conn
    if (!areJidsSameUser(parent.user.id, conn.user.id)) throw false
    const users = [...Connection.conns.entries()].filter(([_, conn]) => conn.user?.id).map(([_, conn]) => jidNormalizedUser(conn.user.id))
    let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
    let teks = text ? text : cc.text
    for (let id of users) await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : teks + '\n' + readMore + '「 All Jadibot Broadcast 」\n' + randomID(32)), true).catch(_ => _)
    m.reply(`_Berhasil mengirim broadcast ke ${users.length} nomor yang jadi bot_
${users.map(v => 'wa.me/' + v.replace(/[^0-9]/g, '') + `?text=${usedPrefix}menu`).join('\n')}`.trim())
}
handler.help = ['broadcastjadibot', 'bcbot'].map(v => v + ' <teks>')
handler.tags = ['host']
handler.command = /^(broadcast|bc)(jadi)?bot$/i
handler.owner = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
