const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""  // put your app url here,
global.email ="louisoseiyeboah96@gmail.com"
global.location="kumasi,Ghana"


global.mongodb= process.env.MONGODB_URI || "3000@cluster0.t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  = process.env.GURL || "https://chat.whatsapp.com/BxXB834YgV8JorX5tCDEEM";
global.website= process.env.GURL|| "https://chat.whatsapp.com/BxXB834YgV8JorX5tCDEEM" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "+233551856564" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,+233551856564";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+233551856564";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false", // disable bot in pm when public mode
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text", // set IMAGE/VIDEO links here
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "+233551856564";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,+233551856564";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "+233551856564";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_35_03_12_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiRU82RjNlQ3NlTDlKdWZ6NjJWbXNacXdQRFhFZ2IwZHhmTGpNbUJON3dVTT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInU4TDJkWHZyKzU3MHJYMXNyckJIcWExb3pESnRoUHdyR3I0a3dNdENTM1k9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiYU1WSS9TYlNOS2l2cmJSbExwbWtqME9lLzFtVWw4QWVQWjY0RWwwZ0Izbz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjdUUVBCeFJPenBBOGNkczAvKytrZHFYM2J6TnhTZFpDZHJDczhLcWh4SE09XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwicUxKZEIyMWpTQlRjNkFObHc3RDFBSWZpY0lqWWw0NGNBZGFYaXNIejVsWT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkMycC9ObVhQVm92QlBCQ0JNMUl6SEVhN283aDU1d0NNdnhhTzVvQVJqd1U9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJXSWY0UzJ3ZTVOdHg0bllLaHhaaFdMSHlkWlN6cVZvZ3pkUkQ2ckxiRVdvPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVEdWaHJjYnhRN1ZCazF4UTFTYm5EU1lEVnRjK2tBZy9QMDNTQk5iYTREYz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCIrRnZtMnJDd2dPM25RWGNXb2JVandjSVFzdEZERmhOcmczNy9zMlRDZmpaRGhZWDNYWWVDK2ROYTErbm9hLzBVRllCdG5KaWJZai9RSHhtOG15S3dqUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6NDEsXCJhZHZTZWNyZXRLZXlcIjpcIjJjdVFSM1BNbHVIRkFqTGllOVIrUDdTcUloeGFCemtVQnBQeHFBaUppaEU9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIyMzM1NTE4NTY1NjRAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiNERFRUY2Njc4Q0IzQTRENTI1N0YwQjM4QzIyNkY5NDFcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMDIyODk1OH1dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MCxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcImN2NGlQOTdaU0ZlS2Z6M0tIaGJEdlFcIixcInBob25lSWRcIjpcIjRmYjc2OWY3LWYyZmEtNGIwMy04MDZkLWE2MTIwOTgzZTE4YlwiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiVjQ0UEgrWk5PR1FrZWhuZE85NE10YnVGV04wPVwifSxcInJlZ2lzdGVyZWRcIjp0cnVlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInYyOFNoLzJCem9oQVhiZGpGUzlMK3R4ZXhDQT1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcInBhaXJpbmdDb2RlXCI6XCI0TE5ZRFM5TVwiLFwibWVcIjp7XCJpZFwiOlwiMjMzNTUxODU2NTY0OjE2QHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjEyNDYwNTY5MTg5MTg3NToxNkBsaWRcIixcIm5hbWVcIjpcIk5leW1hcvCflLHwn6m1XCJ9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNLTzBudkVGRU5PTHdLOEdHQUVnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiUnYxemx3K1dQbjRWcURUeWM2d0xaZ1VIcFVIVGFEc21VUkhUa1Q4OVIwRT1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIkRkVStpQjdzSVlGSm0yZjZXTHg1LzQvK0NZNzgwUTMwa1RxaWd1cE96U3Bjc0djS01OSWloaDhOa3RESmpHcjV6WGp2b1RiTFVtZ2FYOTk1ZzlZMUJnPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiZkc2YmZqWC9hOWdmdnJSNmNyWlZmUXUwM2R2OW5uYWF2QUIrS3kvNHN1QlZXU3JFcmJhSmx0N3NsL1ZaZU5rV3cwNThmSHBxdGtmRG1vdDFZT2hxaXc9PVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjIzMzU1MTg1NjU2NDoxNkBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJVYjljNWNQbGo1K0ZhZzA4bk9zQzJZRkI2VkIwMmc3SmxFUjA1RS9QVWRCXCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMDIyODk1MSxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFIWk9cIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIWk8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjZk9nVW4rMnUxRmpFeG9XTkxmMmFva2c4cTFVYjUvK3ExQi92aWlyY1JVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1Nzk2NTM2NjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTAxMzU4NDM0MTBcIn0iCn0=+UsfCfqbVcIn0sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ0tLMG52RUZFUHFudTY4R0dBRWdBQ2dBXCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJSdjF6bHcrV1BuNFZxRFR5YzZ3TFpnVUhwVUhUYURzbVVSSFRrVDg5UjBFPVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwiWlMva0JFK3VXclJ0Q2k1RE1BdGZkSWp1QUFBT0FtMDNNcjJCdjEzSitTcHRmUTQ4MFFsNzFNWTdZaXZDUTJiVFVrb2p4TWlUY1Y3blB1Yk5lL2pOQVE9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCJNYWtRRk5oMTFoR01CZTkyeFhzNnZucmxhRWVXVWZheUx5TkFFOXZldXdycldnZHp0WVlQTk5QenM2blJhUXdHVE1nMGFPS21lenpsRUs1OExJcVhEZz09XCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjMzNTUxODU2NTY0OjE1QHMud2hhdHNhcHAubmV0XCIsXCJkZXZpY2VJZFwiOjB9LFwiaWRlbnRpZmllcktleVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQlViOWM1Y1BsajUrRmFnMDhuT3NDMllGQjZWQjAyZzdKbEVSMDVFL1BVZEJcIn19XSxcInBsYXRmb3JtXCI6XCJhbmRyb2lkXCIsXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjoxNzEwMTUwNjU2LFwibXlBcHBTdGF0ZUtleUlkXCI6XCJBQUFBQUhaUlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhaUi5qc29uIjogIntcImtleURhdGFcIjpcIkdXeVJWbEQxc0REd29EZ1B1N3VyNFdKUUxYNGlDUW8vOGZaTklsZFJpN0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU3OTY1MzY2NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzEwMTUwNjU4MDU5XCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Neymar-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Neymar-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Neymar",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "5e573c07d7d9061b11b84037a36592c2",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};

























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
 
