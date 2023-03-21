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
    //orginal
    // const getCountryHTML = country => {
    //     return `
    //     <div class="country">
    //       <h2>${country.name.common}</h2>
    //        <img src="${country.flags.png}">
    //     </div>
    //     `
    // }

//option-1
// const getCountryHTML = country => {

//     const { name, flags } = country;
//     return `
//          <div class="country">
//            <h2>${name.common}</h2>
//             <img src="${flags.png}">
//          </div>
//          `
// }


//option-2
const getCountryHTML = ({ name, flags }) => { //perameter er modde dis structureing [const getCountryHTML = country => {

    //  (details)   const { name, flags } = country;  "country=country={name,flags}"]
    return `
         <div class="country">
           <h2>${name.common}</h2>
            <img src="${flags.png}">
         </div>
         `
}
loadCountries();