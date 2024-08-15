// COMMANDS
require("./bot/middleware/command/commands.command");
require("./bot/middleware/command/start.command");

// ON
require("./bot/middleware/on/other.on");

// CONNECTION (choose one)
// for localhost
require("./bot/connection/local.connection");
// for AWS lambda
// require("./bot/connection/lambda.connection");
