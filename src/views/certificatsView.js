import { html } from '../../node_modules/lit-html/lit-html.js'


const createTamplete = () => html`<section class="scroll-container">

    <h3 class="scroll-page scroll-page-1"> <img src="../../images/c1.png" alt="c1"></h3>
    <h3 class="scroll-page scroll-page-2"> <img src="../../images/c2.png" alt="c2"></h3>
    <h3 class="scroll-page scroll-page-3"> <img src="../../images/c3.png" alt="c3"></h3>
    <h3 class="scroll-page scroll-page-4"> <img src="../../images/c4.png" alt="c4"></h3>

</section>`



export function certificateView(ctx) {

    ctx.render(createTamplete());
}

