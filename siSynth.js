
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
oscillator.frequency.value = 329.6;
oscillator.connect(audioCtx.destination);
currentTime = audioCtx.currentTime;
oscillator.start(audioCtx.currentTime);
oscillator.stop(currentTime + 0.7);
};

function play4(){
var osc = document.getElementById("osc4");
var oscillator = audioCtx.createOscillator();
oscillator.type = 'sine';
oscillator.frequency.value = 349.2;
oscillator.connect(audioCtx.destination);
currentTime = audioCtx.currentTime;
oscillator.start(audioCtx.currentTime);
oscillator.stop(currentTime + 0.7);
};

function play5(){
var osc = document.getElementById("osc5");
var oscillator = audioCtx.createOscillator();
oscillator.type = 'sine';
oscillator.frequency.value = 392.0;
oscillator.connect(audioCtx.destination);
currentTime = audioCtx.currentTime;
oscillator.start(audioCtx.currentTime);
oscillator.stop(currentTime + 0.7);
};

function play6(){
var osc = document.getElementById("osc6");
var oscillator = audioCtx.createOscillator();
oscillator.type = 'sine';
oscillator.frequency.value = 440.0;
oscillator.connect(audioCtx.destination);
currentTime = audioCtx.currentTime;
oscillator.start(audioCtx.currentTime);
oscillator.stop(currentTime + 0.7);
};

function play7(){
var osc = document.getElementById("osc7");
var oscillator = audioCtx.createOscillator();
oscillator.type = 'sine';
oscillator.frequency.value = 493.9;
oscillator.connect(audioCtx.destination);
currentTime = audioCtx.currentTime;
oscillator.start(audioCtx.currentTime);
oscillator.stop(currentTime + 0.7);
};

function play8(){
var osc = document.getElementById("osc8");
var oscillator = audioCtx.createOscillator();
oscillator.type = 'sine';
oscillator.frequency.value = 523.3;
oscillator.connect(audioCtx.destination);
currentTime = audioCtx.currentTime;
oscillator.start(audioCtx.currentTime);
oscillator.stop(currentTime + 0.7);
};
