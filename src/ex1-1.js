const funcaoQueDemora1 = (callback) => {
    setTimeout(() => callback(), 1000);
}
const funcaoQueDemora2 = (callback) => {
    setTimeout(() => callback(), 2000);
}
const funcaoQueDemora3 = (callback) => {
    setTimeout(() => callback(), 3000);
}
const meuCallback = (num) => {
    console.log(num + " chamou um callback!");
}

funcaoQueDemora1(() => {
    meuCallback(1);
    funcaoQueDemora2(() => {
        meuCallback(2);
        funcaoQueDemora3(() => {
            meuCallback(3);
            }
        );}
    );}
);
