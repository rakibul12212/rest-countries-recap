const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
displayCountries = countries => {
    console.log(countries[0]);
    const countriesHTML = countries.map(country => getCountryHTML(country));
    //console.log(countriesHTML[0]); // [0] disi shudu akta k dekhanor jonno
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' '); // empty string korar jonno  (' ') disi

}
const getCountryHTML = country => {
    return `
    <div class="country">
      <h2>${country.name.common}</h2>
       <img src="${country.flags.png}">
    </div>
    `
}
loadCountries();