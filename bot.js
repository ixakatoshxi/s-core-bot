const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

// Bot erstellen
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

// Token aus Railway
const TOKEN = process.env.TOKEN;

// Ready
client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

// Welcome Event
client.on('guildMemberAdd', member => {
  console.log("JOIN:", member.user.tag);

  const channel = member.guild.channels.cache.get("1496991332973936751");
  if (!channel) {
    console.log("❌ Channel not found");
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

  channel.send({ embeds: [embed] }).catch(console.error);
});

// Login
client.login(TOKEN);

// 🔥 Keep Alive (wichtig für Railway Web Service)
require('http').createServer((req, res) => {
  res.write("alive");
  res.end();
}).listen(3000);
