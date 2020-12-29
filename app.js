// MAP AREAS
const faneArea = document.querySelector('#fane');
const trigArea = document.querySelector('#trig');
const belfrostArea = document.querySelector('#belfrost');
const foArea = document.querySelector('#fo');
const maulArea = document.querySelector('#maul');
const annisArea = document.querySelector('#annis');
const alldarkArea = document.querySelector('#alldark');
const dilothArea = document.querySelector('#diloth');
const westfallArea = document.querySelector('#westfall');
const tuskArea = document.querySelector('#tusk');
const aroArea = document.querySelector('#aro');
const tethArea = document.querySelector('#teth');
const lykaArea = document.querySelector('#lyka');
const baldurkeepArea = document.querySelector('#baldurkeep');
const anethyrArea = document.querySelector('#anethyr');
const faelaenArea = document.querySelector('#faelaen');
const bahzArea = document.querySelector('#bahz');
const karathuhmArea = document.querySelector('#karathuhm');
const mystraArea = document.querySelector('#mystra');
const duinArea = document.querySelector('#duin');
const saltcliffArea = document.querySelector('#saltcliff');
const amyrArea = document.querySelector('#amyr');
const valynorArea = document.querySelector('#valynor');
const demlinArea = document.querySelector('#demlin');

// PAGE ELEMENTS
const popup = document.querySelector('.popup-overlay');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('sidebar-container');
const sidebarContent = document.querySelector('.sidebar-content');
const zoomIn = document.querySelector('.zoom-in');
const zoomOut = document.querySelector('.zoom-out');
const pyreMap = document.querySelector('.pyre-map');


// Object containing all the place info

const placesInfo = [
    {
        i: 0,
        place: 'Fane',
        description: `The island of Fane is the largest of the Demlin Isles and 
        steeped in mystery. It is home to the largest mountain in Pyre, known as 
        the God's Horn, who's peak can be seen all the way from Baldurkeep on a 
        clear day. However, not much else is known about the island. Attempts to 
        explore or colonize it have historically ended in disaster, with entire 
        companies of soldiers disappearing after landing on its shores.`
    },
    {
        i: 1,
        place: 'Trig',
        leader: 'Chief Margol the Cursed',
        description: `While still technically a colony of the Empire, Trig has 
        been forgotten due to its location in the far north and enjoys relative 
        autonomy as a result. The Orcs of Trig live in open opposition to the 
        Empire, raiding the Plains tribes to the south nearly as much as they clash
        with the other Orc colonies. Trig's leaders have been traditionally very extreme
        in their separatist beliefs, seeking to take back old lands that 
        were stolen by the Empire.`
    },
    {
        i: 2,
        place: 'Belfrost',
        leader: 'Chief Lo’tan Hoghammer',
        description: `Belfrost is the smallest of the Orcish bands. It is not considered a 
        colony under the Empire as it is said to have split from either Fo or Trig sometime 
        in the past fifty years. Not much is known about the political beliefs of Belfrost 
        Orcs, however, they have been known to come over the mountains to raid the north. 
        Their leader, Chief Lo'tan is an old general who fought against the Imperial 
        Expansion. He is known for his calm head and patience.`
    },
    {
        i: 3,
        place: 'Fo',
        leader: 'Chief Barrotan Blackmaul',
        description: `Fo is the largest of the forgotten Orcish colonies. Secluded in the 
        far north, Fo became a haven for Orcs shortly after losing the war to the Empire. Fo
        Orcs have no intentions of going to war with the empire again and simply want to be 
        left to their own business in their new northern home. Occasionally, Orcs from Fo and 
        Maul clash with militia in Di’Loth, Teth, and Westfall.`
    },
    {
        i: 4,
        place: 'Maul',
        leader: 'Chief Ragnar Bonespear',
        description: `Maul is an Orcish colony closely allied with the Fo warband. Because 
        of its location, Maul warriors often come into contact, sometimes violently, with 
        the humans of the north. While their numbers are small, Maul breeds fearsome warriors. 
        Children of the north likely know Maul for their shape changing shamans, who play the 
        villain in countless bedtime stories.`
    },
    {
        i: 5,
        place: 'Annis',
        leader: 'Lord Edwin Colburne',
        description: `Annis is a small port town isolated at the north eastern tip of the realm. 
        Far removed from the central powers of the empire, the mostly human population of Annis 
        doesn't take kindly to outsiders. Annis’s position so far from the capital also makes 
        them strangers to magic and other arcane arts. Annis has a thriving fishery and ships 
        salted fish and other preserves to the empire as their primary source of income.`
    },
    {
        i: 6,
        place: 'Alldark',
        description: `A dense forest that separates Annis from the rest of the realm. The topic 
        of many campfire stories, most travellers and traders choose to avoid the Alldark.`
    },
    {
        i: 7,
        place: `Di'loth`,
        leader: 'Mayor Excessive Warlock',
        description: `Until recently, the town of Di'loth was ruled by the Mad Mayor. After 
        starving his people and refusing to pay taxes to the Empire, the Mayor was publicly 
        assassinated. When the people held an election to determine their new leader, an outsider 
        named Excessive Warlock emerged as a contender and won the vote. Excessive rules fairly 
        and is relatively respected by the people, though it is unclear whether he intends to 
        rebuild ties to the Empire or continue to exist in opposition.`
    },
    {
        i: 8,
        place: `Westfall`,
        leader: 'Lord Gareth Vintas (The Collector)',
        description: `The northeastern town of Westfall is run by a wealthy noble, not interested 
        in the daily minutiae of ruling. It is aligned with the empire and is known as the last 
        town on The King’s Road.`
    },
    {
        i: 9,
        place: `The Tusk`,
        description: `The Tusk is the desert mountain range that marks Pyre's Western limits. It is 
        named for the thousands of bones that litter its jagged landscape. Many brave 
        explorers have sought to discover what lies beyond, but only one ever returned alive. 
        Gaviarra of the Aro is said to have returned three years after initially setting out on 
        her journey. She told of land ruled by God Kings who commanded vast empires, a land that 
        knew no magic, but harboured strange and dark forces of its own. It is said that Dallion 
        Ruhss I grew up hearing stories of Gaviarra's travels, and modelled his new Empire after the 
        ones in the stories.`
    },
    {
        i: 10,
        place: `The Aro Plains`,
        description: `The Aro Plains cover a vast chunk of west-central Pyre. The Aro is home to many 
        different eclectic groups, from wild centaurs to nomadic performers. Residents of the Aro are 
        mostly peaceful, save for the occasional conflict between tribes and Orc raids.`
    },
    {
        i: 11,
        place: `Teth`,
        leader: 'Lawmaster Deton Halfhand',
        description: `Teth is a quiet northern village under the protection of the Empire. It is famous 
        for its ale, being home to some of the finest brewmasters in Pyre. Unlike most places in Pyre, 
        Teth is run by a lawman, not politicians or lords. The people of Teth are a tough breed, hardened 
        by years of conflict with the Mad Mayor as well as Orc raids. The few soldiers allotted to the 
        Imperial Outpost are not enough to defend the village, so many of the residents have had to learn 
        to fight to survive or purchase mercenary contracts.`
    },
    {
        i: 12,
        place: `Lyka`,
        leader: 'Lady Sicura Raveen',
        description: `The closest ally to Saltcliff and one of the few remaining banners of King Berrick 
        Longstride, Lyka still fights the war against the empire. The small coastal village is known for 
        the Tobeth, a legendary school that teaches swordplay and philosophy. Tobethi swordsmen are worth 
        ten knights in battle and serve who they believe to be the true King of Pyre.`
    },
    {
        i: 13,
        place: `Baldurkeep`,
        leader: 'Gramborne Fatebringer',
        description: `Built into the mountains by the dwarves and made of steel and stone, Baldurkeep looms 
        over the western plains. Once ruled by Kairne Runehammer, this dwarven kingdom was overthrown by 
        the people’s hero, Gramborne Seigefist. After the civil war, Gramborne repaired ties with Emperor 
        Ruhss, bringing an end to eighty years of tension between men and dwarves, and earning him the name 
        Fatebringer. Gramborne rules over western Pyre as one of the Empire's closest allies.`
    },
    {
        i: 14,
        place: `Anethyr`,
        leader: 'Emperor Dalion Ruhss III',
        description: `The capital of the empire, Anethyr is the largest city in Pyre. It is the seat of power 
        in Pyre, containing the High House, The Grand Court, and the Black Keep. People from all over Pyre 
        come to settle in Anethyr, seeking opportunity and wealth. The current Emperor, Dalion Ruhss III, is a 
        fair ruler who is said to embody the values of his namesake, Dalion Ruhss I.`
    },
    {
        i: 15,
        place: `Faelaen`,
        leader: 'Lady Vyr Myrinel',
        description: `Hidden deep in the forest, the city of Faelaen is like no other. Once inhabited entirely 
        by wood elves, it has grown to become a safe-haven for all kinds of elves. Faelaen is politically neutral, 
        choosing to stay out of the conflicts of the Empire. Instead, the city has focused efforts towards the 
        spiritual and, as a result, sometimes bleeds into the Fey realm.`
    },
    {
        i: 16,
        place: `Bahz`,
        leader: 'Lord Alben Brightmorne',
        description: `Bahz is a small human village to the east and one of the few allies of Saltcliff. It is a 
        prosperous trading partner with the village of Lyka. The ruling Lord, Alben Brightmorne, is quite the 
        eccentric leader who entertains famous artists, musicians, and poets. He holds great gallas, huge feasts, and 
        epic parties. The town doesn’t complain much considering they’re always invited. Bahz is known for their 
        fierce navy and military prowess in the water.`
    },
    {
        i: 17,
        place: `Karathuhm`,
        leader: 'Mayor of the Free City, Theodore Ironwreath',
        description: `The Free City of Karathuhm has become a haven for those seeking life outside the Empire. Not at 
        war with the Empire, but not under its control, Karathuhm prides itself on its freedom. Creatures come from 
        all over to make a home in the city, from Elves to Goblins, Ogres, Tiefling, Dragonborn, and more. The city is 
        truly free and it is what the dreams of hedonists are made of. Brothels, drugs, ale, and crime flow plentifully 
        in the streets. Karathuhm’s primary export comes from its oldest and most well known institution, The Hall of 
        Silence. A place that trains assassins in the art of killing.`
    },
    {
        i: 18,
        place: `Mystra Academy`,
        leader: 'Head Mistress Alana Fekir',
        description: `The Academy is the central hub for all kinds of magic in the realm. Only the gifted are accepted. 
        It doesn’t matter from what background you come, so long as you have the talent to make it. The Academy is 
        ancient and exists so that knowledge may be preserved, discovered, and shared. It has expanded so much over 
        the years, that the Academy has nearly become the size of a city. People come from all over to learn about dark 
        and arcane arts, history, poetry, and all kinds of different topics.`
    },
    {
        i: 19,
        place: `Duin`,
        leader: 'Mayor Benjamin Fenner',
        description: `Duin is the village closest to the Academy. As such, it is a hub for art, knowledge, and entertainment. 
        Many students end up living in Duin because there is more affordable lodging in the village than in the dorms. While affiliated 
        with the empire, Duin is an ally in name only. It has no product to contribute aside from its art and has no military 
        force.`
    },
    {
        i: 20,
        place: `Saltcliff`,
        leader: 'King Berrick Longstride',
        description: `Protected by a wall on one side and the sheer edge of a cliff on the other, Saltcliff is believed to 
        be impenetrable. At war with Anethyr and the empire for hundreds of years, Saltcliff and her allies are the last 
        remaining combatants in a seemingly endless war. Because of its location, Saltcliff is the only place in the empire 
        where non-magical flight has been achieved. Hot air balloons are used for trade and warfare. Saltcliff is a monarchy, 
        ruled by the current King, Berrick Longstride. Berrick is a strong leader who wants to overthrow the Empire and take 
        back the throne for the royal family.`
    },
    {
        i: 21,
        place: `Port Amyr`,
        leader: 'Merchant Guild Leader, Master Katham',
        description: `The centre for all trade in Pyre, Port Amyr was built in the centre of the continent, on the coastline, 
        and along the King’s Old Road. It is the financial hub of the Empire and is home to most merchant families. Amyr is 
        also the centre of fishing and farming, feeding most of the empire with its exports. Money speaks louder than swords 
        and spears in Port Amyr, that is why the city is run by a democratically voted business man (usually of the merchant 
        guilds).`
    },
    {
        i: 22,
        place: `Valynor`,
        leader: 'Lord Alyr Vyriniel',
        description: `Unlike its northern cousin, Faelaen, Valynor enjoys a warm, tropical climate. Secluded on the southern 
        tip of the continent, Valynor is an elven settlement, though they welcome all. They are known for fine steel and even 
        finer wine. Valynor elves tend to be far less traditional than those from Faelaen, participating in trade with the 
        Empire and even contributing warriors in times of war.`
    },
    {
        i: 23,
        place: `The Demlin Sea`,
        description: `The Demlin Sea stretches along the east coast of the continent. It is named after the first King of Pyre, 
        Vaxus Demlin.`
    }
]


// LOGIC


// General Clickable Function 
function callInfo(placesArr, index) {
    const Header = document.createElement('h3');
    Header.innerHTML = placesArr[index].place;
    sidebarContent.appendChild(Header);

    if (placesArr[index].leader != undefined) {
        const Leader = document.createElement('h4');
        Leader.innerHTML = placesArr[index].leader;
        sidebarContent.appendChild(Leader);
    };

    const Content = document.createElement('p');
    Content.innerHTML = placesArr[index].description;
    sidebarContent.appendChild(Content);
}

// Event listeners
closeBtn.addEventListener('click', () => {
    clear();
    const placeholder = document.createElement('p');
    placeholder.innerHTML = '<em>Click a place on the map to begin exploring Pyre!</em>'
    placeholder.classList.add('placeholder');
    sidebarContent.appendChild(placeholder);
});

// Clears sidebar
const clear = () => {
    sidebarContent.innerHTML = '';
}


// Clickable Map Zones
faneArea.addEventListener('click', () => {
    clear();
    callInfo(placesInfo, 0);
});

trigArea.addEventListener('click', () => {
    clear();
    callInfo(placesInfo, 1);
});

belfrostArea.addEventListener('click', () => {
    clear();
    callInfo(placesInfo, 2);
});

foArea.addEventListener('click', () => {
    clear();
    callInfo(placesInfo, 3);
});

maulArea.addEventListener('click', () => {
    clear();
    callInfo(placesInfo, 4);
});

annisArea.addEventListener('click', () => {
    clear();
    callInfo(placesInfo, 5);
});

alldarkArea.addEventListener('click', () => {
    clear();
    callInfo(placesInfo, 6);
});

dilothArea.addEventListener('click', () => {
    clear();
    callInfo(placesInfo, 7);
});

westfallArea.addEventListener('click', () => {
    clear();
    callInfo(placesInfo, 8);
});

tuskArea.addEventListener('click', () => {
    clear();
    callInfo(placesInfo, 9);
});

aroArea.addEventListener('click', () => {
    clear();
    callInfo(placesInfo, 10);
});

tethArea.addEventListener('click', () => {
    clear();
    callInfo(placesInfo, 11);
});

lykaArea.addEventListener('click', () => {
    clear();
    callInfo(placesInfo, 12);
});

baldurkeepArea.addEventListener('click', () => {
    clear();
    callInfo(placesInfo, 13);
});

anethyrArea.addEventListener('click', () => {
    clear();
    callInfo(placesInfo, 14);
});

faelaenArea.addEventListener('click', () => {
    clear();
    callInfo(placesInfo, 15);
});

bahzArea.addEventListener('click', () => {
    clear();
    callInfo(placesInfo, 16);
});

karathuhmArea.addEventListener('click', () => {
    clear();
    callInfo(placesInfo, 17);
});

mystraArea.addEventListener('click', () => {
    clear();
    callInfo(placesInfo, 18);
});

duinArea.addEventListener('click', () => {
    clear();
    callInfo(placesInfo, 19);
});

saltcliffArea.addEventListener('click', () => {
    clear();
    callInfo(placesInfo, 20);
});

amyrArea.addEventListener('click', () => {
    clear();
    callInfo(placesInfo, 21);
});

valynorArea.addEventListener('click', () => {
    clear();
    callInfo(placesInfo, 22);
});

demlinArea.addEventListener('click', () => {
    clear();
    callInfo(placesInfo, 23);
});

// For popup/modal
// const popupActive = () => {
//     popup.classList.add('overlay-active');
// }