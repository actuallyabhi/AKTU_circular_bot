// import Bot from './utils/SetupBot.js';
// import getCirculars from './utils/GetCircular.js';
// import fetchPdf from './utils/FetchPdf.js';
// import * as bot from './functions/bot/bot.js';
const { Telegraf } = require('telegraf');
const cron = require('node-cron');
const { getCirculars } = require('./utils/GetCircular.js');


// const Bot = new Telegraf(process.env.BOT_TOKEN);

// bot()

// import fetchLatest from '../../utils/FetchCircular.js';

// Bot.command('circular', async (ctx) => {
//     const circular =  await getCirculars(1)
//     const {name, date, from, link} = circular[0];
//     ctx.replyWithHTML(`<b>Name:</b> ${name} \n\n<b>Date:</b> ${date} \n<b>From:</b> ${from} \n`);
//     ctx.reply("Getting PDF..........");
//     fetchPdf(link).then((pdf) => {
//       ctx.replyWithDocument({source: pdf, filename: name + ".pdf"});
//     });
   
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


// cron.schedule('* 6 * * *', function() {
//     fetchLatest(10);
//   });




// bot.launch()

// Bot.launch();









