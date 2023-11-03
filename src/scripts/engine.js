const pianoKeys = document.querySelectorAll('.piano-keys .key');
let mapedKeys = [];
const keysCheck = document.querySelector(".keys-check input")
const volumeSlider = document.querySelector(".volume-slider input");
let audio = new Audio("./src/sounds/a.wav");
const playTune = (key) => {
    audio.src = `src/sounds/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add('active');
    setTimeout(()=>{
        clickedKey.classList.remove('active');
    }, 150)
}

pianoKeys.forEach((key) => {
    key.addEventListener('click', ()=> playTune(key.dataset.key));
     mapedKeys.push(key.dataset.key);
    });

document.addEventListener("keydown", (e)=> {
   if(mapedKeys.includes(e.key)){
 playTune(e.key);  }
});
const handleVolume = (e)=>{
    audio.volume = e.target.value;
};
volumeSlider.addEventListener("input", handleVolume);
const showHideKeys = ()=>{
    pianoKeys.forEach((key)=> key.classList.toggle("hide"))
}
keysCheck.addEventListener('click', showHideKeys);