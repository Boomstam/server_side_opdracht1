const tenners = ['0', 'J', 'Q', 'K'];
const aceThreshold = 10;

function cardValue(card){
    const valChar = card.code.charAt(0);
    if(valChar === 'A') return 1;
    if(tenners.includes(valChar)) return 10;
    return parseInt(valChar);
}

export function handValue(hand){
    let val = 0;
    let numAces = 0;
    for(const card of hand){
        let cardVal = cardValue(card);
        if(cardVal === 1){
            numAces++;
        } else {
            val += cardVal;
        }
    }
    for(let i = 0; i < numAces; i++){
        if(val > aceThreshold){
            val += 1;
        } else {
            val += 11;
        }
    }
    return val;
}