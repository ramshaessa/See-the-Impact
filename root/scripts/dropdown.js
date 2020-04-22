
   var questionOne = document.getElementById('foods')


   var questionTwo = document.getElementById('meals')

 

   var questionThree = document.getElementById('exercise')

   var questionFour = document.getElementById('breakfast')
 
    var questionFive = document.getElementById('Time') 

    var questionSix = document.getElementById('Mood') 

    


   var buttonSubmit = document.getElementById("Submission")
   
   buttonSubmit.onclick = function() {
       console.log("Submit")
       //What you want this button to do. We want to select
       //the value that user selected and display alerts for each individual value //

       //One reference per question 

       //Store five new variables to store anwsers for each of five questions.


       let firstAnswer = questionOne.options[questionOne.selectedIndex].value;

       //Look at question One element and extract list of possible options. Once those options are returned, it will take question one and then it will return whatever the user selected.

       let secondAnswer = questionTwo.options[questionTwo.selectedIndex].value;

       let thirdAnswer = questionThree.options[questionThree.selectedIndex].value;

       let fourAnswer = questionFour.options[questionFour.selectedIndex].value;

       let fiveAnswer = questionFive.options[questionFive.selectedIndex].value;

       let sixAnswer = questionSix.options[questionSix.selectedIndex].value;

       console.log(firstAnswer)
       console.log(secondAnswer)
       console.log(thirdAnswer)
       console.log(fourAnswer)
       console.log(fiveAnswer)
       console.log(sixAnswer)

       let firstAnswerMessage = null 
       if(firstAnswer =="ChickenPizza") {
            firstAnswerMessage = "Don't eat a lot of Chicken Pizza. It is not good for health";
        } else if (firstAnswer =="Apple") {
            firstAnswerMessage = "Great choice, eat apple a day and keep doctor away"
        } else if (firstAnswer =="Hamburger") {
            firstAnswerMessage = "Make your food choices wisely. Eat healthier food!"
        } else {
            firstAnswerMessage = "Yaaayyy! Good choice. Eat salad everyday"
        }
    
       let secondAnswerMessage = null
       if(secondAnswer=="1") {
            secondAnswerMessage = "Ummm, are you sure? You should eat more often"
         } else if (secondAnswer=="2") {
            secondAnswerMessage = "That is better than one meal but you need to eat more meals"
        } else if (secondAnswer=="3") {
            secondAnswerMessage = "Great, that is standard meal amount. You can eat one more meal"
        } else {
            secondAnswerMessage = "That is awesome but don't eat way too much and be wise about your choices"
    }
       
    
    let thirdAnswerMessage = null

    if (thirdAnswer =="4") {
        thirdAnswerMessage = "That is good but you can exercise more"
    } else if (thirdAnswer == "7") {
        thirdAnswerMessage = "Cool, this is just right. Keep it up"
    } else if (thirdAnswer == "10") {
        thirdAnswerMessage = "Not bad but do not over exercise as it can be bad for your health"
    } else {
        thirdAnswerMessage = "What!! You never exercise. This is so bad"
    }
    
    
    let fourthAnswerMessage = null

       if (fourAnswer == "A bowl of cereal with bag of Cheetos") {
            fourthAnswerMessage = "Is that even a allowed? Wow!"
        } else if (fourAnswer ="Two eggs with bread and butter") {
            fourthAnswerMessage = "Good choice but it can be healthier."
        } else if (fourAnswer ="McDonald Fish O Fillet") {
             fourAnswerMessage = "Not great choice for breakfast"
        } else {
            fourthAnswerMessage = "Great choice. Continue to eat well"
           }


       let fiveAnswerMessage = null


    if (fiveAnswer == "7 PM") {
        fiveAnswerMessage = "Eat eater is early riser"
     } else if (fiveAnswer == "8 PM") {
        fiveAnswerMessage = "Great, just eat right!"
    } else if (fiveAnswer == "9 PM") {
        fiveAnswerMessage = "Not bad but try to eat your dinner earlier"
    } else {
        fiveAnswerMessage = "This is insane. Please do not do this to yourself!"
      }

       let sixAnswerMessage = null


   if (sixAnswer == "Always") {
        sixAnswerMessage = "That is great. Please continue to laugh so you can spread this positivity around you to others"
    } else if (sixAnswer == "Very often") {
        sixAnswerMessage = "Awesome, Continue to stay happy because it is secret ingriedient to good health"
    } else if (sixAnswer == "Somewhat often ") {
    fiveAnswerMessage = "Not bad but try to laugh more."
    } else {
        sixAnswerMessage = "What, so you do not laugh? Why dude? It is good to laugh"

}
 
alert(firstAnswerMessage + "\n" + secondAnswerMessage + "\n" + thirdAnswerMessage + "\n" + fourthAnswerMessage + "\n" + fiveAnswerMessage + "\n" + sixAnswerMessage)



   }

