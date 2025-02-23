function speakText() {
    let text = document.getElementById("text").value;
    let language = document.getElementById("language").value;
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = language;
    window.speechSynthesis.speak(speech);
}
