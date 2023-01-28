const container = document.querySelector('.container');
const jokeBtn = document.querySelector('.newGen');
const content = document.querySelector('.infoHead');
const author = document.querySelector('.author');
const load = document.querySelector('.loader');

// jokeBtn.addEventListener('click', function () {
//     console.log('u r the joke');
//     content.innerText = ''
//     content.append('u r the joke');


// })
function loader() {
    load.hidden = false;
    container.hidden = true;

}
function complate() {
    if (!load.hidden) {
        loader.hidden = true;
        container.hidden = false;
    }

}


const getDadJoke = async () => {
    try {
        loader();
        const headers = { headers: { Accept: "application/json" } }
        const res = await axios.get('https://icanhazdadjoke.com/', headers)
        complate();
        content.innerText = ''

        content.append(res.data.joke);



    } catch (e) {

    }

}



jokeBtn.addEventListener('click', getDadJoke);


