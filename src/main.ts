import './style.css'
import 'flowbite'
import myHeader from './ts/header'
import myFooter from './ts/footer'
import myModalGlossary from './ts/modalGlossary'
import myModalSettings from './ts/modalSettings'
import myModalPurpose from './ts/modalPurpose'
import myModalPrinciples from './ts/modalPrinciples'
import myModalGoals from './ts/modalGoals'

customElements.define("my-header", myHeader)
customElements.define("my-footer", myFooter)
customElements.define("my-glossary", myModalGlossary)
customElements.define("my-settings", myModalSettings)
customElements.define("my-purpose", myModalPurpose)
customElements.define("my-principles",myModalPrinciples)
customElements.define("my-goals",myModalGoals)

// document.querySelector<HTMLDivElement>('main')!.innerHTML = ``


