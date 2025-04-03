document.getElementById("copy-ip").addEventListener("click", function () {
    const ip = document.getElementById("server-ip").innerText;
    navigator.clipboard.writeText(ip).then(() => {
        alert("IP adresa byla zkopírována!");
    });
});

// Simulace online hráčů
function updatePlayerCount() {
    const minPlayers = 10;
    const maxPlayers = 100;
    const count = Math.floor(Math.random() * (maxPlayers - minPlayers + 1)) + minPlayers;
    document.getElementById("player-count").innerText = count;
}

// Obnovování počtu hráčů každých 5 sekund
setInterval(updatePlayerCount, 5000);
updatePlayerCount();

// Partiklový efekt
function createParticle() {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    document.querySelector(".particles").appendChild(particle);

    // Náhodná pozice
    const size = Math.random() * 6 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.animationDuration = `${Math.random() * 3 + 2}s`;

    // Odstranění po dokončení animace
    setTimeout(() => {
        particle.remove();
    }, 4000);
}

// Generování partiklů každých 100 ms
setInterval(createParticle, 100);
