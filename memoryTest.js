var cards = ["ciri.png", "geralt.png", "jaskier.png", "jaskier.png", "iorweth.png", "triss.png", 
"geralt.png", "yen.png", "ciri.png", "triss.png", "yen.png", "iorweth.png"];

//console.log(cards);

var background = "url(img/karta.png)";
var oneVisible = false;
var turnCounter = 0;
var visibleNumber = 0;

//c0.addEventListener("click", function() {revealCard(0);}); - 'normal way'
//$(c0).on('click', function() {revealCard(0);}); - 'jQuery way'


//turn ON fcn during startup
window.onload = init;

function init()
{
    for (var i=0; i<=11; i++)
    {
       (function(e){
        $('#c'+e).click(function() {revealCard(e);});
       })(i);
    }
}


function revealCard(nr)
{
    
    var image = "url(img/" + cards[nr] +")";

    $('#c'+nr).css('background-image', image);
    /*
    $('#c'+nr).addClass('cardA');
    $('#c'+nr).removeClass('card');
    */
    $('#c'+nr).toggleClass('cardA'); //switch class

    if (!oneVisible)
    {
        oneVisible = true;
        visibleNumber = nr;
    }
    else
    {
        incrCount();
        oneVisible = false;
        compare(visibleNumber, nr);

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
        deletePair(card1, card2);
    else
    {
        setTimeout(function() {hideCards(card1, card2);}, 750);
        
    }
        
}

function hideCards(card1, card2)
{
    alert('pudlo');
    $('#c'+card1).css('background-image', background);
    $('#c'+card1).toggleClass('card');
    $('#c'+card2).css('background-image', background);
    $('#c'+card2).toggleClass('card');
    
}

function deletePair(card1, card2)
{
    //alert('para');
    $('#c'+card1).css('opacity', '0');
    $('#c'+card2).css('opacity', '0');
}

