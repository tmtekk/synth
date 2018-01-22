
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();


osc.onmousedown = function(){
var osc = document.getElementById("osc");
var oscillator = audioCtx.createOscillator();
oscillator.type = 'sine';
oscillator.frequency.value = 200;
oscillator.connect(audioCtx.destination);
currentTime = audioCtx.currentTime;
oscillator.start(audioCtx.currentTime);
oscillator.stop(currentTime + 2);
};

// osc.onmouseup = function(){
//   oscillator.stop();
//   oscillator.disconnect();
// };
