import getRandomCardsOrder from './RandomCardsNum';

const SortCards = (characters,numberOfCards ) => {

    const charactersSorted = getRandomCardsOrder(characters, numberOfCards);
        
        for (let i = 0; i < numberOfCards; i++) {
            charactersSorted.splice(i, 1, { id: i, character: charactersSorted[i], disable: false});
        }

    return (charactersSorted)
}

export default SortCards;