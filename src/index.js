const Discord = require("discord.js");
const memes = require('./memes.js');
require('dotenv').config();
const BOT_TOKEN = process.env.BOT_TOKEN;
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready for takeoff!');
});

client.on("message", async(msg) => {
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
                    title: "Fill out the form to add a meme to the meme bot!",
                    description: "https://docs.google.com/forms/d/e/1FAIpQLSe9tlpd_Th9lTjtrskIw0lyxmNIbkZ9IJ8E0Vr0_nl5IXEfWg/viewform?usp=sf_link"
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