const dinner = {
    cheeseburger: 12, 
    steak: 20,
    soup: 8, 
    mac: 14, 
    soupsalad: 16,  
}


function totalCost(meal){
total = 0; 
for(const food in meal){
    total += meal[food];
}
return total;
}

 console.log(totalCost);