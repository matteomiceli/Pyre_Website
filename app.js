// MAP AREAS
const faneArea = document.querySelector('#fane');

// PAGE ELEMENTS
const popup = document.querySelector('.popup-overlay');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar-content');





faneArea.addEventListener('click', () => {
    clear();
    // createClose(sidebar);

    const faneHeader = document.createElement('h3');
    faneHeader.innerHTML = 'Fane'
    sidebar.appendChild(faneHeader);
    
    const faneContent = document.createElement('p');
    faneContent.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
    tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis 
    convallis convallis tellus id.`;
    sidebar.appendChild(faneContent);
});








closeBtn.addEventListener('click', () => {
    clear();
    const placeholder = document.createElement('p');
    placeholder.innerHTML = '<em>Click a place on the map to begin exploring Pyre!</em>'
    placeholder.classList.add('placeholder');
    sidebar.appendChild(placeholder);
});

// Generates close button
const createClose = (parentElement) => {
    const closeX = document.createElement('h4');
    closeX.innerHTML = '✕';
    closeX.classList.add('close-btn');
    parentElement.appendChild(closeX);
    console.log('hmm')
}

const clear = () => {
    sidebar.innerHTML = '';
}

const popupActive = () => {
    popup.classList.add('overlay-active');
}