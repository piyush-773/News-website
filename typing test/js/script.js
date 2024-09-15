const resultBox = document.getElementById("result_div");
const wpm = document.getElementById("wpm");
const accuracy = document.getElementById("accuracy");
const test = document.getElementById("test");
const testTime = document.getElementById("testTime");
const gamePage = document.getElementById("gamePage");
const themeList = [
  "theme_one",
  "theme_two",
  "theme_three",
  "theme_four",
  "theme_five",
];
var arr = english_arr;

window.timer = null;
window.startTime = null;
window.endTime = null;

// Sound effect on typing
this.correctLetterSound = new Audio("./media/sounds/click.mp3");
this.incorrectLetterSound = new Audio("./media/sounds/clack.mp3");
this.incorrectPhraseSound = new Audio("./media/sounds/failed.mp3");
this.correctPhraseSound = new Audio("./media/sounds/ding.wav");
this.currentPlayingSound = null;

var stopCurrentPlayingSound = function () {
  if (
    this.currentPlayingSound == this.correctPhraseSound ||
    this.currentPlayingSound == this.incorrectPhraseSound
  ) {
    return;
  }

  if (this.currentPlayingSound) {
    this.currentPlayingSound.currentTime = 0;
  }
};

//keyboard values that is showing
document.querySelectorAll(".key").forEach((key) => {
  key.addEventListener("click", () => {
    key.classList.add("clicked");
    setTimeout(() => {
      key.classList.remove("clicked");
    }, 100);
  });
});

// class adder and remover
const addClass = function (element, className) {
  if (element) element.className += " " + className;
};

const removeClass = function (element, className) {
  element.className = element.className.replace(className, " ");
};

// format a random word
const formatWord = (word) =>
  word
    ? `<div class="word"><span class="letter">${word
        .split("")
        .join('</span><span class="letter">')}</span></div>`
    : "";

var index;
var err;

// Generate next line of word
function generate_next() {
  let words = arr[Math.floor(Math.random() * arr.length)].split(" ");
  document.getElementById("words").innerHTML = ""; // clearing
  const screenWidth = window.innerWidth;
  const cursorElement = document.getElementById("cursor");
  if (screenWidth > 850 && screenWidth <= 1080) {
    cursorElement.style.left = 135 + "px";
    cursorElement.style.top = 160 + "px";
  } else if (screenWidth <= 850) {
    cursorElement.style.left = 70 + "px";
    cursorElement.style.top = 160 + "px";
  } else {
    cursorElement.style.left = 230 + "px";
    cursorElement.style.top = 195 + "px";
  }
  document.getElementById("words").style.marginTop = "0px";
  for (var i = 0; i < words.length; i++) {
    document.getElementById("words").innerHTML += formatWord(words[i]);
  }
  index = 0;
  addClass(document.querySelector(".word"), "current");
  addClass(document.querySelector(".letter"), "current");
}

// initiate game
var t = 60;
let testType = "English | text";

// let wordsCount = words.length;
let gameTime = 60 * 1000;
const newGame = (dur) => {
  let words = arr[Math.floor(Math.random() * arr.length)].split(" ");
  index = 0;
  err = 0;
  str = [];
  removeClass(resultBox, "result_div");
  addClass(resultBox, " hidden");
  const screenWidth = window.innerWidth;
  const cursorElement = document.getElementById("cursor");
  if (screenWidth > 850 && screenWidth <= 1080) {
    cursorElement.style.left = 135 + "px";
    cursorElement.style.top = 160 + "px";
  } else if (screenWidth <= 850) {
    cursorElement.style.left = 70 + "px";
    cursorElement.style.top = 160 + "px";
  } else {
    cursorElement.style.left = 230 + "px";
    cursorElement.style.top = 195 + "px";
  }
  document.getElementById("words").innerHTML = ""; // clearing
  document.getElementById("words").style.marginTop = "0px";
  removeClass(restart, "show");
  addClass(restart, "hidden");
  window.startTime = null;
  window.endTime = null;
  window.timer = null;
  if (dur) {
    gameTime = dur * 1000;
  }

  if (document.querySelector("#game.over")) {
    document.querySelector("#game.over").classList.remove("over");
  }

  for (var i = 0; i < words.length; i++) {
    document.getElementById("words").innerHTML += formatWord(words[i]);
  }

  document.getElementById("timer").innerHTML = gameTime / 1000 + "";
  addClass(document.querySelector(".word"), "current");
  addClass(document.querySelector(".letter"), "current");
};

var str = [];
var character_count = 0;

const getWPM = () => {
  const allWords = [...document.querySelectorAll(".word")];
  const lastTypedWord = document.querySelector(".word.current");
  const lastTypedWordIndex = allWords.indexOf(lastTypedWord);
  const typedWords = allWords.slice(0, lastTypedWordIndex);

  // Counting all typed words
  const WPM = Math.floor((typedWords.length / gameTime) * 60000);
  return WPM + str.length;
};

var totalCharacters = 0;
const getAccuracy = () => {
  // totalCharacters = document.getElementById("words").innerText.length + character_count;
  const correctCount = character_count - err;
  const accuracyPercentage = Math.floor((correctCount / character_count) * 100);
  return accuracyPercentage;
};

const gameOver = () => {
  clearInterval(window.timer);
  addClass(document.getElementById("game"), "over");
  document.getElementById("timer").innerHTML = getWPM() + " WPM";
  wpm.innerHTML = getWPM() + "";
  accuracy.innerHTML = getAccuracy(); // Update accuracy display
  test.innerHTML = testType;
  testTime.innerHTML = gameTime / 1000 + " Secs";
};

let themeIndex = 0;
const toggleTheme = () => {
  themeList.forEach((cl) => {
    removeClass(document.body, cl);
  });
  document.body.classList.add(themeList[themeIndex]);
  if (themeIndex < 4) {
    themeIndex += 1;
  } else {
    themeIndex = 0;
  }
};

var len;
// handle typing correctness
document.getElementById("game").addEventListener("keyup", (event) => {
  const key = event.key;
  len = document.getElementById("words").innerText.length;
  const currentWord = document.querySelector(".word.current");
  const currentLetter = document.querySelector(".letter.current");
  const expected = currentLetter?.innerHTML || " ";
  const isLetter = key.length === 1 && key !== " ";
  const isSpace = key === " ";
  const isBackspace = key === "Backspace";
  const isFirstLetter = currentLetter === currentWord.firstChild;
  const isFirstWord = Boolean(!currentWord.previousSibling);
  const isLastWord = Boolean(!currentWord.nextSibling);
  const restart = document.getElementById("restart");
  const e_key = document.querySelector(`.key[data-key="${event.key}"]`);
  if (e_key) {
    e_key.classList.add("clicked");
    setTimeout(() => {
      e_key.classList.remove("clicked");
    }, 100);
  }
  if (!window.timer && isLetter) {
    window.timer = setInterval(() => {
      if (!window.startTime) {
        window.startTime = new Date().getTime();
      }
      const currentTime = new Date().getTime();
      const msPassed = currentTime - window.startTime;
      const sPassed = Math.round(msPassed / 1000);
      const sRemain = gameTime / 1000 - sPassed;
      if (sRemain <= 0) {
        removeClass(restart, "hidden");
        addClass(restart, "show");
        removeClass(resultBox, "hidden");
        addClass(resultBox, "result_div");
        gameOver();
        return;
      }
      const timerInfo = document.getElementById("timer");
      timerInfo.innerHTML = sRemain + "";
    }, 1000);
  }

  // game over

  if (document.querySelector("#game.over")) {
    return;
  }

  if (isLetter) {
    character_count++;
    index++;
    if (index >= len) {
      str1 = [...document.querySelectorAll(".word")];
      str = str.concat(str1);
      generate_next();
    }

    //  handle typing alphabetical letters
    if (currentLetter) {
      if (key === expected) {
        addClass(currentLetter, "correct");
        this.stopCurrentPlayingSound();
        this.correctLetterSound.play();
        this.currentPlayingSound = this.correctLetterSound;
      } else {
        this.stopCurrentPlayingSound();
        this.incorrectLetterSound.play();
        this.currentPlayingSound = this.incorrectLetterSound;
        addClass(currentLetter, "error");
        err++;
      }
      removeClass(currentLetter, "current");
      if (currentLetter.nextSibling) {
        addClass(currentLetter.nextSibling, "current");
      }
    } else if (!isLastWord) {
      this.stopCurrentPlayingSound();
      this.incorrectLetterSound.play();
      this.currentPlayingSound = this.incorrectLetterSound;
    }
  }

  // handle spacing
  if (isSpace) {
    if (expected !== " ") {
      this.stopCurrentPlayingSound();
      this.incorrectLetterSound.play();
      this.currentPlayingSound = this.incorrectLetterSound;
      err++;
    } else {
      character_count++;
      this.stopCurrentPlayingSound();
      this.correctLetterSound.play();
      this.currentPlayingSound = this.correctLetterSound;
      removeClass(currentWord, "current");
      addClass(currentWord.nextSibling, "current");
      addClass(currentWord.nextSibling.firstChild, "current");
    }
  }

  // handle backspace
  if (isBackspace) {
    index--;
    if (currentLetter && isFirstLetter && !isFirstWord) {
      // make previous word current and its last letter current
      removeClass(currentWord, "current");
      addClass(currentWord.previousSibling, "current");
      removeClass(currentLetter, "current");
      addClass(currentWord.previousSibling.lastChild, "current");
      removeClass(currentWord.previousSibling.lastChild, "correct");
      removeClass(currentWord.previousSibling.lastChild, "error");
    }

    if (currentLetter && !isFirstLetter) {
      removeClass(currentLetter, "current");
      addClass(currentLetter.previousSibling, "current");
      removeClass(currentLetter.previousSibling, "correct");
      removeClass(currentLetter.previousSibling, "error");
    }

    if (currentWord && !currentLetter) {
      addClass(currentWord.lastChild, "current");
      removeClass(currentWord.lastChild, "correct");
      removeClass(currentWord.lastChild, "error");
    }
  }

  // handle line moves
  if (currentWord.getBoundingClientRect().top > 450) {
    const words = document.getElementById("words");
    const margin = parseInt(words.style.marginTop || "0px");
    words.style.marginTop = margin - 35 + "px";
  }

  // handle cursor movement
  const nextLetter = document.querySelector(".letter.current");
  const nextWord = document.querySelector(".word.current");
  const cursor = document.getElementById("cursor");
  if (nextLetter) {
    cursor.style.top = nextLetter.getBoundingClientRect().top + "px";
    cursor.style.left = nextLetter.getBoundingClientRect().left + "px";
  } else {
    cursor.style.top = nextWord.getBoundingClientRect().top + "px";
    cursor.style.left = nextWord.getBoundingClientRect().right + "px";
  }
});

// handling pressing Enter, Control, and Alt
document.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    clearInterval(timer);
    gameOver();
    newGame(t);
  }

  if (event.altKey && event.key === "Enter") {
    toggleTheme();
  }
});

function popup() {
  pop_up.style.display = "flex";
  const inputBox = document.getElementById("number"); // Assuming the input box has an id "number"
  inputBox.focus(); // Focus on the input box
  pop_up.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      set_c_time(); // Call the function to set time when Enter is pressed
    }
  });
  pop_up.addEventListener("click", (event) => {
    if (!data.contains(event.target)) {
      pop_up.style.display = "none";
    }
  });
}

// handle switching between durations
var btns = document.querySelectorAll(".btns");
for (let i = 0; i < 3; i++) {
  btns[i].onclick = () => set_time(i);
}

var pop_up = document.querySelector(".pop_up");
pop_up.style.display = "none";
var data = document.getElementById("custom_time_Popup");
var c_time = document.getElementById("c_time");

function set_c_time() {
  t = document.getElementById("number").value;
  addClass(c_time, "active");
  for (let j = 0; j < 3; j++) {
    removeClass(btns[j], "active");
  }
  pop_up.style.display = "none";
  clearInterval(timer);
  gameOver();
  newGame(t);
}

function set_time(i) {
  removeClass(c_time, "active");
  for (let j = 0; j < 3; j++) {
    if (j == i) {
      addClass(btns[j], "active");
    } else {
      removeClass(btns[j], "active");
    }
  }
  t = btns[i].innerText;
  clearInterval(timer);
  gameOver();
  newGame(t);
}

//handle the language between Hindi and English
const toEnglish = document.getElementById("english");
const toHindi = document.getElementById("hindi");

toHindi.addEventListener("click", () => {
  removeClass(toEnglish, "active");
  addClass(toHindi, "active");
  arr = hindi_arr;
  testType = "Hindi | text";
  clearInterval(timer);
  gameOver();
  newGame();
});

toEnglish.addEventListener("click", () => {
  removeClass(toHindi, "active");
  addClass(toEnglish, "active");
  arr = english_arr;
  testType = "English | text";
  clearInterval(timer);
  gameOver();
  newGame();
});

toggleTheme();
newGame();

document.addEventListener("DOMContentLoaded", function () {
  const screenWidth = window.innerWidth;
  const hideButton = document.querySelector(".hide button");
  const controls = document.querySelector(".controls");

  // Toggle controls visibility when hide button is clicked
  hideButton.addEventListener("click", function () {
    toggleControls();
  });

  // Hide controls when clicking outside of them
  document.addEventListener("click", function (event) {
    if (!controls.contains(event.target) && event.target !== hideButton && screenWidth < 850) {
      controls.style.display = "none";
    }
  });

  function toggleControls() {
    if (controls.style.display === "none") {
      controls.style.display = "block";
    } else {
      controls.style.display = "none";
    }
  }
  const elements = document.querySelectorAll(
    ".extra_control div,.duration button,.type-btns button"
  );
  elements.forEach(function (element) {
    element.addEventListener("click", function () {
      if (screenWidth < 850) {
        controls.style.display = "none";
      }
    });
  });
  //Enable the keyboard for mobile view
  const textArea = document.getElementById("game");
  textArea.addEventListener("click", function () {
    textArea.focus();
  });
});
