// Function to show the selected diet card
function showDietCard(dietName) {
    // Hide all diet cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.style.display = 'none';
    });
  
    // Show the selected diet card
    const selectedCard = document.querySelector(`.card.${dietName}`);
    if (selectedCard) {
      selectedCard.style.display = 'block';
    }
  }
  
  // Function to handle diet selection
// Function to handle diet selection
// Function to handle diet selection
function onDietSelect() {
    const radioButtons = document.querySelectorAll('.diet-form input[type="radio"]');
  
    radioButtons.forEach(radioButton => {
      radioButton.addEventListener('change', (event) => {
        const dietName = event.target.value;
  
        // Hide all diet cards
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
          card.style.display = 'none';
        });
  
        // Show the selected diet card
        if (event.target.checked) {
          showDietCard(dietName);
        }
      });
    });
  }
  
  
  
  // Initialize the webpage
  function init() {
    onDietSelect();
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    // Add your existing code for the first page here
    
    const addButton = document.getElementById('add-food-button');
    const foodSelection = document.getElementById('food-selection');
    const foodData = {
      protein: 10,
      carbs: 10,
      veggie: 10,
      fruit: 10,
    };
  
    if (addButton) {
      addButton.addEventListener('click', () => {
        foodSelection.style.display = 'block';
      });
    }
  
    if (foodSelection) {
      foodSelection.addEventListener('change', () => {
        const selectedFood = foodSelection.value;
        if (selectedFood) {
          updateProgressBar(selectedFood, foodData[selectedFood]);
          foodSelection.value = ''; // Reset the selection
        }
      });
    }
  });
  
  // Update progress bar function
  function updateProgressBar(type, value) {
    const progressBar = document.getElementById(type);
    if (progressBar) {
      progressBar.value += value;
    }
  }
  

  document.querySelectorAll('input[type=radio]').forEach(radio => {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.card').forEach(card => {
        card.style.display = 'none';
      });
      document.querySelector(`.card.${radio.value}`).style.display = 'block';
    });
  });
  