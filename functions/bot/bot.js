import { Telegraf } from "telegraf"
import dotenv from "dotenv"
import http from "http"
dotenv.config()
const options = {
  hostname: 'jsonplaceholder.typicode.com',
  path: '/posts',
  method: 'GET'
};

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start(ctx => {
  console.log("Received /start command")
  try {
    http.request(options, (res) => {
      let data = ''

      res.on('data', (chunk) => {
          data += chunk;
      });
      
      // Ending the response 
      res.on('end', () => {
       return  ctx.reply(JSON.parse(data)[0].body)
      });

         
    }).on("error", (err) => {
      console.log("Error: ", err)
    }).end()

  } catch (e) {
    console.error("error in start action:", e)
    return ctx.reply("Error occured")
  }

})

// AWS event handler syntax (https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html)
export const handler = async event => {
  try {
    await bot.handleUpdate(JSON.parse(event.body))
    return { statusCode: 200, body: "" }
  } catch (e) {
    console.error("error in handler:", e)
    return { statusCode: 400, body: "This endpoint is meant for bot and telegram communication" }
  }
}