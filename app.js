// MAP AREAS
const faneArea = document.querySelector('#fane');

// PAGE ELEMENTS
const popup = document.querySelector('.popup-overlay');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('sidebar-container');
const sidebarContent = document.querySelector('.sidebar-content');
const zoomIn = document.querySelector('.zoom-in');
const zoomOut = document.querySelector('.zoom-out');
const pyreMap = document.querySelector('.pyre-map');


faneArea.addEventListener('click', () => {
    clear();

    const faneHeader = document.createElement('h3');
    faneHeader.innerHTML = 'Fane'
    sidebarContent.appendChild(faneHeader);
    
    const faneContent = document.createElement('p');
    faneContent.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
    tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis 
    convallis convallis tellus id.`;
    sidebarContent.appendChild(faneContent);
});

zoomIn.addEventListener('click', () => {
    zoomIn.style.width('50%');
});


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

const popupActive = () => {
    popup.classList.add('overlay-active');
}