const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923702384416";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_00_10_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjksXG4gICAgICAgIDk5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDksXG4gICAgICAgIDk0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDUzLFxuICAgICAgICA4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU0LFxuICAgICAgICA4OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUyLFxuICAgICAgICA3MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODYsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA1MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTExLFxuICAgICAgICA1MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTksXG4gICAgICAgIDMxLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDk4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTExLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA4NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyOSxcbiAgICAgICAgODYsXG4gICAgICAgIDY5LFxuICAgICAgICA2NixcbiAgICAgICAgMTg5LFxuICAgICAgICAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxODEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA0NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAzMixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA0NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAzLFxuICAgICAgICA4NixcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDY3LFxuICAgICAgICA3NSxcbiAgICAgICAgODgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNixcbiAgICAgICAgNDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiai9vYVVaSk14TERCWWJwV05mZ0xYN0EzQk5STzBnYzFkTDZ5RnFiYUpPdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM3MDIzODQ0MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQzMzYzMDMzNzY4RTNEMDIwMjg3MjRDRjZCOTg5QzU0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTA4MDA0NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJXeElHTVJyblE0R3JvbDFtQ3JCWnBRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA0YzA0ODVjLTcwZDktNDFhMC04MzA0LTBlMjQ0MTA3MWVhZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzUsXG4gICAgICAzNCxcbiAgICAgIDE5MCxcbiAgICAgIDEyLFxuICAgICAgOTAsXG4gICAgICA4NyxcbiAgICAgIDMsXG4gICAgICAxMzYsXG4gICAgICAxMzUsXG4gICAgICAyNTAsXG4gICAgICAyMjAsXG4gICAgICA1LFxuICAgICAgMjU1LFxuICAgICAgNDAsXG4gICAgICAzNCxcbiAgICAgIDY1LFxuICAgICAgMTg1LFxuICAgICAgMTM1LFxuICAgICAgMTU2LFxuICAgICAgNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMyLFxuICAgICAgMjcsXG4gICAgICAxOTgsXG4gICAgICAyMDQsXG4gICAgICAxMjQsXG4gICAgICAyNDIsXG4gICAgICAyOSxcbiAgICAgIDE0OCxcbiAgICAgIDE1OSxcbiAgICAgIDIwMSxcbiAgICAgIDIyMSxcbiAgICAgIDkzLFxuICAgICAgMTMyLFxuICAgICAgMTEwLFxuICAgICAgMTQ4LFxuICAgICAgMTk4LFxuICAgICAgMTE0LFxuICAgICAgNzYsXG4gICAgICAyMyxcbiAgICAgIDQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJTMjRWSEFBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM3MDIzODQ0MTY6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuK4mSDwnZmPzaLNofCdmZ3YuSDwnZCC4rSZ8J2WtM2i4ZiU44OgIPCdkIjGnsy9c8mqyZbwnZuGzL0g8JOGquqqvlxcblxcbvCWpI0gXFxuXFxu8JakjVxcblxcbvCWpI1cXG4gXFxuXFxu8JakjVxcbiBcXG7wlqSNXFxuIFxcbvCWpI1cXG5cXG5cXG7wlqSNXFxuXFxu8JakjVxcblxcbvCWpI1cXG5cXG5cXG5cXG4gIPCThqnwlqSN8JOGqlwiLFxuICAgIFwibGlkXCI6IFwiNDUyNzM4NTQyNTUzNDI6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOelI1ODBIRU9mVnZyZ0dHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImZDK2tTdnhYRVQ0MXhiWi9NRzhtMzJ4TTJ1L0RycXJDcGJTMFFXMGJlbms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiL0wxalYyRUNvczVoLzVtejdEaVdQKzBtWnpTeWtqb3I3L1V5ejdoNXBEczBheFIxaklGNGU4bUo1b0wvbDhGb1ZETHpVcVNneTFCLy9JaUdOQXhjRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY2dVeEJjSGNDM3lPa2RXd1laUXdVNnI4dElXSm5jZmRSMTFDMlBqb3ZaVUM2QmdOdDhrWWtZcm1abXZFbGhxVjlCS3AxVitCMHNJUk8zc1NhUFJFRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNzAyMzg0NDE2OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5MDgwMDQyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRWd3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFZ3cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqZkNPUi9sTlNuQkVLTGdMSTNzNkVjcWVoU05PMlU2UmxVSERVdnR6cVhBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNDIyMjY5MDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNjc3ODk2Mzk1NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
