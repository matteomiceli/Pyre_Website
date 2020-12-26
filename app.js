// MAP AREAS
const faneArea = document.querySelector('#fane');
const trigArea = document.querySelector('#trig');

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
        leader: 'Unknown', 
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
        description: `The island of Fane is the largest of the Demlin Isles and 
        steeped in mystery. It is home to the largest mountain in Pyre, known as 
        the God's Horn, who's peak can be seen all the way from Baldurkeep on a 
        clear day. However, not much else is known about the island. Attempts to 
        explore or colonize it have historically ended in disaster, with entire 
        companies of soldiers disappearing after landing on its shores.`
    }
]

// Logic
closeBtn.addEventListener('click', () => {
    clear();
    const placeholder = document.createElement('p');
    placeholder.innerHTML = '<em>Click a place on the map to begin exploring Pyre!</em>'
    placeholder.classList.add('placeholder');
    sidebarContent.appendChild(placeholder);
});


//Clickable Map Zones
faneArea.addEventListener('click', () => {
    clear();

    const faneHeader = document.createElement('h3');
    faneHeader.innerHTML = placesInfo[0].place;
    sidebarContent.appendChild(faneHeader);
    
    const faneContent = document.createElement('p');
    faneContent.innerHTML = placesInfo[0].description;
    sidebarContent.appendChild(faneContent);
});

trigArea.addEventListener('click', () => {
    clear();

    const trigHeader = document.createElement('h3');
    trigHeader.innerHTML = placesInfo[1].place;
    sidebarContent.appendChild(trigHeader);

    const trigLeader = document.createElement('h4');
    trigLeader.innerHTML = placesInfo[1].leader;
    sidebarContent.appendChild(trigLeader);
    
    const trigContent = document.createElement('p');
    trigContent.innerHTML = placesInfo[1].description;
    sidebarContent.appendChild(trigContent);
});

// Clears sidebar
const clear = () => {
    sidebarContent.innerHTML = '';
}

// For popup/modal
// const popupActive = () => {
//     popup.classList.add('overlay-active');
// }