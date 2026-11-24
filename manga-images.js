// Locally cached character artwork; source URLs retained for maintenance.
const mangaImages = {
  "onepiece:Franky": {
    "portrait": "assets/onepiece/franky-portrait.jpg",
    "gallery": [
      "assets/onepiece/franky-gallery-1.webp",
      "assets/onepiece/franky-gallery-2.jpg",
      "assets/onepiece/franky-gallery-3.jpg"
    ],
    "sourcePage": "https://one-piece.com/character/franky/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/franky/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/franky/img.jpg",
        "https://one-piece.com/img/character/franky/franky_02.jpg",
        "https://one-piece.com/img/character/franky/franky_03.jpg"
      ]
    }
  },
  "onepiece:Brook": {
    "portrait": "assets/onepiece/brook-portrait.jpg",
    "gallery": [
      "assets/onepiece/brook-gallery-1.webp",
      "assets/onepiece/brook-gallery-2.jpg",
      "assets/onepiece/brook-gallery-3.jpg"
    ],
    "sourcePage": "https://one-piece.com/character/brook/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/brook/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/brook/img.jpg",
        "https://one-piece.com/img/character/brook/brook_02.jpg",
        "https://one-piece.com/img/character/brook/brook_03.jpg"
      ]
    }
  },
  "onepiece:Nico Robin": {
    "portrait": "assets/onepiece/robin-portrait.jpg",
    "gallery": [
      "assets/onepiece/robin-gallery-1.webp",
      "assets/onepiece/robin-gallery-2.jpg",
      "assets/onepiece/robin-gallery-3.jpg"
    ],
    "sourcePage": "https://one-piece.com/character/robin/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/robin/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/robin/img.jpg",
        "https://one-piece.com/img/character/robin/robin_02.jpg",
        "https://one-piece.com/img/character/robin/robin_03.jpg"
      ]
    }
  },
  "onepiece:Jinbe": {
    "portrait": "assets/onepiece/jinbe-portrait.jpg",
    "gallery": [
      "assets/onepiece/jinbe-gallery-1.webp",
      "assets/onepiece/jinbe-gallery-2.jpg",
      "assets/onepiece/jinbe-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Jinbe/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Jinbe/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Jinbe/img.jpg",
        "https://one-piece.com/img/character/Jinbe/Jinbe_02.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/7/71/Jinbe%27s_Current_Wanted_Poster.png/revision/latest?cb=20240724033137"
      ]
    }
  },
  "onepiece:Shanks": {
    "portrait": "assets/onepiece/shanks-portrait.jpg",
    "gallery": [
      "assets/onepiece/shanks-gallery-1.png",
      "assets/onepiece/shanks-gallery-2.jpg",
      "assets/onepiece/shanks-gallery-3.png"
    ],
    "sourcePage": "https://one-piece.com/character/Shanks/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Shanks/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Shanks/Shanks_main_egghead.png",
        "https://one-piece.com/img/character/Shanks/Shanks_02.jpg",
        "https://one-piece.com/img/character/Shanks/Shanks_03.png"
      ]
    }
  },
  "onepiece:Edward Newgate": {
    "portrait": "assets/onepiece/newgate-portrait.jpg",
    "gallery": [
      "assets/onepiece/newgate-gallery-1.webp",
      "assets/onepiece/newgate-gallery-2.webp",
      "assets/onepiece/newgate-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/edward_newgate/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/edward_newgate/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/edward_newgate/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/8/88/Edward_Newgate_as_a_Young_Pirate.png/revision/latest/scale-to-width-down/900?cb=20230617170744",
        "https://static.wikia.nocookie.net/onepiece/images/5/54/Edward_Newgate_Age_36.png/revision/latest?cb=20250525185339"
      ]
    }
  },
  "onepiece:Sabo": {
    "portrait": "assets/onepiece/sabo-portrait.jpg",
    "gallery": [
      "assets/onepiece/sabo-gallery-1.jpg",
      "assets/onepiece/sabo-gallery-2.jpg",
      "assets/onepiece/sabo-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/sabo/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/sabo/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/sabo/img.jpg",
        "https://one-piece.com/img/character/sabo/sabo_02.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/0/02/Sabo%27s_Timeskip_Outfit.png/revision/latest?cb=20240901140310"
      ]
    }
  },
  "onepiece:Portgas D. Ace": {
    "portrait": "assets/onepiece/ace-portrait.jpg",
    "gallery": [
      "assets/onepiece/ace-gallery-1.png",
      "assets/onepiece/ace-gallery-2.webp",
      "assets/onepiece/ace-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/ace/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/ace/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/ace/ace_main_wanokuni.png",
        "https://static.wikia.nocookie.net/onepiece/images/9/9a/SuperDX-Portgas-D-Ace_front.png/revision/latest?cb=20130316024147",
        "https://static.wikia.nocookie.net/onepiece/images/7/78/One_Piece_Burning_Blood_Fire_Fist_Portgas_D._Ace_%28Artwork%29.png/revision/latest?cb=20190208144447"
      ]
    }
  },
  "onepiece:Baggy": {
    "portrait": "assets/onepiece/buggy-portrait.jpg",
    "gallery": [
      "assets/onepiece/buggy-gallery-1.jpg",
      "assets/onepiece/buggy-gallery-2.jpg",
      "assets/onepiece/buggy-gallery-3.jpg"
    ],
    "sourcePage": "https://one-piece.com/character/Buggy/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Buggy/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Buggy/img.jpg",
        "https://one-piece.com/img/character/Buggy/Buggy_02.jpg",
        "https://one-piece.com/img/character/Buggy/Buggy_03.jpg"
      ]
    }
  },
  "onepiece:Charlotte Linlin": {
    "portrait": "assets/onepiece/bigmom-portrait.jpg",
    "gallery": [
      "assets/onepiece/bigmom-gallery-1.webp",
      "assets/onepiece/bigmom-gallery-2.webp",
      "assets/onepiece/bigmom-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/CharlotteLinlin/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/CharlotteLinlin/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/CharlotteLinlin/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/f/f7/Charlotte_Linlin_at_Age_5.png/revision/latest?cb=20181015143036",
        "https://static.wikia.nocookie.net/onepiece/images/d/d8/Charlotte_Linlin_Anime_Infobox.png/revision/latest/scale-to-width-down/900?cb=20180423150804"
      ]
    }
  },
  "onepiece:Donquixote Doflamingo": {
    "portrait": "assets/onepiece/doflamingo-portrait.jpg",
    "gallery": [
      "assets/onepiece/doflamingo-gallery-1.webp",
      "assets/onepiece/doflamingo-gallery-2.jpg",
      "assets/onepiece/doflamingo-gallery-3.jpg"
    ],
    "sourcePage": "https://one-piece.com/character/doflamingo/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/doflamingo/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/doflamingo/img.jpg",
        "https://one-piece.com/img/character/doflamingo/doflamingo_02.jpg",
        "https://one-piece.com/img/character/doflamingo/doflamingo_03.jpg"
      ]
    }
  },
  "onepiece:Boa Hancock": {
    "portrait": "assets/onepiece/hancock-portrait.jpg",
    "gallery": [
      "assets/onepiece/hancock-gallery-1.png",
      "assets/onepiece/hancock-gallery-2.webp",
      "assets/onepiece/hancock-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Boa_Hancock/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Boa_Hancock/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Boa_Hancock/Boa_Hancock_main_egghead.png",
        "https://static.wikia.nocookie.net/onepiece/images/5/51/Early_Boa_Hancock.png/revision/latest?cb=20150403174650",
        "https://static.wikia.nocookie.net/onepiece/images/e/e9/Special_Quality_Boa_Hancock.png/revision/latest?cb=20130330015200"
      ]
    }
  },
  "onepiece:Crocodile": {
    "portrait": "assets/onepiece/crocodile-portrait.jpg",
    "gallery": [
      "assets/onepiece/crocodile-gallery-1.png",
      "assets/onepiece/crocodile-gallery-2.webp",
      "assets/onepiece/crocodile-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Crocodile/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Crocodile/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Crocodile/Crocodile_main_egghead.png",
        "https://static.wikia.nocookie.net/onepiece/images/9/9c/Crocodile%27s_Poisonous_Hook.png/revision/latest?cb=20230309043116",
        "https://static.wikia.nocookie.net/onepiece/images/3/3b/GashaponGrandBattle1-Crocodile.png/revision/latest?cb=20130725055512"
      ]
    }
  },
  "onepiece:Dracule Mihawk": {
    "portrait": "assets/onepiece/mihawk-portrait.jpg",
    "gallery": [
      "assets/onepiece/mihawk-gallery-1.png",
      "assets/onepiece/mihawk-gallery-2.png",
      "assets/onepiece/mihawk-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Dracule_Mihawk/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Dracule_Mihawk/face.jpg",
      "gallery": [
        "https://one-piece.com/img/character/Dracule_Mihawk/Dracule_Mihawk_02.png",
        "https://one-piece.com/img/character/Dracule_Mihawk/Dracule_Mihawk_03.png",
        "https://static.wikia.nocookie.net/onepiece/images/c/c3/Dracule_Mihawk_at_Age_19.png/revision/latest?cb=20210421064951"
      ]
    }
  },
  "onepiece:Trafalgar D. Water Law": {
    "portrait": "assets/onepiece/law-portrait.jpg",
    "gallery": [
      "assets/onepiece/law-gallery-1.png",
      "assets/onepiece/law-gallery-2.jpg",
      "assets/onepiece/law-gallery-3.jpg"
    ],
    "sourcePage": "https://one-piece.com/character/law/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/law/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/law/law_main_egghead.png",
        "https://one-piece.com/img/character/law/law_02.jpg",
        "https://one-piece.com/img/character/law/law_03.jpg"
      ]
    }
  },
  "onepiece:Bartholomew Kuma": {
    "portrait": "assets/onepiece/kuma-portrait.jpg",
    "gallery": [
      "assets/onepiece/kuma-gallery-1.png",
      "assets/onepiece/kuma-gallery-2.webp",
      "assets/onepiece/kuma-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Bartholomew_Kuma/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Bartholomew_Kuma/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Bartholomew_Kuma/Kuma_main_egghead.png",
        "https://static.wikia.nocookie.net/onepiece/images/f/f0/One_Piece_POP_Bartholomew_Kuma.png/revision/latest?cb=20150311020737",
        "https://static.wikia.nocookie.net/onepiece/images/9/90/Bartholomew_Kuma_Portrait.png/revision/latest?cb=20190823034703"
      ]
    }
  },
  "onepiece:Gecko Moria": {
    "portrait": "assets/onepiece/moria-portrait.jpg",
    "gallery": [
      "assets/onepiece/moria-gallery-1.jpg",
      "assets/onepiece/moria-gallery-2.webp",
      "assets/onepiece/moria-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Gecko_Moria/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Gecko_Moria/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Gecko_Moria/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/6/65/Gecko_Moria_Full_Appearance.png/revision/latest/scale-to-width-down/900?cb=20211211211944",
        "https://static.wikia.nocookie.net/onepiece/images/6/6c/Gecko_Moria_in_Unlimited_Cruise.png/revision/latest?cb=20090702120902"
      ]
    }
  },
  "onepiece:Eustass Kid": {
    "portrait": "assets/onepiece/kid-portrait.jpg",
    "gallery": [
      "assets/onepiece/kid-gallery-1.webp",
      "assets/onepiece/kid-gallery-2.jpg",
      "assets/onepiece/kid-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/kid/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/kid/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/kid/img.jpg",
        "https://one-piece.com/img/character/kid/kid_02.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/6/6c/Eustass_Kid_in_the_New_World.png/revision/latest/scale-to-width-down/900?cb=20210912033525"
      ]
    }
  },
  "onepiece:Jewelry Bonney": {
    "portrait": "assets/onepiece/bonney-portrait.jpg",
    "gallery": [
      "assets/onepiece/bonney-gallery-1.webp",
      "assets/onepiece/bonney-gallery-2.webp",
      "assets/onepiece/bonney-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Jewelry_Bonney/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Jewelry_Bonney/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Jewelry_Bonney/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/7/71/Jewelry_Bonney_Portrait.png/revision/latest?cb=20240806045754",
        "https://static.wikia.nocookie.net/onepiece/images/5/53/Jewelry_Bonney_as_a_Male.png/revision/latest?cb=20131110201111"
      ]
    }
  },
  "onepiece:Killer": {
    "portrait": "assets/onepiece/killer-portrait.jpg",
    "gallery": [
      "assets/onepiece/killer-gallery-1.webp",
      "assets/onepiece/killer-gallery-2.webp",
      "assets/onepiece/killer-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/killer/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/killer/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/killer/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/9/96/Killer%27s_Face.png/revision/latest/scale-to-width-down/900?cb=20200719032431",
        "https://static.wikia.nocookie.net/onepiece/images/2/29/POPNeoDX-Killer.png/revision/latest?cb=20150311023137"
      ]
    }
  },
  "onepiece:Capone Bege": {
    "portrait": "assets/onepiece/bege-portrait.jpg",
    "gallery": [
      "assets/onepiece/bege-gallery-1.webp",
      "assets/onepiece/bege-gallery-2.webp",
      "assets/onepiece/bege-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Capone_Bege/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Capone_Bege/face.jpg",
      "gallery": [
        "https://static.wikia.nocookie.net/onepiece/images/4/4e/Capone_Bege%27s_Ability.gif/revision/latest?cb=20120815065746",
        "https://static.wikia.nocookie.net/onepiece/images/0/05/Capone_Bege_Manga_Pre_Timeskip_Infobox.png/revision/latest?cb=20211029235335",
        "https://static.wikia.nocookie.net/onepiece/images/7/78/Capone_Bege_in_the_New_World.png/revision/latest/scale-to-width-down/900?cb=20231128000020"
      ]
    }
  },
  "onepiece:Carrot": {
    "portrait": "assets/onepiece/carrot-portrait.jpg",
    "gallery": [
      "assets/onepiece/carrot-gallery-1.webp",
      "assets/onepiece/carrot-gallery-2.webp",
      "assets/onepiece/carrot-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/carrot/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/carrot/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/carrot/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/1/17/Carrot%27s_Drawings.png/revision/latest/scale-to-width-down/900?cb=20180114134053",
        "https://static.wikia.nocookie.net/onepiece/images/8/84/Carrot_Jumputi.png/revision/latest?cb=20210217100013"
      ]
    }
  },
  "onepiece:Scratchmen Apoo": {
    "portrait": "assets/onepiece/apoo-portrait.jpg",
    "gallery": [
      "assets/onepiece/apoo-gallery-1.webp",
      "assets/onepiece/apoo-gallery-2.jpg",
      "assets/onepiece/apoo-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/apoo/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/apoo/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/apoo/img.jpg",
        "https://one-piece.com/img/character/apoo/apoo_02.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/4/41/Scratchmen_Apoo_Portrait.png/revision/latest?cb=20200426065517"
      ]
    }
  },
  "onepiece:X Drake": {
    "portrait": "assets/onepiece/drake-portrait.jpg",
    "gallery": [
      "assets/onepiece/drake-gallery-1.webp",
      "assets/onepiece/drake-gallery-2.webp",
      "assets/onepiece/drake-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/X_Drake/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/X_Drake/face.jpg",
      "gallery": [
        "https://static.wikia.nocookie.net/onepiece/images/b/b9/X_Drake_Armament_Haki.png/revision/latest/scale-to-width-down/900?cb=20260507214602",
        "https://static.wikia.nocookie.net/onepiece/images/c/c5/X_Drake_as_a_Young_Marine.png/revision/latest?cb=20121205212759",
        "https://static.wikia.nocookie.net/onepiece/images/3/36/X_Drake_Anime_Pre_Timeskip_Infobox.png/revision/latest?cb=20230127014013"
      ]
    }
  },
  "onepiece:Basil Hawkins": {
    "portrait": "assets/onepiece/hawkins-portrait.jpg",
    "gallery": [
      "assets/onepiece/hawkins-gallery-1.webp",
      "assets/onepiece/hawkins-gallery-2.webp",
      "assets/onepiece/hawkins-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/hawkins/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/hawkins/face.jpg",
      "gallery": [
        "https://static.wikia.nocookie.net/onepiece/images/f/f2/Basil_Hawkins_at_the_New_World.png/revision/latest/scale-to-width-down/900?cb=20231002025855",
        "https://static.wikia.nocookie.net/onepiece/images/6/6d/Basil_Hawkins_Manga_Post_Timeskip_Infobox.png/revision/latest?cb=20231002025519",
        "https://static.wikia.nocookie.net/onepiece/images/7/7b/Basil_Hawkins_Portrait.png/revision/latest?cb=20200420044946"
      ]
    }
  },
  "onepiece:Urouge": {
    "portrait": "assets/onepiece/urouge-portrait.jpg",
    "gallery": [
      "assets/onepiece/urouge-gallery-1.webp",
      "assets/onepiece/urouge-gallery-2.webp",
      "assets/onepiece/urouge-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Urouge/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Urouge/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Urouge/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/4/4c/Urouge_Manga.png/revision/latest/scale-to-width-down/900?cb=20230403162815",
        "https://static.wikia.nocookie.net/onepiece/images/4/4a/Urouge_in_the_New_World.png/revision/latest/scale-to-width-down/900?cb=20160801230003"
      ]
    }
  },
  "onepiece:Tashigi": {
    "portrait": "assets/onepiece/tashigi-portrait.jpg",
    "gallery": [
      "assets/onepiece/tashigi-gallery-1.webp",
      "assets/onepiece/tashigi-gallery-2.jpg",
      "assets/onepiece/tashigi-gallery-3.jpg"
    ],
    "sourcePage": "https://one-piece.com/character/tashigi/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/tashigi/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/tashigi/img.jpg",
        "https://one-piece.com/img/character/tashigi/tashigi_02.jpg",
        "https://one-piece.com/img/character/tashigi/tashigi_03.jpg"
      ]
    }
  },
  "onepiece:Smoker": {
    "portrait": "assets/onepiece/smoker-portrait.jpg",
    "gallery": [
      "assets/onepiece/smoker-gallery-1.webp",
      "assets/onepiece/smoker-gallery-2.jpg",
      "assets/onepiece/smoker-gallery-3.jpg"
    ],
    "sourcePage": "https://one-piece.com/character/smoker/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/smoker/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/smoker/img.jpg",
        "https://one-piece.com/img/character/smoker/smoker_02.jpg",
        "https://one-piece.com/img/character/smoker/smoker_03.jpg"
      ]
    }
  },
  "onepiece:Koby": {
    "portrait": "assets/onepiece/koby-portrait.jpg",
    "gallery": [
      "assets/onepiece/koby-gallery-1.png",
      "assets/onepiece/koby-gallery-2.jpg",
      "assets/onepiece/koby-gallery-3.jpg"
    ],
    "sourcePage": "https://one-piece.com/character/Coby/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Coby/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Coby/Coby_main_wanokuni.png",
        "https://one-piece.com/img/character/Coby/Coby_02.jpg",
        "https://one-piece.com/img/character/Coby/Coby_03.jpg"
      ]
    }
  },
  "onepiece:Izo": {
    "portrait": "assets/onepiece/izo-portrait.jpg",
    "gallery": [
      "assets/onepiece/izo-gallery-1.png",
      "assets/onepiece/izo-gallery-2.webp",
      "assets/onepiece/izo-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/izo/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/izo/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/izo/izo_main_wanokuni.png",
        "https://static.wikia.nocookie.net/onepiece/images/b/b4/SBS98_Izo%2C_Kiku_and_Vista.png/revision/latest?cb=20220730080840",
        "https://static.wikia.nocookie.net/onepiece/images/2/23/Izo_And_Maha_Defeat_Each_Other.png/revision/latest/scale-to-width-down/900?cb=20230709030246"
      ]
    }
  },
  "onepiece:Kuzan": {
    "portrait": "assets/onepiece/aokiji-portrait.jpg",
    "gallery": [
      "assets/onepiece/aokiji-gallery-1.jpg",
      "assets/onepiece/aokiji-gallery-2.webp",
      "assets/onepiece/aokiji-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/kuzan/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/kuzan/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/kuzan/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/6/63/Kuzan_Anime_Concept_Art.png/revision/latest?cb=20200728163336",
        "https://static.wikia.nocookie.net/onepiece/images/7/7d/Kuzan_as_a_Young_Marine.png/revision/latest?cb=20121205184058"
      ]
    }
  },
  "onepiece:Sakazuki": {
    "portrait": "assets/onepiece/akainu-portrait.jpg",
    "gallery": [
      "assets/onepiece/akainu-gallery-1.png",
      "assets/onepiece/akainu-gallery-2.webp",
      "assets/onepiece/akainu-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Sakazuki/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Sakazuki/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Sakazuki/Sakazuki_main_egghead.png",
        "https://static.wikia.nocookie.net/onepiece/images/a/a8/Sakazuki%27s_Tattoos.png/revision/latest?cb=20231204045640",
        "https://static.wikia.nocookie.net/onepiece/images/6/64/Sakazuki_as_a_Young_Marine.png/revision/latest?cb=20130411015604"
      ]
    }
  },
  "onepiece:Monkey D. Garp": {
    "portrait": "assets/onepiece/garp-portrait.jpg",
    "gallery": [
      "assets/onepiece/garp-gallery-1.png",
      "assets/onepiece/garp-gallery-2.webp",
      "assets/onepiece/garp-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Monkey_D_Garp/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Monkey_D_Garp/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Monkey_D_Garp/Monkey_D_Garp_main_egghead.png",
        "https://static.wikia.nocookie.net/onepiece/images/4/45/Monkey_D._Garp_Manga_Infobox.png/revision/latest?cb=20220711170540",
        "https://static.wikia.nocookie.net/onepiece/images/6/64/Monkey_D_Garp_Senkozekkei_Banpresto.png/revision/latest/scale-to-width-down/900?cb=20250525024130"
      ]
    }
  },
  "onepiece:Sengoku": {
    "portrait": "assets/onepiece/sengoku-portrait.jpg",
    "gallery": [
      "assets/onepiece/sengoku-gallery-1.webp",
      "assets/onepiece/sengoku-gallery-2.webp",
      "assets/onepiece/sengoku-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Sengoku/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Sengoku/face.jpg",
      "gallery": [
        "https://static.wikia.nocookie.net/onepiece/images/a/af/Sengoku_as_a_Young_Marine.png/revision/latest?cb=20130711235127",
        "https://static.wikia.nocookie.net/onepiece/images/4/46/Sengoku%27s_Goat.png/revision/latest?cb=20130629010151",
        "https://static.wikia.nocookie.net/onepiece/images/4/48/Sengoku%27s_Goat_Portrait.png/revision/latest?cb=20200726202331"
      ]
    }
  },
  "onepiece:Borsalino": {
    "portrait": "assets/onepiece/kizaru-portrait.jpg",
    "gallery": [
      "assets/onepiece/kizaru-gallery-1.png",
      "assets/onepiece/kizaru-gallery-2.webp",
      "assets/onepiece/kizaru-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Borsalino/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Borsalino/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Borsalino/Borsalino_main_egghead.png",
        "https://static.wikia.nocookie.net/onepiece/images/6/6d/Borsalino%27s_Clones_Vs_Luffy.png/revision/latest/scale-to-width-down/900?cb=20250817152103",
        "https://static.wikia.nocookie.net/onepiece/images/7/75/Borsalino_%28Greatest_Military_Power%29_Thousand_Storm.png/revision/latest/scale-to-width-down/900?cb=20191123204925"
      ]
    }
  },
  "onepiece:Sentomaru": {
    "portrait": "assets/onepiece/sentomaru-portrait.jpg",
    "gallery": [
      "assets/onepiece/sentomaru-gallery-1.png",
      "assets/onepiece/sentomaru-gallery-2.webp",
      "assets/onepiece/sentomaru-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Sentomaru/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Sentomaru/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Sentomaru/Sentomaru_main_egghead.png",
        "https://static.wikia.nocookie.net/onepiece/images/b/b9/Sentomaru_as_a_Young_Marine.png/revision/latest?cb=20121205212544",
        "https://static.wikia.nocookie.net/onepiece/images/9/99/Sentomaru_Manga_Post_Timeskip_Infobox.png/revision/latest?cb=20220725152831"
      ]
    }
  },
  "onepiece:Issho": {
    "portrait": "assets/onepiece/fujitora-portrait.jpg",
    "gallery": [
      "assets/onepiece/fujitora-gallery-1.webp",
      "assets/onepiece/fujitora-gallery-2.webp",
      "assets/onepiece/fujitora-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/fujitora/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/fujitora/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/fujitora/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/b/b0/Issho_Leaves_Footholds_Standing.png/revision/latest/scale-to-width-down/900?cb=20220812063117",
        "https://static.wikia.nocookie.net/onepiece/images/8/83/Issho_as_a_Female.png/revision/latest?cb=20230914101028"
      ]
    }
  },
  "onepiece:Blueno": {
    "portrait": "assets/onepiece/blueno-portrait.jpg",
    "gallery": [
      "assets/onepiece/blueno-gallery-1.webp",
      "assets/onepiece/blueno-gallery-2.webp",
      "assets/onepiece/blueno-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Blueno/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Blueno/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Blueno/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/a/a6/Blueno%27s_Bar.png/revision/latest/scale-to-width-down/900?cb=20130510214448",
        "https://static.wikia.nocookie.net/onepiece/images/c/c4/Blueno%27s_Bar_Portrait.png/revision/latest/scale-to-width-down/900?cb=20250312204204"
      ]
    }
  },
  "onepiece:Rob Lucci": {
    "portrait": "assets/onepiece/lucci-portrait.jpg",
    "gallery": [
      "assets/onepiece/lucci-gallery-1.png",
      "assets/onepiece/lucci-gallery-2.webp",
      "assets/onepiece/lucci-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Rob_Lucci/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Rob_Lucci/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Rob_Lucci/Lucci_main_egghead.png",
        "https://static.wikia.nocookie.net/onepiece/images/d/d1/Rob_Lucci.png/revision/latest?cb=20160828203204",
        "https://static.wikia.nocookie.net/onepiece/images/8/8f/Rob_Lucci_CP9_Portrait.png/revision/latest/scale-to-width-down/900?cb=20250915225904"
      ]
    }
  },
  "onepiece:Kaku": {
    "portrait": "assets/onepiece/kaku-portrait.jpg",
    "gallery": [
      "assets/onepiece/kaku-gallery-1.png",
      "assets/onepiece/kaku-gallery-2.webp",
      "assets/onepiece/kaku-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Kaku/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Kaku/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Kaku/Kaku_main_egghead.png",
        "https://static.wikia.nocookie.net/onepiece/images/6/62/Kaku_%28Wano%29_Anime_Infobox.png/revision/latest?cb=20200202094758",
        "https://static.wikia.nocookie.net/onepiece/images/5/50/DXGLC5-Kaku.png/revision/latest?cb=20130726081001"
      ]
    }
  },
  "onepiece:Jabra": {
    "portrait": "assets/onepiece/jabra-portrait.jpg",
    "gallery": [
      "assets/onepiece/jabra-gallery-1.webp",
      "assets/onepiece/jabra-gallery-2.webp",
      "assets/onepiece/jabra-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Jabra/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Jabra/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Jabra/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/0/09/DXGLC3-Jabra.png/revision/latest/scale-to-width-down/900?cb=20130726082835",
        "https://static.wikia.nocookie.net/onepiece/images/b/b8/Jabra_Sleeping.png/revision/latest/scale-to-width-down/900?cb=20230624131119"
      ]
    }
  },
  "onepiece:Fukuro": {
    "portrait": "assets/onepiece/fukuro-portrait.jpg",
    "gallery": [
      "assets/onepiece/fukuro-gallery-1.webp",
      "assets/onepiece/fukuro-gallery-2.webp",
      "assets/onepiece/fukuro-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Fukuro/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Fukuro/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Fukuro/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/7/72/Fukurou_as_a_Child.png/revision/latest?cb=20240331030758",
        "https://static.wikia.nocookie.net/onepiece/images/8/8d/Fukurou_Burning_Will.png/revision/latest/scale-to-width-down/900?cb=20250309160812"
      ]
    }
  },
  "onepiece:Vergo": {
    "portrait": "assets/onepiece/vergo-portrait.jpg",
    "gallery": [
      "assets/onepiece/vergo-gallery-1.webp",
      "assets/onepiece/vergo-gallery-2.webp",
      "assets/onepiece/vergo-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/vergo/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/vergo/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/vergo/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/1/1a/Vergo_Portrait.png/revision/latest?cb=20190723190511",
        "https://static.wikia.nocookie.net/onepiece/images/b/b1/Vergo_at_Age_28.png/revision/latest?cb=20240507004201"
      ]
    }
  },
  "onepiece:Kalifa": {
    "portrait": "assets/onepiece/kalifa-portrait.jpg",
    "gallery": [
      "assets/onepiece/kalifa-gallery-1.webp",
      "assets/onepiece/kalifa-gallery-2.webp",
      "assets/onepiece/kalifa-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Kalifa/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Kalifa/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Kalifa/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/9/91/Kalifa%27s_Personalized_Den_Den_Mushi.png/revision/latest?cb=20141010000652",
        "https://static.wikia.nocookie.net/onepiece/images/d/d4/Kalifa%27s_San_Faldo_Disguise.png/revision/latest?cb=20250223233345"
      ]
    }
  },
  "onepiece:Kumadori": {
    "portrait": "assets/onepiece/kumadori-portrait.jpg",
    "gallery": [
      "assets/onepiece/kumadori-gallery-1.webp",
      "assets/onepiece/kumadori-gallery-2.webp",
      "assets/onepiece/kumadori-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Kumadori/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Kumadori/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Kumadori/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/e/e4/Kumadori%2C_Jabra_and_Fukurou_Meet_With_Spandam.png/revision/latest/scale-to-width-down/900?cb=20240305033453",
        "https://static.wikia.nocookie.net/onepiece/images/5/52/Kumadori%27s_Khakkhara.png/revision/latest/scale-to-width-down/900?cb=20230913230608"
      ]
    }
  },
  "onepiece:Pica": {
    "portrait": "assets/onepiece/pica-portrait.jpg",
    "gallery": [
      "assets/onepiece/pica-gallery-1.webp",
      "assets/onepiece/pica-gallery-2.webp",
      "assets/onepiece/pica-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Pica/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Pica/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Pica/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/8/8a/Pica_Young_Portrait.png/revision/latest?cb=20200630010402",
        "https://static.wikia.nocookie.net/onepiece/images/5/56/Pica%27s_Katana.png/revision/latest/scale-to-width-down/900?cb=20230215165008"
      ]
    }
  },
  "onepiece:Diamante": {
    "portrait": "assets/onepiece/diamante-portrait.jpg",
    "gallery": [
      "assets/onepiece/diamante-gallery-1.webp",
      "assets/onepiece/diamante-gallery-2.webp",
      "assets/onepiece/diamante-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/diamante/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/diamante/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/diamante/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/0/0b/Diamante%27s_Cannons.png/revision/latest/scale-to-width-down/900?cb=20161221095757",
        "https://static.wikia.nocookie.net/onepiece/images/9/9b/Diamante_as_a_Child.png/revision/latest?cb=20180531231318"
      ]
    }
  },
  "onepiece:Kinemon": {
    "portrait": "assets/onepiece/kinemon-portrait.jpg",
    "gallery": [
      "assets/onepiece/kinemon-gallery-1.webp",
      "assets/onepiece/kinemon-gallery-2.jpg",
      "assets/onepiece/kinemon-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/kinemon/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/kinemon/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/kinemon/img.jpg",
        "https://one-piece.com/img/character/kinemon/kinemon_02.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/4/43/Kinemon_Anime_Concept_Art.png/revision/latest?cb=20190926080815"
      ]
    }
  },
  "onepiece:Dellinger": {
    "portrait": "assets/onepiece/dellinger-portrait.jpg",
    "gallery": [
      "assets/onepiece/dellinger-gallery-1.webp",
      "assets/onepiece/dellinger-gallery-2.webp",
      "assets/onepiece/dellinger-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/dellinger/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/dellinger/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/dellinger/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/9/9d/Dellinger_attacks_Luffy.png/revision/latest?cb=20140905110929",
        "https://static.wikia.nocookie.net/onepiece/images/b/bc/Dellinger_Manga_Infobox.png/revision/latest?cb=20240409230558"
      ]
    }
  },
  "onepiece:Inuarashi": {
    "portrait": "assets/onepiece/inuarashi-portrait.jpg",
    "gallery": [
      "assets/onepiece/inuarashi-gallery-1.webp",
      "assets/onepiece/inuarashi-gallery-2.webp",
      "assets/onepiece/inuarashi-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Duke_Inuarashi/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Duke_Inuarashi/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Duke_Inuarashi/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/1/15/Inuarashi_Portrait.png/revision/latest?cb=20200915042712",
        "https://static.wikia.nocookie.net/onepiece/images/3/3f/Inuarashi_Thousand_Storm.png/revision/latest?cb=20181026182655"
      ]
    }
  },
  "onepiece:Raizo": {
    "portrait": "assets/onepiece/raizo-portrait.jpg",
    "gallery": [
      "assets/onepiece/raizo-gallery-1.webp",
      "assets/onepiece/raizo-gallery-2.webp",
      "assets/onepiece/raizo-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Raizo/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Raizo/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Raizo/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/b/b4/Raizo_Manga_Infobox.png/revision/latest?cb=20160515053126",
        "https://static.wikia.nocookie.net/onepiece/images/5/51/Raizo_Restrained.png/revision/latest/scale-to-width-down/900?cb=20191126130857"
      ]
    }
  },
  "onepiece:Arlong": {
    "portrait": "assets/onepiece/arlong-portrait.jpg",
    "gallery": [
      "assets/onepiece/arlong-gallery-1.webp",
      "assets/onepiece/arlong-gallery-2.webp",
      "assets/onepiece/arlong-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Arlong/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Arlong/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Arlong/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/3/37/Arlong_One_Piece_GBA.png/revision/latest?cb=20210421170159",
        "https://static.wikia.nocookie.net/onepiece/images/0/01/Arlong_Anime_Infobox.png/revision/latest?cb=20230403145629"
      ]
    }
  },
  "onepiece:Nekomamushi": {
    "portrait": "assets/onepiece/nekomamushi-portrait.jpg",
    "gallery": [
      "assets/onepiece/nekomamushi-gallery-1.webp",
      "assets/onepiece/nekomamushi-gallery-2.webp",
      "assets/onepiece/nekomamushi-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Master_Nekomamushi/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Master_Nekomamushi/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Master_Nekomamushi/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/6/60/Master_Nekomamushi_Anime_Concept_Art.png/revision/latest/scale-to-width-down/900?cb=20180904201057",
        "https://static.wikia.nocookie.net/onepiece/images/a/a2/Nekomamushi_Anime_Infobox.png/revision/latest?cb=20220419121421"
      ]
    }
  },
  "onepiece:Alvida": {
    "portrait": "assets/onepiece/alvida-portrait.jpg",
    "gallery": [
      "assets/onepiece/alvida-gallery-1.webp",
      "assets/onepiece/alvida-gallery-2.webp",
      "assets/onepiece/alvida-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Alvida/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Alvida/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Alvida/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/a/af/Alvida%27s_Second_Ship.png/revision/latest?cb=20250117025400",
        "https://static.wikia.nocookie.net/onepiece/images/6/62/Alvida_%28Slim%29_One_Piece_GBA.png/revision/latest?cb=20210421165759"
      ]
    }
  },
  "onepiece:Kuro": {
    "portrait": "assets/onepiece/kuro-portrait.jpg",
    "gallery": [
      "assets/onepiece/kuro-gallery-1.webp",
      "assets/onepiece/kuro-gallery-2.webp",
      "assets/onepiece/kuro-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Kuro/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Kuro/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Kuro/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/8/86/Kuro%27s_Execution_in_the_Anime.png/revision/latest?cb=20230117034709",
        "https://static.wikia.nocookie.net/onepiece/images/a/aa/Kuro%27s_Wanted_Poster_Live_Action.png/revision/latest?cb=20230831220414"
      ]
    }
  },
  "onepiece:Don Krieg": {
    "portrait": "assets/onepiece/krieg-portrait.jpg",
    "gallery": [
      "assets/onepiece/krieg-gallery-1.webp",
      "assets/onepiece/krieg-gallery-2.webp",
      "assets/onepiece/krieg-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Don_Krieg/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Don_Krieg/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Don_Krieg/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/c/cb/Early_Don_Krieg.png/revision/latest/scale-to-width-down/900?cb=20250816005312",
        "https://static.wikia.nocookie.net/onepiece/images/e/eb/Don_Krieg_One_Piece_GBA.png/revision/latest?cb=20210421170103"
      ]
    }
  },
  "onepiece:Daz Bonez": {
    "portrait": "assets/onepiece/mr1-portrait.jpg",
    "gallery": [
      "assets/onepiece/mr1-gallery-1.webp",
      "assets/onepiece/mr1-gallery-2.webp",
      "assets/onepiece/mr1-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Daz_Bonez/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Daz_Bonez/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Daz_Bonez/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/1/1c/Daz_Bonez_Mr._1_Portrait.png/revision/latest?cb=20200426072418",
        "https://static.wikia.nocookie.net/onepiece/images/c/cd/Crocodile_and_Daz_Bonez_One_day.png/revision/latest/scale-to-width-down/900?cb=20230212234629"
      ]
    }
  },
  "onepiece:Bentham": {
    "portrait": "assets/onepiece/mr2-portrait.jpg",
    "gallery": [
      "assets/onepiece/mr2-gallery-1.webp",
      "assets/onepiece/mr2-gallery-2.webp",
      "assets/onepiece/mr2-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Bon_Clay_Mr2/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Bon_Clay_Mr2/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Bon_Clay_Mr2/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/c/ca/Bentham%27s_Wanted_Poster.png/revision/latest?cb=20220526173545",
        "https://static.wikia.nocookie.net/onepiece/images/2/25/Bentham_Speaking_Through_Impel_Down_Den_Den_Mushi.png/revision/latest?cb=20130622045017"
      ]
    }
  },
  "onepiece:Enel": {
    "portrait": "assets/onepiece/enel-portrait.jpg",
    "gallery": [
      "assets/onepiece/enel-gallery-1.webp",
      "assets/onepiece/enel-gallery-2.webp",
      "assets/onepiece/enel-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Eneru/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Eneru/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Eneru/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/7/7a/Enel_Everyday.png/revision/latest?cb=20210802174542",
        "https://static.wikia.nocookie.net/onepiece/images/0/0f/Enel_Electrocutes.png/revision/latest/scale-to-width-down/900?cb=20230617130725"
      ]
    }
  },
  "onepiece:Perona": {
    "portrait": "assets/onepiece/perona-portrait.jpg",
    "gallery": [
      "assets/onepiece/perona-gallery-1.jpg",
      "assets/onepiece/perona-gallery-2.webp",
      "assets/onepiece/perona-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Perona/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Perona/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Perona/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/2/27/POPSailingAgain-Perona.png/revision/latest?cb=20131128070409",
        "https://static.wikia.nocookie.net/onepiece/images/8/84/Perona%27s_Shocked_Face.png/revision/latest?cb=20220723215545"
      ]
    }
  },
  "onepiece:Galdino": {
    "portrait": "assets/onepiece/mr3-portrait.jpg",
    "gallery": [
      "assets/onepiece/mr3-gallery-1.webp",
      "assets/onepiece/mr3-gallery-2.webp",
      "assets/onepiece/mr3-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Galdino/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Galdino/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Galdino/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/7/78/Galdino%27s_Wanted_Poster.png/revision/latest?cb=20200821214801",
        "https://static.wikia.nocookie.net/onepiece/images/b/b3/Galdino%27s_Outfit_in_3D2Y.png/revision/latest?cb=20240724030851"
      ]
    }
  },
  "onepiece:Absalom": {
    "portrait": "assets/onepiece/absalom-portrait.jpg",
    "gallery": [
      "assets/onepiece/absalom-gallery-1.webp",
      "assets/onepiece/absalom-gallery-2.webp",
      "assets/onepiece/absalom-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Absalom/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Absalom/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Absalom/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/f/f6/Absalom%27s_Bazooka.png/revision/latest/scale-to-width-down/900?cb=20240903191227",
        "https://static.wikia.nocookie.net/onepiece/images/4/47/Absalom_as_a_Child.png/revision/latest?cb=20240903191108"
      ]
    }
  },
  "onepiece:Cavendish": {
    "portrait": "assets/onepiece/cavendish-portrait.jpg",
    "gallery": [
      "assets/onepiece/cavendish-gallery-1.webp",
      "assets/onepiece/cavendish-gallery-2.webp",
      "assets/onepiece/cavendish-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/cavendish/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/cavendish/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/cavendish/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/c/c7/Cavendish%27s_Manga_Color_Scheme.png/revision/latest?cb=20160313074049",
        "https://static.wikia.nocookie.net/onepiece/images/5/51/Cavendish%27s_Wanted_Poster_Live_Action.png/revision/latest?cb=20230822205554"
      ]
    }
  },
  "onepiece:Rebecca": {
    "portrait": "assets/onepiece/rebecca-portrait.jpg",
    "gallery": [
      "assets/onepiece/rebecca-gallery-1.webp",
      "assets/onepiece/rebecca-gallery-2.webp",
      "assets/onepiece/rebecca-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/rebecca/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/rebecca/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/rebecca/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/7/76/Rebecca%27s_Outfit_Before_the_Tournament.png/revision/latest?cb=20150410031629",
        "https://static.wikia.nocookie.net/onepiece/images/5/5a/Rebecca%27s_Gladiator_Outfit.png/revision/latest?cb=20160515234056"
      ]
    }
  },
  "onepiece:Bartolomeo": {
    "portrait": "assets/onepiece/bartolomeo-portrait.jpg",
    "gallery": [
      "assets/onepiece/bartolomeo-gallery-1.webp",
      "assets/onepiece/bartolomeo-gallery-2.webp",
      "assets/onepiece/bartolomeo-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/bartolomeo/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/bartolomeo/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/bartolomeo/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/2/21/Bartolomeo%27s_Manga_Color_Scheme.png/revision/latest?cb=20140618193714",
        "https://static.wikia.nocookie.net/onepiece/images/4/44/Bartolomeo%27s_Imagination_of_Sengoku_and_Tsuru.png/revision/latest/scale-to-width-down/900?cb=20161221125616"
      ]
    }
  },
  "onepiece:Vander Decken IX": {
    "portrait": "assets/onepiece/vanderdecken-portrait.jpg",
    "gallery": [
      "assets/onepiece/vanderdecken-gallery-1.webp",
      "assets/onepiece/vanderdecken-gallery-2.webp",
      "assets/onepiece/vanderdecken-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Vander_Decken/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Vander_Decken/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Vander_Decken/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/c/c1/Vander_Decken_IX_Past.png/revision/latest/scale-to-width-down/900?cb=20141206191955",
        "https://static.wikia.nocookie.net/onepiece/images/b/b7/Mato_Mato_no_Mi_Infobox.png/revision/latest?cb=20220920042704"
      ]
    }
  },
  "onepiece:Don Chinjao": {
    "portrait": "assets/onepiece/chinjao-portrait.jpg",
    "gallery": [
      "assets/onepiece/chinjao-gallery-1.webp",
      "assets/onepiece/chinjao-gallery-2.webp",
      "assets/onepiece/chinjao-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Chinjao/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Chinjao/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Chinjao/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/5/55/Chinjao_Super_Grand_Battle_X.png/revision/latest?cb=20141016012047",
        "https://static.wikia.nocookie.net/onepiece/images/a/a0/Lao_G_attacks_Don_Chinjao.png/revision/latest?cb=20141121234653"
      ]
    }
  },
  "onepiece:Sai": {
    "portrait": "assets/onepiece/sai-portrait.jpg",
    "gallery": [
      "assets/onepiece/sai-gallery-1.webp",
      "assets/onepiece/sai-gallery-2.webp",
      "assets/onepiece/sai-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/sai/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/sai/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/sai/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/a/ab/Sai%27s_power_awakens.png/revision/latest?cb=20220421024949",
        "https://static.wikia.nocookie.net/onepiece/images/3/33/Sai%27s_Guandao.png/revision/latest?cb=20190605170625"
      ]
    }
  },
  "dbz:Yamcha": {
    "portrait": "assets/dbz/yamcha-portrait.webp",
    "gallery": [
      "assets/dbz/yamcha-gallery-1.webp",
      "assets/dbz/yamcha-gallery-2.webp",
      "assets/dbz/yamcha-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Yamcha",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/5/59/Yamcha_DB_Episode_138.png/revision/latest/scale-to-width-down/384?cb=20250201193345",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/2/2a/Dragon-ball-super-yamcha.jpg/revision/latest?cb=20170804050647",
        "https://static.wikia.nocookie.net/dragonball/images/d/d8/YAMCHA.PNG/revision/latest?cb=20180326134136",
        "https://static.wikia.nocookie.net/dragonball/images/3/34/YAMCHA.jpg/revision/latest?cb=20170329130030"
      ]
    }
  },
  "dbz:Krilin": {
    "portrait": "assets/dbz/krillin-portrait.webp",
    "gallery": [
      "assets/dbz/krillin-gallery-1.webp",
      "assets/dbz/krillin-gallery-2.webp",
      "assets/dbz/krillin-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Krillin",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/5/54/Krillin_DB_Episode_134.png/revision/latest/scale-to-width-down/608?cb=20241210001054",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/d/d9/Krillin.PNG/revision/latest?cb=20161001093719",
        "https://static.wikia.nocookie.net/dragonball/images/c/c8/Krillin-1.jpg/revision/latest?cb=20110625010849",
        "https://static.wikia.nocookie.net/dragonball/images/1/13/Krillin_%28unlocked_potential%29.png/revision/latest?cb=20140715154711"
      ]
    }
  },
  "dbz:Tenshinhan": {
    "portrait": "assets/dbz/tienshinhan-portrait.webp",
    "gallery": [
      "assets/dbz/tienshinhan-gallery-1.webp",
      "assets/dbz/tienshinhan-gallery-2.webp",
      "assets/dbz/tienshinhan-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Tien_Shinhan",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/5/56/Tien_DBZ_Kai.png/revision/latest/scale-to-width-down/503?cb=20250318211443",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/3/39/Tien-Shinhan-psd61203.png/revision/latest?cb=20111212102611",
        "https://static.wikia.nocookie.net/dragonball/images/d/d8/TienShinhan.JPG/revision/latest?cb=20090308005647",
        "https://static.wikia.nocookie.net/dragonball/images/1/11/Tien_Shinhan.jpg/revision/latest/scale-to-width-down/900?cb=20110914205834"
      ]
    }
  },
  "dbz:Piccolo": {
    "portrait": "assets/dbz/piccolo-portrait.webp",
    "gallery": [
      "assets/dbz/piccolo-gallery-1.webp",
      "assets/dbz/piccolo-gallery-2.webp",
      "assets/dbz/piccolo-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Piccolo",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/b/b7/Super_Hero_-_Piccolo_artwork_3.png/revision/latest/scale-to-width-down/618?cb=20250923210449",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/3/36/Piccolo%2C_after_destroying_the_moon.jpg/revision/latest/scale-to-width-down/900?cb=20110902142231",
        "https://static.wikia.nocookie.net/dragonball/images/b/b0/Piccolo%27s_house_area.PNG/revision/latest/scale-to-width-down/900?cb=20220624151246",
        "https://static.wikia.nocookie.net/dragonball/images/8/8e/Dragon-ball-revenge-of-king-piccolo-20090602052406104_640w.jpg/revision/latest?cb=20100726151657"
      ]
    }
  },
  "dbz:Chaozu": {
    "portrait": "assets/dbz/chiaotzu-portrait.webp",
    "gallery": [
      "assets/dbz/chiaotzu-gallery-1.webp",
      "assets/dbz/chiaotzu-gallery-2.webp",
      "assets/dbz/chiaotzu-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Chiaotzu",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/b/bb/Chiaotzu_DB_Ep_134_002.png/revision/latest?cb=20231013025758",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/a/a8/Chiaotzu_%28Reincarnated%29.png/revision/latest?cb=20171021110131",
        "https://static.wikia.nocookie.net/dragonball/images/9/9b/Raging_Blast_-_Chiaotzu.jpg/revision/latest?cb=20100925163301",
        "https://static.wikia.nocookie.net/dragonball/images/d/d3/Chiaotzu.jpg/revision/latest?cb=20070218090933"
      ]
    }
  },
  "dbz:Trunks": {
    "portrait": "assets/dbz/trunks-portrait.webp",
    "gallery": [
      "assets/dbz/trunks-gallery-1.webp",
      "assets/dbz/trunks-gallery-2.webp",
      "assets/dbz/trunks-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Trunks",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/d/d1/Super_Hero_-_Trunks_artwork.jpg/revision/latest/scale-to-width-down/271?cb=20250904060656",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/6/63/Dragon-Ball-Trunks.jpg/revision/latest/scale-to-width-down/900?cb=20110910060133",
        "https://static.wikia.nocookie.net/dragonball/images/9/9e/Trunks.jpg/revision/latest?cb=20111112062438",
        "https://static.wikia.nocookie.net/dragonball/images/d/d2/Trunks-WOTD.png/revision/latest?cb=20120530225033"
      ]
    }
  },
  "dbz:Trunks du futur": {
    "portrait": "assets/dbz/futuretrunks-portrait.webp",
    "gallery": [
      "assets/dbz/futuretrunks-gallery-1.webp",
      "assets/dbz/futuretrunks-gallery-2.webp",
      "assets/dbz/futuretrunks-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Future_Trunks",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/4/4f/Future_Trunks_DBZ_Episode_131.png/revision/latest/scale-to-width-down/554?cb=20241206021927",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/8/86/Dragon-ball-super-future-trunks-arc-670x388.jpg/revision/latest?cb=20170429004241",
        "https://static.wikia.nocookie.net/dragonball/images/2/2c/Future-trunks-super-saiyan-2-i5.png/revision/latest?cb=20130302172119",
        "https://static.wikia.nocookie.net/dragonball/images/3/30/Future_Trunks_Timeline_5.png/revision/latest/scale-to-width-down/900?cb=20181018032705"
      ]
    }
  },
  "dbz:Tortue Géniale": {
    "portrait": "assets/dbz/masterroshi-portrait.webp",
    "gallery": [
      "assets/dbz/masterroshi-gallery-1.webp",
      "assets/dbz/masterroshi-gallery-2.webp",
      "assets/dbz/masterroshi-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Master_Roshi",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/5/5f/Master_roshi_enhanced.jpg/revision/latest?cb=20210310020858",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/0/03/Master_Roshi%27s_Dragon_Ball.jpg/revision/latest?cb=20250209230447",
        "https://static.wikia.nocookie.net/dragonball/images/0/02/Master_roshi.png/revision/latest/scale-to-width-down/900?cb=20140801094833",
        "https://static.wikia.nocookie.net/dragonball/images/f/f3/Master_Roshi.jpg/revision/latest?cb=20200301003601"
      ]
    }
  },
  "dbz:Gogeta": {
    "portrait": "assets/dbz/gogeta-portrait.webp",
    "gallery": [
      "assets/dbz/gogeta-gallery-1.webp",
      "assets/dbz/gogeta-gallery-2.webp",
      "assets/dbz/gogeta-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Gogeta",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/7/7b/Gogeta_Base_Full.jpg/revision/latest/scale-to-width-down/581?cb=20191027075547",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/d/d9/HighGradeset-GOGETA.PNG/revision/latest?cb=20131116014524",
        "https://static.wikia.nocookie.net/dragonball/images/9/9f/Gogeta-EX.PNG/revision/latest?cb=20160828183438",
        "https://static.wikia.nocookie.net/dragonball/images/7/7c/Gogeta%28DBH%29.png/revision/latest?cb=20120501071258"
      ]
    }
  },
  "dbz:Son Goten": {
    "portrait": "assets/dbz/goten-portrait.webp",
    "gallery": [
      "assets/dbz/goten-gallery-1.webp",
      "assets/dbz/goten-gallery-2.webp",
      "assets/dbz/goten-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Goten",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/c/c9/Super_Hero_-_Goten_artwork.jpg/revision/latest/scale-to-width-down/416?cb=20220920183551",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/6/63/Goten.jpg/revision/latest/scale-to-width-down/900?cb=20151107173214",
        "https://static.wikia.nocookie.net/dragonball/images/3/30/DBS-Trunks-Goten.png/revision/latest/scale-to-width-down/900?cb=20160118050922",
        "https://static.wikia.nocookie.net/dragonball/images/4/4a/Super_saiyan_goten.jpg/revision/latest?cb=20100407022115"
      ]
    }
  },
  "dbz:Vegetto": {
    "portrait": "assets/dbz/vegito-portrait.webp",
    "gallery": [
      "assets/dbz/vegito-gallery-1.webp",
      "assets/dbz/vegito-gallery-2.webp",
      "assets/dbz/vegito-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Vegito",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/5/53/Vegito.jpg/revision/latest/scale-to-width-down/577?cb=20250317214139",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/c/c7/Vegito.png/revision/latest?cb=20160106152838",
        "https://static.wikia.nocookie.net/dragonball/images/9/95/Vegito_is_a_beast.png/revision/latest?cb=20131022063111",
        "https://static.wikia.nocookie.net/dragonball/images/3/32/Vegito_%28face%29.png/revision/latest?cb=20171129165041"
      ]
    }
  },
  "dbz:Gotenks": {
    "portrait": "assets/dbz/gotenks-portrait.webp",
    "gallery": [
      "assets/dbz/gotenks-gallery-1.webp",
      "assets/dbz/gotenks-gallery-2.webp",
      "assets/dbz/gotenks-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Gotenks",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/0/08/Gotenks.png/revision/latest/scale-to-width-down/591?cb=20260821150453",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/4/42/Gotenks%2Bss3.jpg/revision/latest/scale-to-width-down/900?cb=20110312000646",
        "https://static.wikia.nocookie.net/dragonball/images/e/ee/Gotenks%283%29.png/revision/latest?cb=20110813120011",
        "https://static.wikia.nocookie.net/dragonball/images/3/3a/Gotenks.JPG/revision/latest/scale-to-width-down/900?cb=20150127204154"
      ]
    }
  },
  "dbz:Chichi": {
    "portrait": "assets/dbz/chichi-portrait.webp",
    "gallery": [
      "assets/dbz/chichi-gallery-1.webp",
      "assets/dbz/chichi-gallery-2.webp",
      "assets/dbz/chichi-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Chi-Chi",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/e/e2/Chi-Chi_DBZ_Ep_04_001.png/revision/latest?cb=20201226004235",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/d/dd/Chichi-chi-chi-dragon-ball-30963952-526-401.jpg/revision/latest?cb=20180219054437",
        "https://static.wikia.nocookie.net/dragonball/images/c/cd/ChiChi-portrait-chi-chi-dragon-ball-30963862-520-419.jpg/revision/latest?cb=20180415205706",
        "https://static.wikia.nocookie.net/dragonball/images/7/77/Chichi3-chi-chi-dragon-ball-30964873-720-480.jpg/revision/latest?cb=20180531141954"
      ]
    }
  },
  "dbz:Videl": {
    "portrait": "assets/dbz/videl-portrait.webp",
    "gallery": [
      "assets/dbz/videl-gallery-1.webp",
      "assets/dbz/videl-gallery-2.webp",
      "assets/dbz/videl-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Videl",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/d/de/Videl_Episode_207.png/revision/latest/scale-to-width-down/533?cb=20210406214244",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/e/ea/Videl.PNG/revision/latest?cb=20070620143518",
        "https://static.wikia.nocookie.net/dragonball/images/e/e0/Videl%2CGotenAndGohan.jpg/revision/latest?cb=20121127235428",
        "https://static.wikia.nocookie.net/dragonball/images/9/9f/Videl%2CPanAndGohan.jpg/revision/latest?cb=20110524004211"
      ]
    }
  },
  "dbz:Mr. Satan": {
    "portrait": "assets/dbz/mrsatan-portrait.webp",
    "gallery": [
      "assets/dbz/mrsatan-gallery-1.webp",
      "assets/dbz/mrsatan-gallery-2.webp",
      "assets/dbz/mrsatan-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Mr._Satan",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/e/ef/Mr_Satan_at_the_Cell_Games.png/revision/latest/scale-to-width-down/604?cb=20260315145605",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/b/b4/Mr.satan.jpg/revision/latest?cb=20130622222626",
        "https://static.wikia.nocookie.net/dragonball/images/b/b5/Mr._Satan.jpg/revision/latest?cb=20110328141624",
        "https://static.wikia.nocookie.net/dragonball/images/f/f3/Mr_Satan.jpg/revision/latest?cb=20110609230701"
      ]
    }
  },
  "dbz:Bulma": {
    "portrait": "assets/dbz/bulma-portrait.webp",
    "gallery": [
      "assets/dbz/bulma-gallery-1.webp",
      "assets/dbz/bulma-gallery-2.webp",
      "assets/dbz/bulma-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Bulma",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/a/a6/Bulma_anime_profile.png/revision/latest/scale-to-width-down/309?cb=20250617190824",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/d/d9/Bulma-dragonball.jpg/revision/latest?cb=20090513214043",
        "https://static.wikia.nocookie.net/dragonball/images/8/8e/Bulma_%28DB-001%29.jpg/revision/latest?cb=20130309134454",
        "https://static.wikia.nocookie.net/dragonball/images/1/1e/Bulma%28DBEG%29.png/revision/latest/scale-to-width-down/900?cb=20120125184234"
      ]
    }
  },
  "dbz:Bra": {
    "portrait": "assets/dbz/bulla-portrait.webp",
    "gallery": [
      "assets/dbz/bulla-gallery-1.webp",
      "assets/dbz/bulla-gallery-2.webp",
      "assets/dbz/bulla-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Bulla",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/8/8e/BullaDBGTmad.png/revision/latest?cb=20240927043737",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/2/2e/Bulla%27s_talents.png/revision/latest?cb=20230120213820",
        "https://static.wikia.nocookie.net/dragonball/images/4/49/Bulla.3.jpg/revision/latest?cb=20130622221425",
        "https://static.wikia.nocookie.net/dragonball/images/2/28/Bulla_%28DBS_manga%29.jpg/revision/latest?cb=20240412175351"
      ]
    }
  },
  "dbz:Pan": {
    "portrait": "assets/dbz/pan-portrait.webp",
    "gallery": [
      "assets/dbz/pan-gallery-1.webp",
      "assets/dbz/pan-gallery-2.webp",
      "assets/dbz/pan-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Pan",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/1/1c/Super_Hero_-_Pan_artwork_2.png/revision/latest?cb=20250923210359",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/5/50/Pan.JPG/revision/latest/scale-to-width-down/900?cb=20150121003052",
        "https://static.wikia.nocookie.net/dragonball/images/8/84/Pan-y-videl-familia-son-pinterest-ball-pan.jpg/revision/latest?cb=20181203080827",
        "https://static.wikia.nocookie.net/dragonball/images/7/7c/Pan-gt.jpg/revision/latest?cb=20180801231152"
      ]
    }
  },
  "dbz:C-17": {
    "portrait": "assets/dbz/android17-portrait.webp",
    "gallery": [
      "assets/dbz/android17-gallery-1.webp",
      "assets/dbz/android17-gallery-2.webp",
      "assets/dbz/android17-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Android_17",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/2/27/Android_17_%28DBZ_ep.148%29.jpg/revision/latest/scale-to-width-down/368?cb=20250410044432",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/2/26/Android-17-SH.PNG/revision/latest?cb=20130803002751",
        "https://static.wikia.nocookie.net/dragonball/images/b/b1/Android_-_17.jpg/revision/latest?cb=20121218133123",
        "https://static.wikia.nocookie.net/dragonball/images/b/b4/TGdiRXh1Z1lrRDQx_o_future-trunks-vs-android-18-and-android-17.jpg/revision/latest?cb=20130310043812"
      ]
    }
  },
  "dbz:C-16": {
    "portrait": "assets/dbz/android16-portrait.webp",
    "gallery": [
      "assets/dbz/android16-gallery-1.webp",
      "assets/dbz/android16-gallery-2.webp",
      "assets/dbz/android16-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Android_16",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/b/b2/Android_16.png/revision/latest/scale-to-width-down/326?cb=20210331024540",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/4/4b/Android_16-BakuretsuBattleStrap_2-Kai-16.jpg/revision/latest?cb=20130308015118",
        "https://static.wikia.nocookie.net/dragonball/images/2/23/ZStoreExclusive-Android16.JPG/revision/latest?cb=20130307232607",
        "https://static.wikia.nocookie.net/dragonball/images/1/16/ZSTORE-Exclusive-Android16-metallicvariant.JPG/revision/latest?cb=20130307234750"
      ]
    }
  },
  "dbz:Dr Gero": {
    "portrait": "assets/dbz/drgero-portrait.webp",
    "gallery": [
      "assets/dbz/drgero-gallery-1.webp",
      "assets/dbz/drgero-gallery-2.webp",
      "assets/dbz/drgero-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Dr._Gero",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/7/71/Dr.GeroEp130.png/revision/latest?cb=20160922141535",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/4/4d/Dr-gero.jpg/revision/latest?cb=20081211024536",
        "https://static.wikia.nocookie.net/dragonball/images/7/76/Dr._Gero_in_Cell%27s_flashback.png/revision/latest/scale-to-width-down/900?cb=20111204193417",
        "https://static.wikia.nocookie.net/dragonball/images/1/10/Future_Dr._Gero_%28Human%29_Past.png/revision/latest?cb=20220607034546"
      ]
    }
  },
  "dbz:C-19": {
    "portrait": "assets/dbz/android19-portrait.webp",
    "gallery": [
      "assets/dbz/android19-gallery-1.webp",
      "assets/dbz/android19-gallery-2.webp",
      "assets/dbz/android19-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Android_19",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/1/1f/Android_19_DBZ_Episode_130.png/revision/latest/scale-to-width-down/581?cb=20210904181928",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/c/c8/Android-19.jpg/revision/latest?cb=20090416152243",
        "https://static.wikia.nocookie.net/dragonball/images/5/52/Android_19..png/revision/latest?cb=20111130061347",
        "https://static.wikia.nocookie.net/dragonball/images/9/90/Android_19_with_base.PNG/revision/latest?cb=20120919000247"
      ]
    }
  },
  "dbz:C-18": {
    "portrait": "assets/dbz/android18-portrait.webp",
    "gallery": [
      "assets/dbz/android18-gallery-1.webp",
      "assets/dbz/android18-gallery-2.webp",
      "assets/dbz/android18-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Android_18",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/e/e6/Android_18_anime_profile.png/revision/latest/scale-to-width-down/361?cb=20250617190842",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/c/c0/Android_18_serious.jpg/revision/latest?cb=20150207085715",
        "https://static.wikia.nocookie.net/dragonball/images/b/bb/Android_18_%28388%29.png/revision/latest/scale-to-width-down/900?cb=20250401230145",
        "https://static.wikia.nocookie.net/dragonball/images/4/42/Android_18_2nd.jpg/revision/latest?cb=20130825045542"
      ]
    }
  },
  "dbz:C-13": {
    "portrait": "assets/dbz/android13-portrait.webp",
    "gallery": [
      "assets/dbz/android13-gallery-1.webp",
      "assets/dbz/android13-gallery-2.webp",
      "assets/dbz/android13-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Android_13",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/3/35/Android_13_-_Super_Android_13_-_005.png/revision/latest/scale-to-width-down/343?cb=20240906012340",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/f/f4/Super_Android_13%21_-_Android_13.jpg/revision/latest?cb=20090904001619",
        "https://static.wikia.nocookie.net/dragonball/images/2/29/Super_Android_13%21_-_Android_14_DAH.png/revision/latest?cb=20130409004008",
        "https://static.wikia.nocookie.net/dragonball/images/c/cd/Super_Android_13%21_-_13_absorbs.PNG/revision/latest/scale-to-width-down/900?cb=20210409144050"
      ]
    }
  },
  "dbz:Nappa": {
    "portrait": "assets/dbz/nappa-portrait.webp",
    "gallery": [
      "assets/dbz/nappa-gallery-1.webp",
      "assets/dbz/nappa-gallery-2.webp",
      "assets/dbz/nappa-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Nappa",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/1/11/Nappa_DBZ_Episode_24.png/revision/latest/scale-to-width-down/648?cb=20211026042623",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/2/21/Nappa.jpg/revision/latest?cb=20121231153529",
        "https://static.wikia.nocookie.net/dragonball/images/e/e9/Nappa.jpeg/revision/latest?cb=20111121072250",
        "https://static.wikia.nocookie.net/dragonball/images/6/6f/Nappa_%28BoG_website_art%29.jpg/revision/latest?cb=20140725132539"
      ]
    }
  },
  "dbz:C-14": {
    "portrait": "assets/dbz/android14-portrait.webp",
    "gallery": [
      "assets/dbz/android14-gallery-1.webp",
      "assets/dbz/android14-gallery-2.webp",
      "assets/dbz/android14-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Android_14",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/9/99/A-14.jpg/revision/latest?cb=20081128213355",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/4/4b/Android14.JPG/revision/latest?cb=20091117015036",
        "https://static.wikia.nocookie.net/dragonball/images/4/43/Android14%2BAndroid15%2BAndroid13-Part4-Bandai.PNG/revision/latest?cb=20130505201120",
        "https://static.wikia.nocookie.net/dragonball/images/4/43/Android_14_close_a.PNG/revision/latest?cb=20130114165534"
      ]
    }
  },
  "dbz:C-15": {
    "portrait": "assets/dbz/android15-portrait.webp",
    "gallery": [
      "assets/dbz/android15-gallery-1.webp",
      "assets/dbz/android15-gallery-2.webp",
      "assets/dbz/android15-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Android_15",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/8/8c/Anime_15.png/revision/latest?cb=20220223220830",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/d/da/Android_15_DG_back.JPG/revision/latest?cb=20121013010528",
        "https://static.wikia.nocookie.net/dragonball/images/d/d2/Android_15_DG_front.jpg/revision/latest?cb=20121013010830",
        "https://static.wikia.nocookie.net/dragonball/images/2/23/Android_15_DG_front_alternate_b.JPG/revision/latest?cb=20121013011830"
      ]
    }
  },
  "dbz:Raditz": {
    "portrait": "assets/dbz/raditz-portrait.webp",
    "gallery": [
      "assets/dbz/raditz-gallery-1.webp",
      "assets/dbz/raditz-gallery-2.webp",
      "assets/dbz/raditz-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Raditz",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/8/86/Raditz_arrives_at_Kame_House.png/revision/latest/scale-to-width-down/442?cb=20260822192657",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/2/2f/Raditz.png/revision/latest/scale-to-width-down/900?cb=20190202165627",
        "https://static.wikia.nocookie.net/dragonball/images/7/79/February2010MegahouseIntenseBattles-Raditz.jpg/revision/latest?cb=20130329221550",
        "https://static.wikia.nocookie.net/dragonball/images/2/26/Legend_of_Saiyan-Raditz.PNG/revision/latest?cb=20130327214729"
      ]
    }
  },
  "dbz:Tora": {
    "portrait": "assets/dbz/tora-portrait.webp",
    "gallery": [
      "assets/dbz/tora-gallery-1.webp",
      "assets/dbz/tora-gallery-2.webp",
      "assets/dbz/tora-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Tora",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/6/67/Bardock_-_The_Father_of_Goku_-_Tora_saying_goodbye_to_Bardock.png/revision/latest/scale-to-width-down/900?cb=20250121193503",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/4/43/Tora-keshi-b.jpg/revision/latest?cb=20130502235520",
        "https://static.wikia.nocookie.net/dragonball/images/2/2c/Tora-keshi-d.PNG/revision/latest?cb=20130630223043",
        "https://static.wikia.nocookie.net/dragonball/images/2/2a/Tora-keshi-a.jpg/revision/latest?cb=20130502235435"
      ]
    }
  },
  "dbz:Fasha": {
    "portrait": "assets/dbz/fasha-portrait.webp",
    "gallery": [
      "assets/dbz/fasha-gallery-1.webp",
      "assets/dbz/fasha-gallery-2.webp",
      "assets/dbz/fasha-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Fasha",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/f/f3/Bardock_-_The_Father_of_Goku_-_Fasha_after_the_battle_on_Kanassa.png/revision/latest/scale-to-width-down/900?cb=20250121192938",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/c/cc/Fasha%28B3%29.png/revision/latest/scale-to-width-down/900?cb=20110424230232",
        "https://static.wikia.nocookie.net/dragonball/images/d/de/Celipa_Fasha_Banpresto_Dec_2010_Saiyan_Genealogy_III_back.PNG/revision/latest?cb=20121229014137",
        "https://static.wikia.nocookie.net/dragonball/images/c/c7/Celipa_Fasha_Banpresto_Dec_2010_Saiyan_Genealogy_III.PNG/revision/latest?cb=20121229014039"
      ]
    }
  },
  "dbz:Roi Vegeta": {
    "portrait": "assets/dbz/kingvegeta-portrait.webp",
    "gallery": [
      "assets/dbz/kingvegeta-gallery-1.webp",
      "assets/dbz/kingvegeta-gallery-2.webp",
      "assets/dbz/kingvegeta-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/King_Vegeta",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/6/65/King_Vegeta.png/revision/latest/scale-to-width-down/514?cb=20210428223509",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/d/db/King_Vegeta_1.png/revision/latest/scale-to-width-down/900?cb=20181004203412",
        "https://static.wikia.nocookie.net/dragonball/images/a/ab/King_Vegeta_5.png/revision/latest/scale-to-width-down/900?cb=20181004203814",
        "https://static.wikia.nocookie.net/dragonball/images/1/11/King_Vegeta_III.png/revision/latest/scale-to-width-down/900?cb=20190202171316"
      ]
    }
  },
  "dbz:Bardock": {
    "portrait": "assets/dbz/bardock-portrait.webp",
    "gallery": [
      "assets/dbz/bardock-gallery-1.webp",
      "assets/dbz/bardock-gallery-2.webp",
      "assets/dbz/bardock-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Bardock",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/d/d5/Bardock_-_The_Father_of_Goku_-_Bardock_after_landing_on_Planet_Meat.png/revision/latest/scale-to-width-down/632?cb=20250121192318",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/b/b2/Bardock_-_The_Father_of_Goku_-_Dead_Kanassans.png/revision/latest/scale-to-width-down/900?cb=20250121192116",
        "https://static.wikia.nocookie.net/dragonball/images/d/d9/Bardock_-_The_Father_of_Goku_-_Bardock_tell_the_Saiyans_they%27re_all_dead.jpg/revision/latest/scale-to-width-down/900?cb=20250122022355",
        "https://static.wikia.nocookie.net/dragonball/images/f/f7/Bardock-1-.jpg/revision/latest?cb=20111208221708"
      ]
    }
  },
  "dbz:Capitaine Ginyu": {
    "portrait": "assets/dbz/captainginyu-portrait.webp",
    "gallery": [
      "assets/dbz/captainginyu-gallery-1.webp",
      "assets/dbz/captainginyu-gallery-2.webp",
      "assets/dbz/captainginyu-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Captain_Ginyu",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/2/28/CaptainGinyuVsGoku.png/revision/latest/scale-to-width-down/616?cb=20260822002603",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/4/42/Captain-ginyu.jpg/revision/latest?cb=20081211021515",
        "https://static.wikia.nocookie.net/dragonball/images/5/51/Captain_Ginyu%27s_Visionary_Attack.png/revision/latest?cb=20131019150257",
        "https://static.wikia.nocookie.net/dragonball/images/7/77/Captain_Ginyu_5_Burst_Limit.jpg/revision/latest?cb=20120412145407"
      ]
    }
  },
  "dbz:Recoome": {
    "portrait": "assets/dbz/recoome-portrait.webp",
    "gallery": [
      "assets/dbz/recoome-gallery-1.webp",
      "assets/dbz/recoome-gallery-2.webp",
      "assets/dbz/recoome-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Recoome",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/8/8a/RecoomeTGFP.png/revision/latest?cb=20100409151048",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/9/9b/Recoome.png/revision/latest?cb=20201226223547",
        "https://static.wikia.nocookie.net/dragonball/images/d/dd/Recoome%28TheLegend%29.png/revision/latest/scale-to-width-down/900?cb=20120124160635",
        "https://static.wikia.nocookie.net/dragonball/images/9/99/Recoome%28DBUS%29.jpg/revision/latest?cb=20140316054028"
      ]
    }
  },
  "dbz:Shugesh": {
    "portrait": "assets/dbz/shugesh-portrait.webp",
    "gallery": [
      "assets/dbz/shugesh-gallery-1.webp",
      "assets/dbz/shugesh-gallery-2.webp",
      "assets/dbz/shugesh-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Shugesh",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/a/a7/Bardock_-_The_Father_of_Goku_-_Shugesh_after_the_battle_on_Kanassa.png/revision/latest/scale-to-width-down/900?cb=20250121193134",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/e/e5/Shugesh%28B3%29.png/revision/latest/scale-to-width-down/900?cb=20110424230233",
        "https://static.wikia.nocookie.net/dragonball/images/9/9f/Shugesh_a.jpg/revision/latest?cb=20121229020456",
        "https://static.wikia.nocookie.net/dragonball/images/8/8d/Shugesh_in_Broly.png/revision/latest?cb=20190128080432"
      ]
    }
  },
  "dbz:Borgos": {
    "portrait": "assets/dbz/borgos-portrait.webp",
    "gallery": [
      "assets/dbz/borgos-gallery-1.webp",
      "assets/dbz/borgos-gallery-2.webp",
      "assets/dbz/borgos-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Borgos",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/f/fd/Bardock_-_The_Father_of_Goku_-_Borgos_after_the_battle_on_Kanassa.png/revision/latest/scale-to-width-down/900?cb=20250121193239",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/c/cb/Borgos%28B3%29.png/revision/latest/scale-to-width-down/900?cb=20110424230232",
        "https://static.wikia.nocookie.net/dragonball/images/5/58/BORGOS-Part6.JPG/revision/latest?cb=20130429011445",
        "https://static.wikia.nocookie.net/dragonball/images/2/29/BORGOS-Part6-b.JPG/revision/latest?cb=20130429011628"
      ]
    }
  },
  "dbz:Jeice": {
    "portrait": "assets/dbz/jeice-portrait.webp",
    "gallery": [
      "assets/dbz/jeice-gallery-1.webp",
      "assets/dbz/jeice-gallery-2.webp",
      "assets/dbz/jeice-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Jeice",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/3/35/Jeice_DBZ_Episode_71.png/revision/latest/scale-to-width-down/568?cb=20210519195015",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/4/4c/Jeice.JPG/revision/latest?cb=20070627140618",
        "https://static.wikia.nocookie.net/dragonball/images/3/36/Jeice--Character-Art-DBZUT.jpg/revision/latest?cb=20111020224843",
        "https://static.wikia.nocookie.net/dragonball/images/4/44/Raging_Blast_-_Jeice.jpg/revision/latest?cb=20100925141827"
      ]
    }
  },
  "dbz:Zarbon": {
    "portrait": "assets/dbz/zarbon-portrait.webp",
    "gallery": [
      "assets/dbz/zarbon-gallery-1.webp",
      "assets/dbz/zarbon-gallery-2.webp",
      "assets/dbz/zarbon-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Zarbon",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/0/0f/Zarbon_DBZ_Ep_56_002.png/revision/latest/scale-to-width-down/430?cb=20180804213413",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/b/b4/Zarbon-san.png/revision/latest/scale-to-width-down/900?cb=20110530145252",
        "https://static.wikia.nocookie.net/dragonball/images/d/dc/Zarbon.Ep.047.png/revision/latest?cb=20110722093215",
        "https://static.wikia.nocookie.net/dragonball/images/3/3d/Zarbon.Ep.051.png/revision/latest?cb=20120517144554"
      ]
    }
  },
  "dbz:Guldo": {
    "portrait": "assets/dbz/guldo-portrait.webp",
    "gallery": [
      "assets/dbz/guldo-gallery-1.webp",
      "assets/dbz/guldo-gallery-2.webp",
      "assets/dbz/guldo-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Guldo",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/c/cb/GULDO.jpg/revision/latest/scale-to-width-down/648?cb=20140228015925",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/0/02/Guldo.png/revision/latest/scale-to-width-down/900?cb=20120305025657",
        "https://static.wikia.nocookie.net/dragonball/images/0/0d/Guldo_dbz-663.png/revision/latest?cb=20110522182821",
        "https://static.wikia.nocookie.net/dragonball/images/e/e3/HG_Part4_Guldo.PNG/revision/latest?cb=20121127210339"
      ]
    }
  },
  "dbz:Burter": {
    "portrait": "assets/dbz/burter-portrait.webp",
    "gallery": [
      "assets/dbz/burter-gallery-1.webp",
      "assets/dbz/burter-gallery-2.webp",
      "assets/dbz/burter-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Burter",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/f/f5/Big_Blue_Snake_Guy.png/revision/latest/scale-to-width-down/900?cb=20210319195352",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/4/46/Burter.jpg/revision/latest?cb=20101107132428",
        "https://static.wikia.nocookie.net/dragonball/images/6/68/Burter%28TheLegend%29.png/revision/latest/scale-to-width-down/900?cb=20120124160930",
        "https://static.wikia.nocookie.net/dragonball/images/3/36/Burter%27s_Death.JPG/revision/latest/scale-to-width-down/900?cb=20250314055720"
      ]
    }
  },
  "dbz:Majin Buu": {
    "portrait": "assets/dbz/majinbuu-portrait.webp",
    "gallery": [
      "assets/dbz/majinbuu-gallery-1.webp",
      "assets/dbz/majinbuu-gallery-2.webp",
      "assets/dbz/majinbuu-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Majin_Buu",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/4/4a/All_Majin_Buu_forms_%28Daiz4%29.jpg/revision/latest?cb=20130605020823",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/3/32/Dragon-ball-super-majin-buu-988376-1280x0.jpg/revision/latest/scale-to-width-down/900?cb=20181027184036",
        "https://static.wikia.nocookie.net/dragonball/images/5/54/Majin_Buu.jpg/revision/latest?cb=20110327221317",
        "https://static.wikia.nocookie.net/dragonball/images/f/f4/Majin_buu.1.jpg/revision/latest/scale-to-width-down/900?cb=20110618201351"
      ]
    }
  },
  "dbz:Cui": {
    "portrait": "assets/dbz/cui-portrait.webp",
    "gallery": [
      "assets/dbz/cui-gallery-1.webp",
      "assets/dbz/cui-gallery-2.webp",
      "assets/dbz/cui-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Cui",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/c/c5/Cui.png/revision/latest/scale-to-width-down/477?cb=20210506230048",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/e/ec/Cui-Part3.JPG/revision/latest?cb=20130503021005",
        "https://static.wikia.nocookie.net/dragonball/images/8/8e/Cui-DWC-full.PNG/revision/latest?cb=20130503021234",
        "https://static.wikia.nocookie.net/dragonball/images/9/99/KeshiGomu-Cui-green.jpg/revision/latest?cb=20130503020914"
      ]
    }
  },
  "dbz:Roi Cold": {
    "portrait": "assets/dbz/kingcold-portrait.webp",
    "gallery": [
      "assets/dbz/kingcold-gallery-1.webp",
      "assets/dbz/kingcold-gallery-2.webp",
      "assets/dbz/kingcold-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/King_Cold",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/2/22/King_Cold_episode_122.png/revision/latest/scale-to-width-down/900?cb=20241217033208",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/6/6a/King_Cold_face_01.jpg/revision/latest/scale-to-width-down/900?cb=20120104150011",
        "https://static.wikia.nocookie.net/dragonball/images/c/c7/Dragonball-king-cold_B2467663-20090123055853.jpg/revision/latest?cb=20120525183707",
        "https://static.wikia.nocookie.net/dragonball/images/2/27/DXRD_Caption_of_King_Cold%27s_16_soldiers_behind_him_%26_Mecha-Frieza_outside_King_Cold%27s_spaceship_on_Earth.png/revision/latest/scale-to-width-down/900?cb=20151021075015"
      ]
    }
  },
  "dbz:Dodoria": {
    "portrait": "assets/dbz/dodoria-portrait.webp",
    "gallery": [
      "assets/dbz/dodoria-gallery-1.webp",
      "assets/dbz/dodoria-gallery-2.webp",
      "assets/dbz/dodoria-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Dodoria",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/f/fd/Dodoria_DBZ_Ep_49_002.png/revision/latest?cb=20170827051359",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/9/9f/Dodoria-peru-green.PNG/revision/latest?cb=20130326025919",
        "https://static.wikia.nocookie.net/dragonball/images/8/88/Dodoria-Kai-Keychain.PNG/revision/latest?cb=20130308022012",
        "https://static.wikia.nocookie.net/dragonball/images/1/18/Dodoria_%28Level_1%29.jpg/revision/latest?cb=20120506011448"
      ]
    }
  },
  "dbz:Babidi": {
    "portrait": "assets/dbz/babidi-portrait.webp",
    "gallery": [
      "assets/dbz/babidi-gallery-1.webp",
      "assets/dbz/babidi-gallery-2.webp",
      "assets/dbz/babidi-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Babidi",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/5/5c/BabidiDBZ.png/revision/latest?cb=20091210131219",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/8/87/Babidi.Ep.220.png/revision/latest/scale-to-width-down/900?cb=20110910112029",
        "https://static.wikia.nocookie.net/dragonball/images/a/a7/DBZ_Babidi_magic_1231254665.png/revision/latest/scale-to-width-down/900?cb=20151024042615",
        "https://static.wikia.nocookie.net/dragonball/images/6/6b/Babidi_manga.jpg/revision/latest?cb=20170216020709"
      ]
    }
  },
  "dbz:Yamu": {
    "portrait": "assets/dbz/yamu-portrait.webp",
    "gallery": [
      "assets/dbz/yamu-gallery-1.webp",
      "assets/dbz/yamu-gallery-2.webp",
      "assets/dbz/yamu-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Yamu",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/c/c9/Yamu_Good.png/revision/latest?cb=20211004210620",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/4/4a/Yamu-0.jpg/revision/latest/scale-to-width-down/900?cb=20180123183659",
        "https://static.wikia.nocookie.net/dragonball/images/7/70/Part24-yamu.JPG/revision/latest?cb=20130428031449",
        "https://static.wikia.nocookie.net/dragonball/images/4/44/Yamu-front.PNG/revision/latest?cb=20130428031544"
      ]
    }
  },
  "dbz:Spopovich": {
    "portrait": "assets/dbz/spopovich-portrait.webp",
    "gallery": [
      "assets/dbz/spopovich-gallery-1.webp",
      "assets/dbz/spopovich-gallery-2.webp",
      "assets/dbz/spopovich-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Spopovich",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/b/b3/Spopovich_25th_BT.png/revision/latest?cb=20211004205424",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/9/91/Spopovich.jpg/revision/latest?cb=20090731064340",
        "https://static.wikia.nocookie.net/dragonball/images/c/ce/Spopovich%27s_assault_continues.png/revision/latest?cb=20120614233819",
        "https://static.wikia.nocookie.net/dragonball/images/0/0d/Yamu_telling_Spopovich_his_match_is_next.png/revision/latest?cb=20260204001711"
      ]
    }
  },
  "dbz:Dabra": {
    "portrait": "assets/dbz/dabura-portrait.webp",
    "gallery": [
      "assets/dbz/dabura-gallery-1.webp",
      "assets/dbz/dabura-gallery-2.webp",
      "assets/dbz/dabura-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Dabura",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/a/ab/Dabura_becoming_Supreme_Demon_King_after_usurping_Abura.png/revision/latest/scale-to-width-down/900?cb=20250124223335",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/6/67/Future-Dabura.JPG/revision/latest?cb=20120408052940",
        "https://static.wikia.nocookie.net/dragonball/images/9/98/Dabura_28.jpg/revision/latest/scale-to-width-down/900?cb=20200509160040",
        "https://static.wikia.nocookie.net/dragonball/images/6/64/Dabura_25.jpg/revision/latest/scale-to-width-down/900?cb=20200509155929"
      ]
    }
  },
  "dbz:Nail": {
    "portrait": "assets/dbz/nail-portrait.webp",
    "gallery": [
      "assets/dbz/nail-gallery-1.webp",
      "assets/dbz/nail-gallery-2.webp",
      "assets/dbz/nail-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Nail",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/4/40/Nail.png/revision/latest/scale-to-width-down/501?cb=20260822134102",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/1/1b/1990-part4-nail.PNG/revision/latest?cb=20130701012422",
        "https://static.wikia.nocookie.net/dragonball/images/3/3b/Nail%21%21.png/revision/latest?cb=20120530135935",
        "https://static.wikia.nocookie.net/dragonball/images/6/66/Nail_%28Full_Color_Manga%29.png/revision/latest?cb=20210514013717"
      ]
    }
  },
  "dbz:Pui Pui": {
    "portrait": "assets/dbz/puipui-portrait.webp",
    "gallery": [
      "assets/dbz/puipui-gallery-1.webp",
      "assets/dbz/puipui-gallery-2.webp",
      "assets/dbz/puipui-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Pui_Pui",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/4/4a/PuiPuiNV..png/revision/latest?cb=20150325220852",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/b/be/Special_Project_Toyotarou_Drew_It%21%21_-_Pui-Pui.jpeg/revision/latest?cb=20191206064038",
        "https://static.wikia.nocookie.net/dragonball/images/a/ac/Dabra-pui-babidi-a.PNG/revision/latest?cb=20130323232332",
        "https://static.wikia.nocookie.net/dragonball/images/9/94/Dabra-pui-babidi-b.PNG/revision/latest?cb=20130323232411"
      ]
    }
  },
  "dbz:Dende": {
    "portrait": "assets/dbz/dende-portrait.webp",
    "gallery": [
      "assets/dbz/dende-gallery-1.webp",
      "assets/dbz/dende-gallery-2.webp",
      "assets/dbz/dende-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Dende",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/0/0d/DendeIllFightToo.png/revision/latest?cb=20110906232642",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/1/1b/Deformation-dende.PNG/revision/latest?cb=20130204012937",
        "https://static.wikia.nocookie.net/dragonball/images/4/47/DeAgostini-dende-a.JPG/revision/latest?cb=20130204020624",
        "https://static.wikia.nocookie.net/dragonball/images/e/e4/Dende%28SB1%29.png/revision/latest/scale-to-width-down/900?cb=20120126223840"
      ]
    }
  },
  "dbz:Yakon": {
    "portrait": "assets/dbz/yakon-portrait.webp",
    "gallery": [
      "assets/dbz/yakon-gallery-1.webp",
      "assets/dbz/yakon-gallery-2.webp",
      "assets/dbz/yakon-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Yakon",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/e/e7/Yakon01.png/revision/latest?cb=20091115160506",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/d/da/Yakon%27s_floor_DBZ_Kai.png/revision/latest/scale-to-width-down/900?cb=20190922032316",
        "https://static.wikia.nocookie.net/dragonball/images/0/06/Yakon.jpg/revision/latest?cb=20070702133217",
        "https://static.wikia.nocookie.net/dragonball/images/2/2c/Megahouse_Yakon_b.JPG/revision/latest?cb=20130101183950"
      ]
    }
  },
  "dbz:Kaio du Nord": {
    "portrait": "assets/dbz/kingkai-portrait.webp",
    "gallery": [
      "assets/dbz/kingkai-gallery-1.webp",
      "assets/dbz/kingkai-gallery-2.webp",
      "assets/dbz/kingkai-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/King_Kai",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/6/61/KingKaiNV.png/revision/latest?cb=20200219185209",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/a/aa/Future-King-Kai.JPG/revision/latest?cb=20130720100613",
        "https://static.wikia.nocookie.net/dragonball/images/9/93/King_kai.png/revision/latest?cb=20121219222144",
        "https://static.wikia.nocookie.net/dragonball/images/2/21/King_kai_..png/revision/latest?cb=20130701210232"
      ]
    }
  },
  "dbz:Kami": {
    "portrait": "assets/dbz/kami-portrait.webp",
    "gallery": [
      "assets/dbz/kami-gallery-1.webp",
      "assets/dbz/kami-gallery-2.webp",
      "assets/dbz/kami-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Kami",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/a/a2/KamiGarlicJuniorSagaNV.png/revision/latest/scale-to-width-down/820?cb=20250325021450",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/9/98/Kami.jpeg/revision/latest?cb=20130422063548",
        "https://static.wikia.nocookie.net/dragonball/images/5/5b/MFS-Kami.PNG/revision/latest?cb=20130207033027",
        "https://static.wikia.nocookie.net/dragonball/images/9/97/Chopper-Kami.JPG/revision/latest?cb=20130205235214"
      ]
    }
  },
  "dbz:Kibito": {
    "portrait": "assets/dbz/kibito-portrait.webp",
    "gallery": [
      "assets/dbz/kibito-gallery-1.webp",
      "assets/dbz/kibito-gallery-2.webp",
      "assets/dbz/kibito-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Kibito",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/c/ce/Kibito-0.jpg/revision/latest/scale-to-width-down/900?cb=20170521172437",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/d/d2/Kibito%28B2%29.png/revision/latest/scale-to-width-down/900?cb=20111230162301",
        "https://static.wikia.nocookie.net/dragonball/images/9/9c/Kibito%27s_healing.jpg/revision/latest?cb=20111016000318",
        "https://static.wikia.nocookie.net/dragonball/images/2/25/Kibito.png/revision/latest?cb=20091113172658"
      ]
    }
  },
  "dbz:Mr. Popo": {
    "portrait": "assets/dbz/mrpopo-portrait.webp",
    "gallery": [
      "assets/dbz/mrpopo-gallery-1.webp",
      "assets/dbz/mrpopo-gallery-2.webp",
      "assets/dbz/mrpopo-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Mr._Popo",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/9/98/Mrpopo.png/revision/latest/scale-to-width-down/900?cb=20241221193238",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/d/dc/Mr.popo.jpg/revision/latest?cb=20110522182830",
        "https://static.wikia.nocookie.net/dragonball/images/6/62/Mr._Popo_with_the_Dragon_Balls.png/revision/latest/scale-to-width-down/900?cb=20250323224917",
        "https://static.wikia.nocookie.net/dragonball/images/a/a6/Mr._Popo_telling_Goku_the_Black_Star_Dragon_Balls_are_scattered_across_the_universe.jpg/revision/latest/scale-to-width-down/900?cb=20240630221621"
      ]
    }
  },
  "dbz:Shin": {
    "portrait": "assets/dbz/shin-portrait.webp",
    "gallery": [
      "assets/dbz/shin-gallery-1.webp",
      "assets/dbz/shin-gallery-2.webp",
      "assets/dbz/shin-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Shin",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/1/17/KaiSupremeNV.png/revision/latest?cb=20120111094205",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/8/8f/Shin_%28Full_Color_Manga%29.png/revision/latest?cb=20241203223510",
        "https://static.wikia.nocookie.net/dragonball/images/8/80/Shin_%28Kanzenban_manga%29.png/revision/latest?cb=20250429050346",
        "https://static.wikia.nocookie.net/dragonball/images/6/63/Shin-dragon-ball-super-epis%C3%B3dio-122.jpg/revision/latest/scale-to-width-down/900?cb=20181124171527"
      ]
    }
  },
  "dbz:Grand Kaioshin": {
    "portrait": "assets/dbz/grandsupremekai-portrait.webp",
    "gallery": [
      "assets/dbz/grandsupremekai-gallery-1.webp",
      "assets/dbz/grandsupremekai-gallery-2.webp",
      "assets/dbz/grandsupremekai-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Grand_Supreme_Kai",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/1/13/DaikaiohEndOfEarth.png/revision/latest?cb=20100702061918",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/7/71/Moro_realizing_Grand_Supreme_Kai_isn%27t_powerful_anymore_%28Digital_Colored_Manga%29.png/revision/latest?cb=20201123214819",
        "https://static.wikia.nocookie.net/dragonball/images/1/1f/Grand_Supreme_Kai_battles_Moro_in_space_%28Digital_Colored_Manga%29.png/revision/latest/scale-to-width-down/900?cb=20210817125802",
        "https://static.wikia.nocookie.net/dragonball/images/d/da/Merus_explains_how_Buu_inherited_the_Grand_Supreme_Kai%27s_power.jpeg/revision/latest/scale-to-width-down/900?cb=20210820014433"
      ]
    }
  },
  "dbz:Grand Kaio": {
    "portrait": "assets/dbz/grandkai-portrait.webp",
    "gallery": [
      "assets/dbz/grandkai-gallery-1.webp",
      "assets/dbz/grandkai-gallery-2.webp",
      "assets/dbz/grandkai-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Grand_Kai",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/a/ab/Grand_Kai_DBZ_Episode_195.png/revision/latest/scale-to-width-down/607?cb=20210601223816",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/6/61/Grand_-_kai.jpg/revision/latest?cb=20081222021320",
        "https://static.wikia.nocookie.net/dragonball/images/6/6b/Grandkai-superguerriersset1989.PNG/revision/latest?cb=20130406193210",
        "https://static.wikia.nocookie.net/dragonball/images/6/6c/Grand_Kai%27s_Planet.png/revision/latest/scale-to-width-down/900?cb=20101118101030"
      ]
    }
  },
  "dbz:Vieux Kaioshin": {
    "portrait": "assets/dbz/oldkai-portrait.webp",
    "gallery": [
      "assets/dbz/oldkai-gallery-1.webp",
      "assets/dbz/oldkai-gallery-2.webp",
      "assets/dbz/oldkai-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Old_Kai",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/3/30/Old_Kai.jpg/revision/latest/scale-to-width-down/772?cb=20210316155139",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/b/b5/The_Old_Kai%27s_Weapon_-_Old_Kai_gives_life.PNG/revision/latest?cb=20130812220237",
        "https://static.wikia.nocookie.net/dragonball/images/b/b2/Future_Old_Kai.JPG/revision/latest?cb=20120610112338",
        "https://static.wikia.nocookie.net/dragonball/images/a/aa/Gotenks_and_Old_Kai.jpg/revision/latest?cb=20140124195952"
      ]
    }
  },
  "dbz:Kaio du Sud": {
    "portrait": "assets/dbz/southkai-portrait.webp",
    "gallery": [
      "assets/dbz/southkai-gallery-1.webp",
      "assets/dbz/southkai-gallery-2.webp",
      "assets/dbz/southkai-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/South_Kai",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/b/b2/SouthKai.png/revision/latest?cb=20091111075250",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/f/fd/South_Supreme_Kai.png/revision/latest?cb=20140804090644",
        "https://static.wikia.nocookie.net/dragonball/images/6/61/South_kai_manga.png/revision/latest?cb=20150420234958",
        "https://static.wikia.nocookie.net/dragonball/images/3/37/South_Supreme_Kai_%28Super_manga%29.jpg/revision/latest?cb=20250305091100"
      ]
    }
  },
  "dbz:Cooler": {
    "portrait": "assets/dbz/cooler-portrait.webp",
    "gallery": [
      "assets/dbz/cooler-gallery-1.webp",
      "assets/dbz/cooler-gallery-2.webp",
      "assets/dbz/cooler-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Cooler",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/4/4e/Cooler%27s_Revenge_-_Cooler_prepares_to_transform.png/revision/latest/scale-to-width-down/886?cb=20250111151725",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/c/c9/Cooler.jpg/revision/latest?cb=20120718134901",
        "https://static.wikia.nocookie.net/dragonball/images/9/9e/Future-Cooler.jpg/revision/latest?cb=20120408060401",
        "https://static.wikia.nocookie.net/dragonball/images/c/c9/KeshiGomuset-Cooler.PNG/revision/latest?cb=20130426230003"
      ]
    }
  },
  "dbz:Kaio de l’Ouest": {
    "portrait": "assets/dbz/westkai-portrait.webp",
    "gallery": [
      "assets/dbz/westkai-gallery-1.webp",
      "assets/dbz/westkai-gallery-2.webp",
      "assets/dbz/westkai-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/West_Kai",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/3/35/WestKai.png/revision/latest?cb=20091111074728",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/e/e1/Supreme_West_Kai_back.PNG/revision/latest?cb=20121229220027",
        "https://static.wikia.nocookie.net/dragonball/images/b/b2/Supreme_West_Kai_b.PNG/revision/latest?cb=20121229220243",
        "https://static.wikia.nocookie.net/dragonball/images/9/9c/Supreme_West_Kai_c.PNG/revision/latest?cb=20121229215519"
      ]
    }
  },
  "dbz:Paikuhan": {
    "portrait": "assets/dbz/pikkon-portrait.webp",
    "gallery": [
      "assets/dbz/pikkon-gallery-1.webp",
      "assets/dbz/pikkon-gallery-2.webp",
      "assets/dbz/pikkon-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Pikkon",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/b/b1/Pikkon_DBZ_Ep_198_003.png/revision/latest/scale-to-width-down/533?cb=20170916231851",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/b/b2/Pikkon.png/revision/latest/scale-to-width-down/900?cb=20190625113047",
        "https://static.wikia.nocookie.net/dragonball/images/0/01/HG-Series16-pikkon.PNG/revision/latest?cb=20130225012946",
        "https://static.wikia.nocookie.net/dragonball/images/8/8c/HG-Series16-pikkon-b.PNG/revision/latest?cb=20130225013039"
      ]
    }
  },
  "dbz:Dore": {
    "portrait": "assets/dbz/dore-portrait.webp",
    "gallery": [
      "assets/dbz/dore-gallery-1.webp",
      "assets/dbz/dore-gallery-2.webp",
      "assets/dbz/dore-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Dore",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/3/33/Cooler%27s_Revenge_-_Doore_deflecting_one_of_Goku%27s_Kamehamehas.png/revision/latest/scale-to-width-down/900?cb=20250101230502",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/c/c4/Dore-snap.PNG/revision/latest?cb=20130505211201",
        "https://static.wikia.nocookie.net/dragonball/images/2/21/Raging_Blast_2_-_Dore.jpg/revision/latest?cb=20120315192827",
        "https://static.wikia.nocookie.net/dragonball/images/b/bc/Dore_Terrible_Flash.png/revision/latest/scale-to-width-down/900?cb=20111115211904"
      ]
    }
  },
  "dbz:Turles": {
    "portrait": "assets/dbz/turles-portrait.webp",
    "gallery": [
      "assets/dbz/turles-gallery-1.webp",
      "assets/dbz/turles-gallery-2.webp",
      "assets/dbz/turles-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Turles",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/0/0b/The_Tree_of_Might_-_Turles_looking_down_at_Gohan.jpg/revision/latest/scale-to-width-down/869?cb=20210927023245",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/3/3c/Turles.png/revision/latest?cb=20110913220005",
        "https://static.wikia.nocookie.net/dragonball/images/6/66/830px-Turles.jpg/revision/latest?cb=20120212212107",
        "https://static.wikia.nocookie.net/dragonball/images/e/e7/Evil_Saiyan_Turles.PNG/revision/latest/scale-to-width-down/900?cb=20210509123348"
      ]
    }
  },
  "dbz:Salza": {
    "portrait": "assets/dbz/salza-portrait.webp",
    "gallery": [
      "assets/dbz/salza-gallery-1.webp",
      "assets/dbz/salza-gallery-2.webp",
      "assets/dbz/salza-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Salza",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/2/24/Cooler%27s_Revenge_-_Salza_walking_to_the_cave_Goku%27s_in.png/revision/latest/scale-to-width-down/900?cb=20250101212714",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/2/23/SALZA-snap.PNG/revision/latest?cb=20130505210444",
        "https://static.wikia.nocookie.net/dragonball/images/4/4f/Salza-kesh-b.PNG/revision/latest?cb=20130505032404",
        "https://static.wikia.nocookie.net/dragonball/images/f/f9/Salza-1991-bandai-part10.jpg/revision/latest?cb=20130505031902"
      ]
    }
  },
  "dbz:Neiz": {
    "portrait": "assets/dbz/neiz-portrait.webp",
    "gallery": [
      "assets/dbz/neiz-gallery-1.webp",
      "assets/dbz/neiz-gallery-2.webp",
      "assets/dbz/neiz-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Neiz",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/a/a0/Cooler%27s_Revenge_-_Neiz_prepare_to_use_Neiz_Bind_Wave.png/revision/latest/scale-to-width-down/900?cb=20250101213321",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/a/a4/Neiz-snapkeshi-b.PNG/revision/latest?cb=20130505033129",
        "https://static.wikia.nocookie.net/dragonball/images/9/93/Neiz-SNAP.PNG/revision/latest?cb=20130505211237",
        "https://static.wikia.nocookie.net/dragonball/images/8/89/Cooler%27s_Revenge_-_Neiz%27s_scouter_detects_Krillin%27s_energy.png/revision/latest/scale-to-width-down/900?cb=20240218194756"
      ]
    }
  },
  "dbz:Amond": {
    "portrait": "assets/dbz/amond-portrait.webp",
    "gallery": [
      "assets/dbz/amond-gallery-1.webp",
      "assets/dbz/amond-gallery-2.webp",
      "assets/dbz/amond-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Amond",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/6/64/The_Tree_of_Might_-_Amond.jpg/revision/latest?cb=20100221060307",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/c/c9/Amond-Part4.JPG/revision/latest?cb=20130429012208",
        "https://static.wikia.nocookie.net/dragonball/images/0/06/Amond.jpg/revision/latest/scale-to-width-down/900?cb=20240202204125",
        "https://static.wikia.nocookie.net/dragonball/images/1/19/Amond-keshi-a.PNG/revision/latest?cb=20130429012143"
      ]
    }
  },
  "dbz:Cacao": {
    "portrait": "assets/dbz/cacao-portrait.webp",
    "gallery": [
      "assets/dbz/cacao-gallery-1.webp",
      "assets/dbz/cacao-gallery-2.webp",
      "assets/dbz/cacao-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Cacao",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/a/ae/The_Tree_of_Might_-_Cacao_looks_up_at_the_Tree_of_Might.png/revision/latest/scale-to-width-down/900?cb=20240202010752",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/c/cb/Cacao.jpg/revision/latest?cb=20101129020928",
        "https://static.wikia.nocookie.net/dragonball/images/9/92/Cacao-keshi-a.JPG/revision/latest?cb=20130504230907",
        "https://static.wikia.nocookie.net/dragonball/images/7/72/The_Tree_of_Might_-_Cacao_%26_Daiz_prepare_Combined_Energy_Wave.png/revision/latest/scale-to-width-down/900?cb=20240204201041"
      ]
    }
  },
  "dbz:Daiz": {
    "portrait": "assets/dbz/daiz-portrait.webp",
    "gallery": [
      "assets/dbz/daiz-gallery-1.webp",
      "assets/dbz/daiz-gallery-2.webp",
      "assets/dbz/daiz-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Daiz",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/9/90/The_Tree_of_Might_-_Daiz_crushing_a_rock.jpg/revision/latest/scale-to-width-down/900?cb=20240202203718",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/7/7a/Daiz-Gohanmoviedesigns.jpg/revision/latest?cb=20120529004612",
        "https://static.wikia.nocookie.net/dragonball/images/b/bf/Daiz-keshi-a.jpg/revision/latest?cb=20130502215025",
        "https://static.wikia.nocookie.net/dragonball/images/1/1a/Fusion_Reborn_-_Daiz.png/revision/latest/scale-to-width-down/900?cb=20240205024814"
      ]
    }
  },
  "dbz:Rasin": {
    "portrait": "assets/dbz/rasin-portrait.webp",
    "gallery": [
      "assets/dbz/rasin-gallery-1.webp",
      "assets/dbz/rasin-gallery-2.webp",
      "assets/dbz/rasin-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Rasin",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/3/3c/The_Tree_of_Might_-_Rasin.jpg/revision/latest/scale-to-width-down/900?cb=20240202225440",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/4/47/The_Tree_of_Might_-_Rasin%27s_Continuous_Energy_Bullets_about_to_hit_Chiaotzu.jpg/revision/latest/scale-to-width-down/900?cb=20240203025944",
        "https://static.wikia.nocookie.net/dragonball/images/7/7d/The_Tree_of_Might_-_Rasin_and_Lakasei_pose.png/revision/latest/scale-to-width-down/900?cb=20240202234533",
        "https://static.wikia.nocookie.net/dragonball/images/c/c3/The_Tree_of_Might_-_Goku_punches_Rasin_in_the_face_%28censored_Saban_version%29.png/revision/latest/scale-to-width-down/900?cb=20150610044642"
      ]
    }
  },
  "dbz:Slug": {
    "portrait": "assets/dbz/lordslug-portrait.webp",
    "gallery": [
      "assets/dbz/lordslug-gallery-1.webp",
      "assets/dbz/lordslug-gallery-2.webp",
      "assets/dbz/lordslug-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Lord_Slug",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/8/88/Lord_Slug_-_Lord_Slug_-_007.png/revision/latest/scale-to-width-down/900?cb=20250308100918",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/4/48/Lord_slug.jpg/revision/latest?cb=20150804004554",
        "https://static.wikia.nocookie.net/dragonball/images/0/0f/Dragonball_Z_Lord_Slug_%28Full_Movie%29_-_YouTube_1_2.png/revision/latest?cb=20130716135947",
        "https://static.wikia.nocookie.net/dragonball/images/7/7b/True_Form_Of_Lord_Slug.JPG/revision/latest?cb=20130805211316"
      ]
    }
  },
  "dbz:Lakasei": {
    "portrait": "assets/dbz/lakasei-portrait.webp",
    "gallery": [
      "assets/dbz/lakasei-gallery-1.webp",
      "assets/dbz/lakasei-gallery-2.webp",
      "assets/dbz/lakasei-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Lakasei",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/0/09/The_Tree_of_Might_-_Lakasei_looking_in_the_crater_for_the_Seed_of_Might.png/revision/latest/scale-to-width-down/900?cb=20240202233241",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/7/7d/The_Tree_of_Might_-_Rasin_and_Lakasei_pose.png/revision/latest/scale-to-width-down/900?cb=20240202234533",
        "https://static.wikia.nocookie.net/dragonball/images/0/0c/The_Tree_of_Might_-_Lakasei_and_Rasin_split_from_their_fusion.png/revision/latest/scale-to-width-down/900?cb=20240202224524",
        "https://static.wikia.nocookie.net/dragonball/images/a/ac/The_Tree_of_Might_-_Rasin_and_Lakasei_pose_4.png/revision/latest/scale-to-width-down/900?cb=20240202235201"
      ]
    }
  },
  "dbz:Angila": {
    "portrait": "assets/dbz/angila-portrait.webp",
    "gallery": [
      "assets/dbz/angila-gallery-1.webp",
      "assets/dbz/angila-gallery-2.webp",
      "assets/dbz/angila-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Angila",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/9/95/Angira.JPG/revision/latest/scale-to-width-down/900?cb=20190805163101",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/6/6f/Lord_Slug_-_Piccolo_confronts_Angila%2C_Wings%2C_and_Medamatcha.jpg/revision/latest?cb=20120229202954",
        "https://static.wikia.nocookie.net/dragonball/images/e/e2/Lord_Slug_-_Angila_gets_a_Dragon_Ball.png/revision/latest/scale-to-width-down/900?cb=20101110131531",
        "https://static.wikia.nocookie.net/dragonball/images/2/26/Lord_Slug_-_Angila_and_Wings_attack_Gohan.jpg/revision/latest/scale-to-width-down/900?cb=20190724210910"
      ]
    }
  },
  "dbz:Garlic Jr.": {
    "portrait": "assets/dbz/garlicjr-portrait.webp",
    "gallery": [
      "assets/dbz/garlicjr-gallery-1.webp",
      "assets/dbz/garlicjr-gallery-2.webp",
      "assets/dbz/garlicjr-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Garlic_Jr.",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/1/15/Garlic_Jr_anime.png/revision/latest/scale-to-width-down/697?cb=20260521233638",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/c/c2/Super_Garlic_jr.jpg/revision/latest?cb=20121001024428",
        "https://static.wikia.nocookie.net/dragonball/images/7/73/Super_Garlic_Jr..JPG/revision/latest?cb=20110330005117",
        "https://static.wikia.nocookie.net/dragonball/images/e/ed/Garlic_Jr._Saga.jpg/revision/latest?cb=20070615150251"
      ]
    }
  },
  "dbz:Tapion": {
    "portrait": "assets/dbz/tapion-portrait.webp",
    "gallery": [
      "assets/dbz/tapion-gallery-1.webp",
      "assets/dbz/tapion-gallery-2.webp",
      "assets/dbz/tapion-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Tapion",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/8/8c/FMSv13dXwAY3f4a.jpg/revision/latest/scale-to-width-down/826?cb=20220223171217",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/f/fa/Tapion--.jpg/revision/latest?cb=20100710232638",
        "https://static.wikia.nocookie.net/dragonball/images/7/7e/Tapion.jpg/revision/latest?cb=20090529222439",
        "https://static.wikia.nocookie.net/dragonball/images/4/47/Tapion%27s_release.png/revision/latest?cb=20110924014712"
      ]
    }
  },
  "dbz:Ginger": {
    "portrait": "assets/dbz/ginger-portrait.webp",
    "gallery": [
      "assets/dbz/ginger-gallery-1.webp",
      "assets/dbz/ginger-gallery-2.webp",
      "assets/dbz/ginger-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Ginger",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/9/9a/Ginger_InfoboxMug.png/revision/latest/scale-to-width-down/888?cb=20140802094603",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/2/26/Part12-Ginger.JPG/revision/latest?cb=20130428153640",
        "https://static.wikia.nocookie.net/dragonball/images/3/3d/Part12-Ginger-blue-a.PNG/revision/latest?cb=20130625205312",
        "https://static.wikia.nocookie.net/dragonball/images/1/18/Part12-Ginger-close.PNG/revision/latest?cb=20130428154506"
      ]
    }
  },
  "dbz:Medamatcha": {
    "portrait": "assets/dbz/medamatcha-portrait.webp",
    "gallery": [
      "assets/dbz/medamatcha-gallery-1.webp",
      "assets/dbz/medamatcha-gallery-2.webp",
      "assets/dbz/medamatcha-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Medamatcha",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/9/9f/Medaka.jpg/revision/latest/scale-to-width-down/900?cb=20190725182153",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/e/e8/Lord_Slug_-_Medamatcha_finds_a_Dragon_Ball.png/revision/latest/scale-to-width-down/900?cb=20190724232927",
        "https://static.wikia.nocookie.net/dragonball/images/0/0c/Medamatcha_Finished.JPG/revision/latest?cb=20130603233821",
        "https://static.wikia.nocookie.net/dragonball/images/9/99/Medamatcha-a.PNG/revision/latest?cb=20130428155923"
      ]
    }
  },
  "dbz:Dr Wheelo": {
    "portrait": "assets/dbz/drwheelo-portrait.webp",
    "gallery": [
      "assets/dbz/drwheelo-gallery-1.webp",
      "assets/dbz/drwheelo-gallery-2.webp",
      "assets/dbz/drwheelo-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Dr._Wheelo",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/1/18/Dr_Wheelo_Willow.PNG/revision/latest?cb=20200409221941",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/5/56/Dr._Wheelo_%28manga%29.jpeg/revision/latest?cb=20250116185609",
        "https://static.wikia.nocookie.net/dragonball/images/e/e1/Dr._Wheelo_%28True_Form%29.jpg/revision/latest/scale-to-width-down/900?cb=20210915202416",
        "https://static.wikia.nocookie.net/dragonball/images/f/f9/Dr.Wheelo.TWS.png/revision/latest/scale-to-width-down/900?cb=20110906140600"
      ]
    }
  },
  "dbz:Dr Kochin": {
    "portrait": "assets/dbz/drkochin-portrait.webp",
    "gallery": [
      "assets/dbz/drkochin-gallery-1.webp",
      "assets/dbz/drkochin-gallery-2.webp",
      "assets/dbz/drkochin-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Dr._Kochin",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/c/c1/Dr._Kochin_-_The_World%27s_Strongest_-_001.png/revision/latest/scale-to-width-down/900?cb=20250715031859",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/c/c3/Dr._Kochin.png/revision/latest/scale-to-width-down/900?cb=20090223123109",
        "https://static.wikia.nocookie.net/dragonball/images/5/5e/Dr._Kochin_mad.jpg/revision/latest/scale-to-width-down/900?cb=20110908183120",
        "https://static.wikia.nocookie.net/dragonball/images/f/fb/The_World%27s_Strongest_-_Dr._Kochin%27s_true_form_revealed.jpg/revision/latest?cb=20090731041838"
      ]
    }
  },
  "dbz:Nicky": {
    "portrait": "assets/dbz/nicky-portrait.webp",
    "gallery": [
      "assets/dbz/nicky-gallery-1.webp",
      "assets/dbz/nicky-gallery-2.webp",
      "assets/dbz/nicky-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Nicky",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/6/67/Screen_shot_2014-08-02_at_2.14.41_AM.png/revision/latest/scale-to-width-down/900?cb=20140802091931",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/0/09/Part12-Nicky-B.JPG/revision/latest?cb=20130428151117",
        "https://static.wikia.nocookie.net/dragonball/images/d/de/Part12-Nicky.JPG/revision/latest?cb=20130428150644",
        "https://static.wikia.nocookie.net/dragonball/images/2/26/Part12-Nicky-close.PNG/revision/latest?cb=20130428154615"
      ]
    }
  },
  "dbz:Sansho": {
    "portrait": "assets/dbz/sansho-portrait.webp",
    "gallery": [
      "assets/dbz/sansho-gallery-1.webp",
      "assets/dbz/sansho-gallery-2.webp",
      "assets/dbz/sansho-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Sansho",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/9/90/Sansho_Mug.png/revision/latest/scale-to-width-down/900?cb=20140802094630",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/d/d7/SANSHO-Part12.JPG/revision/latest?cb=20130428152501",
        "https://static.wikia.nocookie.net/dragonball/images/2/2c/Part12-SANSHO-B.JPG/revision/latest?cb=20130428153416",
        "https://static.wikia.nocookie.net/dragonball/images/0/09/SANSHO-Part12-close.PNG/revision/latest?cb=20130429010922"
      ]
    }
  },
  "dbz:Kishime": {
    "portrait": "assets/dbz/kishime-portrait.webp",
    "gallery": [
      "assets/dbz/kishime-gallery-1.webp",
      "assets/dbz/kishime-gallery-2.webp",
      "assets/dbz/kishime-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Kishime",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/3/3b/The_World%27s_Strongest_-_Kishime_prepares_his_Electric_Whip.png/revision/latest/scale-to-width-down/900?cb=20250715034541",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/c/cf/Kishime.jpg/revision/latest/scale-to-width-down/900?cb=20110904133930",
        "https://static.wikia.nocookie.net/dragonball/images/8/87/Kishime-A.PNG/revision/latest?cb=20130428150222",
        "https://static.wikia.nocookie.net/dragonball/images/5/56/Kishime-A-close.PNG/revision/latest?cb=20130428154740"
      ]
    }
  },
  "dbz:Misokatsun": {
    "portrait": "assets/dbz/misokatsun-portrait.webp",
    "gallery": [
      "assets/dbz/misokatsun-gallery-1.webp",
      "assets/dbz/misokatsun-gallery-2.webp",
      "assets/dbz/misokatsun-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Misokatsun",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/5/5f/Misokat.png/revision/latest/scale-to-width-down/900?cb=20250715035409",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/7/72/Part12-Misokatsun.JPG/revision/latest?cb=20130428145851",
        "https://static.wikia.nocookie.net/dragonball/images/f/f3/Part12-Misokatsun-close.PNG/revision/latest?cb=20130428154819",
        "https://static.wikia.nocookie.net/dragonball/images/b/b5/Part12-Misokatsun-B.JPG/revision/latest?cb=20130428150112"
      ]
    }
  },
  "dbz:Broly": {
    "portrait": "assets/dbz/broly-portrait.webp",
    "gallery": [
      "assets/dbz/broly-gallery-1.webp",
      "assets/dbz/broly-gallery-2.webp",
      "assets/dbz/broly-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Broly",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/c/cd/Broly_Infobox_image.png/revision/latest/scale-to-width-down/670?cb=20170525181624",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/9/97/Broly_%28Super_Saiyan%29.jpg/revision/latest/scale-to-width-down/900?cb=20180331031152",
        "https://static.wikia.nocookie.net/dragonball/images/0/08/Broly-the_legendary_super_sayin.jpg/revision/latest?cb=20130722012953",
        "https://static.wikia.nocookie.net/dragonball/images/2/2d/Broly_-_The_Legendary_Super_Saiyan_-_Goku_%26_Broly_powering_up.jpg/revision/latest/scale-to-width-down/900?cb=20250311143751"
      ]
    }
  },
  "dbz:Ebifurya": {
    "portrait": "assets/dbz/ebifurya-portrait.webp",
    "gallery": [
      "assets/dbz/ebifurya-gallery-1.webp",
      "assets/dbz/ebifurya-gallery-2.webp",
      "assets/dbz/ebifurya-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Ebifurya",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/9/93/Ebifurya4.PNG/revision/latest/scale-to-width-down/900?cb=20250715034642",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/3/3d/Part12-Ebifurya.JPG/revision/latest?cb=20130428032217",
        "https://static.wikia.nocookie.net/dragonball/images/a/a4/Part12-Ebifurya-B.JPG/revision/latest?cb=20130428032446",
        "https://static.wikia.nocookie.net/dragonball/images/1/1e/The_World%27s_Strongest_-_Ebifurya_appears_before_Piccolo.png/revision/latest/scale-to-width-down/900?cb=20101120154334"
      ]
    }
  },
  "dbz:Paragus": {
    "portrait": "assets/dbz/paragus-portrait.webp",
    "gallery": [
      "assets/dbz/paragus-gallery-1.webp",
      "assets/dbz/paragus-gallery-2.webp",
      "assets/dbz/paragus-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Paragus",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/a/ab/ParagusDVD.png/revision/latest?cb=20100809114554",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/b/bc/Paragus_%28Super_manga%29.jpg/revision/latest?cb=20250304222054",
        "https://static.wikia.nocookie.net/dragonball/images/f/f1/Paragus_SuperBroly.png/revision/latest?cb=20180718170919",
        "https://static.wikia.nocookie.net/dragonball/images/3/3f/Paragus_%2841_years_ago%29.jpg/revision/latest/scale-to-width-down/900?cb=20181101170337"
      ]
    }
  },
  "dbz:Bido": {
    "portrait": "assets/dbz/bido-portrait.webp",
    "gallery": [
      "assets/dbz/bido-gallery-1.webp",
      "assets/dbz/bido-gallery-2.webp",
      "assets/dbz/bido-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Bido",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/7/70/Bojack_Unbound_-_Bido.jpg/revision/latest?cb=20081224075022",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/5/55/Part20-Bido-B.JPG/revision/latest?cb=20130502223041",
        "https://static.wikia.nocookie.net/dragonball/images/1/1c/Part20-BIDO.JPG/revision/latest?cb=20130502223016",
        "https://static.wikia.nocookie.net/dragonball/images/6/6b/Bido-kesh-b.jpg/revision/latest?cb=20130502222931"
      ]
    }
  },
  "dbz:Bujin": {
    "portrait": "assets/dbz/bujin-portrait.webp",
    "gallery": [
      "assets/dbz/bujin-gallery-1.webp",
      "assets/dbz/bujin-gallery-2.webp",
      "assets/dbz/bujin-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Bujin",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/a/a7/Dbz-28.jpg/revision/latest?cb=20110306183432",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/4/40/Part20-BUJIN.JPG/revision/latest?cb=20130502221857",
        "https://static.wikia.nocookie.net/dragonball/images/9/97/Bujin-kesh-b.jpg/revision/latest?cb=20130502222215",
        "https://static.wikia.nocookie.net/dragonball/images/2/29/Bujin-kesh-a.jpg/revision/latest?cb=20130502222140"
      ]
    }
  },
  "dbz:Bojack": {
    "portrait": "assets/dbz/bojack-portrait.webp",
    "gallery": [
      "assets/dbz/bojack-gallery-1.webp",
      "assets/dbz/bojack-gallery-2.webp",
      "assets/dbz/bojack-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Bojack",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/2/29/Bojack.BojackUnbound.png/revision/latest/scale-to-width-down/900?cb=20230626181902",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/4/45/Bojack.jpg/revision/latest?cb=20110419042435",
        "https://static.wikia.nocookie.net/dragonball/images/9/90/Part20-BOJACK.JPG/revision/latest?cb=20130502223806",
        "https://static.wikia.nocookie.net/dragonball/images/d/d2/Part20-BOJACK-B.JPG/revision/latest?cb=20130502223837"
      ]
    }
  },
  "dbz:Zangya": {
    "portrait": "assets/dbz/zangya-portrait.webp",
    "gallery": [
      "assets/dbz/zangya-gallery-1.webp",
      "assets/dbz/zangya-gallery-2.webp",
      "assets/dbz/zangya-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Zangya",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/7/7f/Zangya3.png/revision/latest?cb=20090503184325",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/e/e0/Bujin-Zangya-Bojack.jpg/revision/latest?cb=20130502223740",
        "https://static.wikia.nocookie.net/dragonball/images/f/f7/Bojack_Unbound_-_Zangya_necklace.png/revision/latest?cb=20130519043627",
        "https://static.wikia.nocookie.net/dragonball/images/5/5d/Zangya_a.PNG/revision/latest?cb=20121118014545"
      ]
    }
  },
  "dbz:Janemba": {
    "portrait": "assets/dbz/janemba-portrait.webp",
    "gallery": [
      "assets/dbz/janemba-gallery-1.webp",
      "assets/dbz/janemba-gallery-2.webp",
      "assets/dbz/janemba-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Janemba",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/b/bf/Myth.jpg/revision/latest?cb=20170104141124",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/0/05/Janemba.jpg/revision/latest?cb=20080929213726",
        "https://static.wikia.nocookie.net/dragonball/images/6/69/Janemba.JPG/revision/latest/scale-to-width-down/900?cb=20140803011653",
        "https://static.wikia.nocookie.net/dragonball/images/a/a6/Future-Janemba.JPG/revision/latest?cb=20120610120733"
      ]
    }
  },
  "onepiece:Marshall D. Teach": {
    "portrait": "assets/onepiece/teach-portrait.png",
    "gallery": [
      "assets/onepiece/teach-gallery-1.png",
      "assets/onepiece/teach-gallery-2.jpg",
      "assets/onepiece/teach-gallery-3.jpg"
    ],
    "sourcePage": "https://one-piece.com/character/Marshall_D_Teech/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Marshall_D_Teech/Marshall_D_Teech_face_egghead.png",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Marshall_D_Teech/Marshall_D_Teech_main_egghead.png",
        "https://one-piece.com/img/character/Marshall_D_Teech/Marshall_D_Teech_02.jpg",
        "https://one-piece.com/img/character/Marshall_D_Teech/Marshall_D_Teech_03.jpg"
      ]
    }
  },
  "onepiece:Kaido": {
    "portrait": "assets/onepiece/kaidou-portrait.png",
    "gallery": [
      "assets/onepiece/kaidou-gallery-1.webp",
      "assets/onepiece/kaidou-gallery-2.webp",
      "assets/onepiece/kaidou-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Kaido/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/uploads/anime/character/characters/20180126/67ecde9efe451c35f0544d3708dbe085.png",
      "gallery": [
        "https://one-piece.com/o/assets/uploads/anime/character/characters/20180126/4736dc4ef6def3e8ffd2c3e9aa2b40d4.png",
        "https://static.wikia.nocookie.net/onepiece/images/e/ea/Kaido%27s_size_compared_to_his_men.png/revision/latest?cb=20181217145022",
        "https://static.wikia.nocookie.net/onepiece/images/2/27/We_Are_1000_Kaido.png/revision/latest/scale-to-width-down/900?cb=20211121172353"
      ]
    }
  },
  "onepiece:Aramaki": {
    "portrait": "assets/onepiece/ryokugyu-portrait.jpg",
    "gallery": [
      "assets/onepiece/ryokugyu-gallery-1.jpg",
      "assets/onepiece/ryokugyu-gallery-2.webp",
      "assets/onepiece/ryokugyu-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Aramaki/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/img/character/aramaki_thum.jpg",
      "gallery": [
        "https://one-piece.com/img/character/aramaki_main.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/4/44/Aramaki%27s_Eyes.png/revision/latest?cb=20231024032443",
        "https://static.wikia.nocookie.net/onepiece/images/2/28/Aramaki%27s_Digitally_Colored_Manga_Scheme.png/revision/latest?cb=20241203161148"
      ]
    }
  },
  "onepiece:Charlotte Perospero": {
    "portrait": "assets/onepiece/perospero-portrait.jpg",
    "gallery": [
      "assets/onepiece/perospero-gallery-1.webp",
      "assets/onepiece/perospero-gallery-2.webp",
      "assets/onepiece/perospero-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/perospero/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/uploads/anime/character/characters/20171031/15c5b673938dbf95f36c75bbbfdb28b9.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/uploads/anime/character/characters/20171031/7b01d4a94f66ff3603a5847659c63dc7.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/7/7e/Charlotte_Perospero_Anime_Infobox.png/revision/latest?cb=20211101122146",
        "https://static.wikia.nocookie.net/onepiece/images/f/f0/Charlotte_Perospero_Manga_Infobox.png/revision/latest?cb=20250601171922"
      ]
    }
  },
  "onepiece:Charlotte Cracker": {
    "portrait": "assets/onepiece/cracker-portrait.jpg",
    "gallery": [
      "assets/onepiece/cracker-gallery-1.webp",
      "assets/onepiece/cracker-gallery-2.webp",
      "assets/onepiece/cracker-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Charlotte_Cracker/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/uploads/anime/character/characters/20171101/2f08ee2bd79c49013f8ccc0934bbef38.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/uploads/anime/character/characters/20171101/eab485c9f945d89aa4025931ad6f885e.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/e/ed/Charlotte_Cracker_Live_Attraction.png/revision/latest?cb=20200430143553",
        "https://static.wikia.nocookie.net/onepiece/images/6/6e/Charlotte_Cracker_Manga_Infobox.png/revision/latest?cb=20160906161424"
      ]
    }
  },
  "onepiece:Charlotte Katakuri": {
    "portrait": "assets/onepiece/katakuri-portrait.png",
    "gallery": [
      "assets/onepiece/katakuri-gallery-1.webp",
      "assets/onepiece/katakuri-gallery-2.webp",
      "assets/onepiece/katakuri-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Charlotte_Katakuri/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/uploads/anime/character/characters/20180226/9f051dc3b852120235a9b84ba13d8d61.png",
      "gallery": [
        "https://one-piece.com/o/assets/uploads/anime/character/characters/20180226/6758afea7fc09f559a3f2b93b60351c4.png",
        "https://static.wikia.nocookie.net/onepiece/images/2/2a/Charlotte_Katakuri_Manga_Infobox.png/revision/latest/scale-to-width-down/900?cb=20170327052140",
        "https://static.wikia.nocookie.net/onepiece/images/1/19/Charlotte_Katakuri_Portrait.png/revision/latest?cb=20220408153142"
      ]
    }
  },
  "onepiece:Charlotte Oven": {
    "portrait": "assets/onepiece/oven-portrait.png",
    "gallery": [
      "assets/onepiece/oven-gallery-1.webp",
      "assets/onepiece/oven-gallery-2.webp",
      "assets/onepiece/oven-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Charlotte_Oven/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/uploads/anime/character/characters/20180226/40eeb02cc9101b3515c25453624a553c.png",
      "gallery": [
        "https://one-piece.com/o/assets/uploads/anime/character/characters/20180226/89e5ffff83795cc25a974f1799ab1e80.png",
        "https://static.wikia.nocookie.net/onepiece/images/e/e1/Charlotte_Oven_Portrait.png/revision/latest?cb=20181121043623",
        "https://static.wikia.nocookie.net/onepiece/images/8/85/Charlotte_Oven_Manga_Infobox.png/revision/latest?cb=20171106213932"
      ]
    }
  },
  "onepiece:Charlotte Daifuku": {
    "portrait": "assets/onepiece/daifuku-portrait.png",
    "gallery": [
      "assets/onepiece/daifuku-gallery-1.webp",
      "assets/onepiece/daifuku-gallery-2.webp",
      "assets/onepiece/daifuku-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Charlotte_Daifuku/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/uploads/anime/character/characters/20180226/a3aea630d7cfc1d357400fb29407d676.png",
      "gallery": [
        "https://one-piece.com/o/assets/uploads/anime/character/characters/20180226/dc4b607ce3406e87635f295a23093368.png",
        "https://static.wikia.nocookie.net/onepiece/images/d/d7/Charlotte_Daifuku_Portrait.png/revision/latest?cb=20200314083056",
        "https://static.wikia.nocookie.net/onepiece/images/3/33/Charlotte_Daifuku_Manga_Infobox.png/revision/latest?cb=20171212162800"
      ]
    }
  },
  "onepiece:King": {
    "portrait": "assets/onepiece/king-portrait.jpg",
    "gallery": [
      "assets/onepiece/king-gallery-1.jpg",
      "assets/onepiece/king-gallery-2.webp",
      "assets/onepiece/king-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/King/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/img/character/King_thum250303.jpg",
      "gallery": [
        "https://one-piece.com/img/character/King_main250303.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/8/83/King_%26_Ministers.png/revision/latest?cb=20241229022259",
        "https://static.wikia.nocookie.net/onepiece/images/9/91/King%27s_Team.png/revision/latest?cb=20260429201813"
      ]
    }
  },
  "onepiece:Queen": {
    "portrait": "assets/onepiece/queen-portrait.jpg",
    "gallery": [
      "assets/onepiece/queen-gallery-1.webp",
      "assets/onepiece/queen-gallery-2.webp",
      "assets/onepiece/queen-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Queen/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/uploads/anime/character/characters/20200805/92b07645d1d8254cf60b2b1d1e94987a.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/uploads/anime/character/characters/20200805/87ad6c69060bf2a1f94d5c775f428abd.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/4/45/Queen%27s_Mechanical_Arm.png/revision/latest?cb=20190704213604",
        "https://static.wikia.nocookie.net/onepiece/images/e/eb/Queen_defeated.png/revision/latest?cb=20230512195724"
      ]
    }
  },
  "onepiece:Jack": {
    "portrait": "assets/onepiece/jack-portrait.png",
    "gallery": [
      "assets/onepiece/jack-gallery-1.webp",
      "assets/onepiece/jack-gallery-2.webp",
      "assets/onepiece/jack-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Jack/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/uploads/anime/character/characters/20180522/db2e6a11a268742ca108c3c0b147f25b.png",
      "gallery": [
        "https://one-piece.com/o/assets/uploads/anime/character/characters/20180522/2429123d6cc32a9be5b8cde6f8ae1982.png",
        "https://static.wikia.nocookie.net/onepiece/images/b/b4/Jack%27s_Face_Unmasked.png/revision/latest?cb=20260125201708",
        "https://static.wikia.nocookie.net/onepiece/images/7/73/Jack%27s_Fleet_Returns_to_Zou.png/revision/latest/scale-to-width-down/900?cb=20170116011536"
      ]
    }
  },
  "onepiece:Ulti": {
    "portrait": "assets/onepiece/ulti-portrait.jpg",
    "gallery": [
      "assets/onepiece/ulti-gallery-1.webp",
      "assets/onepiece/ulti-gallery-2.webp",
      "assets/onepiece/ulti-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/ulti/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/uploads/anime/character/characters/20211111/e7bcc609479c6a3f0f08833e4bd45870.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/uploads/anime/character/characters/20211111/f694c331b274f5ef35aa64df833b321a.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/f/f1/Ulti%27s_Morning_Star.png/revision/latest/scale-to-width-down/900?cb=20240831170352",
        "https://static.wikia.nocookie.net/onepiece/images/a/a4/Ulti_Concept_Art.png/revision/latest/scale-to-width-down/900?cb=20250308221812"
      ]
    }
  },
  "onepiece:Page One": {
    "portrait": "assets/onepiece/pageone-portrait.jpg",
    "gallery": [
      "assets/onepiece/pageone-gallery-1.jpg",
      "assets/onepiece/pageone-gallery-2.webp",
      "assets/onepiece/pageone-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Page_One/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/img/character/Page_One_thum250303.jpg",
      "gallery": [
        "https://one-piece.com/img/character/Page_One_main250303.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/6/6c/Ulti_and_Page_One_Stumble_into_Luffy.png/revision/latest/scale-to-width-down/900?cb=20240831170359",
        "https://static.wikia.nocookie.net/onepiece/images/9/97/Page_One_Concept_Art.png/revision/latest/scale-to-width-down/900?cb=20250308220612"
      ]
    }
  },
  "onepiece:Black Maria": {
    "portrait": "assets/onepiece/blackmaria-portrait.jpg",
    "gallery": [
      "assets/onepiece/blackmaria-gallery-1.webp",
      "assets/onepiece/blackmaria-gallery-2.webp",
      "assets/onepiece/blackmaria-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/blackmaria/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/uploads/anime/character/characters/20211111/25a664b4ac2916b287c3689d8a5bb234.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/uploads/anime/character/characters/20211111/7f21ef01ff548378a0d8a8b280b4153d.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/d/df/Black_Maria_Full_Body.png/revision/latest?cb=20210801033021",
        "https://static.wikia.nocookie.net/onepiece/images/2/27/Black_Maria_Anime_Concept_Art.png/revision/latest?cb=20220927023922"
      ]
    }
  },
  "onepiece:Who’s-Who": {
    "portrait": "assets/onepiece/whoswho-portrait.jpg",
    "gallery": [
      "assets/onepiece/whoswho-gallery-1.webp",
      "assets/onepiece/whoswho-gallery-2.webp",
      "assets/onepiece/whoswho-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/whos_who/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/uploads/anime/character/characters/20211111/92ffad5f4dc618995dbf194b859cad8d.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/uploads/anime/character/characters/20211111/2cd437f8654046ddea281c6fc343f7d4.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/6/6f/Who%27s-Who_Manga_Color_Scheme.png/revision/latest?cb=20210313161523",
        "https://static.wikia.nocookie.net/onepiece/images/0/00/Who%27s-Who_Name_Romanization.png/revision/latest?cb=20201217175618"
      ]
    }
  },
  "onepiece:Sasaki": {
    "portrait": "assets/onepiece/sasaki-portrait.jpg",
    "gallery": [
      "assets/onepiece/sasaki-gallery-1.webp",
      "assets/onepiece/sasaki-gallery-2.webp",
      "assets/onepiece/sasaki-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/sasaki/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/uploads/anime/character/characters/20211111/e2d6fd7e4f2b5da4795aaf94fcfc4a26.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/uploads/anime/character/characters/20211111/880aafc8859d8c55c61bc040adfa2530.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/2/2a/Yamato_vs_Sasaki.png/revision/latest/scale-to-width-down/900?cb=20220123043839",
        "https://static.wikia.nocookie.net/onepiece/images/0/00/Sasaki_as_a_Child.png/revision/latest?cb=20240831152516"
      ]
    }
  },
  "onepiece:Yamato": {
    "portrait": "assets/onepiece/yamato-portrait.jpg",
    "gallery": [
      "assets/onepiece/yamato-gallery-1.webp",
      "assets/onepiece/yamato-gallery-2.webp",
      "assets/onepiece/yamato-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/YAMATO/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/uploads/anime/character/characters/20211014/42c2b08bad0492379f3d84e57b185bde.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/uploads/anime/character/characters/20211014/f44455ffdeae9e3c470957b82e478539.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/7/7f/Yamato%27s_earnestness.png/revision/latest?cb=20211012052859",
        "https://static.wikia.nocookie.net/onepiece/images/8/8d/Yamato%27s_Disguise.png/revision/latest?cb=20210905023124"
      ]
    }
  },
  "onepiece:Kanjuro": {
    "portrait": "assets/onepiece/kanjuro-portrait.jpg",
    "gallery": [
      "assets/onepiece/kanjuro-gallery-1.webp",
      "assets/onepiece/kanjuro-gallery-2.webp",
      "assets/onepiece/kanjuro-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/kurozumi_kanjuro/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/kanjuro/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/kanjuro/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/2/23/Kurozumi_Kanjuro_at_Age_21.png/revision/latest?cb=20240101164723",
        "https://static.wikia.nocookie.net/onepiece/images/7/77/Kurozumi_Kanjuro_Portrait.png/revision/latest?cb=20200217030952"
      ]
    }
  },
  "onepiece:Kozuki Oden": {
    "portrait": "assets/onepiece/oden-portrait.jpg",
    "gallery": [
      "assets/onepiece/oden-gallery-1.webp",
      "assets/onepiece/oden-gallery-2.webp",
      "assets/onepiece/oden-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Kozuki_Oden/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/uploads/anime/character/characters/20210319/9bfbb24d2d6418c424a41fc203dda3fa.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/uploads/anime/character/characters/20210319/0ae44939b156d0214857447548b9cf20.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/3/3f/A_Comprehensive_Anatomy%21_The_Legend_of_Kouzuki_Oden%21.png/revision/latest/scale-to-width-down/900?cb=20220626031507",
        "https://static.wikia.nocookie.net/onepiece/images/b/b1/Kouzuki_Oden_Manga_Infobox.png/revision/latest?cb=20250911043923"
      ]
    }
  },
  "onepiece:Ashura Doji": {
    "portrait": "assets/onepiece/shutenmaru-portrait.jpg",
    "gallery": [
      "assets/onepiece/shutenmaru-gallery-1.webp",
      "assets/onepiece/shutenmaru-gallery-2.webp",
      "assets/onepiece/shutenmaru-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Shutenmaru/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/uploads/anime/character/characters/20200805/3189a4a2c13f8996f23de07ab2ec533e.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/uploads/anime/character/characters/20200805/80c4201978a08725bcc3911815cdf840.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/8/82/Ashura_Doji_Portrait.png/revision/latest?cb=20200319004221",
        "https://static.wikia.nocookie.net/onepiece/images/7/70/Ashura_Doji_Manga_Infobox.png/revision/latest?cb=20181019053814"
      ]
    }
  },
  "onepiece:Kikunojo": {
    "portrait": "assets/onepiece/kikunojo-portrait.jpg",
    "gallery": [
      "assets/onepiece/kikunojo-gallery-1.webp",
      "assets/onepiece/kikunojo-gallery-2.webp",
      "assets/onepiece/kikunojo-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Kikunojo/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/uploads/anime/character/characters/20210319/49660b07cd8b533d12260a608e25a44c.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/uploads/anime/character/characters/20210319/af35bdc5219a0d5f5062c16f1301650e.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/2/21/Kikunojo_at_Age_9.png/revision/latest?cb=20210214041518",
        "https://static.wikia.nocookie.net/onepiece/images/d/dc/Kikunojo%27s_Mengu.png/revision/latest/scale-to-width-down/900?cb=20210124040326"
      ]
    }
  },
  "onepiece:Denjiro": {
    "portrait": "assets/onepiece/denjiro-portrait.jpg",
    "gallery": [
      "assets/onepiece/denjiro-gallery-1.jpg",
      "assets/onepiece/denjiro-gallery-2.webp",
      "assets/onepiece/denjiro-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Denjiro/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/img/character/Denjiro_thum250303.jpg",
      "gallery": [
        "https://one-piece.com/img/character/Denjiro_main250303.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/2/22/Denjiro%27s_Eyes.png/revision/latest?cb=20210502040629",
        "https://static.wikia.nocookie.net/onepiece/images/c/cc/Denjiro_at_Age_14.png/revision/latest?cb=20220607211239"
      ]
    }
  },
  "onepiece:Kawamatsu": {
    "portrait": "assets/onepiece/kawamatsu-portrait.jpg",
    "gallery": [
      "assets/onepiece/kawamatsu-gallery-1.webp",
      "assets/onepiece/kawamatsu-gallery-2.webp",
      "assets/onepiece/kawamatsu-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Kawamatsu/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/uploads/anime/character/characters/20200902/482b8a0576bd3e1843844a2b6e4eca0d.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/uploads/anime/character/characters/20200902/e225c187576128ec854f14776a7a630e.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/a/a5/Kawamatsu%27s_Kappa_Dance.png/revision/latest/scale-to-width-down/900?cb=20220606054949",
        "https://static.wikia.nocookie.net/onepiece/images/3/3b/Kawamatsu_Manga_Infobox.png/revision/latest?cb=20190708173757"
      ]
    }
  },
  "onepiece:Hatchan": {
    "portrait": "assets/onepiece/hatchan-portrait.jpg",
    "gallery": [
      "assets/onepiece/hatchan-gallery-1.webp",
      "assets/onepiece/hatchan-gallery-2.png",
      "assets/onepiece/hatchan-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Hacchan/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Hacchan/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Hacchan/img.jpg",
        "https://one-piece.com/img/character/Hacchan/Hacchan_02.png",
        "https://static.wikia.nocookie.net/onepiece/images/d/d9/Hatchan_And_Arlong_Pirates.png/revision/latest/scale-to-width-down/900?cb=20230922191632"
      ]
    }
  },
  "onepiece:Wapol": {
    "portrait": "assets/onepiece/wapol-portrait.jpg",
    "gallery": [
      "assets/onepiece/wapol-gallery-1.webp",
      "assets/onepiece/wapol-gallery-2.webp",
      "assets/onepiece/wapol-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Wapol/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/uploads/anime/character/characters/20150422/32812a82009543812576031586eaf730.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/uploads/anime/character/characters/20150422/5ccc7fd36acd80af2bc9b5e6c67193b0.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/8/8d/Wapol%27s_Father_Portrait.png/revision/latest?cb=20231013181328",
        "https://static.wikia.nocookie.net/onepiece/images/3/39/Wapol%27s_Black_Drum_Kingdom_Outfit.png/revision/latest/scale-to-width-down/900?cb=20190519092235"
      ]
    }
  },
  "onepiece:Hody Jones": {
    "portrait": "assets/onepiece/hody-portrait.jpg",
    "gallery": [
      "assets/onepiece/hody-gallery-1.webp",
      "assets/onepiece/hody-gallery-2.webp",
      "assets/onepiece/hody-gallery-3.webp"
    ],
    "sourcePage": "https://one-piece.com/character/Hordy_Jones/index.html",
    "imageSources": {
      "portrait": "https://one-piece.com/o/assets/images/anime/character/data/Hordy_Jones/face.jpg",
      "gallery": [
        "https://one-piece.com/o/assets/images/anime/character/data/Hordy_Jones/img.jpg",
        "https://static.wikia.nocookie.net/onepiece/images/9/9d/Hody_Jones_Portrait.png/revision/latest?cb=20200420023513",
        "https://static.wikia.nocookie.net/onepiece/images/f/f3/Hody_Jones_Anime_Infobox.png/revision/latest/scale-to-width-down/900?cb=20230609234039"
      ]
    }
  },
  "dbz:Dorodabo": {
    "portrait": "assets/dbz/dorodabo-portrait.webp",
    "gallery": [
      "assets/dbz/dorodabo-gallery-1.webp",
      "assets/dbz/dorodabo-gallery-2.webp",
      "assets/dbz/dorodabo-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Dorodabo",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/1/19/Wings_Infobox.png/revision/latest?cb=20190805164208",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/5/55/Dorodabo-keshi.PNG/revision/latest?cb=20130428160320",
        "https://static.wikia.nocookie.net/dragonball/images/8/8e/Dorodabo-keshi-close.PNG/revision/latest?cb=20130428224121",
        "https://static.wikia.nocookie.net/dragonball/images/c/c9/Dorodabo-keshi-a.jpg/revision/latest?cb=20130428155831"
      ]
    }
  },
  "dbz:Gokua": {
    "portrait": "assets/dbz/gokua-portrait.webp",
    "gallery": [
      "assets/dbz/gokua-gallery-1.webp",
      "assets/dbz/gokua-gallery-2.webp",
      "assets/dbz/gokua-gallery-3.webp"
    ],
    "sourcePage": "https://dragonball.fandom.com/wiki/Gokua",
    "imageSources": {
      "portrait": "https://static.wikia.nocookie.net/dragonball/images/1/1a/10._Kogu_focus.png/revision/latest?cb=20120831122346",
      "gallery": [
        "https://static.wikia.nocookie.net/dragonball/images/a/ae/KOGU-Part20.JPG/revision/latest?cb=20130502205920",
        "https://static.wikia.nocookie.net/dragonball/images/5/50/KOGU-Part20-close.PNG/revision/latest?cb=20130502213244",
        "https://static.wikia.nocookie.net/dragonball/images/3/34/Kogu-A-keshi-green.jpg/revision/latest?cb=20130502211924"
      ]
    }
  }
};
