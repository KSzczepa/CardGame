const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}


 //Check if there are exactly 2 cards in the array
 const check = (set, nr, card) => {
     var count = 1;
 
     for (var m=0; m<(nr); m++)
     {
         if (card == set[m])
             count ++;
     }
 
     return count;
 }

function getRandomCardsOrder(origArray, numberOfCards)
{
    var newArray = [];
    const cardParams = {
        id: '',
        name: '',
    };
    var count = 0;
    var card = '';

    for (var i=0; i<(numberOfCards); i++)
    {
        count = 0;
        while (count==0 || count>2)
        {
            card = getRandomInt(numberOfCards/2);
            count = check(newArray, numberOfCards, origArray[card]);
        }        
        
        newArray.push(origArray[card]);
        console.log(newArray[i]+' count: '+count);
        
    }
    return newArray;
}



 export default getRandomCardsOrder;