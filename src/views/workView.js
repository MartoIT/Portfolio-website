import { html } from '../../node_modules/lit-html/lit-html.js'


const createTamplete = () => html`<section class="blob">
    <section class="work"><img class="w" src="../../images/w1.png" width="600" 
     height="500" alt="w1">
        <aside>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum turpis vitae fermentum congue. Integer justo diam, vestibulum ac consectetur tincidunt,
                 convallis a erat. In volutpat mollis nunc.</p>
        </aside>
    </section>

    <section class="work1"><img class="w" src="../../images/w2.jpeg" width="600" 
     height="500" alt="w2">
        <aside>
            <p>The Epcot center is a theme park at Walt Disney World Resort featuring exciting attractions,
                international
                pavilions, award-winning fireworks and seasonal special events.</p>
        </aside>
    </section>

    <section class="work"><img class="w" src="../../images/w3.jpeg" width="600" 
     height="500" alt="w3">
        <aside>
            <p>The Epcot center is a theme park at Walt Disney World Resort featuring exciting attractions,
                international
                pavilions, award-winning fireworks and seasonal special events.</p>
        </aside>
    </section>

    <section class="work1"><img class="w"src="../../images/w4.jpeg" width="600" 
     height="500" alt="w4">
        <aside>
            <p>The Epcot center is a theme park at Walt Disney World Resort featuring exciting attractions,
                international
                pavilions, award-winning fireworks and seasonal special events.</p>
        </aside>
    </section>


</section>`



export function workView(ctx) {

    ctx.render(createTamplete());
}