const bill = 275;

const calculateTip = (tip, bill) => {
    return bill * (tip / 100);
}

const tip = bill >= 50 && bill <= 300 ? calculateTip(15, bill) : calculateTip(20, bill);

/* switch (bill) {
    case bill >= 50 && bill <= 300:
        tip = calculateTip(15, bill);
        break;
    default:
        tip = calculateTip(20, bill);
} */

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);