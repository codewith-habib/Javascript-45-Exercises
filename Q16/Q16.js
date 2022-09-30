let guest = ['My Teachers','My Brother', 'My Sisters']
console.log("Hey", guest[0] , "Please Come to Dinner tonight")
console.log("Hey", guest[1] , "Please Come to Dinner tonight")
console.log("Hey", guest[2] , "Please Come to Dinner tonight")

//Above Code is from Last Question, Now am doing Q15 next to it

console.log(guest[1], "is not coming tonight")
guest[1] = 'My Cousin'
console.log("Hey", guest[0] , "Please Come to Dinner tonight")
console.log("Hey", guest[1] , "Please Come to Dinner tonight")
console.log("Hey", guest[2] , "Please Come to Dinner tonight")

//Above Code is from Last Question, Now am doing Q16 next to it

console.log("Hey Everyone, We still have extra chairs so let's invite some others too")
guest.unshift('Ali')
guest.splice(2,0,'Umar')
guest.push('Usman')
console.log(guest)
console.log("Hey", guest[0] , "Please Come to Dinner tonight")
console.log("Hey", guest[1] , "Please Come to Dinner tonight")
console.log("Hey", guest[2] , "Please Come to Dinner tonight")
console.log("Hey", guest[3] , "Please Come to Dinner tonight")
console.log("Hey", guest[4] , "Please Come to Dinner tonight")
console.log("Hey", guest[5] , "Please Come to Dinner tonight")