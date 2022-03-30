const funcaoQueDemora = () => new Promise(
    (res, rej) => {
        setTimeout(() => res({status: 'ok'}), 5000);
    }
);

const funcaoQueDemora2 = () => new Promise(
    (resolve, reject) => {
        setTimeout(() => reject(), 5000);
    }
);

const meuCallback = () => {
    console.log('processamento acabou');
}

funcaoQueDemora()
    .then((resposta) => {
        console.log(resposta.status)
        console.log("1 deu certo!");

        funcaoQueDemora2()
            .then(() => console.log("2 deu certo!"))
            .catch(() => console.log("2 deu errado!"));
    })
    .catch(() => console.log("1 deu errado!"));
