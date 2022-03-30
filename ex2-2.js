const axios = require('axios');

const axiosGoogle = () => new Promise(
    (res, rej) => {
        axios.get("https://www.google.com.br/");
        res();
    }
);

const axiosYT = (callback) => new Promise(
    (res, rej) => {
        axios.get("https://www.youtube.com/");
        res();
    }
);

const axiosTwitch = (callback) => new Promise(
    (res, rej) => {
        axios.get("https://www.twitch.tv/");
        res();
    }
);

const meuCallback = (site) => {
    console.log("Callback do site "+ site);
}

axiosGoogle()
    .then(() => {
        meuCallback("Google");
        axiosYT()
            .then(() => {
                meuCallback("YouTube");
                axiosTwitch()
                    .then(() => {
                        meuCallback("Twitch");
                        
                    })
                    .catch(() => console.log("deu erro no Twitch"));
            })
            .catch(() => console.log("deu erro no YouTube"));
    })
    .catch(() => console.log("deu erro no Google"));
