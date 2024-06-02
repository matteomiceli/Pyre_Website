// PAGE ELEMENTS
const popup = document.querySelector(".popup-overlay");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector("sidebar-container");
const sidebarContent = document.querySelector(".sidebar-content");

// Object containing all the place info

const placesInfo = {
  ithaar: {
    place: "Ithaar",
    leader: "The Faceless Council",
    description: `In the centre of the known world floats the small island country of Ithaar, the jewel of Shanai. The Ithaari were early masters of navigational science and seacraft, gaining naval dominance, joining the known world  together with trade. Though its land does not yield an abundance of resources, nor its population a vast army, Ithaar is undoubtedly the wealthiest country in Shanai through trade and a careful control of the seas. For a thousand years, Ithaar has been ruled by an order known as the faceless council. The council meets in secret, their identities unknown and members are appointed only after the death of a sitting member.`,
  },
  tenzu: {
    place: "Tenzu",
    leader: "Farazul the Pirate King",
    description: `At a glance, the crystal blue waters around the island of Tenzu are a paradise, warm and teeming with beauty, but look closely and they are stained with blood. From his driftwood throne, the Pirate King of Tenzu terrorizes the southern seas of Shanai, plundering the wealth of the surrounding shores and sinking any ships that get in the way. While the promise of gold has been enough for most of history's pirates, Farazul seeks to fashion himself into a king, conquering an island and turning into a haven for robbers and thieves. There is fear among those in the area that the larger his following grows, the more bold he will become when he seeks a new target.`,
  },
  sleet: {
    place: "Sleet",
    leader: "Amrazara Faithe",
    description: `Sleet is an ancient city located in the Shattered Isles, believed to have survived whatever cataclysm devastated the land so many thousand years ago. It is said that Sleet was once battered by storms year round. The buildings were built of stone, stout and simple to withstand wind and rain. That image of an ancient, rainy Sleet is hard to imagine today with its calm glassy waters and balmy weather. The people of the city are as warm and welcoming as the weather, keeping a rich culture of seafaring, music, and, above all else, food. Sleet is responsible for giving Shanai some of its greatest cooks and is the first place any lord comes to when looking for someone to run their kitchens. Sleet has a small navy that has been stretched to its limits since the Pirate King's occupation of Tenzu. With more crowded waters, the outdated Sleet ships find themselves skirmishing often with Crimson Sails, a losing battle the city cannot afford.`,
  },
  mercaia: {
    place: "Mercaia",
    leader: "King Saladir Vidalak",
    description: `An ancient seat of power in the east, Mercaia is one of the oldest countries in Shanai. At one point the borders of Mercaia contained much of the east, a period where house Vidalak had three generations of ascended Godkings on the Gilded Throne. The nearby hills were mined for gold and copper and it was said that their yields were so great that the masons added gold flecks to every brick so that the buildings would shimmer in the sunlight. In truth, the city owes its golden shine to the unique color of the sand of its beaches which happen to also be used in brick making. Today, the mines have dried up and Mercaia's borders have shrunken to include the city of the same name and the nearby Hadria. The country is known more for its beauty rather than war or conquest. People come from all over to admire the city's architecture, enjoy the warm weather and bask on its golden beaches. Poets, painters, and musicians from all over flock to Mercaia, seeking to find their fame in the ale-slick taverns of the entertainment district.`,
  },
  hadria: {
    place: "Hadria",
    leader: "Master Archivist Kalaban",
    description: `On a clear day, one can see Hadron's tower halfway across the Silent Sea, proudly marking the location of Hadria's great archives. Built by Hadron, the first king of Mercaia, the library is said to be so vast that it contains all the words ever written. Though this myth is easily disproven by the fact that archivists still return from all corners of Shanai with new additions. The city itself exists to sustain the archives, housing and feeding its sizeable staff, providing shelter and entertainment to visitors, and fulfilling research requests that come in from all of Shanai.`,
  },
  usol: {
    place: "Usol",
    leader: "Alahar Navros, the Liberator of Usol",
    description: `The tribes of Usol were once farmers, living off the fruits of the fertile mountain valley. When they were swallowed by the Obsidian Empire, they were absorbed into a strict caste system and had their lands seized by wealthy colonials. They were forced into the mines, working in harsh conditions with little regard for safety. Many of them died. But from this hardship rose a hero called Alahar Navros, a bastard orphan from Yoros who gambled his life for freedom. Wielding a massive warpick, Alahar rallied the miners of his camp to overthrow their Tubul captors. This small ripple of a rebellion grew into something greater and soon all of Usol was free. Using his charisma, Alahar has also liberated Soule, weaponizing the anger of the common folk to overthrow their masters. With his following only growing there a fears that Alahar may spark a war in a region that has only known peace for a hundred years.`,
  },
  soule: {
    place: "Soule",
    leader: "Drudgen Stonehands",
    description: `Before being conquered by the Obsidian Empire, Soule was the largest dwarven freehold in Shanai, known for its impenetrable wall. It wasn't until the Obsidian Empire poisoned the upstream water supply during a prolonged siege that Soule was finally defeated. For two hundred years, the Obsisdian Empire used Soule dwarves to build their walls and palaces, die in wars, and brew their mead. Currently in open rebellion against Godking Victarian the Younger, the people of Soule heard Alahar's call to arms and answered, overthrowing their masters and taking back their ancestral home.`,
  },
  yllan: {
    place: "Yllan",
    leader: "Donda Vereshi",
    description: `The port of Yllan runs day and night, sending out ships overflowing with ore and stone and receiving, in exchange, silks, pottery, and other riches from the rest of Shanai. Along with the port, Yllan is also home to the Stone Vault, a bank with a reserve of gold built safely into a mountain. The value of assets in the Stone Vault go beyond the count of any other, allowing the Yllani to satisfy the requirements for even the wealthiest clients. Despite the wealth it contains, Yllan is modest in its design. It's a clean city with simple, yet functional, architecture. The people are mostly of middle caste -- bankers, merchants, or skilled craftsmen.`,
  },
  umberfhel: {
    place: "Umberfhel",
    leader: "",
    description: `When the first Selerian expeditions sailed far north, few ships returned home. Those that did told of an icy land where snow fell ceaselessly and the wind could freeze uncovered skin in the span of a heartbeat. In this hell, where seemingly nothing could survive, the explorers stumbled across a ruined city half buried in the ice. There seemed to be no end to the sprawling streets and crumbled buildings of the abandoned city, it stretched on as far as they could see. When members of their party started to go missing in the night, the expedition decided to return home -- they had lost enough people. Few explorers have returned from Umberfhel. None have found the end of the city nor the end continent.`,
  },
  seleria: {
    place: "Seleria",
    leader: "Agmon Nair",
    description: `It is said that before Selerian children can walk, they learn to sail. The first seaworthy ship was built in Seleria by the elf Tilabir and since then, the city has launched a million vessels. The Seleri are proud explorers, cartographers, and legendary weather workers who push the boundaries of the known world further with each expedition. Once a colony of Mercaia, the Selerians bartered for their independence by offering to build Mercaia one thousand ships. When the agreement was settled, the Selerians delivered a thousand toy wooden ships across Sawfish Cove. True to their word, Mercaia granted them independence.`,
  },
  darun: {
    place: "Darun",
    leader: "Ferik Hasen",
    description: `It is believed that Darun was founded by refugees fleeing Mercaian expansion. They hid in the desert, a place so harsh and desolate that their pursuers would not dare follow. Over time, they began to learn the ways of the desert and started to thrive. They soon called the desert home, building a city of sandstone and vowing never to be refugees again. Known for wielding the legendary Yakul, a curved sword made for hacking, Daruni warriors are feared for their ruthlessness in combat. They have incredible battle sense and are equally effective on their own as they are in ranks. The lands of Darun are alive with myserious forces, as is much of the desert. At night the Daruni believe spirits whisper in the valleys between dunes and demon maidens cry out in the night trying to lure victims out into the endless dark. The Daruni do not fear the deep desert so much as they respect and worship it. They'll only ever venture out in the light of the day and make offerings to Ket, shepherd of souls, a being they believe dwells under the sand.`,
  },
  "port-tivar": {
    place: "Port Tivar",
    leader: "Jas Hreem",
    description: `Many enter Tivar's port on their way to deliver goods along the east coast of the Silent Sea, being guided to shore by the ancient Green Lighthouse, a moss-covered tower half crumbling into the sea. It is a place where sailors can always find a warm meal and a dry bed -- a refuge to wait out storms. The people of Tivar are welcoming but keep to themselves. Most are members of the Cult of the Drowned Lady, a mysterious order that seems to fear the deep in the same breath it worships it. Tivar is no different from the rest of the east and is steeped in rich magics that few but members of the cult seem to understand.`,
  },
  yoros: {
    place: "Yoros",
    leader: "Sorceress Asha Rheem",
    description: `Standing resilient at the edge of the harsh Red Desert, the black walls of Yoros have weathered storms and earthquakes for unknown centuries. Being so close to the Efretes, the land is steeped in a sorcery few can explain and even fewer can harness. Those that can should count themselves lucky to be in one of the few places in Shanai where such talents are fostered. Fledgling sorcerers are sent from their respective corners of Shanai to study under the tutelage of Yoros's many masters. Most go on to make a good living selling love potions, healing minor ailments, and casting luck cantrips for a few silver coins. But a select few serve in the hallowed courts of Godkings, command great fleets, or advise on matters of state. Though the extent of their sorcery is not known, the magi of Yoros are still as feared as they are mysterious.`,
  },
  tubul: {
    place: "Tubul",
    leader: "Godking Victarian the Younger",
    description: `The longest unbroken line of Godkings sits the starless throne of Tubul. A proud and stubborn place, the great palace has never before been breached in siege. The crown city itself breeds a strong lot, builders, miners, and soldiers. There is little time for poetry or politics, and in the harsh stony terrain of the mountains, sowing seeds is a futile effort. Tubul society has a strict caste system based on one's position at birth. Traversing this hierarchy, while not impossible, is rarely done. It is not uncommon for incumbent high ranking families to be nearly as old as the city itself. Frustrations with this caste system in the empire has led to the ongoing uprisings in the colonies, headed by Alahar the Yorosi.`,
  },
  sedhar: {
    place: "Sedhar",
    leader: "Warchief Unnu",
    description: `The Sedhari rule the peninsula from their saddles. A nomadic people, they call the entirety of the plains home and defend it with fervour. There is no city that can define the borders of Sedhar, it is a collection of shifting tribal settlements that cover a massive area. In combat, the Sedhari favour light calvary, striking with spears and hide shields. They are known especially for their expertise with slings, being able to loose a stone from horseback with great accuracy. The Sedhari are an independent people, but have been known to outsource their talents for dealing death when the coin is right.`,
  },
  kepe: {
    place: "Kepe",
    leader: "Avros Myr",
    description: `Located on the largest island of the Shattered Claw, Kepe is a small city surrounded by rolling green hills dotted with grazing sheep. Olives and grapes grow plentifully in the warm climate and the people of Kepe have turned winemaking into an art form. Those with the taste for fine wines swear by no other than a Kepean golden red, with some bottles being sold to collectors for over a thousand gold pieces. Kepe is also known for another export: archers. Kepean children learn to use a bow early in life, playing at target practice or simulating war with blunted arrows. It is no wonder that they grow up to become deadly shots. Though not a warfaring people themselves, Kepean archers have been known to earn riches fighting the wars of others.`,
  },
  veithaar: {
    place: "Veithaar",
    leader: "Keeper Merin Slint",
    description: `When approaching the city of Veithaar you cannot help but marvel at the tallest structure in all of Shanai, the Moon of Istral. The ancient lighthouse is made of black stone and stands over one hundred metres high. A massive flame burns brightly in the lantern room to guide sailors safely through the pass of Ithaar. According to legend, the Keepers, members of the cult of Istral, have fed the same flame since the basin was first lit over a thousand years ago.`,
  },
  lyreth: {
    place: "Lyreth",
    leader: "Godking Hikan Naki",
    description: `Before it ever had a name, the people of Lyreth were harvesting and producing silk. What was originally a traditional practice passed down through generations quickly became a business opportunity when traders from Ithaar arrived in the village. The Ithaari were entranced by the light shiny fabric and offered gold to buy it off the backs of the Lyretheen. Hundreds of years later and Lyreth is the beating heart of the Silk Empire and the largest city in Shanai. It is said that it takes two whole days to cross from one end of the city to the other, not for the sheer size of it, but because it's streets are so dense with vendors and people. Because Lyreth is not a port city, all trade goods must pass through the Silk Port by way of road. While normally slow, the Lyretheen have designed their road system to be evenly paved and guarded by regular outposts, making travel along them safer and faster.`,
  },
  "silk-port": {
    place: "Silk Port",
    leader: "Bureaucrat Mikken Volsh",
    description: `Silk Port was built for the purpose of shipping silks, spices, and other goods from the Silk Empire to the rest of Shanai. No expense was spared, the port was made of stone so that it would last for generations. The city itself was built with stone and made with room to spare to accommodate future growth as the silk trade continues to prosper.`,
  },
  graev: {
    place: "Graev",
    leader: "The Council of Elders",
    description: `Far up river from Lyreth is the city of Graev, isolated on the most westerly shore of Shanai. Long ago Graev was once the sole power in the region, ruled by the Farix line of Godkings. The fortress city was a marvel of ancient architecture and its army was unrivalled in size and in zeal. But once the silk trade began, Lyreth, growing fat and wealthy, set its sights on Graev. The bloody war lasted only two months, the house of Farix falling to a Lyrethi host of hired swords, spears, and bows. With each passing year, the magnificent city creeps deeper into ruin, still wearing the scars of a war two hundred years old. Any income from trade gets taxed and the council has few resources to make real change. But whispers of a hero from the Obsidian Empire called Alahar have reached Graev, the stories inspiring hope for liberation.`,
  },
  "shai-yn": {
    place: "Shai Yn",
    leader: "Veryn Vi",
    description: `Shai Yn is an island of stoney shores and tall cliffs between the Obsidian Empire and the Empire of Fog. Throughout history, wars between the two empires have been fought on its soil. Being a neutral city, the people of Shai Yn were tired of foreign wars so they evolved a natural defence -- not high walls, not a powerful army, but a house of assassins, answering not to coin but to the will of the state. The unseen, unheard hand of Shai Yn's justice extended deep into the palaces of its enemies. Only one year after the founding of the House of Death, invaders stopped landing on Shai Yn's shores. Aside from its assassins, Shai Yn is known for its rich deposits of copper ore and its fishing trade, which sees thousands of barrels of salted Shai Minnows go out to all corners of Shanai where it's consumed as a delicacy.`,
  },
  qyiax: {
    place: "Qyiax",
    leader: "Godqueen Mara Aryn",
    description: `The crown city of the Empire of Fog, Qyiax stands on the stormy coast, shrouded, nearly year round, in a veil of fog. The first pride of Qyiax is Copper Hall, the foremost school for alchemy in Shanai, famous for being the place where blastpowder was invented. Prospective students from all over Shanai come to study at Copper Hall but only fifty are taken in each cohort. The second pride of Qyiax is the aptly named Canon Forge where the massive siege canons unique to Qyiax's military success are made. The dwarves of the Canon Forge are said to be able to craft anything of metal no matter how intricate.`,
  },
  kwaixl: {
    place: "Kwaixl",
    leader: "Xazel Yydd",
    description: `Kwaixl is a fishing town, far away from the Efretes mountains, far from the influence of its strange magic. Yet sorcery hangs like a thick cloud over the city, bringing premonitions to its people and storms to its shores. With stories being carried on the seas, the cult of the drowned lady has begun to take root in Kwaixl all the way from Yoros. The people of Kwaixl can relate to seeing strange things in the deep and the nightmarish, half-prophetic visions that haunt their dreams.`,
  },
  zerqan: {
    place: "Zerqan",
    leader: "Kirla Kun",
    description: `Built on the northern edge of Bluefin Lake, Zerqan is the industrial backbone of the Fog Empire war machine. The earth beneath Zerqan is home to the only known deposit of saraleen, a mineral that can be processed into blastpowder, which is used in Qyiaxan canons and small arms. Saraleen is mined and purified in Zerqan, but the secret of blastpowder is well guarded, so the saraleen is carted over to Qyiax to be processed. Zerqan is a labyrinth of meandering streets and tall buildings that comes alive with music and laughter in the evenings.`,
  },
  efretes: {
    place: "Efretes",
    description:
      "The unpassable mountain range known as the Efretes marks the eastern boundary of Shanai. A strange and mysterious force hangs over the Efretes, leeching into the nearby lands infecting dreams and bringing the spark of sorcery to Shanai. Many explorers have tried to map the range, but find their maps entirely innacurate the next day, swearing that the landscape shifts by the hour, mountains moving like ocean waves. Some brave souls have tried crossing the range, never returning to see home again.",
  },
};

for (const [placeKey, placeInfo] of Object.entries(placesInfo)) {
  // attach event listener
  const areaMap = document.getElementById(placeKey);
  areaMap.addEventListener("click", (e) => {
    clear();
    getInfo(placeInfo);
  });
}

// Click Handler
function getInfo(info) {
  const Header = document.createElement("h3");
  Header.innerHTML = info.place;
  sidebarContent.appendChild(Header);

  if (info.leader != undefined) {
    const Leader = document.createElement("h4");
    Leader.innerHTML = info.leader;
    sidebarContent.appendChild(Leader);
  }

  const Content = document.createElement("p");
  Content.innerHTML = info.description;
  sidebarContent.appendChild(Content);
}

// Clears sidebar
function clear() {
  sidebarContent.innerHTML = "";
}

// Event listeners
closeBtn.addEventListener("click", () => {
  clear();
  const placeholder = document.createElement("p");
  placeholder.innerHTML =
    "<em>Click a place on the map to begin exploring Pyre!</em>";
  placeholder.classList.add("placeholder");
  sidebarContent.appendChild(placeholder);
});

// For popup/modal
// const popupActive = () => {
//     popup.classList.add('overlay-active');
// }