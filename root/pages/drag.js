var foods =  {
    
    "pizza": {
    "calories": 2000,
    "carbohydrates": 20,
    "fat": 1
    },
    
    "hamBurgers": {
    "calories": 354,
    "carbohydrates": 29,
    "fat": 17
    },
    
    "pasta": {
    "calories": 2,
    "carbohydrates": 20,
    "fat": 1
    },

    "chickenSalad": {
    "calories": 105,
    "carbohydrates": 3.7,
    "fat": 2.2
    },

    "fishSalad": {
    "calories": 213,
    "carbohydrates": 0.8,
    "fat": 13

    }, 

    "pancake": {
    "calories": 64,
    "carbohydrates": 8, 
    "fat": 2.7
    },

    "friedChicken": {
    "calories": 320,
    "carbohydrates": 2.4,
    "fat": 16
    },

    "beefSteak": {
    "calories": 679,
    "carbohydrates": 0,
    "fat": 48
    },

    "frenchFries": {
    "calories": 365,
    "carbohydrates": 48,
    "fat": 17
    },

    "noodles": {
    "calories": 221,
    "carbohydrates": 40,
    "fat": 3.3
    },

    "hotDogs": {
    "calories": 151,
    "carbohydrates": 2.2,
    "fat": 13
    },

    "sandwich": {
    "calories": 340,
    "carbohydrates": 26,
    "fat": 19
    },

    "mashPotatoes": {
    "calories": 214,
    "carbohydrates": 35,
    "fat": 7
    },

    "garlicBread": {
    "calories": 206,
    "carbohydrates": 25,
    "fat": 10
    },

    "applePie": {
    "calories": 67,
    "carbohydrates": 10,
    "fat": 3.1
    }


    };

    const pizzaBox = document.querySelector('.pizza') //variables referening items on UI
    const hamburgerBox = document.querySelector('.hamBurgers')
    const pastaBox = document.querySelector('.pasta')
    const chickenSaladBox = document.querySelector('.chickenSalad')
    const fishSaladBox = document.querySelector('.fishSalad')
    const pancakeBox = document.querySelector('.pancake')
    const friedChickenBox = document.querySelector('.friedChicken')
    const beefSteakBox = document.querySelector('.beefSteak')
    const frenchFriesBox = document.querySelector('.frenchFries')
    const noodlesBox = document.querySelector('.noodles')
    const hotDogsBox = document.querySelector('.hotDogs')
    const sandwichBox = document.querySelector('.sandwich')
    const mashPotatoesBox = document.querySelector('.mashPotatoes')
    const garlicBreadBox = document.querySelector('.garlicBread')
    const applePieBox = document.querySelector('.applePie')


    pizzaBox.addEventListener("click", myPizza);
    hamburgerBox.addEventListener("click", myhamBurger);
    pastaBox.addEventListener("click", myPasta);
    chickenSaladBox.addEventListener("click", mychickenSalad);
    fishSaladBox.addEventListener("click", myfishSalad);
    pancakeBox.addEventListener("click", mypanCake);
    friedChickenBox.addEventListener("click", myfriedChicken);
    beefSteakBox.addEventListener("click", mybeefSteak);
    frenchFriesBox.addEventListener("click", myfrenchFries);
    noodlesBox.addEventListener("click", myNoodles);
    hotDogsBox.addEventListener("click", myhotDogs);
    sandwichBox.addEventListener("click", mysandwich);
    mashPotatoesBox.addEventListener("click", mymashPotatoes);
    garlicBreadBox.addEventListener("click", mygarlicBread);
    applePieBox.addEventListener("click", myapplePie)



   function myPizza() {
        pizzaMessage = "The total calories, carbohydrates, and fat are "
        alert(pizzaMessage + " " + foods.pizza.calories + ", " + foods.pizza.carbohydrates + ", " + "and " + foods.pizza.fat)

    }

    function myhamBurger() {
        hamBurgerMessage = "The total calories, carbohydrates, and fat are "
        alert(hamBurgerMessage + " " + foods.hamBurgers.calories + ", " + foods.hamBurgers.carbohydrates + ", " + "and " + foods.hamBurgers.fat)
    }

    function myPasta() {
        pastaMessage = "The total calories, carbohydrates, and fat are "
        alert(pastaMessage + " " + foods.pasta.calories + ", " + foods.pasta.carbohydrates + ", " + "and " + foods.pasta.fat)
    }

    function mypanCake() {
        panCakeMessage = "The total calories, carbohydrates, and fat are "
        alert(panCakeMessage + " " + foods.pancake.calories + ", " + foods.pancake.carbohydrates + ", " + "and " + foods.pancake.fat)
    }

    function mychickenSalad() {
        chickenSaladMessage = "The total calories, carbohydrates, and fat are "
        alert(chickenSaladMessage + " " + foods.chickenSalad.calories + ", " + foods.chickenSalad.carbohydrates + ", " + "and " + foods.chickenSalad.fat)
    }

    function myfishSalad() {
        fishSaladMessage = "The total calories, carbohydrates, and fat are "
        alert(fishSaladMessage + " " + foods.fishSalad.calories + ", " + foods.fishSalad.carbohydrates + ", " + "and " + foods.fishSalad.fat)

    }

    function mypanCake() {
        panCakeMessage = "The total calories, carbohydrates, and fat are "
        alert(panCakeMessage + " " + foods.pancake.calories + ", " + foods.pancake.carbohydrates + ", " + "and " + foods.pancake.fat)
    }

    function myfriedChicken() {
        friedChickenMessage = "The total calories, carbohydrates, and fat are "
        alert(friedChickenMessage + " " + foods.friedChicken.calories + ", " + foods.friedChicken.carbohydrates + ", and " + foods.friedChicken.fat)
    }

    function mybeefSteak() {
        beefSteakMessage = "The total calories, carbohydrates, and fat are "
        alert(beefSteakMessage + " " + foods.beefSteak.calories + ", " + foods.beefSteak.carbohydrates + ", and " + foods.beefSteak.fat)
    }

    function myfrenchFries() {
        frenchFriesMessage = "The total calories, carbohydrates, and fat are "
        alert(frenchFriesMessage + " " + foods.frenchFries.calories + ", " + foods.frenchFries.carbohydrates + ", and " + foods.frenchFries.fat)
    }

    function myNoodles() {
        noodlesMessage = "The total calories, carbohydrates, and fat are "
        alert(noodlesMessage + " " + foods.noodles.calories + ", " + foods.noodles.carbohydrates + ", and " + foods.noodles.fat)
    }

    function myhotDogs() {
        hotDogsMessage = "The total calories, carbohydrates, and fat are "
        alert(hotDogsMessage + " " + foods.hotDogs.calories + ", " + foods.hotDogs.carbohydrates + ", and " + foods.hotDogs.fat)
    }

    function mysandwich() {
        sandwichMessage = "The total calories, carbohydrates, and fat are "
        alert(sandwichMessage + " " + foods.sandwich.calories + ", " + foods.sandwich.carbohydrates + ", and " + foods.sandwich.fat)
    }

    function mymashPotatoes() {
        mashPotatoesMessage = "The total calories, carbohydrates, and fat are "
        alert(mashPotatoesMessage + " " + foods.mashPotatoes.calories + ", " + foods.mashPotatoes.carbohydrates + ", and " + foods.mashPotatoes.fat)
    }

    function mygarlicBread() {
        garlicBreadMessage = "The total calories, carbohydrates, and fat are "
        alert(garlicBreadMessage + " " + foods.garlicBread.calories + ", " + foods.garlicBread.carbohydrates + ", and " + foods.garlicBread.fat)
    }

    function myapplePie() {
        applePieMessage = "The total calories, carbohydrates, and fat are "
        alert(applePieMessage + " " + foods.applePie.calories + ", " + foods.applePie.carbohydrates + ", and " + foods.applePie.fat)
    }
    