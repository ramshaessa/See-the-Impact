
   var questionOne = document.getElementById('foods')


   var questionTwo = document.getElementById('meals')

 

   var questionThree = document.getElementById('exercise')

 
    var questionFour = document.getElementById('Time') 

    var questionFive = document.getElementById('Mood') 


   var buttonSubmit = document.getElementById("Submission")
   
   buttonSubmit.onclick = function() {
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

       console.log(firstAnswer)
       console.log(secondAnswer)
       console.log(thirdAnswer)
       console.log(fourAnswer)
       console.log(fiveAnswer)

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

       if (thirdAnswer == "A bowl of cereal with bag of Cheetos") {
            thirdAnswerMessage = "Is that even a allowed? Wow!"
        } else if (thirdAnswer ="Two eggs with bread and butter") {
            thirdAnswerMessage = "Good choice but it can be healthier."
        } else if (thirdAnswer ="McDonald Fish O Fillet") {
             thirdAnswerMessage = "Not great choice for breakfast"
        } else {
            thirdAnswerMessage = "Great choice. Continue to eat well"
           }


       let fourthAnswerMessage = null


    if (fourAnswer == "7 PM") {
        fourthAnswerMessage = "Eat eater is early riser"
     } else if (fourAnswer == "8 PM") {
        fourthAnswerMessage = "Great, just eat right!"
    } else if (fourAnswer == "9 PM") {
        fourthAnswerMessage = "Not bad but try to eat your dinner earlier"
    } else {
        fourthAnswerMessage = "This is insane. Please do not do this to yourself!"
      }

       let fiveAnswerMessage = null


   if (fiveAnswer == "Always") {
        fiveAnswerMessage = "That is great. Please continue to laugh so you can spread this positivity around you to others"
    } else if (fiveAnswer == "Very often") {
        fiveAnswerMessage = "Awesome, Continue to stay happy because it is secret ingriedient to good health"
    } else if (fiveAnswer == "Somewhat often ") {
    fiveAnswerMessage = "Not bad but try to laugh more."
    } else {
        fiveAnswerMessage = "What, so you do not laugh? Why dude? It is good to laugh"

}
 
alert(firstAnswerMessage + "\n" + secondAnswerMessage + "\n" + thirdAnswerMessage + "\n" + fourthAnswerMessage + "\n" + fiveAnswerMessage)



   }

