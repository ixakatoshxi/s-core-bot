const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(c => c.name === "welcome");
  if (!channel) return;

  const embed = new EmbedBuilder()
    .setColor('#0f0f0f')
    .setTitle('👑 Welcome to THE S TIER')
    .setDescription(`
**${member} has entered the server.**

⚔️ This is not a place for everyone  
🔥 Only loyalty, skill, and presence matter  

🏆 *Only the strongest rise to S Tier*
    `)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setImage('https://i.imgur.com/gjqeMQN.png')
    .setFooter({ text: 'S CORE • THE S TIER' })
    .setTimestamp();

  channel.send({ embeds: [embed] });
});

client.login(process.env.TOKEN);
