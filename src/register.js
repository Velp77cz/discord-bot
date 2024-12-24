/**
 * Register slash commands with a local run
 */
import { REST, Routes } from "discord.js";
import * as commands from "./commands.js";
import "dotenv/config";

console.log(process.env.DISCORD_TOKEN)
console.log(process.env.DISCORD_APPLICATION_ID)
const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);
const commandsArray = Object.values(commands);

try {
  console.log("Started refreshing application (/) commands.");
  console.log(process.env.DISCORD_APPLICATION_ID)
  await rest.put(Routes.applicationCommands(process.env.DISCORD_APPLICATION_ID), { body: commandsArray });
  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}