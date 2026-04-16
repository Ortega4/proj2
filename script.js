$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.

  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  $('.nap-button').click(clickedNapButton);
});

// Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
var pet_info = { 
  name: "Tina",
  weight: 5,
  happiness: 8,
  tiredness: 5
};


function playSound(type) {
  var sounds = {
    treat:    new Audio('sounds/chew.mp3'),
    play:     new Audio('sounds/play.mp3'),
    exercise: new Audio('sounds/exercise.mp3'),
    nap:      new Audio('sounds/nap.mp3')
  };
  if (sounds[type]) {
    sounds[type].play();
  }
}


function clickedTreatButton() {
  // Increase pet happiness
  pet_info.happiness += 1;
  // Increase pet weight
  pet_info.weight += 1;
  showPetMessage("Yum, that was delicious!");
  changePetImage("images/treat.png");
  animatePet("bounce");
  playSound("treat");
  checkAndUpdatePetInfoInHtml();
}

function clickedPlayButton() {
  // Increase pet happiness
  pet_info.happiness += 1;
  // Decrease pet weight
  pet_info.weight -= 1;
  // Increase pet tiredness
  pet_info.tiredness += 1;
  showPetMessage("That was fun!");
  changePetImage("images/play.png");
  animatePet("spin");
  playSound("play");
  checkAndUpdatePetInfoInHtml();
}

function clickedExerciseButton() {
  // Decrease pet happiness
  pet_info.happiness -= 1;
  // Decrease pet weight
  pet_info.weight -= 1;
  // Increase pet tiredness
  pet_info.tiredness += 1;
  showPetMessage("That was tough!");
  changePetImage("images/exercise.png");
  animatePet("shake");
  playSound("exercise");
  checkAndUpdatePetInfoInHtml();
}

function clickedNapButton() {
  // Decrease pet tiredness
  pet_info.tiredness -= 1;
  showPetMessage("I feel great!");
  changePetImage("images/nap.png");
  animatePet("pulse");
  playSound("nap");
  checkAndUpdatePetInfoInHtml();
}


function animatePet(type) {
  var $pet = $(".pet-image");

  // Remove any ongoing animation 
  $pet.stop(true, true).css({ opacity: 1, marginTop: "0px", marginLeft: "0px" });

  if (type === "bounce") {
    // Bounce up and down using marginTop only
    $pet.animate({ marginTop: "-20px" }, 200)
        .animate({ marginTop: "0px" },  200)
        .animate({ marginTop: "-15px" }, 150)
        .animate({ marginTop: "0px" },  150);

  } else if (type === "spin") {
    // Replaced width manipulation with an opacity flicker and bounce
    $pet.animate({ opacity: 0.2, marginTop: "-10px" }, 150)
        .animate({ opacity: 1,   marginTop: "0px" },   150)
        .animate({ opacity: 0.2, marginTop: "-10px" }, 150)
        .animate({ opacity: 1,   marginTop: "0px" },   150);

  } else if (type === "shake") {
    // Shake left and right using marginLeft 
    $pet.animate({ marginLeft: "-15px" }, 80)
        .animate({ marginLeft: "15px" },  80)
        .animate({ marginLeft: "-10px" }, 80)
        .animate({ marginLeft: "10px" },  80)
        .animate({ marginLeft: "0px" },   80);

  } else if (type === "pulse") {
    // fade out and back in
    $pet.animate({ opacity: 0.1 }, 400)
        .animate({ opacity: 1 },   400);
  }
}


function changePetImage(src) {
  $(".pet-image")
    .fadeOut(150, function() {       // Fade out first
      $(this).attr("src", src)       //Find the pet image on the page and change its image to images that reflects button that was pressed. attr is a mthod that is setter and getter, selects html attribute and either gets or sets values
             .fadeIn(300);           // fades method takes 300 ms for the animation to complete 
    });
}


function showPetMessage(message) {
  $(".pet-message")
    .text(message)
    .fadeIn(300)
    .delay(2000)          // Show message for 2 seconds
    .fadeOut(500);        // Then fade it out
}


function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
   // Add conditional so if weight is lower than zero.
  pet_info.weight    = Math.max(0, pet_info.weight);
  pet_info.happiness = Math.max(0, pet_info.happiness);
  pet_info.tiredness = Math.max(0, pet_info.tiredness);
}

function updatePetInfoInHtml() {
  $('.name').text(pet_info.name);
  $('.weight').text(pet_info.weight);
  $('.happiness').text(pet_info.happiness);
  $('.tiredness').text(pet_info.tiredness);
}