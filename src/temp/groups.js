let bodyText1 =
  'Welcome to Sweet Tea server, a fun server where can simply just get to know new people from around the world, were still quiet a new server but we are growing!'
let groupTags1 = ['Socialising', 'Gaming', 'Giveaways', 'Active-admins']
let groupTags2 = ['Minecraft', 'Rust', 'Valorant', 'Youtube']

function getRandomTags() {
  let tags = [
    'All',
    'E-Sports',
    'Chilled',
    'MMO',
    'Anime',
    'Racing',
    'Social',
    'Among Us',
    'Cosplay',
    'Minecraft',
    'Xbox',
    'Streaming',
    'Emotes',
    'Valorant',
    'Community',
    'Entertainment',
    'Role-Playing',
    'Playstation',
    'Developer',
    'Meme',
    'Gaming',
    'gamer',
    'battleroyale ',
    'retrogaming ',
    'modernwarfare ',
    'destiny ',
    'csgo ',
    'pubgmobile ',
    'nintendoswitch ',
    'pcgamer ',
    'follow ',
    'esports ',
    'meme ',
    'bhfyp',
    'instagamer ',
    'warzone'
  ]
  let shuffledTags = tags.sort(() => Math.random() - 0.5)
  return shuffledTags.splice(4)
}

function getRandomOverview() {
  let list = [
    'http://twitch.tv/xandygirl Twitch Affiliate, South African, Happy place, Horror Games, Handstands.',
    '🌈 Twitch Streamer | 💜 Savage | 🎙️Content Creator | 🎮 Geek Culture | 🍕 Foodie | 🇿🇦 Cosplayer | 🦊 Foxytech Affiliate',
    'I am a variety streamer from South Africa that loves talking and playing games!',
    "Welcome to my channel where I'm just trying to be a diverse addition to the South African gaming & streaming scene.",
    'A group of people who like to game and socialize.hope to see you in the server and make some new friends.'
  ]
  let maxIndex = list.length > 0 ? list.length : 0
  let randomIndex = Math.floor(Math.random() * maxIndex)
  return list[randomIndex]
}

let theList = [
  {
    name: 'TheMainSalad',
    image: '/img/groups/salad.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Bravado Gaming',
    image: '/img/groups/bravado.jpg',
    tags: getRandomTags(),
    overview:
      'South Africa’s premier #esports team and gaming lifestyle brand. Sponsors: @Alienware @intelgaming Discover: http://linktr.ee/bravadogaming'
  },
  {
    name: 'Energy Esports',
    image: '/img/groups/energy.jpg',
    tags: getRandomTags(),
    overview:
      'Founded in 2012, Energy Esports is a professional multi-gaming organisation (MGO) that competes at the highest level of competitive Gaming in South Africa.'
  },
  {
    name: 'Big 5 Esports',
    image: '/img/groups/big5.jpg',
    tags: getRandomTags(),
    overview: 'Electronic Sports & Gaming Entertainment Organization 🇿🇦'
  },
  {
    name: 'Goliath Gaming',
    image: '/img/groups/goliath.jpg',
    tags: getRandomTags(),
    overview:
      'Flag of South Africaesports team: FIFA, Fortnite, Street Fighter, Tekken, StarCraft & Counter-Strike #GoliathGamingArmy Powered by @PredatorAfrica.'
  },
  {
    name: 'The A-Team Community ZA',
    image: '/img/groups/a_team.jpg',
    tags: getRandomTags(),
    overview: '😊Meet Cool New Members And Soon To Be Friends'
  },
  {
    name: 'Legacy ZA',
    image: '/img/groups/legacy.jpg',
    tags: ['Gaming', 'Rust', 'Scum', 'Youtube'],
    overview: 'PUBG and variety streamer'
  },
  {
    name: 'Sinister5',
    image: '/img/groups/sinister.jpg',
    tags: getRandomTags(),
    overview:
      'South African MGO with teams participating in #Dota2, #CSGO, #FIFA, #PUBG, #Simracing & #R6Siege'
  },
  {
    name: 'Power supremacy😫',
    image: '/img/groups/power.jpg',
    tags: getRandomTags(),
    overview:
      'A fun, friendly server for south Africans who wanna make friends we play a lot of games,come to join us always open to suggestions also be scared of the admin(Jk) but the owner is nice.😁'
  },
  {
    name: 'Chill Centeral ZA',
    image: '/img/groups/chill.jpg',
    tags: getRandomTags(),
    overview: 'I like long walks on the beach'
  },
  {
    name: 'Telkom VS Gaming',
    image: '/img/groups/telkom.jpg',
    tags: getRandomTags(),
    overview:
      'African gaming brand and the leading platform for esports in South Africa. Dare to be better. #TelkomVSGaming #ComicConAfrica'
  },
  {
    name: '🌙Sleepover🌟',
    image: '/img/groups/sleepover.jpg',
    tags: getRandomTags(),
    overview:
      'We welcome you to SLEEPOVER. What makes our server special, you ask?'
  },
  {
    name: 'Gamer-Topia',
    image: '/img/groups/topia.jpg',
    tags: getRandomTags(),
    overview:
      'Were a pretty chill community people who like to talk about art and gaming and stuff. If you have trouble making friends youll fit right in.'
  },
  {
    name: 'SUGAR N’ SPICE',
    image: '/img/groups/spice.jpg',
    tags: getRandomTags(),
    overview:
      '(14+) This server is for gamers who are looking to talk, play, and become friends with fellow players!'
  },
  {
    name: 'Banana Beach',
    image: '/img/groups/banana.jpg',
    tags: getRandomTags(),
    overview:
      'A fun server with lots of stuff and bots great community many active members.'
  },
  {
    name: 'The SUSmigos 🌮',
    image: '/img/groups/sus.jpg',
    tags: getRandomTags(),
    overview:
      'A small, exclusive group of active gamers with nightly play sessions. Very Among Us focused, but also featuring Jackbox, Poker, UNO, Gartic Phone, Skribbl.io, All Bad Cards, Bombergrounds, and more!'
  },
  {
    name: 'Sweet Tea',
    image: '/img/groups/tea.jpg',
    tags: getRandomTags(),
    overview:
      'Welcome to Sweet Tea server, a fun server where can simply just get to know new people from around the world, were still quiet a new server but we are growing!'
  },
  {
    name: 'Hogwarts',
    image: '/img/groups/hogwarts.jpg',
    tags: getRandomTags(),
    overview:
      'Harry Potter Role play and chatting server with So many funny bots Join here. But remember no NSWF. SO we invite you to join. Enjoy the server'
  },
  {
    name: 'Cat Café | Anime & Community',
    image: '/img/groups/cafe.jpg',
    tags: getRandomTags(),
    overview:
      'Cat Café is a great place to socialize and make new Friends! 🌺 Feel welcome to Hangout with over 1500+ Friendly Anime Fans 🎀 60+Self Roles'
  },
  {
    name: 'Anime Haven',
    image: '/img/groups/Anime Haven.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Anti-Social Society',
    image: '/img/groups/Anti-Social Society.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Atarashii',
    image: '/img/groups/Atarashii.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Cali Anime Social',
    image: '/img/groups/Cali Anime Social.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Crunchyroll',
    image: '/img/groups/Crunchyroll.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Gaming & Chats',
    image: '/img/groups/Gaming & Chats.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Luna Academy  Anime & Gaming',
    image: '/img/groups/Luna Academy  Anime & Gaming.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Pokemon Panda Palace',
    image: '/img/groups/Pokemon Panda Palace.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'RWBY FNDM',
    image: '/img/groups/RWBY FNDM.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Shimeji Simulation Discord',
    image: '/img/groups/Shimeji Simulation Discord.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Smithtainment Gaming',
    image: '/img/groups/Smithtainment Gaming.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Sushiba',
    image: '/img/groups/Sushiba.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'The Persona SMT Server',
    image: '/img/groups/The Persona SMT Server.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'The Raptors Hub',
    image: '/img/groups/The Raptors Hub.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'TrueGamers',
    image: '/img/groups/TrueGamers.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Karuta WRLD',
    image: '/img/groups/karuta.jpg',
    tags: getRandomTags(),
    overview:
      '¶We are a friendly and helpful server mainly based around the discord bot Karuta and we have:'
  },
  {
    name: '⭐ PokeXperience ⭐',
    image: '/img/groups/⭐ PokeXperience ⭐.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'a crumb of egirls pls',
    image: '/img/groups/a crumb of egirls pls.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'AFK Arena',
    image: '/img/groups/AFK Arena.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Among Us Community',
    image: '/img/groups/Among Us Community.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Among Us France',
    image: '/img/groups/Among Us France.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Animal Crossing 3DS en Español🇪🇸',
    image: '/img/groups/Animal Crossing 3DS en Español🇪🇸.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: "Army's Chillin",
    image: "/img/groups/Army's Chillin.png",
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'BIG Games',
    image: '/img/groups/BIG Games.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: "Blathers' Library",
    image: "/img/groups/Blathers' Library.png",
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Dank Daily',
    image: '/img/groups/Dank Daily.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Dank Trades',
    image: '/img/groups/Dank Trades.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Dark Traders',
    image: '/img/groups/Dark Traders.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Dynamo Gaming',
    image: '/img/groups/Dynamo Gaming.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'FALLEN 🌸 Social ★ Anime ★ Art ★ Emote & Emoji & Stickers',
    image:
      '/img/groups/FALLEN 🌸 Social ★ Anime ★ Art ★ Emote & Emoji & Stickers.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Fellow Epics',
    image: '/img/groups/Fellow Epics.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'FNCS Scrims EU',
    image: '/img/groups/FNCS Scrims EU.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'FNPL Console LFG',
    image: '/img/groups/FNPL Console LFG.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Genshin Impact Unofficial',
    image: '/img/groups/Genshin Impact Unofficial.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'GIFLAND',
    image: '/img/groups/GIFLAND.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Islanders',
    image: '/img/groups/Islanders.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'ISO GAMING COMMUNITY',
    image: '/img/groups/ISO GAMING COMMUNITY.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Jailbreak',
    image: '/img/groups/Jailbreak.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'KBBQ Social • Emotes & Emojis • Anime • Music • Nitro',
    image:
      '/img/groups/KBBQ Social • Emotes & Emojis • Anime • Music • Nitro.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'KFCEATBOX',
    image: '/img/groups/KFCEATBOX.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Kungarna East Scrims',
    image: '/img/groups/Kungarna East Scrims.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Love, Death & Gaming',
    image: '/img/groups/Love, Death & Gaming.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Lunaris Labs',
    image: '/img/groups/Lunaris Labs.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Memeology',
    image: '/img/groups/Memeology.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Mobile Legends Bang Bang',
    image: '/img/groups/Mobile Legends Bang Bang.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'MrBeast Gaming',
    image: '/img/groups/MrBeast Gaming.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Naruto WRLD',
    image: '/img/groups/Naruto WRLD.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Neo',
    image: '/img/groups/Neo.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'NOBRU',
    image: '/img/groups/NOBRU.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Nookazon',
    image: '/img/groups/Nookazon.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Path of Exile',
    image: '/img/groups/Path of Exile.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'PewDiePie Floor Gang',
    image: '/img/groups/PewDiePie Floor Gang.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'PollitoCrew🐤',
    image: '/img/groups/PollitoCrew🐤.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'RBLX.Land Community',
    image: '/img/groups/RBLX.Land Community.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Rise of Kingdoms',
    image: '/img/groups/Rise of Kingdoms.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Sakura Onsen Art & Anime',
    image: '/img/groups/Sakura Onsen Art & Anime.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Social Lites',
    image: '/img/groups/Social Lites.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Socialize Fun & Gaming',
    image: '/img/groups/Socialize Fun & Gaming.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'TacoShack Official Server',
    image: '/img/groups/TacoShack Official Server.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Universo do Godenot',
    image: '/img/groups/Universo do Godenot.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Villager Esports',
    image: '/img/groups/Villager Esports.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Voicemod',
    image: '/img/groups/Voicemod.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Wolves Of Alt Street',
    image: '/img/groups/Wolves Of Alt Street.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'WorldBox - God Simulator',
    image: '/img/groups/WorldBox - God Simulator.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: "zipporah's cottage.png",
    image: "/img/groups/zipporah's cottage.png",
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: '🍕 UnbelievaBoat 🍕',
    image: '/img/groups/🍕 UnbelievaBoat 🍕.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  }
]

let shuffledList = theList.sort(() => Math.random() - 0.5)

export default shuffledList
