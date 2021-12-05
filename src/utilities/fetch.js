import {fromLocalStorage} from "./localStorage";

export async function fetchDeck(deckCount = 1) {
    const response = await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=` + deckCount);
    const data = await response.json();
    return {
        id: data.deck_id
    }
}

export async function drawCards(cardCount = 1) {
    const deckID = fromLocalStorage();
    const response = await fetch(`https://deckofcardsapi.com/api/deck/` + deckID +`/draw/?count=` + cardCount);
    const data = await response.json();
    return { cards: data.cards };
}