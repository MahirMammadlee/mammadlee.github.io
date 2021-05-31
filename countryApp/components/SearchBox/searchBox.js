const SEARCHBOX_TEMLPATE = document.createElement("template");
SEARCHBOX_TEMLPATE.innerHTML = `
<style>
@import url('components/SearchBox/searchBox.css')
</style>
<div id="search-box">
    <input autofocus id="search" type="text" placeholder="Enter country name">
</div>
`
let countriesData = ""

class SearchBox extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(SEARCHBOX_TEMLPATE.content.cloneNode(true));

        const search = this.shadowRoot.querySelector("#search");

        search.addEventListener("input", () => {

            searchCountry(search.value.trim());
        });

        async function searchCountry(val) {
            if (val) {
                await fetch(`https://restcountries.eu/rest/v2/name/${val}`)
                    .then(response => response.json()).then(countriesData => {

                        prepareCountries(countriesData);
                    })
                    .catch(err => console.log(`Error budur: ${err}`))
            } else {
                countriesData = "";
                prepareCountries(countriesData);
            }
        }

        function prepareCountries(countriesData) {

            document.querySelector("#countries").innerHTML = "";

            Array.prototype.forEach.call(countriesData, country => {

                let country_card = document.createElement("country-card");

                country_card.setAttribute("name", country.name);
                country_card.setAttribute("native-name", country.nativeName);
                country_card.setAttribute("flag", country.flag);
                country_card.setAttribute("capital", country.capital);
                country_card.setAttribute("area", country.area);
                country_card.setAttribute("official-language", country.languages[0].name);
                country_card.setAttribute("population", country.population);
                country_card.setAttribute("citizenship", country.demonym);
                country_card.setAttribute("currencyName", country.currencies[0].name);
                country_card.setAttribute("currencyCode", country.currencies[0].code);
                country_card.setAttribute("phone-code", country.callingCodes);
                country_card.setAttribute("domain-name", country.topLevelDomain);
                country_card.setAttribute("region", country.subregion);
                country_card.setAttribute("time-zone", country.timezones);
                country_card.setAttribute("border-countries", country.borders);

                document.querySelector("#countries").append(country_card);
            });
        }

    }
}

window.customElements.define("search-box", SearchBox);
