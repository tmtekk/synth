
let audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function play1(){
var osc = document.getElementById("osc");
var oscillator = audioCtx.createOscillator();
oscillator.type = 'sine';
oscillator.frequency.value = 261.6;
oscillator.connect(audioCtx.destination);
currentTime = audioCtx.currentTime;
oscillator.start(audioCtx.currentTime);
oscillator.stop(currentTime + 1);
};

function play2(){
var osc = document.getElementById("osc2");
var oscillator = audioCtx.createOscillator();
oscillator.type = 'sine';
oscillator.frequency.value = 293.7;
oscillator.connect(audioCtx.destination);
currentTime = audioCtx.currentTime;
oscillator.start(audioCtx.currentTime);
oscillator.stop(currentTime + 0.7);
};

function play3(){
var osc = document.getElementById("osc3");
var oscillator = audioCtx.createOscillator();
oscillator.type = 'sine';
oscillator.frequency.value = 293.7;
oscillator.connect(audioCtx.destination);
currentTime = audioCtx.currentTime;
oscillator.start(audioCtx.currentTime);
oscillator.stop(currentTime + 0.7);
};

function play3(){
var osc = document.getElementById("osc3");
var oscillator = audioCtx.createOscillator();
oscillator.type = 'sine';
oscillator.frequency.value = 329.6;
oscillator.connect(audioCtx.destination);
currentTime = audioCtx.currentTime;
oscillator.start(audioCtx.currentTime);
oscillator.stop(currentTime + 0.7);
};
