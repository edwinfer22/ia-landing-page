function tilt(e, card) {
    const cardRect = card.getBoundingClientRect();
    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;
    
    const midX = cardRect.width / 2;
    const midY = cardRect.height / 2;
    
    const angleX = (y - midY) / 10;
    const angleY = (midX - x) / 10;
    
    card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.05)`;
}

function resetTilt(card) {
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
}
