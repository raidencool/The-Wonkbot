const commando = require('discord.js-commando');


class ChaunCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'chaun',
            group: 'quotes',
            memberName: 'chaun',
            description: 'I would never do that... 😈',

        });
    }


    async run(message, args) {
        message.reply(" Laura's voice echoed:'Don't violate the leprechaun!' ");
    }

    }

module.exports = ChaunCommand;
