const envelopeContainer = document.getElementById('envelope-container');
const letterContainer = document.getElementById('letter-container');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const catImg = document.getElementById('cat-img');
const questionText = document.getElementById('question');
const finalText = document.getElementById('final-text');

// 1. Open Envelope
envelopeContainer.addEventListener('click', () => {
    envelopeContainer.style.display = 'none';
    letterContainer.style.display = 'flex';
});

// 2. Success Interaction (Yes Clicked)
yesBtn.addEventListener('click', () => {
    questionText.innerText = "Yippie! ❤️";
    catImg.src = "cat-dance.gif";
    finalText.style.display = 'block';
    document.querySelector('.buttons').style.display = 'none';
});

// 3. Playful Interaction (No Button Moves Away)
noBtn.addEventListener('mouseover', () => {
    const distance = 200; // Radius of movement
    const angle = Math.random() * 2 * Math.PI;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    
    noBtn.style.position = 'absolute';
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
    noBtn.style.transition = 'all 0.3s ease';
});