// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab

// Base Haikal Hw Mods : Copyan Dari Base Dika


const fs = require('fs')
const chalk = require('chalk')
const tiktok = require("./baseikal/lib/tiktok")
const facebook = require("./baseikal/lib/facebook")
const instagram = require("./baseikal/lib/instagram")
const twitter = require("./baseikal/lib/twitter")

global.ntnsfww = []
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
//=================================================//
//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://youtube.com/c/DONUTGAMING492' // ubah aia
global.ig = '@HYY.TAM04' // ubah aja
global.email = 'yanticilgo@gmail.com' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.botname = 'Bug Botz' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'Buugg Botz' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['6283898398823'] // ubah aja pake nomor lu
global.creator = "6283898398823@s.whatsapp.net"
global.premium = ['6283898398823'] // ubah aja pake nomor lu
global.packname = 'Tamzz Botz' // ubah aja
global.ownerr = ['Tamzz Botz'] // ubaha aja
global.author = 'Tamzz Botz' //ubah aja
global.sp = '⭔' // Gausah Juga

// Terserah
global.mess = {
    nsfw: '*Fitur NSFW tidak diaktifkan, chat admin grup supaya diaktifkan*_',
    premium: 'Maaf Fitur Ini Untuk Pengguna Premium Khusus Untuk Group => Jika Ingin Menggunakan Di chat Pribadi Harap Anda Telah Di aksess Owner Di Chat Pribady Anda',
 }
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
//Terserah Kalau Paham 
global.thumb = fs.readFileSync("./baseikal/image/hw.jpg")
global.log0 = fs.readFileSync("./baseikal/image/haikal.jpg")
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
