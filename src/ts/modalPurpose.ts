class myModalPurpose extends HTMLElement {
    constructor() {
        super();
    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <div id="modalPurpose" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
            <div class="relative w-full h-full max-w-2xl md:h-auto">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow text-justify">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-4 border-b rounded-t">
                        <h3 class="text-xl font-semibold text-red-800">
                            Purpose
                        </h3>
                        <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="modalPurpose">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-6">
                        <h5 class="mb-3 text-green-500">Purpose (Between 5 and 10 years)</h5>
                        <p class="ml-5 text-gray-600 text-sm">
                            Life begins to be great when one sets a purpose, a mission.
                            This purpose must be measurable, something you can do, have, or be.
                        </p>
                        <p class="ml-5 text-gray-500 text-sm">The purpose is a description that answers the following questions:</p>
                        <p class="ml-5 text-gray-500 text-sm">What do I want to achieve?</p>
                        <p class="ml-5 text-gray-500 text-sm">What do I want to have?</p>
                        <p class="ml-5 text-gray-500 text-sm">How I want to be?</p>
                        <p class="ml-5 text-gray-500 text-sm">How I see myself in 5 years? (considering three aspects: my family, my person and my career or profession)</p>
                        <label for="myPurpose" class="block mb-2 text-sm font-medium text-green-500 mt-5">My purpose</label>
                        <textarea id="myPurpose" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="My Purpose..."></textarea>
                    </div>
                    <!-- Modal footer -->
                    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                        <button data-modal-hide="modalPurpose" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Save</button>
                        <button data-modal-hide="modalPurpose" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Decline</button>
                    </div>
                </div>
            </div>
        </div>
        `;
        return template;
    }

    connectedCallback() {
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }
}

export default myModalPurpose