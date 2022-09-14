var cards = ["ciri.png", "geralt.png", "jaskier.png", "jaskier.png", "iorweth.png", "triss.png", 
"geralt.png", "yen.png", "ciri.png", "triss.png", "yen.png", "iorweth.png"];

//console.log(cards);

var background = "url(img/karta.png)";
var oneVisible = false;
var turnCounter = 0;
var visibleNumber = 0;
var enableclick = true;

//c0.addEventListener("click", function() {revealCard(0);}); - 'normal way'
//$(c0).on('click', function() {revealCard(0);}); - 'jQuery way'


//turn ON fcn during startup
window.onload = init;

function init()
{
    for (var i=0; i<=11; i++)
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
    //Removing an event handler
   // $('#c'+card1).unbind("click");
    //$('#c'+card2).off("click");

    //Set gray filter
    $('#c'+card1).css('filter', 'grayscale(1)');
    $('#c'+card2).css('filter', 'grayscale(1)');

    enableclick = true;
    
    /*  Img disapears
    $('#c'+card1).css('opacity', '0');
    $('#c'+card2).css('opacity', '0');
    */
    
}

