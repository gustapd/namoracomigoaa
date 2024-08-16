const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');

yesBtn.addEventListener('click', () => {
    response.textContent = "Que bom senhorita Maria Isadora 😍";
});

noBtn.addEventListener('mouseover', () => {
    moveButton();
});

function moveButton() {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();

  
    const maxLeft = containerRect.width - noBtn.offsetWidth;
    const maxTop = containerRect.height - noBtn.offsetHeight;
    const left = Math.random() * maxLeft;
    const top = Math.random() * maxTop;

    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${left}px`;
    noBtn.style.top = `${top}px`;
}
