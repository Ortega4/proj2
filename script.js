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

function clickedTreatButton() {
  // Increase pet happiness
  pet_info.happiness += 1;
   // Increase pet weight
  pet_info.weight += 1;

  showPetMessage("Yum, that was delicious");

  //Find the pet image on the page and change its image to images/treat.png.”
  $(".pet-image").attr("src", "images/treat.png");

  checkAndUpdatePetInfoInHtml();
}
function showPetMessage(message) {
  $(".pet-message")
    .text(message)
    .fadeIn(300); // takes 300 ms to complete the fadein animation.
}

function clickedPlayButton() {
   // Increase pet happiness
  pet_info.happiness += 1;
   // Decrease pet weight
  pet_info.weight -= 1;
  // Increase pet tiredness
  pet_info.tiredness += 1;

  showPetMessage("That was fun");

  //Find the pet image on the page and change its image to images/play.png.
  $(".pet-image").attr("src", "images/play.png");

  checkAndUpdatePetInfoInHtml();
}

function clickedExerciseButton() {
   // Decrease pet happiness
  pet_info.happiness -= 1;

   // Decrease pet weight
  pet_info.weight -= 1;

   // Increase pet tiredness
  pet_info.tiredness += 1;

  showPetMessage("that was tough");

  //Find the pet image on the page and change image to images/exercsie.png.
  $(".pet-image").attr("src", "images/exercise.png");

  checkAndUpdatePetInfoInHtml();
}

function clickedNapButton() {
  pet_info.tiredness -= 1;

   showPetMessage("I feel great");

   //Find the pet image on the page and change  image to images/nap.png.
  $(".pet-image").attr("src", "images/nap.png");
  checkAndUpdatePetInfoInHtml();
}

function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();  
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
  // Add conditional so if weight is lower than zero.
  pet_info.weight = Math.max(0, pet_info.weight);
  pet_info.happiness = Math.max(0, pet_info.happiness);
  pet_info.tiredness = Math.max(0, pet_info.tiredness);
}

function updatePetInfoInHtml() {
  $('.name').text(pet_info.name);
  $('.weight').text(pet_info.weight);
  $('.happiness').text(pet_info.happiness);
  $('.tiredness').text(pet_info.tiredness);
}