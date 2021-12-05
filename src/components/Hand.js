import Box from "@mui/material/Box";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    text: {
        fontSize: 20,
        marginBottom: 5,
    },
});

export default function Hand(props){
    const classes = useStyles();
    const {isPlayer, cards} = props;
    return <Box>
        <Typography className={classes.text}>{isPlayer === true ? "Player's Hand" : "Bank's Hand"}</Typography>
        {
            cards.map(
                (card, i) =>
                    <Box
                        key={card.image + "_" + i}
                        component="img"
                        alt={card.code}
                        src={card.image}
                        width={100}
                    />
            )
        }
        </Box>
}