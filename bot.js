const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

// 🔑 Token kommt aus Render (Environment Variable)
const TOKEN = process.env.TOKEN;

client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on('guildMemberAdd', member => {
  console.log("JOIN:", member.user.tag);

  const channel = member.guild.channels.cache.find(c => c.name === "welcome");
  if (!channel) return;

  const embed = new EmbedBuilder()
    .setColor("#d4af37")
    .setTitle("🏆 Welcome to THE S TIER")
    .setDescription(`Welcome ${member}

Choose your roles to unlock the server.

Only the best rise 👑`)
    .setThumbnail(member.user.displayAvatarURL())
    .setFooter({ text: "THE S TIER • Elite Gaming Hub" });

  channel.send({ embeds: [embed] });
});

client.login(TOKEN);