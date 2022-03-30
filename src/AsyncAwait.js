const conectaComOBanco = () => new Promise(
    (res, rej) => {
        setTimeout(() => res(), 5000);
    }
);

const funcaoQueDemora = async () => {
    await conectaComOBanco();

    console.log("Acabou!")
};

await funcaoQueDemora();
await conectaComOBanco();
