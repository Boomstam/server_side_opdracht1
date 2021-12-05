import Box from "@material-ui/core/Box";
import Hand from "./Hand";

export function Hands(props) {
    const {playerHand, bankHand} = props;
    return <>
        <Box mt={3}>
            <Hand isPlayer={true} cards={playerHand}></Hand>
        </Box>
        <Box mt={3}>
            <Hand isPlayer={false} cards={bankHand}></Hand>
        </Box>
    </>;
}
