const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => showAllCountries(data));
};

const showAllCountries = (countryData) => {
    const countriesContainer = document.getElementById('countries-container');
    countryData.forEach(country => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h1><span>Name: </span>${country.name.common}</h1>
            <h2><span>Region: </span> ${country.region}</h2>
            <button onclick='selectCountry("${country.name.common}")'>Click Details</button>
        `
        countriesContainer.appendChild(div);
    });
}

const selectCountry = (country) => {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(res => res.json())
        .then(data => showCountryDetails(data[0]));
}

const showCountryDetails = countryData => {
    console.log(countryData)
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
        <h1><span>Name: </span>${countryData.name.common}</h1>
        <h2><span>Region: </span> ${countryData.region}</h2>
        <h3><span>area: </span> ${countryData.area}</h3>
        <h4><span>population: </span> ${countryData.population}</h4>
        <img src="${countryData.flags.png}" alt=""><br><br>
    `;
}
loadCountries();