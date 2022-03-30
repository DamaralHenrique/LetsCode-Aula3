const funcaoQueDemora1 = () => new Promise(
    (res, rej) => {
    setTimeout(() => res(), 1000);
    }
);
const funcaoQueDemora2 = () => new Promise(
    (res, rej) => {
    setTimeout(() => res(), 2000);
    }
);
const funcaoQueDemora3 = () => new Promise(
    (res, rej) => {
    setTimeout(() => res(), 3000);
    }
);
const meuCallback = (num) => {
    console.log(num + " chamou um callback!");
}

funcaoQueDemora1()
    .then(() =>{
        meuCallback(1);
        funcaoQueDemora2()
        .then(() =>{
            meuCallback(2);
            funcaoQueDemora3()
                .then(() =>{
                    meuCallback(3);
                })
                .catch(() => console.log("3 - erro!"));
        })
        .catch(() => console.log("2 - erro!"));
    })
    .catch(() => console.log("1 - erro!"));
