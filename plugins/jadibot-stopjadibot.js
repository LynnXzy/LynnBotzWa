import { areJidsSameUser } from '@adiwajshing/baileys'
import Connection from '../lib/connection.js'

let handler = async (m, { conn }) => {
    const parent = await Connection.conn
    if (areJidsSameUser(parent.user.id, conn.user.id)) throw 'Kenapa nggk langsung ke terminalnya?'
    const index = [...Connection.conns.entries()].findIndex(([_, _conn]) => areJidsSameUser(conn.user.id, _conn.user.id))
    if (index == -1) throw '??'
    await conn.reply(m.chat, 'Goodbye bot :\')', m)
    conn.end()
    Connection.conns.delete(index)
}

handler.help = ['berhenti', 'stop']
handler.tags = ['jadibot']
handler.command = /^((berhenti|stop)jadibot)$/i
handler.owner = true

export default handler