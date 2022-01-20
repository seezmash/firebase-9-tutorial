function getRandomTags() {
  let tags = [
    "All",
    "E-Sports",
    "Chilled",
    "MMO",
    "Anime",
    "Racing",
    "Social",
    "Among Us",
    "Cosplay",
    "Minecraft",
    "Xbox",
    "Streaming",
    "Emotes",
    "Valorant",
    "Community",
    "follow ",
    "esports ",
    "meme ",
    "bhfyp",
    "instagamer ",
    "warzone",
  ]
  let shuffledTags = tags.sort(() => Math.random() - 0.5)
  return shuffledTags.splice(4)
}

function getRandomTitle() {
  let tags = [
    "All",
    "E-Sports",
    "Chilled",
    "MMO",
    "Anime",
    "Racing",
    "Social",
    "Among Us",
    "Cosplay",
    "Minecraft",
    "Xbox",
    "Streaming",
    "Emotes",
    "Valorant",
    "Community",
    "follow ",
    "esports ",
    "meme ",
    "bhfyp",
    "instagamer ",
    "warzone",
  ]
  let shuffledTags = tags.sort(() => Math.random() - 0.5)
  return shuffledTags.splice(4)
}

function getRandomOverview() {
  let list = [
    "http://twitch.tv/xandygirl Twitch Affiliate, South African, Happy place, Horror Games, Handstands.",
    "I am a variety streamer from South Africa that loves talking and playing games!",
    "Welcome to my channel where I'm just trying to be a diverse addition to the South African gaming & streaming scene.",
  ]
  let maxIndex = list.length > 0 ? list.length : 0
  let randomIndex = Math.floor(Math.random() * maxIndex)
  return list[randomIndex]
}

let theList = [
  {
    user: "Otter_Lady",
    image: "./img/streamers/Otter_Lady.png",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "cupperbutt",
    image: "./img/streamers/cupperbutt.png",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "Duncstar",
    image: "./img/streamers/Duncstar.png",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "ProfoundRice",
    image: "./img/streamers/ProfoundRice.png",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "TheCaramelGamer",
    image: "./img/streamers/TheCaramelGamer.png",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "The_Roast_Potat0",
    image: "./img/streamers/The_Roast_Potat0.png",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "XandYgirl",
    image: "./img/streamers/XandYgirl.png",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "toxicbunny__",
    image: "./img/streamers/toxicbunny__.png",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "TwistedxXxGaming",
    image: "./img/streamers/TwistedxXxGaming.png",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "viazUUApex",
    image: "./img/streamers/viazUUApex.png",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "Alex_Zedra",
    image: "./img/streamers/Alex_Zedra.png",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "arriesishier",
    image: "./img/streamers/arriesishier.png",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "Autumn_za",
    image: "./img/streamers/Autumn_za.png",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "CalypsoVibes",
    image: "./img/streamers/CalypsoVibes.png",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "CodecsGaming",
    image: "./img/streamers/CodecsGaming.png",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "crowegamingg",
    image: "./img/streamers/crowegamingg.png",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "d1sh88",
    image: "./img/streamers/d1sh88.png",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "DarioMocciaTwitch",
    image: "./img/streamers/DarioMocciaTwitch.png",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "Dead_Oryx",
    image: "./img/streamers/Dead_Oryx.png",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "WagamamaTV",
    image: "./img/streamers/WagamamaTV.jpeg",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "warlock_za",
    image: "./img/streamers/warlock_za.png",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "YoDa",
    image: "./img/streamers/YoDa.png",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "zaffa_geek",
    image: "./img/streamers/zaffa_geek.png",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
]

let shuffledList = theList.sort(() => Math.random() - 0.5)

export default shuffledList
