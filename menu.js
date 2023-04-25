let foodName = ["Pizza", "Salat", "Soup"]
let foodPrice = [100.00 , 75.00, 50.00]


let menu = `
###############
MENU
###############
`

for(let i=0; i<foodName.length; i++ ){
    menu += `${i+1}.${foodName[i]} \n`
}
menu += `shoose:`


let options = parseInt(prompt(menu) ) - 1

let optionDiscription = ` You've choosen
"${foodName[options ]}"
1 portion - ${foodPrice[options] }
How many do you want?: `

let portions = parseInt(prompt(optionDiscription)) 

let cost = foodPrice[options] * portions

let orderDescriptions = `Your  order:
"${foodName[options]}": ${portions} x ${foodPrice[options] } = ${cost}`

alert ( orderDescriptions)
 
let clientConfirm = confirm("Do you want delivery?")
let clientDenies = `you have to pick up`
let clientDelivery = `if you have order more then 500 lei, you delivery is free, else delivery costs 45 lei `
if(clientConfirm = true){
    alert (clientDenies)
}
else {
    alert (clientDelivery)
}





