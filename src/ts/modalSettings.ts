class myModalSttings extends HTMLElement {
    constructor() {
        super();
    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <div id="modalSettings" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
            <div class="relative w-full h-full max-w-2xl md:h-auto">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow text-justify">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-4 border-b rounded-t">
                        <h3 class="text-xl font-semibold text-red-800">
                            Settings
                        </h3>
                        <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="modalSettings">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-6">
                        <h5 class="mb-3 text-green-500">Default month</h5>
                        <fieldset class="flex flex-row flex-wrap">
                            <div class="flex items-center mb-4 mr-5">
                                <input id="radioJanuary" type="radio" name="month" value="January" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked>
                                <label for="radioJanuary" class="block ml-2 text-sm font-medium text-gray-900">
                                    January
                                </label>
                            </div>
                            <div class="flex items-center mb-4 mr-5">
                                <input id="radioFebruary" type="radio" name="month" value="February" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300">
                                <label for="radioFebruary" class="block ml-2 text-sm font-medium text-gray-900">
                                    February
                                </label>
                            </div>
                            <div class="flex items-center mb-4 mr-5">
                                <input id="radioMarch" type="radio" name="month" value="March" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300">
                                <label for="radioMarch" class="block ml-2 text-sm font-medium text-gray-900">
                                    March
                                </label>
                            </div>
                            <div class="flex items-center mb-4 mr-5">
                                <input id="radioApril" type="radio" name="month" value="April" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300">
                                <label for="radioApril" class="block ml-2 text-sm font-medium text-gray-900">
                                    April
                                </label>
                            </div>
                            <div class="flex items-center mb-4 mr-5">
                                <input id="radioMay" type="radio" name="month" value="May" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300">
                                <label for="radioMay" class="block ml-2 text-sm font-medium text-gray-900">
                                    May
                                </label>
                            </div>
                            <div class="flex items-center mb-4 mr-5">
                                <input id="radioJune" type="radio" name="month" value="June" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300">
                                <label for="radioJune" class="block ml-2 text-sm font-medium text-gray-900">
                                    June
                                </label>
                            </div>
                            <div class="flex items-center mb-4 mr-5">
                                <input id="radioJuly" type="radio" name="month" value="July" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300">
                                <label for="radioJuly" class="block ml-2 text-sm font-medium text-gray-900">
                                    July
                                </label>
                            </div>
                            <div class="flex items-center mb-4 mr-5">
                                <input id="radioAugust" type="radio" name="month" value="August" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300">
                                <label for="radioAugust" class="block ml-2 text-sm font-medium text-gray-900">
                                    August
                                </label>
                            </div>
                            <div class="flex items-center mb-4 mr-5">
                                <input id="radioSeptember" type="radio" name="month" value="September" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300">
                                <label for="radioSeptember" class="block ml-2 text-sm font-medium text-gray-900">
                                    September
                                </label>
                            </div>
                            <div class="flex items-center mb-4 mr-5">
                                <input id="radioOctober" type="radio" name="month" value="October" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300">
                                <label for="radioOctober" class="block ml-2 text-sm font-medium text-gray-900">
                                    October
                                </label>
                            </div>
                            <div class="flex items-center mb-4 mr-5">
                                <input id="radioNovember" type="radio" name="month" value="November" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300">
                                <label for="radioNovember" class="block ml-2 text-sm font-medium text-gray-900">
                                    November
                                </label>
                            </div>
                            <div class="flex items-center mb-4 mr-5">
                                <input id="radioDecember" type="radio" name="month" value="December" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300">
                                <label for="radioDecember" class="block ml-2 text-sm font-medium text-gray-900">
                                    December
                                </label>
                            </div>
                        </fieldset>
                        <h5 class="mt-4 mb-3 text-green-500">Default week</h5>
                        <fieldset class="flex flex-row flex-wrap">
                            <div class="flex items-center mb-4 mr-5">
                                <input id="radioWeek1" type="radio" name="week" value="Week1" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked>
                                <label for="radioWeek1" class="block ml-2 text-sm font-medium text-gray-900">
                                    Week 1
                                </label>
                            </div>
                            <div class="flex items-center mb-4 mr-5">
                                <input id="radioWeek2" type="radio" name="week" value="Week2" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300">
                                <label for="radioWeek2" class="block ml-2 text-sm font-medium text-gray-900">
                                    Week 2
                                </label>
                            </div>
                            <div class="flex items-center mb-4 mr-5">
                                <input id="radioWeek3" type="radio" name="week" value="Week3" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300">
                                <label for="radioWeek3" class="block ml-2 text-sm font-medium text-gray-900">
                                    WeeK 3
                                </label>
                            </div>
                            <div class="flex items-center mb-4 mr-5">
                                <input id="radioWeek4" type="radio" name="week" value="Week4" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300">
                                <label for="radioWeek4" class="block ml-2 text-sm font-medium text-gray-900">
                                    Week 4
                                </label>
                            </div>
                        </fieldset>
                        <h5 class="mt-4 mb-3 text-green-500">Default day</h5>
                        <fieldset class="flex flex-row flex-wrap">
                            <div class="flex items-center mb-4 mr-5">
                                <input id="radioMonday" type="radio" name="day" value="Monday" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300" checked>
                                <label for="radioMonday" class="block ml-2 text-sm font-medium text-gray-900">
                                    Monday
                                </label>
                            </div>
                            <div class="flex items-center mb-4 mr-5">
                                <input id="radioTuesday" type="radio" name="day" value="Tuesday" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300">
                                <label for="radioTuesday" class="block ml-2 text-sm font-medium text-gray-900">
                                    Tuesday
                                </label>
                            </div>
                            <div class="flex items-center mb-4 mr-5">
                                <input id="radioWednesday" type="radio" name="day" value="Wednesday" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300">
                                <label for="radioWednesday" class="block ml-2 text-sm font-medium text-gray-900">
                                    Wednesday
                                </label>
                            </div>
                            <div class="flex items-center mb-4 mr-5">
                                <input id="radioWednesday" type="radio" name="day" value="Wednesday" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300">
                                <label for="radioAWednesday" class="block ml-2 text-sm font-medium text-gray-900">
                                    Wednesday
                                </label>
                            </div>
                            <div class="flex items-center mb-4 mr-5">
                                <input id="radioWednesday" type="radio" name="day" value="Wednesday" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300">
                                <label for="radioWednesday" class="block ml-2 text-sm font-medium text-gray-900">
                                    Wednesday
                                </label>
                            </div>
                            <div class="flex items-center mb-4 mr-5">
                                <input id="radioSaturday" type="radio" name="day" value="Saturday" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300">
                                <label for="radioSaturday" class="block ml-2 text-sm font-medium text-gray-900">
                                    Saturday
                                </label>
                            </div>
                            <div class="flex items-center mb-4 mr-5">
                                <input id="radioSunday" type="radio" name="day" value="Sunday" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300">
                                <label for="radioSunday" class="block ml-2 text-sm font-medium text-gray-900">
                                    Sunday
                                </label>
                            </div>
                        </fieldset>
                    </div>
                    <!-- Modal footer -->
                    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                        <button data-modal-hide="modalSettings" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Accept</button>
                        <button data-modal-hide="modalSettings" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Decline</button>
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

export default myModalSttings