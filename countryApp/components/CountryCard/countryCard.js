const COUNTRYCARD_TEMLPATE = document.createElement("template");
COUNTRYCARD_TEMLPATE.innerHTML = `
<style>
@import url('components/CountryCard/countryCard.css')
</style>
<div id="country-card">
    <h2 id="official-name"></h2>
    <h2 id="native-name"></h2>
    <div id="flag-box">
        <img id="flag" src="" alt="flag">
    </div>
    <p id="capital"></p>
    <p id="area"></p>
    <p id="official-language"></p>
    <p id="population"></p>
    <p id="citizenship"></p>
    <p id="currency"></p>
    <p id="phone-code"></p>
    <p id="domain-name"></p>
    <p id="region"></p>
    <p id="time-zone"></p>
    <p id="border-countries"></p>
</div>
`

class CountryCard extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(COUNTRYCARD_TEMLPATE.content.cloneNode(true));

        setTimeout(() => {

            this.shadowRoot.querySelector("#official-name").innerHTML = "Official Name: " + this.getAttribute("name");
            this.shadowRoot.querySelector("#native-name").innerHTML = "Native Name: " + this.getAttribute("native-name");
            this.shadowRoot.querySelector("#capital").innerHTML = "Capital: " + this.getAttribute("capital");
            this.shadowRoot.querySelector("#area").innerHTML = "Area: " + this.getAttribute("area") + "km<sup>2</sup>";
            this.shadowRoot.querySelector("#official-language").innerHTML = "Official Language: " + this.getAttribute("official-language");
            this.shadowRoot.querySelector("#population").innerHTML = "Population: " + this.getAttribute("population");
            this.shadowRoot.querySelector("#citizenship").innerHTML = "Citizenship: " + this.getAttribute("citizenship");
            this.shadowRoot.querySelector("#currency").innerHTML = "Currency: " + this.getAttribute("currencyName") + " (" + this.getAttribute("currencyCode") + ")";
            this.shadowRoot.querySelector("#phone-code").innerHTML = "Telephone Code:" + this.getAttribute("phone-code");
            this.shadowRoot.querySelector("#domain-name").innerHTML = "Domain Name: " + this.getAttribute("domain-name");
            this.shadowRoot.querySelector("#region").innerHTML = "Region: " + this.getAttribute("region");
            this.shadowRoot.querySelector("#time-zone").innerHTML = "Time Zone: " + this.getAttribute("time-zone");
            this.shadowRoot.querySelector("#border-countries").innerHTML = "Border Countries: " + this.getAttribute("border-countries");

            if (this.getAttribute("name") == "Armenia") {

                this.shadowRoot.querySelector("#official-name").innerHTML = "Official Name: " + "Invader";
                this.shadowRoot.querySelector("#native-name").innerHTML = "Native Name: " + "զավթիչ";
                this.shadowRoot.querySelector("#capital").innerHTML = "Capital: " + "empty";
                this.shadowRoot.querySelector("#area").innerHTML = "Area: " + "0km<sup>2</sup>";
                this.shadowRoot.querySelector("#official-language").innerHTML = "Official Language: " + "Vazgen Language";
                this.shadowRoot.querySelector("#population").innerHTML = "Population: " + this.getAttribute("population");
                this.shadowRoot.querySelector("#citizenship").innerHTML = "Citizenship: " + "Vazgenian";
                this.shadowRoot.querySelector("#currency").innerHTML = "Currency: Vazgenian Dram (VGD)";
                this.shadowRoot.querySelector("#phone-code").innerHTML = "Telephone Code:" + this.getAttribute("phone-code");
                this.shadowRoot.querySelector("#domain-name").innerHTML = "Domain Name: " + this.getAttribute("domain-name");
                this.shadowRoot.querySelector("#region").innerHTML = "Region: " + "Mars";
                this.shadowRoot.querySelector("#time-zone").innerHTML = "Time Zone: " + this.getAttribute("time-zone");
                this.shadowRoot.querySelector("#border-countries").innerHTML = "Border Countries: Vazgens do not know what the border is.";

                let p = document.createElement("p");
                this.shadowRoot.querySelector("#flag-box").appendChild(p);
                this.shadowRoot.querySelector("#flag-box>p").innerHTML = "Noldu Paşinyan"

                let p2 = document.createElement("p");
                this.shadowRoot.querySelector("#country-card").appendChild(p2);
                this.shadowRoot.querySelector("#country-card>p").innerHTML = "<b>Famous quote: Kokation buro decided to a a Karabakh to be a part of Azerbaijan<b>"
            }

            this.shadowRoot.querySelector("#flag").src = this.getAttribute("flag");
        }, 100);
    }
}

window.customElements.define("country-card", CountryCard);
