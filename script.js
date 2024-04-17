// Récupérer la référence vers le bouton, la roue et le score
const bouton = document.getElementById('boutonTourner');
const roue = document.getElementById('roue');
const scoreDisplay = document.getElementById('score');
const sections = document.querySelectorAll('.section');
let score = 0;
let toursEffectues = 0; // Variable pour suivre le nombre de tours effectués

// Fonction pour faire tourner la roue
function tournerRoue() {
    // Réinitialiser l'angle de rotation de la roue
    roue.style.transition = 'none';
    roue.style.transform = 'rotate(0deg)';
    
    // Générer un nombre aléatoire pour déterminer la section gagnante
    const indexGagnant = Math.floor(Math.random() * sections.length);
    
    // Vérifier si le nombre minimum de tours a été atteint
    if (toursEffectues < 5) {
        // Ajouter un angle supplémentaire pour le tour suivant
        toursEffectues++;
    }
    
    // Calculer l'angle final en fonction de la section gagnante
    const angleFinal = toursEffectues * 360 + (indexGagnant * (360 / sections.length)) + Math.floor(Math.random() * (360 / sections.length));
    
    // Faire tourner la roue avec une animation fluide
    roue.style.transition = 'transform 3s ease-out';
    roue.style.transform = `rotate(${angleFinal}deg)`;
    
    // Désactiver le bouton pendant la rotation pour éviter les actions multiples
    bouton.disabled = true;
    
    // Réactiver le bouton après la fin de l'animation
    setTimeout(() => {
        const points = parseInt(sections[indexGagnant].getAttribute('data-points'));
        score += points;
        scoreDisplay.textContent = `Score: ${score}`;
        bouton.disabled = false;
    }, 3000); // 3000 millisecondes (3 secondes) de délai pour simuler la rotation de la roue
}

// Ajouter un gestionnaire d'événement au clic sur le bouton
bouton.addEventListener('click', tournerRoue);
