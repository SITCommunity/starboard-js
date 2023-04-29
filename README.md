<div align="center">
  <p>
    <a href="https://www.npmjs.com/package/starboard-js" target="_blank"><img src="https://nodei.co/npm/starboard-js.png?downloads=true&downloadRank=true&stars=true"></a>
  </p>
  <p>
    <a href="https://nodejs.org/" target="_blank"><img alt="node-current" src="https://img.shields.io/node/v/distube"></a>
    <a href="https://www.npmjs.com/package/starboard-js" target="_blank"><img alt="npm" src="https://img.shields.io/npm/dt/starboard-js"></a>
    <a href="https://www.npmjs.com/package/starboard-js"><img alt="npm latest" src="https://img.shields.io/npm/v/starboard-js/latest?color=blue&label=starboard-js%40latest&logo=npm"></a>
    <a href="https://github.com/skick1234/CyraTeam/starboard-js" target="_blank"><img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/CyraTeam/starboard-js"></a>
    <a href="https://discord.gg/qpT2AeYZRN" target="_blank"><img alt="Discord" src="https://img.shields.io/discord/984857299858382908?label=CyraTeam&logo=discord"></a>
    <a href="https://github.com/CyraTeam/starboard-js"><img alt="Visitor" src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FCyraTeam%2Fstarboard-js&countColor=%2337d67a&style=flat"></a>
    <a href="https://github.com/CyraTeam/starboard-js/issues"><img alt="Issues" src="https://img.shields.io/github/issues/CyraTeam/starboard-js"></a>
    <a href="https://github.com/CyraTeam/starboard-js"><img alt="Commit" src="https://img.shields.io/github/commit-activity/y/CyraTeam/starboard-js?label=Commit%20Activity&logo=github"></a>
    <a href="https://cyrabot.groups.id/"><img alt="Website" src="https://img.shields.io/website?url=https%3A%2F%2Fcyrabot.groups.id%2F"></a>
  </p>
</div>

# starboard-js
[starboard-js](https://github.com/CyraTeam/starboard-js) used for who want add starboard feature to the bot

## Install
- NPM
```
npm i starboard-js
```

## Requirements
- [NodeJS](https://nodejs.org) 16.9.0 or higher
- [DiscordJS](https://discord.js.org) v14

## Example
- bot.js
```js
const { Client } = require('discord.js');
const { Starboard } = require('starboard-js');
const client = ({
    //your client
});

const starboard = new Starboard({
    client: client,
})
module.exports = starboard;
```
- starboard.js
```js
const client = require('your bot.js folder');
const { Events } = require('discord.js');
const starboard = require('your bot.js folder');

client.on(Events.MessageReactionAdd, (reaction) => {
    starboard.listener(reaction);
});
client.on(Events.MessageReactionRemove, (reaction) => {
    starboard.listener(reaction);
});
```

## Join our Discord server
  <a href="https://discord.gg/qpT2AeYZRN" target="_blank"><img alt="Discord" src="https://img.shields.io/discord/984857299858382908?label=CyraTeam&logo=discord"></a>

## Staff
- [@brokenedtzjs](https://github.com/brokenedtzjs) Founder starboard-js

## License & Copyright
```
This Project under MIT License
Copyright (c) 2023-present CyraTeam
```

## Notes
- This package is modified from [reconlx](https://www.npmjs.com/package/reconlx) package, i make this because not updated the package for long time, and i modified this package for latest discord.js version.