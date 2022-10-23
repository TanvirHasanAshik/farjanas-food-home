const loadData = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => showKanyeData(data));
}

const showKanyeData = (data) => {
    const quote = document.getElementById('quote');
    quote.innerText = data.quote;
}