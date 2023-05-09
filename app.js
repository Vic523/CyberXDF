const planTab = document.getElementById('plan-tab');
const listTab = document.getElementById('list-tab');
const planPage = document.getElementById('plan-page');
const listPage = document.getElementById('list-page');
const dietPlan = document.getElementById('diet-plan');
const progressBar = document.querySelectorAll('.bar');
const addItemBtn = document.getElementById('add-item-btn');
const foodIcons = document.getElementById('food-icons');
const closeIconsBtn = document.getElementById('close-icons-btn');

let progressValues = {
    muscleGain: {
        protein: 0,
        carb: 0,
        vegetable: 0,
        fruit: 0,
        max: {
            protein: 10,
            carb: 4,
            vegetable: 5,
            fruit: 6,
        },
    },
    regular: {
        protein: 0,
        carb: 0,
        vegetable: 0,
        fruit: 0,
        max: {
            protein: 4,
            carb: 4,
            vegetable: 4,
            fruit: 4,
        },
    },
};

const foodNames = {
    protein1: 'Chicken',
    protein2: 'Beef',
    carb1: 'Rice',
    carb2: 'Pasta',
    vegetable1: 'Broccoli',
    vegetable2: 'Carrots',
    fruit1: 'Apple',
    fruit2: 'Banana',
    fruit3: 'Grapes',
    fruit4: 'Orange',
};





let currentPlan = 'muscleGain';

function updateProgressBars() {
    const currentPage = document.querySelector('.category-page.active');
    progressBar.forEach((bar) => {
      const category = bar.classList[1];
      if (currentPage.querySelector(`.bar.${category}`)) {
        const currentValue = progressValues[currentPlan][category];
        const maxValue = progressValues[currentPlan].max[category];
        bar.style.width = (currentValue / maxValue) * 100 + '%';
      }
    });
  }
  

function addSelectedFood(category, icon, name) {
    const selectedFoodContainer = document.querySelector(`.selected-foods.${category}`);
    const existingFoodItem = selectedFoodContainer.querySelector(`.selected-food-item[data-food="${icon}"]`);
  
    if (existingFoodItem) {
      const countElement = existingFoodItem.querySelector('.count');
      const currentCount = parseInt(countElement.textContent, 10);
      countElement.textContent = currentCount + 1;
    } else {
      const foodItem = document.createElement('div');
      foodItem.classList.add('selected-food-item');
      foodItem.setAttribute('data-food', icon);
      foodItem.innerHTML = `
        <img src="assets/${icon}.png" alt="${name}" />
        <span>${name}</span>
        <span class="count">1</span>
      `;
  
      // Add a click event listener to the food item
      foodItem.addEventListener('click', () => {
        const countElement = foodItem.querySelector('.count');
        const currentCount = parseInt(countElement.textContent, 10);
  
        if (currentCount > 1) {
          countElement.textContent = currentCount - 1;
          progressValues[currentPlan][category]--;
        } else {
          selectedFoodContainer.removeChild(foodItem);
          progressValues[currentPlan][category] = 0;
        }
  
        updateProgressBars();
      });
  
      selectedFoodContainer.appendChild(foodItem);
    }
  }
  
  
  
  

planTab.addEventListener('click', () => {
    planTab.classList.add('active');
    listTab.classList.remove('active');
    planPage.classList.add('active');
    listPage.classList.remove('active');
});

listTab.addEventListener('click', () => {
    planTab.classList.remove('active');
    listTab.classList.add('active');
    planPage.classList.remove('active');
    listPage.classList.add('active');
});

dietPlan.addEventListener('change', (e) => {
    currentPlan = e.target.value === 'muscle-gain' ? 'muscleGain' : 'regular';
    updateProgressBars();
});

let currentCategoryIcons;
addItemBtn.addEventListener('click', () => {
  const activeCategory = document.querySelector('.category-page.active');
  const categoryId = activeCategory.id.split('-')[0];
  currentCategoryIcons = document.getElementById(`${categoryId}-icons`);
  currentCategoryIcons.style.display = 'block';
});


closeIconsBtn.addEventListener('click', () => {
    foodIcons.style.display = 'none';
});

updateProgressBars();

function generateFoodIcons(category, containerId) {
    const icons = {
      protein: ['protein1', 'protein2'],
      carb: ['carb1', 'carb2'],
      vegetable: ['vegetable1', 'vegetable2'],
      fruit: ['fruit1', 'fruit2', 'fruit3', 'fruit4'],
    };
  
    const foodIconsContainer = document.getElementById(containerId);
  
    icons[category].forEach((icon) => {
      const foodIcon = document.createElement('div');
      foodIcon.classList.add('food-icon');
      foodIcon.setAttribute('data-food', icon);
      foodIcon.innerHTML = `<img src="assets/${icon}.png" alt="${icon}" />`;
      foodIcon.addEventListener('click', () => {
        const selectedFood = icon.split(/(\d+)/)[0];
        const foodName = foodNames[icon];
        if (selectedFood && progressValues[currentPlan][selectedFood] < progressValues[currentPlan].max[selectedFood]) {
          progressValues[currentPlan][selectedFood]++;
          updateProgressBars();
          addSelectedFood(selectedFood, icon, foodName);
        }
        foodIconsContainer.style.display = 'none';
      });
  
      foodIconsContainer.appendChild(foodIcon);
    });
  }
  
  generateFoodIcons('protein', 'protein-icons');
  generateFoodIcons('carb', 'carb-icons');
  generateFoodIcons('vegetable', 'vegetable-icons');
  generateFoodIcons('fruit', 'fruit-icons');
  


// Add the following lines after initializing the other DOM elements
const muscleGainImg = document.getElementById('muscle-gain-img');
const regularImg = document.getElementById('regular-img');

// Add this function to show the correct diet plan image
function updateDietPlanImage() {
  if (currentPlan === 'muscleGain') {
    muscleGainImg.style.display = 'block';
    regularImg.style.display = 'none';
  } else {
    muscleGainImg.style.display = 'none';
    regularImg.style.display = 'block';
  }
}

// Call the updateDietPlanImage function in the dietPlan event listener
dietPlan.addEventListener('change', (e) => {
  currentPlan = e.target.value === 'muscle-gain' ? 'muscleGain' : 'regular';
  updateProgressBars();
  updateDietPlanImage();
});



// Add the following lines after initializing the other DOM elements
const proteinBtn = document.getElementById('protein-btn');
const carbBtn = document.getElementById('carb-btn');
const vegetableBtn = document.getElementById('vegetable-btn');
const fruitBtn = document.getElementById('fruit-btn');
const categoryBtns = document.querySelectorAll('.category-btn');
const categoryPages = document.querySelectorAll('.category-page');

function switchCategory(categoryBtn, categoryPage) {
    categoryBtns.forEach((btn) => btn.classList.remove('active'));
    categoryPages.forEach((page) => page.classList.remove('active'));
  
    // Hide the food icons of the previous category
    if (currentCategoryIcons) {
      currentCategoryIcons.style.display = 'none';
    }
  
    categoryBtn.classList.add('active');
    categoryPage.classList.add('active');
  }
  
  

proteinBtn.addEventListener('click', () => {
    switchCategory(proteinBtn, document.getElementById('protein-page'));
  });
  
  carbBtn.addEventListener('click', () => {
    switchCategory(carbBtn, document.getElementById('carb-page'));
  });
  
  vegetableBtn.addEventListener('click', () => {
    switchCategory(vegetableBtn, document.getElementById('vegetable-page'));
  });
  
  fruitBtn.addEventListener('click', () => {
    switchCategory(fruitBtn, document.getElementById('fruit-page'));
  });
  
  function addCustomFood(category, name) {
    const icon = `${category}${Date.now()}`;
    const foodIcon = document.createElement('div');
    foodIcon.classList.add('food-icon');
    foodIcon.setAttribute('data-food', icon);
    foodIcon.innerHTML = `<img src="assets/custom.png" alt="${icon}" />`;
    foodIcon.addEventListener('click', () => {
      const selectedFood = icon.split(/(\d+)/)[0];
      if (selectedFood && progressValues[currentPlan][selectedFood] < progressValues[currentPlan].max[selectedFood]) {
        progressValues[currentPlan][selectedFood]++;
        updateProgressBars();
        addSelectedFood(selectedFood, icon, name);
      }
    });
  
    const iconsContainer = document.getElementById(`${category}-icons`);
    iconsContainer.appendChild(foodIcon);
  
    foodNames[icon] = name;
  }

  
  function promptCustomFood(category) {
    const name = prompt('Enter the name of the custom food:');
    if (name) {
      addCustomFood(category, name);
    }
  }

  document.querySelectorAll('.add-custom-food-btn').forEach((btn, index) => {
    const category = ['protein', 'carb', 'vegetable', 'fruit'][index];
    btn.addEventListener('click', () => {
      promptCustomFood(category);
    });
  });
  