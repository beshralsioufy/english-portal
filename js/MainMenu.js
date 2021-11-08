var introLock=0;
var videoInterval;
var targetSub=0;
var projectName="Portal 10a";
//version 1.0
var Subs=[
{id:1,SubsArray:[{Start:9240,End:9840,Text:"Hi there!"},{Start:10120,End:12560,Text:"I’m Claire and I’m sixteen years old."},{Start:13800,End:16440,Text:"Here are five things you don’t know about me."},{Start:20480,End:22360,Text:"I’m really into ice skating."},{Start:23240,End:26160,Text:"I go ice skating three or four times a week."},{Start:27000,End:28800,Text:"There’s nothing I like more!"},{Start:33560,End:35800,Text:"My brother is seven years older than me!"},{Start:36600,End:39800,Text:"His name is Mike and he’s a martial arts instructor."},{Start:40880,End:41560,Text:"Look."},{Start:41560,End:42760,Text:"He’s training."},{Start:43120,End:45440,Text:"He’s crazy about taekwondo."},{Start:49680,End:52000,Text:"I can’t stand reggae music."},{Start:56280,End:59640,Text:"I receive about twenty text messages every day."},{Start:60960,End:63600,Text:"More than half of them are from my best friend."},{Start:68120,End:69920,Text:"My best friend’s name is Leah."},{Start:70440,End:72840,Text:"She’s one of the kindest people I know."},{Start:73680,End:76760,Text:"We met two years ago at an Ed Sheeran concert."},{Start:77440,End:79200,Text:"We’re both big fans!"},{Start:81320,End:84440,Text:"Time for me to go. Thanks for watching!"}]},
{id:2,SubsArray:[{Start:6800,End:7800,Text:"Billy B!"},{Start:8160,End:9760,Text:"I <span style='color:blue'>love</span> your videos!"},{Start:10160,End:13760,Text:"Thanks! Have you got any brothers or sisters?"},{Start:14200,End:15720,Text:"I’ve got a brother."},{Start:16080,End:17800,Text:" He<span style='color:blue'>’s studying</span> at university."},{Start:18200,End:19880,Text:"I’ve got an older sister."},{Start:20480,End:22280,Text:"What’s your sister like?"},{Start:22800,End:25880,Text:"Well, she’s bossy and a bit quick-tempered."},{Start:26400,End:27920,Text:"She <span style='color:blue'>always tells</span> me what to do "},{Start:27920,End:29520,Text:"and we <span style='color:blue'>often argue</span>. "},{Start:29880,End:32360,Text:"Ouch! I’ve got an older brother,"},{Start:32360,End:34120,Text:"so I <span style='color:blue'>know</span> the feeling."}]},
{id:3,SubsArray:[{Start:7320,End:8520,Text:"What <span style='color:blue'>happened</span> when you <span style='color:blue'>started</span> "},{Start:8520,End:10800,Text:"the digital detox challenge?"},{Start:12000,End:13840,Text:"It <span style='color:blue'>was</span> so boring in the beginning. "},{Start:13840,End:15720,Text:" I <span style='color:blue'>didn’t know</span> what to do!"},{Start:15720,End:18440,Text:"After a few days though, things <span style='color:blue'>got</span> better. "},{Start:18440,End:19440,Text:"I <span style='color:blue'>read</span> books, "},{Start:19440,End:20520,Text:"I <span style='color:blue'>rode</span> my bike "},{Start:20520,End:23800,Text:"and I <span style='color:blue'>had</span> time for my favourite hobby – painting!"},{Start:24960,End:27000,Text:" What <span style='color:blue'>did</span> you <span style='color:blue'>learn</span> from the challenge?"},{Start:27920,End:29840,Text:" My friends and I <span style='color:blue'>used to check</span> our phones "},{Start:29840,End:32040,Text:"constantly when we <span style='color:blue'>were</span> together."},{Start:32040,End:33800,Text:"Now we put them aside for a while"},{Start:33800,End:36840,Text:" We talk more and have more fun"}]},
{id:4,SubsArray:[{Start:6840,End:8560,Text:"I love martial arts. "},{Start:8560,End:11640,Text:" I started out with judo when I was very young, "},{Start:11640,End:14120,Text:" and managed to get <span style='color:blue'>the highest</span> belt. "},{Start:14480,End:16840,Text:" Recently I started doing taekwondo. "},{Start:17160,End:19080,Text:" It’s <span style='color:blue'>the most popular</span> form of martial art "},{Start:19080,End:20480,Text:"at my school. "},{Start:20480,End:23160,Text:"Taekwondo is <span style='color:blue'>more difficult than</span> judo."},{Start:23360,End:25120,Text:" I’m not learning taekwondo <span style='color:blue'>as quickly</span> "},{Start:25120,End:27400,Text:"or <span style='color:blue'>as easily as</span> I learnt judo,"},{Start:27400,End:29040,Text:" but I’m certainly not <span style='color:blue'>the worst</span> student "},{Start:29040,End:30320,Text:"in the group!"}]},
{id:34,Parts:[{time:10000},{time:88000}],SubsArray:[{Start:13680,End:15720,Text:"Watch and listen."},{Start:19720,End:21320,Text:"loop"},{Start:25720,End:27720,Text:"LED light"},{Start:31760,End:33720,Text:"tools"},{Start:37520,End:39240,Text:"gloves"},{Start:43440,End:45120,Text:"dirt"},{Start:49680,End:51480,Text:"path "},{Start:55560,End:57280,Text:"paved road"},{Start:61680,End:63400,Text:"pump"},{Start:67720,End:69440,Text:"trail"},{Start:73600,End:75320,Text:"route"},{Start:79520,End:81240,Text:"first aid kit"},{Start:93960,End:96640,Text:"Mountain biking has existed in one form "},{Start:96640,End:99280,Text:"or another since the beginning of cycling."},{Start:100040,End:101640,Text:" In the 19th century,"},{Start:101960,End:104040,Text:"there were few paved roads, "},{Start:104240,End:108120,Text:"so most bikers rode on dirt roads or trails. "},{Start:111000,End:114200,Text:"Mountain biking as a sport did not begin to get"},{Start:114200,End:119000,Text:"popular until the late 1940s and early 1950s. "},{Start:119520,End:122200,Text:"In the United Kingdom and the United States, "},{Start:122480,End:124160,Text:"people started clubs "},{Start:124240,End:126840,Text:"and used to ride their bikes off roads."},{Start:127400,End:128720,Text:"By the 1960s, "},{Start:129240,End:132080,Text:"an American club member had built a special bike "},{Start:132080,End:134000,Text:"which he called ‘mountain bike’."},{Start:135920,End:138840,Text:"Since then the sport has become very popular. "},{Start:139360,End:141520,Text:"The first mountain bike championship "},{Start:141520,End:144720,Text:"was held in the USA in 1983. "},{Start:147160,End:150520,Text:"Mountain biking has many different categories."},{Start:150840,End:152600,Text:"Cross country, for example, "},{Start:152600,End:155960,Text:"is riding a short route from one point to another,"},{Start:156160,End:157360,Text:"or in a loop."},{Start:160440,End:162560,Text:"Another category is trail riding."},{Start:163280,End:165200,Text:"This is riding a longer route "},{Start:165520,End:168720,Text:"along marked trails, tracks and paths, "},{Start:168960,End:171280,Text:"usually through woods and forests. "},{Start:173600,End:176040,Text:"You can go mountain biking almost anywhere"},{Start:176360,End:178120,Text:"and, as with most sports, "},{Start:178400,End:180560,Text:"bikers need the right equipment."},{Start:181320,End:182720,Text:"In addition to the bike, "},{Start:183040,End:186320,Text:"a biker needs protective gloves, goggles, a helmet and pads"},{Start:186320,End:188160,Text:" a helmet and pads"},{Start:188600,End:190440,Text:"It’s also useful to have a pump, "},{Start:190600,End:193360,Text:"some bike tools, a first aid kit "},{Start:193480,End:196280,Text:"and a high-powered LED light."},{Start:197840,End:199320,Text:"Today mountain biking "},{Start:199320,End:202040,Text:"is certainly more popular than it used to be. "},{Start:202600,End:207360,Text:"In fact, in 1996 it became an Olympic sport! "}]},
{id:41,Parts:[{time:9000},{time:40000}],SubsArray:[{Start:13375,End:15500,Text:"Watch and listen."},{Start:20833,End:22208,Text:"blanket"},{Start:26916,End:28791,Text:" sleeping bag"},{Start:32833,End:34250,Text:"snacks"},{Start:48250,End:50291,Text:"Fancy meeting you here, Kurt! "},{Start:50625,End:53833,Text:"Roger! I haven’t seen you for ages!"},{Start:53833,End:55000,Text:" How are things? "},{Start:55125,End:56291,Text:"Cool, mate. "},{Start:56291,End:57500,Text:"Do you remember the time we went "},{Start:57500,End:58875,Text:"to summer camp together? "},{Start:59125,End:62000,Text:"Yeah…. That was eight years ago! "},{Start:62416,End:64208,Text:"Are you getting ready to go camping?"},{Start:64499,End:66541,Text:"Erm… not really. "},{Start:66833,End:68458,Text:"Sorry, I have to run."},{Start:68458,End:70666,Text:" It was great chatting with you! "},{Start:73750,End:75875,Text:"Hi there! How’s it going? "},{Start:76125,End:77000,Text:"Not bad. "},{Start:77291,End:79375,Text:" So, have you got the snacks? "},{Start:79583,End:82291,Text:"Yes. And I see you’ve got the water."},{Start:82291,End:83000,Text:"Yeah."},{Start:83250,End:85250,Text:"I like your sleeping bag. "},{Start:85250,End:86833,Text:"Thanks, it’s new. "},{Start:86916,End:89875,Text:"I couldn’t find my sister’s sleeping bag,"},{Start:89875,End:91583,Text:" so I brought this blanket."},{Start:91583,End:92875,Text:"It’s perfect."},{Start:93291,End:96375,Text:" Hmm… it’s ten to five. Are you ready?"},{Start:96625,End:99666,Text:"Sure. Let’s go and find a spot. "}]},

{id:5,SubsArray:[{Start:9280,End:12500,Text:"Hi! I’m Alfie."},{Start:12760,End:13440,Text:" Last month,"},{Start:13520,End:14680,Text:"I went on a school trip"},{Start:14760,End:15840,Text:" to Paris, France."},{Start:17280,End:19440,Text:" It’s a city which everyone should visit. "},{Start:20600,End:21720,Text:"First, we visited"},{Start:21720,End:23360,Text:"one of the top attractions in Paris"},{Start:23920,End:25040,Text:"the Eiffel Tower. "},{Start:26520,End:28200,Text:"We also visited an art museum "},{Start:28360,End:29840,Text:"which is one of the largest in the world."},{Start:30880,End:32120,Text:"Yes, you guessed it:"},{Start:32880,End:33520,Text:"the Louvre."},{Start:35040,End:36520,Text:" There, I saw the famous <i>Mona Lisa</i>"},{Start:36520,End:38120,Text:"by Leonardo da Vinci! "},{Start:39480,End:40480,Text:" If you visit Paris, "},{Start:40600,End:42320,Text:"you must definitely go on a boat ride"},{Start:42480,End:43200,Text:" on the River Seine."},{Start:43800,End:46360,Text:" We did, and it was an amazing experience."},{Start:48480,End:49040,Text:" Of course,"},{Start:49040,End:50840,Text:"we visited Disneyland too."},{Start:52600,End:54320,Text:"  I didn’t take any pictures, though."},{Start:55160,End:55800,Text:" Why not?"},{Start:56280,End:57920,Text:"I was busy going on all the rides."},{Start:61280,End:63200,Text:"We brought lots of souvenirs back home. "},{Start:64920,End:66560,Text:"I also got a Monopoly board game."},{Start:67360,End:67800,Text:"Oops!"},{Start:68320,End:69880,Text:" That’s not my French Monopoly."},{Start:70480,End:71960,Text:" I hope my sister didn’t lend it"},{Start:71960,End:73320,Text:"to any of her friends again!"}]},
{id:6,SubsArray:[{Start:6880,End:8720,Text:"There’s a model of a giant blue whale"},{Start:8720,End:10200,Text:"<span style='color:blue'>which</span> is hanging from the ceiling! "},{Start:10560,End:11440,Text:"It’s huge!"},{Start:11920,End:13520,Text:"The guide <span style='color:blue'>who</span> was showing us round"},{Start:13520,End:14120,Text:"told us that"},{Start:14120,End:16040,Text:"it’s almost 29 metres long"},{Start:16360,End:18040,Text:"and weighs over 9 tonnes! "},{Start:19880,End:20560,Text:"For me,"},{Start:20560,End:21600,Text:"the dino fan, "},{Start:21600,End:23080,Text:" the dinosaur halls were the best!"},{Start:23800,End:24840,Text:"That’s <span style='color:blue'>where</span> you can find"},{Start:24840,End:26640,Text:" the biggest collection of dinosaur bones"},{Start:26640,End:27600,Text:" in the world."},{Start:28280,End:29960,Text:" My favourite hall was the one with"},{Start:30000,End:32040,Text:"the 65-million year-old fossil"},{Start:32040,End:33560,Text:"of <i>Tyrannosaurus rex</i>"},{Start:34000,End:35400,Text:"and fossils of other dinosaurs"},{Start:35680,End:37200,Text:"<span style='color:blue'>whose</span> names I forget."}]},
{id:7,SubsArray:[{Start:7000,End:7760,Text:"Listen to this!"},{Start:8200,End:9080,Text:" Henley’s Toy Shop"},{Start:9240,End:11160,Text:"is organising a Scrabble tournament tonight."},{Start:11640,End:13520,Text:"What do you have to do to take part?"},{Start:14080,End:15680,Text:"Text them the answer to a question."},{Start:16240,End:17360,Text:"<span style='color:blue'>If</span> your answer<span style='color:blue'> is</span> correct,"},{Start:17720,End:19080,Text:"you <span style='color:blue'>can take part</span> in the tournament."},{Start:19520,End:21320,Text:" Look, <span style='color:blue'>if</span> you<span style='color:blue'> win</span> first prize, "},{Start:21560,End:23640,Text:" you<span style='color:blue'>'ll get</span> a special edition of Scrabble!"},{Start:24040,End:25480,Text:"OK, I’ll take part."},{Start:25760,End:26560,Text:"You never know!"}]},
{id:8,SubsArray:[{Start:6920,End:8000,Text:"After this,"},{Start:8240,End:9520,Text:"Disney started again."},{Start:10480,End:13680,Text:" He created a new cartoon character"},{Start:13760,End:14880,Text:"– Mickey Mouse."},{Start:16040,End:17960,Text:" He made two short films about Mickey"},{Start:18320,End:20000,Text:" but <span style='color:blue'><span style='color:blue'><span style='color:blue'>no one</span></span></span> was interested in them."},{Start:21400,End:23640,Text:" Then he thought of <span style='color:blue'>something </span>else."},{Start:24320,End:26440,Text:" He made a short Mickey Mouse film"},{Start:26720,End:28440,Text:"called <i>Steamboat Willie</i>,"},{Start:28920,End:30520,Text:" which changed <span style='color:blue'><span style='color:blue'>everything</span></span>."},{Start:31400,End:32800,Text:" It was in black and white,"},{Start:33200,End:35720,Text:"and it was the first Disney cartoon "},{Start:35720,End:38080,Text:" that had sound – up until then,"},{Start:38400,End:40080,Text:" all his films were silent!"},{Start:40440,End:42280,Text:"It was a huge success. "}]},
{id:9,Parts:[{time:10000},{time:70000}],SubsArray : [{Start:19610,End:21300,Text:"citrus fruits"},{Start:26370,End:27660,Text:"leaning"},{Start:32290,End:33500,Text:"canal"},{Start:38170,End:39540,Text:"gondola"},{Start:44130,End:45820,Text:"espresso"},{Start:49850,End:50860,Text:"olives"},{Start:56170,End:57100,Text:"crops"},{Start:62410,End:63620,Text:"region"},{Start:76770,End:79340,Text:"Italy is a European country,"},{Start:79010,End:81140,Text:" in the middle of the Mediterranean."},{Start:81690,End:84660,Text:" Its population of 61 million"},{Start:84410,End:87580,Text:"makes it the fourth most populated country"},{Start:87130,End:88140,Text:"in Europe. "},{Start:89490,End:92060,Text:"Italy is easy to find on a map,"},{Start:91970,End:95140,Text:" because it looks like a boot kicking a ball."},{Start:96130,End:97500,Text:"In the north,"},{Start:97370,End:99500,Text:" there are the mountains of the Alps,"},{Start:101450,End:103420,Text:" and the Apennine Mountains"},{Start:103010,End:105340,Text:"run down the middle of the country,"},{Start:105570,End:108700,Text:" making Italy a popular place for skiing."},{Start:112450,End:115100,Text:" In the central and southern regions,"},{Start:114850,End:117780,Text:" the land is excellent for growing crops"},{Start:117650,End:118940,Text:"citrus fruits"},{Start:118650,End:119700,Text:"and olives."},{Start:122770,End:125460,Text:" Italy has two main islands,"},{Start:125530,End:127420,Text:" Sardinia in the west,"},{Start:127250,End:129180,Text:"and Sicily in the south."},{Start:130250,End:133620,Text:" Italy is also home to several volcanoes,"},{Start:133610,End:136740,Text:" including the only active volcano"},{Start:136290,End:137900,Text:"on mainland Europe. "},{Start:138410,End:141020,Text:" Mount Vesuvius is a high risk"},{Start:140730,End:141860,Text:"volcano "},{Start:141650,End:144620,Text:"because it is very close to the city of Naples, "},{Start:144490,End:147260,Text:"which has a population of three million."},{Start:148610,End:151020,Text:"Italy has a long history"},{Start:150890,End:153380,Text:"going back to the Roman Empire "},{Start:152930,End:155260,Text:"over two thousand years ago. "},{Start:156170,End:157740,Text:"Throughout history "},{Start:157290,End:159420,Text:" there were different city states,"},{Start:159490,End:163500,Text:" and Italy only became a country in 1861."},{Start:164770,End:167100,Text:"Rome is the capital city"},{Start:166890,End:169860,Text:" and has many interesting sights to visit,"},{Start:169930,End:171540,Text:" like the Colosseum"},{Start:171250,End:172700,Text:"and the Pantheon. "},{Start:174970,End:176420,Text:" If you take a trip"},{Start:176090,End:177980,Text:" to the region of Tuscany, "},{Start:177890,End:181340,Text:"you can see the famous Leaning Tower of Pisa,"},{Start:181250,End:183100,Text:" which is still standing"},{Start:182810,End:185820,Text:" over 600 years after it was built."},{Start:187650,End:190420,Text:"Venice is also a beautiful city"},{Start:190570,End:192100,Text:" with its canals,"},{Start:192250,End:193340,Text:"gondolas"},{Start:193330,End:195460,Text:"and annual celebrations."},{Start:197370,End:200820,Text:" Florence is an important city for art history"},{Start:200570,End:202460,Text:"and there are many museums."},{Start:204330,End:207660,Text:"The most popular sport in Italy is football. "},{Start:207770,End:210300,Text:"There are many famous football teams"},{Start:210210,End:213100,Text:"and Italy is the second most successful"},{Start:212650,End:214140,Text:" national team"},{Start:213690,End:215180,Text:" in world football"},{Start:215130,End:217820,Text:" having won the World Cup four times. "},{Start:219250,End:222260,Text:"Italian food is known throughout the world,"},{Start:222250,End:226340,Text:"and most countries enjoy eating pizza and pasta."},{Start:227650,End:231540,Text:" As for coffee, for Italians there is only one,"},{Start:231410,End:232780,Text:"the espresso."},{Start:233530,End:237140,Text:"They drink about fourteen billion espressos"},{Start:236690,End:237940,Text:"every year."},{Start:238850,End:240860,Text:"Prendiamo un caffè?"}]},
{id:42,Parts:[{time:9000},{time:52000}],SubsArray:[{Start:13375,End:15500,Text:"Watch and listen."},{Start:20833,End:22208,Text:"exhibition"},{Start:26791,End:28541,Text:"leaflet"},{Start:33500,End:37000,Text:"places of interest"},{Start:38791,End:40083,Text:"ticket"},{Start:44833,End:46958,Text:"city centre "},{Start:61708,End:64333,Text:"Hello, what can I do for you?"},{Start:64541,End:65875,Text:"I’d like some information "},{Start:65875,End:68333,Text:"about local places of interest."},{Start:68750,End:72041,Text:"Do you have anything in particular in mind? "},{Start:72208,End:74291,Text:"Are there any art museums?"},{Start:74541,End:75708,Text:"Certainly."},{Start:75708,End:77666,Text:"If you’re interested in art, "},{Start:77666,End:81666,Text:"you shouldn’t miss the exhibition at the —."},{Start:82333,End:84875,Text:"Sorry, could you repeat that, please?"},{Start:85250,End:91125,Text:"Of course. The — Museum is at 16 …ark Road."},{Start:91458,End:96000,Text:"Tickets cost £11 for adults and £6 for children."},{Start:96250,End:97375,Text:"I see…."},{Start:97750,End:100791,Text:"Have you got any leaflets about the museum?"},{Start:100791,End:102958,Text:"Let me see…."},{Start:102958,End:106041,Text:"Oh, I’m sorry, there aren’t any left. "},{Start:106375,End:109166,Text:"Erm… OK, thanks."},{Start:113958,End:116208,Text:"16 Park Road, please."},{Start:117416,End:119375,Text:"<i>Forty-five minutes later…</i>"},{Start:121083,End:122583,Text:"Excuse me,"},{Start:122583,End:125375,Text:" there’s an art museum on Park Road, right? "},{Start:125583,End:127208,Text:"The Fine Arts Museum?"},{Start:127375,End:129749,Text:"Erm… I’m afraid not."},{Start:130291,End:133166,Text:"The Fine Arts Museum is in the city centre."},{Start:133166,End:134833,Text:" Here, have a look."},{Start:136958,End:143666,Text:"16 Mark Road … Mark Road? Mark Road!"}]},

{id:10,SubsArray:[{Start:9560,End:10600,Text:"Hey, everyone!"},{Start:11000,End:12240,Text:"I’m Adrian."},{Start:13800,End:16000,Text:"My friends and I have taken part in two school "},{Start:16000,End:18240,Text:" contests so far this year."},{Start:20000,End:22600,Text:"The first contest was called Top Brains"},{Start:23240,End:25800,Text:"and we had to solve different brain puzzles."},{Start:27640,End:29880,Text:"The second one was a science contest"},{Start:30680,End:32520,Text:"and we had to build robots."},{Start:34480,End:36320,Text:"I didn’t win first prize,"},{Start:36320,End:38880,Text:"but I love taking part in contests!"},{Start:41000,End:42840,Text:"Hi! I’m Lisa."},{Start:44200,End:47120,Text:"I travelled abroad for the first time last month!"},{Start:48520,End:50760,Text:"I visited my cousins who live in Stockholm, "},{Start:50760,End:51600,Text:"Sweden."},{Start:52560,End:54880,Text:"We spent all weekend sightseeing."},{Start:56280,End:58560,Text:"Have you ever tried salmiak ice cream?"},{Start:58920,End:60160,Text:"It’s black!"},{Start:61200,End:62640,Text:"I didn’t really like it,"},{Start:62640,End:64480,Text:"but my cousins love it!"}]},
{id:11,SubsArray:[{Start:6320,End:9240,Text:"Hey, Lucy! Come and check this out!"},{Start:9520,End:10760,Text:"What is it?... "},{Start:11080,End:11920,Text:"Stamps?"},{Start:12320,End:14760,Text:"Yeah. I<span style='color:blue'>’ve found</span> some really cool ones… "},{Start:15000,End:17240,Text:"Miss Foster <span style='color:blue'>has given</span> us a project to do."},{Start:17480,End:19040,Text:"She <span style='color:blue'>has been</span> abroad many times "},{Start:19040,End:21240,Text:"and she always brings back cool stamps"},{Start:21880,End:23000,Text:"<span style='color:blue'>Have</span> you <span style='color:blue'>ever seen</span> a stamp "},{Start:23000,End:24880,Text:"that’s over 100 years old? "}]},
{id:12,SubsArray:[{Start:7200,End:9320,Text:"Friday, 31 March"},{Start:10000,End:12160,Text:"I <span style='color:blue'>haven’t written</span> for four days. "},{Start:12600,End:14480,Text:" School <span style='color:blue'>has kept</span> me really busy!"},{Start:14960,End:16640,Text:" Today Mr Diaz <span style='color:blue'>had</span> a surprise "},{Start:16640,End:18680,Text:"for me and Raul after school."},{Start:18680,End:21040,Text:"Instead of taking us to a football match, "},{Start:21040,End:22800,Text:"he <span style='color:blue'>took</span> us to a game of <i>pato</i> - "},{Start:22800,End:25520,Text:" the national sport of Argentina."}]},
{id:13,SubsArray:[{Start:5840,End:6760,Text:"Scientists "},{Start:6760,End:10240,Text:"<span style='color:blue'>have been doing</span> research on the brain for years,"},{Start:10240,End:11440,Text:"but for many of us  "},{Start:11440,End:13960,Text:"the teenage brain is still a mystery."},{Start:14800,End:17800,Text:" The brain is made up of a network of connections"},{Start:18280,End:19680,Text:" When people learn something, "},{Start:19680,End:21520,Text:"a new connection is made,"},{Start:21520,End:22840,Text:" and the new information "},{Start:22840,End:25120,Text:"is sent to a different part of the brain,"},{Start:25120,End:27280,Text:" where it becomes a memory"},{Start:27960,End:30320,Text:"Every time we use the new connection,"},{Start:30320,End:33600,Text:"the information is sent faster and more easily."},{Start:34440,End:35280,Text:"This is why "},{Start:35280,End:38240,Text:"when you<span style='color:blue'>’ve been taking</span> the same route for years,"},{Start:38240,End:40760,Text:"it’s not necessary to pay a lot of attention "},{Start:40760,End:42600,Text:"to where you’re going."}]},
{id:35,Parts:[{time:10000},{time:65000}],SubsArray:[{Start:13680,End:15720,Text:"Watch and listen."},{Start:19720,End:21320,Text:"memorise"},{Start:25720,End:27320,Text:"order"},{Start:33240,End:34880,Text:"serve"},{Start:38880,End:40360,Text:"simple"},{Start:44960,End:46360,Text:"trick"},{Start:50840,End:52920,Text:"rock formation"},{Start:57120,End:58280,Text:"rainbow"},{Start:72840,End:75640,Text:"Have you ever tried to memorise information "},{Start:75640,End:77280,Text:"but found it difficult?"},{Start:78640,End:82080,Text:" Can we train our brains to memorise information "},{Start:82360,End:84080,Text:"and if so, how?"},{Start:85320,End:88680,Text:" Well, to a certain extent the answer is YES!"},{Start:89240,End:91480,Text:"We can train ourselves with the help "},{Start:91480,End:93360,Text:"of mnemonic devices!"},{Start:94680,End:97840,Text:"The word ‘mnemonic’ comes from the Greek word "},{Start:97880,End:98600,Text:"mnimi,"},{Start:99120,End:100760,Text:" which means ‘memory’. "},{Start:102480,End:104600,Text:" Devices are things we use to "},{Start:104600,End:106600,Text:"do something in an easier way."},{Start:107360,End:110440,Text:" So, mnemonic devices are tricks "},{Start:110440,End:112920,Text:"to help you remember important information. "},{Start:113680,End:116080,Text:"There are different types of mnemonic devices,"},{Start:116520,End:118240,Text:" and once you know some of them, "},{Start:118600,End:121040,Text:"the great thing is you can create your "},{Start:121040,End:123080,Text:"own memory tricks as well."},{Start:124400,End:126720,Text:"One kind of mnemonic device "},{Start:126840,End:129800,Text:"is to take the first letter of each word you’re trying "},{Start:129800,End:131720,Text:"to learn in the correct order,"},{Start:132160,End:134800,Text:"and make up a new word with them."},{Start:135200,End:137200,Text:"This is called an acronym. "},{Start:137880,End:138680,Text:"For example, "},{Start:138800,End:140720,Text:"say you want to memorise the colours "},{Start:140720,End:143280,Text:"of the rainbow from first to last."},{Start:144000,End:149120,Text:"Well, you can imagine a man named Roy G. Biv "},{Start:149120,End:150080,Text:"to help you! "},{Start:151680,End:154800,Text:"Another kind of mnemonic device is to take "},{Start:154800,End:157280,Text:"the first letter from the words in the order you "},{Start:157280,End:158640,Text:"want to remember them,"},{Start:158960,End:160800,Text:" and make up a short story "},{Start:160960,End:164000,Text:"whose words start with those same letters."},{Start:164600,End:167080,Text:" For example, if you want to memorise "},{Start:167080,End:169440,Text:"the name of the planets of our solar system "},{Start:169440,End:171880,Text:" starting with the one closest to the sun, "},{Start:172280,End:173760,Text:"remember the sentence:"},{Start:173960,End:179920,Text:"My Very Excellent Mother Just Served Us Noodles."},{Start:181080,End:184320,Text:"Mercury Venus Earth Mars "},{Start:184480,End:186000,Text:"Jupiter Saturn"},{Start:186320,End:188720,Text:"Uranus and Neptune. "},{Start:189760,End:192800,Text:"Sometimes, the sillier your story is, "},{Start:193120,End:195160,Text:"the easier it is to remember! "},{Start:196160,End:199240,Text:"But there are also simpler tricks you can use. "},{Start:199720,End:202880,Text:"If you can’t easily remember which is ‘dessert’ "},{Start:202880,End:204400,Text:"and which is ‘desert,’ "},{Start:204960,End:206960,Text:"you can remember that dessert "},{Start:206960,End:211160,Text:"has two s’s because dessert is Super Sweet"},{Start:212720,End:213400,Text:"Or,"},{Start:213800,End:215880,Text:"if you can’t remember the difference between "},{Start:215880,End:219000,Text:"the two types of rock formations found in caves, "},{Start:219280,End:223520,Text:" just remember that stalagmites are on the ground "},{Start:223880,End:226920,Text:"and stalactites are on the ceiling."},{Start:228400,End:230400,Text:"Using mnemonic devices,"},{Start:230440,End:233560,Text:"you’ll experience great success in no time!"},{Start:234000,End:236080,Text:"And, if you need help remembering"},{Start:236080,End:237760,Text:" how to spell success,"},{Start:238080,End:240240,Text:" just remember this chant:"},{Start:241000,End:247000,Text:"S-U-C-C-E-S-S! That is how we spell success!"}]},
{id:43,Parts:[{time:9000},{time:52000}],SubsArray:[{Start:13375,End:15500,Text:"Watch and listen."},{Start:20833,End:22208,Text:"audition"},{Start:26791,End:32749,Text:"rehearse"},{Start:32749,End:34791,Text:"lines"},{Start:38791,End:40083,Text:"stage"},{Start:44708,End:46666,Text:"director"},{Start:59666,End:61666,Text:"Hi, Anne. What’s new? "},{Start:61958,End:64416,Text:"I auditioned for the school play today. "},{Start:64708,End:65666,Text:"You’re kidding."},{Start:66041,End:68166,Text:" I didn’t know you were interested in acting. "},{Start:68333,End:72125,Text:"I am. Actually, I spent all week rehearsing…"},{Start:76583,End:78375,Text:"I have to find Milly Abbot "},{Start:78375,End:80708,Text:"even if it takes me years. "},{Start:81916,End:84875,Text:"... but I had an accident during the audition. "},{Start:85375,End:87875,Text:"I’m sorry to hear that. What happened?"},{Start:88333,End:90458,Text:"Everything was fine in the beginning. "},{Start:91125,End:93916,Text:"Then, as I was saying my last line,"},{Start:93916,End:96541,Text:" I slipped and fell off the stage! "},{Start:101125,End:103333,Text:"I have to find Milly Abbot "},{Start:104916,End:107375,Text:"even if it takes me years."},{Start:108541,End:110666,Text:"Poor you! Are you OK?"},{Start:110875,End:112291,Text:"Yes, I am."},{Start:112291,End:113083,Text:"I was just worried "},{Start:113083,End:115166,Text:"that I wouldn’t get a role in the play."},{Start:115458,End:118083,Text:"I see. So, what happened?"},{Start:118416,End:121291,Text:"Well… I got the leading role!"},{Start:121541,End:123041,Text:"Are you serious?"},{Start:123041,End:123791,Text:"Yes! "},{Start:123791,End:124541,Text:"The directors said  "},{Start:124541,End:126500,Text:"they really liked my performance,"},{Start:126500,End:128958,Text:"especially the part when I jumped off the stage. "},{Start:129291,End:132458,Text:"Wow! That’s the last thing I expected!"}]},

{id:14,SubsArray:[{Start:9680,End:11640,Text:"Hey! This is Caroline."},{Start:12240,End:14560,Text:"Are you ready to listen to my adventure?"},{Start:15920,End:18680,Text:"These days, I’m volunteering at the local library."},{Start:19120,End:21400,Text:"So… yesterday afternoon,"},{Start:21400,End:23320,Text:"while I was organising some books,"},{Start:23600,End:24600,Text:"I heard a scream."},{Start:25960,End:27800,Text:"I immediately left the books on the floor "},{Start:27800,End:29520,Text:"and ran towards the sound."},{Start:30160,End:32400,Text:"When I got there, I saw a little girl."},{Start:32760,End:34680,Text:"She was crying because she had cut herself"},{Start:34680,End:36480,Text:"with one of the pages of a book."},{Start:37080,End:38400,Text:"It was nothing serious, "},{Start:38400,End:40240,Text:"but I ran to get the first-aid kit."},{Start:40880,End:42720,Text:"As I was running back to the girl,"},{Start:42720,End:45280,Text:"I tripped over the books that I had left on the floor "},{Start:45280,End:46400,Text:"and fell down. "},{Start:47880,End:49480,Text:"I was so embarrassed!"},{Start:51000,End:52360,Text:"My knee hurt a lot!"},{Start:53080,End:55400,Text:"The people in the library called my parents,"},{Start:55400,End:58120,Text:"who soon picked me up and took me to hospital."},{Start:58120,End:60440,Text:"But… just as we were getting there,"},{Start:60440,End:62400,Text:"a cyclist crashed into us!"},{Start:62880,End:64720,Text:"Luckily, nobody was injured."},{Start:65520,End:66680,Text:"What a day!"}]},
{id:15,SubsArray:[{Start:9040,End:11680,Text:"<span style='color:blue'>When</span> I <span style='color:blue'>saw</span> a young boy in the exhibition area"},{Start:11680,End:14400,Text:"<span style='color:blue'>while</span> I <span style='color:blue'>was cleaning</span> the shark tank,"},{Start:14400,End:16120,Text:" I <span style='color:blue'>knew</span> it <span style='color:blue'>meant</span> trouble."},{Start:16480,End:18200,Text:" <span style='color:blue'>As</span> I <span style='color:blue'>was swimming</span> towards him,"},{Start:18200,End:21360,Text:"I <span style='color:blue'>did</span> my best to stay calm but,"},{Start:21360,End:25120,Text:"unfortunately, he <span style='color:blue'>started</span> tapping on the glass. "},{Start:25120,End:27520,Text:" <span style='color:blue'>As soon as</span> the sharks <span style='color:blue'>heard</span> the noise,  "},{Start:27520,End:30640,Text:"they <span style='color:blue'>started</span> moving around wildly."}]},
{id:16,SubsArray:[{Start:9040,End:12160,Text:"I don’t think this is a good idea anymore, Todd! "},{Start:12480,End:14280,Text:" I’m not entering that tunnel."},{Start:14720,End:16720,Text:"<span style='color:blue'>Let’s</span> get out of here, <span style='color:blue'>shall we</span>?"},{Start:16960,End:19280,Text:"You <span style='color:blue'>said</span> you wanted to know, <span style='color:blue'>didn’t you</span>?"},{Start:19280,End:21200,Text:" So, stop acting like a baby."},{Start:21200,End:22360,Text:" <span style='color:blue'>Go</span> and stand over there "},{Start:22360,End:24800,Text:"and <span style='color:blue'>get</span> your mobile ready, <span style='color:blue'>will you</span>?"}]},
{id:17,SubsArray:[{Start:9400,End:11840,Text:"On the day of the archery competition,"},{Start:11840,End:14520,Text:" Nottingham Town was full of people. "},{Start:16600,End:18360,Text:"The Sheriff <span style='color:blue'>had sent</span> messengers "},{Start:18360,End:19920,Text:"all over the country. "},{Start:20400,End:22600,Text:" He wanted Robin Hood to hear about the "},{Start:22600,End:25920,Text:"competition and come to take part. "},{Start:26520,End:28440,Text:"After the archers <span style='color:blue'>had</span> all <span style='color:blue'>gathered</span> "},{Start:28440,End:30760,Text:"in the field with their bows and arrows, "},{Start:30760,End:32160,Text:" the Sheriff looked carefully "},{Start:32160,End:34400,Text:"to see if Robin Hood was there."}]},
{id:36,Parts:[{time:10000},{time:62000}],SubsArray:[{Start:13680,End:15720,Text:"Watch and listen."},{Start:19720,End:21320,Text:"telegram"},{Start:25720,End:27320,Text:"explorer"},{Start:31760,End:33600,Text:"South Pole"},{Start:37200,End:38960,Text:"landscape"},{Start:43480,End:45200,Text:"search team"},{Start:49320,End:50800,Text:"die"},{Start:55520,End:56960,Text:"alive"},{Start:70760,End:72800,Text:"Robert Falcon Scott "},{Start:72800,End:76520,Text:"was born in 1868 in Devonport, England."},{Start:77600,End:78720,Text:"As a young man,"},{Start:78840,End:81720,Text:" he worked on various Royal Navy ships,"},{Start:82000,End:85440,Text:"and in 1901 he was chosen to lead a trip "},{Start:85560,End:86760,Text:"to Antarctica."},{Start:88480,End:90360,Text:"They travelled further south "},{Start:90360,End:92120,Text:"than anyone had ever been."},{Start:93560,End:96400,Text:"He returned to Britain as a national hero,"},{Start:96680,End:99200,Text:"but he felt that his work wasn’t finished."},{Start:101160,End:104080,Text:"Nobody had ever reached the South Pole, "},{Start:104480,End:107680,Text:"and Scott felt he was the man who could do it. "},{Start:110080,End:112120,Text:"He had to wait a few years, however, "},{Start:112240,End:115080,Text:"because he had to raise money to pay for the trip."},{Start:117360,End:119240,Text:" In June 1910,"},{Start:119400,End:121600,Text:"the ship Terra Nova left Wales "},{Start:121600,End:123280,Text:"with Scott and his team."},{Start:124880,End:127240,Text:" They stopped off in Melbourne, Australia, "},{Start:127600,End:129480,Text:"where Scott received a telegram"},{Start:129480,End:132320,Text:" from a Norwegian explorer, Roald Amundsen, "},{Start:132640,End:134320,Text:"explaining that he, too,"},{Start:134440,End:136640,Text:"was trying to reach the South Pole."},{Start:138160,End:141040,Text:"Scott realised the race was on."},{Start:143000,End:146440,Text:"In January 1911, Terra Nova arrived"},{Start:146440,End:147440,Text:" in the Antarctic "},{Start:147720,End:149560,Text:"and the team set up camp."},{Start:151240,End:154200,Text:"Scott and his men began the long journey across"},{Start:154200,End:158360,Text:"the freezing landscape on 1st November 1911."},{Start:159760,End:162840,Text:"It was a very difficult journey with bad weather."},{Start:165480,End:167280,Text:"Two and a half months later,"},{Start:167440,End:169680,Text:"they finally reached the South Pole,"},{Start:170040,End:173240,Text:" but what they found there ruined any celebration. "},{Start:174000,End:176360,Text:"A Norwegian flag was at the Pole "},{Start:176560,End:178640,Text:"which could mean only one thing."},{Start:179600,End:182160,Text:" Amundsen had beaten them to it."},{Start:182640,End:184480,Text:" In fact, the Norwegian team"},{Start:184600,End:187280,Text:"had already arrived there one month ago. "},{Start:189000,End:190960,Text:"Exhausted and broken, "},{Start:191120,End:194520,Text:"the five-man team now had to make the "},{Start:194520,End:196960,Text:"1,500 km journey back. "},{Start:197840,End:200960,Text:"One man died a month later and another"},{Start:200960,End:202040,Text:" Lawrence Oates,"},{Start:202160,End:203200,Text:"who was very ill, "},{Start:203200,End:205640,Text:"realised he was slowing the team down, "},{Start:205960,End:207960,Text:"so he walked out of their tent "},{Start:208160,End:209640,Text:"and was never seen again. "},{Start:212840,End:215000,Text:"The other three men, including Scott, "},{Start:215280,End:216880,Text:"never made it back alive. "},{Start:218920,End:220200,Text:" Eight months later,"},{Start:220360,End:223520,Text:" a search team found them and Scott’s diary "},{Start:223640,End:227880,Text:"with the last entry on 29th March, 1912 saying: "},{Start:228320,End:230000,Text:"‘Look after our people.’"}]},
{id:44,Parts:[{time:9000},{time:46000}],SubsArray:[{Start:13375,End:15500,Text:"Watch and listen."},{Start:20833,End:22208,Text:"bee"},{Start:26791,End:28291,Text:" bumper car"},{Start:32749,End:34791,Text:"Ferris wheel"},{Start:38750,End:40208,Text:"candyfloss"},{Start:53375,End:54750,Text:"Hi, Daisy!"},{Start:54750,End:56625,Text:" Did you have a good time at the amusement p…. "},{Start:56625,End:58875,Text:"I’m never wearing this top again!"},{Start:59125,End:60875,Text:"But I gave it to you as a gift!"},{Start:61125,End:63416,Text:"Well, you won’t believe what happened to me."},{Start:63833,End:64583,Text:"What? "},{Start:69458,End:71041,Text:"While we were buying snacks,"},{Start:71041,End:73125,Text:" a bee started following me."},{Start:75750,End:81208,Text:"Aah! Aaaah! Aaaaah! "},{Start:82416,End:84250,Text:"What’s wrong with you, Daisy?"},{Start:84250,End:86041,Text:" Look at my popcorn. "},{Start:86250,End:87583,Text:"Sorry about that."},{Start:87583,End:89333,Text:" I’ll buy you some more, Scarlett. "},{Start:89625,End:91250,Text:"Oh, never mind."},{Start:91250,End:93208,Text:"I’ll eat some of your candyfloss. "},{Start:93833,End:95958,Text:" Let’s go to the bumper cars. "},{Start:97541,End:98333,Text:"Then,"},{Start:98333,End:100708,Text:" as we were waiting to ride the bumper cars,"},{Start:100708,End:102333,Text:" the bee appeared again!"},{Start:105041,End:110791,Text:"Oh no, oh no, oh nooooo! "},{Start:111250,End:113375,Text:"Be careful, young lady!"},{Start:113375,End:115208,Text:"I’m terribly sorry!"},{Start:115208,End:117541,Text:"Oh… don’t worry about it. "},{Start:118583,End:120500,Text:"After we had finished the ride,"},{Start:120500,End:122708,Text:" we went to buy tickets for the Ferris wheel "},{Start:122708,End:124666,Text:" – and… guess what! "},{Start:129499,End:131083,Text:"Aaaaaaah!"},{Start:131916,End:132666,Text:"Hey! "},{Start:132916,End:135666,Text:"I’m really sorry! It was an accident."},{Start:135666,End:137416,Text:"Can I do anything to help you? "},{Start:137625,End:139625,Text:"No, it’s OK. "},{Start:141083,End:142666,Text:"And what about the top?"},{Start:143041,End:143916,Text:"Well, "},{Start:143916,End:144666,Text:"Scarlett said "},{Start:144666,End:147041,Text:"that bees are attracted to bright colours."},{Start:147583,End:149125,Text:" I guess you can keep this top "},{Start:149125,End:150541,Text:"and get me another one."},{Start:150708,End:0,Text:"Oh, well."}]},

{id:18,SubsArray:[{Start:9520,End:12360,Text:"Hi! I’m Mandy and I’ve got two brothers,"},{Start:12600,End:13600,Text:"Brad and Mike."},{Start:14800,End:15640,Text:"Last week, "},{Start:15640,End:17840,Text:"Brad won first place in a fishing tournament."},{Start:19080,End:20640,Text:"Mike and I want to invite some friends "},{Start:20640,End:22240,Text:"to our house to celebrate."},{Start:22960,End:24840,Text:"It’s going to be a surprise for Brad!"},{Start:25200,End:26680,Text:"Who have you invited, Mike?"},{Start:27960,End:30240,Text:"I’ve already texted Brad’s football teammates "},{Start:30240,End:31640,Text:"and they’re all coming."},{Start:32520,End:34080,Text:"The coach might come too."},{Start:34840,End:35520,Text:"Great! "},{Start:35520,End:38000,Text:"What about Oliver and Lucy from the youth club?"},{Start:39160,End:41960,Text:"I’ve emailed them, but they haven’t replied yet."},{Start:42560,End:43600,Text:"What about you?"},{Start:44000,End:45400,Text:"Who have you invited?"},{Start:46360,End:49000,Text:"I told Mike’s friends from school this morning,"},{Start:49320,End:51080,Text:"but I still have to call Tanya."},{Start:51680,End:54040,Text:"She was ill and didn’t come to school today,"},{Start:54040,End:55600,Text:"so she might not come."},{Start:56240,End:57920,Text:"Have we forgotten anyone?"},{Start:58560,End:60000,Text:"I don’t think so –"},{Start:60000,End:62240,Text:"You’ve already told our cousins, haven’t you?"},{Start:62800,End:65640,Text:"Erm… no, sorry."},{Start:66160,End:68880,Text:"I usually chat with Karen online in the afternoons,"},{Start:68880,End:70360,Text:"but she isn’t online now."},{Start:71080,End:72440,Text:"Can you call aunt Kate?"},{Start:72920,End:73640,Text:"Sure!"},{Start:73640,End:76120,Text:"I’m going to make a video call now!"}]},
{id:19,SubsArray:[{Start:9840,End:11960,Text:"Tokyo is out of this world!"},{Start:12280,End:13560,Text:"I’m so glad Mum and Dad "},{Start:13560,End:15080,Text:"brought us here on holiday."},{Start:15680,End:16840,Text:"<span style='color:blue'>So am I</span>. "},{Start:16840,End:18600,Text:" Look, I’m starving. "},{Start:18600,End:20520,Text:" I don’t want a sandwich, though."},{Start:20880,End:22000,Text:"<span style='color:blue'>I don’t either</span>."},{Start:22000,End:23760,Text:" Why don’t we go to that sushi restaurant "},{Start:23760,End:25160,Text:"we saw yesterday?"},{Start:25560,End:27280,Text:"OK, why not?"},{Start:31440,End:34920,Text:"Mmm! Delicious! I love sushi."},{Start:35280,End:36720,Text:"<span style='color:blue'>I do too</span>! "},{Start:36720,End:40160,Text:" However, eating with chopsticks is a bit tricky"},{Start:40160,End:41680,Text:" I’m not very good at it."},{Start:42000,End:45000,Text:"<span style='color:blue'>Neither am I</span>, but we’ll get the hang of it."}],Justifications:[{top:157,left:236.5,jusicon:"key",justText:"Both Ian and Ryan"},{top:216,left:236.5,jusicon:"key",justText:"No, he doesn't"},{top:276,left:236.5,jusicon:"key",justText:"Both Ian and Ryan"},{top:335,left:236.5,jusicon:"key",justText:"No, they aren't"}]},
{id:20,SubsArray:[{Start:6680,End:8520,Text:"In 2009, "},{Start:8520,End:12240,Text:" Australian scientists asked for short text messages "},{Start:12240,End:15240,Text:"of no more than 160 letters  "},{Start:15240,End:18080,Text:"for an outer space communication project. "},{Start:18600,End:21080,Text:"They chose messages which gave information "},{Start:21080,End:23800,Text:"about people and life on Earth,"},{Start:23800,End:28200,Text:"and sent them out to a planet called Gliese 581d. "},{Start:28720,End:31080,Text:" <span style='color:blue'>The</span> planet is a ‘super earth’ – "},{Start:31080,End:33040,Text:" it is similar to <span style='color:blue'>the</span> Earth, "},{Start:33040,End:35400,Text:" but it’s eight times larger"},{Start:35760,End:39120,Text:" It’s also 20.3 light years away,"},{Start:39120,End:43640,Text:" so <span style='color:blue'>the</span> messages won’t arrive there until 2029!"}]},
{id:21,SubsArray:[{Start:7120,End:9760,Text:"You <span style='color:blue'>will be able to</span> buy fresh fruit juices"},{Start:9760,End:11520,Text:" here in the future."},{Start:12320,End:15240,Text:"You <span style='color:blue'>mustn’t use</span> mobile phones in here."},{Start:16240,End:20360,Text:"You <span style='color:blue'>will have to</span> be here on time – at 6.30 a.m ."}]},
{id:37,Parts:[{time:10000},{time:70000}],SubsArray:[{Start:13680,End:15720,Text:"Watch and listen."},{Start:19720,End:21320,Text:"colon"},{Start:25720,End:27320,Text:"brackets"},{Start:31360,End:32760,Text:"koala"},{Start:37800,End:39040,Text:"symbol"},{Start:43640,End:44880,Text:"dash"},{Start:49720,End:50800,Text:"dot"},{Start:55520,End:56840,Text:"badge"},{Start:61760,End:63080,Text:"type"},{Start:76760,End:78440,Text:"The word emoticon "},{Start:78880,End:83160,Text:"comes from two words, emotion and icon."},{Start:85280,End:89040,Text:" The most common emoticon is a smiling face,"},{Start:89320,End:91760,Text:"but people were drawing faces by making "},{Start:91760,End:94000,Text:"two dots and a line many years "},{Start:94000,End:96080,Text:"before computers were around."},{Start:98320,End:101200,Text:"The yellow happy or smiley face "},{Start:101440,End:105400,Text:"was the idea of artist Harvey Ball in 1963."},{Start:106160,End:108720,Text:"He only got $45 for his work,"},{Start:109680,End:111840,Text:" but it is now one of the most famous "},{Start:111840,End:113240,Text:"images in the world."},{Start:114720,End:116520,Text:"You see it on badges,"},{Start:116640,End:117600,Text:" T-shirts, "},{Start:117960,End:119720,Text:"advertisements, everywhere."},{Start:123760,End:127480,Text:"In 1982, Scott Fahlman, a computer scientist, "},{Start:128160,End:130720,Text:"was working at Carnegie Mellon University."},{Start:131760,End:134040,Text:"He wanted his students to understand "},{Start:134040,End:136800,Text:" when his online messages were jokes"},{Start:136800,End:138240,Text:"and when they weren’t. "},{Start:139240,End:141240,Text:"So, he typed symbols for them: "},{Start:142160,End:144800,Text:"a happy face on the side for jokes"},{Start:147920,End:150800,Text:" and a sad face for serious messages."},{Start:153120,End:155960,Text:"This was the first time smiley faces"},{Start:155960,End:159280,Text:" or emoticons appeared in an electronic message."},{Start:160560,End:163920,Text:"Nowadays, people usually use emoticons on"},{Start:163920,End:166120,Text:" computers, tablets, smartphones"},{Start:166120,End:168240,Text:"and other electronic devices."},{Start:169640,End:172800,Text:"You can use punctuation marks like the colon,"},{Start:173720,End:174760,Text:"dash, "},{Start:175920,End:178720,Text:"and brackets to make a smiley face."},{Start:179640,End:182920,Text:"On some devices and on some websites,"},{Start:183040,End:184800,Text:" when you type an emoticon,"},{Start:185280,End:187280,Text:"it turns into a picture,"},{Start:187720,End:190600,Text:" like the famous yellow smiley face."},{Start:191240,End:194560,Text:"Today, some emoticons are even animated. "},{Start:196280,End:198840,Text:"In the 1980s a new kind of"},{Start:198840,End:200680,Text:" emoticon became popular, "},{Start:201040,End:202440,Text:"especially in Japan."},{Start:203480,End:204280,Text:"It is called "},{Start:204760,End:208360,Text:"kaomoji and it uses punctuation marks "},{Start:208360,End:209440,Text:"to make faces, "},{Start:211240,End:212880,Text:"but they are not on the side "},{Start:213160,End:215080,Text:"like traditional emoticons. "},{Start:220680,End:224120,Text:"It is popular to use kaomoji to make animals, "},{Start:224120,End:225400,Text:"like a bear, "},{Start:227360,End:228160,Text:"or a bird, "},{Start:233760,End:235040,Text:"or a fish, "},{Start:240160,End:241800,Text:"or even a koala."},{Start:247920,End:249320,Text:"One thing is for sure: "},{Start:249840,End:252800,Text:"emoticons make messages more fun."},{Start:252800,End:252840,Text:"badge"}]},
{id:45,Parts:[{time:9000},{time:34000}],SubsArray:[{Start:13375,End:15500,Text:"Watch and listen."},{Start:20833,End:22208,Text:"text"},{Start:26791,End:28375,Text:"ending"},{Start:45125,End:46291,Text:"Look, Tyler! "},{Start:46291,End:48041,Text:"I just got a strange text message"},{Start:48041,End:49583,Text:"from an unknown number."},{Start:50041,End:53083,Text:"‘That’s a nice bicycle you got. G.’"},{Start:54083,End:54708,Text:" So?"},{Start:54833,End:56958,Text:"It might be from your friend, Greg."},{Start:57375,End:58750,Text:"It can’t be from Greg."},{Start:58958,End:60916,Text:"I got my new bike just yesterday."},{Start:61208,End:63208,Text:"My friends don’t know about it yet. "},{Start:63708,End:64916,Text:"Don’t worry, Alex!"},{Start:65124,End:67458,Text:"I reckon it’s just somebody from school."},{Start:67625,End:69250,Text:"Why don’t you text them back?"},{Start:69500,End:70541,Text:"I don’t think so!"},{Start:70833,End:73458,Text:"Haven’t you seen the film <i>Never Text a Stranger?</i>"},{Start:73791,End:74583,Text:"No."},{Start:74875,End:76666,Text:"It’s a horror film about an actress "},{Start:76666,End:78625,Text:"who starts receiving strange messages"},{Start:78833,End:80041,Text:" – like the one I did!"},{Start:80500,End:82666,Text:" It doesn’t have a happy ending."},{Start:86375,End:88916,Text:"Erm… a message for me."},{Start:89166,End:92291,Text:"You won’t believe this. Look what it says. "},{Start:93625,End:96750,Text:"Do you think we should… call the police? "},{Start:97166,End:98541,Text:"Definitely!"},{Start:99416,End:100541,Text:"Aah! "},{Start:101666,End:105375,Text:"Hi, boys! Grandma’s been here for a while. "},{Start:105375,End:107000,Text:"She’s been trying to text you "},{Start:107000,End:109250,Text:"with her new mobile phone."},{Start:109250,End:111041,Text:" Did you get any messages? "},{Start:111375,End:115625,Text:"Grandma? Wait a minute... G for Grandma."},{Start:115916,End:117333,Text:"Oh… see?"},{Start:117333,End:120500,Text:" I told you there was nothing to worry about."}]},

{id:22,SubsArray:[{Start:9280,End:11080,Text:"Hi, I’m Fiona!"},{Start:11880,End:13200,Text:"This week at our school, "},{Start:13200,End:15360,Text:"we’re helping make a difference in the world."},{Start:15840,End:17640,Text:"Each class has a different project."},{Start:19120,End:21600,Text:"My class is taking part in a walkathon."},{Start:22280,End:24200,Text:"We’re going to walk five kilometres to raise money "},{Start:24200,End:26400,Text:"for a charity that builds schools! "},{Start:27840,End:29840,Text:"Hello, I’m Sophie!"},{Start:30200,End:33280,Text:"My class is planting trees in a nearby forest."},{Start:34040,End:36880,Text:"There was a fire in the forest ten years ago."},{Start:37880,End:40240,Text:"Lots of trees have been planted since then,"},{Start:40240,End:41880,Text:"but lots more are needed."},{Start:43160,End:45800,Text:"Trees benefit the world in lots of ways:"},{Start:46200,End:47840,Text:"they keep the air fresh,"},{Start:48520,End:50080,Text:"they are home to wildlife"},{Start:50680,End:53320,Text:"and they make us feel calmer and happier!"}]},
{id:23,SubsArray:[{Start:6840,End:9520,Text:"This Friday will be Pay it Forward Day!"},{Start:9520,End:11200,Text:" Each student is asked to do "},{Start:11200,End:13520,Text:"three kind things for other people. "},{Start:14000,End:16000,Text:" I first discovered Pay it Forward Day "},{Start:16000,End:17640,Text:"when I <span style='color:blue'>was caught</span> in some heavy rain "},{Start:17640,End:19040,Text:"a few years ago -"},{Start:19040,End:21000,Text:"without a raincoat or anything -"},{Start:21000,End:24160,Text:"and <span style='color:blue'>was given</span> an umbrella by a complete stranger. "},{Start:24520,End:26480,Text:"I <span style='color:blue'>was</span> also <span style='color:blue'>given</span> a card that explained "},{Start:26480,End:28720,Text:"all about Pay it Forward. "}]},
{id:24,SubsArray:[{Start:6760,End:7560,Text:"At the moment,"},{Start:7560,End:10880,Text:" we are raising money for our first clean-up boat. "},{Start:11440,End:12880,Text:" Rubbish from land "},{Start:12880,End:15440,Text:"<span style='color:blue'>can</span> often <span style='color:blue'>be washed</span> far out to sea,"},{Start:15760,End:18080,Text:" and this <span style='color:blue'>has to be collected</span> too. "},{Start:18360,End:21120,Text:" Our scuba diving teams will be able to go into "},{Start:21120,End:24200,Text:"deeper waters with the help of the <i>SeaHelp</i> boat."},{Start:24920,End:25720,Text:"As a result,"},{Start:25720,End:28760,Text:"many more clean-ups <span style='color:blue'>will be organised</span>."}]},
{id:25,SubsArray:[{Start:7600,End:9560,Text:"Ow! My nose!"},{Start:11200,End:13440,Text:"If I <span style='color:blue'>didn’t have</span> quills, "},{Start:13440,End:16240,Text:" I<span style='color:blue'>’d be</span> the leopard’s dinner now!"},{Start:19080,End:21360,Text:"You were so brave! "},{Start:21360,End:24520,Text:" Thanks to your quills, we’re safe!"},{Start:24960,End:28520,Text:"We didn’t know we could count on you to save us."},{Start:29000,End:33280,Text:"If I <span style='color:blue'>had</span> quills, I<span style='color:blue'>’d never have to</span> run away again!"}]},
{id:38,Parts:[{time:10000},{time:75000}],SubsArray:[{Start:13680,End:15720,Text:"Watch and listen."},{Start:19720,End:21320,Text:"landfill"},{Start:25720,End:27720,Text:"natural resources"},{Start:31760,End:33720,Text:"recyclable"},{Start:37520,End:39240,Text:"turn into"},{Start:43440,End:45120,Text:"container"},{Start:49680,End:51480,Text:"aluminium"},{Start:55560,End:57280,Text:"separate"},{Start:61680,End:63400,Text:"reuse"},{Start:67720,End:69440,Text:"quality"},{Start:82880,End:85920,Text:"To recycle means to turn used materials"},{Start:85920,End:88160,Text:"into something that can be used again."},{Start:89200,End:91520,Text:"Recycling is good for the environment "},{Start:91920,End:94600,Text:"because it reduces the rubbish in landfills"},{Start:94760,End:98120,Text:"and it greatly saves natural resources and energy "},{Start:98280,End:100720,Text:"that are needed when making new things."},{Start:101680,End:104360,Text:"Everyone should recycle to help reduce "},{Start:104360,End:105960,Text:"their carbon footprint."},{Start:106800,End:108160,Text:"And it’s easy!"},{Start:108800,End:111360,Text:"However, at the moment, about 60% "},{Start:111360,End:113720,Text:"of the rubbish in landfills could have been "},{Start:113720,End:115640,Text:"recycled, but wasn’t."},{Start:116600,End:117360,Text:"Aluminium"},{Start:117600,End:120080,Text:" is the most commonly recycled material"},{Start:120240,End:124040,Text:"and aluminium cans are the most recycled item."},{Start:124600,End:127360,Text:"About eighty billion aluminium cans"},{Start:127400,End:129040,Text:" are used every year."},{Start:129840,End:132040,Text:"If you throw away an aluminium can,"},{Start:132360,End:136200,Text:"it will stay in that form for 500 years"},{Start:136440,End:139120,Text:" so it’s a good idea to recycle. "},{Start:140440,End:143960,Text:"They can be recycled and turned into cans again,"},{Start:144520,End:146720,Text:"which can appear in your local supermarkets "},{Start:146720,End:148400,Text:"in about two months. "},{Start:148880,End:149440,Text:"Also,"},{Start:149680,End:152680,Text:"there is practically no limit to the amount of times "},{Start:152680,End:154360,Text:"you can recycle aluminium. "},{Start:156000,End:158000,Text:"Paper is easy to recycle "},{Start:158120,End:161200,Text:"and should be recycled because it saves trees."},{Start:162080,End:163920,Text:" In the USA alone, "},{Start:164040,End:167640,Text:"each person uses about seven trees every year, "},{Start:167840,End:170320,Text:"through wood, paper and other products."},{Start:171480,End:173680,Text:" Half a million trees are needed to produce"},{Start:173680,End:176560,Text:"the Sunday newspapers of the USA every week."},{Start:178040,End:181480,Text:" By recycling just 900 kg of paper"},{Start:181840,End:185080,Text:"we can actually save seventeen trees."},{Start:185640,End:187720,Text:"Also, 70% less energy "},{Start:188000,End:190240,Text:"is needed to produce recycled paper "},{Start:190600,End:193440,Text:"than if it was produced from raw materials. "},{Start:195120,End:198320,Text:"Plastic is the most difficult material to recycle "},{Start:198800,End:201600,Text:" and it is usually recycled into a different kind"},{Start:201600,End:203120,Text:" of plastic and product."},{Start:203920,End:205960,Text:"Plastic bags thrown into the ocean "},{Start:206360,End:209680,Text:"kill over one million sea creatures every year."},{Start:210600,End:214040,Text:"So, it’s a good idea to reuse and recycle them. "},{Start:214800,End:217160,Text:"Plastic bottles can also be recycled "},{Start:217160,End:218680,Text:"and turned into containers "},{Start:218680,End:220280,Text:"for household cleaning products,"},{Start:220560,End:221320,Text:"furniture, "},{Start:221720,End:223800,Text:"recycling bins, etc."},{Start:225800,End:228720,Text:"Glass is 100% recyclable, "},{Start:229360,End:231920,Text:"but it is often separated into colours "},{Start:232120,End:235360,Text:"because glass keeps its colour after recycling. "},{Start:236320,End:239440,Text:"The good thing is that it doesn’t lose its quality "},{Start:239760,End:242160,Text:"and can be used again and again."},{Start:244240,End:246480,Text:"Recycling helps our planet. "},{Start:247360,End:250000,Text:" It also creates many new jobs and companies "},{Start:250000,End:251480,Text:"that work in recycling."},{Start:252240,End:253000,Text:" It’s clear "},{Start:253400,End:255360,Text:"that recycling should be encouraged "},{Start:255760,End:258080,Text:"and everyone needs to do their part "},{Start:258200,End:260200,Text:"if we are going to make a difference."}]},
{id:46,Parts:[{time:9000},{time:52000}],SubsArray:[{Start:13375,End:15500,Text:"Watch and listen."},{Start:20833,End:22208,Text:"bear cub"},{Start:26875,End:28291,Text:"lion"},{Start:32791,End:34416,Text:"crocodile"},{Start:38958,End:40791,Text:"swimming pool"},{Start:44916,End:72625,Text:"spider"},{Start:72625,End:74291,Text:"Good morning, Martin!"},{Start:74416,End:75833,Text:"Good morning, Sally!"},{Start:75916,End:78083,Text:"Can I give you a hand with that bear?"},{Start:78333,End:80625,Text:"No, thanks. It’s just a bear cub! "},{Start:80750,End:82958,Text:"Ha ha. OK then."},{Start:82958,End:85541,Text:"Do you want me to take the lions inside? "},{Start:85541,End:87666,Text:"Yes, please. Leave them over there."},{Start:88166,End:89666,Text:"What about the crocodiles?"},{Start:90166,End:91791,Text:"Put them in the plastic swimming pool."},{Start:91791,End:93000,Text:" Let me show you."},{Start:93333,End:96041,Text:"I need some help with the giant spiders, please! "},{Start:101083,End:102750,Text:"Hello, Stu!"},{Start:103125,End:106416,Text:"Excuse me, Mrs Baxter. Can you help me?"},{Start:106791,End:108041,Text:"There are some wild animals "},{Start:108041,End:109958,Text:"on the ground floor of our building! "},{Start:110333,End:112208,Text:"Wild animals?"},{Start:112208,End:116583,Text:"Yes… bears, lions, crocodiles and… "},{Start:116583,End:118125,Text:"giant spiders! "},{Start:118375,End:121125,Text:"Really? That’s fascinating!"},{Start:121416,End:124791,Text:"Why don’t I go and have a look? ……. "},{Start:130333,End:135041,Text:"What a pity…. It’s just a toy shop!"}]},

{id:26,SubsArray:[{Start:9680,End:11720,Text:"Hello! I’m Jessica."},{Start:12880,End:15480,Text:"Last Saturday was a special day for my family."},{Start:15720,End:18240,Text:"We had a big dinner and we exchanged gifts."},{Start:19360,End:21440,Text:"These are the three things I got!"},{Start:24680,End:25760,Text:"This red jumper."},{Start:27160,End:29160,Text:"It was a gift from my sister, Vera."},{Start:29160,End:31440,Text:"She knows that red is my favourite colour!"},{Start:31960,End:33800,Text:"This jumper is made of wool –"},{Start:33800,End:35720,Text:"so it’s perfect for a cold day!"},{Start:35720,End:37280,Text:"Isn’t it beautiful?"},{Start:40920,End:42200,Text:"These old coins."},{Start:43440,End:45960,Text:"I started collecting coins two years ago."},{Start:46480,End:48040,Text:"My grandfather gave me these two coins"},{Start:48040,End:49320,Text:" for my collection."},{Start:49880,End:51560,Text:"They’re both from the UK."},{Start:56120,End:56840,Text:"This phone,"},{Start:56840,End:59480,Text:" which is actually my first mobile phone ever."},{Start:60440,End:62040,Text:"It’s a present from my parents."},{Start:62040,End:63840,Text:"I didn’t expect to get it!"},{Start:64480,End:66440,Text:"I look forward to chatting with my friends,"},{Start:66440,End:68640,Text:"watching videos and listening to music."},{Start:69240,End:70200,Text:"The best part is"},{Start:70200,End:72560,Text:" I can also download lots of cool apps!"},{Start:73480,End:75800,Text:"That’s all for today! Bye!"}]},
{id:27,SubsArray:[{Start:6920,End:8520,Text:"I’m designing a new collection"},{Start:8520,End:10040,Text:"for World Wide Webb,"},{Start:10040,End:11920,Text:"my teenage clothing brand."},{Start:12160,End:15120,Text:"<span style='color:blue'>All</span> of the designs I’ve got are kind of boring."},{Start:15360,End:17200,Text:" <span style='color:blue'>None</span> of them are as cool as this."},{Start:17600,End:19480,Text:" Do you think I could use it?"},{Start:22080,End:23600,Text:"Which jacket should I get,"},{Start:23600,End:25480,Text:" the denim or the leather one?"},{Start:25480,End:27200,Text:" I can’t make up my mind."},{Start:27560,End:28840,Text:"<span style='color:blue'>Either</span>’s fine. "},{Start:28840,End:29920,Text:"They’re <span style='color:blue'>both</span> in fashion "},{Start:29920,End:32240,Text:"and <span style='color:blue'>neither</span> of them is very expensive."}]},
{id:28,SubsArray:[{Start:7160,End:11320,Text:"Is paper actually used <span style='color:blue'>to make</span> all paper money?"},{Start:11800,End:13400,Text:"The answer is no. "},{Start:13720,End:17800,Text:" For example, US currency is not made of paper."},{Start:17800,End:20400,Text:" Instead, it is printed on material "},{Start:20400,End:25720,Text:"that consists of 75% cotton and 25% linen."},{Start:26120,End:28240,Text:"That makes it hard <span style='color:blue'>to tear</span>. "},{Start:28760,End:31640,Text:" Actually, you would have to double fold a dollar "},{Start:31640,End:33960,Text:"about four thousand times"},{Start:33960,End:37600,Text:"(first forwards and then backwards) <span style='color:blue'>to tear</span> it! "},{Start:38360,End:41400,Text:"New banknotes can also <span style='color:blue'>be</span> made of polymer, "},{Start:41400,End:44000,Text:"which is a thin, flexible plastic."},{Start:44680,End:49080,Text:" When the new five pound note came out in 2016, "},{Start:49080,End:51600,Text:" the UK government advertised it"},{Start:51600,End:54200,Text:" as ‘strong’ and ‘long-lasting’."},{Start:54600,End:57520,Text:"This made lots of people <span style='color:blue'>post</span> online videos "},{Start:57520,End:60080,Text:"of themselves trying <span style='color:blue'>to destroy</span> it!"}]},
{id:29,SubsArray:[{Start:7440,End:8600,Text:"Stay-at-home mum "},{Start:8600,End:10760,Text:"and blogger of The <i>Minimalist Family</i>, "},{Start:10760,End:12200,Text:"Nina Wye, "},{Start:12200,End:14800,Text:"was shocked when she first realised "},{Start:14800,End:17240,Text:"how untidy her house was "},{Start:17240,End:19520,Text:" and how much junk she and her family "},{Start:19520,End:21360,Text:" had collected over the years."},{Start:21680,End:23800,Text:"Without <span style='color:blue'>wasting</span> any more time,"},{Start:23800,End:26600,Text:" she organised a decluttering weekend "},{Start:26600,End:28120,Text:"for the whole family. "},{Start:28320,End:29600,Text:" That was four years ago. "},{Start:30280,End:33000,Text:"Since then, her blog has helped other families"},{Start:33000,End:35760,Text:"find ways to reduce the amount of stuff they have"},{Start:36360,End:37920,Text:" and find happiness "},{Start:37920,End:40800,Text:"in <span style='color:blue'>living</span> more simply and with less. "},{Start:42160,End:44880,Text:" ‘<span style='color:blue'>Getting</span> started is the easy part,’"},{Start:45200,End:47480,Text:"‘After that, you need to avoid "},{Start:47480,End:50800,Text:"<span style='color:blue'>buying</span> things you want but don’t need.’"}]},
{id:39,Parts:[{time:10000},{time:70000}],SubsArray : [{Start:13680,End:15720,Text:"Watch and listen."},{Start:19720,End:21600,Text:"pick by hand"},{Start:25720,End:27320,Text:"scissors"},{Start:31560,End:33000,Text:"cocoon"},{Start:37440,End:39040,Text:"fibre"},{Start:43640,End:44840,Text:"thread"},{Start:49520,End:51000,Text:"parachute"},{Start:55680,End:57240,Text:"spinning wheel"},{Start:61760,End:63080,Text:"clippers"},{Start:77320,End:79200,Text:"Humans started wearing clothing "},{Start:79240,End:82840,Text:"between 100,000 and 500,000 years ago. "},{Start:84400,End:87800,Text:"The first material used for clothing was leather."},{Start:89560,End:92680,Text:"Leather is made from the skin of cows, goats, "},{Start:92760,End:93840,Text:"sheep and deer,"},{Start:95000,End:97960,Text:" but also from alligators and snakes."},{Start:100520,End:103440,Text:"A process called tanning is used to turn skin "},{Start:103440,End:104560,Text:"into leather."},{Start:106960,End:108520,Text:"Apart from clothes,"},{Start:108880,End:111920,Text:"today leather is used for bags and shoes, "},{Start:112600,End:114320,Text:"balls for sports "},{Start:115200,End:117160,Text:"as well as many other things."},{Start:122680,End:124960,Text:"Cotton comes from the cotton plant"},{Start:125320,End:127560,Text:"and is turned into thread by using a "},{Start:127560,End:128440,Text:"spinning wheel. "},{Start:131120,End:133560,Text:"Today factories use large machines "},{Start:133560,End:135720,Text:"to spin cotton and dye threads "},{Start:135720,End:137280,Text:"many different colours."},{Start:138920,End:141400,Text:"In the past people picked cotton by hand,"},{Start:141600,End:143400,Text:"and it was very hard work."},{Start:144880,End:147240,Text:"Today, farmers use machines, "},{Start:147400,End:150240,Text:"which make it a lot easier and faster."},{Start:151800,End:154680,Text:"Cotton is the most common natural material "},{Start:154680,End:155840,Text:"used for clothing."},{Start:158000,End:160560,Text:"Wool has been around for thousands of years"},{Start:160720,End:163440,Text:" and is another material that needs spinning."},{Start:164800,End:167760,Text:" It mostly comes from the hair of sheep and goats "},{Start:167960,End:170960,Text:"but can also come from camels and llamas "},{Start:171320,End:173280,Text:"as well as from special rabbits."},{Start:174920,End:178160,Text:"Cutting the hair off a sheep is called shearing."},{Start:178680,End:181560,Text:" Farmers used to use scissors to shear sheep,"},{Start:182120,End:182920,Text:"but today, "},{Start:183040,End:184920,Text:"they use electric clippers "},{Start:184920,End:187160,Text:"and can shear a sheep in a few minutes."},{Start:189600,End:192840,Text:"You can make up to eight jumpers from one sheep,"},{Start:193200,End:194760,Text:" and wool is much better at "},{Start:194760,End:196480,Text:"keeping you warm than cotton."},{Start:198960,End:201880,Text:"China was the first country to produce silk,"},{Start:201880,End:203880,Text:"more than six thousand years ago."},{Start:204960,End:206800,Text:" Silk is a natural fibre"},{Start:207120,End:209040,Text:"that is made by silkworms,"},{Start:209360,End:212400,Text:"the larvae or caterpillar of the silk moth."},{Start:214200,End:217520,Text:"They make the fibre when they create their cocoon. "},{Start:219440,End:223520,Text:"You can get between 500 and 900 metres of thread "},{Start:223800,End:225400,Text:"from one cocoon."},{Start:229440,End:230080,Text:"Today,"},{Start:230200,End:233200,Text:"silk is used to make cloth which is then made into "},{Start:233200,End:235920,Text:"clothes, rugs and other things."},{Start:237720,End:239400,Text:"Silk is very strong"},{Start:239640,End:243280,Text:"and in the past it was used to make parachutes."}]},
{id:47,Parts:[{time:9000},{time:45000}],SubsArray:[{Start:13375,End:15500,Text:"Watch and listen."},{Start:20833,End:22208,Text:"e-book"},{Start:26875,End:28291,Text:"author"},{Start:32875,End:34416,Text:"paper"},{Start:38875,End:40333,Text:"smell"},{Start:53708,End:54708,Text:"So, Emma,"},{Start:55000,End:56916,Text:" did you get the new <i>Space Squares</i> book? "},{Start:57291,End:58333,Text:"Yes, I did. "},{Start:58333,End:61958,Text:"In my opinion, it’s the best one in the series so far."},{Start:61958,End:63500,Text:"I totally agree with you! "},{Start:63958,End:66083,Text:"Sylvia White is an amazing author. "},{Start:66500,End:68125,Text:" I’ve still got a chapter to read."},{Start:68416,End:70458,Text:"Me too! You know what?"},{Start:70875,End:71833,Text:" We could meet "},{Start:71833,End:73875,Text:"and read the last chapter at the same time"},{Start:73875,End:75333,Text:" – and then talk about it!"},{Start:75541,End:78375,Text:"Nice idea! How about meeting at five…"},{Start:78750,End:80541,Text:"at the Stars and Cups café? "},{Start:80750,End:84041,Text:"I was just thinking that! See you later!"},{Start:85125,End:87166,Text:"<i>Later that day…</i>"},{Start:89541,End:91500,Text:"Hey! Where’s your book? "},{Start:91708,End:92666,Text:"In here!"},{Start:92666,End:93875,Text:"If you ask me, "},{Start:93875,End:96291,Text:"e-books are so much better than paper books. "},{Start:96541,End:97666,Text:"No way! "},{Start:97666,End:99750,Text:"I don’t have to carry heavy books around. "},{Start:100000,End:102083,Text:"Well, you’re right about that,"},{Start:102083,End:103791,Text:" but there are lots of good things about paper "},{Start:103791,End:104583,Text:"books."},{Start:104583,End:106416,Text:"What about the smell of paper? "},{Start:106791,End:110375,Text:"I know what you mean, but… look! Is that…"},{Start:110750,End:112041,Text:"Sylvia White!"},{Start:112041,End:114541,Text:" I’m definitely asking her to sign my book!"},{Start:114875,End:116666,Text:"I’d like that too but…"},{Start:116875,End:118625,Text:"E-books can’t be signed."},{Start:118916,End:122000,Text:"Oh well…. Perhaps you’re right after all."}]},

{id:30,SubsArray:[{Start:9360,End:11000,Text:"Hi, I’m Drake."},{Start:12120,End:14000,Text:"My uncle Joe lives in Canada."},{Start:15040,End:15680,Text:"Last month,"},{Start:15680,End:16760,Text:"he asked my brother and me "},{Start:16760,End:19040,Text:"if we wanted to visit him for a few days."},{Start:19720,End:21240,Text:"We said yes, of course!"},{Start:22360,End:24240,Text:"We travelled to Canada by plane."},{Start:24920,End:27120,Text:"Our flight was excellent, but unfortunately,"},{Start:27120,End:29040,Text:"when we landed, it was raining."},{Start:29680,End:30160,Text:"Actually, "},{Start:30160,End:32560,Text:"it was raining the whole time we were there!"},{Start:33960,End:35800,Text:"Our parents had told us to visit some amazing "},{Start:35800,End:39120,Text:"caves that are not very far from uncle Joe’s house."},{Start:40280,End:41120,Text:"We asked uncle Joe "},{Start:41120,End:43080,Text:"if he would take us to the caves,"},{Start:43600,End:44800,Text:"but he said that we couldn’t visit them "},{Start:44800,End:46240,Text:"because of the weather."},{Start:47000,End:48080,Text:"What a shame!"},{Start:49400,End:52680,Text:"However, we visited some interesting museums."},{Start:54440,End:56960,Text:"In the end, we had an amazing time!"}]},
{id:31,SubsArray:[{Start:7320,End:9720,Text:"Tony Blaze, Norton’s mayor, "},{Start:9720,End:12880,Text:" told reporters that he <span style='color:blue'>had called</span> in firefighters"},{Start:12880,End:14960,Text:" from across the country to help. "},{Start:15280,End:17640,Text:" He said that he <span style='color:blue'>hoped</span> the weather <span style='color:blue'>would change</span> "},{Start:17640,End:19440,Text:"and bring some rain. "}]},
{id:32,SubsArray:[{Start:7720,End:10880,Text:"Stacey, the guide told us <span style='color:blue'>not to leave</span> the group."},{Start:11200,End:13240,Text:"I’m just taking a photo. "},{Start:13240,End:15120,Text:" My dad asked me <span style='color:blue'>to take</span> a photo "},{Start:15120,End:16680,Text:"of the stalagmites."}]},
{id:33,SubsArray:[{Start:7320,End:9800,Text:"We were told that there was a technical problem "},{Start:9800,End:12000,Text:"and that the plane wouldn’t leave after all.  "},{Start:12280,End:14920,Text:" Everyone started asking <span style='color:blue'>when the next flight was</span> "},{Start:14920,End:17520,Text:"and <span style='color:blue'>if there were any seats available</span>."}]},
{id:40,Parts:[{time:10000},{time:75000}],SubsArray : [{Start:13680,End:15720,Text:"Watch and listen."},{Start:19720,End:21320,Text:"smoke alarm"},{Start:25880,End:27880,Text:"fire extinguisher"},{Start:31760,End:33320,Text:"sand"},{Start:37720,End:39280,Text:"burn"},{Start:43760,End:44960,Text:"flames"},{Start:49560,End:51240,Text:"wildfire"},{Start:55600,End:57000,Text:"bucket"},{Start:61720,End:63120,Text:"low"},{Start:67760,End:69600,Text:"poisonous gases"},{Start:83240,End:86200,Text:"About one in three hundred houses "},{Start:86280,End:88480,Text:"reports a fire every year. "},{Start:89560,End:91720,Text:"When a fire starts in your home, "},{Start:91880,End:94360,Text:"you have about two minutes to get out. "},{Start:95640,End:99160,Text:"Sixty per cent of the people who have died in a fire "},{Start:99280,End:101600,Text:"didn’t have a smoke alarm in their house."},{Start:102360,End:105200,Text:"It is very important to have smoke alarms,"},{Start:105360,End:108240,Text:"and it is also very important to test them"},{Start:108240,End:109120,Text:" every month."},{Start:110400,End:112680,Text:"The most common reason why smoke "},{Start:112680,End:113880,Text:"alarms don’t work "},{Start:114040,End:116000,Text:"is because the batteries are dead."},{Start:117040,End:119200,Text:"Also, every home must have "},{Start:119200,End:121840,Text:"at least one fire extinguisher. "},{Start:123200,End:126600,Text:"Most fires start between the hours of 11p.m. "},{Start:126640,End:128280,Text:"and 7 in the morning."},{Start:129320,End:131880,Text:"Often, a fire starts because of something "},{Start:131880,End:134880,Text:"very simple, something you don’t expect."},{Start:135880,End:136920,Text:" For example, "},{Start:136960,End:139200,Text:"when you are cooking and you forget about it "},{Start:139200,End:140840,Text:"and leave it to burn."},{Start:142320,End:144680,Text:"During a fire, the best advice is "},{Start:144680,End:147440,Text:"to, ‘Get low and go, go, go’."},{Start:147920,End:149160,Text:"Don’t stand!"},{Start:149600,End:152000,Text:"Smoke rises to the top of a room,"},{Start:152200,End:154160,Text:"so it’s important to get low "},{Start:154160,End:155960,Text:"and get outside quickly."},{Start:157160,End:159840,Text:"Most people don’t die from burns,"},{Start:159880,End:163120,Text:" but from breathing smoke and poisonous gases."},{Start:164440,End:166200,Text:" If your clothes catch fire, "},{Start:166280,End:169440,Text:"remember to ‘Stop, drop and roll’ "},{Start:169440,End:171400,Text:"to try and put out the flames."},{Start:172560,End:175000,Text:"Never go back into a burning house "},{Start:175000,End:176760,Text:"to get things or a pet."},{Start:177240,End:179680,Text:" Tell the firefighters when they arrive."},{Start:180960,End:184680,Text:"But fire safety doesn’t stop once you are outside."},{Start:185120,End:186920,Text:"If you enjoy barbecues, "},{Start:187080,End:189560,Text:"then it must be at least two metres away "},{Start:189560,End:190720,Text:"from your house."},{Start:191520,End:193960,Text:" And always have a bucket of water "},{Start:193960,End:195600,Text:"or sand nearby."},{Start:196480,End:199640,Text:"Take extra special care while in nature."},{Start:200520,End:202760,Text:" Four out of five wildfires "},{Start:202760,End:204320,Text:"start because of people. "},{Start:205360,End:207720,Text:"And if you see a fire in nature, "},{Start:207840,End:210840,Text:"call the emergency services immediately."}]},
{id:48,Parts:[{time:9000},{time:34000}],SubsArray:[{Start:13375,End:15500,Text:"Watch and listen."},{Start:20833,End:22208,Text:"schedule"},{Start:26666,End:28666,Text:"instructor"},{Start:48500,End:52208,Text:"Hello. East Youth Club. How can I help you? "},{Start:52208,End:53916,Text:"Hello, I’d like some information "},{Start:53916,End:56166,Text:"about the new karate course, please."},{Start:56416,End:58166,Text:" Could you tell me how much it costs?"},{Start:58500,End:60750,Text:" It’s £35 per month. "},{Start:61250,End:64458,Text:"OK… and how long does the course last?"},{Start:64749,End:67000,Text:" It lasts for three months."},{Start:67375,End:70291,Text:"Erm… can you tell me how old you are?"},{Start:70625,End:72166,Text:"You see, for this course,"},{Start:72166,End:75041,Text:"you have to be over fifteen to attend. "},{Start:75375,End:78166,Text:"Well, I’ll be fifteen next month."},{Start:78333,End:79750,Text:"Would that be a problem?"},{Start:80041,End:81041,Text:"Next month?"},{Start:81416,End:84000,Text:"Well… in that case you can join the class."},{Start:84500,End:86041,Text:"Mr – ah-choo – "},{Start:86291,End:88791,Text:"Aichi is going to be your instructor. "},{Start:89041,End:90166,Text:" Excuse me, "},{Start:90166,End:91583,Text:"would you tell me what the name"},{Start:91583,End:93291,Text:" of the instructor is again, please?"},{Start:93500,End:95000,Text:" Is it Aichoo? "},{Start:95208,End:98000,Text:"No, young man. Mr Aichi. "},{Start:98208,End:99541,Text:"Oh, OK."},{Start:99541,End:100625,Text:"Great then."},{Start:100708,End:101625,Text:"Could you let me know "},{Start:101625,End:103416,Text:"when the class takes place?"},{Start:103916,End:106250,Text:"Well, let me check the schedule… "},{Start:106958,End:109541,Text:"Let’s see here. Umm…"},{Start:109541,End:112875,Text:"every Thursday at six o’clock. Room 4."},{Start:114041,End:117250,Text:"<i>On Thursday at six o’clock…</i>"},{Start:122291,End:123250,Text:"Oops! "},{Start:123583,End:126625,Text:"I think you are looking for Mr Aichi’s class. "},{Start:126625,End:128291,Text:"It’s in room 14."},{Start:128541,End:130916,Text:"Umm, thanks!"}]}
];



var subs;
var videoCurrent=1;
var scale=1;




if(window.name=="First"){
introLock=1	;

}

	 try{if(localStorage.getItem("project")){
		var root=JSON.parse(localStorage.getItem("project"));
		var flag=1;
		 $.each(root.Projects, function( index, value ) {
			if(value.Project==projectName){flag=0;return false;}

		});
		if(flag==1){
			root.Projects.push({"Project":  projectName});
			localStorage.setItem("project", JSON.stringify(root));
		}
	}
	else{
		localStorage.setItem("project", '{"Projects":[{"Project": "'+ projectName +'"}]}');
	 }
	 }catch(err){}




function coords(e,rel){
	var IWB= $(".IWB").offset();
	var click={};
	var box={};
	var str={};
	try{
		if(e.originalEvent){
			click.top=e.originalEvent.changedTouches[0].clientY;
			click.left=e.originalEvent.changedTouches[0].clientX;
		}
		else{
			click.top=e.changedTouches[0].clientY;
			click.left=e.changedTouches[0].clientX;

		}
	}
	catch(err){
		click.top=e.clientY;
		click.left=e.clientX;
	}
	box.top  = $(rel).offset().top;
	box.left = $(rel).offset().left;

	str.top=(click.top-box.top)/scale;
	str.left=(click.left-box.left)/scale;

	return str;
}


$( document ).ready(function() {

//intro fix
if(typeof year === 'undefined' || year === null){window.location.href = "Intro.html";}
var today = new Date();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(yyyy>year||(yyyy==year&&mm>10)){
	window.location.href = "Intro.html";
}

$("body").append('<audio class="clickSound"><source src="Audio/Click.mp3" type="audio/mpeg"></audio>');


if($(window).width()<1280 || $(window).height()<960){
	if($(window).height()/$(window).width()>0.75){
		scale=$(window).width()/1280;
	$('.IWB').css({'-webkit-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'-ms-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'transform': 'scale(' + scale + ')'});
	$('.IWB').css({'left': '0px'});
	$('.IWB').css({'top': ($(window).height()-(scale*960))/2+ 'px'});

	}
	else{
		scale=$(window).height()/960;
	$('.IWB').css({'-webkit-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'-ms-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'transform': 'scale(' + scale + ')'});
	$('.IWB').css({'left': ($(window).width()-(scale*1280))/2+ 'px'});
	$('.IWB').css({'top':'0px'});

		}
}
else{
$('.IWB').css({'left': ($(window).width()-1280)/2+ 'px'});
$('.IWB').css({'top': ($(window).height()-960)/2+ 'px'});
}


var imgs = document.images,
    len = imgs.length,
    counter = 0;

$("img").each( function( ) {	
	$(this).on('load', incrementCounter ).on('error',incrementCounter).attr("src", $(this).attr("src")+ "?" + new Date().getTime());	
});//fix







function incrementCounter() {
	
    counter++;
    if ( counter === len ) {
        $(".IWB").removeClass("loading");
		try{
			if(JSON.parse(window.name)){
						
			var cor=JSON.parse(window.name);
			console.log(cor);
				if(cor.Type=="PC"||cor.Type=="PG"||cor.Type=="PR"||cor.Type=="PM"||cor.Module=="Revision"){			
					
						$(".secondVisible").removeClass("secondVisible");
						$("[data-second]").fadeOut(0);
						$("[data-second="+ cor.Type +"],.secondButtonWrapper").fadeIn(0);
						$("[data-second="+ cor.Type +"]").addClass("secondVisible");
						showSecondLevel();
					}				
					else{		
						showLesson(cor.Type,cor.Module);
					}
				}
			
		}
		catch(err){}
		window.name = null;
		 if(introLock==1)
		{ 
			$(".intro").append("<div class='playIntroSound'>Let's start</div>");			
			$(".IWB").addClass("IntroActive");			
		}
    }
}



 $(document).on("click", ".playIntroSound", function (e) {
	e.stopPropagation();
	$(this).remove();
	$(".intro audio")[0].addEventListener("ended", function(){
		$(".IntroActive").removeClass("IntroActive");
	});
	$(".intro").addClass("introNext");
	$(".intro audio")[0].play();
});
 



$(document).on("click", ".introNext", function () {
	$(".IntroActive").removeClass("IntroActive");
	$(".intro audio")[0].pause();
});



$(document).on("click", "[data-moduletarget]", function () {
	$(".mainModules,[data-module]").fadeOut(0);
	$(".mainLessons,[data-module="+ $(this).attr("data-moduletarget") +"]").fadeIn(0);
});

$(document).on("click", ".lessonBack", function () {
	$(".mainLessons").fadeOut(0);
	$(".mainModules").fadeIn(0);
});

$(document).on("click", ".lessonBack", function () {
	$(".mainLessons").fadeOut(0);
	$(".mainModules").fadeIn(0);
});

$(document).on("click", "[data-game]", function () {

	window.name = "GameModule:"+$(this).closest("[data-gamemodule]").attr("data-gamemodule");
	var loc="Games/"+ $(this).attr("data-game") +"/"+$(this).attr("data-game")+".html";
	setTimeout(function(){window.location.href =loc;}, 200);
});

$(document).on("click", ".slideshowButtonWrapper>span", function () {

	$(".slideshowButtonActive").removeClass("slideshowButtonActive");
	$(this).addClass("slideshowButtonActive");
	$(".slideshow img:first-child").css("margin-left",-$(this).index()*1280+"px")
});



$(document).on("click", "[data-extramodule]>span", function () {
	if($(this).parent().hasClass("modulesExtraExp")){
		$(".modulesExtraExp .modulesExtraSub").slideUp();
		$(".modulesExtraExp").removeClass("modulesExtraExp");
		}
	else{$(".modulesExtraExp .modulesExtraSub").slideUp();
		$(".modulesExtraExp").removeClass("modulesExtraExp");
		$(this).parent().addClass("modulesExtraExp");
		$(this).siblings(".modulesExtraSub").slideDown();

	}
});

$(document).on("click", ".modulesTrigger", function () {
	$(".modulesExtra").slideToggle();
	$(".modulesExtraExp .modulesExtraSub").slideToggle();
	$(".modulesExtraExp").removeClass("modulesExtraExp");
});

$(document).on("mousedown", "[data-secondtarget],[data-game],[data-second]:not([data-second=PG]) .secondCustomTiles>div>div,.mainBtn,[data-second]:not([data-second=VW]):not([data-second=PM]) .secondButton:not(.demoButton),[data-extramodule]>span,.modulesExtraSub>span,.secondImages div,[data-secondmodule][data-gotoframe],[data-video],.demoGrammar svg,.demoButton svg,.secondBackbtn,.primaryBtns>g,.homeBtn.mainActive,.exitBtn.mainActive,.videoPlayBtn svg,.audioPause ~ .stopBtn svg,.videoPause ~ .videostopBtn svg,.closeVideo ", function (e) {
	$(".clickSound")[0].play();
	e.preventDefault();
	$('.pressed').attr('class', function(index, classNames) {return classNames.replace('pressed', '');});
	
	$(this).attr('class', function(index, classNames) {return classNames + ' pressed';});
});



$(document).on("mouseenter touchstart", "[data-secondtarget],[data-game],[data-second]:not([data-second=PG]) .secondCustomTiles>div>div,.mainBtn,[data-second]:not([data-second=VW]):not([data-second=PM]) .secondButton:not(.demoButton),[data-extramodule]>span,.modulesExtraSub>span,.secondImages div,[data-secondmodule][data-gotoframe],[data-video],.demoGrammar svg,.demoButton svg,.secondBackbtn,.primaryBtns>g,.homeBtn.mainActive,.exitBtn.mainActive,.videoPlayBtn svg,.audioPause ~ .stopBtn svg,.videoPause ~ .videostopBtn svg,.closeVideo ", function (e) {
	e.preventDefault();
	$('.pressed').attr('class', function(index, classNames) {return classNames.replace('pressed', '');});
	
	$(this).attr('class', function(index, classNames) {return classNames + ' pressed';});
});

$(document).on("mouseup", function () {
	$('.pressed').attr('class', function(index, classNames) {return classNames.replace('pressed', '');});
});
$(document).on("mouseleave touchend", "[data-secondtarget],[data-game],[data-second]:not([data-second=PG]) .secondCustomTiles>div>div,.mainBtn,[data-second]:not([data-second=VW]):not([data-second=PM]) .secondButton:not(.demoButton),[data-extramodule]>span,.modulesExtraSub>span,.secondImages div,[data-secondmodule][data-gotoframe],[data-video],.demoGrammar svg,.demoButton svg,.secondBackbtn,.primaryBtns>g,.homeBtn.mainActive,.exitBtn.mainActive,.videoPlayBtn svg,.audioPause ~ .stopBtn svg,.videoPause ~ .videostopBtn svg,.closeVideo ", function (e) {
	$('.pressed').attr('class', function(index, classNames) {return classNames.replace('pressed', '');});

});


$(document).on("click", "[data-secondtarget]", function () {
	$(".secondVisible").removeClass("secondVisible");
	$("[data-second]").fadeOut(0);
	$("[data-second="+ $(this).attr("data-secondtarget") +"],.secondButtonWrapper").fadeIn(0);
	$("[data-second="+ $(this).attr("data-secondtarget") +"]").addClass("secondVisible");
	showSecondLevel();
});


$(document).on("click", "[data-goto]", function () {

	var splitTxt=$(this).attr("data-goto").split(";");
	if(splitTxt[1]){window.name = '{"Frame":"'+splitTxt[1]+'"}';}
	setTimeout(function(){window.location.href = splitTxt[0] +".html";}, 200);
});

$(document).on("click", "[data-video]", function () {
	$(".IWB").addClass("loading");
	$(".videoWrapper source").attr("src","Video/"+ $(this).attr("data-video") +".mp4");
	$(".videoWrapper").css("display","block");
	vFlag=1;
	targetSub=$(this).attr("data-targetsub");
	$(".videoWrapper video")[0].load();
	$(".videoWrapper video")[0].play();

	videoCurrent=1;
});

$('.videoWrapper video').on('canplay', function(){
	if(vFlag==1){
	$(".playBtn").removeClass("playBtn").addClass("pauseBtn");
	$(".subsOn").addClass("subsOff");
	$(".subsSpan").html("");	
	$(".subsSpan").fadeOut(0);
	$("[data-videopart]").remove();
	
	
	if(targetSub){
		$.each(Subs, function( index, value ) {
			if(value.id==targetSub){
				subs=value.SubsArray;
				if(value.Parts){
					console.log(value.Parts);
					$.each(value.Parts, function( index2, value2 ) {
						var left=value2.time/1000/$(".videoWrapper video")[0].duration*200-12.5+"px";
						$(".videoBar").append("<div data-videopart="+ value2.time +" style='left:"+ left +"'>"+ String.fromCharCode((index2+65)) +"</div>");
					});
				}
				
				
			return false;}

		});
		
		
		
		
	};
	vFlag=0;
	videoInterval=setInterval(videoBar,20);
		$(".IWB").removeClass("loading");
}

});

$(document).on("click", ".videoPause", function () {


	$(".videoWrapper video")[0].pause();
	$(".videoPause").removeClass("videoPause");

	clearInterval(videoInterval);

});

 $(document).on("click", ".videoPlayBtn:not(.videoPause)", function () {
	$(".videoWrapper video")[0].play();
	$(this).addClass("videoPause");
	videoInterval=setInterval(videoBar,20);
});

$(document).on("click", ".closeVideo", function () {
	clearVideo();
	$(".videoWrapper").fadeOut(0);
});

$(document).on("click", ".subsOff", function () {
	$(".subsOff").removeClass("subsOff");
	$(".subsSpan").fadeIn(0);
});

$(document).on("click", ".subsOn:not(.subsOff)", function () {
	$(".subsOn").addClass("subsOff");
	$(".subsSpan").fadeOut(0);
	});

$(document).on("click", ".videoBar", function (e) {
	$(".subsSpan").html("");
	if(!$(e.target).is("[data-videopart]")){
    clearInterval(videoInterval);
	var left=coords(e,".videoBar").left;
	var percentage = (left)/$(this).width();
	var crTime=percentage*$(".videoContainer video")[0].duration*1000;
	$(".videoContainer video")[0].currentTime=percentage*$(".videoContainer video")[0].duration;
	
	$.each(subs, function( index, value ) {
		if(index==0&&value.Start>crTime){
			$(".subsSpan").html("");videoCurrent=1;return false;
			}
		try{
			if(value.Start<crTime){
				videoCurrent=index+1;
				if(value.End>crTime){
					$(".subsSpan").html(subs[videoCurrent-2].Text);
				}
				return false;
			}
		}catch(err){}
	});
	videoInterval=setInterval(videoBar,20);
	}
});

$(document).on("click", "[data-videopart]", function (e) {
	$(".subsSpan").html("");
    clearInterval(videoInterval);
	
	$(".videoContainer video")[0].currentTime=$(this).attr("data-videopart")/1000;
	var crTime=$(".videoContainer video")[0].currentTime;
	$.each(subs, function( index, value ) {
		if(index==0&&value.Start>crTime){$(".subsSpan").html("");videoCurrent=1;return false;}
		try{if(value.Start<crTime){videoCurrent=index+1;if(value.End>crTime){$(".subsSpan").html(subs[videoCurrent-2].Text);}return false;}
		}catch(err){}
	});
	videoInterval=setInterval(videoBar,20);
});

$(document).on("click", ".videoPause ~ .videostopBtn svg", function () {


		clearVideo();
		$(".videoPlayBtn").removeClass("videoPause");
});

$('.videoContainer video').on('ended', function() {
   clearVideo();
	$(".pauseBtn").removeClass("pauseBtn").addClass("playBtn");
	$(".videoWrapper").fadeOut(0);

});

$(document).on("click", "[data-secondmodule]:not([data-gotoframe])", function () {

		$(".secondButtonHidden").removeClass("secondButtonHidden");
		$(this).addClass("secondButtonHidden");
		$(".secondMore").html($(this).html());
		
		//$(".logoImg img").attr("src","");//change

		$(".secondMore").attr("data-secondtargetmodule",$(this).attr("data-secondmodule"));
		$(".secondMore").fadeIn(0);
		$(".secondButtonWrapper").fadeOut(0);


});

$(document).on("click", "[data-secondmodule][data-gotoframe]", function () {
	var pre="Portal";
	window.name = '{"Frame":"'+ $(this).attr("data-gotoframe")+'"}';
	if($(this).closest("data-second")=="GB"){pre="Module"}
	var loc="EX/"+pre + $(this).attr("data-secondmodule") +".html";
	setTimeout(function(){window.location.href = loc;}, 200);


});

$(document).on("click", "[data-type='VC']:not([data-disabled])", function () {

	if($(this).parents("[data-extramodule]").length>0){
		window.name = '{"GlossaryMain":"'+ $(this).closest("[data-extramodule]").attr("data-extramodule")+'"}';
	}
	setTimeout(function(){window.location.href = "EX/Vocabulary.html";}, 200);
});

$(document).on("click", "[data-type='ABC']:not([data-disabled])", function () {

	setTimeout(function(){window.location.href = "EX/ABCBook.html";}, 200);
});


$(document).on("click", "[data-extra]", function () {
	showLesson($(this).attr("data-extra"),$(this).closest("[data-extramodule]").attr("data-extramodule"));

});

$(document).on("click", ".modulesExtraSub span", function () {
$(".modulesExtra").fadeOut(0);

});


$(document).on("click", ".secondImages div", function () {
	var type=$(this).closest("[data-second]").attr("data-second");
	var mod=$(this).closest("[data-secondtargetmodule]").attr("data-secondtargetmodule");	
	var img=$(this).children("img").attr("src").replace("Images/Spreads/","");//fix
	window.name = '{"Image":"'+img.substr(0,img.indexOf("_thumb"))+'"}';//fix
	
	
	
	console.log(window.name);
	if($(this).closest("[data-second]").attr("data-second")=="ABC"){setTimeout(function(){window.location.href = "EX/ABCBook.html";}, 200);}
	else{

	if(mod=="Hello"){
		setTimeout(function(){window.location.href = type+"/Hello.html"}, 200);}
	else{
		setTimeout(function(){window.location.href = type+"/Module"+ mod +".html";}, 200);
		}
	}
});








$(document).on("click", ".secondBackbtn", function () {	
	//$(".logoImg img").attr("src","Images/Main/logoMain.png"); //change
	var inp=$(".secondVisible").attr("data-second");

	try
	{
		
		if($(".secondVisible .secondMore").html().length>20){
			console.log("bbbb");
			$(".secondVisible .secondButtonWrapper").fadeIn(0);
			$(".secondVisible .secondMore").fadeOut(0).html("");
			$(".secondButtonHidden").removeClass("secondButtonHidden");		
		}
		else{
			console.log("cccc");
			$("[data-second]").fadeOut(0);
			showFirstLevel();
			$(".main [data-secondtarget]").each(function( index, value ) {			
				if($(this).attr("data-secondtarget")==inp){
					if($(this).closest("[data-second]").length>0){$(this).closest("[data-second]").fadeIn(0);
					showSecondLevel();}
					return false;}
			});	
		}
	}
	
	catch(err){
		$("[data-second]").fadeOut(0);
		showFirstLevel();
		$(".main [data-secondtarget]").each(function( index, value ) {		
		if($(this).attr("data-secondtarget")==inp){
			if($(this).closest("[data-second]").length>0){$(this).closest("[data-second]").fadeIn(0);
			showSecondLevel();}
			return false;
			}
	});
	}
	
	
});	



$(document).on("click", ".homeBtn", function () {
	showFirstLevel();
});


function showSecondLevel(){
	$(".firstLevel").fadeOut(0);
	$(".secondLevel").fadeIn(0);
	$(".homeBtn").attr("class","homeBtn mainActive");

}

function showFirstLevel(){
	$(".secondButtonHidden").removeClass("secondButtonHidden");
	$(".secondMore").html("");
	$(".secondLevel").fadeOut(0);
	$(".firstLevel").fadeIn(0);
	$(".homeBtn").attr("class","homeBtn mainInactive");
	$(".secondVisible").removeClass("secondVisible");
}

function showLesson(second,module){
	$(".secondVisible").removeClass("secondVisible");
	$("[data-second]").fadeOut(0);
	$("[data-second="+ second +"]").fadeIn(0).addClass("secondVisible");


	var inp=$("[data-second="+ second +"] [data-secondmodule="+ module +"]>div:first-child");
	$(".secondButtonHidden").removeClass("secondButtonHidden");
	inp.parent().addClass("secondButtonHidden");
	$(".secondMore").html(inp.closest(".secondButton").html()).attr("data-secondtargetmodule",module);
	$(".secondMore").slideDown(0);
	$(".secondButtonWrapper").fadeOut(0);

	showSecondLevel();
	$(".modulesExtra").slideUp(0);
	$(".modulesExtraExp .modulesExtraSub").slideUp(0);
	$(".modulesExtraExp").removeClass("modulesExtraExp");

}

function clearVideo(){
try{
clearInterval(videoInterval);
}
	catch(err){}
$(".videoContainer video")[0].pause();
try{$(".videoContainer video")[0].currentTime=0;}catch(err){}
$(".videoPlayBtn").addClass("videoPause");
$(".videoTimer").html("00:00");
$(".videobarRed").css("width","0px");
videoCurrent=1;	
	
}

function videoBar(){
var percentage=$(".videoContainer video")[0].currentTime/$(".videoContainer video")[0].duration;
var phrTime=$(".videoContainer video")[0].currentTime*1000;
if(percentage>1){percentage=1;}
var soundBarWidth=$(".videoBar").width();
var bWidth=percentage*soundBarWidth;
$(".videoBar .videobarRed").css("width",bWidth+"px");

var tr = minTwoDigits(Math.floor(($(".videoContainer video")[0].currentTime + 1) / 60)) + ":" + minTwoDigits(Math.ceil($(".videoContainer video")[0].currentTime) % 60);
$(".videoTimer").html(tr);	
if(subs){
	try{if(phrTime>=subs[videoCurrent-1].Start){
			$(".subsSpan").html(subs[videoCurrent-1].Text);
		}	
	}catch(err){}

	try{if(phrTime>=subs[videoCurrent-1].End){
			$(".subsSpan").html("");
			videoCurrent++;		
		}
	}catch(err){}
}	
}

function minTwoDigits(n) {
		return (n < 10 ? '0' : '') + n;
	}

//Modules&more close
$(document).mouseup(function (e) {
   if (!$(".modulesMore").is(e.target) // if the target of the click isn't the container...
   && $(".modulesMore").has(e.target).length === 0) // nor a descendant of the container
   {
     $(".modulesExtra").slideUp();
  }
});

$(window).resize(function() {



  if($(window).width()<1280 || $(window).height()<960){
	if($(window).height()/$(window).width()>0.75){
		scale=$(window).width()/1280;

	$('.IWB').css({'-webkit-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'-ms-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'transform': 'scale(' + scale + ')'});
	$('.IWB').css({'left': '0px'});
	$('.IWB').css({'top': ($(window).height()-(scale*960))/2+ 'px'});

	}
	else{
		scale=$(window).height()/960;
	$('.IWB').css({'-webkit-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'-ms-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'transform': 'scale(' + scale + ')'});
	$('.IWB').css({'left': ($(window).width()-(scale*1280))/2+ 'px'});
	$('.IWB').css({'top':'0px'});

		}
}

else{
$('.IWB').css({'-webkit-transform': 'scale(1)'});
	$('.IWB').css({'-ms-transform': 'scale(1)'});
	$('.IWB').css({'transform': 'scale(1)'});
$('.IWB').css({'left': ($(window).width()-1280)/2+ 'px'});
$('.IWB').css({'top': ($(window).height()-960)/2+ 'px'});
}

});


});
