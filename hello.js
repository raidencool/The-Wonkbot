const commando = require('discord.js-commando');

class HelloCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'hello',
            group: 'basic',
            memberName: 'hello',
            description: 'Best way to introduce yourself!'
        });
    }





    async run(message, args) {
        message.reply("Hello!Have a nice day! :)");
    }

    }


    module.exports = HelloCommand;
