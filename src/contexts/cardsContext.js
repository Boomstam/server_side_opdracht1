import React, {createContext, useContext, useState, useMemo, useCallback} from 'react';
import {toLocalStorage} from "../utilities/localStorage";
import {drawCards, fetchDeck} from "../utilities/fetch";

const GameContext = createContext();

export function GameProvider(props) {
    const [deck, setDeck] = useState([]);
    const [hand, setHand] = useState([]);
    const [bankHand, setBankHand] = useState([]);
    const [gameFinished, setGameFinished] = useState(false);

    const newDeck = useCallback(() => {
        setHand([]);
        setBankHand([]);
        fetchNewDeck();
        setGameFinished(false);
    }, []);

    async function fetchNewDeck(){
        const deck = await fetchDeck(6);
        setDeck(deck.id);
        toLocalStorage(deck.id);
        const cards = await drawCards(2);
        setHand(cards.cards);
        const bankCards = await drawCards();
        setBankHand(bankCards.cards);
    }

    const addCardsToHand = useCallback((cards) => {
        setHand(hand.concat(cards));
    }, [hand, setHand]);

    const addCardsToBankHand = useCallback((cards) => {
        setBankHand(bankHand.concat(cards));
    }, [bankHand, setBankHand]);

    const stopGame = useCallback((cards) => {
        setGameFinished(true);
    }, [setGameFinished]);

    const resetHands = useCallback(() => {
        setHand([]);
        setBankHand([]);
    }, [setHand, setBankHand]);

    const api = useMemo(
        () => ({
            deck,
            hand,
            bankHand,
            addCardsToHand,
            addCardsToBankHand,
            newDeck,
            resetHands,
            gameFinished,
            stopGame
        }),
        [
            deck,
            hand,
            bankHand,
            addCardsToHand,
            addCardsToBankHand,
            newDeck,
            resetHands,
            gameFinished,
            stopGame
        ]
    );

    return <GameContext.Provider value={api}>
        {props.children}
    </GameContext.Provider>
}


export const useCardsContext = () => useContext(GameContext);