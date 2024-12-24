import { NextResponse } from 'next/server';

const ideas = [
  {
    id: 1,
    title: {
      ru: "Новогодний бал-маскарад",
      en: "New Year's Masquerade Ball"
    },
    description: {
      ru: "Организуйте вечеринку, где каждый гость приходит в костюме своего любимого персонажа. Устройте конкурс на самый оригинальный костюм!",
      en: "Organize a party where each guest comes in their favorite character's costume. Hold a contest for the most original costume!"
    },
    difficulty: 3,
    cost: 2,
    funFactor: 5
  },
  {
    id: 2,
    title: {
      ru: "Кулинарное путешествие вокруг света",
      en: "Culinary Journey Around the World"
    },
    description: {
      ru: "Приготовьте блюда из разных стран мира. Каждый час нового года встречайте новым национальным блюдом!",
      en: "Prepare dishes from different countries around the globe. Greet each hour of the New Year with a new national dish!"
    },
    difficulty: 4,
    cost: 3,
    funFactor: 4
  },
  {
    id: 3,
    title: {
      ru: "Новогодний квест по городу",
      en: "New Year's City Quest"
    },
    description: {
      ru: "Создайте захватывающий квест по знаковым местам вашего города. Завершите его встречей Нового года на главной площади!",
      en: "Create an exciting quest around your city's landmarks. Conclude it by celebrating the New Year in the main square!"
    },
    difficulty: 5,
    cost: 2,
    funFactor: 5
  },
  {
    id: 4,
    title: {
      ru: "Марафон добрых дел",
      en: "Good Deeds Marathon"
    },
    description: {
      ru: "Начните новый год с добрых дел. Организуйте группу друзей и весь день помогайте нуждающимся, украшайте город, дарите подарки незнакомцам.",
      en: "Start the New Year with acts of kindness. Gather friends to help those in need, decorate the city, and give presents to strangers all day long."
    },
    difficulty: 3,
    cost: 2,
    funFactor: 4
  },
  {
    id: 5,
    title: {
      ru: "Ретро-вечеринка",
      en: "Retro Party"
    },
    description: {
      ru: "Устройте вечеринку в стиле прошлых десятилетий. Выберите эпоху, подготовьте соответствующие костюмы, музыку и угощения!",
      en: "Throw a party inspired by past decades. Pick an era, prepare matching costumes, music, and treats!"
    },
    difficulty: 3,
    cost: 3,
    funFactor: 5
  },
  {
    id: 6,
    title: {
      ru: "Новогодний фотомарафон",
      en: "New Year's Photo Marathon"
    },
    description: {
      ru: "Устройте фотосессию в разных локациях города. Создайте тематические образы для каждой фотографии и соберите уникальный новогодний альбом.",
      en: "Organize photo shoots in various city spots. Create themed looks for each photo and compile a unique New Year album."
    },
    difficulty: 2,
    cost: 1,
    funFactor: 4
  },
  {
    id: 7,
    title: {
      ru: "Ночь настольных игр",
      en: "Board Game Night"
    },
    description: {
      ru: "Соберите друзей для марафона настольных игр. Подготовьте разнообразные игры, от классических до современных, и не забудьте про новогодние закуски!",
      en: "Gather friends for a board game marathon. Prepare a variety of games, from classics to modern hits, and don't forget festive snacks!"
    },
    difficulty: 1,
    cost: 2,
    funFactor: 5
  },
  {
    id: 8,
    title: {
      ru: "Новогодний караоке-баттл",
      en: "New Year's Karaoke Battle"
    },
    description: {
      ru: "Организуйте караоке-соревнование с новогодними и зимними песнями. Подготовьте призы для победителей в разных номинациях.",
      en: "Host a karaoke contest featuring holiday and winter tunes. Prepare prizes for winners in various categories."
    },
    difficulty: 2,
    cost: 2,
    funFactor: 5
  },
  {
    id: 9,
    title: {
      ru: "Зимний пикник",
      en: "Winter Picnic"
    },
    description: {
      ru: "Устройте пикник на природе. Приготовьте горячие напитки, запеките картошку на костре и насладитесь зимними активностями.",
      en: "Have a picnic outdoors. Make hot drinks, roast potatoes over a fire, and enjoy winter activities."
    },
    difficulty: 3,
    cost: 2,
    funFactor: 4
  },
  {
    id: 10,
    title: {
      ru: "Новогодний мастер-класс",
      en: "New Year's Workshop"
    },
    description: {
      ru: "Пригласите друзей на мастер-класс по изготовлению новогодних украшений или подарков. Создайте уникальные сувениры своими руками.",
      en: "Invite friends to a workshop on creating New Year’s decorations or gifts. Make unique souvenirs with your own hands."
    },
    difficulty: 2,
    cost: 2,
    funFactor: 4
  },
  {
    id: 11,
    title: {
      ru: "Вечер виртуальных путешествий",
      en: "Virtual Travel Evening"
    },
    description: {
      ru: "Используйте VR-очки или онлайн-экскурсии, чтобы «побывать» в разных странах, отмечающих Новый год по-своему.",
      en: "Use VR headsets or online tours to 'visit' various countries that celebrate the New Year in their own unique ways."
    },
    difficulty: 2,
    cost: 3,
    funFactor: 4
  },
  {
    id: 12,
    title: {
      ru: "Искусство предсказаний",
      en: "Art of Fortunes"
    },
    description: {
      ru: "Организуйте дружеский «прогноз будущего»: гадания на кофейной гуще, шуточные предсказания и даже небольшие театральные постановки.",
      en: "Host a friendly 'future forecast' event: coffee grounds reading, humorous prophecies, and even small theatrical performances."
    },
    difficulty: 2,
    cost: 2,
    funFactor: 5
  },
  {
    id: 13,
    title: {
      ru: "Новогодний буфет из сладостей",
      en: "New Year's Sweet Buffet"
    },
    description: {
      ru: "Создайте у себя дома настоящий «сладкий стол» с конфетами, пряниками и домашними пирожными. Можно соревноваться, у кого самая креативная выпечка!",
      en: "Set up a true 'sweet table' at home with candies, gingerbread, and homemade pastries. Compete for the most creative baked goods!"
    },
    difficulty: 3,
    cost: 3,
    funFactor: 4
  },
  {
    id: 14,
    title: {
      ru: "Фейерверк воспоминаний",
      en: "Fireworks of Memories"
    },
    description: {
      ru: "Соберите фотографии и видеоролики за прошедший год. Создайте слайд-шоу или короткий фильм и покажите его на большом экране перед полуночью.",
      en: "Gather photos and video clips from the past year. Create a slideshow or short film and show it on a big screen before midnight."
    },
    difficulty: 2,
    cost: 1,
    funFactor: 4
  },
  {
    id: 15,
    title: {
      ru: "Экологичный Новый год",
      en: "Eco-Friendly New Year"
    },
    description: {
      ru: "Проведите праздник, используя минимум одноразовой посуды и упаковки. Сделайте украшения из вторсырья и натуральных материалов.",
      en: "Celebrate with minimal use of disposable tableware and packaging. Make decorations from recycled or natural materials."
    },
    difficulty: 3,
    cost: 2,
    funFactor: 3
  },
  {
    id: 16,
    title: {
      ru: "«Тайный Санта» в кругу друзей",
      en: "\"Secret Santa\" Among Friends"
    },
    description: {
      ru: "Организуйте обмен подарками, не раскрывая, кто дарит кому. Пусть все попробуют угадать своего «Санту»!",
      en: "Organize a gift exchange without revealing who is giving to whom. Let everyone try to guess their 'Santa'!"
    },
    difficulty: 1,
    cost: 3,
    funFactor: 5
  },
  {
    id: 17,
    title: {
      ru: "Ночной бег или прогулка",
      en: "Night Run or Walk"
    },
    description: {
      ru: "Соберите друзей и отправляйтесь на символическую пробежку или пешую прогулку в последний час уходящего года. Затем весело встречайте новый!",
      en: "Gather friends and go for a symbolic run or walk in the final hour of the old year. Then celebrate the New Year in style!"
    },
    difficulty: 4,
    cost: 1,
    funFactor: 4
  },
  {
    id: 18,
    title: {
      ru: "Домашний кинотеатр",
      en: "Home Cinema Night"
    },
    description: {
      ru: "Соберите подборку новогодних фильмов или мультфильмов. Украсьте комнату, приготовьте попкорн и погрузитесь в атмосферу праздника.",
      en: "Gather a selection of New Year movies or cartoons. Decorate the room, make popcorn, and immerse yourselves in the festive spirit."
    },
    difficulty: 1,
    cost: 2,
    funFactor: 5
  },
  {
    id: 19,
    title: {
      ru: "Новогодняя дегустация напитков",
      en: "New Year's Drink Tasting"
    },
    description: {
      ru: "Подготовьте разные виды горячих и прохладительных напитков (пунш, глинтвейн, какао и т.д.). Попробуйте каждый и выберите любимый!",
      en: "Prepare various hot and cold beverages (punch, mulled wine, cocoa, etc.). Taste them all and pick your favorite!"
    },
    difficulty: 2,
    cost: 3,
    funFactor: 4
  },
  {
    id: 20,
    title: {
      ru: "Снежные скульптуры",
      en: "Snow Sculptures"
    },
    description: {
      ru: "Если на улице есть снег, слепите снежные скульптуры или постройте целый снежный город. Можно устроить конкурс на самую креативную скульптуру!",
      en: "If there's snow outside, build snow sculptures or an entire snowy city. You can even hold a contest for the most creative sculpture!"
    },
    difficulty: 3,
    cost: 1,
    funFactor: 5
  },
  {
    id: 21,
    title: {
      ru: "Новогодний обмен историями",
      en: "New Year's Story Exchange"
    },
    description: {
      ru: "Попросите каждого гостя рассказать интересную или смешную историю из уходящего года. Это сближает и вызывает массу положительных эмоций.",
      en: "Have each guest share an interesting or funny story from the past year. It brings people closer and generates plenty of good vibes."
    },
    difficulty: 1,
    cost: 1,
    funFactor: 4
  },
  {
    id: 22,
    title: {
      ru: "Ночь фейерверков и салютов",
      en: "Night of Fireworks"
    },
    description: {
      ru: "Организуйте безопасный запуск фейерверков. Подготовьте несколько видов салютов и наслаждайтесь красочным шоу в полночь.",
      en: "Arrange a safe fireworks display. Prepare different types of fireworks and enjoy a vibrant show at midnight."
    },
    difficulty: 3,
    cost: 4,
    funFactor: 5
  },
  {
    id: 23,
    title: {
      ru: "Охота за новогодними гирляндами",
      en: "Hunt for New Year's Lights"
    },
    description: {
      ru: "Украсьте дом или квартиру гирляндами, спрячьте несколько «секретных» огоньков. Пусть гости найдут все спрятанные элементы!",
      en: "Decorate the house or apartment with string lights, hiding a few 'secret' bulbs. Let guests find all the hidden items!"
    },
    difficulty: 2,
    cost: 2,
    funFactor: 4
  },
  {
    id: 24,
    title: {
      ru: "Волшебная дискотека",
      en: "Magical Disco"
    },
    description: {
      ru: "Проведите музыкальную вечеринку, где каждый час играет музыка одного жанра. Танцуйте под ретро, рок, поп, электросвинг и т.д.",
      en: "Host a music party where each hour features a different genre. Dance to retro, rock, pop, electroswing, and more."
    },
    difficulty: 3,
    cost: 3,
    funFactor: 5
  },
  {
    id: 25,
    title: {
      ru: "Новогодний книжный клуб",
      en: "New Year's Book Club"
    },
    description: {
      ru: "Каждый выбирает и презентует любимую книгу, связанную с праздниками или зимой. Обсудите их за чашкой чая или глинтвейна.",
      en: "Everyone picks and presents a favorite book related to the holidays or winter. Discuss them over a cup of tea or mulled wine."
    },
    difficulty: 1,
    cost: 2,
    funFactor: 3
  },
  {
    id: 26,
    title: {
      ru: "Пижамная вечеринка",
      en: "Pajama Party"
    },
    description: {
      ru: "Приходите все в пижамах! Смотрите фильмы, играйте в настольные игры, пейте горячий шоколад и чувствуйте себя максимально уютно.",
      en: "Show up in your pajamas! Watch movies, play board games, drink hot chocolate, and enjoy maximum coziness."
    },
    difficulty: 1,
    cost: 2,
    funFactor: 5
  },
  {
    id: 27,
    title: {
      ru: "Новогодний стендап",
      en: "New Year's Stand-Up"
    },
    description: {
      ru: "Организуйте любительский стендап: каждый может подготовить короткую юмористическую историю про уходящий год.",
      en: "Host an amateur stand-up session: each person prepares a short, comedic story about the past year."
    },
    difficulty: 3,
    cost: 1,
    funFactor: 5
  },
  {
    id: 28,
    title: {
      ru: "Костёр желаний",
      en: "Bonfire of Wishes"
    },
    description: {
      ru: "Если есть возможность развести безопасный костёр, предложите каждому написать свои желания на бумаге и сжечь их, отпуская в будущее.",
      en: "If it's safe to make a bonfire, invite everyone to write down their wishes on paper and burn them, releasing them into the future."
    },
    difficulty: 3,
    cost: 2,
    funFactor: 4
  },
  {
    id: 29,
    title: {
      ru: "Гастрономический марафон закусок",
      en: "Snack Marathon"
    },
    description: {
      ru: "Создайте длинный стол с закусками на любой вкус. Каждый час пробуйте что-то новое, обсуждайте вкусы и делитесь рецептами.",
      en: "Set up a long table filled with various snacks for everyone. Try something new each hour, discuss flavors, and share recipes."
    },
    difficulty: 3,
    cost: 4,
    funFactor: 4
  },
  {
    id: 30,
    title: {
      ru: "Гавайская вечеринка зимой",
      en: "Winter Hawaiian Party"
    },
    description: {
      ru: "Превратите дом в тропический остров: украсьте помещение яркими цветами, приготовьте фруктовые коктейли и танцуйте под гавайскую музыку.",
      en: "Turn your home into a tropical island: decorate with vibrant flowers, make fruity cocktails, and dance to Hawaiian music."
    },
    difficulty: 2,
    cost: 3,
    funFactor: 5
  },
  {
    id: 31,
    title: {
      ru: "Рождественский шопинг-челлендж",
      en: "Christmas Shopping Challenge"
    },
    description: {
      ru: "Отправьтесь с друзьями за праздничными украшениями и подарками в «режиме соревнования»: у кого получится найти самый выгодный или оригинальный вариант?",
      en: "Head out with friends to buy holiday decorations and gifts in a 'competition mode': who can find the best deals or the most unique items?"
    },
    difficulty: 4,
    cost: 3,
    funFactor: 3
  },
  {
    id: 32,
    title: {
      ru: "Деревенский Новый год",
      en: "Rural New Year"
    },
    description: {
      ru: "Снимите загородный домик или отправьтесь к родственникам в деревню. Организуйте катание на санях, лепку снежных баб и посиделки у камина.",
      en: "Rent a country house or visit relatives in a village. Enjoy sleigh rides, build snowmen, and gather by the fireplace."
    },
    difficulty: 4,
    cost: 4,
    funFactor: 5
  },
  {
    id: 33,
    title: {
      ru: "Новогодняя спорт-вечеринка",
      en: "New Year's Sports Party"
    },
    description: {
      ru: "Устройте соревнования в новогоднем стиле: зимние эстафеты, броски снежков в цель, мини-турнир по хоккею на замёрзшем озере и т.д.",
      en: "Host competitions in a festive style: winter relays, snowball target throws, a mini hockey tournament on a frozen lake, and more."
    },
    difficulty: 5,
    cost: 3,
    funFactor: 5
  },
  {
    id: 34,
    title: {
      ru: "Тематическая елка в разных стилях",
      en: "Multi-Theme Christmas Tree"
    },
    description: {
      ru: "Украсьте елку в стиле фильма, сказки или эпохи. Пусть у каждого гостя будет своя «мини-ёлочка», оформленная в индивидуальном стиле.",
      en: "Decorate the tree in the style of a movie, fairy tale, or era. Let each guest have their own 'mini tree' in a personal theme."
    },
    difficulty: 2,
    cost: 3,
    funFactor: 4
  },
  {
    id: 35,
    title: {
      ru: "Новогодний книжно-кинематографический квест",
      en: "Book and Film Themed Quest"
    },
    description: {
      ru: "Составьте подсказки и задания на основе любимых книг и фильмов. Проходя квест, гости вспомнят множество интересных историй!",
      en: "Create clues and tasks based on favorite books and movies. As guests progress through the quest, they’ll recall many fascinating stories!"
    },
    difficulty: 4,
    cost: 2,
    funFactor: 5
  },
  {
    id: 36,
    title: {
      ru: "Городские огни",
      en: "City Lights Tour"
    },
    description: {
      ru: "Прокатитесь по городу в поисках самых красиво украшенных витрин и домов. Можно устроить фотоконкурс с призом за лучший снимок.",
      en: "Drive around the city searching for the most beautifully decorated shops and houses. You can hold a photo contest with a prize for the best shot."
    },
    difficulty: 2,
    cost: 2,
    funFactor: 4
  },
  {
    id: 37,
    title: {
      ru: "Послание в будущее",
      en: "Message to the Future"
    },
    description: {
      ru: "Напишите себе письма, которые вскроете ровно через год. Поделитесь друг с другом мечтами, планами и пожеланиями!",
      en: "Write letters to yourselves to be opened exactly one year later. Share your dreams, plans, and wishes with each other!"
    },
    difficulty: 1,
    cost: 1,
    funFactor: 4
  },
  {
    id: 38,
    title: {
      ru: "Театральный вечер",
      en: "Theater Night"
    },
    description: {
      ru: "Подготовьте маленькие сценки, разыграйте мини-спектакль. Пусть каждый попробует себя в роли актёра, сценариста и режиссёра.",
      en: "Prepare short skits or a mini-play. Let everyone try their hand at acting, scriptwriting, and directing."
    },
    difficulty: 4,
    cost: 2,
    funFactor: 5
  },
  {
    id: 39,
    title: {
      ru: "Новогоднее украшение двора",
      en: "Yard Decoration for the New Year"
    },
    description: {
      ru: "Для тех, у кого есть частный дом или дача: украсьте всё от калитки до дерева в саду, сделайте свой собственный праздничный «парк»!",
      en: "For those with a private house or cottage: decorate everything from the gate to the trees, creating your very own holiday 'park'!"
    },
    difficulty: 3,
    cost: 3,
    funFactor: 4
  },
  {
    id: 40,
    title: {
      ru: "Разукрась свой Новый год",
      en: "Color Your New Year"
    },
    description: {
      ru: "Устройте раскрашивание больших плакатов с зимними сценами или мандалами. Отличная активность и для детей, и для взрослых.",
      en: "Set up a coloring session with large posters of winter scenes or mandalas. It's a great activity for both kids and adults."
    },
    difficulty: 2,
    cost: 2,
    funFactor: 4
  },
  {
    id: 41,
    title: {
      ru: "Ночной фест фудтраков",
      en: "Night Food Truck Fest"
    },
    description: {
      ru: "Организуйте «мини-фестиваль» уличной еды: приготовьте хот-доги, такос, бургеры прямо у дома. Каждый отвечает за одну закуску!",
      en: "Organize a 'mini festival' of street food: make hot dogs, tacos, and burgers at home. Each person is responsible for one dish!"
    },
    difficulty: 4,
    cost: 4,
    funFactor: 5
  },
  {
    id: 42,
    title: {
      ru: "Выставка собственных талантов",
      en: "Talent Exhibition"
    },
    description: {
      ru: "Пусть каждый участник покажет, что умеет: кто-то рисует, кто-то поёт, а кто-то жонглирует. Создайте праздничную арт-галерею!",
      en: "Have each participant showcase their skills: some draw, others sing, some juggle. Create a festive art gallery!"
    },
    difficulty: 2,
    cost: 1,
    funFactor: 5
  },
  {
    id: 43,
    title: {
      ru: "Игры на свежем воздухе",
      en: "Outdoor Games"
    },
    description: {
      ru: "Если погода позволяет, устройте зимние активности: от классических «снежных боёв» до игры в снежный боулинг.",
      en: "If the weather allows, plan winter activities: from classic snowball fights to 'snow' bowling."
    },
    difficulty: 4,
    cost: 2,
    funFactor: 5
  },
  {
    id: 44,
    title: {
      ru: "Мастер-класс по шоколаду",
      en: "Chocolate-Making Workshop"
    },
    description: {
      ru: "Научитесь делать конфеты и фигурки из шоколада. Прекрасный подарок и сладкое угощение на Новый год!",
      en: "Learn to make chocolate candies and figures. It’s a wonderful gift and a sweet New Year's treat!"
    },
    difficulty: 3,
    cost: 3,
    funFactor: 5
  },
  {
    id: 45,
    title: {
      ru: "Новогодний флешмоб в соцсетях",
      en: "New Year's Social Media Flashmob"
    },
    description: {
      ru: "Придумайте веселый танец или челлендж. Снимите его и опубликуйте в соцсетях, приглашая друзей и знакомых присоединиться.",
      en: "Come up with a fun dance or challenge. Record and post it on social media, inviting friends and followers to join."
    },
    difficulty: 2,
    cost: 1,
    funFactor: 4
  },
  {
    id: 46,
    title: {
      ru: "Тихий Новый год",
      en: "A Quiet New Year"
    },
    description: {
      ru: "Вместо шумного праздника попробуйте провести вечер в спокойной атмосфере: медитация, чтение, тихая музыка и свечи.",
      en: "Instead of a loud celebration, spend a peaceful evening: meditation, reading, soft music, and candles."
    },
    difficulty: 1,
    cost: 1,
    funFactor: 3
  },
  {
    id: 47,
    title: {
      ru: "Соревнование рецептов салатов",
      en: "Salad Recipe Contest"
    },
    description: {
      ru: "Кто приготовит самый вкусный или необычный салат? Поделитесь рецептами и устроите небольшую кулинарную битву!",
      en: "Who can make the tastiest or most unusual salad? Share recipes and hold a mini culinary showdown!"
    },
    difficulty: 3,
    cost: 3,
    funFactor: 4
  },
  {
    id: 48,
    title: {
      ru: "Благотворительная лотерея",
      en: "Charitable Lottery"
    },
    description: {
      ru: "Пусть каждый принесёт небольшой приз, а вырученные деньги направьте на благотворительность. Праздник с добрым делом!",
      en: "Have everyone bring a small prize. Donate the proceeds to charity. A festive event with a good cause!"
    },
    difficulty: 2,
    cost: 2,
    funFactor: 4
  },
  {
    id: 49,
    title: {
      ru: "Ужин при свечах",
      en: "Candlelit Dinner"
    },
    description: {
      ru: "Выключите основной свет и украсьте пространство свечами. Погрузитесь в уютную атмосферу и наслаждайтесь спокойной беседой.",
      en: "Turn off the main lights and decorate the space with candles. Enjoy a cozy atmosphere and calm conversation."
    },
    difficulty: 1,
    cost: 2,
    funFactor: 4
  },
  {
    id: 50,
    title: {
      ru: "Игры детства",
      en: "Childhood Games"
    },
    description: {
      ru: "Вспомните дворовые игры: классики, прятки, «казаки-разбойники». Проведите весь вечер в ностальгической атмосфере.",
      en: "Revisit neighborhood games like hopscotch, hide and seek, or tag. Spend the evening in a nostalgic mood."
    },
    difficulty: 2,
    cost: 1,
    funFactor: 5
  },
  {
    id: 51,
    title: {
      ru: "Ночной городской велопробег",
      en: "Night City Bike Ride"
    },
    description: {
      ru: "Для любителей спорта: украсьте велосипеды гирляндами и совершите велопробег по ночному городу, встречая первый рассвет года.",
      en: "For sports enthusiasts: decorate your bikes with string lights and take a night ride around the city, greeting the year's first sunrise."
    },
    difficulty: 4,
    cost: 2,
    funFactor: 4
  },
  {
    id: 52,
    title: {
      ru: "Новогодние комиксы",
      en: "New Year's Comics"
    },
    description: {
      ru: "Сделайте небольшие комиксы о том, как вы провели год. Поделитесь ими друг с другом и вспомните самые забавные моменты.",
      en: "Create short comics about how you spent the year. Share them with each other and recall the funniest moments."
    },
    difficulty: 3,
    cost: 1,
    funFactor: 5
  },
  {
    id: 53,
    title: {
      ru: "Авангардный новогодний показ мод",
      en: "Avant-Garde New Year's Fashion Show"
    },
    description: {
      ru: "Создайте костюмы из подручных материалов (газет, фольги, упаковочной бумаги) и пройдитесь по импровизированному подиуму.",
      en: "Design costumes from improvised materials (newspapers, foil, wrapping paper) and walk an improvised runway."
    },
    difficulty: 4,
    cost: 2,
    funFactor: 5
  },
  {
    id: 54,
    title: {
      ru: "«Своя игра» на новогоднюю тематику",
      en: "\"Jeopardy\" with a New Year's Twist"
    },
    description: {
      ru: "Подготовьте вопросы о традициях встречи Нового года в разных странах, о символике праздника и т.д. Проведите викторину!",
      en: "Prepare trivia questions about New Year traditions in different countries, holiday symbols, and more. Hold a quiz night!"
    },
    difficulty: 3,
    cost: 2,
    funFactor: 5
  },
  {
    id: 55,
    title: {
      ru: "Новогодняя благотворительная ярмарка",
      en: "New Year's Charity Fair"
    },
    description: {
      ru: "Изготавливайте хендмейд украшения или печенье и продавайте их на небольшом домашнем «базарчике». Выручку отдайте в фонд помощи.",
      en: "Create handmade ornaments or cookies and sell them at a small home 'bazaar.' Donate the proceeds to a relief fund."
    },
    difficulty: 4,
    cost: 3,
    funFactor: 4
  },
  {
    id: 56,
    title: {
      ru: "Вечер новогодних историй у камина",
      en: "New Year's Stories by the Fireplace"
    },
    description: {
      ru: "Если у вас есть камин или хотя бы свечи, соберитесь вокруг и расскажите мистические и веселые зимние истории.",
      en: "If you have a fireplace or even just candles, gather around and share mystical or funny winter stories."
    },
    difficulty: 2,
    cost: 1,
    funFactor: 4
  },
  {
    id: 57,
    title: {
      ru: "Праздничная фотобудка",
      en: "Holiday Photo Booth"
    },
    description: {
      ru: "Оформите небольшую зону с праздничным фоном, шляпами и бутафорией. Гости могут фотографироваться и забирать фотокарточки на память.",
      en: "Set up a small area with a festive backdrop, hats, and props. Guests can take photos and keep them as souvenirs."
    },
    difficulty: 2,
    cost: 2,
    funFactor: 5
  },
  {
    id: 58,
    title: {
      ru: "Новогодний турнир по видеоиграм",
      en: "New Year's Video Game Tournament"
    },
    description: {
      ru: "Устройте соревновательный вечер в любимых видеоиграх. Подготовьте призы и трансляцию на большой экран, чтобы все могли болеть!",
      en: "Host a competitive night with your favorite video games. Prepare prizes and stream it on a big screen so everyone can cheer!"
    },
    difficulty: 3,
    cost: 2,
    funFactor: 5
  },
  {
    id: 59,
    title: {
      ru: "Творческий марафон",
      en: "Creative Marathon"
    },
    description: {
      ru: "Рисуйте, лепите, шейте, клеите – используйте любой вид творчества, чтобы создать символ Нового года. Потом устроите выставку работ!",
      en: "Paint, sculpt, sew, or glue—use any form of creativity to create a symbol of the New Year. Then hold an exhibition of your work!"
    },
    difficulty: 3,
    cost: 2,
    funFactor: 4
  },
  {
    id: 60,
    title: {
      ru: "Переключение ролей",
      en: "Role Swap"
    },
    description: {
      ru: "Пусть каждый гость вытянет случайный «образ» (повар, ди-джей, официант, бармен). Все меняются обязанностями на вечер!",
      en: "Have each guest draw a random 'role' (cook, DJ, waiter, bartender). Everyone switches responsibilities for the evening!"
    },
    difficulty: 2,
    cost: 1,
    funFactor: 5
  },
  {
    id: 61,
    title: {
      ru: "Скандинавский Новый год",
      en: "Scandinavian New Year"
    },
    description: {
      ru: "Оформите пространство в минималистичном северном стиле, подайте глёг (скандинавский глинтвейн), выпечку с корицей и украсьте всё свечами.",
      en: "Decorate in a minimalist Nordic style, serve glögg (Scandinavian mulled wine), cinnamon pastries, and adorn everything with candles."
    },
    difficulty: 3,
    cost: 3,
    funFactor: 4
  },
  {
    id: 62,
    title: {
      ru: "Новогодний буткемп",
      en: "New Year's Bootcamp"
    },
    description: {
      ru: "Соберите друзей и проведите совместную зарядку, растяжку, элементы йоги под весёлую музыку. Отличный способ начать год здорово!",
      en: "Gather friends for a group workout, stretching, or yoga set to fun music. It's a great way to kick off the year on a healthy note!"
    },
    difficulty: 5,
    cost: 1,
    funFactor: 4
  },
  {
    id: 63,
    title: {
      ru: "Мультикультурный вечер",
      en: "Multicultural Evening"
    },
    description: {
      ru: "Пусть каждый приготовит короткую презентацию о Новогодних традициях в другой стране. Обсудите отличия и попробуйте их воплотить!",
      en: "Have each person prepare a short presentation about New Year's traditions in another country. Discuss the differences and try them out!"
    },
    difficulty: 3,
    cost: 2,
    funFactor: 4
  },
  {
    id: 64,
    title: {
      ru: "День сюрпризов",
      en: "Day of Surprises"
    },
    description: {
      ru: "В течение всего 31 декабря устраивайте друг другу мелкие неожиданные приятные сюрпризы: записки, стикеры, маленькие подарки.",
      en: "Throughout December 31st, surprise each other with small, pleasant gestures: notes, stickers, or little gifts."
    },
    difficulty: 1,
    cost: 2,
    funFactor: 4
  },
  {
    id: 65,
    title: {
      ru: "Музыкальная гостиная",
      en: "Music Salon"
    },
    description: {
      ru: "Попросите каждого подготовить по одной-две песни для исполнения. Можно аккомпанировать на гитаре или синтезаторе. Домашний концерт гарантирован!",
      en: "Ask everyone to prepare one or two songs to perform. You can accompany on guitar or keyboard. A home concert is guaranteed!"
    },
    difficulty: 3,
    cost: 2,
    funFactor: 5
  },
  {
    id: 66,
    title: {
      ru: "Зимний велнес-день",
      en: "Winter Wellness Day"
    },
    description: {
      ru: "Сауна или баня, горячие напитки, процедуры по уходу за кожей. Расслабьтесь и войдите в новый год полными сил и энергии.",
      en: "Enjoy a sauna or bath, hot drinks, and skincare treatments. Relax and enter the New Year recharged and full of energy."
    },
    difficulty: 2,
    cost: 4,
    funFactor: 4
  },
  {
    id: 67,
    title: {
      ru: "Киновечер с сериалом-марафоном",
      en: "TV Series Marathon Night"
    },
    description: {
      ru: "Выберите сериал, который все хотели посмотреть, но не было времени. Устройте марафон серий и встречайте Новый год в перерыве.",
      en: "Pick a series everyone wanted to watch but never had time for. Host a marathon and celebrate the New Year during a break."
    },
    difficulty: 1,
    cost: 2,
    funFactor: 4
  },
  {
    id: 68,
    title: {
      ru: "Постройка ледяного бара",
      en: "Building an Ice Bar"
    },
    description: {
      ru: "Если на улице мороз, соорудите ледяные скульптуры или даже «барную стойку» из снега и льда. Украсьте гирляндами для эффектного вида.",
      en: "If it's freezing outside, construct ice sculptures or even a 'bar counter' out of snow and ice. Decorate it with lights for a stunning look."
    },
    difficulty: 5,
    cost: 2,
    funFactor: 5
  },
  {
    id: 69,
    title: {
      ru: "Новогодний танцевальный баттл",
      en: "New Year's Dance Battle"
    },
    description: {
      ru: "Каждый гость разучивает короткую танцевальную связку и показывает её остальным. Можно выбрать разные жанры музыки!",
      en: "Each guest learns a short dance routine and demonstrates it for everyone. Choose various music genres for extra fun!"
    },
    difficulty: 3,
    cost: 2,
    funFactor: 5
  },
  {
    id: 70,
    title: {
      ru: "Операция «Чистый дом»",
      en: "\"Clean House\" Operation"
    },
    description: {
      ru: "Вместе с друзьями позаботьтесь о генеральной уборке и украшении дома до прихода гостей. Вознаграждение – праздничный ужин!",
      en: "Team up with friends to clean and decorate the house before guests arrive. Your reward: a festive dinner!"
    },
    difficulty: 2,
    cost: 1,
    funFactor: 3
  },
  {
    id: 71,
    title: {
      ru: "Свечи и ароматы",
      en: "Candles and Aromas"
    },
    description: {
      ru: "Используйте ароматические свечи с запахом корицы, хвои, цитрусовых. Создайте атмосферу уюта и тёплого праздника.",
      en: "Use scented candles with cinnamon, pine, or citrus aromas. Create a cozy and warm festive atmosphere."
    },
    difficulty: 1,
    cost: 3,
    funFactor: 4
  },
  {
    id: 72,
    title: {
      ru: "Сохраним природу",
      en: "Nature Preservation"
    },
    description: {
      ru: "Посадите небольшое хвойное деревце в горшок вместо срубленной ёлки. Пусть оно растёт и радует вас долгие годы.",
      en: "Plant a small conifer in a pot instead of cutting down a tree. Let it grow and delight you for many years to come."
    },
    difficulty: 4,
    cost: 3,
    funFactor: 4
  },
  {
    id: 73,
    title: {
      ru: "Новогодний арт-фестиваль",
      en: "New Year's Art Festival"
    },
    description: {
      ru: "Объедините друзей и знакомых, которые занимаются музыкой, живописью, танцами. Устройте локальный фестиваль творчества.",
      en: "Bring together friends and acquaintances involved in music, painting, or dance. Organize a local festival of creativity."
    },
    difficulty: 3,
    cost: 2,
    funFactor: 5
  },
  {
    id: 74,
    title: {
      ru: "Исполнитель желаний",
      en: "Wish Granter"
    },
    description: {
      ru: "Каждый тянет из шляпы записку с желанием другого человека, которое нужно осуществить в течение года. Пусть это станет традицией!",
      en: "Everyone draws a note from a hat containing someone else’s wish, which must be fulfilled during the year. Make it an annual tradition!"
    },
    difficulty: 1,
    cost: 2,
    funFactor: 5
  },
  {
    id: 75,
    title: {
      ru: "Новогодние анекдоты и тосты",
      en: "New Year's Jokes and Toasts"
    },
    description: {
      ru: "Пусть каждый подготовит анекдот или тост для праздничного стола. Поделитесь позитивом и весёлыми историями.",
      en: "Have everyone prepare a joke or toast for the festive table. Share positivity and funny stories."
    },
    difficulty: 1,
    cost: 1,
    funFactor: 4
  },
  {
    id: 76,
    title: {
      ru: "Блинная вечеринка",
      en: "Pancake Party"
    },
    description: {
      ru: "Пеките блины и подавайте их с самыми разными начинками: ягодами, икрой, сгущёнкой. Соревнуйтесь, у кого самая интересная начинка!",
      en: "Cook pancakes and serve them with a variety of fillings like berries, caviar, or condensed milk. Compete for the most creative topping!"
    },
    difficulty: 3,
    cost: 3,
    funFactor: 4
  },
  {
    id: 77,
    title: {
      ru: "Игра «Угадай резолюцию»",
      en: "\"Guess the Resolution\" Game"
    },
    description: {
      ru: "Все пишут свою главную цель или желание на год, а потом читают вслух, не называя, чья это идея. Остальные пытаются угадать автора.",
      en: "Everyone writes down their main goal or wish for the year, then reads it aloud without revealing who wrote it. Others try to guess the author."
    },
    difficulty: 1,
    cost: 1,
    funFactor: 5
  },
  {
    id: 78,
    title: {
      ru: "Ночь азиатской кухни",
      en: "Asian Cuisine Night"
    },
    description: {
      ru: "Приготовьте суши, лапшу, димсамы и другие блюда азиатских кухонь. Можно использовать палочки и попробовать есть только ими!",
      en: "Make sushi, noodles, dim sum, and other Asian dishes. Try using chopsticks only for an authentic experience!"
    },
    difficulty: 4,
    cost: 4,
    funFactor: 5
  },
  {
    id: 79,
    title: {
      ru: "Новогодний юмористический «КВН»",
      en: "New Year's Comedy Show (KVN)"
    },
    description: {
      ru: "Разделитесь на команды и придумайте конкурсы: разминка, музыкальное задание, домашнее задание. Пусть шутки и смех наполнят вечер!",
      en: "Split into teams and come up with contests: quick-fire questions, musical tasks, and a homework assignment. Fill the evening with humor and laughter!"
    },
    difficulty: 4,
    cost: 2,
    funFactor: 5
  },
  {
    id: 80,
    title: {
      ru: "DIY фейерверки-конфетти",
      en: "DIY Confetti Fireworks"
    },
    description: {
      ru: "Сделайте безопасные хлопушки и бомбочки с конфетти своими руками. Отличный вариант для помещений и для веселья на улице.",
      en: "Create safe poppers and confetti bombs by hand. It’s perfect for both indoor fun and outdoor excitement."
    },
    difficulty: 3,
    cost: 2,
    funFactor: 4
  },
  {
    id: 81,
    title: {
      ru: "Вспоминаем времена школьной дискотеки",
      en: "School Disco Throwback"
    },
    description: {
      ru: "Составьте плейлист из хитов, под которые танцевали в школе. Украсьте помещение старыми плакатами и пригласите «диджея» в стиле 90-х или 00-х.",
      en: "Compile a playlist of hits you danced to in school. Decorate with old posters and invite a 'DJ' in 90s or 2000s style."
    },
    difficulty: 2,
    cost: 2,
    funFactor: 5
  },
  {
    id: 82,
    title: {
      ru: "Авантюра на свежем воздухе",
      en: "Outdoor Adventure"
    },
    description: {
      ru: "Выберите экстремальное зимнее развлечение: катание на сноуборде, лыжах или тюбинге. Встретьте Новый год на склоне!",
      en: "Choose an extreme winter activity like snowboarding, skiing, or tubing. Welcome the New Year on the slope!"
    },
    difficulty: 5,
    cost: 4,
    funFactor: 5
  },
  {
    id: 83,
    title: {
      ru: "Ночная охота за звёздами",
      en: "Nighttime Star Gazing"
    },
    description: {
      ru: "Выйдите за город, где меньше огней, и посмотрите на звёздное небо. Попробуйте найти созвездия и загадайте желания.",
      en: "Head outside the city where lights are fewer, and gaze at the night sky. Try to identify constellations and make wishes."
    },
    difficulty: 2,
    cost: 1,
    funFactor: 4
  },
  {
    id: 84,
    title: {
      ru: "Челлендж «Без гаджетов»",
      en: "\"No Gadgets\" Challenge"
    },
    description: {
      ru: "Попробуйте провести хотя бы 2-3 часа праздника без телефонов и соцсетей. Полностью погрузитесь в общение и развлечения вживую.",
      en: "Attempt at least 2-3 hours of the celebration without phones or social media. Immerse fully in live conversation and fun."
    },
    difficulty: 3,
    cost: 1,
    funFactor: 4
  },
  {
    id: 85,
    title: {
      ru: "Модная фотосессия под открытым небом",
      en: "Outdoor Fashion Photo Shoot"
    },
    description: {
      ru: "Наденьте самые яркие и стильные наряды, найдите интересные уличные локации и устройте фотосессию на улице. Главное – тепло одеться!",
      en: "Put on your brightest, most stylish outfits, find intriguing street backdrops, and hold a photo shoot outdoors. Just remember to dress warmly!"
    },
    difficulty: 2,
    cost: 2,
    funFactor: 5
  },
  {
    id: 86,
    title: {
      ru: "Ночь горячего шоколада и маршмеллоу",
      en: "Hot Chocolate and Marshmallow Night"
    },
    description: {
      ru: "Поставьте большой котёл с горячим шоколадом, подавайте его с маршмеллоу и взбитыми сливками. Отличный способ согреться и повеселиться.",
      en: "Set up a large pot of hot chocolate, serve it with marshmallows and whipped cream. A perfect way to warm up and have fun."
    },
    difficulty: 2,
    cost: 3,
    funFactor: 5
  },
  {
    id: 87,
    title: {
      ru: "Сюрприз для прохожих",
      en: "Surprise for Strangers"
    },
    description: {
      ru: "Если вы встречаете Новый год на улице, возьмите с собой маленькие подарочки или открытки и дарите их незнакомцам с пожеланиями!",
      en: "If you're celebrating New Year outdoors, bring small gifts or cards to share with strangers, along with your well wishes!"
    },
    difficulty: 3,
    cost: 2,
    funFactor: 5
  },
  {
    id: 88,
    title: {
      ru: "Фондю-вечеринка",
      en: "Fondue Party"
    },
    description: {
      ru: "Сырное и шоколадное фондю с фруктами, хлебом и другими закусками. Элегантное и очень вкусное решение для зимнего вечера!",
      en: "Enjoy cheese and chocolate fondues with fruits, bread, and other snacks. An elegant and delicious option for a winter night!"
    },
    difficulty: 3,
    cost: 4,
    funFactor: 5
  },
  {
    id: 89,
    title: {
      ru: "Новогодний «бал дачников»",
      en: "New Year's \"Country House\" Ball"
    },
    description: {
      ru: "Украсьте дачу в стиле загородного бала: гирлянды, свечи, немного винтажной атмосферы. Танцуйте в тёплых свитерах под любимые песни.",
      en: "Decorate your cottage or country home like a rustic ball: string lights, candles, a slight vintage vibe. Dance in warm sweaters to your favorite songs."
    },
    difficulty: 2,
    cost: 3,
    funFactor: 4
  },
  {
    id: 90,
    title: {
      ru: "Наука и чудеса",
      en: "Science and Wonders"
    },
    description: {
      ru: "Подготовьте несколько простых научных экспериментов (сухой лёд, лава-лампа и т.д.) и ощущайте себя настоящими волшебниками!",
      en: "Set up simple science experiments (dry ice, lava lamp, etc.) and feel like true wizards!"
    },
    difficulty: 3,
    cost: 3,
    funFactor: 5
  },
  {
    id: 91,
    title: {
      ru: "Открытки будущему себе",
      en: "Postcards to Your Future Self"
    },
    description: {
      ru: "Создайте открытку с посланием, которое вы вскроете через год. Украсьте её блёстками, рисунками, фотографиями.",
      en: "Make a postcard with a message to be opened in a year. Decorate it with glitter, drawings, or photos."
    },
    difficulty: 2,
    cost: 2,
    funFactor: 4
  },
  {
    id: 92,
    title: {
      ru: "Новогодний Арт-обмен",
      en: "New Year's Art Exchange"
    },
    description: {
      ru: "Договоритесь, что каждый делает творческую работу (рисунок, поделку, песню) и дарит её в полночь кому-то из друзей.",
      en: "Agree that each person creates a piece of art (a drawing, craft, or song) and gifts it to someone at midnight."
    },
    difficulty: 3,
    cost: 2,
    funFactor: 5
  },
  {
    id: 93,
    title: {
      ru: "Экстрим-купание в проруби",
      en: "Ice Plunge"
    },
    description: {
      ru: "Для самых смелых – окунитесь в прорубь или в ледяную купель. Заряд бодрости на весь год обеспечен!",
      en: "For the bold: take a plunge into an ice hole or cold bath. A guaranteed boost of energy for the year ahead!"
    },
    difficulty: 5,
    cost: 1,
    funFactor: 5
  },
  {
    id: 94,
    title: {
      ru: "Выпуск новогодней газеты",
      en: "New Year's Newspaper"
    },
    description: {
      ru: "Соберите новости, фото и смешные случаи из уходящего года и оформите их как «семейную» или «дружескую» газету.",
      en: "Collect news, photos, and funny stories from the past year and design them as a 'family' or 'friend' newspaper."
    },
    difficulty: 3,
    cost: 2,
    funFactor: 4
  },
  {
    id: 95,
    title: {
      ru: "Ночь экспериментальной кухни",
      en: "Experimental Cuisine Night"
    },
    description: {
      ru: "Придумайте новые рецепты из обычных продуктов. Делитесь результатами и выбирайте, какое «изобретение» стало самым вкусным.",
      en: "Invent new recipes from everyday ingredients. Share the results and vote on the most delicious 'creation.'"
    },
    difficulty: 4,
    cost: 3,
    funFactor: 5
  },
  {
    id: 96,
    title: {
      ru: "Вечер в театре теней",
      en: "Shadow Theater Evening"
    },
    description: {
      ru: "Используйте простые декорации и фонарик, чтобы показать мини-спектакль с теневыми куклами. Это магически и необычно!",
      en: "Use simple props and a flashlight to present a mini-shadow puppet show. It's magical and unique!"
    },
    difficulty: 3,
    cost: 1,
    funFactor: 4
  },
  {
    id: 97,
    title: {
      ru: "Праздник благородных сыров и вин",
      en: "Fine Cheeses and Wine Festival"
    },
    description: {
      ru: "Создайте дегустационный стол с разными видами сыров и вин. Обсуждайте букеты и сочетания вкусов, как на светском приёме.",
      en: "Arrange a tasting table with various cheeses and wines. Discuss flavors and pairings like at a sophisticated reception."
    },
    difficulty: 3,
    cost: 5,
    funFactor: 4
  },
  {
    id: 98,
    title: {
      ru: "Песни у костра",
      en: "Songs by the Bonfire"
    },
    description: {
      ru: "Если есть возможность развести безопасный костёр, распевайте новогодние песни и любимые хиты под гитару в компании друзей.",
      en: "If it's possible to build a safe bonfire, sing holiday songs and favorite hits with guitar accompaniment among friends."
    },
    difficulty: 3,
    cost: 2,
    funFactor: 5
  },
  {
    id: 99,
    title: {
      ru: "Семейное древо",
      en: "Family Tree"
    },
    description: {
      ru: "Исследуйте свою родословную и создайте визуальную схему на стене. Отличный повод вспомнить бабушек, дедушек и другие поколения.",
      en: "Explore your lineage and create a visual chart on the wall. It's a great way to remember grandparents and past generations."
    },
    difficulty: 4,
    cost: 2,
    funFactor: 4
  },
  {
    id: 100,
    title: {
      ru: "24 часа позитива",
      en: "24 Hours of Positivity"
    },
    description: {
      ru: "В течение последних суток уходящего года фиксируйте только приятные моменты, делитесь хорошими новостями, говорите тёплые слова друг другу.",
      en: "During the final day of the year, focus only on positive moments, share good news, and speak kind words to each other."
    },
    difficulty: 1,
    cost: 1,
    funFactor: 5
  },
  {
    id: 101,
    title: {
      ru: "Бальный танец под бой курантов",
      en: "Ballroom Dance at Midnight"
    },
    description: {
      ru: "Выучите несколько фигур вальса или танго и исполняйте их под бой курантов. Даже если получится не идеально, это будет весело и запоминающе!",
      en: "Learn a few steps of waltz or tango and dance them when the clock strikes midnight. Even if it's not perfect, it'll be fun and memorable!"
    },
    difficulty: 3,
    cost: 2,
    funFactor: 5
  },
  {
    id: 102,
    title: {
      ru: "Ночь хороших новостей",
      en: "Night of Good News"
    },
    description: {
      ru: "Каждый ищет и рассказывает только позитивные новости, которые случились за год. Создайте атмосферу оптимизма и вдохновения!",
      en: "Everyone finds and shares only positive news stories from the year. Create an atmosphere of optimism and inspiration!"
    },
    difficulty: 1,
    cost: 1,
    funFactor: 4
  },
  {
    id: 103,
    title: {
      ru: "Марафон мини-спектаклей",
      en: "Mini-Play Marathon"
    },
    description: {
      ru: "Поделитесь по ролям знакомыми сказками или комедийными сценками. Можно использовать костюмы или маски — чем абсурднее, тем веселее!",
      en: "Perform familiar fairy tales or comedic skits in parts. Use costumes or masks—the more absurd, the better!"
    },
    difficulty: 4,
    cost: 2,
    funFactor: 5
  },
  {
    id: 104,
    title: {
      ru: "Украшение новогоднего стола в стиле «фуршет»",
      en: "Buffet-Style New Year's Table"
    },
    description: {
      ru: "Замените привычный застольный формат на фуршет. Расставьте разные закуски по станциям — гости могут свободно передвигаться и общаться.",
      en: "Swap the traditional sit-down dinner for a buffet style. Set up various snack stations so guests can mingle freely."
    },
    difficulty: 2,
    cost: 3,
    funFactor: 4
  },
  {
    id: 105,
    title: {
      ru: "Турнир настольного тенниса (или бильярда)",
      en: "Table Tennis (or Billiards) Tournament"
    },
    description: {
      ru: "Если есть возможность, организуйте турнир по настольному теннису или бильярду. Победителю вручается символический кубок!",
      en: "If possible, hold a table tennis or billiards tournament. Award a symbolic trophy to the winner!"
    },
    difficulty: 3,
    cost: 3,
    funFactor: 5
  },
  {
    id: 106,
    title: {
      ru: "Песенный баттл хитов 90-х",
      en: "90s Hits Singing Battle"
    },
    description: {
      ru: "Составьте плейлист из самых запоминающихся композиций 90-х и соревнуйтесь, кто лучше исполнит караоке-версию.",
      en: "Make a playlist of the most memorable 90s hits and compete to see who can sing the best karaoke version."
    },
    difficulty: 2,
    cost: 2,
    funFactor: 5
  },
  {
    id: 107,
    title: {
      ru: "«Джентльмены удачи» в Новый год",
      en: "\"Gentlemen of Fortune\" New Year"
    },
    description: {
      ru: "Покажите любимые советские новогодние фильмы или комедии, а потом сыграйте сценки оттуда. Всеобщее веселье гарантировано!",
      en: "Screen favorite Soviet New Year films or comedies, then reenact scenes from them. Guaranteed fun for everyone!"
    },
    difficulty: 3,
    cost: 1,
    funFactor: 4
  },
  {
    id: 108,
    title: {
      ru: "Утренняя зарядка первого января",
      en: "Morning Workout on January 1st"
    },
    description: {
      ru: "После ночных гуляний соберитесь ранним утром (или ближе к обеду), чтобы провести лёгкую зарядку или растяжку на свежем воздухе.",
      en: "After the night’s festivities, gather early in the morning (or around noon) for a light workout or stretching in the fresh air."
    },
    difficulty: 2,
    cost: 1,
    funFactor: 4
  },
  {
    id: 109,
    title: {
      ru: "Полька-матолька: танцевальный урок на свежем воздухе",
      en: "Outdoor Polka Dance Lesson"
    },
    description: {
      ru: "Выйдите во двор или на большую веранду, включите веселую музыку и попробуйте разучить несколько танцевальных движений в командном стиле.",
      en: "Head to the yard or a spacious veranda, turn on some lively music, and learn a few dance moves as a group."
    },
    difficulty: 3,
    cost: 1,
    funFactor: 5
  },
  {
    id: 110,
    title: {
      ru: "Новогоднее пение гимна",
      en: "New Year's Anthem Singing"
    },
    description: {
      ru: "Если вы встречаете год с патриотическим настроем, можно хором исполнить государственный гимн или гимн своего региона в праздничном стиле.",
      en: "If you're feeling patriotic, perform your national or regional anthem in a festive style as the New Year arrives."
    },
    difficulty: 2,
    cost: 1,
    funFactor: 3
  },
  {
    id: 111,
    title: {
      ru: "Прощальная открытка уходящему году",
      en: "Farewell Card to the Passing Year"
    },
    description: {
      ru: "Создайте открытку, посвящённую уходящему году: благодарность за всё хорошее и прощание с трудностями. Пусть каждый впишет пару тёплых слов.",
      en: "Make a card dedicated to the passing year: express gratitude for the good and bid farewell to the hardships. Everyone can add a few kind words."
    },
    difficulty: 2,
    cost: 1,
    funFactor: 4
  },
  {
    id: 112,
    title: {
      ru: "Квест-расписание: начинаем год с точностью",
      en: "Quest Schedule: Start the Year with Precision"
    },
    description: {
      ru: "Составьте точное расписание для квеста — каждые 15–30 минут новое задание или забава. Гости не заскучают ни на минуту!",
      en: "Create a precise schedule for a quest—every 15–30 minutes a new task or game. Your guests won't have a dull moment!"
    },
    difficulty: 4,
    cost: 2,
    funFactor: 5
  },
  {
    id: 113,
    title: {
      ru: "Новогодний «Escape Room» дома",
      en: "New Year's Escape Room at Home"
    },
    description: {
      ru: "Организуйте квест-комнату прямо у себя в квартире. Подготовьте загадки и тайники, чтобы выбраться из «закрытой» комнаты до полуночи.",
      en: "Set up an escape room in your own home. Prepare riddles and hidden clues to solve before midnight!"
    },
    difficulty: 5,
    cost: 3,
    funFactor: 5
  },
  {
    id: 114,
    title: {
      ru: "Сладкая ночь вафель и панкейков",
      en: "Sweet Night of Waffles and Pancakes"
    },
    description: {
      ru: "Настройте вафельницу и сковородку: каждый гостевой час — новая порция вафель или панкейков с разными топингами!",
      en: "Get out the waffle maker and pan: each hour, whip up a new batch of waffles or pancakes with different toppings!"
    },
    difficulty: 2,
    cost: 3,
    funFactor: 5
  },
  {
    id: 115,
    title: {
      ru: "Сольный концерт выходящего года",
      en: "Farewell-Year Solo Concert"
    },
    description: {
      ru: "Пусть каждый подготовит мини-выступление: песня, танец, чтение стихов. Всё, что по душе, лишь бы радовать остальных!",
      en: "Have each person prepare a mini-performance: a song, a dance, or a poetry reading—anything that brings joy to the group!"
    },
    difficulty: 3,
    cost: 1,
    funFactor: 4
  },
  {
    id: 116,
    title: {
      ru: "Новогодний бранч",
      en: "New Year's Brunch"
    },
    description: {
      ru: "Встретьте новый год в спокойном режиме и перенесите основное застолье на позднее утро 1 января. Можно пригласить гостей на бранч!",
      en: "Ring in the New Year in a relaxed manner and move the main feast to late morning on January 1st. Invite guests for brunch!"
    },
    difficulty: 1,
    cost: 2,
    funFactor: 3
  },
  {
    id: 117,
    title: {
      ru: "Битва снеговиков",
      en: "Snowman Battle"
    },
    description: {
      ru: "Если есть снег, устраивайте соревнование: кто быстрее вылепит самого большого снеговика. У кого фигурка оригинальнее?",
      en: "If there's snow, hold a competition: who can build the biggest snowman the fastest? Whose is the most creative?"
    },
    difficulty: 4,
    cost: 1,
    funFactor: 5
  },
  {
    id: 118,
    title: {
      ru: "Гастрономическое путешествие в Италию",
      en: "Gastronomic Trip to Italy"
    },
    description: {
      ru: "Пицца, паста, тирамису — настройте итальянскую атмосферу и попробуйте приготовить всё это дома. Можно даже выучить пару итальянских фраз!",
      en: "Pizza, pasta, tiramisu—create an Italian atmosphere and try making it all at home. You can even learn a few Italian phrases!"
    },
    difficulty: 4,
    cost: 4,
    funFactor: 5
  },
  {
    id: 119,
    title: {
      ru: "Фестиваль варенья",
      en: "Jam Festival"
    },
    description: {
      ru: "Если у вас или у друзей есть разные виды варенья, устройте дегустацию. Готовьте блины, тосты и обсуждайте вкусовые сочетания.",
      en: "If you or your friends have various types of jam, hold a tasting. Make pancakes or toast and discuss flavor pairings."
    },
    difficulty: 2,
    cost: 2,
    funFactor: 4
  },
  {
    id: 120,
    title: {
      ru: "Новогодние «упаковочные бои»",
      en: "New Year's Gift-Wrapping Contest"
    },
    description: {
      ru: "Купите кучу разноцветной бумаги, лент, наклеек. Устройте гонку по самой креативной упаковке подарков! Победитель получает свой подарок первым.",
      en: "Buy lots of colorful paper, ribbons, and stickers. Race to see who can wrap gifts in the most creative way! The winner gets their gift first."
    },
    difficulty: 3,
    cost: 2,
    funFactor: 5
  },
  {
    id: 121,
    title: {
      ru: "Парад животных (для владельцев питомцев)",
      en: "Pet Parade (For Pet Owners)"
    },
    description: {
      ru: "Оденьте своих питомцев в нарядные костюмы или просто яркие аксессуары. Устройте фотосессию и поделитесь кадрами в соцсетях!",
      en: "Dress your pets in festive costumes or bright accessories. Host a photo shoot and share the pictures on social media!"
    },
    difficulty: 2,
    cost: 2,
    funFactor: 5
  },
  {
    id: 122,
    title: {
      ru: "Эффект домино",
      en: "Domino Effect"
    },
    description: {
      ru: "Создайте масштабную композицию из домино или других предметов (книжек, кубиков), которую потом эффектно уроните под бой курантов.",
      en: "Build a large domino setup (using books, blocks, etc.) and topple it dramatically as the clock strikes midnight."
    },
    difficulty: 4,
    cost: 2,
    funFactor: 5
  },
  {
    id: 123,
    title: {
      ru: "Открытка добрых пожеланий",
      en: "Kind Wishes Card"
    },
    description: {
      ru: "Пусть каждый заготовит несколько позитивных пожеланий и прикрепит их на одну большую открытку. Получится коллективный шедевр доброты!",
      en: "Have everyone prepare a few positive wishes and attach them to one big card. It becomes a collective masterpiece of kindness!"
    },
    difficulty: 1,
    cost: 1,
    funFactor: 4
  },
  {
    id: 124,
    title: {
      ru: "Урок парных танцев",
      en: "Couple Dance Lesson"
    },
    description: {
      ru: "Пригласите профессионального танцора или найдите обучающие видео. Разучите основные движения сальсы, румбы или свинга!",
      en: "Invite a professional dancer or find tutorial videos. Learn the basic steps of salsa, rumba, or swing!"
    },
    difficulty: 4,
    cost: 3,
    funFactor: 5
  },
  {
    id: 125,
    title: {
      ru: "Геокешинг в новогоднюю ночь",
      en: "Geocaching on New Year's Night"
    },
    description: {
      ru: "Заранее спрячьте небольшие «клады» в парке или во дворе. В ночь на 1 января отправляйтесь на их поиски по координатам или загадкам.",
      en: "Hide small 'treasures' in a park or yard beforehand. On New Year's night, search for them using coordinates or riddles."
    },
    difficulty: 5,
    cost: 2,
    funFactor: 5
  },
  {
    id: 126,
    title: {
      ru: "Новогодний «сладкий крокенбуш»",
      en: "New Year's Croquembouche"
    },
    description: {
      ru: "Попробуйте сделать французскую башню из профитролей, скрепленных карамелью. Зрелищно, вкусно и весьма празднично!",
      en: "Try making the classic French tower of cream puffs held together with caramel. It's impressive, delicious, and super festive!"
    },
    difficulty: 4,
    cost: 4,
    funFactor: 5
  },
  {
    id: 127,
    title: {
      ru: "Домашний планетарий",
      en: "Home Planetarium"
    },
    description: {
      ru: "Приобретите проектор звёздного неба или соорудите самодельный вариант. Устройте романтическое наблюдение за «звёздами» прямо в комнате.",
      en: "Get a star projector or make a DIY version. Enjoy a romantic 'star gazing' session right inside your room."
    },
    difficulty: 3,
    cost: 3,
    funFactor: 5
  },
  {
    id: 128,
    title: {
      ru: "Сотворите свой рождественский вертеп",
      en: "Create Your Own Nativity Scene"
    },
    description: {
      ru: "Сделайте вместе с детьми и друзьями маленькие фигурки, украсьте уголок дома или двора сценкой Рождества в своём стиле.",
      en: "Craft small figures with friends and family, decorating a corner of your home or yard with your own version of the Nativity scene."
    },
    difficulty: 3,
    cost: 2,
    funFactor: 4
  },
  {
    id: 129,
    title: {
      ru: "Кинопоказ под открытым небом",
      en: "Open-Air Movie Night"
    },
    description: {
      ru: "Если погода позволяет и есть проектор, устройте зимний киносеанс на улице. Горячее какао или чай спасут вас от холода!",
      en: "If the weather permits and you have a projector, host a winter movie screening outdoors. Hot cocoa or tea will keep you warm!"
    },
    difficulty: 4,
    cost: 3,
    funFactor: 5
  },
  {
    id: 130,
    title: {
      ru: "Дискотека в наушниках",
      en: "Silent Disco"
    },
    description: {
      ru: "Попробуйте формат «тихой вечеринки», когда все танцуют в наушниках под разную музыку. Интересное зрелище для сторонних наблюдателей!",
      en: "Try a 'silent party' where everyone dances wearing headphones playing different music. It's fascinating to watch from the outside!"
    },
    difficulty: 3,
    cost: 3,
    funFactor: 5
  },
  {
    id: 131,
    title: {
      ru: "Где мы встретимся через год?",
      en: "Where Will We Meet Next Year?"
    },
    description: {
      ru: "Пусть каждый загадает место, где вы соберётесь через год. Напишите его в записке и сохраните, чтобы сравнить планы и реальность!",
      en: "Have each person guess a location where you'll all meet next year. Write it on a note and save it to compare plans with reality!"
    },
    difficulty: 1,
    cost: 1,
    funFactor: 4
  },
  {
    id: 132,
    title: {
      ru: "Новогодние кулинарные лайфхаки",
      en: "New Year's Culinary Hacks"
    },
    description: {
      ru: "Соберите и продемонстрируйте друг другу полезные лайфхаки: быстрые способы нарезки, оригинальная сервировка, необычные заправки.",
      en: "Collect and showcase useful kitchen hacks to each other: quick chopping methods, unique plating, or unusual dressings."
    },
    difficulty: 2,
    cost: 2,
    funFactor: 4
  },
  {
    id: 133,
    title: {
      ru: "Охота на метеориты желаний",
      en: "Meteor Wish Hunt"
    },
    description: {
      ru: "Организуйте игру: по всему дому или двору спрятаны «метеориты» с маленькими записками-пожеланиями. Их нужно найти и собрать!",
      en: "Organize a game: hide 'meteors' with small wish notes around the house or yard. Guests must find and collect them!"
    },
    difficulty: 3,
    cost: 1,
    funFactor: 5
  },
  {
    id: 134,
    title: {
      ru: "«Пепперминт»-бар",
      en: "\"Peppermint\" Bar"
    },
    description: {
      ru: "Сделайте коктейли и десерты с мятным сиропом, леденцами, шоколадом. Обставьте стол в красно-белой цветовой гамме и наслаждайтесь вкусом праздника!",
      en: "Prepare cocktails and desserts with peppermint syrup, candy canes, and chocolate. Decorate the table in red and white for a festive flavor!"
    },
    difficulty: 2,
    cost: 3,
    funFactor: 5
  },
  {
    id: 135,
    title: {
      ru: "Уличный мастер-класс по фигурному катанию",
      en: "Outdoor Figure Skating Workshop"
    },
    description: {
      ru: "Если рядом есть каток, пригласите друга, умеющего красиво кататься на коньках. Пусть покажет базовые элементы и устроит мини-шоу!",
      en: "If there's an ice rink nearby, invite a friend skilled in figure skating. Let them demonstrate basic elements and put on a mini show!"
    },
    difficulty: 4,
    cost: 2,
    funFactor: 5
  },
  {
    id: 136,
    title: {
      ru: "Разрисовка окон снежинками",
      en: "Snowflake Window Painting"
    },
    description: {
      ru: "Используйте специальные маркеры или краски для окон. Нарисуйте узоры, снежинки и забавные сценки зимы прямо на стекле.",
      en: "Use special window markers or paints. Draw patterns, snowflakes, and fun winter scenes directly on the glass."
    },
    difficulty: 2,
    cost: 2,
    funFactor: 4
  },
  {
    id: 137,
    title: {
      ru: "Живая музыка в гостиной",
      en: "Live Music in the Living Room"
    },
    description: {
      ru: "Пригласите музыкантов или играйте сами на гитаре, скрипке, синтезаторе. Новогодние мелодии в живом исполнении создают волшебство!",
      en: "Invite musicians or play instruments yourselves—guitar, violin, or keyboard. Live renditions of New Year tunes add magic to the atmosphere!"
    },
    difficulty: 3,
    cost: 3,
    funFactor: 5
  },
  {
    id: 138,
    title: {
      ru: "Семейная шоу-программа",
      en: "Family Show Program"
    },
    description: {
      ru: "Каждая семья или каждый участник готовит номер (танец, песню, фокус), а потом все выступают по очереди. Можно записать на видео!",
      en: "Each family or individual prepares an act (dance, song, trick), then everyone performs in turn. You can record it on video!"
    },
    difficulty: 3,
    cost: 2,
    funFactor: 5
  },
  {
    id: 139,
    title: {
      ru: "Новогодний марафон «ЗОЖ»",
      en: "\"Healthy Lifestyle\" New Year Marathon"
    },
    description: {
      ru: "Начните год с полезных привычек: договоритесь не есть сладкое всю ночь, пить только полезные напитки и выполнить 50 приседаний к утру!",
      en: "Begin the year with healthy habits: agree to avoid sweets all night, drink only healthy beverages, and do 50 squats by morning!"
    },
    difficulty: 5,
    cost: 1,
    funFactor: 3
  },
  {
    id: 140,
    title: {
      ru: "«Киномонтаж» года",
      en: "\"Year in Review\" Film Montage"
    },
    description: {
      ru: "Соберите нарезку из коротких видео, снятых в течение года, добавьте музыку и титры с пожеланиями. Покажите всем за праздничным столом!",
      en: "Compile short video clips taken throughout the year, add music and greetings as titles, and present it to everyone at the festive table!"
    },
    difficulty: 3,
    cost: 2,
    funFactor: 4
  },
  {
    id: 141,
    title: {
      ru: "Глэм-рок вечеринка",
      en: "Glam Rock Party"
    },
    description: {
      ru: "Наряды с блёстками, яркие макияжи, много рока и танцев. Превратите гостиную в маленький концертный зал с ярким светом и дым-машиной!",
      en: "Sparkly outfits, bold makeup, plenty of rock music, and dancing. Turn your living room into a mini concert hall with bright lights and a smoke machine!"
    },
    difficulty: 3,
    cost: 4,
    funFactor: 5
  },
  {
    id: 142,
    title: {
      ru: "Интеллектуальные баталии",
      en: "Intellectual Battles"
    },
    description: {
      ru: "Квиз, «Что? Где? Когда?», брейн-ринг – любой формат интеллектуальных игр на новогоднюю тематику. Пусть мозги поработают!",
      en: "Quiz night, 'What? Where? When?' or a trivia showdown with a New Year's twist. Let your brains get a workout!"
    },
    difficulty: 4,
    cost: 2,
    funFactor: 4
  },
  {
    id: 143,
    title: {
      ru: "Вечер тёплых воспоминаний о бабушках и дедушках",
      en: "Warm Memories of Grandparents Evening"
    },
    description: {
      ru: "Расскажите друг другу семейные легенды, истории из детства старших родственников. Это сближает и передаёт традиции дальше!",
      en: "Share family legends and childhood stories of older relatives. It brings everyone closer and carries traditions forward!"
    },
    difficulty: 1,
    cost: 1,
    funFactor: 4
  },
  {
    id: 144,
    title: {
      ru: "Игра «Кто есть кто?»",
      en: "\"Who Am I?\" Game"
    },
    description: {
      ru: "Прикрепите каждому на лоб стикер с именем персонажа или известной личности. По подсказкам и вопросам «да/нет» нужно угадать, кто ты!",
      en: "Place a sticky note on each person's forehead with the name of a character or famous person. By asking yes/no questions, figure out who you are!"
    },
    difficulty: 2,
    cost: 1,
    funFactor: 5
  },
  {
    id: 145,
    title: {
      ru: "Новогоднее письмо благодарности",
      en: "New Year's Gratitude Letter"
    },
    description: {
      ru: "Напишите письмо человеку, который вам помог в уходящем году, и поблагодарите его. Можно отправить обычной почтой для особого эффекта.",
      en: "Write a letter to someone who helped you this past year, expressing your gratitude. Mailing it the old-fashioned way adds a special touch."
    },
    difficulty: 1,
    cost: 1,
    funFactor: 4
  },
  {
    id: 146,
    title: {
      ru: "Изготовление ледяных подсвечников",
      en: "Making Ice Lanterns"
    },
    description: {
      ru: "Наберите воды в формы (можно добавить ягоды, еловые веточки) и оставьте замерзать на улице или в морозилке. Получатся волшебные ледяные подсвечники!",
      en: "Fill molds with water (add berries or pine branches) and let them freeze outside or in a freezer. You'll get magical ice lanterns!"
    },
    difficulty: 3,
    cost: 1,
    funFactor: 5
  },
  {
    id: 147,
    title: {
      ru: "Боулинг мандаринами",
      en: "Mandarin Bowling"
    },
    description: {
      ru: "Поставьте несколько бутылок или банок, используйте мандарин как мяч для боулинга. Веселое занятие даже в маленьком помещении!",
      en: "Set up bottles or cans and use a mandarin as a bowling ball. It's a fun activity, even in small spaces!"
    },
    difficulty: 1,
    cost: 2,
    funFactor: 5
  },
  {
    id: 148,
    title: {
      ru: "Новогодний «BookCrossing»",
      en: "New Year's BookCrossing"
    },
    description: {
      ru: "Обменяйтесь книгами, которые вы рекомендуете друзьям. Подпишите внутри новогодние пожелания — так вы оставите приятный след.",
      en: "Exchange books you recommend to friends. Write New Year wishes inside them for a lasting, pleasant touch."
    },
    difficulty: 1,
    cost: 1,
    funFactor: 4
  },
  {
    id: 149,
    title: {
      ru: "Праздничный выпуск «радиостанции»",
      en: "Festive Radio Broadcast"
    },
    description: {
      ru: "Создайте домашнюю радиостудию. Пусть каждый сыграет роль ди-джея, включающего музыку, и ведущего, рассказывающего анекдоты и поздравления.",
      en: "Set up a home radio station. Let everyone take turns being the DJ playing music and the host telling jokes and offering greetings."
    },
    difficulty: 3,
    cost: 2,
    funFactor: 5
  },
  {
    id: 150,
    title: {
      ru: "«Карта желаний» на новый год",
      en: "\"Vision Board\" for the New Year"
    },
    description: {
      ru: "Возьмите большой лист и наклейте туда картинки и слова, отражающие ваши мечты и цели. Пусть это будет групповой творческий проект!",
      en: "Take a large sheet and paste pictures and words representing your dreams and goals. Make it a group creative project!"
    },
    difficulty: 2,
    cost: 2,
    funFactor: 5
  }
];

export async function GET() {
  try {
    const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
    return NextResponse.json(randomIdea);
  } catch (error) {
    console.error('Error generating idea:', error);
    return NextResponse.json({ error: 'Failed to generate idea' }, { status: 500 });
  }
}
