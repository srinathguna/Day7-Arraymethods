const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.send();
xhr.onload = () => {
    let data = JSON.parse(xhr.response)
    //Get all the countries from Asia continent /region using Filter function
    console.log("--- Output asia countries ---")
    let countries = data.filter((val) => val.continents.includes("Asia") && val.region === "Asia") //Filter
    console.log(countries); //Output asia countries

    //Get all the countries with a population of less than 2 lakhs using Filter function
    console.log("--- Output countries with population ---")
    let population = data.filter((val) => val.population < 200000) //Filter
    console.log(population); //Output countries with population

    //Print the following details name, capital, flag, using forEach function
    console.log("--- Output all countries name,captital,flag ---")
    data.forEach(element => (
        console.log(`Name:${element.name.common } \nCapital:${element.capital} \nFlag: ${element.flags.png} `)
    )); //Output all countries name,captital,flag


    //Print the total population of countries using reduce function
    console.log("--- output population ---")
    let totalPopulation = data.reduce((pval,cval) => {
        return pval + cval.population
    },0)
    console.log(totalPopulation.toLocaleString()) // output population

    //Print the country that uses US dollars as currency.
    console.log("--- Output uscurrency ---")
    let usCurrency = data.filter((val) => val.currencies?.hasOwnProperty('USD')) //Filter
    console.log(usCurrency); //Output uscurrency
}