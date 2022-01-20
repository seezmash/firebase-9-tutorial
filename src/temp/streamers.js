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
    "Welcome to my channel where I'm just trying to be a diverse addition to the South African gaming & streaming scene."
  ]
  let maxIndex = list.length > 0 ? list.length : 0
  let randomIndex = Math.floor(Math.random() * maxIndex)
  return list[randomIndex]
}

let theList = [
  {
    name: 'Otter_Lady',
    image: './img/streamers/Otter_Lady.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'cupperbutt',
    image: './img/streamers/cupperbutt.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Duncstar',
    image: './img/streamers/Duncstar.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'ProfoundRice',
    image: './img/streamers/ProfoundRice.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'EliteOpzzz',
    image: './img/streamers/EliteOpzzz.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'AndrovaZA',
    image: './img/streamers/AndrovaZA.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'AngelAnna01',
    image: './img/streamers/AngelAnna01.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'CamCeej',
    image: './img/streamers/CamCeej.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'candi_rocket',
    image: './img/streamers/candi_rocket.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'chloe_za',
    image: './img/streamers/chloe_za.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Chxxnky',
    image: './img/streamers/Chxxnky.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Cyndalive',
    image: './img/streamers/Cyndalive.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'ellihandro',
    image: './img/streamers/ellihandro.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Fluffeh1080p',
    image: './img/streamers/Fluffeh1080p.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Scarlet__xo',
    image: './img/streamers/scarlet__xo.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'DangerousDaveLIVE',
    image: './img/streamers/DangerousDaveLIVE.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Jessica Ricketts',
    image: './img/streamers/jessicaricketts.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'HairyKnees',
    image: './img/streamers/hairyknees.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'MissLadyJay',
    image: './img/streamers/missladyjay_za.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Soldin',
    image: './img/streamers/soldin_.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Spyro_ZA',
    image: './img/streamers/spyro_za.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'LeiLeiBonaenae',
    image: './img/streamers/LeiLeiBonaenae.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'SvG3PanDa',
    image: './img/streamers/SvG3PanDa.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'MoonFlowerZA',
    image: './img/streamers/MoonFlowerZA.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'lewolfy',
    image: './img/streamers/lewolfy.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'lumpees',
    image: './img/streamers/lumpees.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'TheCaramelGamer',
    image: './img/streamers/TheCaramelGamer.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'The_Roast_Potat0',
    image: './img/streamers/The_Roast_Potat0.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'XandYgirl',
    image: './img/streamers/XandYgirl.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'toxicbunny__',
    image: './img/streamers/toxicbunny__.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'TwistedxXxGaming',
    image: './img/streamers/TwistedxXxGaming.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'viazUUApex',
    image: './img/streamers/viazUUApex.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Alex_Zedra',
    image: './img/streamers/Alex_Zedra.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'arriesishier',
    image: './img/streamers/arriesishier.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Autumn_za',
    image: './img/streamers/Autumn_za.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'CalypsoVibes',
    image: './img/streamers/CalypsoVibes.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'CodecsGaming',
    image: './img/streamers/CodecsGaming.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'crowegamingg',
    image: './img/streamers/crowegamingg.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'd1sh88',
    image: './img/streamers/d1sh88.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'DarioMocciaTwitch',
    image: './img/streamers/DarioMocciaTwitch.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Dead_Oryx',
    image: './img/streamers/Dead_Oryx.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Donimay',
    image: './img/streamers/Donimay.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'DropsByPonk',
    image: './img/streamers/DropsByPonk.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'DuckKnuckle_ZA',
    image: './img/streamers/DuckKnuckle_ZA.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Elwind',
    image: './img/streamers/Elwind.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'faatpandaa',
    image: './img/streamers/faatpandaa.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'giraffe_monster',
    image: './img/streamers/giraffe_monster.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'grizzzly_gaming',
    image: './img/streamers/grizzzly_gaming.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'HashtagChess',
    image: './img/streamers/HashtagChess.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'HawaiizYETI',
    image: './img/streamers/HawaiizYETI.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'IAmBPala',
    image: './img/streamers/IAmBPala.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'ItsDeaddy',
    image: './img/streamers/ItsDeaddy.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'jowybear',
    image: './img/streamers/jowybear.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'jukes',
    image: './img/streamers/jukes.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'kfs_phantom',
    image: './img/streamers/kfs_phantom.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'LakshartNia',
    image: './img/streamers/LakshartNia.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'lambiplays',
    image: './img/streamers/lambiplays.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'LaurenAprilx',
    image: './img/streamers/LaurenAprilx.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'LEVITIUS__',
    image: './img/streamers/LEVITIUS__.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'LichKean',
    image: './img/streamers/LichKean.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Lumenti',
    image: './img/streamers/Lumenti.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'mellymane',
    image: './img/streamers/mellymane.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Odablock',
    image: './img/streamers/Odablock.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Pacman10154',
    image: './img/streamers/Pacman10154.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'PinkishAmber',
    image: './img/streamers/PinkishAmber.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'RachelKay',
    image: './img/streamers/RachelKay.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'ragnarshorttail',
    image: './img/streamers/ragnarshorttail.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Ray016',
    image: './img/streamers/Ray016.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'RunRynRinRun',
    image: './img/streamers/RunRynRinRun.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'S_AfricanHoney',
    image: './img/streamers/S_AfricanHoney.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Sadistic_Muffin',
    image: './img/streamers/Sadistic_Muffin.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'ScottyJon',
    image: './img/streamers/ScottyJon.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'sirolopez56',
    image: './img/streamers/sirolopez56.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'sodapoppin',
    image: './img/streamers/sodapoppin.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'StableRonaldo_',
    image: './img/streamers/StableRonaldo_.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Staryuuki',
    image: './img/streamers/Staryuuki.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'stitchieroo',
    image: './img/streamers/stitchieroo.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Sykkuno',
    image: './img/streamers/Sykkuno.jpeg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'TalesofLumin',
    image: './img/streamers/TalesofLumin.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'TaylorRaider',
    image: './img/streamers/TaylorRaider.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'TheMiddleChildZA',
    image: './img/streamers/TheMiddleChildZA.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'thendoplays',
    image: './img/streamers/thendoplays.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'TheRealMarzaa',
    image: './img/streamers/TheRealMarzaa.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'TheSoran',
    image: './img/streamers/TheSoran.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'TrueGeordie',
    image: './img/streamers/TrueGeordie.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'Tylerootd',
    image: './img/streamers/Tylerootd.jpg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'WagamamaTV',
    image: './img/streamers/WagamamaTV.jpeg',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'warlock_za',
    image: './img/streamers/warlock_za.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'YoDa',
    image: './img/streamers/YoDa.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  },
  {
    name: 'zaffa_geek',
    image: './img/streamers/zaffa_geek.png',
    tags: getRandomTags(),
    overview: getRandomOverview()
  }
]

let shuffledList = theList.sort(() => Math.random() - 0.5)

export default shuffledList
