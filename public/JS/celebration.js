document.addEventListener("DOMContentLoaded", () => {
    const confettiContainer = document.querySelector('.confetti');

    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        
        const size = Math.random() * 10 + 5 + 'px';
        confettiPiece.style.width = size;
        confettiPiece.style.height = size;
        confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.animationDuration = Math.random() * 3 + 2 + 's';
        confettiPiece.style.animationDelay = Math.random() * 3 + 's';

        confettiContainer.appendChild(confettiPiece);
    }
});
