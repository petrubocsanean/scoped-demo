import { LitElement, html, css } from 'lit';
import { ScopedRegistryHost } from '@lit-labs/scoped-registry-mixin';
import '@webcomponents/scoped-custom-element-registry/scoped-custom-element-registry.min.js';
import { SimpleGreeting} from './simple-greeting.js';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

export class ScopedDemo extends ScopedRegistryHost(LitElement) {
  static elementDefinitions = {
    'simple-greeting': SimpleGreeting,
  };

  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--scoped-demo-background-color);
      }

      main {
        flex-grow: 1;
      }

      .logo {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'My app';
  }

  firstUpdated() {
    super.firstUpdated();
    const el = this.shadowRoot.querySelector('simple-greeting');
    console.log(el?.shadowRoot?.customElements);
  }

  render() {
    return html`
      <main>
        <simple-greeting></simple-greeting>
        <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
        <h1>${this.title}</h1>
      
        <p>Edit <code>src/ScopedDemo.js</code> and save to reload.</p>
        <a class="app-link" href="https://open-wc.org/guides/developing-components/code-examples/" target="_blank"
          rel="noopener noreferrer">
          Code examples
        </a>
      </main>
      
      <p class="app-footer">
        🚽 Made with love by
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/open-wc">open-wc</a>.
      </p>
    `;
  }
}
