module.exports.config = {
	name: "onbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "HTHB",
	description: "Bật Bot.",
	commandCategory: "Admin",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("Anya💕mới ngủ dậy🥱",event.threadID, () =>process.enter(1))