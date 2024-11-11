function toggleTranscript(id) {
    const transcript = document.getElementById(id);
    const button = transcript.previousElementSibling;

    if (transcript.style.display === "none" || transcript.style.display === "") {
        transcript.style.display = "block";
        button.textContent = "Close Transcript";
    } else {
        transcript.style.display = "none";
        button.textContent = "View Transcript";
    }
}
