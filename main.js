const form = document.querySelector('form');
const searchResult = document.querySelector('.search-result');
let searchQuery = '';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('#input').value;
    fetchAPI();
});

async function fetchAPI(){
    const baseURL = `https://www.omdbapi.com/?s=${searchQuery}&apikey=61041f60`;
    const response = await fetch(baseURL);
    const data = await response.json();
    generatedHTML(data.Search);
    console.log(data);
}

function generatedHTML(results){
    let generatedHTML = '';
    results.map(result => {
        generatedHTML +=
        `
        <div class="item">
        <img src="${result.Poster}" alt="">
        <div class="content">
            <h3>${result.Title}</h3>
            <p>${result.Year}</p>
            <button class="btn btn-primary">Watch</button>
        </div>
        </div>
        `
    })
    searchResult.innerHTML = generatedHTML;
}

document.querySelector('.menu').addEventListener('click', () => {
    const navbar = document.querySelector('.navbar-left').classList.toggle('open');
})