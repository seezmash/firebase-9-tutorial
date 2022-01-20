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
    image: "./img/podcasts/0.jpg",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "cupperbutt",
    image: "./img/podcasts/2.jpg",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "Duncstar",
    image: "./img/podcasts/3.jpg",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "ProfoundRice",
    image: "./img/podcasts/5.jpg",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "TheCaramelGamer",
    image: "./img/podcasts/6.jpg",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "The_Roast_Potat0",
    image: "./img/podcasts/7.jpg",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "XandYgirl",
    image: "./img/podcasts/8.jpg",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "toxicbunny__",
    image: "./img/podcasts/10.jpg",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "TwistedxXxGaming",
    image: "./img/podcasts/11.jpg",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "viazUUApex",
    image: "./img/podcasts/12.jpg",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "Alex_Zedra",
    image: "./img/podcasts/13.jpg",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "arriesishier",
    image: "./img/podcasts/14.jpg",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "Autumn_za",
    image: "./img/podcasts/15.jpg",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "CalypsoVibes",
    image: "./img/podcasts/16.jpg",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "CodecsGaming",
    image: "./img/podcasts/17.jpg",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "crowegamingg",
    image: "./img/podcasts/18.jpg",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "d1sh88",
    image: "./img/podcasts/19.jpg",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "DarioMocciaTwitch",
    image: "./img/podcasts/20.jpg",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "Dead_Oryx",
    image: "./img/podcasts/21.jpg",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "WagamamaTV",
    image: "./img/podcasts/22.jpg",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "warlock_za",
    image: "./img/podcasts/23.jpg",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "YoDa",
    image: "./img/podcasts/24.jpg",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "zaffa_geek",
    image: "./img/podcasts/25.jpg",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "YoDa",
    image: "./img/podcasts/26.jpg",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
  {
    user: "YoDa",
    image: "./img/podcasts/28.jpg",
    tags: getRandomTags(),
    title: getRandomTitle(),
    overview: getRandomOverview(),
  },
]

let shuffledList = theList.sort(() => Math.random() - 0.5)

export default shuffledList
