module.exports = ({ config, battlefield }) => {
    battlefield.on("playerJoin", ev => battlefield.say(config.joinMessage.replace(/%name%/g, ev.name), ['all']))
    battlefield.on("playerLeave", ev => battlefield.say(config.leaveMessage.replace(/%name%/g, ev.player.name), ['all']))
}
