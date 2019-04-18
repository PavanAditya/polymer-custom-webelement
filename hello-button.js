import { PolymerElement, html } from 'https://unpkg.com/@webcomponents/webcomponentsjs/webcomponents-loader.js';

class customElement extends PolymerElement {
    static get template() {
        return html`
            Custom Element Displayed<br>
            <button onclick="alert('WHY DID YOU CLICK MEEEE!!!!!!!!!!!!!!!')">Alert......!</button>
            `;
    }
}

customElements.define('custom-element', customElement);