// MAP AREAS
const faneArea = document.querySelector('#fane');
const trigArea = document.querySelector('#trig');
const belfrostArea = document.querySelector('#belfrost');

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
        Empire, raiding the Plains tribes to the south nearly as much as they war
         with other Orc colonies. Its leaders have been traditionally very extreme
          in their separatist beliefs, seeking to take back their old lands that 
          were stolen by the Empire.`
    },
    {
        i: 2,
        place: 'Belfrost',
        leader: '',
        description: 'test'
    }
]


// LOGIC


// General Clickable Function 
function callInfo (placesArr, index) {
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

// Clears sidebar
const clear = () => {
    sidebarContent.innerHTML = '';
}

// For popup/modal
// const popupActive = () => {
//     popup.classList.add('overlay-active');
// }