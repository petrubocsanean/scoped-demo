import { LitElement, html, css } from 'lit';

export class SimpleGreeting extends LitElement {
    static get properties() {
        return { name: { type: String } };
    }

    constructor() {
        super();

        this.name = 'World';
    }

    render() {
        return html`<span>hello ${this.name}!</span>`;
    }
}