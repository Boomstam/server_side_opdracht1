import {useCardsContext} from "../contexts/cardsContext";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import {Game} from "./Game";
import {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    bar: {
        backgroundColor: "#1A5E2B",
    },
    button: {
        fontSize:"x-large",
        backgroundColor: "#BEA543",
        color: "white",
        margin: 20,
    }
});

export function GameCreator() {
    const classes = useStyles();
    const [gameOn, setGameOn] = useState(false);
    const {newDeck, resetHands} = useCardsContext();

    function handleClick(){
        resetHands();
        newDeck();
        setGameOn(true);
    }

    function stopGame(){
        setGameOn(false);
    }

    return <>
        <Box className={classes.bar} sx={{display: "flex", justifyContent: "center"}}>
            <Button className={classes.button} onClick={handleClick}>New Game</Button>
            <Button className={classes.button} onClick={stopGame}>Stop Game</Button>
        </Box>
        {
           gameOn === true ? <Game/> : null
        }
    </>
}