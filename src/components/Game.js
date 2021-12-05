import {useCardsContext} from "../contexts/cardsContext";
import {drawCards} from "../utilities/fetch";
import {handValue} from "../services/calculateCardTotal";
import {useCallback, useEffect, useState} from "react";
import Messages from "../data/messages"
import {GameView} from "./GameView";

export function Game() {
    const {hand, addCardsToHand, bankHand, addCardsToBankHand, gameFinished, stopGame} = useCardsContext();
    const [message, setMessage] = useState([Messages.Draw]);
    const [playerTurn, setPlayerTurn] = useState(true);

    useEffect(() => {
        if(gameFinished === false){
            setMessage(Messages.Draw);
        }
    }, [gameFinished]);

    const updateGameState = useCallback( () => {
        const handVal = handValue(hand);
        const bankHandVal = handValue(bankHand);
        if (playerTurn) {
            if (handVal > 21) {
                setMessage(Messages.Bust);
                endGame();
            }
            if (handVal === 21) {
                setMessage(Messages.Blackjack);
                endGame();
            }
        } else {
            if (bankHandVal > 21) {
                setMessage(Messages.Won);
                endGame();
            } else if (bankHandVal > 16) {
                if (bankHandVal === handVal) {
                    setMessage(Messages.Tie);
                } else if (bankHandVal < handVal) {
                    setMessage(Messages.Won);
                } else if (bankHandVal > handVal) {
                    setMessage(Messages.Lost);
                }
                endGame();
            }
        }

        function endGame(){
            stopGame();
            setPlayerTurn(true);
        }
    }, [stopGame, bankHand, hand, playerTurn]);

    useEffect(() => { updateGameState() }, [hand, bankHand, updateGameState]);

    function handleDrawCard(){
        newDraw();
    }

    async function newDraw(){
        if(gameFinished === true) return;
        const cards = await drawCards();
        if(playerTurn === true) {
            addCardsToHand(cards.cards);
        } else {
            addCardsToBankHand(cards.cards);
        }
    }

    function pass(){
        if(gameFinished === true) return;
        setPlayerTurn(false);
        setMessage(Messages.Pass);
    }

    return <GameView hand={hand} bankHand={bankHand}
                     handleDrawCard={handleDrawCard} pass={pass} message={message}/>
}