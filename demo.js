// Step 1: DOM Manipulation
// Grab all the heart elements on the page
const articleHearts = document.querySelectorAll(".like-glyph");

// Step 2: Mock Server Communication
// This function simulates talking to a server
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      // randomly fail 20% of the time
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// Step 3: Event Listening
// Add a click listener to each heart
articleHearts.forEach(heart => {
  heart.addEventListener("click", () => {
    // Call the mock server
    mimicServerCall()
      .then(() => {
        // Toggle heart state
        if (heart.innerText === "♡") {
          heart.innerText = "♥";
          heart.classList.add("activated-heart");
        } else {
          heart.innerText = "♡";
          heart.classList.remove("activated-heart");
        }
      })
      .catch((error) => {
        // Show server error message
        const errorModal = document.getElementById("modal");
        errorModal.classList.remove("hidden");
        errorModal.innerText = error;
        setTimeout(() => errorModal.classList.add("hidden"), 3000);
      });
  });
});
