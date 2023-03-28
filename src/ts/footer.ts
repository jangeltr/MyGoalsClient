class myFooter extends HTMLElement {
    constructor() {
        super();
    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
            <img src="/img/miFoto.jpg" alt="mi foto"  class="w-16 rounded-full">
            <ul class="ml-4 text-xs text-gray-400">
                <li>Author: Jose Angel Torres Rangel</li>
                <li>eMail: jangeltr@gmail.com</li>
                <li>TecNM-Tlajomulco de Zuñiga</li>
            </ul>
        `;
        return template;
    }

    connectedCallback() {
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }
}

export default myFooter