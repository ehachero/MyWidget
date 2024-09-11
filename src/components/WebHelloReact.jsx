import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloReact from './HelloReact';

// Definir el Web Component
class WebHelloReact extends HTMLElement {
  connectedCallback() {
    const root = this.attachShadow({ mode: 'open' });
    const mountPoint = document.createElement('div');
    root.appendChild(mountPoint);

    // Renderiza el componente de React dentro del Web Component
    ReactDOM.createRoot(mountPoint).render(<HelloReact />);
  }
}

// Registrar el Custom Element
customElements.define('my-web-component', WebHelloReact);

export default WebHelloReact
