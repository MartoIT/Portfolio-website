import { html } from '../../node_modules/lit-html/lit-html.js'


const createTamplete = () => html`<section id="scroll-container">
    <section id="scroll-text">
       
        <img src="../../images/ps.png" width="50" height="50" alt="c1"><p class="currentP">Photoshop</p>
       
        <img src="../../images/ai.png" width="50" height="50" alt="c1"><p class="currentP"> Illustrator</p>
       
        <img src="../../images/lr.png" width="50" height="50" alt="c1"><p class="currentP">Lightroom</p>
       
        <img src="../../images/pr.png" width="50" height="50" alt="c1"><p class="currentP">Premiere Pro</p> 
    
        <section>
        </section>`



export function softwareView(ctx) {

    ctx.render(createTamplete());
}



