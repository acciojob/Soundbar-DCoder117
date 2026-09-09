//your JS code here. If required.
const buttons = document.getElementById("buttons");

const sounds = [
    "clap",
    "hihat",
    "kick",
    "openhat",
    "boom",
    "ride",
    "snare",
    "tink"
];

let currentAudio = null;

sounds.forEach(function(sound) {

    const button = document.createElement("button");

    button.className = "btn";
    button.innerText = sound;

    button.addEventListener("click", function() {

        // Stop previous sound
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        // Create and play new sound
        currentAudio = new Audio("sounds/" + sound + ".wav");
        currentAudio.play();
    });

    buttons.appendChild(button);
});


// Stop button
const stopButton = document.createElement("button");

stopButton.className = "stop";
stopButton.innerText = "Stop";

stopButton.addEventListener("click", function() {

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

});

buttons.appendChild(stopButton);