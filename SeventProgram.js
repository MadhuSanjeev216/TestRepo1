let inCash = 25000, cost = 30000, card = 3000;
buySmartPhone();
function buySmartPhone(){
    let totalCash = inCash + card;
    if(totalCash>=cost){
        console.log('I can buy the phone');
    }
    else{
        console.log('I can\'t buy the phone');
        console.log(`To Buy the phone you still need ${cost-totalCash}\\-`);
    }
}