export const EXAMPLE_BGG_GAMES = [
  {
    $: { type: "boardgame", id: "148949" },
    thumbnail: [
      "https://cf.geekdo-images.com/PHH9Mreen2sBcxV6ZsE3ew__thumb/img/Vzpg3sdeAbCy0IxSAoh1aH9nvDE=/fit-in/200x150/filters:strip_icc()/pic1885326.jpg",
    ],
    image: [
      "https://cf.geekdo-images.com/PHH9Mreen2sBcxV6ZsE3ew__original/img/pHIJibqf-DmlOQD3CfT_rAjGmc0=/0x0/filters:format(jpeg)/pic1885326.jpg",
    ],
    name: [
      { $: { type: "primary", sortindex: "1", value: "Istanbul" } },
      { $: { type: "alternate", sortindex: "1", value: "Стамбул" } },
      { $: { type: "alternate", sortindex: "1", value: "イスタンブール" } },
      { $: { type: "alternate", sortindex: "1", value: "伊斯坦堡" } },
    ],
    description: [
      "There's hustle and bustle at Istanbul's grand bazaar as merchants and their assistants rush through the narrow alleys in their attempt to be more successful than their competitors. Everything must be well organized: wheelbarrows must be filled with goods at the warehouses, then swiftly transported by the assistants to various destinations. Your goal? Be the first merchant to collect a certain number of rubies.&#10;&#10;In Istanbul, you lead a group of one merchant and four assistants through 16 locations in the bazaar. At each such location, you can carry out a specific action. The challenge, though, is that to take an action, you must move your merchant and an assistant there, then leave the assistant behind (to handle all the details while you focus on larger matters). If you want to use that assistant again later, your merchant must return to that location to pick him up. Thus, you must plan ahead carefully to avoid being left with no assistants and thus unable to do anything...&#10;&#10;In more detail, on a turn you move your merchant and his retinue of assistants one or two steps through the bazaar, either leave an assistant at that location or collect an assistant left earlier, then perform the action. If you meet other merchants or certain individuals at the location, you might be able to take a small extra action. Possible actions include:&#10;&#10;&#10;    Paying to increase your wheelbarrow capacity, which starts the game with a capacity of only two for each good.&#10;    Filling your wheelbarrow with a specified good to its limit.&#10;    Acquiring a special ability, and the earlier you come, the easier they are to collect.&#10;    Buying rubies or trading goods for rubies.&#10;    Selling special combinations of goods to make the money you need to do everything else.&#10;&#10;&#10;When a merchant has collected five rubies in his wheelbarrow, players complete that round, then the game ends. If this player is the only one who's reached this goal, he wins immediately; otherwise ties are broken by money in hand.&#10;&#10;",
    ],
    yearpublished: [{ $: { value: "2014" } }],
    minplayers: [{ $: { value: "2" } }],
    maxplayers: [{ $: { value: "5" } }],
    poll: [
      {
        $: {
          name: "suggested_numplayers",
          title: "User Suggested Number of Players",
          totalvotes: "334",
        },
        results: [
          {
            $: { numplayers: "1" },
            result: [
              { $: { value: "Best", numvotes: "0" } },
              { $: { value: "Recommended", numvotes: "3" } },
              { $: { value: "Not Recommended", numvotes: "183" } },
            ],
          },
          {
            $: { numplayers: "2" },
            result: [
              { $: { value: "Best", numvotes: "39" } },
              { $: { value: "Recommended", numvotes: "184" } },
              { $: { value: "Not Recommended", numvotes: "62" } },
            ],
          },
          {
            $: { numplayers: "3" },
            result: [
              { $: { value: "Best", numvotes: "103" } },
              { $: { value: "Recommended", numvotes: "158" } },
              { $: { value: "Not Recommended", numvotes: "5" } },
            ],
          },
          {
            $: { numplayers: "4" },
            result: [
              { $: { value: "Best", numvotes: "199" } },
              { $: { value: "Recommended", numvotes: "68" } },
              { $: { value: "Not Recommended", numvotes: "0" } },
            ],
          },
          {
            $: { numplayers: "5" },
            result: [
              { $: { value: "Best", numvotes: "49" } },
              { $: { value: "Recommended", numvotes: "152" } },
              { $: { value: "Not Recommended", numvotes: "35" } },
            ],
          },
          {
            $: { numplayers: "5+" },
            result: [
              { $: { value: "Best", numvotes: "0" } },
              { $: { value: "Recommended", numvotes: "1" } },
              { $: { value: "Not Recommended", numvotes: "132" } },
            ],
          },
        ],
      },
      {
        $: {
          name: "suggested_playerage",
          title: "User Suggested Player Age",
          totalvotes: "72",
        },
        results: [
          {
            result: [
              { $: { value: "2", numvotes: "0" } },
              { $: { value: "3", numvotes: "0" } },
              { $: { value: "4", numvotes: "0" } },
              { $: { value: "5", numvotes: "0" } },
              { $: { value: "6", numvotes: "3" } },
              { $: { value: "8", numvotes: "18" } },
              { $: { value: "10", numvotes: "36" } },
              { $: { value: "12", numvotes: "11" } },
              { $: { value: "14", numvotes: "4" } },
              { $: { value: "16", numvotes: "0" } },
              { $: { value: "18", numvotes: "0" } },
              { $: { value: "21 and up", numvotes: "0" } },
            ],
          },
        ],
      },
      {
        $: {
          name: "language_dependence",
          title: "Language Dependence",
          totalvotes: "67",
        },
        results: [
          {
            result: [
              {
                $: {
                  level: "1",
                  value: "No necessary in-game text",
                  numvotes: "55",
                },
              },
              {
                $: {
                  level: "2",
                  value:
                    "Some necessary text - easily memorized or small crib sheet",
                  numvotes: "12",
                },
              },
              {
                $: {
                  level: "3",
                  value:
                    "Moderate in-game text - needs crib sheet or paste ups",
                  numvotes: "0",
                },
              },
              {
                $: {
                  level: "4",
                  value:
                    "Extensive use of text - massive conversion needed to be playable",
                  numvotes: "0",
                },
              },
              {
                $: {
                  level: "5",
                  value: "Unplayable in another language",
                  numvotes: "0",
                },
              },
            ],
          },
        ],
      },
    ],
    playingtime: [{ $: { value: "60" } }],
    minplaytime: [{ $: { value: "40" } }],
    maxplaytime: [{ $: { value: "60" } }],
    minage: [{ $: { value: "10" } }],
    link: [
      { $: { type: "boardgamecategory", id: "1021", value: "Economic" } },
      { $: { type: "boardgamemechanic", id: "2912", value: "Contracts" } },
      { $: { type: "boardgamemechanic", id: "2072", value: "Dice Rolling" } },
      { $: { type: "boardgamemechanic", id: "2676", value: "Grid Movement" } },
      { $: { type: "boardgamemechanic", id: "2011", value: "Modular Board" } },
      {
        $: {
          type: "boardgamemechanic",
          id: "2081",
          value: "Network and Route Building",
        },
      },
      {
        $: {
          type: "boardgamemechanic",
          id: "2007",
          value: "Pick-up and Deliver",
        },
      },
      { $: { type: "boardgamemechanic", id: "2876", value: "Race" } },
      {
        $: { type: "boardgamemechanic", id: "2897", value: "Variable Set-up" },
      },
      {
        $: { type: "boardgamemechanic", id: "2082", value: "Worker Placement" },
      },
      {
        $: {
          type: "boardgamefamily",
          id: "18702",
          value: "Cities: Istanbul (Turkey)",
        },
      },
      {
        $: {
          type: "boardgamefamily",
          id: "73592",
          value: "Components: Gems/Crystals",
        },
      },
      {
        $: {
          type: "boardgamefamily",
          id: "68769",
          value: "Components: Wooden pieces & boards",
        },
      },
      {
        $: {
          type: "boardgamefamily",
          id: "63529",
          value: "Country: Ottoman Empire",
        },
      },
      { $: { type: "boardgamefamily", id: "11570", value: "Country: Turkey" } },
      {
        $: {
          type: "boardgamefamily",
          id: "28724",
          value: "Game: Istanbul (AEG)",
        },
      },
      {
        $: {
          type: "boardgamefamily",
          id: "59705",
          value: "Misc: LongPack Games",
        },
      },
      {
        $: {
          type: "boardgameexpansion",
          id: "204573",
          value: "Brettspiel Adventskalender 2016",
        },
      },
      {
        $: {
          type: "boardgameexpansion",
          id: "234191",
          value:
            "Camel Up: The Referee Camel & Istanbul – Caravan Leader Mini Expansion",
        },
      },
      {
        $: {
          type: "boardgameexpansion",
          id: "207573",
          value: "Istanbul: Caravan Leader Mini Expansion",
        },
      },
      {
        $: {
          type: "boardgameexpansion",
          id: "161224",
          value: "Istanbul: Kebab Shop Mini Expansion",
        },
      },
      {
        $: {
          type: "boardgameexpansion",
          id: "192779",
          value: "Istanbul: Letters & Seals",
        },
      },
      {
        $: {
          type: "boardgameexpansion",
          id: "172505",
          value: "Istanbul: Mocha & Baksheesh",
        },
      },
      {
        $: {
          type: "boardgameexpansion",
          id: "213217",
          value: "Istanbul: Pegasus Depot Mini Expansion",
        },
      },
      { $: { type: "boardgameexpansion", id: "293240", value: "Super Power" } },
      {
        $: {
          type: "boardgamecompilation",
          id: "251219",
          value: "Istanbul: Big Box",
        },
      },
      {
        $: {
          type: "boardgameimplementation",
          id: "235488",
          value: "Istanbul: The Dice Game",
        },
      },
      { $: { type: "boardgamedesigner", id: "381", value: "Rüdiger Dorn" } },
      { $: { type: "boardgameartist", id: "11898", value: "Andreas Resch" } },
      {
        $: {
          type: "boardgameartist",
          id: "12674",
          value: "Hans-Georg Schneider",
        },
      },
      { $: { type: "boardgamepublisher", id: "39", value: "Pegasus Spiele" } },
      { $: { type: "boardgamepublisher", id: "40920", value: "2 Pionki" } },
      { $: { type: "boardgamepublisher", id: "4304", value: "Albi" } },
      {
        $: {
          type: "boardgamepublisher",
          id: "396",
          value: "Alderac Entertainment Group",
        },
      },
      {
        $: { type: "boardgamepublisher", id: "15889", value: "Asterion Press" },
      },
      { $: { type: "boardgamepublisher", id: "2366", value: "Devir" } },
      {
        $: {
          type: "boardgamepublisher",
          id: "858",
          value: "Grow Jogos e Brinquedos",
        },
      },
      { $: { type: "boardgamepublisher", id: "1391", value: "Hobby Japan" } },
      { $: { type: "boardgamepublisher", id: "18852", value: "Hobby World" } },
      { $: { type: "boardgamepublisher", id: "25203", value: "Lex Games" } },
      { $: { type: "boardgamepublisher", id: "5400", value: "Matagot" } },
      { $: { type: "boardgamepublisher", id: "22", value: "Piatnik" } },
      { $: { type: "boardgamepublisher", id: "2726", value: "Portal Games" } },
      {
        $: {
          type: "boardgamepublisher",
          id: "9234",
          value: "Swan Panasia Co., Ltd.",
        },
      },
      {
        $: {
          type: "boardgamepublisher",
          id: "4932",
          value: "White Goblin Games",
        },
      },
    ],
  },
  {
    $: { type: "boardgame", id: "121408" },
    thumbnail: [
      "https://cf.geekdo-images.com/8K9Syz49KOY0nJLR4GB0eg__thumb/img/CjomdI9qkAuiWWbxbeW88_SV26M=/fit-in/200x150/filters:strip_icc()/pic1606346.jpg",
    ],
    image: [
      "https://cf.geekdo-images.com/8K9Syz49KOY0nJLR4GB0eg__original/img/UIyVorQES8tTFRj4eDNCfGP7i5o=/0x0/filters:format(jpeg)/pic1606346.jpg",
    ],
    name: [
      { $: { type: "primary", sortindex: "1", value: "Trains" } },
      { $: { type: "alternate", sortindex: "1", value: "トレインズ" } },
      { $: { type: "alternate", sortindex: "1", value: "城际列车" } },
    ],
    description: [
      "In the 19th century, shortly after the industrial revolution, railways quickly spread over the world. Japan, importing Western culture and eager to become one of the Grand Nations, saw the birth of many private railway companies and entered the Golden Age of railways. Eventually, as a result of the actions of powerful people and capitalists, many of these smaller companies gradually merged into larger ones.&#10;&#10;In Trains, the players are such capitalists, managing private railways companies and striving to become bigger and better than the competition. The game takes place during the 19th and 20th century in the 2012 OKAZU Brand edition, whereas the 2013 AEG/Pegasus edition is set in modern times, with bullet trains, freight trains and more. You will start with a small set of cards, but by building a more effective deck throughout the game, you will be able to place stations and lay rails over the maps of Osaka, Tokyo or other locations. The trick is to purchase the cards you want to use, then use them as effectively as possible. Gain enough points from your railways and you will ultimately manage the most powerful railroads in modern Japan!&#10;&#10;Trains is the first title in AEG's Destination Fun series! Continue your travels in the acclaimed Planes and Automobiles board games.&#10;&#10;Integrates with Trains: Rising Sun&#10;&#10;",
    ],
    yearpublished: [{ $: { value: "2012" } }],
    minplayers: [{ $: { value: "2" } }],
    maxplayers: [{ $: { value: "4" } }],
    poll: [
      {
        $: {
          name: "suggested_numplayers",
          title: "User Suggested Number of Players",
          totalvotes: "85",
        },
        results: [
          {
            $: { numplayers: "1" },
            result: [
              { $: { value: "Best", numvotes: "0" } },
              { $: { value: "Recommended", numvotes: "2" } },
              { $: { value: "Not Recommended", numvotes: "36" } },
            ],
          },
          {
            $: { numplayers: "2" },
            result: [
              { $: { value: "Best", numvotes: "10" } },
              { $: { value: "Recommended", numvotes: "51" } },
              { $: { value: "Not Recommended", numvotes: "10" } },
            ],
          },
          {
            $: { numplayers: "3" },
            result: [
              { $: { value: "Best", numvotes: "43" } },
              { $: { value: "Recommended", numvotes: "27" } },
              { $: { value: "Not Recommended", numvotes: "1" } },
            ],
          },
          {
            $: { numplayers: "4" },
            result: [
              { $: { value: "Best", numvotes: "31" } },
              { $: { value: "Recommended", numvotes: "30" } },
              { $: { value: "Not Recommended", numvotes: "2" } },
            ],
          },
          {
            $: { numplayers: "4+" },
            result: [
              { $: { value: "Best", numvotes: "0" } },
              { $: { value: "Recommended", numvotes: "1" } },
              { $: { value: "Not Recommended", numvotes: "28" } },
            ],
          },
        ],
      },
      {
        $: {
          name: "suggested_playerage",
          title: "User Suggested Player Age",
          totalvotes: "19",
        },
        results: [
          {
            result: [
              { $: { value: "2", numvotes: "0" } },
              { $: { value: "3", numvotes: "0" } },
              { $: { value: "4", numvotes: "0" } },
              { $: { value: "5", numvotes: "0" } },
              { $: { value: "6", numvotes: "0" } },
              { $: { value: "8", numvotes: "4" } },
              { $: { value: "10", numvotes: "10" } },
              { $: { value: "12", numvotes: "5" } },
              { $: { value: "14", numvotes: "0" } },
              { $: { value: "16", numvotes: "0" } },
              { $: { value: "18", numvotes: "0" } },
              { $: { value: "21 and up", numvotes: "0" } },
            ],
          },
        ],
      },
      {
        $: {
          name: "language_dependence",
          title: "Language Dependence",
          totalvotes: "31",
        },
        results: [
          {
            result: [
              {
                $: {
                  level: "1",
                  value: "No necessary in-game text",
                  numvotes: "0",
                },
              },
              {
                $: {
                  level: "2",
                  value:
                    "Some necessary text - easily memorized or small crib sheet",
                  numvotes: "13",
                },
              },
              {
                $: {
                  level: "3",
                  value:
                    "Moderate in-game text - needs crib sheet or paste ups",
                  numvotes: "16",
                },
              },
              {
                $: {
                  level: "4",
                  value:
                    "Extensive use of text - massive conversion needed to be playable",
                  numvotes: "2",
                },
              },
              {
                $: {
                  level: "5",
                  value: "Unplayable in another language",
                  numvotes: "0",
                },
              },
            ],
          },
        ],
      },
    ],
    playingtime: [{ $: { value: "45" } }],
    minplaytime: [{ $: { value: "45" } }],
    maxplaytime: [{ $: { value: "45" } }],
    minage: [{ $: { value: "12" } }],
    link: [
      { $: { type: "boardgamecategory", id: "1002", value: "Card Game" } },
      {
        $: {
          type: "boardgamecategory",
          id: "1086",
          value: "Territory Building",
        },
      },
      { $: { type: "boardgamecategory", id: "1034", value: "Trains" } },
      { $: { type: "boardgamecategory", id: "1011", value: "Transportation" } },
      {
        $: {
          type: "boardgamemechanic",
          id: "2664",
          value: "Deck, Bag, and Pool Building",
        },
      },
      {
        $: { type: "boardgamemechanic", id: "2040", value: "Hand Management" },
      },
      {
        $: {
          type: "boardgamemechanic",
          id: "2081",
          value: "Network and Route Building",
        },
      },
      { $: { type: "boardgamefamily", id: "10634", value: "Country: Japan" } },
      {
        $: {
          type: "boardgamefamily",
          id: "22824",
          value: "Series: Big in Japan (AEG)",
        },
      },
      {
        $: {
          type: "boardgamefamily",
          id: "25996",
          value: "Series: Destination Fun (AEG)",
        },
      },
      {
        $: {
          type: "boardgameexpansion",
          id: "217761",
          value: "Destination Fun Combo Pack",
        },
      },
      {
        $: {
          type: "boardgameexpansion",
          id: "182020",
          value: "Trains: Bay Area & China",
        },
      },
      {
        $: {
          type: "boardgameexpansion",
          id: "218377",
          value: "Trains: Coastal Tides",
        },
      },
      {
        $: {
          type: "boardgameexpansion",
          id: "146629",
          value: "Trains: Gen Con 2013",
        },
      },
      {
        $: {
          type: "boardgameexpansion",
          id: "131324",
          value: "Trains: Map Pack 1 – Germany/Northeastern USA",
        },
      },
      {
        $: {
          type: "boardgameexpansion",
          id: "174499",
          value: "Trains: Map Pack 2 – Europe/Italy/California",
        },
      },
      {
        $: {
          type: "boardgameexpansion",
          id: "133659",
          value: "Trains: Nagoya Map",
        },
      },
      {
        $: {
          type: "boardgameexpansion",
          id: "164213",
          value: "Trains: Saitama & Texas",
        },
      },
      {
        $: {
          type: "boardgameintegration",
          id: "157001",
          value: "Trains: Rising Sun",
        },
      },
      {
        $: {
          type: "boardgamecompilation",
          id: "169814",
          value: "AEG Black Friday Black Box",
        },
      },
      {
        $: { type: "boardgamedesigner", id: "39436", value: "Hisashi Hayashi" },
      },
      { $: { type: "boardgameartist", id: "39437", value: "Ryo Nyamo" } },
      { $: { type: "boardgamepublisher", id: "14104", value: "OKAZU Brand" } },
      {
        $: {
          type: "boardgamepublisher",
          id: "396",
          value: "Alderac Entertainment Group",
        },
      },
      {
        $: {
          type: "boardgamepublisher",
          id: "5657",
          value: "Filosofia Éditions",
        },
      },
      { $: { type: "boardgamepublisher", id: "12540", value: "Game Harbor" } },
      { $: { type: "boardgamepublisher", id: "5885", value: "Japon Brand" } },
      { $: { type: "boardgamepublisher", id: "39", value: "Pegasus Spiele" } },
    ],
  },
];

export const EXAMPLE_ATLAS_GAMES = {
  games: [
    {
      id: "b1nBQaNdH6",
      handle: "istanbul",
      url: "https://www.boardgameatlas.com/game/b1nBQaNdH6/istanbul",
      edit_url: "https://www.boardgameatlas.com/game/b1nBQaNdH6/edit",
      name: "Istanbul",
      price: "39.99",
      price_ca: "43.99",
      price_uk: "30.39",
      price_au: "69.99",
      msrp: 49.99,
      msrps: [
        {
          country: "UK",
          price: 46.99,
        },
        {
          country: "US",
          price: 49.99,
        },
      ],
      discount: "0.20",
      year_published: 2014,
      min_players: 2,
      max_players: 5,
      min_playtime: 40,
      max_playtime: 60,
      min_age: 10,
      description:
        "<p>Hustle and bustle in the bazaar district of Istanbul: merchants and their assistants are hurrying through the narrow alleys attempting to be more successful than their competitors. Good organization is key: wheelbarrows have to be filled with goods at the warehouses and then swiftly transported by the assistants to the various destinations. The goal of the merchants is to be the first to collect a certain amount of rubies.<br /><br />You are leading a merchant and four assistants through the 16 Places of the bazaar. At each Place, you can carry out a specific action. The challenge is that, to carry out an action at any of those Places, your merchant needs the help of an assistant and has to leave him behind. To use that assistant again later, your merchant has to come back to that Place and pick him up. So plan ahead carefully to avoid being left with no assistants and thus unable to do anything...</p>",
      commentary: "",
      faq: "",
      thumb_url:
        "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254173065-51atw15TEHL.jpg",
      image_url:
        "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254173065-51atw15TEHL.jpg",
      matches_specs: null,
      specs: [],
      mechanics: [
        {
          id: "jOAB6RhwBp",
          url: "https://www.boardgameatlas.com/mechanic/jOAB6RhwBp/undefined",
        },
        {
          id: "R0bGq4cAl4",
          url: "https://www.boardgameatlas.com/mechanic/R0bGq4cAl4/undefined",
        },
        {
          id: "qu5BcGjAzk",
          url: "https://www.boardgameatlas.com/mechanic/qu5BcGjAzk/undefined",
        },
        {
          id: "U3zhCQH7Et",
          url: "https://www.boardgameatlas.com/mechanic/U3zhCQH7Et/undefined",
        },
        {
          id: "ohABM4GjbC",
          url: "https://www.boardgameatlas.com/mechanic/ohABM4GjbC/undefined",
        },
      ],
      categories: [
        {
          id: "N0TkEGfEsF",
          url: "https://www.boardgameatlas.com/category/N0TkEGfEsF/undefined",
        },
      ],
      publishers: [
        {
          id: "m4T08lQftL",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/m4T08lQftL/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
      ],
      designers: [
        {
          id: "3L0JcETA7t",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/designer/3L0JcETA7t/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
      ],
      primary_publisher: {
        id: "m4T08lQftL",
        name: "Alderac Entertainment Group",
        url: "https://www.boardgameatlas.com/publisher/m4T08lQftL/alderac-entertainment-group",
      },
      primary_designer: {
        id: "3L0JcETA7t",
        name: "Rüdiger Dorn",
        url: "https://www.boardgameatlas.com/designer/3L0JcETA7t/rdiger-dorn",
      },
      developers: [],
      related_to: [],
      related_as: [],
      artists: ["Andreas Resch", "Hans-Georg Schneider"],
      names: [],
      rules_url:
        "https://www.fgbradleys.com/rules/rules4/Istanbul%20-%20rules.pdf",
      amazon_rank: 25213,
      cs_rating: 4.5,
      official_url:
        "https://www.alderac.com/istanbul/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
      comment_count: 0,
      num_user_ratings: 316,
      average_user_rating: 3.763857071198844,
      weight_amount: 2.63,
      weight_units: "lbs ",
      size_height: 12.6,
      size_depth: 3,
      size_units: "inches ",
      historical_low_prices: [
        {
          country: "UK",
          date: "2021-12-16T03:57:21.737Z",
          price: 30.39,
          isLow: false,
        },
        {
          country: "CA",
          date: "2022-01-01T16:12:08.463Z",
          price: 44.95,
          isLow: false,
        },
        {
          country: "AU",
          date: "2022-01-04T06:44:17.127Z",
          price: 69.99,
          isLow: false,
        },
        {
          country: "US",
          date: "2022-03-18T21:15:55.599Z",
          price: 39.99,
          isLow: false,
        },
      ],
      active: true,
      num_user_complexity_votes: 1,
      average_learning_complexity: 2,
      average_strategy_complexity: 3,
      visits: 2470,
      lists: 933,
      mentions: 24,
      links: 13,
      plays: 1862,
      rank: 75,
      type: "game",
      sku: "AEG5809",
      upc: "729220058096",
      num_distributors: 1,
      trending_rank: 0,
      listing_clicks: 0,
      is_historical_low: false,
      skus: ["AEG 5809"],
      sku_objects: [
        {
          name: "Boarding School Games",
          sku: "AEG 5809",
        },
      ],
      players: "2-5",
      playtime: "40-60",
      msrp_text: "$49.99",
      price_text: "$39.99",
      tags: [
        "Istanbul",
        "Istambuł",
        "Стамбул",
        "イスタンブール",
        "伊斯坦堡",
        "Istanbul Collection Base Game 2 Expansions",
        "Istanbul (Minor Damage)",
        "ISTANBUL",
      ],
      images: {
        thumb:
          "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254173065-51atw15TEHL.jpg",
        small:
          "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254173065-51atw15TEHL.jpg",
        medium:
          "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254173065-51atw15TEHL.jpg",
        large:
          "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254173065-51atw15TEHL.jpg",
        original:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254173065-51atw15TEHL.jpg",
      },
      description_preview:
        " Hustle and bustle in the bazaar district of Istanbul: merchants and their assistants are hurrying through the narrow alleys attempting to be more successful than their competitors. Good organization is key: wheelbarrows have to be filled with goods at the warehouses and then swiftly transported by the assistants to the various destinations. The goal of the merchants is to be the first to collect a certain amount of rubies.  You are leading a merchant and four assistants through the 16 Places of the bazaar. At each Place, you can carry out a specific action. The challenge is that, to carry out an action at any of those Places, your merchant needs the help of an assistant and has to leave him behind. To use that assistant again later, your merchant has to come back to that Place and pick him up. So plan ahead carefully to avoid being left with no assistants and thus unable to do anything... ",
    },
    {
      id: "ojyWwY8ZYm",
      handle: "trains",
      url: "https://www.boardgameatlas.com/game/ojyWwY8ZYm/trains",
      edit_url: "https://www.boardgameatlas.com/game/ojyWwY8ZYm/edit",
      name: "Trains",
      price: "39.99",
      price_ca: "53.70",
      price_uk: "0.00",
      price_au: "89.95",
      msrp: 59.95,
      msrps: [
        {
          country: "UK",
          price: 59.99,
        },
        {
          country: "US",
          price: 59.95,
        },
      ],
      discount: "0.33",
      year_published: 2012,
      min_players: 2,
      max_players: 4,
      min_playtime: 45,
      max_playtime: 45,
      min_age: 12,
      description:
        "<p>The railways of today are amazing things and bullet trains, freight trains and more keep entire countries running. From transporting the populace to carrying essential materials, trains play an integral part in a nation's power and economic development.<br /><br />You will start with a small set of cards, but by building a more effective deck throughout the game, you will be able to place stations and lay rails over the maps of Osaka or Tokyo. Gain enough points from your railways and you will ultimately manage the most powerful railroads in modern Japan!</p>",
      commentary: "",
      faq: "",
      thumb_url:
        "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559258064927-512yAxZk0LL.jpg",
      image_url:
        "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559258064927-512yAxZk0LL.jpg",
      matches_specs: null,
      specs: [],
      mechanics: [
        {
          id: "vZsDDAdOoe",
          url: "https://www.boardgameatlas.com/mechanic/vZsDDAdOoe/undefined",
        },
        {
          id: "WPytek5P8l",
          url: "https://www.boardgameatlas.com/mechanic/WPytek5P8l/undefined",
        },
        {
          id: "ohABM4GjbC",
          url: "https://www.boardgameatlas.com/mechanic/ohABM4GjbC/undefined",
        },
      ],
      categories: [
        {
          id: "eX8uuNlQkQ",
          url: "https://www.boardgameatlas.com/category/eX8uuNlQkQ/undefined",
        },
        {
          id: "buDTYyPw4D",
          url: "https://www.boardgameatlas.com/category/buDTYyPw4D/undefined",
        },
        {
          id: "JwHcKqxh33",
          url: "https://www.boardgameatlas.com/category/JwHcKqxh33/undefined",
        },
        {
          id: "CWYOF9xu7O",
          url: "https://www.boardgameatlas.com/category/CWYOF9xu7O/undefined",
        },
      ],
      publishers: [
        {
          id: "UqOXSFZ8Sy",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/UqOXSFZ8Sy/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "m4T08lQftL",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/m4T08lQftL/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
      ],
      designers: [
        {
          id: "sXciRQQxa2",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/designer/sXciRQQxa2/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
      ],
      primary_publisher: {
        name: "OKAZU Brand",
        id: "UqOXSFZ8Sy",
        url: "https://www.boardgameatlas.com/publisher/UqOXSFZ8Sy/okazu-brand",
      },
      primary_designer: {
        name: "Hisashi Hayashi",
        id: "sXciRQQxa2",
        url: "https://www.boardgameatlas.com/designer/sXciRQQxa2/hisashi-hayashi",
      },
      developers: [],
      related_to: [],
      related_as: [],
      artists: ["Ryo Nyamo"],
      names: [],
      rules_url:
        "https://www.alderac.com/wp-content/uploads/2017/05/trains_rulebook_press_small-1.pdf",
      amazon_rank: 124994,
      official_url:
        "https://www.alderac.com/destination-fun/trains/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
      comment_count: 0,
      num_user_ratings: 129,
      average_user_rating: 3.4000117453605827,
      historical_low_prices: [
        {
          country: "AU",
          date: "2021-11-03T13:43:24.940Z",
          price: 89.95,
          isLow: false,
        },
        {
          country: "UK",
          date: "2021-12-02T03:22:19.245Z",
          price: 47.7,
          isLow: false,
        },
        {
          country: "CA",
          date: "2022-01-20T19:13:52.350Z",
          price: 53.7,
          isLow: false,
        },
        {
          country: "US",
          date: "2022-03-27T01:29:33.145Z",
          price: 39.99,
          isLow: false,
        },
      ],
      active: true,
      num_user_complexity_votes: 0,
      average_learning_complexity: 0,
      average_strategy_complexity: 0,
      visits: 741,
      lists: 382,
      mentions: 9,
      links: 4,
      plays: 476,
      rank: 400,
      type: "game",
      num_distributors: 0,
      trending_rank: 0,
      listing_clicks: 0,
      is_historical_low: false,
      skus: ["2148788235"],
      sku_objects: [
        {
          name: "Noble Knight Games",
          sku: "2148788235",
        },
      ],
      players: "2-4",
      playtime: "45",
      msrp_text: "$59.95",
      price_text: "$39.99",
      tags: [
        "Trains",
        "Trains Collection Base Game w Extra Cards",
        "Trains board game",
        "Trains ON SALE",
      ],
      images: {
        thumb:
          "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559258064927-512yAxZk0LL.jpg",
        small:
          "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559258064927-512yAxZk0LL.jpg",
        medium:
          "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559258064927-512yAxZk0LL.jpg",
        large:
          "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559258064927-512yAxZk0LL.jpg",
        original:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559258064927-512yAxZk0LL.jpg",
      },
      description_preview:
        " The railways of today are amazing things and bullet trains, freight trains and more keep entire countries running. From transporting the populace to carrying essential materials, trains play an integral part in a nation's power and economic development.  You will start with a small set of cards, but by building a more effective deck throughout the game, you will be able to place stations and lay rails over the maps of Osaka or Tokyo. Gain enough points from your railways and you will ultimately manage the most powerful railroads in modern Japan! ",
    },
    {
      id: "OIXt3DmJU0",
      handle: "catan",
      url: "https://www.boardgameatlas.com/game/OIXt3DmJU0/catan",
      edit_url: "https://www.boardgameatlas.com/game/OIXt3DmJU0/edit",
      name: "Catan",
      price: "39.19",
      price_ca: "36.97",
      price_uk: "35.78",
      price_au: "49.99",
      msrp: 55,
      msrps: [
        {
          country: "US",
          price: 55,
        },
      ],
      discount: "0.29",
      year_published: 1995,
      min_players: 3,
      max_players: 4,
      min_playtime: 45,
      max_playtime: 90,
      min_age: 10,
      description:
        "<p>The women and men of your expedition build the first two settlements. Fortunately, the land is rich in natural resources. You build roads and new settlements that eventually become cities. Will you succeed in gaining supremacy on Catan? Barter trade dominates the scene. Some resources you have in abundance, other resources are scarce. Ore for wool, brick for lumber - you trade according to what is needed for your current building projects. Proceed strategically! If you found your settlements in the right places and skillfully trade your resources, then the odds will be in your favor. But your opponents are smart too.</p>\r\n<p>To begin the game, we build the game board using hexagonal terrain tiles. Catan is born - a beautiful island with mountains, pastures, hills, fields, and forests, surrounded by the sea.</p>\r\n<p>Each of us places two small houses on spaces where three terrain hexes meet. They are our starting settlements.</p>\r\n<p>And so it begins. I roll two dice. An “11”! Each terrain hex is marked with a die roll number. Each player who owns a settlement adjacent to a terrain hex marked with the number rolled receives a resource produced by this hex. Hills produce brick, forests produce lumber, mountains produce ore, fields produce grain, and pastures produce wool.</p>\r\n<p>We use these resources to expand across Catan: we build roads and new settlements, or we upgrade our existing settlements to cities. For example, a road costs 1 brick and 1 lumber. If we do not have the necessary resources, we can acquire them by trading with our opponents.</p>\r\n<p>Each settlement is worth 1 victory point and each city is worth 2 victory points. If you expand cleverly, you may be the first player to reach 10 victory points and thus win the game!</p>",
      commentary: "",
      faq: "",
      thumb_url:
        "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629324722072.jpg",
      image_url:
        "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629324722072.jpg",
      matches_specs: null,
      specs: [],
      mechanics: [
        {
          id: "R0bGq4cAl4",
          url: "https://www.boardgameatlas.com/mechanic/R0bGq4cAl4/undefined",
        },
        {
          id: "ohABM4GjbC",
          url: "https://www.boardgameatlas.com/mechanic/ohABM4GjbC/undefined",
        },
        {
          id: "AVY6EvSQTP",
          url: "https://www.boardgameatlas.com/mechanic/AVY6EvSQTP/undefined",
        },
      ],
      categories: [
        {
          id: "mavSOM8vjH",
          url: "https://www.boardgameatlas.com/category/mavSOM8vjH/undefined",
        },
        {
          id: "N0TkEGfEsF",
          url: "https://www.boardgameatlas.com/category/N0TkEGfEsF/undefined",
        },
        {
          id: "7rV11PKqME",
          url: "https://www.boardgameatlas.com/category/7rV11PKqME/undefined",
        },
        {
          id: "jZEDOpx07e",
          url: "https://www.boardgameatlas.com/category/jZEDOpx07e/undefined",
        },
      ],
      publishers: [
        {
          id: "RY4XltbNAz",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/RY4XltbNAz/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "r2R8bUHIRD",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/r2R8bUHIRD/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "9GlpSO4zcy",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/9GlpSO4zcy/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "yLh8H5FK65",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/yLh8H5FK65/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "0bvxqCgoSm",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/0bvxqCgoSm/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "FG63HUGsWf",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/FG63HUGsWf/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "rK95BcOECc",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/rK95BcOECc/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "eJue6JPxqV",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/eJue6JPxqV/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "beoSVYQtGP",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/beoSVYQtGP/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "m26fBgcJwz",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/m26fBgcJwz/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "HAkNG813TS",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/HAkNG813TS/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "SXnhc3S9lv",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/SXnhc3S9lv/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "hRyavENXm0",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/hRyavENXm0/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "vJkLBDgn1j",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/vJkLBDgn1j/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "Dtrwc4ldq3",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/Dtrwc4ldq3/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "ja1W0hp62r",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/ja1W0hp62r/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "9XxoqlxAVw",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/9XxoqlxAVw/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "P9ZfBj0BBq",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/P9ZfBj0BBq/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "sOdfXQmRBg",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/sOdfXQmRBg/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "1TaoBxZ3GH",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/1TaoBxZ3GH/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "QZq0yTzciC",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/QZq0yTzciC/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "LhiwjGd2o7",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/LhiwjGd2o7/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "EqSluthV2x",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/EqSluthV2x/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "My6tXSDwGi",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/My6tXSDwGi/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "UMssR9EGlp",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/UMssR9EGlp/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "LeyRDCEgWD",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/LeyRDCEgWD/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "9DlitZqr9J",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/9DlitZqr9J/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "J8pMyONAQy",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/J8pMyONAQy/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "8NZhpDk9gP",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/8NZhpDk9gP/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "7GTti1NuCH",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/7GTti1NuCH/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "w9rkA29mT0",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/w9rkA29mT0/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "32liHCLQDl",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/32liHCLQDl/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "DGzIGrGHoR",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/DGzIGrGHoR/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "eQb3IOfYYF",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/eQb3IOfYYF/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "69FdScTBpp",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/69FdScTBpp/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "F8XIZ06AV1",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/F8XIZ06AV1/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "RlZVJC3kRi",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/RlZVJC3kRi/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
      ],
      designers: [
        {
          id: "LCjyh7WnHd",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/designer/LCjyh7WnHd/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
      ],
      primary_publisher: {
        id: "RY4XltbNAz",
        name: "KOSMOS",
        url: "https://www.boardgameatlas.com/publisher/RY4XltbNAz/kosmos",
      },
      primary_designer: {
        id: "LCjyh7WnHd",
        name: "Klaus Teuber",
        url: "https://www.boardgameatlas.com/designer/LCjyh7WnHd/klaus-teuber",
      },
      developers: [],
      related_to: [],
      related_as: [],
      artists: [
        "Volkan Baga",
        "Tanja Donner",
        "Pete Fenlon",
        "Jason Hawkins",
        "Michaela Kienle",
        "Harald Lieske",
        "Michael Menzel",
        "Marion Pott",
        "Matt Schwabel",
        "Franz Vohwinkel",
        "Stephen Graham Walsh",
      ],
      names: [],
      rules_url:
        "https://www.catan.com/sites/prod/files/2021-06/catan_base_rules_2020_200707.pdf",
      amazon_rank: 133,
      official_url:
        "https://www.catan.com/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
      sell_sheet_url: null,
      store_images_url: null,
      comment_count: 0,
      num_user_ratings: 859,
      average_user_rating: 3.253476962377076,
      size_height: 11.6,
      historical_low_prices: [
        {
          country: "AU",
          date: "2022-01-21T16:44:32.553Z",
          price: 52.01,
          isLow: false,
        },
        {
          country: "CA",
          date: "2022-01-25T14:03:51.126Z",
          price: 36.97,
          isLow: false,
        },
        {
          country: "UK",
          date: "2022-02-26T18:20:55.616Z",
          price: 35.78,
          isLow: false,
        },
        {
          country: "US",
          date: "2022-03-11T10:04:29.776Z",
          price: 39.19,
          isLow: false,
        },
      ],
      active: true,
      num_user_complexity_votes: 11,
      average_learning_complexity: 2.090909090909091,
      average_strategy_complexity: 2.5454545454545454,
      visits: 7302,
      lists: 1679,
      mentions: 120,
      links: 24,
      plays: 5121,
      rank: 22,
      type: "game",
      sku: "CNS3071",
      upc: "029877030712",
      num_distributors: 2,
      trending_rank: 0,
      listing_clicks: 11,
      is_historical_low: false,
      skus: ["CN3071", "2149146897", "2149270668", "2149187433", "2148942466"],
      sku_objects: [
        {
          name: "Boarding School Games",
          sku: "CN3071",
        },
        {
          name: "Noble Knight Games",
          sku: "2149146897",
        },
        {
          name: "Noble Knight Games",
          sku: "2149270668",
        },
        {
          name: "Noble Knight Games",
          sku: "2149187433",
        },
        {
          name: "Noble Knight Games",
          sku: "2148942466",
        },
      ],
      players: "3-4",
      playtime: "45-90",
      msrp_text: "$55.00",
      price_text: "$39.19",
      tags: [
        "Die Siedler von Catan ",
        "Les Colons de Catane",
        "Catan (Колонизаторы)",
        "Catan: Das Spiel",
        "Catan: Die Bordspel",
        "Catan: El Juego",
        "Catan: Gra planszowa",
        "Catan: Il Gioco",
        "Catan: Landnemarnir",
        "Catan: O Jogo",
        "Catan: Osnovna igra",
        "Catan: Telepesei",
        "Catane",
        "Catanin Uudisasukkaat",
        "I Coloni di Catan",
        "I Coloni di Katan",
        "Coloniștii din Catan",
        "Colonizadores de Catan",
        "Los Colonos de Catán",
        "Les Colons de Katane",
        "Os Descobridores de Catan",
        "Los Descubridores de Catán",
        "Els Colons de Catan",
        "Katan",
        "Katan no Kaitakusya",
        "Katanas ieceïotâji",
        "Katanas Ieceļotāji",
        "Katani Asustajad",
        "Katano salos naujakuriai",
        "Katano Salos Naujakuriai",
        "De Kolonisten van Catan",
        "Naseljenci otoka Catan",
        "Naseljenici ostrva Katan",
        "Naseljenici ostrva Katan / Насељеници острва Катан",
        "Die Ontdekkers van Catan",
        "Osadníci z Katanu",
        "Osadnicy z Catanu",
        "Settlers fra Catan",
        "The Settlers fra Catan",
        "Settlers från Catan",
        "The Settlers från Catan",
        "The Settlers of Catan",
        "Οι Άποικοι του Κατάν",
        "Заселниците на Катан",
        "Колонизаторы",
        "המתיישבים של קטאן",
        "นักบุกเบิกแห่ง Catan",
        "カタンの開拓者",
        "カタンの開拓者たち",
        "カタンの開拓者たち スタンダード版",
        "卡坦岛",
        "카탄",
        "카탄의 개척자",
        "Catan",
        "Catan 2015 Refresh Base Game",
        "Catan 2015 Refresh",
        "Settlers of Catan The Revised Edition",
        "Settlers of Catan The Printing",
        "Settlers of Catan Collection 2 Base Game 2 Expansions and 3 Extensions",
        "Catan Base Game",
        "CATAN Base Game",
        "Catan 5th Edition 2015",
        "Settlers of Catan The 2nd Printing",
        "Siedler Von Catan Die",
        "Settlers of Catan Collection 4 Base Game 2 Expansions",
        "Settlers of Catan Collection 4 Base Game 3 Expansions",
        "Catan Formerly known as Settlers of Catan",
        "Catan 5th Edition",
        "Catan Settlers of Catan",
        "Settlers of Catan 5th Edition",
        "Catan Trade Build Settle",
        "Catan 2015 Reprint In Store Only",
        "Catan 5Th Edition",
        "Catan 5th Edition 'Settlers of Catan' Base Game",
        "CATAN BASE GAME FRENCH",
        "CATAN BASE GAME ENGLISH",
        "CATAN",
        "Settlers of Catan",
        "Settlers of Catan, The (Revised Edition) W/Cities and Knights Expansion",
      ],
      images: {
        thumb:
          "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1629324722072.jpg",
        small:
          "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1629324722072.jpg",
        medium:
          "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1629324722072.jpg",
        large:
          "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1629324722072.jpg",
        original:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629324722072.jpg",
      },
      description_preview:
        " The women and men of your expedition build the first two settlements. Fortunately, the land is rich in natural resources. You build roads and new settlements that eventually become cities. Will you succeed in gaining supremacy on Catan? Barter trade dominates the scene. Some resources you have in abundance, other resources are scarce. Ore for wool, brick for lumber - you trade according to what is needed for your current building projects. Proceed strategically! If you found your settlements in the right places and skillfully trade your resources, then the odds will be in your favor. But your opponents are smart too. \r\n To begin the game, we build the game board using hexagonal terrain tiles. Catan is born - a beautiful island with mountains, pastures, hills, fields, and forests, surrounded by the sea. \r\n Each of us places two small houses on spaces where three terrain hexes meet. They are our starting settlements. \r\n And so it begins. I roll two dice. An “11”! Each terrain hex is marked with a die roll number. Each player who owns a settlement adjacent to a terrain hex marked with the number rolled receives a resource produced by this hex. Hills produce brick, forests produce lumber, mountains produce ore, fields produce grain, and pastures produce wool. \r\n We use these resources to expand across Catan: we build roads and new settlements, or we upgrade our existing settlements to cities. For example, a road costs 1 brick and 1 lumber. If we do not have the necessary resources, we can acquire them by trading with our opponents. \r\n Each settlement is worth 1 victory point and each city is worth 2 victory points. If you expand cleverly, you may be the first player to reach 10 victory points and thus win the game! ",
    },
    {
      id: "XAI0dayGSY",
      handle: "disney-villainous",
      url: "https://www.boardgameatlas.com/game/XAI0dayGSY/disney-villainous",
      edit_url: "https://www.boardgameatlas.com/game/XAI0dayGSY/edit",
      name: "Disney Villainous",
      price: "24.95",
      price_ca: "29.99",
      price_uk: "34.86",
      price_au: "69.80",
      msrp: 39.99,
      msrps: [
        {
          country: "UK",
          price: 0,
        },
        {
          country: "US",
          price: 39.99,
        },
        {
          country: "CA",
          price: 43.95,
        },
      ],
      discount: "0.38",
      year_published: 2018,
      min_players: 2,
      max_players: 6,
      min_playtime: 50,
      max_playtime: 50,
      min_age: 10,
      description:
        "<p>In this epic contest of sinister power, take on the role of a Disney Villain and strive to achieve your own devious objective. Discover your character's unique abilities and winning strategy while dealing twists of fate to thwart your opponents' schemes. Find out who will triumph over the forces of good and win it all!</p>\r\n<p><br /><strong>Contents:</strong><br />6 Boards<br />6 Villain Movers<br />180 Villain Cards<br />90 Fate Cards<br />84 Tokens<br />1 Cauldron<br />6 Reference Cards<br />6 Villain Guides<br />Instructions</p>",
      commentary: "",
      faq: "",
      thumb_url:
        "https://s3-us-west-1.amazonaws.com/5cc.images/games/userfiles/1648447284230-2b1ee14cbcac5b5acbd9cef7c4c1b65c_1000x1000.jpg",
      image_url:
        "https://s3-us-west-1.amazonaws.com/5cc.images/games/userfiles/1648447284230-2b1ee14cbcac5b5acbd9cef7c4c1b65c_1000x1000.jpg",
      matches_specs: null,
      specs: [],
      mechanics: [
        {
          id: "WPytek5P8l",
          url: "https://www.boardgameatlas.com/mechanic/WPytek5P8l/undefined",
        },
        {
          id: "qZx4PEzKKz",
          url: "https://www.boardgameatlas.com/mechanic/qZx4PEzKKz/undefined",
        },
        {
          id: "T8JEFYwoqy",
          url: "https://www.boardgameatlas.com/mechanic/T8JEFYwoqy/undefined",
        },
        {
          id: "XM2FYZmBHH",
          url: "https://www.boardgameatlas.com/mechanic/XM2FYZmBHH/undefined",
        },
      ],
      categories: [
        {
          id: "eX8uuNlQkQ",
          url: "https://www.boardgameatlas.com/category/eX8uuNlQkQ/undefined",
        },
        {
          id: "ZTneo8TaIO",
          url: "https://www.boardgameatlas.com/category/ZTneo8TaIO/undefined",
        },
        {
          id: "QAYkTHK1Dd",
          url: "https://www.boardgameatlas.com/category/QAYkTHK1Dd/undefined",
        },
        {
          id: "Sod2YBWMKi",
          url: "https://www.boardgameatlas.com/category/Sod2YBWMKi/undefined",
        },
        {
          id: "MHkqIVxwtx",
          url: "https://www.boardgameatlas.com/category/MHkqIVxwtx/undefined",
        },
        {
          id: "dO9HVl2TW7",
          url: "https://www.boardgameatlas.com/category/dO9HVl2TW7/undefined",
        },
        {
          id: "9EIayX6n5a",
          url: "https://www.boardgameatlas.com/category/9EIayX6n5a/undefined",
        },
      ],
      publishers: [
        {
          id: "mdjAyzqUAf",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/mdjAyzqUAf/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "jVKDlz7qmo",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/jVKDlz7qmo/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
      ],
      designers: [
        {
          id: "AJZLd7nMrz",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/designer/AJZLd7nMrz/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
      ],
      primary_publisher: {
        id: "mdjAyzqUAf",
        name: "Wonder Forge",
        url: "https://www.boardgameatlas.com/publisher/mdjAyzqUAf/wonder-forge",
      },
      primary_designer: {
        id: "AJZLd7nMrz",
        name: "Prospero Hall",
        url: "https://www.boardgameatlas.com/designer/AJZLd7nMrz/prospero-hall",
      },
      developers: [],
      related_to: [],
      related_as: [],
      artists: [],
      names: [],
      rules_url:
        "http://www.wonderforge.com/downloads/instructions/Disney_Villainous_Instructions.pdf",
      official_url:
        "http://www.wonderforge.com/games/disney/villainous/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
      comment_count: 0,
      num_user_ratings: 166,
      average_user_rating: 3.4123795180722887,
      weight_amount: 2.81,
      weight_units: "lbs",
      size_height: 10.5,
      size_depth: 2.5,
      size_units: "inches",
      historical_low_prices: [
        {
          country: "AU",
          date: "2022-01-20T09:57:40.863Z",
          price: 59.95,
          isLow: false,
        },
        {
          country: "US",
          date: "2022-03-16T18:40:42.534Z",
          price: 24.95,
          isLow: false,
        },
        {
          country: "UK",
          date: "2022-03-30T10:24:50.167Z",
          price: 34.86,
          isLow: false,
        },
        {
          country: "CA",
          date: "2022-04-05T20:22:37.693Z",
          price: 29.99,
          isLow: false,
        },
      ],
      active: true,
      num_user_complexity_votes: 3,
      average_learning_complexity: 3,
      average_strategy_complexity: 2,
      visits: 3045,
      lists: 466,
      mentions: 25,
      links: 22,
      plays: 568,
      rank: 247,
      type: "game",
      sku: "WFG60001739",
      upc: "810558017395",
      num_distributors: 1,
      trending_rank: 88,
      listing_clicks: 0,
      is_historical_low: false,
      skus: ["RVN 60001739", "2149257697", "2148871575"],
      sku_objects: [
        {
          name: "Boarding School Games",
          sku: "RVN 60001739",
        },
        {
          name: "Noble Knight Games",
          sku: "2149257697",
        },
        {
          name: "Noble Knight Games",
          sku: "2148871575",
        },
      ],
      players: "2-6",
      playtime: "50",
      msrp_text: "$39.99",
      price_text: "$24.95",
      tags: [
        "Disney's Villainous 2018 Edition",
        "Disney Villainous",
        "Villainous 2019 Edition",
        "Villainous",
        "DISNEY VILLAINOUS",
        "Disney Villainous Game",
        "Disney Villainous The Worst Takes It All",
        "Disney Villainous The Worst Takes It All Base Game",
        "Disney Villainous French Version",
        "Ravensburger Disney Villainous The Worst Takes It All Strategy",
      ],
      images: {
        thumb:
          "https://d2k4q26owzy373.cloudfront.net/40x40/games/userfiles/1648447284230-2b1ee14cbcac5b5acbd9cef7c4c1b65c_1000x1000.jpg",
        small:
          "https://d2k4q26owzy373.cloudfront.net/150x150/games/userfiles/1648447284230-2b1ee14cbcac5b5acbd9cef7c4c1b65c_1000x1000.jpg",
        medium:
          "https://d2k4q26owzy373.cloudfront.net/350x350/games/userfiles/1648447284230-2b1ee14cbcac5b5acbd9cef7c4c1b65c_1000x1000.jpg",
        large:
          "https://d2k4q26owzy373.cloudfront.net/700x700/games/userfiles/1648447284230-2b1ee14cbcac5b5acbd9cef7c4c1b65c_1000x1000.jpg",
        original:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/userfiles/1648447284230-2b1ee14cbcac5b5acbd9cef7c4c1b65c_1000x1000.jpg",
      },
      description_preview:
        " In this epic contest of sinister power, take on the role of a Disney Villain and strive to achieve your own devious objective. Discover your character's unique abilities and winning strategy while dealing twists of fate to thwart your opponents' schemes. Find out who will triumph over the forces of good and win it all! \r\n   Contents:  6 Boards 6 Villain Movers 180 Villain Cards 90 Fate Cards 84 Tokens 1 Cauldron 6 Reference Cards 6 Villain Guides Instructions ",
    },
    {
      id: "i5Oqu5VZgP",
      handle: "azul",
      url: "https://www.boardgameatlas.com/game/i5Oqu5VZgP/azul",
      edit_url: "https://www.boardgameatlas.com/game/i5Oqu5VZgP/edit",
      name: "Azul",
      price: "31.99",
      price_ca: "37.95",
      price_uk: "31.99",
      price_au: "48.99",
      msrp: 39.99,
      msrps: [
        {
          country: "US",
          price: 39.99,
        },
        {
          country: "CA",
          price: 0,
        },
        {
          country: "UK",
          price: 39.99,
        },
        {
          country: "AU",
          price: 69.95,
        },
      ],
      discount: "0.20",
      year_published: 2017,
      min_players: 2,
      max_players: 4,
      min_playtime: 30,
      max_playtime: 60,
      min_age: 8,
      description:
        "<p><strong>Azul</strong> was designed by the world famous, award-winning game author Michael Riesling. Azul captures the beautiful aesthetics of Moorish art in a contemporary board game.</p>\r\n<p>Players compete as artisans decorating the walls of the royal Palace of Dvora. By carefully drafting the correct Quantity and style of tiles, the most clever of artisans plan ahead to maximize the beauty of their work (not to mention their scores!) while ensuring they wasted no supplies in the process.</p>\r\n<p>Introduced by the moors, &quot;azulejos&quot; (originally white and blue ceramic tiles) were fully embraced by the Portuguese, when their King Manuel I, on a visit to the Alhambra Palace in Southern Spain, was mesmerized by the stunning beauty of the Moorish decorative tiles. The King, awestruck by the interior beauty of the Alhambra, immediately ordered that his own Palace in Portugal be decorated with similar wall tiles.</p>\r\n<p>As a tile-laying artist, you have been challenged to embellish the walls of the royal Palace of Dvora.</p>",
      commentary: "",
      faq: "",
      thumb_url:
        "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254200327-61EFZADvURL.jpg",
      image_url:
        "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254200327-61EFZADvURL.jpg",
      matches_specs: null,
      specs: [],
      mechanics: [
        {
          id: "wV5peB05xs",
          url: "https://www.boardgameatlas.com/mechanic/wV5peB05xs/undefined",
        },
        {
          id: "9ZlbQA8L5l",
          url: "https://www.boardgameatlas.com/mechanic/9ZlbQA8L5l/undefined",
        },
        {
          id: "9YdRn9J9oZ",
          url: "https://www.boardgameatlas.com/mechanic/9YdRn9J9oZ/undefined",
        },
        {
          id: "8PN2HE86wg",
          url: "https://www.boardgameatlas.com/mechanic/8PN2HE86wg/undefined",
        },
      ],
      categories: [
        {
          id: "hBqZ3Ar4RJ",
          url: "https://www.boardgameatlas.com/category/hBqZ3Ar4RJ/undefined",
        },
      ],
      publishers: [
        {
          id: "geGEEdKZJI",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/geGEEdKZJI/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "TpGyVwxvun",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/TpGyVwxvun/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
      ],
      designers: [
        {
          id: "6xWTtWTLId",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/designer/6xWTtWTLId/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
      ],
      primary_publisher: {
        id: "geGEEdKZJI",
        name: "Next Move Games",
        url: "https://www.boardgameatlas.com/publisher/geGEEdKZJI/next-move-games",
      },
      primary_designer: {
        id: "6xWTtWTLId",
        name: "Michael Kiesling",
        url: "https://www.boardgameatlas.com/designer/6xWTtWTLId/michael-kiesling",
      },
      developers: [],
      related_to: [],
      related_as: [],
      artists: ["Philippe Guérin", "Chris Quilliams"],
      names: [],
      rules_url:
        "https://www.nextmovegames.com/en/index.php?controller=attachment&id_attachment=9",
      amazon_rank: 985,
      cs_rating: 4.4,
      official_url:
        "https://www.nextmovegames.com/en/home/48-azul.html?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
      sell_sheet_url: null,
      store_images_url: null,
      comment_count: 1,
      num_user_ratings: 744,
      average_user_rating: 3.859181940371455,
      size_height: 10,
      historical_low_prices: [
        {
          country: "AU",
          date: "2022-03-22T23:29:47.103Z",
          price: 48.99,
          isLow: false,
        },
        {
          country: "UK",
          date: "2022-03-27T13:49:04.235Z",
          price: 31.99,
          isLow: false,
        },
        {
          country: "US",
          date: "2022-04-05T07:20:47.318Z",
          price: 31.99,
          isLow: false,
        },
        {
          country: "CA",
          date: "2022-04-05T14:34:33.600Z",
          price: 37.95,
          isLow: false,
        },
      ],
      active: true,
      num_user_complexity_votes: 12,
      average_learning_complexity: 2.083333333333333,
      average_strategy_complexity: 2.166666666666667,
      visits: 11231,
      lists: 1969,
      mentions: 204,
      links: 23,
      plays: 9330,
      rank: 6,
      type: "game",
      num_distributors: 3,
      trending_rank: 0,
      listing_clicks: 30,
      is_historical_low: false,
      skus: ["826956600107"],
      sku_objects: [
        {
          name: "Games Paradise",
          sku: "826956600107",
        },
      ],
      players: "2-4",
      playtime: "30-60",
      msrp_text: "$39.99",
      price_text: "$31.99",
      tags: [
        "アズール",
        "花磚物語",
        "아줄",
        "Azul Next Move Bundle",
        "Azul Plan B Board Game",
        "Azul ML",
        "Azul Dent Ding",
        "Azul (Box Damage)",
        "Azul",
        "Azul 2021 Edition",
        "Azul board game",
        "AZUL",
        "Generic ENTERBIZ Azul Board GamesMulti ColoredFull PackKorean Ver",
        "Azul Strategy Game",
        "AZUL BASE GAME MULTILINGUAL",
      ],
      images: {
        thumb:
          "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254200327-61EFZADvURL.jpg",
        small:
          "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254200327-61EFZADvURL.jpg",
        medium:
          "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254200327-61EFZADvURL.jpg",
        large:
          "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254200327-61EFZADvURL.jpg",
        original:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254200327-61EFZADvURL.jpg",
      },
      description_preview:
        '  Azul  was designed by the world famous, award-winning game author Michael Riesling. Azul captures the beautiful aesthetics of Moorish art in a contemporary board game. \r\n Players compete as artisans decorating the walls of the royal Palace of Dvora. By carefully drafting the correct Quantity and style of tiles, the most clever of artisans plan ahead to maximize the beauty of their work (not to mention their scores!) while ensuring they wasted no supplies in the process. \r\n Introduced by the moors, "azulejos" (originally white and blue ceramic tiles) were fully embraced by the Portuguese, when their King Manuel I, on a visit to the Alhambra Palace in Southern Spain, was mesmerized by the stunning beauty of the Moorish decorative tiles. The King, awestruck by the interior beauty of the Alhambra, immediately ordered that his own Palace in Portugal be decorated with similar wall tiles. \r\n As a tile-laying artist, you have been challenged to embellish the walls of the royal Palace of Dvora. ',
    },
    {
      id: "cb1DcPrnkz",
      handle: "secret-hitler",
      url: "https://www.boardgameatlas.com/game/cb1DcPrnkz/secret-hitler",
      edit_url: "https://www.boardgameatlas.com/game/cb1DcPrnkz/edit",
      name: "Secret Hitler",
      price: "35.00",
      price_ca: "56.99",
      price_uk: "0.00",
      price_au: "59.16",
      msrp: 35,
      msrps: [
        {
          country: "US",
          price: 35,
        },
      ],
      discount: "0.00",
      year_published: 2016,
      min_players: 5,
      max_players: 10,
      min_playtime: 30,
      max_playtime: 45,
      min_age: 17,
      description:
        "<p>Secret Hitler is a dramatic game of political intrigue and betrayal set in 1930's Germany. Players are secretly divided into two teams - liberals and fascists. Known only to each other, the fascists coordinate to sow distrust and install their cold-blooded leader. The liberals must find and stop the Secret Hitler before it's too late. Secret Hitler introduces new mechanics to the hidden-identity game genre. The first is the element of randomness. When laws are passed, the President draws three policies, passes two to the Chancellor, and the Chancellor enacts one. Only the enacted policy is revealed, so players have to rely on the President and Chancellor's word to know what got discarded. The deck has a known initial composition (11 Fascist policies, 6 Liberal policies), and players can roughly track deck contents based on what the President and Chancellor report, though someone might have lied about what was discarded. That means players can form reasonable expectations and plan around probability, but they can also manipulate future probabilities and expectations in a way that benefits their team. The second new mechanic is the &quot;Hitler&quot; identity: If Hitler is elected as Chancellor after the third fascist policy has already been enacted, the game ends immediately and the fascists win. This means Hitler will spend most of the game playing as a liberal to gain players' trust. Once the third fascist policy is enacted, anyone who has helped the group becomes immediately suspect; if the liberals make a wrong move at this point, they lose immediately. This creates incredible moments of tension and relief in the game.</p>",
      commentary: "",
      faq: "",
      thumb_url:
        "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257704919-51BpeBNTi-L.jpg",
      image_url:
        "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257704919-51BpeBNTi-L.jpg",
      matches_specs: null,
      specs: [],
      mechanics: [
        {
          id: "ZX3hYcF9H7",
          url: "https://www.boardgameatlas.com/mechanic/ZX3hYcF9H7/undefined",
        },
        {
          id: "hwyCo1W0hi",
          url: "https://www.boardgameatlas.com/mechanic/hwyCo1W0hi/undefined",
        },
        {
          id: "U7vKyeRc0N",
          url: "https://www.boardgameatlas.com/mechanic/U7vKyeRc0N/undefined",
        },
        {
          id: "Voqy2dgrIM",
          url: "https://www.boardgameatlas.com/mechanic/Voqy2dgrIM/undefined",
        },
        {
          id: "BGrhzIN69D",
          url: "https://www.boardgameatlas.com/mechanic/BGrhzIN69D/undefined",
        },
        {
          id: "9jnCsVuRat",
          url: "https://www.boardgameatlas.com/mechanic/9jnCsVuRat/undefined",
        },
        {
          id: "JYYdBW6UCE",
          url: "https://www.boardgameatlas.com/mechanic/JYYdBW6UCE/undefined",
        },
      ],
      categories: [
        {
          id: "PinhJrhnxU",
          url: "https://www.boardgameatlas.com/category/PinhJrhnxU/undefined",
        },
        {
          id: "eX8uuNlQkQ",
          url: "https://www.boardgameatlas.com/category/eX8uuNlQkQ/undefined",
        },
        {
          id: "TYnxiuiI3X",
          url: "https://www.boardgameatlas.com/category/TYnxiuiI3X/undefined",
        },
        {
          id: "X8J7RM6dxX",
          url: "https://www.boardgameatlas.com/category/X8J7RM6dxX/undefined",
        },
        {
          id: "TKQncFVX74",
          url: "https://www.boardgameatlas.com/category/TKQncFVX74/undefined",
        },
      ],
      publishers: [
        {
          id: "fZduAVGr8B",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/publisher/fZduAVGr8B/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
      ],
      designers: [
        {
          id: "M32HuOLW0p",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/designer/M32HuOLW0p/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "S6herE8yYQ",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/designer/S6herE8yYQ/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
        {
          id: "mGP4HWJnG1",
          num_games: null,
          score: 9999999,
          game: {},
          url: "https://www.boardgameatlas.com/designer/mGP4HWJnG1/undefined",
          images: {
            thumb: null,
            small: null,
            medium: null,
            large: null,
            original: null,
          },
        },
      ],
      primary_publisher: {
        id: "fZduAVGr8B",
        name: "Secret Hitler",
        url: "https://www.boardgameatlas.com/publisher/fZduAVGr8B/secret-hitler",
      },
      primary_designer: {
        id: "M32HuOLW0p",
        name: "Mike Boxleiter",
        url: "https://www.boardgameatlas.com/designer/M32HuOLW0p/mike-boxleiter",
      },
      developers: [],
      related_to: [],
      related_as: [],
      artists: ["Mackenzie Schubert"],
      names: [],
      rules_url: "http://secrethitler.com/assets/Secret_Hitler_Rules.pdf",
      amazon_rank: 155,
      official_url:
        "http://secrethitler.com/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
      comment_count: 0,
      num_user_ratings: 249,
      average_user_rating: 3.6454211004602346,
      weight_amount: 2.05,
      weight_units: "lbs",
      size_height: 15.4,
      size_depth: 2.2,
      size_units: "inches ",
      historical_low_prices: [
        {
          country: "AU",
          date: "2021-12-06T07:55:21.071Z",
          price: 59.95,
          isLow: false,
        },
        {
          country: "UK",
          date: "2021-12-13T07:34:04.218Z",
          price: 36.79,
          isLow: false,
        },
        {
          country: "CA",
          date: "2022-01-08T12:50:06.356Z",
          price: 53.99,
          isLow: false,
        },
        {
          country: "US",
          date: "2022-01-14T16:28:24.607Z",
          price: 35,
          isLow: false,
        },
      ],
      active: true,
      num_user_complexity_votes: 1,
      average_learning_complexity: 2,
      average_strategy_complexity: 3,
      visits: 2666,
      lists: 705,
      mentions: 49,
      links: 7,
      plays: 2397,
      rank: 127,
      type: "game",
      num_distributors: 0,
      trending_rank: 0,
      listing_clicks: 0,
      is_historical_low: false,
      skus: ["2148461769", "711746875073"],
      sku_objects: [
        {
          name: "Noble Knight Games",
          sku: "2148461769",
        },
        {
          name: "Games Paradise",
          sku: "711746875073",
        },
      ],
      players: "5-10",
      playtime: "30-45",
      msrp_text: "$35.00",
      price_text: "$35.00",
      tags: [
        "Secret Hitler",
        "Secret Hitler Game Made By Cards Against Humanity Publisher",
        "Secret Hitler Kickstarter Exclusive Wood Box Version",
        "SECRET HITLER",
        "SECRET HITLER WOODEN BOX EDITION",
        "SECRET HITLER ENGLISH",
      ],
      images: {
        thumb:
          "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559257704919-51BpeBNTi-L.jpg",
        small:
          "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559257704919-51BpeBNTi-L.jpg",
        medium:
          "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559257704919-51BpeBNTi-L.jpg",
        large:
          "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559257704919-51BpeBNTi-L.jpg",
        original:
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257704919-51BpeBNTi-L.jpg",
      },
      description_preview:
        " Secret Hitler is a dramatic game of political intrigue and betrayal set in 1930's Germany. Players are secretly divided into two teams - liberals and fascists. Known only to each other, the fascists coordinate to sow distrust and install their cold-blooded leader. The liberals must find and stop the Secret Hitler before it's too late. Secret Hitler introduces new mechanics to the hidden-identity game genre. The first is the element of randomness. When laws are passed, the President draws three policies, passes two to the Chancellor, and the Chancellor enacts one. Only the enacted policy is revealed, so players have to rely on the President and Chancellor's word to know what got discarded. The deck has a known initial composition (11 Fascist policies, 6 Liberal policies), and players can roughly track deck contents based on what the President and Chancellor report, though someone might have lied about what was discarded. That means players can form reasonable expectations and plan around probability, but they can also manipulate future probabilities and expectations in a way that benefits their team. The second new mechanic is the \"Hitler\" identity: If Hitler is elected as Chancellor after the third fascist policy has already been enacted, the game ends immediately and the fascists win. This means Hitler will spend most of the game playing as a liberal to gain players' trust. Once the third fascist policy is enacted, anyone who has helped the group becomes immediately suspect; if the liberals make a wrong move at this point, they lose immediately. This creates incredible moments of tension and relief in the game. ",
    },
  ],
  count: 6,
};
