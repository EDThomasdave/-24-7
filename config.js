module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">>", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.com/oauth2/authorize?client_id=841301152934264863&permissions=70282305&scope=bot", //Support Server Link
  Token: process.env.Token || "ODQxMzAxMTUyOTM0MjY0ODYz.YJkwwQ.n1a0RQCTYyKhGgUK84iXQwPq8Io", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "841301152934264863", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "z4xUiafqHk9XADsZVvrUSFiWa4LEXJDV", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "1972", //A Secret like a password
  IconURL:
    "https://media0.giphy.com/media/rjWRb86pl0MVj96XFl/giphy.gif?cid=790b7611e066fcccb8462eeaeb52ac5fdfc78a0b8d8112e0&rid=giphy.gif&ct=g", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "8fa028db3aa143d2a14eef3451fb374b", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "e53800123c8b4e78a4e5c448caea2ed9", //Spotify Client Secret
  },
};