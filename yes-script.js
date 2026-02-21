let musicPlaying = false;

window.addEventListener('load', () => {
    launchConfetti();

    const music = document.getElementById('bg-music');
    music.volume = 0.3;

    // Attendre que les métadonnées soient chargées
    music.addEventListener('loadedmetadata', () => {
        music.currentTime = 23; // 23 secondes
        music.play().then(() => {
            musicPlaying = true;
            document.getElementById('music-toggle').textContent = '🔊';
        }).catch(() => {});
    });
});

function toggleMusic() {
    const music = document.getElementById('bg-music');
    if (musicPlaying) {
        music.pause();
        musicPlaying = false;
        document.getElementById('music-toggle').textContent = '🔇';
    } else {
        music.play();
        musicPlaying = true;
        document.getElementById('music-toggle').textContent = '🔊';
    }
}
