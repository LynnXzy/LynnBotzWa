import Connection from '../lib/connection.js'

let handler = async (m, { usedPrefix }) => {
    const users = [...Connection.conns.entries()].filter(([_, conn]) => conn.user?.id).map(([_, conn]) => conn.user)
    m.reply(users.map(v => 'wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}menu (${v.name})`).join('\n'))
}

handler.help = handler.tags = ['jadibot']

handler.command = /^listjadibot$/i

export default handler