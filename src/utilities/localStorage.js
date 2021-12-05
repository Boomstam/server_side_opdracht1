export function fromLocalStorage() {
    return JSON.parse(localStorage.getItem("currentDeck")) || [];
}

export function toLocalStorage(deckID) {
    localStorage.setItem("currentDeck", JSON.stringify(deckID));
}