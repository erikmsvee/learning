import { triggerNotification } from "./duckTyping";
const isObject = require("./jsUtils");

triggerNotification(
  { send: (msg: string) => console.log(msg) },
  { log: () => console.log("Logger call") }
);

isObject([]);
