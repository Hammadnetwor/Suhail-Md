const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_22_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgOTksXG4gICAgICAgIDQ5LFxuICAgICAgICAzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI4LFxuICAgICAgICA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA2MCxcbiAgICAgICAgMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NSxcbiAgICAgICAgODIsXG4gICAgICAgIDI3LFxuICAgICAgICAxODksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTExLFxuICAgICAgICA2NyxcbiAgICAgICAgODUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTksXG4gICAgICAgIDgwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDc3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDM2LFxuICAgICAgICA4MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDU1LFxuICAgICAgICAxODEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEsXG4gICAgICAgIDIzLFxuICAgICAgICA3NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTksXG4gICAgICAgIDcyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyLFxuICAgICAgICAyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM5LFxuICAgICAgICAzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI2LFxuICAgICAgICA1MSxcbiAgICAgICAgNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5URDBQSWVCUTE1NTdqallGdW4rZllPMGF0UmllMzVwVWJUQUIwVDh2ams9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlo4TF9iMUw1UXVpWE5udkJIZ0JIUUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNThkMTU0NzQtN2Y2My00MzRmLTlmN2EtNWQ5MjAyOTZhNDRiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY0LFxuICAgICAgMjUyLFxuICAgICAgMTQ1LFxuICAgICAgMjE4LFxuICAgICAgMTEzLFxuICAgICAgMjQ4LFxuICAgICAgNzksXG4gICAgICAxNCxcbiAgICAgIDEzNyxcbiAgICAgIDEzNyxcbiAgICAgIDIxNixcbiAgICAgIDEzNCxcbiAgICAgIDE0MCxcbiAgICAgIDIxMyxcbiAgICAgIDkwLFxuICAgICAgMjAzLFxuICAgICAgOCxcbiAgICAgIDU4LFxuICAgICAgMTk5LFxuICAgICAgMTQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMixcbiAgICAgIDE3NyxcbiAgICAgIDEwMCxcbiAgICAgIDEyMSxcbiAgICAgIDE3OSxcbiAgICAgIDE0NyxcbiAgICAgIDE2NixcbiAgICAgIDIzMixcbiAgICAgIDE4MCxcbiAgICAgIDE4NSxcbiAgICAgIDYwLFxuICAgICAgMTc3LFxuICAgICAgMTIwLFxuICAgICAgMTQyLFxuICAgICAgNDIsXG4gICAgICAxODUsXG4gICAgICAzNyxcbiAgICAgIDkxLFxuICAgICAgNjEsXG4gICAgICA2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaNUVOQVZTSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDAxNzgxOTA2OjUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4Ze0eOG1l0zMkcyIfHPMvuqAjSBLac2mzKVuzaHNnOGYnFwiLFxuICAgIFwibGlkXCI6IFwiMjcwNTk2Mjk0MzUzMTI1OjUxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00vODNKZ0ZFS1dVeGJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidEVDbHNZOGx1c2pDaXErSXJHUmphODRmMjM4bld1cmdWbVBkTExZMjRtST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDZzFJeHFkcUhIdm9EUWdvZ2RMd1Z1bUdPTDRTajBGY1h1RHByd3hQYWRubjd4Y2VQWER3WTd6T0dBQnlueUZ6STZlcFZucVUwSkhkakVMNmpmZGxBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJUY3NlSzY1a3J0TzdyZ25DS0NBUU9GSEVGclVIbGFoNTdHbllnQUZYUG1hRkdsQStXQ2ZBU2tqRWhjTDhFaUxSYk9VUnZpNzJvVGtmVGtiR0FWaDVnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MDE3ODE5MDY6NTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzk3NzM3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS3RWXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLdFYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI0a2hWTkdSMVovdWRQeU5YdDlscFpRc01NRncrWGJzSGtyakVyOGVWVFNzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzOTQwMzIyMDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
