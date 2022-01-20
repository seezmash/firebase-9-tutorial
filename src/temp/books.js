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

function getRandomAuthor() {
  let list = [
    "Robert Dugoni",
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
  ]
  let maxIndex = list.length > 0 ? list.length : 0
  let randomIndex = Math.floor(Math.random() * maxIndex)
  return list[randomIndex]
}

function getRandomNarrator() {
  return getRandomAuthor()
}

function getRandomRating() {
  let randomNumber = Math.floor(Math.random() * 5)
  return randomNumber
}

let theList = [
  {
    title: "The Extraordinary Life of Sam Hell: A Novel",
    image: "./img/audiobooks/9781543661613.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "Wall Street Journal and New York Times bestselling author Robert Dugoni’s coming-of-age story is, according to Booklist, “a novel that, if it doesn’t cross entirely over into John Irving territory, certainly nestles in close to the border.”",
  },
  {
    title: "Halo: Point of Light",
    image: "./img/audiobooks/9781797111674.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "An original full-length novel set in the Halo universe and based on the New York Times bestselling video game series!",
  },
  {
    title: "Witch of the Federation VI",
    image: "./img/audiobooks/9781662022593.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "The Telorans just got pummeled in Meligorn space, but the victory came with unexpectedly bad news: there is another Teloran fleet heading in their direction. What will the Federation Navy decide to do?On Earth, Stephanie's plans to help rebuild are slowly taking shape.",
  },
  {
    title: "Sensation Machines",
    image: "./img/audiobooks/9781696601665.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "A razor-sharp, darkly funny, and deeply human rendering of a future that's nearly upon us.",
  },
  {
    title: "Angel Falls",
    image: "./img/audiobooks/9781543610703.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "Angel Falls is a dramatic, richly nuanced story of an ordinary man who makes an extraordinary decision and gambles with a thorny, painful question.",
  },
  {
    title: "Halo: Divine Wind",
    image: "./img/audiobooks/9781797123448.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "With the galaxy in the suffocating grip of a renegade artificial intelligence, another perilous threat has quietly emerged in the shadows: the Keepers of the One Freedom, a fanatical and merciless Covenant splinter group, has made its way beyond the borders of the galaxy to an ancient Forerunner installation known as the Ark.",
  },
  {
    title: "Golden Girl",
    image: "./img/audiobooks/9781549117374.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "In this satisfying page-turner from 'the queen of beach reads' (New York Magazine), a Nantucket novelist has one final summer to protect her secrets while her loved ones on earth learn to live without their golden girl.",
  },
  {
    title: "The Inn At Eagle Point",
    image: "./img/audiobooks/9781666509472.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "It's been years since Abby O'Brien Winters set foot in Chesapeake Shores. The Maryland town her father built has too many sad memories, and Abby has too few spare moments-thanks to her demanding Wall Street career, the crumbling of her marriage, and her energetic daughters.",
  },
  {
    title: "Crossroads",
    image: "./img/audiobooks/9780008308926.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "Set in a historical moment of moral crisis, Crossroads is the stunning foundation of a sweeping investigation of human mythologies, as the Hildebrandt family navigate the political and social crosscurrents of the past fifty years ",
  },
  {
    title: "The Seven Sisters",
    image: "./img/audiobooks/9781529066661.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "The Seven Sisters is a sweeping epic tale of love and loss by the international number one bestseller Lucinda Riley.",
  },
  {
    title: "Star Wars: Thrawn Ascendancy (Book II: Greater Good)",
    image: "./img/audiobooks/9780593396889.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "Thrawn and his allies race to save the Chiss Ascendancy from an unseen enemy in the second book in the epic Star Wars: Thrawn Ascendancy trilogy from bestselling author Timothy Zahn.",
  },
  {
    title: "The Taste of Sugar",
    image: "./img/audiobooks/9781684579846.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "Marisel Vera emerges as a major voice of contemporary fiction with a heart-wrenching novel set in Puerto Rico on the eve of the Spanish-American War.",
  },
  {
    title: "The Temporary Roomie",
    image: "./img/audiobooks/9781662099472.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "Drew Marshall may have let me move into his spare bedroom while my house is being renovated, but don't think for one second his kindness comes without strings-big, ugly fake-relationship strings.",
  },
  {
    title: "The Voyage of Odysseus",
    image: "./img/audiobooks/9788726869675.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "Odysseus's greatest challenge is only just beginning. The armies of Troy have been defeated, and the city lies in ruins. His oath fulfilled, Odysseus can at last sail for Ithaca and the long-awaited reunion with his family.",
  },
  {
    title: "1984 & Animal Farm (2In1): The International Best-Selling Classics",
    image: "./img/audiobooks/9782291963110.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "Bringing the Best of George Orwell's 1984 & Animal Farm Together.",
  },
  {
    title: "The Shadow Conspiracy",
    image: "./img/audiobooks/9788726891874.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "Cambridge Archaeology Professor Alex Harker is drawn back into the twisted clutches of the Mithras, who are seeking to unearth a knowledge lost to humankind since the dawn of civilization.",
  },
  {
    title: "B. J. Harrison Reads The War of the Worlds",
    image: "./img/audiobooks/9788726574265.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "Martians have wanted to invade Earth for some time in order to secure their own survival. They make their way to the new planet, but what they don't realize is that Earth may not be all that suitable for outsiders.",
  },
  {
    title:
      "Reputation: 'If Bridgerton and Fleabag had a book baby' Sarra Manning",
    image: "./img/audiobooks/9781838774134.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "It is a truth universally acknowledged that girls just wanna have fun.",
  },
  {
    title: "The Alice Network: A Novel",
    image: "./img/audiobooks/9780062676603.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "In an enthralling new historical novel from national bestselling author Kate Quinn, two women—a female spy recruited to the real-life Alice Network in France during World War I and an unconventional American socialite searching for her cousin in 1947—are brought together in a mesmerizing story of courage and redemption.",
  },
  {
    title: "B. J. Harrison Reads Great Expectations",
    image: "./img/audiobooks/9788726573640.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "Pip is a poor orphaned boy who lives together with his sister and her husband. Pip is not educated but has great dreams of the future. He is determined to get out of the low class and seek progress in the higher class. One day a lawyer appears.",
  },
  {
    title: "The Secrets of Latimer House",
    image: "./img/audiobooks/9780008501709.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview: "In the war against Hitler every secret counts…",
  },
  {
    title: "The Royals Next Door",
    image: "./img/audiobooks/9780593457023.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "An ordinary summer goes royally awry when a prince and princess move next door, bringing their handsome bodyguard with them, from New York Times bestselling author Karina Halle.",
  },
  {
    title: "Thrawn (Star Wars)",
    image: "./img/audiobooks/9780451486257.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "In this definitive novel, readers will follow Thrawn’s rise to power—uncovering the events that created one of the most iconic villains in Star Wars history.",
  },
  {
    title: "The Silmarillion",
    image: "./img/audiobooks/9780008168537.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "The Silmarillion is an account of the Elder Days, of the First Age of Tolkien’s world. It is the ancient drama to which the characters in The Lord of the Rings look back, and in whose events some of them such as Elrond and Galadriel took part.",
  },
  {
    title: "The Unhoneymooners",
    image: "./img/audiobooks/9781508282815.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "For two sworn enemies, anything can happen during the Hawaiian trip of a lifetime—maybe even love—in this romantic comedy from the New York Times bestselling authors of Roomies.",
  },
  {
    title: "The Fortune Men: Shortlisted for the Booker Prize 2021",
    image: "./img/audiobooks/9780241991602.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "Chilling and utterly compelling, The Fortune Men shines an essential light on a much-neglected period of our national life' Sathnam Sanghera, author of Empireland",
  },
  {
    title: "Sparks Like Stars: A Novel",
    image: "./img/audiobooks/9780063008311.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "An Afghan American woman returns to Kabul to learn the truth about her family and the tragedy that destroyed their lives in this brilliant and compelling novel from the bestselling author of The Pearl That Broke Its Shell, The House Without Windows, and When the Moon Is Low.",
  },
  {
    title: "Atlas Shrugged",
    image: "./img/audiobooks/9781483086729.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "In a scrap heap within an abandoned factory, the greatest invention in history lies dormant and unused. By what fatal error of judgment has its value gone unrecognized, its brilliant inventor punished rather than rewarded for his efforts?",
  },
  {
    title: "A Game of Thrones",
    image: "./img/audiobooks/9780007237500.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "As Warden of the north, Lord Eddard Stark counts it a curse when King Robert bestows on him the office of the Hand. His honour weighs him down at court where a true man does what he will, not what he must ... and a dead enemy is a thing of beauty.",
  },
  {
    title: "The Ministry for the Future: A Novel",
    image: "./img/audiobooks/9781549186431.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "From legendary science fiction author Kim Stanley Robinson comes a remarkable vision of climate change over the coming decades. ",
  },
  {
    title: "The Inheritance of Orquídea Divina: A Novel",
    image: "./img/audiobooks/9781797131351.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "The Montoyas are used to a life without explanations. They know better than to ask why the pantry never seems to run low, or why their matriarch won’t ever leave their home in Four Rivers—not for graduations",
  },
  {
    title: "B. J. Harrison Reads A Princess of Mars",
    image: "./img/audiobooks/9788726573848.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "After the Civil War, Captain John Carter travels to Arizona with his friend, fellow veteran James Powell. When James gets murdered by Native Americans, John hides in a cave and is knocked out by a strange gas. When he wakes up, he is no longer on planet Earth.",
  },
  {
    title:
      "The Woman in the Middle: the brilliant new novel from the author of My One True North",
    image: "./img/audiobooks/9781398501195.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "The emotional, uplifting and completely relatable new novel from Sunday Times bestseller Milly Johnson.",
  },
  {
    title: "Sliced Ice: Lee Winter's Iconic Ice Queens",
    image: "./img/audiobooks/9781667089928.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "Ten short stories based on Lee Winter’s fierce and unforgettable ice queens and villains have been gathered into one anthology containing lesbian love, lust, friendship, and romance.",
  },
  {
    title: "The Big Seven: A Faux Mystery",
    image: "./img/audiobooks/9781481502948.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "Jim Harrison is one of our most renowned and popular authors,and his last novel, The Great Leader,was one of the most successful in a decorated career: it appeared on the New York Times extended bestseller listand was a national bestseller with rapturous reviews.",
  },
  {
    title: "The Enchanted April",
    image: "./img/audiobooks/9788726472547.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "Four very different women, all wanting to escape cold and dreary London for different reasons, come together to share a month's holiday in an Italian medieval castle. There’s timid Lotty Wilkins, terrified of her domineering husband; sober and religious Rose Arbuthnot; rigid and judgemental Mrs Fisher; and the breathtakingly beautiful but disillusioned and unhappy Lady Caroline Dester.",
  },
  {
    title: "The Seaside Cocktail Campervan",
    image: "./img/audiobooks/9780008483500.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "When Lucy isn’t in her cosy cottage by the sea, she’s winding through the Northumberland coast with her loveable Dachsund Daisy, cooking up a storm at the local village celebrations.",
  },
  {
    title: "Honeysuckle Summer",
    image: "./img/audiobooks/9781666509533.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "With her devastating marriage behind her, Raylene Hammond is truly thankful for her best friends, the Sweet Magnolias. They've taken her in, shielding her from the world.",
  },
  {
    title: "Return to Ithaca",
    image: "./img/audiobooks/9788726869637.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "Odysseus has been to Hell and back. Deserted by the Gods, and now in bitter conflict with his friend Eperitus, times look bleak. He dreams of returning to his home.",
  },
  {
    title: "Rule of Two: Star Wars Legends (Darth Bane)",
    image: "./img/audiobooks/9780385361842.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "In this essential Star Wars Legends novel, the second in the Darth Bane trilogy, the fearsome Sith lord takes on a deadly new apprentice.",
  },
  {
    title: "Daisy Jones and The Six: The must-read bestselling novel",
    image: "./img/audiobooks/9781473565951.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "From the moment Daisy walked barefoot on to the stage at the Whisky, she and the band were a sensation. Their sound defined an era. Their albums were on every turntable. They sold out arenas from coast to coast.",
  },
  {
    title: "Heroes: The myths of the Ancient Greek heroes retold",
    image: "./img/audiobooks/9781405940573.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "Enter the monstrous and magical world of Stephen Fry's Sunday Times bestseller Heroes, brought to you by Penguin.",
  },
  {
    title: "Dark Force Rising: Star Wars Legends (The Thrawn Trilogy)",
    image: "./img/audiobooks/9780449806449.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "In this essential Star Wars Legends novel, the sequel to Heir to the Empire, Grand Admiral Thrawn’s sinister plan threatens to spell doom for the fledgling New Republic and its most iconic heroes.",
  },
  {
    title: "When No One Is Watching: A Thriller",
    image: "./img/audiobooks/9780063036048.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "Rear Window meets Get Out in this gripping thriller from a critically acclaimed and New York Times Notable author, in which the gentrification of a Brooklyn neighborhood takes on a sinister new meaning",
  },
  {
    title: "The Great Gatsby",
    image: "./img/audiobooks/9781662246326.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "On the prosperous Long Island shores sit the grand affluence of West Egg and East Egg — places where a sinister Gatsby’s mansion, with his mysterious mounds of gold and gin-filled parties, takes residence. Nobody knows who he really is.",
  },
  {
    title: "Even As We Breathe: A Novel",
    image: "./img/audiobooks/9781666115369.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "Nineteen-year-old Cowney Sequoyah yearns to escape his hometown of Cherokee, North Carolina, in the heart of the Smoky Mountains.",
  },
  {
    title: "The Off Limits Rule",
    image: "./img/audiobooks/9781662085277.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "I have found rock bottom: moving in with my older brother because I'm too broke to afford to live on my own. It's okay though, because we've always been close and I think I'm going to have fun living with him again.",
  },
  {
    title: "Dog Eat Dog: An Andy Carpenter Mystery",
    image: "./img/audiobooks/9781250804082.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "The 22nd installment in the Andy Carpenter series is just as delightful and entertaining as the first, thanks in large part to Grover Gardner's narration.",
  },
  {
    title: "Sugar Birds: A Novel",
    image: "./img/audiobooks/9781664951228.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "For years, Harris Hayes has taught his daughter, Aggie, the ways of the northern woods, where she sketches nests of wild birds as an antidote to sadness.",
  },
  {
    title: "Their Dark Valkyrie: The Complete Series",
    image: "./img/audiobooks/9781666126600.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "All I wanted was to keep my distance from the criminals I work for and get my little brother out of the hell that is our mother's house. Then I died and woke up to four stunningly hot gods telling me I'm now a valkyrie.",
  },
  {
    title: "The Heartbreaker of Echo Pass",
    image: "./img/audiobooks/9781488211478.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "Can Gold Valley’s wallflower heal a damaged cowboy’s broken heart? Find out in this enthralling romance by New York Times bestselling author Maisey Yates.",
  },
  {
    title: "Sula",
    image: "./img/audiobooks/9780739343371.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "Two girls who grow up to become women. Two friends who become something worse than enemies. This brilliantly imagined novel brings us the story of Nel Wright and Sula Peace, who meet as children in the small town of Medallion, Ohio.",
  },
  {
    title: "The Christmas Killer",
    image: "./img/audiobooks/9780008402662.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "As the blizzards descend, panic spreads through the remote Cumbrian village – there’s a killer amongst them, and with eleven more victims to go, anyone could be next",
  },
  {
    title: "It Happened One Summer: A Novel",
    image: "./img/audiobooks/9780063045675.jpg",
    tags: getRandomTags(),
    rating: getRandomRating(),
    author: getRandomAuthor(),
    narrator: getRandomNarrator(),
    overview:
      "Tessa Bailey is back with a Schitt’s Creek-inspired rom-com about a Hollywood “It Girl” who’s cut off from her wealthy family and exiled to a small Pacific Northwest beach town... where she butts heads with a surly, sexy local who thinks she doesn’t belong.",
  },
]

let shuffledList = theList.sort(() => Math.random() - 0.5)

export default shuffledList
