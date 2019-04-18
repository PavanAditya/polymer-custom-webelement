import { PolymerElement, html } from 'https://unpkg.com/@polymer/polymer@3.0.0-pre.13/polymer-element.js';
// import { PolymerElement, html } from '@polymer/polymer';
// import {togglePlayFunction} from './play-pause';


class customButton extends PolymerElement {

    static get properties() {
        return { sourc: String,
        act : String }
    }

    displayButt() {
        // alert("why did you click the Button !!!!!!!!!!!!!!!!!!!!!!!!!")
        var option = document.createElement("option");
        var text = this.shadowRoot.getElementById('myButton').value;
        option.text = text;
        option.value = "myvalue"
        this.shadowRoot.getElementById('selectButton').appendChild(option);
    }
    static get template() {
        return html`
        I'm button!!!!!!!! click Me :)
        <select id="selectButton">[[sourc]]</select>
        <button value="[[sourc]]" id="myButton" on-click="displayButt">Add Child</button>
        <form action="[[act]]" >
            <input type="submit" value = "click">
        </form>
        `;
    }
}
customElements.define('custom-button', customButton);