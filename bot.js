const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

const TOKEN = process.env.TOKEN;

client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on('guildMemberAdd', member => {
  console.log("JOIN DETECTED:", member.user.tag); // DEBUG

  const channel = member.guild.channels.cache.get("DEINE_CHANNEL_ID");

  if (!channel) {
    console.log("Channel not found!");
    return;
  }

  const embed = new EmbedBuilder()
    .setColor("#d4af37")
    .setTitle("👑 Welcome to THE S TIER")
    .setDescription(`Welcome ${member} 🔥

You just entered **THE S TIER**.

Stay active, show your presence, and make your mark.

Only the elite rise here.`)
    .setImage("https://i.imgur.com/gjqeMQN.png");

  channel.send({ embeds: [embed] });
});

client.login(TOKEN);
