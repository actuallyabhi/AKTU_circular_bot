import Bot from "./utils/SetupBot.js";
import getCirculars from "./utils/GetCircular.js";
import fetchPdf from "./utils/FetchPdf.js";
import fetchLatest from "./utils/FetchCircular.js";
import cron from "node-cron";
import fs from "fs";

Bot.command("circular", async (ctx) => {
  const circular = await getCirculars(1);
  const { name, date, from } = circular[0];
    const pdf = fs.readFileSync("latest.pdf");
    ctx.replyWithDocument(
      { source: pdf, filename: name + ".pdf" },
      { caption: `Name: ${name} \n\nDate: ${date} \nFrom: ${from} \n` }
    );
});



// Bot.command("last10", async (ctx) => {
//   const circular = await getCirculars(10);
//   let index = 0;
//   circular.forEach((circular) => {
//     const { name, date, from, link } = circular;
//     fetchPdf(link).then((pdf) => {
//       ctx.replyWithDocument({
//         source: pdf,
//         filename: index + "-" + name + ".pdf",
//       },
//       { caption: `Serial No: ${index+1} \nName: ${name} \n\nDate: ${date} \nFrom: ${from} \n` })

//     });

//   });
// });

// Bot.command('last10', async (ctx) => {
//     const circular =  await getCirculars(10)
//     circular.forEach((circular, index) => {
//       const {name, date, from, link} = circular;
//       ctx.replyWithHTML(`Id: ${index+1} \n<b>Name:</b> ${name} \n\n<b>Date:</b> ${date} \n<b>From:</b> ${from} \n`);
//       // ctx.reply("Getting PDF..........");
//       fetchPdf(link).then((pdf) => {
//         ctx.replyWithDocument({source: pdf, filename: index +"-"+ name + ".pdf"});
//       });

//     }
//     );
// });

cron.schedule('* 6 * * *', function  () {
  fetchLatest()
  });

Bot.telegram.sendMessage(5381254341, "Bot Started");
 
Bot.launch();
