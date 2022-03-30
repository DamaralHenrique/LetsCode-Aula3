const funcaoQueDemoraGeral = (tempo) => new Promise(
    (res, rej) => {
        setTimeout(() => res(), tempo);
    }
);

const funcaoQueDemora1 = async () => {
    await funcaoQueDemoraGeral(1000);
    console.log("1 - Acabou");
};

const funcaoQueDemora2 = async () => {
    await funcaoQueDemoraGeral(2000);
    console.log("2 - Acabou");
};
const funcaoQueDemora3 = async () => {
    await funcaoQueDemoraGeral(3000);
    console.log("3 - Acabou");
};

const geral = async () => {
    await funcaoQueDemora1();
    await funcaoQueDemora2();
    await funcaoQueDemora3();
}

geral();
