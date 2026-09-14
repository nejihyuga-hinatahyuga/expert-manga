const characters = [
  {
    name: 'Naruto Uzumaki', role: '7e Hokage', village: 'Konoha', kanji: '火', avatar: 'N', color: '#e96b42',
    quote: '« Je ne reviens jamais sur ma parole. C’est ça, ma voie de ninja. »',
    story: 'Orphelin portant en lui le démon-renard Kyûbi, Naruto grandit dans la solitude et devient la cible des regards méfiants de son village. Au fil des missions, il gagne la confiance de ses camarades, apprend à maîtriser une puissance qui le dépassait et refuse de laisser la haine décider à sa place. Sa rencontre avec Nagato, puis la guerre contre Madara et Kaguya, le forcent à défendre une idée de paix fondée sur les liens. De paria, il devient le ninja qui rassemble les cinq grandes nations et réalise enfin son rêve de devenir Hokage.',
    tags: ['Jinchûriki', 'Mode Ermite', 'Hokage'],
    battles: [['Naruto vs Pain', 'Invasion de Konoha'], ['Naruto vs Sasuke', 'Vallée de la Fin'], ['Naruto & Sasuke vs Kaguya', 'La quatrième guerre']]
  },
  {
    name: 'Sasuke Uchiha', role: 'Dernier Uchiha', village: 'Konoha / Nukenin', kanji: '炎', avatar: 'S', color: '#6f899a',
    quote: '« Je suis celui qui choisira ce qui doit être fait. »',
    story: 'Dernier survivant du clan Uchiha après le massacre orchestré par son frère, Sasuke grandit avec une seule idée : obtenir assez de puissance pour se venger. L’équipe 7 lui offre pourtant un nouveau foyer, et le lien avec Naruto devient progressivement aussi important que sa colère. Son départ vers Orochimaru, puis sa découverte de la vérité sur Itachi, l’entraînent dans une spirale de vengeance contre Konoha et le monde shinobi. Pendant la guerre, il comprend que l’héritage de son clan ne doit plus être un prétexte au conflit et choisit de protéger la paix depuis l’ombre.',
    tags: ['Sharingan', 'Rinnegan', 'Uchiha'],
    battles: [['Sasuke vs Itachi', 'Le dernier affrontement'], ['Sasuke vs Deidara', 'Traque de l’Akatsuki'], ['Naruto vs Sasuke', 'Combat final']]
  },
  {
    name: 'Sakura Haruno', role: 'Ninja médecin', village: 'Konoha', kanji: '桜', avatar: 'S', color: '#d17f96',
    quote: '« Je ne veux plus être celle qu’on doit protéger. »',
    story: 'Au début de l’aventure, Sakura se sent souvent en retrait face aux talents naturels de Naruto et Sasuke. Son apprentissage auprès de Tsunade change tout : elle développe une force physique impressionnante, une maîtrise médicale exceptionnelle et un courage qui ne dépend d’aucun dôjutsu. Elle devient un pilier de l’équipe 7, soigne des milliers de vies pendant la guerre et affronte seule des adversaires qui semblaient hors de portée. Son évolution fait d’elle l’une des kunoichi les plus puissantes de sa génération.',
    tags: ['Ninja médecin', 'Byakugô', 'Kunoichi'],
    battles: [['Sakura & Chiyo vs Sasori', 'Sauvetage du Kazekage'], ['Sakura vs Ino', 'Examen Chûnin'], ['Team 7 vs Kaguya', 'La quatrième guerre']]
  },
  {
    name: 'Kakashi Hatake', role: '6e Hokage / Sensei', village: 'Konoha', kanji: '雷', avatar: 'K', color: '#8d9b9a',
    quote: '« Dans le monde des ninjas, ceux qui enfreignent les règles sont des vauriens… »',
    story: 'Élève de Minato, Kakashi perd son père, son coéquipier Obito et son amie Rin avant même d’avoir atteint l’âge adulte. Ces blessures expliquent sa rigueur et sa distance, mais aussi la règle qu’il transmettra à l’équipe 7 : l’esprit d’équipe passe avant les consignes. Son Sharingan lui vaut le surnom de Ninja Copieur, tandis que son intelligence transforme chaque combat en duel de stratégie. Après avoir porté Konoha pendant la guerre, il accepte le rôle de Sixième Hokage et guide le village vers une ère plus stable.',
    tags: ['Sharingan', 'Copy Ninja', 'Sensei'],
    battles: [['Kakashi vs Obito', 'Dimension Kamui'], ['Kakashi vs Zabuza', 'Pays des Vagues'], ['Team 7 vs Kakashi', 'Le test des clochettes']]
  },
  {
    name: 'Itachi Uchiha', role: 'Prodige / ANBU', village: 'Konoha', kanji: '月', avatar: 'I', color: '#a5473b',
    quote: '« Les gens vivent en s’appuyant sur leurs convictions. »',
    story: 'Itachi est un prodige marqué très tôt par les horreurs de la guerre. Devenu ANBU à onze ans, il se retrouve au centre des tensions entre son clan et les dirigeants de Konoha. Pour empêcher une guerre civile, il accepte une mission secrète qui lui vole son nom, sa famille et sa place auprès de Sasuke. Il rejoint ensuite l’Akatsuki afin de surveiller l’organisation de l’intérieur, tout en faisant croire à son frère qu’il est devenu un monstre. Sa vérité n’est révélée qu’après sa mort, lorsque Sasuke découvre l’ampleur de son sacrifice.',
    tags: ['Mangekyô', 'ANBU', 'Akatsuki'],
    battles: [['Itachi vs Sasuke', 'Le secret du clan'], ['Itachi vs Kakashi', 'Première attaque de Konoha'], ['Itachi & Sasuke vs Kabuto', 'La réincarnation']]
  },
  {
    name: 'Madara Uchiha', role: 'Légende des Uchiha', village: 'Konoha / Rikudô', kanji: '輪', avatar: 'M', color: '#98574b',
    quote: '« Dans ce monde, où il y a de la lumière, il y a aussi des ombres. »',
    story: 'Madara grandit au milieu des guerres de clans et rêve d’un monde où les enfants ne seraient plus envoyés au combat. Il fonde Konoha avec Hashirama Senju, mais leur vision du pouvoir et de la paix finit par les séparer. Convaincu que la liberté humaine produit inévitablement la souffrance, il prépare pendant des décennies le Plan Œil de la Lune. Ressuscité pendant la quatrième guerre, il domine presque seul l’Alliance Shinobi et atteint une puissance démesurée avant que la vérité sur Kaguya ne soit révélée.',
    tags: ['Rinnegan', 'Susanoo', 'Rikudô'],
    battles: [['Madara vs Hashirama', 'Vallée de la Fin'], ['Madara vs Alliance', 'Quatrième grande guerre'], ['Madara vs Cinq Kage', 'Sommet des Kage']]
  },
  {
    name: 'Obito Uchiha', role: 'Masqué / Akatsuki', village: 'Konoha', kanji: '面', avatar: 'O', color: '#735e67',
    quote: '« Dans le monde des ninjas, ceux qui abandonnent leurs amis sont pires que des vauriens. »',
    story: 'Obito est d’abord un jeune ninja maladroit, chaleureux et déterminé à devenir Hokage. Après un accident qui le sépare de Kakashi, il est recueilli par Madara, qui exploite son désespoir et la perte de Rin pour lui faire croire que le monde réel est irrécupérable. Sous le masque de Tobi, il manipule l’Akatsuki et déclenche la quatrième grande guerre. Naruto et Kakashi parviennent finalement à réveiller le garçon qu’il était, et Obito choisit de réparer ses fautes en protégeant l’équipe 7.',
    tags: ['Kamui', 'Jinchûriki', 'Masque'],
    battles: [['Obito vs Kakashi', 'Dimension Kamui'], ['Obito vs Minato', 'Attaque de Kyûbi'], ['Obito & Madara vs Alliance', 'Quatrième grande guerre']]
  },
  {
    name: 'Minato Namikaze', role: '4e Hokage', village: 'Konoha', kanji: '閃', avatar: 'M', color: '#d1a04f',
    quote: '« La paix ne se construit pas en abandonnant ceux qu’on aime. »',
    story: 'Surnommé l’Éclair jaune de Konoha, Minato est un génie qui invente des techniques et des stratégies capables de changer le cours d’une guerre. Élève de Jiraiya, il devient le maître de Kakashi, Obito et Rin avant d’accéder au titre de Quatrième Hokage. Lors de l’attaque de Kyûbi, il se sacrifie avec Kushina pour sauver le village et son nouveau-né Naruto. Réanimé pendant la guerre, il retrouve son fils devenu adulte et combat une dernière fois à ses côtés.',
    tags: ['Hiraishin', 'Hokage', 'Éclair jaune'],
    battles: [['Minato vs Obito', 'Attaque de Kyûbi'], ['Minato vs Raikage & Killer B', 'Guerre des ninjas'], ['Minato & Naruto vs Obito', 'La quatrième guerre']]
  },
  {
    name: 'Jiraiya', role: 'Ermite légendaire', village: 'Konoha', kanji: '蝦', avatar: 'J', color: '#b57d50',
    quote: '« Un ninja est celui qui endure. »',
    story: 'L’un des trois ninjas légendaires, Jiraiya est un maître excentrique qui cache derrière ses plaisanteries une profonde connaissance du monde shinobi. Il entraîne Minato, observe la naissance de plusieurs générations et recueille Naruto comme un véritable grand-père. Sa quête consiste à trouver l’élève de la prophétie capable d’apporter la paix, mais elle le conduit à affronter son ancien disciple Nagato. Mort à Amegakure, il laisse à Naruto un message codé et la conviction qu’un ninja doit continuer à croire en l’avenir.',
    tags: ['Sannin', 'Mode Ermite', 'Sensei'],
    battles: [['Jiraiya vs Pain', 'Pluie d’Amegakure'], ['Jiraiya vs Orochimaru', 'Affrontement des Sannin'], ['Jiraiya vs les Six Voies', 'Le message final']]
  },
  {
    name: 'Tsunade', role: '5e Hokage / Sannin', village: 'Konoha', kanji: '賭', avatar: 'T', color: '#bb7c85',
    quote: '« Les rêves ne meurent pas aussi facilement. »',
    story: 'Petite-fille du Premier Hokage, Tsunade devient la plus grande ninja médecin de son époque. La mort de son frère Nawaki puis celle de Dan la poussent à fuir le monde des shinobis et à se réfugier dans les jeux et les paris. Jiraiya la convainc de reprendre sa place lorsque Konoha a besoin d’un Hokage. Elle modernise le système médical, protège le village pendant l’attaque de Pain et transmet à Sakura un héritage qui dépasse largement la force physique.',
    tags: ['Sannin', 'Byakugô', 'Hokage'],
    battles: [['Tsunade, Jiraiya & Orochimaru', 'Combat des Sannin'], ['Tsunade vs Madara', 'Sommet des Cinq Kage'], ['Tsunade vs Kabuto', 'Retour à Konoha']]
  },
  {
    name: 'Orochimaru', role: 'Scientifique interdit', village: 'Konoha / Otogakure', kanji: '蛇', avatar: 'O', color: '#9ca37d',
    quote: '« La curiosité est la première étape vers la connaissance. »',
    story: 'Orochimaru est un enfant marqué par la mort et obsédé par le désir de comprendre tous les secrets du monde. Après avoir découvert ses expériences interdites, Konoha le condamne et il fonde son propre réseau de laboratoires et de disciples. Il convoite le corps de Sasuke pour prolonger sa vie et accumuler les techniques, mais son ambition finit par se retourner contre lui. Même après plusieurs défaites et résurrections, il demeure une présence ambiguë : dangereux, mais parfois utile face aux menaces qui dépassent les villages.',
    tags: ['Sannin', 'Serpent blanc', 'Ninjutsu interdit'],
    battles: [['Orochimaru vs Hiruzen', 'Invasion de Konoha'], ['Orochimaru vs Jiraiya & Tsunade', 'Combat des Sannin'], ['Orochimaru vs Sasuke', 'Trahison d’Oto']]
  },
  {
    name: 'Gaara', role: '5e Kazekage', village: 'Suna', kanji: '砂', avatar: 'G', color: '#c69e67',
    quote: '« L’amour est la seule chose qui puisse guérir la solitude. »',
    story: 'Enfant transformé en arme par son propre village, Gaara est élevé dans la peur et devient un adolescent qui ne connaît que la violence. Naruto lui renvoie une image de ce qu’il aurait pu être et lui montre qu’un lien peut donner un sens à une vie. Gaara choisit alors de protéger Suna au lieu de terroriser ses habitants. Devenu Kazekage très jeune, il gagne peu à peu le respect des autres villages et devient l’un des leaders de l’Alliance pendant la quatrième guerre.',
    tags: ['Jinchûriki', 'Kazekage', 'Sable'],
    battles: [['Gaara vs Rock Lee', 'Examen Chûnin'], ['Gaara vs Deidara', 'Défense de Suna'], ['Gaara vs Naruto', 'Invasion de Konoha']]
  },
  {
    name: 'Rock Lee', role: 'Maître du taijutsu', village: 'Konoha', kanji: '体', avatar: 'L', color: '#77936f',
    quote: '« Le travail acharné bat le talent naturel. »',
    story: 'Né sans pouvoir utiliser le ninjutsu ou le genjutsu, Rock Lee refuse de considérer cette limite comme une condamnation. Sous la direction de Might Guy, il transforme le taijutsu en art et travaille jusqu’à dépasser des adversaires naturellement doués. Son combat contre Gaara pendant l’examen Chûnin révèle une volonté qui impressionne même ses ennemis. Après une blessure qui menace sa carrière, il revient sur le terrain et devient la preuve vivante que la persévérance peut créer son propre talent.',
    tags: ['Taijutsu', 'Portes célestes', 'Team Gai'],
    battles: [['Rock Lee vs Gaara', 'Examen Chûnin'], ['Rock Lee vs Kimimaro', 'Mission de récupération'], ['Rock Lee vs Dosu', 'Préliminaires']]
  },
  {
    name: 'Neji Hyuga', role: 'Prodige du clan Hyuga', village: 'Konoha', kanji: '白', avatar: 'N', color: '#9aabb0',
    quote: '« Le destin n’est pas une chaîne : on peut choisir de le changer. »',
    story: 'Né dans la branche secondaire du clan Hyuga, Neji est convaincu que la naissance décide de la valeur et de l’avenir de chacun. Son duel avec Naruto fissure cette croyance et lui apprend à distinguer le destin des choix personnels. Il devient un protecteur plus ouvert, se rapproche d’Hinata et développe un talent exceptionnel pour le Byakugan et le Jûken. Pendant la guerre, son sacrifice pour sauver Naruto et Hinata scelle son évolution : il meurt en ayant enfin choisi sa propre voie.',
    tags: ['Byakugan', 'Jûken', 'Hyuga'],
    battles: [['Neji vs Naruto', 'Examen Chûnin'], ['Neji vs Kidômaru', 'Mission Sasuke'], ['Neji & Hinata vs Juubi', 'La quatrième guerre']]
  },
  {
    name: 'Hinata Hyuga', role: 'Héritière des Hyuga', village: 'Konoha', kanji: '優', avatar: 'H', color: '#8999a9',
    quote: '« Je ne reviendrai pas sur ma parole, moi aussi. »',
    story: 'Hinata grandit dans un clan qui doute de sa douceur et de son manque d’assurance. Inspirée par la détermination de Naruto, elle apprend à se tenir debout même lorsqu’elle a peur et transforme peu à peu sa timidité en courage. Elle affronte Pain pour protéger Naruto alors que la défaite semble certaine, puis participe activement à la guerre et à la sauvegarde du monde shinobi. Son Byakugan, sa maîtrise du Jûken et sa volonté silencieuse font d’elle une kunoichi bien plus forte que son premier portrait ne le laissait croire.',
    tags: ['Byakugan', 'Jûken', 'Hyuga'],
    battles: [['Hinata vs Neji', 'Examen Chûnin'], ['Hinata vs Pain', 'Invasion de Konoha'], ['Hinata & Naruto vs Toneri', 'La lune']]
  },
  {
    name: 'Shikamaru Nara', role: 'Stratège de Konoha', village: 'Konoha', kanji: '影', avatar: 'Q', color: '#9f947b',
    quote: '« Quel ennui… mais je vais m’en occuper. »',
    story: 'Sous ses airs paresseux se cache un esprit capable de prévoir des dizaines de coups à l’avance. Shikamaru passe de l’indifférence à la responsabilité lorsqu’il devient le premier de sa génération à obtenir le grade de chûnin. La mort d’Asuma transforme sa vision du devoir : il élabore un piège personnel contre Hidan et accepte enfin de porter le poids des décisions. Avec le temps, il devient le conseiller indispensable des Hokage et l’un des artisans de la paix entre les villages.',
    tags: ['Stratège', 'Ombre', 'Team 10'],
    battles: [['Shikamaru vs Hidan', 'Vengeance de l’équipe 10'], ['Shikamaru vs Temari', 'Examen Chûnin'], ['Shikamaru vs Tayuya', 'Mission Sasuke']]
  },
  {
    name: 'Pain', role: 'Leader de l’Akatsuki', village: 'Amegakure', kanji: '雨', avatar: 'P', color: '#71889a',
    quote: '« La douleur permet de grandir et de comprendre la paix. »',
    story: 'Nagato est un enfant de la guerre qui perd ses parents avant de rencontrer Yahiko et Konan. Tous trois fondent une première Akatsuki dédiée à la paix, mais la manipulation de Hanzo provoque la mort de Yahiko et pousse Nagato à croire que seule une souffrance partagée peut arrêter les conflits. À travers les Six Voies de Pain, il attaque Konoha et détruit le village qu’il tient responsable de ses malheurs. Naruto lui répond sans vengeance, lui fait retrouver sa foi et obtient de lui un ultime acte de rédemption.',
    tags: ['Rinnegan', 'Akatsuki', 'Six Voies'],
    battles: [['Pain vs Naruto', 'Destruction de Konoha'], ['Pain vs Jiraiya', 'Amegakure'], ['Pain vs Kakashi', 'Défense de Konoha']]
  },
  {
    name: 'Konan', role: 'Ange d’Amegakure', village: 'Amegakure', kanji: '紙', avatar: 'C', color: '#8a9eaa',
    quote: '« Même une fleur peut trouver la force de fleurir dans la pluie. »',
    story: 'Orpheline de la guerre, Konan apprend à survivre aux côtés de Nagato et Yahiko et devient le cœur de leur rêve de paix. Son pouvoir de transformer son corps en papier est à la fois délicat et terriblement stratégique. Elle rejoint l’Akatsuki après la chute de leur organisation, mais ne cesse jamais de protéger Amegakure. Lorsque Tobi vient chercher le Rinnegan, Konan prépare l’un des pièges les plus ingénieux de la série et se bat jusqu’au bout pour défendre la mémoire de ses amis.',
    tags: ['Origami', 'Akatsuki', 'Amegakure'],
    battles: [['Konan vs Obito', 'Bataille des six cents milliards'], ['Konan vs Hanzo', 'Chute de l’Akatsuki'], ['Konan & Pain vs Konoha', 'Opération de l’Akatsuki']]
  },
  {
    name: 'Killer B', role: 'Jinchûriki parfait', village: 'Kumo', kanji: '八', avatar: 'B', color: '#8e8b58',
    quote: '« La liberté, c’est de choisir son propre rythme. »',
    story: 'Killer B est le frère adoptif du Raikage et l’hôte du Hachibi, Gyûki. Là où les autres jinchûriki sont traités comme des armes, il construit une vraie relation de confiance avec sa bête à queues et développe un style de combat imprévisible. Derrière ses rimes et son énergie se cache un mentor qui aide Naruto à apprivoiser Kyûbi. Il participe ensuite à la grande guerre et prouve que la coopération entre un humain et son démon peut devenir une force inégalée.',
    tags: ['Hachibi', 'Épéiste', 'Rap'],
    battles: [['Killer B vs Sasuke', 'Capture du Hachibi'], ['Killer B vs Kisame', 'Trahison de Samehada'], ['Killer B & Naruto vs Obito', 'La quatrième guerre']]
  },
  {
    name: 'Deidara', role: 'Artiste de l’Akatsuki', village: 'Iwagakure', kanji: '爆', avatar: 'D', color: '#c5a14f',
    quote: '« L’art est une explosion ! »',
    story: 'Deidara est un ancien ninja d’Iwa qui façonne de l’argile explosive avec des bouches placées sur ses mains. Il considère que l’art doit être bref et spectaculaire, ce qui l’oppose directement à la vision éternelle de Sasori. Recruté dans l’Akatsuki, il capture Gaara puis traque Naruto et Sasuke avec une obsession grandissante. Son duel contre Sasuke révèle autant sa créativité tactique que son orgueil, et son ultime explosion devient une œuvre qu’il juge parfaite.',
    tags: ['Argile explosive', 'Akatsuki', 'Iwa'],
    battles: [['Deidara vs Gaara', 'Capture du Kazekage'], ['Deidara vs Sasuke', 'Traque de l’Uchiha'], ['Deidara vs Naruto & Kakashi', 'Poursuite de l’Akatsuki']]
  },
  {
    name: 'Sasori', role: 'Maître marionnettiste', village: 'Sunagakure', kanji: '傀', avatar: 'S', color: '#a6594b',
    quote: '« La beauté véritable est ce qui demeure. »',
    story: 'Sasori perd ses parents très jeune et tente de remplacer leur présence par des marionnettes. Son talent le conduit à transformer des êtres humains en armes, puis à rejoindre l’Akatsuki avec Deidara. Il conserve le corps du Troisième Kazekage, sa création la plus puissante, comme un trophée. Son affrontement contre Sakura et Chiyo oppose deux générations de marionnettistes et montre que son obsession de l’immortalité n’a pas effacé le souvenir de l’enfant qu’il était.',
    tags: ['Marionnettes', 'Akatsuki', 'Poison'],
    battles: [['Sasori vs Sakura & Chiyo', 'Sauvetage du Kazekage'], ['Sasori vs Troisième Kazekage', 'Le marionnettiste ultime'], ['Sasori vs Orochimaru', 'Duel de l’Akatsuki']]
  },
  {
    name: 'Kisame Hoshigaki', role: 'Monstre de la Brume', village: 'Kirigakure', kanji: '鮫', avatar: 'K', color: '#668d91',
    quote: '« Un shinobi ne choisit pas toujours la vérité qu’il sert. »',
    story: 'Kisame vient d’un village où les secrets et la trahison sont la règle. Ancien membre des Sept Épéistes de la Brume, il manie Samehada et devient le partenaire d’Itachi au sein de l’Akatsuki. Sa force immense et sa réserve de chakra le rendent capable de combattre des armées entières, mais son arc révèle surtout un homme qui cherche une cause à laquelle croire. Jusqu’à son dernier souffle, il refuse de livrer les secrets de l’organisation.',
    tags: ['Samehada', 'Akatsuki', 'Hoshigaki'],
    battles: [['Kisame vs Killer B', 'Capture du Hachibi'], ['Kisame vs Might Guy', 'Île Tortue'], ['Kisame & Itachi vs Team 7', 'Mission de capture']]
  },
  {
    name: 'Might Guy', role: 'Maître du taijutsu', village: 'Konoha', kanji: '青春', avatar: 'G', color: '#65876d',
    quote: '« Le printemps de la jeunesse brûle encore ! »',
    story: 'Might Guy refuse de croire que l’absence de talent naturel condamne un ninja. Son père, Duy, lui transmet la discipline et la volonté qui deviendront sa signature. Guy fait de Rock Lee son élève et entretient avec Kakashi une rivalité fondée sur le respect. Pendant la guerre, il ouvre les Huit Portes et affronte Madara dans un combat qui dépasse les limites humaines, au prix d’un corps presque détruit. Même Madara reconnaît alors en lui le plus grand maître du taijutsu.',
    tags: ['Taijutsu', 'Huit Portes', 'Team Gai'],
    battles: [['Might Guy vs Madara', 'Huitième Porte'], ['Might Guy vs Kisame', 'Île Tortue'], ['Guy vs Kakashi', 'Rivalité éternelle']]
  },
  {
    name: 'Hashirama Senju', role: '1er Hokage', village: 'Konoha', kanji: '森', avatar: 'H', color: '#708e6f',
    quote: '« La volonté du feu brûle dans tous ceux qui protègent le village. »',
    story: 'Hashirama grandit pendant les guerres de clans et rêve de créer un endroit où les enfants n’auraient plus à mourir pour des adultes. Son amitié avec Madara permet la fondation de Konoha, même si leurs conceptions du contrôle et de la paix finissent par diverger. Grâce au Mokuton, il devient le seul shinobi capable de rivaliser avec le pouvoir de Kyûbi. Son héritage inspire tous les Hokage et reste au centre des expériences d’Orochimaru et de la guerre des ninjas.',
    tags: ['Mokuton', 'Hokage', 'Senju'],
    battles: [['Hashirama vs Madara', 'Vallée de la Fin'], ['Hashirama vs Kyuubi', 'Fondation de Konoha'], ['Hashirama vs Kakuzu', 'Guerre des clans']]
  },
  {
    name: 'Tobirama Senju', role: '2e Hokage', village: 'Konoha', kanji: '水', avatar: 'T', color: '#71909d',
    quote: '« Les règles existent pour protéger les liens entre les hommes. »',
    story: 'Tobirama grandit en voyant ses frères mourir dans la guerre contre les Uchiha. Plus pragmatique qu’Hashirama, il construit les institutions de Konoha : l’Académie, les examens Chûnin et la Police militaire. Il invente aussi des techniques redoutables comme l’Edo Tensei et le Hiraishin, dont il mesure progressivement le danger. Devenu Deuxième Hokage, il se sacrifie pour permettre à son équipe de survivre et laisse une vision très structurée de la paix, parfois critiquée mais essentielle à l’organisation du village.',
    tags: ['Suiton', 'Edo Tensei', 'Hokage'],
    battles: [['Tobirama vs Izuna', 'Guerre Senju-Uchiha'], ['Tobirama vs Kinkaku & Ginkaku', 'Embuscade de Kumo'], ['Tobirama vs Obito', 'La quatrième guerre']]
  },
  {
    name: 'Hiruzen Sarutobi', role: '3e Hokage', village: 'Konoha', kanji: '猿', avatar: 'H', color: '#8f806e',
    quote: '« Ceux qui vivent dans le village sont ma famille. »',
    story: 'Élève du Premier et du Deuxième Hokage, Hiruzen devient un maître capable de maîtriser les cinq transformations de chakra. Il dirige Konoha pendant les périodes les plus instables de son histoire et entraîne les futurs Sannin. Son retour comme Troisième Hokage est marqué par des décisions difficiles, notamment face à Orochimaru et au clan Uchiha. Malgré ses erreurs et ses regrets, il continue à considérer chaque habitant du village comme un membre de sa famille et meurt en protégeant Konoha.',
    tags: ['Professeur', 'Hokage', 'Sarutobi'],
    battles: [['Hiruzen vs Orochimaru', 'Invasion de Konoha'], ['Hiruzen vs Hashirama & Tobirama', 'Edo Tensei'], ['Hiruzen vs Kyuubi', 'Défense du village']]
  },
  {
    name: 'Zabuza Momochi', role: 'Démon de la Brume', village: 'Kirigakure', kanji: '霧', avatar: 'Z', color: '#66828b',
    quote: '« Un outil ne pleure pas… mais un ninja, peut-être. »',
    story: 'Zabuza devient célèbre après avoir survécu à la brutale sélection des épéistes de la Brume. Derrière le surnom de Démon se cache un homme qui a grandi dans un système où les émotions sont considérées comme une faiblesse. Il prend Haku sous son aile, d’abord comme une arme, puis comme la seule personne à laquelle il tient véritablement. Sa mission contre Tazuna et l’équipe 7 est le premier grand conflit de Naruto et révèle que même un assassin peut retrouver son humanité au dernier moment.',
    tags: ['Épée Kubikiribôchô', 'Brume', 'Mercenaire'],
    battles: [['Zabuza vs Kakashi', 'Pays des Vagues'], ['Zabuza & Haku vs Team 7', 'Pont Naruto'], ['Zabuza réanimé vs Kakashi', 'Quatrième grande guerre']]
  },
  {
    name: 'Haku', role: 'Maître des miroirs de glace', village: 'Kirigakure', kanji: '氷', avatar: 'H', color: '#91abb9',
    quote: '« Quelqu’un devient vraiment fort quand il protège une personne précieuse. »',
    story: 'Haku naît avec un kekkei genkai rare dans un pays qui persécute ceux qui possèdent des pouvoirs héréditaires. Recueilli par Zabuza, il trouve enfin un but et accepte de devenir son arme, convaincu que sa propre vie n’a de valeur que si elle sert celle de son maître. Son calme et sa vitesse surprennent Naruto et Sasuke, mais son duel contre eux reste dominé par le désir de protéger. Sa mort ouvre les yeux de Naruto sur la cruauté du monde ninja et sur la valeur d’un lien choisi.',
    tags: ['Hyôton', 'Miroirs de glace', 'Brume'],
    battles: [['Haku vs Naruto & Sasuke', 'Pays des Vagues'], ['Haku vs Kakashi', 'Pont Naruto'], ['Haku réanimé vs Team 7', 'Quatrième grande guerre']]
  },
  {
    name: 'Kaguya Otsutsuki', role: 'Mère du chakra', village: 'Ancienne déesse', kanji: '月', avatar: 'K', color: '#c7b8c6',
    quote: '« Le chakra est un lien… et aussi une tentation. »',
    story: 'Kaguya arrive sur Terre bien avant la naissance des villages cachés et devient la première personne à posséder le chakra. Elle met fin aux guerres de son époque, mais la peur de perdre son pouvoir la pousse à absorber le fruit de l’Arbre Divin et à considérer l’humanité comme une menace. Ses propres fils, Hagoromo et Hamura, doivent la sceller, créant un conflit dont les conséquences traversent les siècles. Libérée pendant la quatrième guerre, elle force Naruto, Sasuke et leurs alliés à unir leurs capacités pour sauver le monde.',
    tags: ['Otsutsuki', 'Rinne Sharingan', 'Déesse'],
    battles: [['Kaguya vs Team 7', 'Dimension de lave'], ['Kaguya vs Naruto & Sasuke', 'Six Voies'], ['Kaguya vs Hagoromo & Hamura', 'Le premier chakra']]
  },
  {
    name: 'Konohamaru Sarutobi', role: 'Jōnin / Sensei', village: 'Konoha', kanji: '猿', avatar: 'K', color: '#a8784e',
    quote: '« Je deviendrai Hokage… après Naruto ! »',
    story: 'Petit-fils du Troisième Hokage, Konohamaru refuse d’être respecté uniquement grâce à son nom. Sa rencontre avec Naruto lui apprend que le titre de Hokage se mérite par la force, la volonté et les liens que l’on protège. Il devient le chef du Corps Konohamaru avec Moegi et Udon, puis sauve Ebisu lors de l’invasion de Pain en utilisant le Rasengan appris auprès de Naruto. Adulte dans Boruto, il devient jōnin et le sensei de Boruto, Sarada et Mitsuki. Son parcours montre comment l’élève de Naruto tente à son tour de devenir un modèle pour la génération suivante.',
    tags: ['Sarutobi', 'Rasengan', 'Sensei'],
    battles: [['Konohamaru vs Pain', 'Invasion de Konoha'], ['Konohamaru vs Temari', 'Pont de Konoha — anime'], ['Konohamaru vs Jûgo', 'Arc Jûgo — Boruto']]
  }
];

const portraitUrls = Object.freeze({
  'Naruto Uzumaki': 'https://s4.anilist.co/file/anilistcdn/character/large/b17-phjcWCkRuIhu.png',
  'Sasuke Uchiha': 'https://s4.anilist.co/file/anilistcdn/character/large/b13-SISLEw1oAD7a.png',
  'Sakura Haruno': 'https://s4.anilist.co/file/anilistcdn/character/large/b145-IorfpI8arxeX.png',
  'Kakashi Hatake': 'https://s4.anilist.co/file/anilistcdn/character/large/b85-mkVBh2yjxjmx.png',
  'Itachi Uchiha': 'https://s4.anilist.co/file/anilistcdn/character/large/b14-9Kb1E5oel1ke.png',
  'Madara Uchiha': 'https://s4.anilist.co/file/anilistcdn/character/large/b53901-HnRKSoHMG5Vg.png',
  'Obito Uchiha': 'https://p3.itc.cn/q_70/images03/20201113/c68197ace71f4697b987132ceaa5b50a.jpeg',
  'Minato Namikaze': 'https://s4.anilist.co/file/anilistcdn/character/large/b2535-Xq9WKNPJQEt3.png',
  'Jiraiya': 'https://s4.anilist.co/file/anilistcdn/character/large/b2423-RO5MyoXSA9OL.png',
  'Tsunade': 'https://s4.anilist.co/file/anilistcdn/character/large/b2767-r61Cj9v8I0wl.png',
  'Orochimaru': 'https://s4.anilist.co/file/anilistcdn/character/large/n2455-V9tLMS3TIgJW.png',
  'Gaara': 'https://s4.anilist.co/file/anilistcdn/character/large/b1662-4E5J0LX9jZKZ.png',
  'Rock Lee': 'https://s4.anilist.co/file/anilistcdn/character/large/b306-oUTOO45xInXt.png',
  'Neji Hyuga': 'https://s4.anilist.co/file/anilistcdn/character/large/b1694-TL4obouDwJ7k.jpg',
  'Hinata Hyuga': 'https://s4.anilist.co/file/anilistcdn/character/large/b1555-Q41GLTV3FvYF.png',
  'Shikamaru Nara': 'https://s4.anilist.co/file/anilistcdn/character/large/b2007-QaesJlIZDifj.jpg',
  'Pain': 'https://s4.anilist.co/file/anilistcdn/character/large/b3180-ITMGBLWNBOgV.png',
  'Konan': 'https://s4.anilist.co/file/anilistcdn/character/large/3179-YVD5zJSYrnPg.jpg',
  'Killer B': 'https://s4.anilist.co/file/anilistcdn/character/large/b18473-AiI3mk28a1Nm.png',
  'Deidara': 'https://s4.anilist.co/file/anilistcdn/character/large/b1902-JsEFRFwjmtZJ.png',
  'Sasori': 'https://s4.anilist.co/file/anilistcdn/character/large/b1900-Dpd9wVWtlvIx.png',
  'Kisame Hoshigaki': 'https://s4.anilist.co/file/anilistcdn/character/large/2672-oxbHx8n3N7WY.jpg',
  'Might Guy': 'https://s4.anilist.co/file/anilistcdn/character/large/b307-xieUEdhdTVwQ.png',
  'Hashirama Senju': 'https://s4.anilist.co/file/anilistcdn/character/large/n12464-fcgqkCPZoREw.png',
  'Tobirama Senju': 'https://s4.anilist.co/file/anilistcdn/character/large/n12465-y8ByDAvzC5cA.png',
  'Hiruzen Sarutobi': 'https://s4.anilist.co/file/anilistcdn/character/large/n7571-fKldLuBWUtCO.png',
  'Zabuza Momochi': 'https://s4.anilist.co/file/anilistcdn/character/large/b728-zHw77BzLzQKT.jpg',
  'Haku': 'https://s4.anilist.co/file/anilistcdn/character/large/b385-pKGCy3oYWxRa.png',
  'Kaguya Otsutsuki': 'https://s4.anilist.co/file/anilistcdn/character/large/b126069-CYxn8C4AHwiD.png'
});

const galleryOverrides = Object.freeze({
  'Sasuke Uchiha': [
    'https://cmsapi-frontend.naruto-official.com/site/api/naruto/Image/get?path=%2Fnaruto%2Fimport%2Fimages%2Fnaruto02%2F501%EF%BD%9E600%2F590%2FC244.jpg'
  ]
});

const imageCache = new Map();
const imageRequests = new Map();
const grid = document.querySelector('#character-grid');
const input = document.querySelector('#character-search');
const suggestions = document.querySelector('#suggestions');
const form = document.querySelector('#search-form');
const villageFilter = document.querySelector('#filter-village');
const clanFilter = document.querySelector('#filter-clan');
const roleFilter = document.querySelector('#filter-role');
const filterReset = document.querySelector('#filter-reset');
let activeCharacterIndex = 0;

const clansByCharacter = Object.freeze({
  'Naruto Uzumaki': 'Uzumaki', 'Sasuke Uchiha': 'Uchiha', 'Itachi Uchiha': 'Uchiha', 'Madara Uchiha': 'Uchiha', 'Obito Uchiha': 'Uchiha',
  'Neji Hyuga': 'Hyûga', 'Hinata Hyuga': 'Hyûga', 'Shikamaru Nara': 'Nara', 'Hashirama Senju': 'Senju', 'Tobirama Senju': 'Senju',
  'Tsunade': 'Senju', 'Hiruzen Sarutobi': 'Sarutobi', 'Konohamaru Sarutobi': 'Sarutobi', 'Kisame Hoshigaki': 'Hoshigaki', 'Kaguya Otsutsuki': 'Ôtsutsuki'
});

function villageGroup(character) {
  if (character.village.includes('Konoha')) return 'Konoha';
  if (character.village.includes('Suna')) return 'Suna';
  if (character.village.includes('Kiri')) return 'Kiri';
  if (character.village.includes('Kumo')) return 'Kumo';
  if (character.village.includes('Iwa')) return 'Iwa';
  if (character.village.includes('Amegakure')) return 'Amegakure';
  return 'Autres';
}

function roleGroup(character) {
  if (character.tags.includes('Hokage')) return 'Hokage';
  if (character.tags.includes('Akatsuki')) return 'Akatsuki';
  if (character.tags.includes('Jinchûriki')) return 'Jinchûriki';
  if (/Sensei|Maître/.test(character.role)) return 'Maître / Sensei';
  return 'Autres';
}

function addFilterOptions(select, options) {
  select.insertAdjacentHTML('beforeend', options.map(option => `<option value="${escapeHTML(option)}">${escapeHTML(option)}</option>`).join(''));
}

function initializeFilters() {
  addFilterOptions(villageFilter, ['Konoha', 'Suna', 'Kiri', 'Kumo', 'Iwa', 'Amegakure', 'Autres']);
  addFilterOptions(clanFilter, ['Uchiha', 'Uzumaki', 'Hyûga', 'Senju', 'Nara', 'Sarutobi', 'Hoshigaki', 'Ôtsutsuki', 'Sans clan connu']);
  addFilterOptions(roleFilter, ['Hokage', 'Akatsuki', 'Jinchûriki', 'Maître / Sensei', 'Autres']);
  [villageFilter, clanFilter, roleFilter].forEach(filter => filter.addEventListener('change', renderCards));
  filterReset.addEventListener('click', () => {
    villageFilter.value = 'all';
    clanFilter.value = 'all';
    roleFilter.value = 'all';
    renderCards();
  });
}

const characterDetails = Object.freeze({
  'Naruto Uzumaki': {
    family: "Fils de Minato Namikaze, Quatrième Hokage, et de Kushina Uzumaki. Orphelin dès sa naissance, il n'a ni frère, sœur ni cousin canonique connu ; Iruka, Jiraiya et l'équipe 7 deviennent sa famille de cœur.",
    goal: "Être reconnu par Konoha, devenir Hokage et protéger tous ceux qui comptent sur lui. Après la guerre, il veut faire durer la paix entre les villages.",
    clan: "Les Uzumaki viennent d'Uzushiogakure et sont connus pour leur immense vitalité, leur longévité et le fûinjutsu. Leur tradition est liée aux sceaux puissants ; le symbole spiralé reste présent à Konoha en hommage."
  },
  'Sasuke Uchiha': {
    family: "Fils de Fugaku et Mikoto Uchiha, petit frère d'Itachi. Ses parents et son clan meurent lors du massacre ; aucun cousin proche n'est confirmé dans le récit.",
    goal: "D'abord venger son clan, puis comprendre la vérité sur Itachi. Il finit par protéger Konoha de l'ombre et empêcher que le même drame se reproduise.",
    clan: "Les Uchiha descendent d'Indra Ôtsutsuki. Ils sont célèbres pour le Katon et le Sharingan, un dôjutsu qui s'éveille sous de fortes émotions. La police militaire de Konoha était une ancienne fonction du clan."
  },
  'Sakura Haruno': {
    family: "Fille de Kizashi et Mebuki Haruno. Elle n'a ni frère, sœur ni cousin important indiqué dans le canon ; l'équipe 7 et Tsunade deviennent ses liens les plus forts.",
    goal: "Ne plus être la coéquipière à protéger : devenir une ninja médecin capable de sauver ses amis et d'égaler Naruto et Sasuke par son propre travail.",
    clan: "Les Haruno ne sont pas un grand clan héréditaire du récit. Sakura porte plutôt la tradition médicale de Tsunade : analyse, soin de terrain, discipline et force contrôlée."
  },
  'Kakashi Hatake': {
    family: "Fils du Croc Blanc, Sakumo Hatake. Sa mère et d'éventuels frères ou sœurs ne sont pas détaillés ; Obito, Rin, Minato puis l'équipe 7 sont ses familles successives.",
    goal: "Honorer la leçon d'Obito : ne jamais abandonner ses camarades. Comme Hokage, il veut reconstruire Konoha et transmettre une génération plus solidaire.",
    clan: "Le clan Hatake est peu documenté. Son identité repose moins sur un kekkei genkai que sur la réputation de Sakumo, l'éthique du devoir et la maîtrise exceptionnelle des techniques."
  },
  'Itachi Uchiha': {
    family: "Fils de Fugaku et Mikoto Uchiha, grand frère de Sasuke. Il sacrifie ses parents et sa réputation pour empêcher une guerre civile, tout en cherchant à préserver son petit frère.",
    goal: "Éviter une guerre entre les Uchiha et Konoha, puis protéger Sasuke et surveiller l'Akatsuki sans pouvoir révéler son rôle.",
    clan: "Les Uchiha descendent d'Indra Ôtsutsuki. Le Sharingan, le Katon et la fonction de police du village font partie de leur héritage, mais leur mise à l'écart a nourri la rupture avec Konoha."
  },
  'Madara Uchiha': {
    family: "Fils de Tajima Uchiha, frère d'Izuna et de plusieurs frères morts durant les guerres de clans. Ses autres proches ne sont pas détaillés.",
    goal: "Il rêve d'abord de paix avec Hashirama, puis veut imposer une paix illusoire par le Plan Œil de la Lune.",
    clan: "Les Uchiha transmettent le Sharingan et une grande affinité avec le Katon. Leur histoire de rivalité avec les Senju marque profondément la vision de Madara."
  },
  'Obito Uchiha': {
    family: "Ses parents et frères ou sœurs ne sont pas nommés dans le canon. Il grandit auprès de sa grand-mère et considère Minato, Rin et Kakashi comme ses liens les plus importants.",
    goal: "Devenir Hokage, puis, après la perte de Rin, fuir la réalité avec le Plan Œil de la Lune. Il revient finalement à son but initial : sauver ses amis.",
    clan: "Les Uchiha descendent d'Indra Ôtsutsuki et sont connus pour le Sharingan et le Katon. Chez Obito, ce pouvoir est lié à ses blessures, à Kamui et à ses émotions extrêmes."
  },
  'Minato Namikaze': {
    family: "Ses parents et frères ou sœurs ne sont pas précisés. Époux de Kushina Uzumaki et père de Naruto, il est aussi le maître de Kakashi, Obito et Rin.",
    goal: "Défendre Konoha et croire à la génération suivante. Il choisit le sacrifice pour que Naruto puisse un jour maîtriser Kyûbi.",
    clan: "Le clan Namikaze est très peu documenté. Minato est surtout lié à l'héritage de Jiraiya, au Hiraishin et à l'idéal de la Volonté du Feu."
  },
  'Jiraiya': {
    family: "Sa famille biologique n'est pas détaillée. Il forme Minato, les orphelins d'Ame et Naruto ; Tsunade et Orochimaru sont ses compagnons de jeunesse.",
    goal: "Trouver l'enfant de la prophétie et rompre le cycle de la haine. Il transmet finalement son espoir à Naruto.",
    clan: "Il n'a pas de clan connu. Ses traditions viennent du mont Myôboku : invocation des crapauds, Mode Ermite et transmission très forte entre maître et élève."
  },
  'Tsunade': {
    family: "Petite-fille de Hashirama Senju et de Mito Uzumaki, sœur aînée de Nawaki. Elle a aimé Dan Katô, dont la mort la marque profondément.",
    goal: "Protéger Konoha en tant que Cinquième Hokage et faire du soin médical une priorité sur chaque mission.",
    clan: "Les Senju privilégiaient l'alliance et la polyvalence. Tsunade perpétue les traditions de Hashirama et de Mito, auxquelles elle ajoute la médecine de combat."
  },
  'Orochimaru': {
    family: "Ses parents meurent lorsqu'il est jeune ; ses autres liens de sang ne sont pas connus. Hiruzen est son maître, et les Sannin restent sa famille déchirée.",
    goal: "Connaître toutes les techniques et vaincre la mort. Après la guerre, il canalise davantage son savoir vers la recherche que vers la conquête.",
    clan: "Aucun clan héréditaire connu. Son héritage est celui des Sannin et des jutsu interdits, notamment les techniques de serpents et de transfert de corps."
  },
  'Gaara': {
    family: "Fils du Quatrième Kazekage Rasa et de Karura, frère cadet de Temari et Kankurô. Son oncle Yashamaru compte beaucoup dans son enfance.",
    goal: "Passer d'arme vivante à protecteur de Suna. Comme Kazekage, il veut que son village fasse confiance aux liens plutôt qu'à la peur.",
    clan: "La famille de Gaara dirige Suna, mais son sable vient surtout de Shukaku et de la protection laissée par Karura. Suna valorise les marionnettistes, le vent et la défense du désert."
  },
  'Rock Lee': {
    family: "Ses parents, frères, sœurs et cousins ne sont pas nommés. Might Guy devient sa figure de père et l'équipe Gai sa famille de terrain.",
    goal: "Prouver qu'un ninja sans ninjutsu ni genjutsu peut devenir exceptionnel grâce au taijutsu et au travail acharné.",
    clan: "Aucun clan connu. Sa tradition est celle de Gai : entraînement physique, dépassement de soi et ouverture des Huit Portes."
  },
  'Neji Hyuga': {
    family: "Fils de Hizashi Hyûga, frère jumeau de Hiashi, et cousin d'Hinata et Hanabi. Il porte le poids de la mort de son père et de la branche secondaire.",
    goal: "Se libérer de l'idée que la naissance impose le destin et protéger sa famille par choix.",
    clan: "Les Hyûga possèdent le Byakugan et pratiquent le Jûken, qui frappe le réseau de chakra. Leur tradition séparait autrefois branche principale et secondaire avec un sceau de protection très dur."
  },
  'Hinata Hyuga': {
    family: "Fille aînée de Hiashi Hyûga, sœur de Hanabi et cousine de Neji. Sa mère n'est pas nommée dans le canon.",
    goal: "Trouver sa propre force, protéger Naruto et être digne de son clan sans perdre sa douceur.",
    clan: "Les Hyûga transmettent le Byakugan et le Jûken. Hinata appartient à la branche principale, mais son histoire questionne la rigidité des anciennes règles du clan."
  },
  'Shikamaru Nara': {
    family: "Fils de Shikaku et Yoshino Nara. Il est marié à Temari et père de Shikadai dans Boruto ; Ino et Chôji sont sa famille de cœur.",
    goal: "Éviter les conflits inutiles, puis protéger la génération suivante avec son intelligence. Il devient le conseiller indispensable des Hokage.",
    clan: "Les Nara contrôlent les ombres et vivent près de la forêt aux cerfs médicinaux. Le clan transmet une tradition de stratégie et de service auprès des dirigeants de Konoha."
  },
  'Pain': {
    family: "Ses parents meurent pendant la guerre ; Yahiko et Konan deviennent sa famille. Après la mort de Yahiko, il porte son rêve de paix d'une manière déformée.",
    goal: "Créer une paix durable, d'abord par la peur et une arme absolue, puis par la confiance retrouvée grâce à Naruto.",
    clan: "Nagato appartient au clan Uzumaki par sa mère, ce qui explique sa grande réserve de chakra. Ses Rinnegan ont toutefois une origine distincte liée à Madara."
  },
  'Konan': {
    family: "Orpheline d'Amegakure, elle considère Yahiko et Nagato comme ses frères de cœur. Sa famille biologique n'est pas détaillée.",
    goal: "Faire vivre le rêve de paix de Yahiko, puis protéger Nagato et Amegakure.",
    clan: "Aucun clan connu. Sa tradition est celle des orphelins d'Ame : survivre, coopérer et transformer son papier en arme ou en protection."
  },
  'Killer B': {
    family: "Il est le frère adoptif et le partenaire du Quatrième Raikage A. Sa famille biologique est peu connue ; Gyûki devient son compagnon le plus constant.",
    goal: "Être libre tout en protégeant Kumo, prouver qu'un jinchûriki peut être l'ami de sa bête à queues et aider Naruto à faire de même.",
    clan: "Aucun clan connu. Kumo valorise l'endurance, le raiton et les partenariats militaires ; B y apporte la tradition unique d'un jinchûriki parfait."
  },
  'Deidara': {
    family: "Ses parents, frères, sœurs et cousins ne sont pas détaillés. Il quitte Iwa après que son goût pour les explosions le met en conflit avec le village.",
    goal: "Imposer sa définition de l'art : une beauté brève, violente et impossible à conserver.",
    clan: "Pas de clan connu. Son argile explosive et ses bouches sur les mains viennent d'une technique interdite volée à Iwa, pas d'une tradition familiale."
  },
  'Sasori': {
    family: "Ses parents meurent pendant la guerre. Sa grand-mère Chiyo l'élève et devient le lien familial le plus important de son histoire.",
    goal: "Rendre l'art éternel en se transformant en marionnette et en refusant la perte, la vieillesse et la mort.",
    clan: "Les marionnettistes de Suna transmettent des techniques de contrôle au chakra et des armes cachées. Sasori pousse cette tradition jusqu'aux marionnettes humaines."
  },
  'Kisame Hoshigaki': {
    family: "Sa famille biologique n'est pas détaillée. Il est ancien élève de Fuguki Suikazan et partenaire d'Itachi au sein de l'Akatsuki.",
    goal: "Trouver une vérité à laquelle rester loyal dans un monde bâti sur les mensonges, même si cela le mène à servir l'Akatsuki.",
    clan: "Les Hoshigaki sont associés à une apparence et une physiologie proches du requin. Kisame porte aussi la tradition meurtrière des Sept Épéistes de Kiri."
  },
  'Might Guy': {
    family: "Fils de Might Duy, qui lui transmet le courage et les Huit Portes. Sa mère et des frères ou sœurs ne sont pas détaillés ; Lee et son équipe sont sa famille de cœur.",
    goal: "Prouver que l'effort peut dépasser le génie et former une génération qui ne renonce jamais.",
    clan: "Le clan Might n'est pas présenté comme un clan héréditaire. Son héritage est la discipline du taijutsu et la transmission des Huit Portes de père en fils."
  },
  'Hashirama Senju': {
    family: "Fils de Butsuma Senju, frère de Tobirama, Itama et Kawarama. Il est marié à Mito Uzumaki et grand-père de Tsunade.",
    goal: "Créer Konoha pour que les enfants ne soient plus sacrifiés dans les guerres de clans.",
    clan: "Les Senju descendent d'Asura Ôtsutsuki et sont reconnus pour leur vitalité et leur polyvalence. Leur alliance avec les Uzumaki aide à fonder Konoha."
  },
  'Tobirama Senju': {
    family: "Fils de Butsuma Senju, frère cadet de Hashirama, frère d'Itama et Kawarama. Sa famille est décimée par les guerres contre les Uchiha.",
    goal: "Donner à Konoha des institutions capables de survivre aux individus : académie, examens Chûnin, ANBU et administration.",
    clan: "Les Senju privilégient la coopération et les techniques variées. Tobirama en représente la branche pragmatique et crée des jutsu devenus des références."
  },
  'Hiruzen Sarutobi': {
    family: "Fils de Sasuke Sarutobi, époux de Biwako et père d'Asuma et Konohamaru. Konohamaru est son petit-fils ; ses autres proches sont peu détaillés.",
    goal: "Protéger tous les habitants de Konoha comme une seule famille et préparer une génération capable de dépasser la précédente.",
    clan: "Les Sarutobi sont associés à la Volonté du Feu, au Katon et à une grande polyvalence. Leur tradition insiste sur la protection des enfants du village."
  },
  'Zabuza Momochi': {
    family: "Ses parents et frères ou sœurs sont inconnus. Haku devient la personne la plus proche de lui, même s'il prétend d'abord ne le considérer que comme un outil.",
    goal: "Renverser le régime de Kiri et trouver une place dans un monde qui l'a formé comme assassin.",
    clan: "Aucun clan connu. Il porte l'héritage violent des Sept Épéistes de la Brume et le maniement de Kubikiribôchô."
  },
  'Haku': {
    family: "Fils d'un père et d'une mère non nommés. Après la mort de sa mère et la violence de son père, Zabuza le recueille et devient sa seule famille.",
    goal: "Être utile à Zabuza et protéger la personne qui lui a donné un foyer.",
    clan: "Son Hyôton est un kekkei genkai hérité de sa lignée. Dans le Pays de l'Eau, ces pouvoirs héréditaires ont été persécutés, ce qui explique la tragédie de sa famille."
  },
  'Kaguya Otsutsuki': {
    family: "Mère de Hagoromo et Hamura Ôtsutsuki. Son partenaire humain Tenji est lié à son arrivée sur Terre ; ses autres liens familiaux restent anciens et peu détaillés.",
    goal: "Mettre fin à la guerre et conserver le chakra, puis protéger son pouvoir contre les humains qu'elle finit par craindre.",
    clan: "Les Ôtsutsuki voyagent entre les mondes et cultivent l'Arbre Divin pour son fruit de chakra. Leur tradition repose sur l'absorption du pouvoir et la transmission de dôjutsu."
  },
  'Konohamaru Sarutobi': {
    family: "Petit-fils de Hiruzen et Biwako Sarutobi, fils de deux ninjas ANBU dont les noms ne sont pas précisés. Asuma est son oncle, Mirai sa cousine, et Naruto devient son grand frère de cœur.",
    goal: "Devenir Hokage par son mérite et non grâce au nom Sarutobi. Après Naruto, il veut guider et protéger la nouvelle génération de Konoha.",
    clan: "Les Sarutobi sont liés à la Volonté du Feu, au Katon et à une grande polyvalence. Konohamaru hérite surtout de leur devoir : protéger le village et transmettre ce feu aux plus jeunes."
  }
});

const characterTechniques = Object.freeze({
  'Naruto Uzumaki': [
    ['Mode Ermite des Six Voies', "Il reçoit une partie du chakra et du pouvoir de Hagoromo pendant la quatrième guerre, puis l'unit à son entraînement de Mode Ermite et à Kyûbi."],
    ['Rasenshuriken', "Naruto apprend le Rasengan auprès de Jiraiya, puis ajoute son affinité Vent avec Kakashi et Yamato pour créer cette version destructrice."]
  ],
  'Sasuke Uchiha': [
    ['Rinnegan', "Son œil gauche évolue après que Hagoromo lui transmet son pouvoir durant la guerre. Il lui donne accès aux techniques des Six Voies et à l'échange de position Amenotejikara."],
    ['Susanoo parfait', "Il développe cette armure de chakra en poussant son Mangekyô Sharingan, réveillé après la mort d'Itachi, jusqu'à sa pleine maîtrise."]
  ],
  'Sakura Haruno': [
    ['Byakugô — Sceau de la Force', "Elle accumule un chakra extrêmement précis dans son front pendant des années sous la direction de Tsunade, puis libère cette réserve pour se régénérer."],
    ['Force monstrueuse', "Tsunade lui apprend à concentrer le chakra exactement au moment de l'impact. Sakura transforme ainsi un seul coup de poing en onde de choc."]
  ],
  'Kakashi Hatake': [
    ['Kamui', "Son Mangekyô Sharingan vient de l'œil offert par Obito. Il apprend peu à peu à viser et envoyer une cible dans la dimension de Kamui."],
    ['Raikiri', "Il invente cette attaque de foudre après l'entraînement de Minato. Son Sharingan lui permet ensuite de compenser la vitesse dangereuse de la technique."]
  ],
  'Itachi Uchiha': [
    ['Tsukuyomi', "Cette illusion absolue est une capacité de son Mangekyô Sharingan, éveillé par les traumatismes de la guerre et du destin des Uchiha."],
    ['Susanoo : Totsuka et Miroir de Yata', "Itachi manifeste Susanoo grâce à son Mangekyô. Son arme spirituelle scelle ce qu'elle transperce, tandis que le miroir protège son armure."]
  ],
  'Madara Uchiha': [
    ['Limbo : Prison frontalière', "Après avoir réveillé le Rinnegan et retrouvé ses deux yeux, Madara peut créer des doubles invisibles dans un plan voisin."],
    ['Susanoo parfait', "Son Mangekyô éternel, obtenu en recevant les yeux d'Izuna, lui permet de stabiliser et d'achever cette forme gigantesque."]
  ],
  'Obito Uchiha': [
    ['Kamui', "Son Mangekyô Sharingan s'éveille lors de la mort de Rin. Il apprend ensuite à rendre son corps intangible et à voyager par sa dimension personnelle."],
    ['Jinchûriki de Jûbi', "Il absorbe les dix queues au sommet de la guerre. Cette puissance vient du plan de Madara et de la collecte des neuf bijû."],
  ],
  'Minato Namikaze': [
    ['Hiraishin no Jutsu', "Il perfectionne la technique spatio-temporelle créée par Tobirama : des marques placées à l'avance lui permettent de se téléporter instantanément."],
    ['Rasengan', "Minato invente cette sphère de chakra en observant la bombe des bijû. Il n'arrive pas à y ajouter son élément, mais Jiraiya puis Naruto poursuivent son idée."]
  ],
  'Jiraiya': [
    ['Mode Ermite', "Il l'apprend au mont Myôboku avec les grands crapauds Fukasaku et Shima. Il puise alors l'énergie naturelle, avec leur aide pour rester stable."],
    ['Invocation des crapauds', "Son pacte signé au mont Myôboku lui permet d'appeler Gamabunta et d'autres crapauds géants au combat."]
  ],
  'Tsunade': [
    ['Byakugô — Création et Renouveau', "Elle développe ce ninjutsu médical après des années à stocker du chakra dans le sceau frontal. Il accélère sa régénération au prix d'une grande réserve."],
    ['Force au chakra', "Héritière de l'entraînement de Konoha et de sa propre maîtrise médicale, elle concentre son chakra dans ses muscles pour fracasser le sol ou une armure."]
  ],
  'Orochimaru': [
    ['Fushi Tensei — Transfert de corps', "Obsédé par l'immortalité, Orochimaru crée cette technique interdite par ses recherches sur les corps, les âmes et les sceaux."],
    ['Edo Tensei', "Il étudie et améliore la réincarnation des âmes créée par Tobirama, au cours de ses expérimentations interdites."]
  ],
  'Gaara': [
    ['Sable automatique', "Enfant, Gaara reçoit Shukaku et une protection de sable liée au chakra de sa mère. Avec l'entraînement, il transforme cette défense instinctive en contrôle précis."],
    ['Grand enterrement impérial de sable', "Il apprend à mobiliser d'immenses quantités de sable grâce à son chakra de jinchûriki, puis garde cette maîtrise après l'extraction de Shukaku."]
  ],
  'Rock Lee': [
    ['Huit Portes', "Might Guy lui transmet cet art interdit par un entraînement physique extrême. Lee ouvre plusieurs portes pour dépasser momentanément les limites de son corps."],
    ['Ura Renge — Lotus caché', "Il développe cette chaîne de taijutsu en utilisant une porte interne pour projeter son adversaire dans les airs, puis le frapper à très grande vitesse."]
  ],
  'Neji Hyuga': [
    ['Kaiten — Tourbillon divin', "Prodige du Jûken, Neji déduit et apprend seul cette défense réservée à la branche principale, grâce à son observation du Byakugan."],
    ['64 poings du Huit Trigrammes', "La tradition Hyûga lui enseigne à voir les tenketsu avec le Byakugan puis à fermer le flux de chakra adverse par une série de frappes très précises."]
  ],
  'Hinata Hyuga': [
    ['Poing des Lions jumeaux', "Elle crée cette extension de chakra en s'inspirant du Jûken familial et en s'entraînant avec Neji et l'équipe 8."],
    ['64 poings du Huit Trigrammes', "Hinata apprend le Jûken auprès de son père Hiashi et de la tradition Hyûga, puis gagne la confiance nécessaire pour l'utiliser pleinement."]
  ],
  'Shikamaru Nara': [
    ['Possession des ombres', "Il hérite de cette technique secrète du clan Nara et la perfectionne par l'observation, la stratégie et l'entraînement avec son père Shikaku."],
    ['Étreinte des ombres', "Il fait évoluer sa maîtrise du Kagemane jusqu'à pouvoir immobiliser et étrangler une cible à distance, notamment face à Hidan."]
  ],
  'Pain': [
    ['Shinra Tensei', "Nagato utilise le Rinnegan que Madara lui a donné enfant. Il contrôle le Deva Path pour repousser tout autour de lui, jusqu'à détruire Konoha."],
    ['Chibaku Tensei', "Grâce au Rinnegan, il crée un noyau gravitationnel qui attire roches et ennemis. Nagato l'emploie en mobilisant son immense chakra Uzumaki."]
  ],
  'Konan': [
    ['Shikigami no Mai', "Elle développe elle-même cet art du papier, né de sa survie à Amegakure et de longues années de combat avec Yahiko et Nagato."],
    ['600 milliards de parchemins explosifs', "Elle prépare ce piège pendant des années en étudiant la limite d'intangibilité de Kamui ; il force Obito à utiliser Izanagi pour survivre."]
  ],
  'Killer B': [
    ['Transformation complète de Gyûki', "Il construit une relation d'amitié avec Hachibi au lieu de le dominer. Cette coopération lui donne une transformation stable et la bombe de bijû."],
    ['Lariat', "Il apprend cette charge raiton auprès de Kumo avec son frère adoptif, le Raikage A, puis l'adapte à sa force et à son style imprévisible."]
  ],
  'Deidara': [
    ['C4 Karura', "Après avoir volé le kinjutsu d'argile explosive d'Iwa, Deidara expérimente jusqu'à créer des micro-bombes qui entrent dans le corps adverse."],
    ['C0 — Auto-destruction', "Il transforme sa bouche thoracique en ultime sculpture explosive. C'est le résultat de son obsession de faire de sa propre mort une œuvre d'art."]
  ],
  'Sasori': [
    ['Marionnettes humaines', "Formé par Chiyo, Sasori pousse l'art de Suna plus loin : il conserve le chakra et les techniques d'un cadavre dans une marionnette."],
    ['Sable de fer', "Il transforme le Troisième Kazekage en marionnette et récupère son kekkei genkai magnétique, qu'il emploie avec une maîtrise meurtrière."]
  ],
  'Kisame Hoshigaki': [
    ['Fusion avec Samehada', "Comme membre des Sept Épéistes, il apprend à combattre avec Samehada. Leur lien lui permet ensuite de fusionner avec l'épée et d'absorber du chakra."],
    ['Grande prison aqueuse', "Son immense réserve de chakra et sa maîtrise du Suiton de Kiri lui permettent de créer un océan mobile qui favorise son combat sous l'eau."]
  ],
  'Might Guy': [
    ['Huitième Porte — Night Guy', "Son père Duy lui enseigne les Huit Portes. Après toute une vie d'entraînement, Guy ouvre la huitième en sachant qu'elle peut le tuer."],
    ['Asa Kujaku — Paon du matin', "Il façonne ce déluge de coups par le taijutsu pur. La vitesse de ses poings chauffe l'air et produit des impacts brûlants."]
  ],
  'Hashirama Senju': [
    ['Shin Sūsenju', "Son kekkei genkai Mokuton et son Mode Ermite lui permettent de créer une statue géante aux mille bras, capable d'affronter Susanoo et Kyûbi."],
    ['Mokuton', "Cette affinité rare semble innée chez Hashirama. Il la développe pendant les guerres de clans jusqu'à pouvoir créer forêts, dragons et cellules régénérantes."]
  ],
  'Tobirama Senju': [
    ['Hiraishin no Jutsu', "Il invente cette technique de téléportation durant les guerres de clans. Minato l'étudiera plus tard et la poussera encore plus loin."],
    ['Edo Tensei', "Tobirama crée cette réincarnation interdite à partir de recherches sur les âmes et les sacrifices ; il reconnaît lui-même son danger immense."]
  ],
  'Hiruzen Sarutobi': [
    ['Cinq transformations de nature', "Élève de Hashirama et Tobirama, Hiruzen étudie toute sa vie et devient capable de manier les cinq éléments, ce qui lui vaut le titre de Professeur."],
    ['Shiki Fūjin — Sceau du Dieu de la Mort', "Il utilise ce fûinjutsu interdit enseigné à Konoha lors de l'invasion d'Orochimaru, en échange de sa propre vie."]
  ],
  'Zabuza Momochi': [
    ["Technique d'assassinat silencieux", "Il est façonné par la formation brutale de Kirigakure et devient un expert de la brume, du repérage et des attaques hors du champ de vision."],
    ['Kubikiribôchô', "En rejoignant les Sept Épéistes de la Brume, il apprend à exploiter cette épée géante qui se régénère grâce au fer contenu dans le sang de ses victimes."]
  ],
  'Haku': [
    ['Miroirs démoniaques de glace', "Son Hyôton est un kekkei genkai hérité de ses parents. Après avoir été recueilli par Zabuza, il l'entraîne jusqu'à se déplacer entre ses miroirs à grande vitesse."],
    ['Senbon précis', "Zabuza lui apprend l'efficacité d'un ninja discret. Haku pratique les aiguilles pour neutraliser sans tuer, en visant les points du corps avec précision."]
  ],
  'Kaguya Otsutsuki': [
    ['Expansion de la Vérité', "Après avoir mangé le fruit du Shinju et fusionné à l'Arbre Divin, Kaguya peut former une sphère capable d'effacer une dimension entière."],
    ['Ame-no-Minaka', "Son Rinne Sharingan lui donne le pouvoir inné de déplacer elle-même et ses ennemis entre plusieurs dimensions."]
  ],
  'Konohamaru Sarutobi': [
    ['Rasengan', "Naruto lui apprend cette technique après avoir vu sa détermination. Konohamaru la perfectionne ensuite jusqu'à pouvoir vaincre le Jigokudô de Pain."],
    ['Multi-clonage et Shuriken de l’ombre', "Il apprend les clones en suivant l'exemple de Naruto, puis travaille son ninjutsu de Konoha pour attaquer avec plusieurs leurres et projectiles."]
  ]
});

const characterPower = Object.freeze({
  'Naruto Uzumaki': { strength: 95, speed: 95, intelligence: 82, energy: 100 },
  'Sasuke Uchiha': { strength: 96, speed: 96, intelligence: 94, energy: 98 },
  'Sakura Haruno': { strength: 93, speed: 79, intelligence: 88, energy: 92 },
  'Kakashi Hatake': { strength: 88, speed: 91, intelligence: 97, energy: 86 },
  'Itachi Uchiha': { strength: 90, speed: 94, intelligence: 100, energy: 94 },
  'Madara Uchiha': { strength: 100, speed: 98, intelligence: 99, energy: 100 },
  'Obito Uchiha': { strength: 95, speed: 93, intelligence: 93, energy: 100 },
  'Minato Namikaze': { strength: 91, speed: 100, intelligence: 98, energy: 88 },
  'Jiraiya': { strength: 90, speed: 86, intelligence: 96, energy: 94 },
  'Tsunade': { strength: 96, speed: 77, intelligence: 91, energy: 88 },
  'Orochimaru': { strength: 90, speed: 87, intelligence: 99, energy: 94 },
  'Gaara': { strength: 90, speed: 76, intelligence: 90, energy: 92 },
  'Rock Lee': { strength: 91, speed: 92, intelligence: 68, energy: 67 },
  'Neji Hyuga': { strength: 85, speed: 87, intelligence: 92, energy: 82 },
  'Hinata Hyuga': { strength: 75, speed: 79, intelligence: 83, energy: 76 },
  'Shikamaru Nara': { strength: 55, speed: 67, intelligence: 100, energy: 75 },
  'Pain': { strength: 97, speed: 84, intelligence: 96, energy: 100 },
  'Konan': { strength: 85, speed: 84, intelligence: 94, energy: 92 },
  'Killer B': { strength: 92, speed: 89, intelligence: 85, energy: 98 },
  'Deidara': { strength: 86, speed: 82, intelligence: 91, energy: 88 },
  'Sasori': { strength: 89, speed: 77, intelligence: 96, energy: 90 },
  'Kisame Hoshigaki': { strength: 91, speed: 83, intelligence: 88, energy: 99 },
  'Might Guy': { strength: 99, speed: 96, intelligence: 85, energy: 74 },
  'Hashirama Senju': { strength: 100, speed: 90, intelligence: 98, energy: 100 },
  'Tobirama Senju': { strength: 93, speed: 88, intelligence: 99, energy: 92 },
  'Hiruzen Sarutobi': { strength: 86, speed: 79, intelligence: 98, energy: 90 },
  'Zabuza Momochi': { strength: 82, speed: 79, intelligence: 85, energy: 80 },
  'Haku': { strength: 70, speed: 93, intelligence: 86, energy: 84 },
  'Kaguya Otsutsuki': { strength: 100, speed: 99, intelligence: 95, energy: 100 },
  'Konohamaru Sarutobi': { strength: 72, speed: 78, intelligence: 82, energy: 75 }
});

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}

function renderCards() {
  const visibleCharacters = characters.map((character, index) => ({ character, index })).filter(({ character }) => {
    const selectedClan = clansByCharacter[character.name] || 'Sans clan connu';
    return (villageFilter.value === 'all' || villageGroup(character) === villageFilter.value)
      && (clanFilter.value === 'all' || selectedClan === clanFilter.value)
      && (roleFilter.value === 'all' || roleGroup(character) === roleFilter.value);
  });
  grid.innerHTML = visibleCharacters.length ? visibleCharacters.map(({ character, index }) => `
    <article class="character-card ${index === activeCharacterIndex ? 'selected' : ''}" data-index="${index}" tabindex="0" role="button" aria-label="Voir le dossier de ${escapeHTML(character.name)}">
      <span class="card-num">${String(index + 1).padStart(2, '0')} / ${characters.length}</span>
      <div class="card-avatar" style="--card-color: ${character.color}"><span>${escapeHTML(character.avatar)}</span><img alt="" /></div>
      <h3 class="card-name">${character.name.replace(' ', '<br />')}<span>${escapeHTML(character.role)}</span></h3>
    </article>`).join('') : '<p class="character-grid-empty">AUCUN NINJA NE CORRESPOND À CES FILTRES.</p>';
  grid.querySelectorAll('.character-card').forEach(card => {
    card.addEventListener('click', () => showProfile(Number(card.dataset.index), true));
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        showProfile(Number(card.dataset.index), true);
      }
    });
  });
  loadCardImages();
}

function fallbackPoster(character, index) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520"><rect width="800" height="520" fill="${character.color}"/><circle cx="595" cy="250" r="180" fill="#27394a" opacity=".82"/><circle cx="595" cy="250" r="140" fill="none" stroke="#eeeae2" stroke-opacity=".35"/><text x="58" y="95" fill="#171614" font-family="monospace" font-size="18" letter-spacing="4">L’EXPERT EN MANGA / 0${index + 1}</text><text x="58" y="390" fill="#eeeae2" font-family="Georgia,serif" font-size="86" font-style="italic">${escapeHTML(character.avatar)}</text><text x="58" y="448" fill="#171614" font-family="monospace" font-size="20">${escapeHTML(character.name.toUpperCase())}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

async function fetchCharacterImages(character) {
  if (imageCache.has(character.name)) return imageCache.get(character.name);
  if (imageRequests.has(character.name)) return imageRequests.get(character.name);
  const fallback = [0, 1, 2].map(index => fallbackPoster(character, index));
  const request = (async () => {
    try {
      const endpoint = `https://naruto.fandom.com/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(character.name)}&gsrnamespace=6&gsrlimit=24&prop=imageinfo&iiprop=url&iiurlwidth=900&format=json&origin=*`;
      const response = await fetch(endpoint);
      if (!response.ok) throw new Error('Images indisponibles');
      const data = await response.json();
      const remoteImages = Object.values(data.query?.pages || {})
        .sort((a, b) => imageScore(b, character) - imageScore(a, character))
        .flatMap(page => page.imageinfo || [])
        .map(info => info.thumburl || info.url)
        .filter(url => url && /^https?:\/\//i.test(url) && url !== portraitUrls[character.name]);
      const unique = [...new Set(remoteImages)].slice(0, 3);
      if (unique.length < 3) {
        const pageEndpoint = `https://naruto.fandom.com/api.php?action=query&titles=${encodeURIComponent(character.name)}&prop=pageimages&pithumbsize=900&format=json&origin=*`;
        const pageResponse = await fetch(pageEndpoint);
        const pageData = await pageResponse.json();
        const pageImage = Object.values(pageData.query?.pages || {})[0]?.thumbnail?.source;
        if (pageImage && pageImage !== portraitUrls[character.name] && !unique.includes(pageImage)) unique.push(pageImage);
      }
      return unique.length ? [...unique, ...fallback].slice(0, 3) : fallback;
    } catch (error) {
      console.info('Utilisation des visuels de secours pour', character.name);
      return fallback;
    }
  })();
  imageRequests.set(character.name, request);
  const images = await request;
  imageRequests.delete(character.name);
  imageCache.set(character.name, images);
  return images;
}

function imageScore(page, character) {
  const title = (page.title || '').toLowerCase();
  const nameParts = character.name.toLowerCase().split(/\s+/).filter(part => part.length > 2);
  let score = nameParts.reduce((total, part) => total + (title.includes(part) ? 12 : 0), 0);
  if (/portrait|profile|face|head|close|render/.test(title)) score += 24;
  if (/group|team|vs|battle|fight|collage|wallpaper|cover|logo|icon|symbol/.test(title)) score -= 45;
  if (/&|\band\b|\bet\b/.test(title)) score -= 35;
  return score;
}

async function fetchCharacterThumbnail(character) {
  return portraitUrls[character.name] || (await fetchCharacterImages(character))[0];
}

async function loadCardImages() {
  const cards = [...grid.querySelectorAll('.character-card')];
  cards.forEach(async card => {
    const character = characters[Number(card.dataset.index)];
    const image = await fetchCharacterThumbnail(character);
    const imageElement = card.querySelector('.card-avatar img');
    if (imageElement) {
      imageElement.src = image;
      imageElement.alt = character.name;
      imageElement.onerror = () => { imageElement.onerror = null; imageElement.src = fallbackPoster(character, 0); };
      imageElement.parentElement.classList.add('has-image');
    }
  });
}

async function renderGallery(character) {
  const gallery = document.querySelector('#image-gallery');
  gallery.innerHTML = '<div class="gallery-loading">CHARGEMENT DES VISUELS <span>···</span></div>';
  const images = await fetchCharacterImages(character);
  const overrides = galleryOverrides[character.name] || [];
  const galleryImages = [...overrides, ...images.filter(src => !overrides.includes(src) && src !== portraitUrls[character.name])].slice(0, 3);
  gallery.innerHTML = galleryImages.map((src, index) => `<figure class="image-card"><img src="${src}" alt="Visuel de ${escapeHTML(character.name)} — archive ${index + 1}" /><figcaption><span>0${index + 1}</span> ${escapeHTML(character.name)} / ARCHIVE</figcaption></figure>`).join('');
  gallery.querySelectorAll('img').forEach((image, index) => {
    image.addEventListener('error', () => { image.onerror = null; image.src = fallbackPoster(character, index); });
  });
}

const selectedVideoIds = {
  'Naruto vs Pain': 'QktQUO6gCAM', 'Naruto vs Sasuke': 'qi2rByJed-E', 'Naruto & Sasuke vs Kaguya': 'rTOk49LNzYs',
  'Sasuke vs Itachi': 'M5L8l70sHqE', 'Sasuke vs Deidara': 'nJiJcVXjopY', 'Sakura & Chiyo vs Sasori': 'fVt3bD8lgfc',
  'Sakura vs Ino': 'VPRIUXefOf8', 'Team 7 vs Kaguya': 'rTOk49LNzYs', 'Kakashi vs Obito': 'r2vDD9FFCVE',
  'Kakashi vs Zabuza': 'QMJMzB1bOj8', 'Team 7 vs Kakashi': 'qEKwnA1pxvw', 'Itachi vs Sasuke': 'ouCbRsP5N0I',
  'Itachi vs Kakashi': '1FEnXdp5TII', 'Itachi & Sasuke vs Kabuto': 'PUHh8_PC-vA', 'Madara vs Hashirama': 'J3Th1jKjRgk',
  'Madara vs Alliance': 'zp6xM6Aezmg', 'Madara vs Cinq Kage': 'cdoAYghbiTg', 'Obito vs Kakashi': 'r2vDD9FFCVE',
  'Obito vs Minato': 'Llr2dcd-VBo', 'Obito & Madara vs Alliance': 'DfeFJtufLHE', 'Minato vs Obito': 'Llr2dcd-VBo',
  'Minato vs Raikage & Killer B': '5_rxbl_OCiI', 'Minato & Naruto vs Obito': 'fZjMk3-rGV0', 'Jiraiya vs Pain': 'raYD5O0xpZQ',
  'Jiraiya vs Orochimaru': '5P6Txj8pH24', 'Jiraiya vs les Six Voies': 'YfSTMuUKHCI', 'Tsunade, Jiraiya & Orochimaru': '5P6Txj8pH24',
  'Tsunade vs Madara': 'htFwqzVdJBs', 'Tsunade vs Kabuto': 'ZBUEUepNIB4', 'Orochimaru vs Hiruzen': 'wsL2ihfrUVI',
  'Orochimaru vs Jiraiya & Tsunade': '5P6Txj8pH24', 'Orochimaru vs Sasuke': 'KWWFMqslM0o', 'Gaara vs Rock Lee': 'Pq3FiJ31W-0',
  'Gaara vs Deidara': 'zg65qjV1eqA', 'Gaara vs Naruto': 'iKn79sQAPOY', 'Rock Lee vs Gaara': 'Pq3FiJ31W-0',
  'Rock Lee vs Kimimaro': '17u_1vTlvc4', 'Rock Lee vs Dosu': 'YFGf073MCv8', 'Neji vs Naruto': '746ExUjRfhg',
  'Neji vs Kidômaru': '8zvSnKv5xp8', 'Neji & Hinata vs Juubi': 'Wrz7kIIb9k0', 'Hinata vs Neji': '3x0j0pwGqik',
  'Hinata vs Pain': 'PmNa8SWGm4A', 'Hinata & Naruto vs Toneri': 'At7KQzcVM5Y', 'Shikamaru vs Hidan': 's90vc0_rd1E',
  'Shikamaru vs Temari': 'Owt6LiM40nk', 'Shikamaru vs Tayuya': 'd9vZu7NAMYo', 'Pain vs Naruto': 'QktQUO6gCAM',
  'Pain vs Jiraiya': 'raYD5O0xpZQ', 'Pain vs Kakashi': 's2_NQUi8gvo', 'Konan vs Obito': 'P0ydKvX7leI',
  'Konan vs Hanzo': 'xT91Q4GhHPo', 'Konan & Pain vs Konoha': 'jYPrMUFqt0k', 'Killer B vs Sasuke': 'FfQ1g0e61JA',
  'Killer B vs Kisame': 'q63gYtaJ7PM', 'Killer B & Naruto vs Obito': 'FRmTTxAbjwA', 'Deidara vs Gaara': 'zg65qjV1eqA',
  'Deidara vs Sasuke': 'nJiJcVXjopY', 'Deidara vs Naruto & Kakashi': 'QBgjHaonSkI', 'Sasori vs Sakura & Chiyo': 'fVt3bD8lgfc',
  'Sasori vs Troisième Kazekage': 'EXXuKGDA8vE', 'Sasori vs Orochimaru': 'PxJbwLZWVwk', 'Kisame vs Killer B': '1S6yLk5TDkc',
  'Kisame vs Might Guy': 'SINOwSm7ysQ', 'Kisame & Itachi vs Team 7': '1FEnXdp5TII', 'Might Guy vs Madara': 'LMyk4Ny8Dvk',
  'Might Guy vs Kisame': 'SINOwSm7ysQ', 'Guy vs Kakashi': 'jzfEMwWTNwQ', 'Hashirama vs Madara': 'J3Th1jKjRgk',
  'Hashirama vs Kyuubi': 'pVAE0JcgbpY', 'Hashirama vs Kakuzu': 'QveSUlCkv5A', 'Tobirama vs Izuna': 'kq_Vb-QYFTk',
  'Tobirama vs Kinkaku & Ginkaku': 'wiw8O9Hn6J8', 'Tobirama vs Obito': 'rtDDpHp_IqQ', 'Hiruzen vs Orochimaru': 'wsL2ihfrUVI',
  'Hiruzen vs Hashirama & Tobirama': 'WM4Vvrd7VY8', 'Hiruzen vs Kyuubi': 'wldBXSoi20I', 'Zabuza vs Kakashi': 'QMJMzB1bOj8',
  'Zabuza & Haku vs Team 7': '6eorxUvvoY0', 'Zabuza réanimé vs Kakashi': 'QMJMzB1bOj8', 'Haku vs Naruto & Sasuke': 'ZJRMQgbww-A',
  'Haku vs Kakashi': 'RQJZeK1fAkU', 'Haku réanimé vs Team 7': '9TYdyhOKF4A', 'Kaguya vs Team 7': 'rTOk49LNzYs',
  'Kaguya vs Naruto & Sasuke': 'rTOk49LNzYs', 'Kaguya vs Hagoromo & Hamura': '_PmeV1mOTaw',
  'Konohamaru vs Pain': 'Z_QQ8YBdNN0', 'Konohamaru vs Temari': 'F_aKuVHmXBM', 'Konohamaru vs Jûgo': 'uqrBcFF9dr0'
};

const combatVideos = Object.fromEntries(Object.entries(selectedVideoIds).map(([title, id]) => [title, {
  url: `https://www.youtube.com/watch?v=${id}`,
  label: `${title} — vidéo sélectionnée`
}]));

const combatSummaries = {
  'Naruto vs Pain': 'Pain ravage Konoha avec les Six Voies et Naruto arrive après son entraînement au mont Myôboku. En Mode Ermite, Naruto détruit plusieurs corps mais se retrouve immobilisé. Hinata intervient, ce qui déclenche la colère de Naruto et la transformation de Kyûbi. Après avoir retrouvé son calme, il localise Nagato, comprend sa souffrance et choisit de rompre le cycle de la vengeance.',
  'Naruto vs Sasuke': 'Sur les statues de la Vallée de la Fin, Naruto et Sasuke livrent leur dernier duel. Sasuke veut couper tous ses liens pour porter seul le poids du monde, tandis que Naruto refuse d’abandonner son meilleur ami. Le combat traverse leurs transformations, leurs souvenirs et leurs techniques les plus puissantes. Épuisés et blessés, ils reconnaissent enfin la force de leur lien.',
  'Naruto & Sasuke vs Kaguya': 'Kaguya change de dimension à chaque instant pour isoler l’équipe 7 et absorber son chakra. Naruto et Sasuke utilisent le pouvoir des Six Voies, Sakura soutient l’équipe et Kakashi ouvre la voie avec Kamui. Après plusieurs retournements, Naruto et Sasuke parviennent à toucher Kaguya simultanément et la scellent, mettant fin à la menace qui manipulait le monde depuis l’origine.',
  'Sasuke vs Itachi': 'Sasuke atteint enfin son frère après des années de poursuite. Itachi le pousse dans un duel de genjutsu, de shuriken et de Susanoo, tout en dissimulant son état de santé réel. Sasuke croit avoir obtenu sa vengeance, mais la mort d’Itachi et la révélation de son sacrifice changent complètement le sens du combat. Il découvre que le massacre du clan cachait une mission imposée par Konoha.',
  'Sakura & Chiyo vs Sasori': 'Sakura et la vieille Chiyo affrontent Sasori dans le repaire de l’Akatsuki. Chiyo utilise les marionnettes représentant les parents de Sasori, tandis que Sakura transforme son corps en arme grâce à l’entraînement de Tsunade. Entre poisons, pièges et marionnettes humaines, le duel oppose l’ancienne et la nouvelle génération. Sasori est finalement vaincu, mais choisit de ne pas éviter le coup qui lui est destiné.',
  'Kakashi vs Obito': 'Dans la dimension de Kamui, Kakashi et Obito se retrouvent seuls, sans armée ni distraction. Chaque attaque rappelle leur ancienne équipe et les promesses faites à Rin. Ils utilisent le même Sharingan mais défendent deux visions opposées de la réalité. Kakashi gagne l’affrontement physique, tandis que Naruto tente de sauver la part d’Obito qui croit encore à ses anciens rêves.',
  'Kakashi vs Zabuza': 'Sur le pont du Pays des Vagues, Kakashi affronte Zabuza pour protéger Tazuna et les membres de l’équipe 7. Zabuza utilise la brume et ses techniques d’assassinat, mais Kakashi copie son Suiton avec le Sharingan. Haku s’interpose au moment décisif et permet à Zabuza de survivre. La mort de Haku réveille finalement l’humanité de Zabuza, qui se retourne contre Gâto.',
  'Madara vs Hashirama': 'Les deux fondateurs de Konoha s’affrontent dans la Vallée de la Fin après l’échec de leur rêve commun. Madara contrôle Kyûbi et déploie le Susanoo, tandis qu’Hashirama utilise le Mokuton et le Mode Ermite. Leur puissance transforme complètement le paysage. Hashirama gagne, mais refuse de traiter Madara comme un simple ennemi : leur duel devient le symbole des deux chemins possibles vers la paix.',
  'Madara vs Cinq Kage': 'Ressuscité par l’Edo Tensei, Madara affronte les cinq Kage sans montrer toute sa puissance. Il déploie des clones de bois, un Susanoo parfait et une pluie de météorites qui force les dirigeants à unir leurs forces. Malgré leur coordination, l’écart est immense. Ce combat montre à l’Alliance que la guerre ne sera pas gagnée par un seul village ni par les méthodes anciennes.',
  'Might Guy vs Madara': 'Pour donner à Naruto et Sasuke le temps de revenir, Might Guy ouvre successivement les Huit Portes. La dernière porte consume sa vie et déforme l’espace autour de ses coups. Madara, devenu jinchûriki de Jûbi, reconnaît en lui un adversaire exceptionnel et accepte de combattre sans retenue. Guy ne peut pas gagner seul, mais sa détermination inflige à Madara des dégâts que presque personne n’aurait pu causer.',
  'Gaara vs Rock Lee': 'Pendant l’examen Chûnin, Rock Lee révèle une vitesse et une force physiques que personne n’attendait d’un ninja incapable de ninjutsu. Il retire ses poids et ouvre les portes internes, obligeant Gaara à protéger sa défense de sable avec toute sa puissance. Lee finit gravement blessé, mais son courage impressionne le public et ses adversaires. Gaara, lui, comprend pour la première fois qu’un combat peut être plus qu’une simple démonstration de violence.',
  'Jiraiya vs Pain': 'Jiraiya infiltre Amegakure pour découvrir l’identité du chef de l’Akatsuki. Il reconnaît ses anciens élèves dans les Six Voies de Pain et comprend qu’il affronte Nagato. Malgré son Mode Ermite et l’aide des crapauds, il est submergé par les capacités combinées des six corps. Avant de mourir, Jiraiya utilise ses dernières forces pour transmettre un code à Konoha, faisant de son échec apparent une victoire décisive pour Naruto.',
  'Itachi & Sasuke vs Kabuto': 'Itachi réanimé et Sasuke doivent unir leurs forces contre Kabuto, qui maîtrise le Mode Ermite et l’Edo Tensei. Leurs visions s’opposent encore, mais leur coordination devient peu à peu naturelle. Itachi utilise Izanami pour arrêter Kabuto sans le tuer et libérer les âmes réanimées. Avant de disparaître, il parle enfin sincèrement à Sasuke et lui transmet la responsabilité de choisir sa propre voie.',
  'Minato vs Obito': 'Un homme masqué attaque Konoha en contrôlant Kyûbi et tente d’emporter le nouveau-né Naruto. Minato comprend rapidement que l’ennemi utilise une technique spatio-temporelle et le piège avec le Hiraishin. En quelques échanges, il retourne la situation, marque Obito et sauve le village. Le prix de la victoire reste terrible : Minato et Kushina donnent leur vie pour sceller Kyûbi dans leur fils.',
  'Killer B vs Kisame': 'Kisame infiltre l’île où Killer B s’entraîne et utilise Samehada pour absorber son chakra. B répond avec son style à huit sabres et la puissance du Hachibi. Lorsque Samehada change de camp, Kisame révèle une réserve de chakra monstrueuse et fusionne avec l’épée. Might Guy intervient et doit ouvrir plusieurs portes pour le vaincre, mais Kisame choisit de mourir plutôt que de livrer les secrets de l’Akatsuki.',
  'Zabuza vs Kakashi': 'Zabuza tente de neutraliser Kakashi dans une brume épaisse afin de poursuivre la mission d’assassinat de Tazuna. Kakashi utilise son Sharingan pour anticiper chaque mouvement et copie les techniques Suiton de son adversaire. Haku finit par s’interposer pour sauver Zabuza, ce qui empêche une conclusion immédiate. Ce premier grand combat installe le ton de l’histoire : derrière chaque technique se trouve une vie marquée par la guerre.',
  'Konohamaru vs Pain': 'Pendant l’invasion de Konoha, le Jigokudô de Pain interroge Ebisu sur Naruto. Konohamaru cache sa présence, emploie un clone pour analyser la technique ennemie et crée une ouverture. Il se souvient alors de l’entraînement de Naruto, surgit derrière Pain avec un Rasengan et détruit ce corps. C’est le combat qui prouve qu’il n’est plus seulement le petit-fils du Hokage.',
  'Konohamaru vs Temari': 'Dans un épisode de l’anime, Konohamaru défie Temari après qu’elle a sous-estimé Naruto et le clan Sarutobi. Elle neutralise facilement ses clones et garde l’avantage avec son éventail. Konohamaru refuse pourtant d’abandonner et lance un Rasengan pour lui rappeler qu’il suit la voie de Naruto. Le duel est surtout important pour sa fierté et sa volonté de progresser.',
  'Konohamaru vs Jûgo': 'Dans Boruto, Jûgo perd le contrôle de son sceau maudit et devient dangereux pour tous ceux qui l’approchent. Konohamaru intervient pour protéger les jeunes ninjas, analyse sa transformation puis utilise le Rasengan afin de le ramener à lui. Le combat montre Konohamaru adulte : un sensei qui combat devant son équipe plutôt que derrière elle.'
};

function getCombatSummary(battle, character) {
  return combatSummaries[battle[0]] || `${battle[0]} se déroule pendant ${battle[1]}. Ce duel met à l’épreuve les techniques de ${character.name}, ses convictions et les liens qui l’unissent à ses adversaires. Après un affrontement tendu, chaque combattant doit assumer les conséquences de ses choix, et le résultat laisse une trace durable dans l’histoire du monde shinobi.`;
}

function openBattleModal(battle, character) {
  document.querySelector('#modal-title').textContent = battle[0];
  document.querySelector('#modal-location').textContent = `${battle[1]} / ${character.name}`;
  document.querySelector('#modal-summary').textContent = getCombatSummary(battle, character);
  const video = combatVideos[battle[0]] || { url: 'https://www.youtube.com/watch?v=qi2rByJed-E', label: 'Vidéo Naruto sélectionnée' };
  document.querySelector('#modal-youtube').href = video.url;
  document.querySelector('#modal-youtube').textContent = `${video.label} ↗`;
  const videoFrame = document.querySelector('#modal-video');
  const videoId = video.url.match(/[?&]v=([^&]+)/)?.[1];
  videoFrame.src = videoId ? `https://www.youtube.com/embed/${videoId}` : '';
  videoFrame.style.display = videoId ? 'block' : 'none';
  const modal = document.querySelector('#battle-modal');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeBattleModal() {
  const modal = document.querySelector('#battle-modal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

function battleLevel(title) {
  if (/Kaguya|Madara|Juubi|Pain|Obito|Hashirama|Kyuubi/i.test(title)) return 'RANG S · DANGER MAX.';
  if (/Itachi|Sasuke|Kisame|Orochimaru|Deidara|Sasori|Killer B/i.test(title)) return 'RANG A · TRÈS ÉLEVÉ';
  return 'RANG B · ÉLEVÉ';
}

async function showProfile(index, shouldScrollToDossier = false) {
  const character = characters[index];
  activeCharacterIndex = index;
  document.querySelectorAll('.character-card').forEach(card => card.classList.toggle('selected', Number(card.dataset.index) === index));
  document.querySelector('#profile-index').textContent = `N° ${String(index + 1).padStart(3, '0')}`;
  document.querySelector('#profile-rank').textContent = character.role;
  document.querySelector('#profile-village').textContent = character.village;
  document.querySelector('#profile-name').innerHTML = character.name.split(' ').map((part, i) => i === 0 ? escapeHTML(part) : `<em>${escapeHTML(part)}</em>`).join(' ');
  document.querySelector('#profile-kanji').textContent = character.kanji;
  const profileAvatar = document.querySelector('#profile-avatar');
  profileAvatar.dataset.character = character.name;
  profileAvatar.classList.remove('has-image');
  profileAvatar.innerHTML = `<span>${escapeHTML(character.avatar)}</span><img alt="Portrait de ${escapeHTML(character.name)}" />`;
  fetchCharacterThumbnail(character).then(image => {
    if (profileAvatar.dataset.character !== character.name) return;
    const profileImage = profileAvatar.querySelector('img');
    profileImage.src = image;
    profileImage.onerror = () => { profileImage.onerror = null; profileImage.src = fallbackPoster(character, 0); };
    profileAvatar.classList.add('has-image');
  });
  document.querySelector('#profile-visual').style.background = `linear-gradient(135deg, ${character.color}, #27394a 78%)`;
  document.querySelector('#profile-quote').textContent = character.quote;
  document.querySelector('#profile-story').textContent = character.story;
  const details = characterDetails[character.name] || {
    family: "Les liens familiaux de ce personnage ne sont pas détaillés dans le dossier actuellement disponible.",
    goal: "Son parcours et son objectif restent à compléter dans ce dossier.",
    clan: "Les traditions de son clan ou de son village restent à documenter."
  };
  document.querySelector('#profile-details').innerHTML = [
    ['Famille', details.family],
    ['But de ninja', details.goal],
    ['Clan & traditions', details.clan]
  ].map(([title, text]) => `<section class="profile-detail"><h4>${title}</h4><p>${escapeHTML(text)}</p></section>`).join('');
  const techniques = characterTechniques[character.name] || [
    ['Techniques à compléter', "Ce dossier ne contient pas encore les techniques majeures ni la manière dont ce personnage les a apprises."]
  ];
  document.querySelector('#techniques-count').textContent = `${String(techniques.length).padStart(2, '0')} / DOSSIER`;
  document.querySelector('#techniques-list').innerHTML = techniques.map(([name, learned]) => `<article class="technique-item"><h4>${escapeHTML(name)}</h4><p><span>Apprentissage — </span>${escapeHTML(learned)}</p></article>`).join('');
  const power = characterPower[character.name] || { strength: 65, speed: 65, intelligence: 65, energy: 65 };
  const powerStats = [
    ['Force', power.strength],
    ['Vitesse', power.speed],
    ['Intelligence', power.intelligence],
    ['Chakra / énergie', power.energy]
  ];
  document.querySelector('#power-grid').innerHTML = powerStats.map(([label, value]) => `<div class="power-stat"><span class="power-stat-label">${escapeHTML(label)}</span><span class="power-stat-value">${value}/100</span><span class="power-track"><span class="power-fill" style="--power: ${value}%; --power-color: ${character.color}"></span></span></div>`).join('');
  document.querySelector('#profile-tags').innerHTML = character.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join('');
  const battleImage = galleryOverrides[character.name]?.[0] || portraitUrls[character.name] || fallbackPoster(character, 0);
  document.querySelector('#battle-grid').innerHTML = character.battles.map((battle, i) => `<article class="battle-card" style="--battle-color: ${character.color}" data-battle-index="${i}" tabindex="0" role="button" aria-label="Voir le résumé de ${escapeHTML(battle[0])}"><div class="battle-card-top"><div><span class="battle-card-number">0${i + 1}</span><span class="battle-level">${battleLevel(battle[0])}</span></div><img class="battle-thumb" src="${battleImage}" alt="${escapeHTML(character.name)}" /></div><h4>${escapeHTML(battle[0])}</h4><p>${escapeHTML(battle[1])}</p><span class="battle-arrow">↗</span></article>`).join('');
  document.querySelectorAll('.battle-card').forEach(card => {
    const battle = character.battles[Number(card.dataset.battleIndex)];
    card.addEventListener('click', () => openBattleModal(battle, character));
    card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') openBattleModal(battle, character); });
    const battleThumb = card.querySelector('.battle-thumb');
    battleThumb.addEventListener('error', () => { battleThumb.onerror = null; battleThumb.src = fallbackPoster(character, Number(card.dataset.battleIndex)); });
  });
  renderGallery(character);
  if (shouldScrollToDossier) document.querySelector('#featured').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderSuggestions(query) {
  const normalized = query.trim().toLowerCase();
  const matches = normalized ? characters.filter(character => character.name.toLowerCase().includes(normalized)).slice(0, 7) : [];
  suggestions.innerHTML = matches.map(character => `<div class="suggestion" role="option" data-name="${escapeHTML(character.name)}"><span>${escapeHTML(character.name)}</span><small>${escapeHTML(character.role)}</small></div>`).join('');
  suggestions.classList.toggle('visible', matches.length > 0);
  suggestions.querySelectorAll('.suggestion').forEach(item => item.addEventListener('click', () => selectCharacter(item.dataset.name)));
}

async function searchRemoteCharacter(query) {
  const endpoint = `https://naruto.fandom.com/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=0&gsrlimit=1&prop=extracts|pageimages&exsentences=10&explaintext=1&pithumbsize=900&format=json&origin=*`;
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    const page = Object.values(data.query?.pages || {})[0];
    if (!page) return false;
    const remote = { name: page.title, role: 'Personnage du manga', village: 'NARUTOVERSE', kanji: '忍', avatar: page.title.trim()[0].toUpperCase(), color: '#758895', quote: '« Chaque histoire mérite d’être racontée. »', story: page.extract || `Le dossier de ${page.title} vient d’être retrouvé. Les visuels et les informations de ce personnage sont chargés depuis la base Naruto.`, tags: ['Dossier ouvert', 'Ninja', 'Narutoverse'], battles: [['Dossier à compléter', 'Naruto'], ['Dossier à compléter', 'Naruto'], ['Dossier à compléter', 'Naruto']], remote: true };
    const existing = characters.findIndex(character => character.name.toLowerCase() === remote.name.toLowerCase());
    const index = existing >= 0 ? existing : characters.push(remote) - 1;
    renderCards();
    await showProfile(index, true);
    return true;
  } catch (error) {
    return false;
  }
}

async function selectCharacter(name) {
  const index = characters.findIndex(character => character.name === name);
  if (index < 0) return;
  input.value = characters[index].name;
  suggestions.classList.remove('visible');
  await showProfile(index, true);
}

input.addEventListener('input', event => renderSuggestions(event.target.value));
input.addEventListener('focus', event => renderSuggestions(event.target.value));
form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = input.value.trim();
  if (!query) return;
  const match = characters.find(character => character.name.toLowerCase().includes(query.toLowerCase()));
  if (match) await selectCharacter(match.name);
  else {
    const found = await searchRemoteCharacter(query);
    if (found) suggestions.classList.remove('visible');
    else { input.classList.add('shake'); setTimeout(() => input.classList.remove('shake'), 350); }
  }
});
document.addEventListener('click', event => { if (!form.contains(event.target)) suggestions.classList.remove('visible'); });
document.querySelector('#modal-close').addEventListener('click', closeBattleModal);
document.querySelectorAll('[data-close-modal]').forEach(element => element.addEventListener('click', closeBattleModal));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeBattleModal(); });

initializeFilters();
renderCards();
showProfile(0);
