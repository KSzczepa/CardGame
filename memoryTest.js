var cards = ["ciri.png", "geralt.png", "jaskier.png", "iorweth.png", "triss.png", "yen.png"];

var background = "url(img/karta.png)";
var oneVisible = false;
var turnCounter = 0;
var visibleNumber = 0;
var enableclick = true;
const numOfCards = 12;
var numOfPairs = 0;

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


function delay(n) {  
    n = n || 2000;
    return new Promise(done => {
      setTimeout(() => {
        done();
      }, n);
    });
  }


function revealCard(nr)
{
    const asyncWait = ms => new Promise(resolve => setTimeout(resolve, ms));

     

    if (enableclick == true)
    {
        enableclick = false;


        
        $('#c'+nr).css('animation', 'mymove 0.75s ease-in-out');
        $('#c'+nr).css('animation-direction', 'normal');
        
        

        var image = "url(img/" + cards[nr] +")";
        //$('#c'+nr).css('background-image', image);
        $('#c'+nr).off("click");
        /*
        $('#c'+nr).addClass('cardA');
        $('#c'+nr).removeClass('card');
        */
        
        setTimeout(function() {
            
        $('#c'+nr).css('background-image', image);
        $('#c'+nr).toggleClass('cardA'); //switch class
        }, 380);

        setTimeout(function() {

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
        }, 150);

        
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
    {
        numOfPairs ++;
        setTimeout(function() {deletePair(card1, card2);}, 1000);
    }
                 
    else    
        setTimeout(function() {hideCards(card1, card2);}, 1500);   
        setTimeout(function() {final();}, 5000);  
        
}

function hideCards(card1, card2)
{
    $('#c'+card1).css('background-image', background);
    $('#c'+card1).css('-webkit-transform', 'none');
    $('#c'+card1).css('-ms-transform', 'none');
    $('#c'+card1).css('transform', 'none');
    $('#c'+card1).toggleClass('cardA', false);     
       
    
    $('#c'+card2).css('background-image', background);
    $('#c'+card2).css('-webkit-transform', 'rotateY(0deg)');
    $('#c'+card2).css('-ms-transform', 'rotateY(0deg)');
    $('#c'+card2).css('transform', 'rotateY(0deg)');
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

 function final()
 {
    if ((numOfCards/2) == numOfPairs)
        force_load_local('reload_page');
 }