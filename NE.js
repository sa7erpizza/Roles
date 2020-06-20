const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs"); 
const prefix = 'Ne'

client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});

client.on("ready", () => {
  client.user.setGame(`Nehelp`, "http://twitch.tv/S-F");
  client.user.setStatus("online");
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.isMentioned(client.user)) {
  let a5 = new Discord.RichEmbed()
  .setDescription("```css" +"\n" +"Hi 〈 " +`${message.author.username}` +" 〉 , How Are You My Friend?```")
  .addField("**My Commands**","**`Nehelp` | `Neinfo-roles` | `Neinfo-special`**")
  .setColor("RANDOM")
      .setTimestamp()
      .setFooter(message.guild.name, message.guild.iconURL)
      .setAuthor(message.author.username, message.author.avatarURL);
    message.channel.send(a5);
  }
});

client.on("message", buy => {
if(buy.content.startsWith(prefix+"help")){
let bsy = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("**<:ACHEV:722884017392713839> Buy Roles**")
.setDescription("**Add `"+prefix+"` Before Command**")
.addField("> **Normal Roles**","**`buy-supermember`**")
.addField("> **Gamer Roles**","**`buy-gamer` | `buy-supergamer`**")
.addField("> **VIP Roles**","**`buy-friend` | `buy-vip` | `buy-vip+`** ")
.addField("> **Shop Roles**","**`buy-seller` | `buy-hseller`**")
.addField("> **Special Roles**","**To Know More Info `info-special`**")
.addField("> **More??**","**``info-roles``**")
.setTimestamp()
.setFooter(buy.guild.name, buy.guild.iconURL)
buy.channel.sendEmbed(bsy)
}
})

client.on("message", buy => {
if(buy.content.startsWith(prefix+"info-roles")){
let bsy = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("**<:OSOC:722883947347837048> Info Roles**")
.addField("> **Normal Roles**","**<@&722870548895367168> » 10K**")
.addField("> **Gamer Roles**","**<@&722870547603652641> » 16K | <@&722870546412470324> » 20K**")
.addField("> **VIP Roles**","**<@&722870544663314573> » 25K | <@&722870544646668330> » 30K | <@&722870543916990574> » 40K  **")
.addField("> **Shop Roles**","**<@&723138151408861255> » 60K  | <@&723144757530067046> » 32K  **")
.setTimestamp()
.setFooter(buy.guild.name, buy.guild.iconURL)
buy.channel.sendEmbed(bsy)
}
})

client.on("message", buy => {
if(buy.content.startsWith(prefix+"info-special")){
let bsy = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("**<:TAG:722883980390826085> Info Special**")
.setDescription("**To Get Special Rank Speak With <@436868598300934146>**")
.addField("> **Social Media**","**<@&722870547339542650> » Have +5K Subscribers | <@&722870545636392970> » Have +5K Followers**")
.addField("> **Jobs**","**<@&722875488728645632> » +40 Guilds | <@&722912385601503313> » Buy,Make A Photo Here**")
.addField("> **Super**","**<@&722870541597278290> » Boost `» Ne Server Network Server`**")
.setTimestamp()
.setFooter(buy.guild.name, buy.guild.iconURL)
buy.channel.sendEmbed(bsy)
}
})

let supermember = JSON.parse(fs.readFileSync("./supermember.json", "utf8"));
client.on("message", msg=>{
let id = "436868598300934146"; // Your ID
let role = "» Ne Super Member"; // Rank
let Price = 10000; // Price
let Price2 = Math.floor(Price-(Price*(5/100)));
if(!Price || Price < 1) return;
let cmd = msg.content.split(' ')[0];
if(cmd === `${prefix}buy-supermember`){
if(msg.author.bot) return;
if(!msg.channel.guild) return;
if(msg.member.roles.find(r=>r.name == role)){
let adld = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("**<:XX:722884063857475585>  You Alredy Have The Rank `"+role+"`**")
return msg.channel.sendEmbed(adld)
}
let roleW = msg.guild.roles.find(r=>r.name == role);
if(!roleW){
let ssasd = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle(`I Can't Find This Rank \`${role}\``)
return msg.channel.sendEmbed(ssasd)
}
let cred = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("**<:ACHEV:722884017392713839> Buy __» Ne Vip__**")
.setDescription("**You Have 4min To Send Credits**")
.addField("**<:OSOC:722883947347837048> Command**","```#credit "+msg.guild.members.get(id)+" "+Price+"```")
msg.channel.sendEmbed(cred).then( msgs =>{
const filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`:moneybag: | ${msg.author.username}, has transferred \`$${Price2}\` to ${msg.guild.members.get(id)}`);
msg.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })
.then( collected =>{
msgs.delete()
let grls = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("**<:RR:722884055682777090> Congratulations, You Have A `"+role+"` Rank**")
msg.channel.sendEmbed(grls);
msg.member.addRole(roleW);
return
}).catch(e => {});
})
}
})

function save(){
  fs.writeFile("./supermember.json", JSON.stringify(supermember), (err) => {
    if (err) console.log(err)
  });

}

let gamer = JSON.parse(fs.readFileSync("./gamer.json", "utf8"));
client.on("message", msg=>{
let id = "436868598300934146"; // Your ID
let role = "» Ne Gamer"; // Rank
let Price = 16000; // Price
let Price2 = Math.floor(Price-(Price*(5/100)));
if(!Price || Price < 1) return;
let cmd = msg.content.split(' ')[0];
if(cmd === `${prefix}buy-gamer`){
if(msg.author.bot) return;
if(!msg.channel.guild) return;
if(msg.member.roles.find(r=>r.name == role)){
let adld = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("**<:XX:722884063857475585>  You Alredy Have The Rank `"+role+"`**")
return msg.channel.sendEmbed(adld)
}
let roleW = msg.guild.roles.find(r=>r.name == role);
if(!roleW){
let ssasd = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle(`I Can't Find This Rank \`${role}\``)
return msg.channel.sendEmbed(ssasd)
}
let cred = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("**<:ACHEV:722884017392713839> Buy __» Ne Vip__**")
.setDescription("**You Have 4min To Send Credits**")
.addField("**<:OSOC:722883947347837048> Command**","```#credit "+msg.guild.members.get(id)+" "+Price+"```")
msg.channel.sendEmbed(cred).then( msgs =>{
const filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`:moneybag: | ${msg.author.username}, has transferred \`$${Price2}\` to ${msg.guild.members.get(id)}`);
msg.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })
.then( collected =>{
msgs.delete()
let grls = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("**<:RR:722884055682777090> Congratulations, You Have A `"+role+"` Rank**")
msg.channel.sendEmbed(grls);
msg.member.addRole(roleW);
return
}).catch(e => {});
})
}
})

function save(){
  fs.writeFile("./gamer.json", JSON.stringify(gamer), (err) => {
    if (err) console.log(err)
  });

}

let supergamer = JSON.parse(fs.readFileSync("./supergamer.json", "utf8"));
client.on("message", msg=>{
let id = "436868598300934146"; // Your ID
let role = "» Ne Super Gamer"; // Rank
let Price = 20000; // Price
let Price2 = Math.floor(Price-(Price*(5/100)));
if(!Price || Price < 1) return;
let cmd = msg.content.split(' ')[0];
if(cmd === `${prefix}buy-supergamer`){
if(msg.author.bot) return;
if(!msg.channel.guild) return;
if(msg.member.roles.find(r=>r.name == role)){
let adld = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("**<:XX:722884063857475585>  You Alredy Have The Rank `"+role+"`**")
return msg.channel.sendEmbed(adld)
}
let roleW = msg.guild.roles.find(r=>r.name == role);
if(!roleW){
let ssasd = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle(`I Can't Find This Rank \`${role}\``)
return msg.channel.sendEmbed(ssasd)
}
let cred = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("**<:ACHEV:722884017392713839> Buy __» Ne Vip__**")
.setDescription("**You Have 4min To Send Credits**")
.addField("**<:OSOC:722883947347837048> Command**","```#credit "+msg.guild.members.get(id)+" "+Price+"```")
msg.channel.sendEmbed(cred).then( msgs =>{
const filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`:moneybag: | ${msg.author.username}, has transferred \`$${Price2}\` to ${msg.guild.members.get(id)}`);
msg.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })
.then( collected =>{
msgs.delete()
let grls = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("**<:RR:722884055682777090> Congratulations, You Have A `"+role+"` Rank**")
msg.channel.sendEmbed(grls);
msg.member.addRole(roleW);
return
}).catch(e => {});
})
}
})

function save(){
  fs.writeFile("./supergamer.json", JSON.stringify(supergamer), (err) => {
    if (err) console.log(err)
  });

}

let friend = JSON.parse(fs.readFileSync("./friend.json", "utf8"));
client.on("message", msg=>{
let id = "436868598300934146"; // Your ID
let role = "» Ne Friend"; // Rank
let Price = 25000; // Price
let Price2 = Math.floor(Price-(Price*(5/100)));
if(!Price || Price < 1) return;
let cmd = msg.content.split(' ')[0];
if(cmd === `${prefix}buy-friend`){
if(msg.author.bot) return;
if(!msg.channel.guild) return;
if(msg.member.roles.find(r=>r.name == role)){
let adld = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("**<:XX:722884063857475585>  You Alredy Have The Rank `"+role+"`**")
return msg.channel.sendEmbed(adld)
}
let roleW = msg.guild.roles.find(r=>r.name == role);
if(!roleW){
let ssasd = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle(`I Can't Find This Rank \`${role}\``)
return msg.channel.sendEmbed(ssasd)
}
let cred = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("**<:ACHEV:722884017392713839> Buy __» Ne Vip__**")
.setDescription("**You Have 4min To Send Credits**")
.addField("**<:OSOC:722883947347837048> Command**","```#credit "+msg.guild.members.get(id)+" "+Price+"```")
msg.channel.sendEmbed(cred).then( msgs =>{
const filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`:moneybag: | ${msg.author.username}, has transferred \`$${Price2}\` to ${msg.guild.members.get(id)}`);
msg.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })
.then( collected =>{
msgs.delete()
let grls = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("**<:RR:722884055682777090> Congratulations, You Have A `"+role+"` Rank**")
msg.channel.sendEmbed(grls);
msg.member.addRole(roleW);
return
}).catch(e => {});
})
}
})

function save(){
  fs.writeFile("./friend.json", JSON.stringify(friend), (err) => {
    if (err) console.log(err)
  });

}

let vip = JSON.parse(fs.readFileSync("./vip.json", "utf8"));
client.on("message", msg=>{
let id = "436868598300934146"; // Your ID
let role = "» Ne Vip"; // Rank
let Price = 30000; // Price
let Price2 = Math.floor(Price-(Price*(5/100)));
if(!Price || Price < 1) return;
let cmd = msg.content.split(' ')[0];
if(cmd === `${prefix}buy-vip`){
if(msg.author.bot) return;
if(!msg.channel.guild) return;
if(msg.member.roles.find(r=>r.name == role)){
let adld = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("**<:XX:722884063857475585>  You Alredy Have The Rank `"+role+"`**")
return msg.channel.sendEmbed(adld)
}
let roleW = msg.guild.roles.find(r=>r.name == role);
if(!roleW){
let ssasd = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle(`I Can't Find This Rank \`${role}\``)
return msg.channel.sendEmbed(ssasd)
}
let cred = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("**<:ACHEV:722884017392713839> Buy __» Ne Vip__**")
.setDescription("**You Have 4min To Send Credits**")
.addField("**<:OSOC:722883947347837048> Command**","```#credit "+msg.guild.members.get(id)+" "+Price+"```")
msg.channel.sendEmbed(cred).then( msgs =>{
const filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`:moneybag: | ${msg.author.username}, has transferred \`$${Price2}\` to ${msg.guild.members.get(id)}`);
msg.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })
.then( collected =>{
msgs.delete()
let grls = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("**<:RR:722884055682777090> Congratulations, You Have A `"+role+"` Rank**")
msg.channel.sendEmbed(grls);
msg.member.addRole(roleW);
return
}).catch(e => {});
})
}
})

function save(){
  fs.writeFile("./vip.json", JSON.stringify(vip), (err) => {
    if (err) console.log(err)
  });

}

let vipplus = JSON.parse(fs.readFileSync("./vipplus.json", "utf8"));
client.on("message", msg=>{
let id = "436868598300934146"; // Your ID
let role = "» Ne Vip+"; // Rank
let Price = 40000; // Price
let Price2 = Math.floor(Price-(Price*(5/100)));
if(!Price || Price < 1) return;
let cmd = msg.content.split(' ')[0];
if(cmd === `${prefix}buy-vip+`){
if(msg.author.bot) return;
if(!msg.channel.guild) return;
if(msg.member.roles.find(r=>r.name == role)){
let adld = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("**<:XX:722884063857475585>  You Alredy Have The Rank `"+role+"`**")
return msg.channel.sendEmbed(adld)
}
let roleW = msg.guild.roles.find(r=>r.name == role);
if(!roleW){
let ssasd = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle(`I Can't Find This Rank \`${role}\``)
return msg.channel.sendEmbed(ssasd)
}
let cred = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("**<:ACHEV:722884017392713839> Buy __» Ne Vip__**")
.setDescription("**You Have 4min To Send Credits**")
.addField("**<:OSOC:722883947347837048> Command**","```#credit "+msg.guild.members.get(id)+" "+Price+"```")
msg.channel.sendEmbed(cred).then( msgs =>{
const filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`:moneybag: | ${msg.author.username}, has transferred \`$${Price2}\` to ${msg.guild.members.get(id)}`);
msg.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })
.then( collected =>{
msgs.delete()
let grls = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("**<:RR:722884055682777090> Congratulations, You Have A `"+role+"` Rank**")
msg.channel.sendEmbed(grls);
msg.member.addRole(roleW);
return
}).catch(e => {});
})
}
})

function save(){
  fs.writeFile("./vipplus.json", JSON.stringify(vipplus), (err) => {
    if (err) console.log(err)
  });

}

let seller = JSON.parse(fs.readFileSync("./seller.json", "utf8"));
client.on("message", msg=>{
let id = "436868598300934146"; // Your ID
let role = "» Ne Seller"; // Rank
let Price = 60000; // Price
let Price2 = Math.floor(Price-(Price*(5/100)));
if(!Price || Price < 1) return;
let cmd = msg.content.split(' ')[0];
if(cmd === `${prefix}buy-seller`){
if(msg.author.bot) return;
if(!msg.channel.guild) return;
if(msg.member.roles.find(r=>r.name == role)){
let adld = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("**<:XX:722884063857475585>  You Alredy Have The Rank `"+role+"`**")
return msg.channel.sendEmbed(adld)
}
let roleW = msg.guild.roles.find(r=>r.name == role);
if(!roleW){
let ssasd = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle(`I Can't Find This Rank \`${role}\``)
return msg.channel.sendEmbed(ssasd)
}
let cred = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("**<:ACHEV:722884017392713839> Buy __» Ne Vip__**")
.setDescription("**You Have 4min To Send Credits**")
.addField("**<:OSOC:722883947347837048> Command**","```#credit "+msg.guild.members.get(id)+" "+Price+"```")
msg.channel.sendEmbed(cred).then( msgs =>{
const filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`:moneybag: | ${msg.author.username}, has transferred \`$${Price2}\` to ${msg.guild.members.get(id)}`);
msg.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })
.then( collected =>{
msgs.delete()
let grls = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("**<:RR:722884055682777090> Congratulations, You Have A `"+role+"` Rank**")
msg.channel.sendEmbed(grls);
msg.member.addRole(roleW);
return
}).catch(e => {});
})
}
})

function save(){
  fs.writeFile("./seller.json", JSON.stringify(seller), (err) => {
    if (err) console.log(err)
  });

}

let hseller = JSON.parse(fs.readFileSync("./hseller.json", "utf8"));
client.on("message", msg=>{
let id = "436868598300934146"; // Your ID
let role = "» Ne Help Seller"; // Rank
let Price = 32000; // Price
let Price2 = Math.floor(Price-(Price*(5/100)));
if(!Price || Price < 1) return;
let cmd = msg.content.split(' ')[0];
if(cmd === `${prefix}buy-hseller`){
if(msg.author.bot) return;
if(!msg.channel.guild) return;
if(msg.member.roles.find(r=>r.name == role)){
let adld = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("**<:XX:722884063857475585>  You Alredy Have The Rank `"+role+"`**")
return msg.channel.sendEmbed(adld)
}
let roleW = msg.guild.roles.find(r=>r.name == role);
if(!roleW){
let ssasd = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle(`I Can't Find This Rank \`${role}\``)
return msg.channel.sendEmbed(ssasd)
}
let cred = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("**<:ACHEV:722884017392713839> Buy __» Ne Vip__**")
.setDescription("**You Have 4min To Send Credits**")
.addField("**<:OSOC:722883947347837048> Command**","```#credit "+msg.guild.members.get(id)+" "+Price+"```")
msg.channel.sendEmbed(cred).then( msgs =>{
const filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`:moneybag: | ${msg.author.username}, has transferred \`$${Price2}\` to ${msg.guild.members.get(id)}`);
msg.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })
.then( collected =>{
msgs.delete()
let grls = new Discord.RichEmbed()
.setColor("GOLD")
.setTitle("**<:RR:722884055682777090> Congratulations, You Have A `"+role+"` Rank**")
msg.channel.sendEmbed(grls);
msg.member.addRole(roleW);
return
}).catch(e => {});
})
}
})

function save(){
  fs.writeFile("./hseller.json", JSON.stringify(hseller), (err) => {
    if (err) console.log(err)
  });

}

client.login('NzA4ODA4NTEyMTU4ODI2NjQz.Xuqnrg.vwfoxFQ8GEbmlylBk4EOpQlmBec');