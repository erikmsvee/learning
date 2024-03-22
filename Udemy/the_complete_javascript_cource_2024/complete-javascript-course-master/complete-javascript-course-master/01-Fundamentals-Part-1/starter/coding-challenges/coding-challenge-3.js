const scoreDolphins = [96, 108, 89];
const scoreKoalas = [88, 91, 110];

const dolphinsAverage = scoreDolphins.reduce((sum, score) => sum + score) / scoreDolphins.length;
const koalasAverage = scoreKoalas.reduce((sum, score) => sum + score) / scoreKoalas.length;

if (dolphinsAverage > koalasAverage) {
    console.log('Dolphins win the trophy');
} else if (dolphinsAverage < koalasAverage) {
    console.log('Koalas win the trophy');
} else {
    console.log('Both win the trophy');
}
