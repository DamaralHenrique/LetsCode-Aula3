const axios = require('axios');

const axiosGoogle = (callback) => {
    axios.get("https://www.google.com.br/");
    callback();
}

const axiosYT = (callback) => {
    axios.get("https://www.youtube.com/");
    callback();
}

const axiosTwitch = (callback) => {
    axios.get("https://www.twitch.tv/");
    callback();
}

const meuCallback = (site) => {
    console.log("Callback do site "+ site);
}

axiosGoogle(() => {
    meuCallback("Google");
    axiosYT(() => {
        meuCallback("YouTube");
        axiosTwitch(() => {
            meuCallback("Twitch");
        });
    });
});
