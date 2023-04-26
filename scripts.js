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
  
  
  async function analyzeDiet(selectedFoods) {
    const prompt = `Analyze the following diet: ${selectedFoods.join(", ")}. Is the diet balanced?`;
  
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-002",
        prompt,
        max_tokens: 100,
        n: 1,
        stop: null,
        temperature: 1,
      }),
    };
  
    try {
      const response = await fetch("https://api.openai.com/v1/engines/davinci-codex/completions", requestOptions);
      const data = await response.json();
      return data.choices[0].text.trim();
    } catch (error) {
      console.error("Error:", error);
      return "Sorry, there was an error processing your request.";
    }
  }
  
  function setupAnalyzeButton() {
    const analyzeButton = document.getElementById("analyze-button");
    const chatbotResponseElement = document.getElementById("chatbot-response");
  
    if (analyzeButton && chatbotResponseElement) {
      analyzeButton.addEventListener("click", async () => {
        // Get the selected foods from the progress bars
        const selectedFoods = Array.from(document.querySelectorAll(".progress-bar"))
          .filter((progressBar) => progressBar.querySelector("progress").value > 0)
          .map((progressBar) => progressBar.querySelector("label").textContent);
  
        // Get chatbot's response
        const response = await analyzeDiet(selectedFoods);
  
        // Display the response
        chatbotResponseElement.textContent = response;
      });
    }
  }
  
  // Initialize the webpage
  function init() {
    onDietSelect();
    setupAnalyzeButton();
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
  