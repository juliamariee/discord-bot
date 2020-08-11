const Discord = require("discord.js");
const memes = require('./memes.js');
const BOT_TOKEN = 'NzQyODM4MDY1NjcxOTYyNzA0.XzL73A.-gBVMldBtyinpOpMNAwdhSWdTZQ'

const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready for takeoff!');
});

client.on("message", async (msg) => {
  if (msg.guild == '742838820109811712') {
    // REMEMBER!! The guild is the server! if you want to add bot to another server must add server id to this conditional!

    if (msg.content == "!meme") {
      let ind = Math.floor(Math.random() * memes.meme_list.length)
      let meme_title = memes.meme_list[ind].name;
      await msg.channel.send(`Your meme is ${meme_title}`)
      await msg.channel.send(memes.meme_list[ind].url);
    }

    if (msg.content == "!addmeme") {
      await msg.channel.send({
        embed: {
          description: "Message JuliaM#1335 with a title for your meme and a link to the image to get your meme added to the bot!"
        }
      });
    }

    if (msg.content == "!help") {
      await msg.channel.send({
        embed: {
          color: 3447003,
          title: "Commands for meme bot:",
          description: `!meme = get a random meme sent to chat\n!addmeme = instructions for how to add memes to the bot\n!help = view all meme bot commands`
        }
      });
    }
  }
});

client.login(BOT_TOKEN);