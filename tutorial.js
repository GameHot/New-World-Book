const readline = require("readline-sync")
const ammo = 0
const food = 0
const water = 0
let totalWeight = 0 
let maxWeight = 500 
const name = readline.question("What is your name? ")
console.log("Hello", name, "Welcome to the Best Game of 2025!")

const doYouWannaPlay = readline.question('Do you want to play? ')

// const condition = doYouWannaPlay.toLowerCase() === "yes"

if(doYouWannaPlay.toLowerCase() === "yes"){
  console.log('Lets do it!!')
}
else if (doYouWannaPlay.toLowerCase() === 'no'){
  console.log('You missed your chance :\'(')
  return
}
else{
  console.log('I dont understand that language')
  return
}
    const takeBoard = readline.question('You are a sailor set out to explore the New World, You have heard of many treachores fears that have taken the lives of many other sailors and pirates but you now have the Choice, Do you wish to take this journey? ')
    if (takeBoard.toLowerCase() === 'yes'){
    console.log('Alright, now time to choose a ship! ')
  }
  else {
    console.log('You go back home and eat Oatmeal creme pies and drink coffee. ')
    return
  }

    const shipChoice = readline.question('You have the choice between two ships, the Jolly Jack, and the Tiger, Jolly Jack is a well known pirate ship used through multiple generations, henceforth, its got its battle scars to show. The Tiger is a ship that is well known in the Privateeirs World, although its newer, its well known, so are the weak points well known as well. What do you choose? ')
    if(shipChoice.toLowerCase() === 'jolly jack'){
      console.log('The Pirate Ship, Good Choice')
      }
      else if(shipChoice.toLowerCase() === 'tiger'){
        console.log('The Privateer Ship, Good Choice')
      }
      else{
        console.log('Invalid Ship Choice')
        return
      } 
      while(totalWeight < maxWeight){
        const ammoAmount = parseInt(readline.question(`How much ammo do you want to carry? (current total weight, ${totalWeight})`), 10)
        if(isNaN(ammoAmount) || ammoAmount <= 0 || ammoAmount + totalWeight > maxWeight){
          console.log('Invalid Number, or Max weight is only 500 pounds! ')
          return
        }
        totalWeight += ammoAmount
        const foodAmount = parseInt(readline.question(`How much food do you want to carry? (current total weight, ${totalWeight})`), 10)
        if(isNaN(foodAmount) || foodAmount <= 0 || foodAmount + totalWeight > maxWeight){
          console.log('Invalid Number, or Max weight is only 500 Pounds! ')
          return
        }
        totalWeight += foodAmount
        const waterAmount = parseInt(readline.question(`How much water do you want to carry? (current total weight, ${totalWeight})`), 10)
        if(isNaN(waterAmount) || waterAmount <= 0 || waterAmount + totalWeight > maxWeight){
          console.log('Invalid Number, or Max weight is only 500 Pounds! ')
          return
        }
        totalWeight += waterAmount
        if(totalWeight <= maxWeight){
          console.log(`All right, You chose ${ammoAmount} pounds of ammo, ${foodAmount} pounds of food, ${waterAmount} pounds of water. Looks like your total weight is ${totalWeight}, and your ready to go! `)
          break
        }
      }
      const offToSea = readline.question('Your now ready to go, headed to the New World do you take full sail, or go at half mass to preserve energy? Full sail, or Half mass: ')
      if(offToSea.toLowerCase() === "full sail"){
        let sailSpeed = readline.question('you find many days have passed, but because of the wind direction, speed has picked up dramactically, you see gray and stormy clouds ahead, You can either sail through or take a chance on losing direction and slowing down and riding it out? sail through or slow down: ')
        if(sailSpeed.toLowerCase() === "sail through"){
          const typoonAhead = readline.question("You sail through, but its getting darker, rain is coming down faster and more rough. You see the sea around you start to swirl a little, A typhoon! and its headed right for you! what will you do? face head on, or, Run! ")
        }
        else if(sailSpeed.toLowerCase() === "slow down"){
          const typoonPassedBy = readline.question('You slow down, ahead you see its getting darker and harder to see. Lighting out of nowwhere! A dark mass, a Typhoon in the distance. Had you proceeded further you would have ran right into it! ')
        }
        else{
          console.log('Invalid Input')
          return
        }
        
      }
      else if (offToSea.toLowerCase() === 'half mass'){
        let sailSpeed = readline.question('You find your self making time, but no the time you expected to make, winds are in your favor, however your not using it to your advantage, food and water are a little lower than expected, Do you wish to go full sail? yes or no: ')
        if(sailSpeed.toLowerCase() === 'yes'){
          const darkAvoided = readline.question('You let the sails drop and use the wind to your advantage. You not quite as far as you wanted to be, but you made it to a place to rest before dark. Get on Island and build a campfire? Yes or No? ')
        }
      }
        else if(sailSpeed.toLowerCase() === 'no'){
          const caughtInDark = readline.question('You decide not to use the wind, your caught in dark having no idea where your going. Boom!! You hit a rock! water is flooding in, you have to get ride of 100lbs of items choose which fast! ')
          while(totalWeight > 400){
            const foodAmount = parseInt(readline.question(`How much food do you want to drop?(current total weight: ${totalWeight})`), 10)
            if(isNaN(foodAmount) || foodAmount == 0 || foodAmount + totalWeight > maxWeight){
              console.log('Invalid Number')
              return
          }
          totalWeight -= foodAmount
          const waterAmount = parseInt(readline.question(`How much water do you want to drop? (current total weight: ${totalWeight}`), 10)
          if(isNaN(waterAmount) || waterAmount == 0 || waterAmount + totalWeight > maxWeight){
            console.log('Invalid Number')
            return
        }
        totalWeight -= waterAmount
        const ammoAmount = parseInt(readline.question(`How much ammo do you want to drop? (current total weight: ${totalWeight})`),10)
        if(isNaN(ammoAmount) || ammoAmount == 0 || ammoAmount + totalWeight > maxWeight){
          console.log('Invalid Number')
          return
        }
        totalWeight -= ammoAmount
      }
      // else {
      //   console.log('Invalid Input')
      //   return
      // }
    }

    
    

 
