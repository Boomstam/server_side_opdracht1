import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {handValue} from "../services/calculateCardTotal";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    text: {
        fontSize: 24,
    },
    button: {
        backgroundColor: "white",
        color: "#BEA543",
        margin: 10,
    }
});

export function Controls(props) {
    const classes = useStyles();
    const {hand, bankHand, handleDrawCard, pass} = props;
    return <Box
        sx={{display: "flex", textAlign: "left", justifyContent: "space-evenly", width: "60%", marginLeft: "20%"}}>
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>
            <Typography className={classes.text}>{"Player: " + handValue(hand)}</Typography>
            <Typography className={classes.text}>{"Bank: " + handValue(bankHand)}</Typography>
        </Box>
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>
            <Button onClick={handleDrawCard} className={classes.button}>Draw Card</Button>
            <Button onClick={pass} className={classes.button}>Pass</Button>
        </Box>
    </Box>;
}