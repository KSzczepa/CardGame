var cards = ["ciri.png", "geralt.png", "jaskier.png", "iorweth.png", "triss.png", "yen.png"];

var background = "url(img/karta.png)";
var oneVisible = false;
var turnCounter = 0;
var visibleNumber = 0;
var enableclick = true;
var numOfCards = 12;

//c0.addEventListener("click", function() {revealCard(0);}); - 'normal way'
//$(c0).on('click', function() {revealCard(0);}); - 'jQuery way'


//turn ON fcn during startup
window.onload = init;

function init()
{
    cards = getRandomCardsOrder(cards, 12);

    for (var i=0; i<numOfCards; i++)
    {
       (function(e){
        $('#c'+e).on("click", function() {revealCard(e);});
       })(i);
    }
}


function revealCard(nr)
{
    if (enableclick == true)
    {
        enableclick = false;
        var image = "url(img/" + cards[nr] +")";
        $('#c'+nr).css('background-image', image);
        $('#c'+nr).off("click");
        /*
        $('#c'+nr).addClass('cardA');
        $('#c'+nr).removeClass('card');
        */
        $('#c'+nr).toggleClass('cardA'); //switch class

        if (!oneVisible)
        {
            oneVisible = true;
            visibleNumber = nr;
            enableclick = true;
        }
        else
        {
            incrCount();
            oneVisible = false;
            compare(visibleNumber, nr);
        }
        
    }



}

function incrCount()
{
    turnCounter++;
    $('.score').html('Turn counter: '+turnCounter); //catching DIV by class
}

function compare(card1, card2)
{
    if (cards[card1] == cards[card2])
        setTimeout(function() {deletePair(card1, card2);}, 750);         
    else    
        setTimeout(function() {hideCards(card1, card2);}, 1000);   

}

function hideCards(card1, card2)
{
    $('#c'+card1).css('background-image', background);
    $('#c'+card1).toggleClass('cardA', false);
    $('#c'+card2).css('background-image', background);
    $('#c'+card2).toggleClass('cardA', false);

    $('#c'+card1).on("click", function() {revealCard(card1);});
    $('#c'+card2).on("click", function() {revealCard(card2);});
    
    enableclick = true;
}

function deletePair(card1, card2)
{
    $('#c'+card1).css('filter', 'grayscale(1)');
    $('#c'+card2).css('filter', 'grayscale(1)');

    enableclick = true;
    
    /*  Img disapears
    $('#c'+card1).css('opacity', '0');
    $('#c'+card2).css('opacity', '0');
    */
    
}


function getRandomInt(max) 
{
    return Math.floor(Math.random() * max);
}


function getRandomCardsOrder(origArray, numberOfCards)
{
    var newArray = [];
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

 //Check if there are exactly 2 cards in the array
 function check(set, nr, card)
 {
     var count = 1;
 
     for (var m=0; m<(nr); m++)
     {
         if (card == set[m])
             count ++;
     }
 
     return count;
 }


 function force_load_local(fileName) 
 {
     window.location = 
         "D:/Dokumenty/JS/odc5_gra/CardGame/"+fileName+".html"
 }