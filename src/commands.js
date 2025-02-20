/**
 * Discord commands manager
 */
import { CommandType } from "./lib/discord.js";

export const STRING_COMMAND_EXAMPLE = {
  name: "string",
  description: "command description.",
  options: [ // Use options if you need the user to make any input with your commands
    {
      name: "text",
      description: "field description.",
      type: CommandType.STRING,
      required: true
    }
  ]
};

export const NUMBER = {
  name: "number",
  description: "Get a random number between 0 and 100.",
  options: []
};

export const EMBED_EXAMPLE = {
  name: "embed",
  description: "command description.",
  options: []
};

export const BUTTON_EXAMPLE = {
  name: "button",
  description: "command description.",
  options: []
};

export const UPLOAD_FILE_EXAMPLE = {
  name: "files",
  description: "command description.",
  options: []
};

export const COMBINED_OPTIONS_EXAMPLE = {
  name: "combined",
  description: "combined options example.",
  options: []
};

export const SHIP = {
  name: "ship",
  description: "Ship two users together, showing their love compatibility percentage and their ship name.",
  options: [
    {
      name: "kokot1",
      description: "First user.",
      type: CommandType.USER,
      required: true
    },
    {
      name: "kokot2",
      description: "User to ship",
      type: CommandType.USER,
      required: true
    }
  ]
};

export const ROZVRH = {
  name: "rozvrh",
  description: "rozvrh",
  options: []
};
export const JIDLO = {
  name: "jidlo",
  description: "jidlo",
  options: []
};
export const STATS = {
  name: "stats",
  description: "stats",
  options: [
    {
      name: "kokot1",
      description: "user",
      type: CommandType.STRING,
      required: true
    }
  ]
};

