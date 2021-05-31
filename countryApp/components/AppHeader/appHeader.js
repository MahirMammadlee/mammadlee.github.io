const APPHEADER_TEMLPATE = document.createElement("template");
APPHEADER_TEMLPATE.innerHTML = `
<style>
@import url('components/AppHeader/appHeader.css')
</style>
<div id="header">
    <h1>About Countries</h1>
</div>
`

class AppHeader extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(APPHEADER_TEMLPATE.content.cloneNode(true));

    }
}

window.customElements.define("app-header", AppHeader);
