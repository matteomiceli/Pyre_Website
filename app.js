const faneArea = document.querySelector('#fane');
const popup = document.querySelector('.popup-overlay');
const closeBtn = document.querySelector('#close-btn');

closeBtn.addEventListener('click', () => {
    popup.classList.remove('overlay-active');
});

faneArea.addEventListener('click', () => {
    popupActive();
    
});




const popupActive = () => {
    popup.classList.add('overlay-active');
};