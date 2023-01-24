let jokeText = document.getElementById("jokes-data");
let soundbtn = document.getElementById("sound");
let copybtn = document.getElementById("copy");
let massengerbtn = document.getElementById("massenger");
let generateBtn = document.getElementById("generateBtn");
let stopbtn = document.getElementById("stop");
// let url = "https://icanhazdadjoke.com/";

generateBtn.addEventListener("click", randomjoke);

function randomjoke() {
  jokeText.textContent = "Loading......";
  if (navigator.onLine) {
    const joke = fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        //   console.log(response.json());
        return response.json();
      })
      .then((data) => {
        //   console.log(data);
        jokeText.innerHTML = data.joke;
        speech();
      });
  } else {
    joke.innerHTML = "Please check your internet connecton";
  }
}

// sound function

soundbtn.addEventListener("click", speech);
function speech() {
  toggle();
}
function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    let utterance = new SpeechSynthesisUtterance(`${jokeText.textContent}`);
    speechSynthesis.speak(utterance);
  }
}

// stop sound function
stopbtn.addEventListener("click", () => {
  speechSynthesis.cancel();
});

// copy function for get text from joke text
copybtn.addEventListener("click", () => {
  navigator.clipboard.writeText(jokeText.innerText);
});
//  share jokeText social chat filed
massengerbtn.addEventListener("click", () => {
  let url = `https://m.me/?text= $ {joketext.innerText}`;
  open(url, "_blank");
  console.log(url);
});
