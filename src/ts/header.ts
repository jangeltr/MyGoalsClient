class myHeader extends HTMLElement {
    constructor() {
        super();
    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
            <img src="/img/myObjectives.png" alt="Logo" class="w-24 border-gray-200 rounded-2xl shadow-2xl">
            <h1 class="text-xl ml-3 text-red-800">My Goals</h1>
        `;
        return template;
    }

    connectedCallback() {
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }
}

export default myHeader