let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

// Function to populate voices into select element
function populateVoiceList() {
    voices = window.speechSynthesis.getVoices();
    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
}

// Update voices when the voices are changed
window.speechSynthesis.onvoiceschanged = () => {
    populateVoiceList();
};

// Event listener for selecting a voice
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value]; // Assign the selected voice
});

// Event listener for button click to speak
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

// Fetch voices asynchronously
setTimeout(() => {
    populateVoiceList();
}, 100);
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
    alert("Text has been spoken!"); // Display popup after speaking the text
});
 