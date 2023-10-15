const txt_input =document.getElementById('txt_input');
const btn_listen=document.querySelector('.btn-listen');
const btn_pause=document.querySelector('.btn-pause');
const btn_resume=document.querySelector('.btn-resume');
const btn_cancel=document.querySelector('.btn-cancel');
const volume_range_control = document.getElementById('volume-range-control');
const current_volume_level = document.getElementById('current-volume-level');
//Add Event listeners for handling events

btn_listen.addEventListener('click',startSpeak);
btn_pause.addEventListener('click',pauseSpeak);
btn_resume.addEventListener('click',resumeSpeak);
btn_cancel.addEventListener('click',cancelSpeak);
var atterance;
function startSpeak(){
    let text=txt_input.value;
    atterance = new SpeechSynthesisUtterance(text)
    speechSynthesis.speak(atterance);
}

function pauseSpeak(){
    speechSynthesis.pause();
}
function resumeSpeak(){
    speechSynthesis.resume();
}

function cancelSpeak(){
    speechSynthesis.cancel();
}

volume_range_control.addEventListener('input',setCurrentVolumeLevel)
function setCurrentVolumeLevel(e){

    current_volume_level.innerText=volume_range_control.value;    
}