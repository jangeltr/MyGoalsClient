class myModalGoals extends HTMLElement {
    constructor() {
        super();
    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <div id="modalGoals" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
            <div class="relative w-full h-full max-w-2xl md:h-auto">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow text-justify">
                    <!-- Modal header -->
                    <div class="flex items-start p-4 border-b rounded-t">
                        <h3 class="text-xl font-semibold text-red-800">
                            Goals (<small id="rangeTypeGoal">Personal long-term goal between 3 and 5 years</small>)
                        </h3>
                        <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="modalGoals">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-6">
                        <h5 class="mt-0 mb-3 text-green-500">Goals</h5>
                        <p  class="ml-5 text-gray-500 text-xs">
                            Setting goals is breaking down our purpose into 3 to 5 concrete and measurable objectives in the 3 main areas of our lives: personal, family and professional.
                        </p>
                        <p  class="ml-5 text-gray-500 text-xs">
                            These goals, in addition to being divided into areas (personal, family and professional), must be achieved in short (less than a year), medium (1-3 years) and long (more than 3 years) periods.
                        </p>
                        <p class="ml-5 text-gray-500 text-xs">
                            A long-term goal must be broken down into medium-term goals and these in turn into short-term goals.
                        </p>
                        <p class="ml-5 text-gray-500 text-xs">
                            A goal is the end to which an action is directed.
                        </p>
                        <hr class="mt-5">
                        <div id="divSetGoals">
                            <!-- Goal 1 -->
                            <label for="goal1" class="block mt-5 mb-2 text-sm font-medium text-green-500">Goal 1</label>
                            <textarea id="goal1" rows="2" class="block p-2.5 w-full text-sm text-gray-600 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="My first goal..."></textarea>
                            <div class="mt-3 mb-3 flex">
                                <div class="relative w-1/3 h-10 mr-3">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <input datepicker datepicker-autohide type="text" id="deadLine1"
                                    class="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Select dead line">
                                </div>
                                <div class="relative z-0 w-full mb-6 group">
                                    <input type="number" name="percentage1" id="percentage1" min="0" max="100"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="percentage1" class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Percentage that this goal contribute to your purpose
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Modal footer -->
                    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                        <button type="button" id="btnAddGoal"
                        class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Add goal (max 5)
                        </button>
                        <button data-modal-hide="modalGoals" type="button" id="btnSaveGoals"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Save
                        </button>
                        <button data-modal-hide="modalGoals" type="button" 
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">
                            Decline
                        </button>
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

export default myModalGoals