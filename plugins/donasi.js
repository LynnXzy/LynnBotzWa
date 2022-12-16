let handler =  m => m.reply(`
╭─「 Donasi • Reload 」
│ • Maxis [60147675746]
│ • Digi [60149431385]
│ • Umobile [60189830350]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
