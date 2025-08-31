AOS.init();

const title = document.querySelector('.title');
const prev = document.querySelector('.prev');
const playPause = document.querySelector('.playPause');
const next = document.querySelector('.next');
const audio = document.querySelector('audio');
const volumeSlider = document.querySelector('.volume-slider');

const songList = [
    {
        path: "https://www.appradio.app:8120/live",
        songName: "Rádio Gospel Ao Vivo"
    }
];

let song_Playing = false;

function playSong(){
    song_Playing = true;
    audio.play();
    playPause.classList.add('active');
    playPause.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
}

function pauseSong(){
    song_Playing = false;
    audio.pause();
    playPause.classList.remove('active');
    playPause.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
}

playPause.addEventListener("click", () => {
    song_Playing ? pauseSong() : playSong();
});

function loadSong(songList){
    title.textContent = songList.songName;
    audio.src = songList.path;
}

let i = 0;
loadSong(songList[i]);

function prevSong(){
    // Não há "faixa anterior" para uma rádio ao vivo, então esta função pode ser ajustada
    // ou removida se não for necessária.
    i = (i - 1 + songList.length) % songList.length;
    loadSong(songList[i]);
    playSong();
}
prev.addEventListener("click", prevSong);

function nextSong(){
    // Da mesma forma, não há "próxima faixa" para uma rádio ao vivo.
    i = (i + 1) % songList.length;
    loadSong(songList[i]);
    playSong();
}
next.addEventListener("click", nextSong);

volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
});