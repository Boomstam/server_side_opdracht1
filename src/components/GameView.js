import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {Hands} from "./Hands";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Controls} from "./Controls";

const useStyles = makeStyles({
    root: {
        backgroundColor: "#1A5E2B",
        display: "flex",
        justifyContent: "center",
        color: "#BEA543",
        height: "100vh",
        textAlign: "center",
        width: "100vw"
    },
    text: {
        fontSize: 24,
    },
});

export function GameView(props) {
    const classes = useStyles();
    const {hand, bankHand, handleDrawCard, pass, message} = props;
    return <Box className={classes.root}>
            <Box sx={{width: "100vw"}}>
            <Controls hand={hand} bankHand={bankHand} handleDrawCard={handleDrawCard} pass={pass}/>
            <Box m={3}>
                <Typography className={classes.text}>{message}</Typography>
            </Box>
            <Hands playerHand={hand} bankHand={bankHand}/>
        </Box>
    </Box>;
}