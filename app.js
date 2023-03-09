//1 ----------------------------------------------------------- 
// display information of a specific country
const getCountryByName = (countryName) => {
    return fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => response.json())
    .then(data => data[0]);
    
}

//2 -----------------------------------------------------------  
// more information about that one country 
const displayCountryInfo = (country) => {
    // creating name and population as elements and add them to section in html
    const section = document.getElementById("country_info");
    const name = document.createElement('h3');
    const population = document.createElement('p');
    // making the text reflect that of the country inputted
    name.innerText = country.name.common;
    population.innerText = `Population: ${country.population}`;
    // adding the name and population to the section
    section.appendChild(name);
    section.appendChild(population);
}

// event listener for the button
document.getElementById("generate_info").addEventListener("click", () => {
    // hard code the country that we want to display info for
    getCountryByName("spain")
    .then(country => {
        displayCountryInfo(country);
    })
});



//3 method to get all countries---------------------------------
const getAllCountries = () => {
    // use url with all to access and display all the countries
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(countries => {
        showAllCountries(countries);
    });
}

const showAllCountries = (countries) => {
    // create section and append a ul to it
    const section = document.getElementById("countries");
    const ul = document.createElement('ul');
    section.appendChild(ul);

    countries.forEach(country => {
        // create list, name and poopulation elements
        const li = document.createElement('li');
        const name = document.createElement('h3');
        const population = document.createElement('p');
        // change text to reflect each country
        name.innerText = country.name.common;
        population.innerText = `Population: ${country.population}`;
        // add them to list and then to the ul
        li.appendChild(name);
        li.appendChild(population);
        ul.appendChild(li);
    });
}

getAllCountries();