let theList = [
  {
    name: 'Salad Bar',
    image: '/img/groups/salad.jpg',
    tags: ['Minecraft', 'Rust', 'Valorant', 'Youtube'],
    overview:
      'A group of people who like to game and socialize.hope to see you in the server and make some new friends.'
  },
  {
    name: 'Bravado Gaming',
    image: '/img/groups/bravado.jpg',

    tags: ['bringthebravado', 'Rust', 'Valorant', 'Youtube'],
    overview:
      'South Africa’s premier #esports team and gaming lifestyle brand. Sponsors: @Alienware @intelgaming Discover: http://linktr.ee/bravadogaming'
  },
  {
    name: 'Energy Esports',
    image: '/img/groups/energy.jpg',

    tags: ['Minecraft', 'Rust', 'Valorant', 'Youtube'],
    overview:
      'Founded in 2012, Energy Esports is a professional multi-gaming organisation (MGO) that competes at the highest level of competitive Gaming in South Africa.'
  },
  {
    name: 'Big 5 Esports',
    image: '/img/groups/big5.jpg',

    tags: ['Minecraft', 'Rust', 'Valorant', 'Youtube'],
    overview: 'Electronic Sports & Gaming Entertainment Organization 🇿🇦'
  },
  {
    name: 'Goliath Gaming',
    image: '/img/groups/goliath.jpg',

    tags: ['Minecraft', 'Rust', 'Valorant', 'Youtube'],
    overview:
      'Flag of South Africaesports team: FIFA, Fortnite, Street Fighter, Tekken, StarCraft & Counter-Strike #GoliathGamingArmy Powered by @PredatorAfrica.'
  },
  {
    name: 'The A-Team Community ZA',
    image: '/img/groups/a_team.jpg',
    tags: ['Minecraft', 'Rust', 'Valorant', 'Youtube'],
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

    tags: ['Minecraft', 'Rust', 'Valorant', 'Youtube'],
    overview:
      'South African MGO with teams participating in #Dota2, #CSGO, #FIFA, #PUBG, #Simracing & #R6Siege'
  },
  {
    name: 'Power supremacy😫',
    image: '/img/groups/power.jpg',
    tags: ['Chill', 'Anime', 'Valorant', 'Manga'],
    overview:
      'A fun, friendly server for south Africans who wanna make friends we play a lot of games,come to join us always open to suggestions also be scared of the admin(Jk) but the owner is nice.😁'
  },
  {
    name: 'Chill Centeral ZA',
    image: '/img/groups/chill.jpg',
    tags: ['Cool', 'Fortnite', 'Chill-Area', 'Non-toxic'],
    overview: 'I like long walks on the beach'
  },
  {
    name: 'Telkom VS Gaming',
    image: '/img/groups/telkom.jpg',
    tags: ['Minecraft', 'Rust', 'Valorant', 'TelkomVSGaming', 'ComicConAfrica'],
    overview:
      'African gaming brand and the leading platform for esports in South Africa. Dare to be better. #TelkomVSGaming #ComicConAfrica'
  },
  {
    name: '🌙Sleepover🌟',
    image: '/img/groups/sleepover.jpg',
    tags: ['Gaming', 'Dating', 'Anime', 'Memes'],
    overview:
      'We welcome you to SLEEPOVER. What makes our server special, you ask?'
  },
  {
    name: 'Gamer-Topia',
    image: '/img/groups/topia.jpg',
    tags: ['Gaming', 'Friends', 'Chill', 'Small'],
    overview:
      'Were a pretty chill community people who like to talk about art and gaming and stuff. If you have trouble making friends youll fit right in.'
  },
  {
    name: 'SUGAR N’ SPICE',
    image: '/img/groups/spice.jpg',
    tags: ['Minecraft', 'Gaming', 'Playstation', 'Teen'],
    overview:
      '(14+) This server is for gamers who are looking to talk, play, and become friends with fellow players!'
  },
  {
    name: 'Banana Beach',
    image: '/img/groups/banana.jpg',
    tags: ['Community', 'Fun', 'Music', 'Friendly', 'Hangout'],
    overview:
      'A fun server with lots of stuff and bots great community many active members.'
  },
  {
    name: 'The SUSmigos 🌮',
    image: '/img/groups/sus.jpg',
    tags: ['Community', 'Gaming', 'Hangout', 'Card games', 'Among Us'],
    overview:
      'A small, exclusive group of active gamers with nightly play sessions. Very Among Us focused, but also featuring Jackbox, Poker, UNO, Gartic Phone, Skribbl.io, All Bad Cards, Bombergrounds, and more!'
  },
  {
    name: 'Sweet Tea',
    image: '/img/groups/tea.jpg',
    tags: ['Socialising', 'Gaming', 'Giveaways', 'Active-admins'],
    overview:
      'Welcome to Sweet Tea server, a fun server where can simply just get to know new people from around the world, were still quiet a new server but we are growing!'
  },
  {
    name: 'Hogwarts',
    image: '/img/groups/hogwarts.jpg',
    tags: ['Role-Play', 'Hogwarts', 'Harry-Potter', 'HP'],
    overview:
      'Harry Potter Role play and chatting server with So many funny bots Join here. But remember no NSWF. SO we invite you to join. Enjoy the server'
  },
  {
    name: 'Cat Café | Anime & Community',
    image: '/img/groups/cafe.jpg',
    tags: ['Communit', 'Gaming', 'Anime', 'Role-Playing'],
    overview:
      'Cat Café is a great place to socialize and make new Friends! 🌺 Feel welcome to Hangout with over 1500+ Friendly Anime Fans 🎀 60+Self Roles'
  },
  {
    name: 'Karuta WRLD',
    image: '/img/groups/karuta.jpg',
    tags: ['Chill', 'Giveaways', 'Cards', 'Trading', 'Karuta'],
    overview:
      '¶We are a friendly and helpful server mainly based around the discord bot Karuta and we have:'
  }
]

let shuffledList = theList.sort(() => Math.random() - 0.5)

export default shuffledList
