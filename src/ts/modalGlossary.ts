class myModalGlossary extends HTMLElement {
    constructor() {
        super();
    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <div id="modalGlossary" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
            <div class="relative w-full h-full max-w-2xl md:h-auto">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow text-justify">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-4 border-b rounded-t">
                        <h3 class="text-xl font-semibold text-red-800">
                            Glossary
                            <a href="https://www.youtube.com/watch?v=W85oSFPBdUI&list=PLDxgron7YY_wfk4WDd8a_YB8RxEuapRy2&index=16&t=67s" target="_blank" class="text-sm text-blue-600 ml-5">
                                (Importance of goals setting video)
                            </a>
                        </h3>
                        <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="modalGlossary">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-6">
                        <h5 class="mb-3 text-green-500">Purpose (Between 5 and 10 years)</h5>
                        <p class="ml-5 text-gray-600 text-sm">
                            The definition of the purpose is the starting point of any achievement.
                        </p>
                        <p class="ml-5 text-gray-600 text-sm">
                            Life begins to be great when one sets a purpose, a mission.
                            This purpose must be measurable, something you can do, have, or be.
                        </p>
                        <p class="ml-5 text-gray-500 text-sm">The purpose is a description that answers the following questions:</p>
                        <p class="ml-5 text-gray-500 text-sm">What do I want to achieve?</p>
                        <p class="ml-5 text-gray-500 text-sm">What do I want to have?</p>
                        <p class="ml-5 text-gray-500 text-sm">How I want to be?</p>
                        <p class="ml-5 text-gray-500 text-sm">How I see myself in 5 years? (considering three aspects: my family, my person and my career or profession)</p>
                        
                        <h5 class="mt-5 mb-3 text-green-500">Principles</h5>
                        <p class="m-5 text-gray-500 text-sm">
                            The principles are the series of values ​​that govern our conduct during the process of achieving our purpose, such as respect, commitment, responsibility, professionalism.
                        </p>
                        <h5 class="mt-5 mb-3 text-green-500">Goals</h5>
                        <p  class="ml-5 text-gray-500 text-sm">
                            Setting goals is breaking down our purpose into 3 to 5 concrete and measurable objectives in the 3 main areas of our lives: personal, family and professional.
                        </p>
                        <p  class="ml-5 text-gray-500 text-sm">
                            These goals, in addition to being divided into areas (personal, family and professional), must be achieved in short (less than a year), medium (1-3 years) and long (more than 3 years) periods.
                        </p>
                        <p class="ml-5 text-gray-500 text-sm">
                            A long-term goal must be broken down into medium-term goals and these in turn into short-term goals.
                        </p>
                        <p class="ml-5 text-gray-500 text-sm">
                            A goal is the end to which an action is directed.
                        </p>
                        <h5 class="mt-5 mb-3 text-green-500">Action plan</h5>
                        <p class="ml-5 text-gray-500 text-sm">
                            An action plan is the set of concrete actions focused on achieving our short-term goals.
                        </p>
                        <p class="ml-5 text-gray-500 text-sm">
                            This action plan must have monthly, weekly and daily actions.
                        </p>
                        <p class="ml-5 text-gray-500 text-sm">
                            The actions must be defined in three aspects...
                        </p>
                        <p class="ml-5 text-gray-500 text-sm">
                            In what percentage they contribute to the goal or higher level activity, how I will measure it and a deadline.
                        </p>
                    </div>
                    <!-- Modal footer -->
                    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                        <button data-modal-hide="modalGlossary" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Accept</button>
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

export default myModalGlossary