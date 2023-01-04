import { html } from '../../node_modules/lit-html/lit-html.js'

const createTamplete = (conectForm) => html`<section id="home">
    < <section class="introduction">
        <section class="image">
            <img class="resize" src="/images/2.jpg" alt="kotee">
        </section>
        <section>
            <h3 class="author"> Eleonora Dasheva</h3>
            <h1 class="profession">GRAPHIC DESIGNER</h1>
            <p>Здравейте, казвам се Елеонора Дашева.</p>
            <p>Обичам предизвикателствата и животните.</p>
            <p> Към настоящият момент съм студент по графичен дизайн в Software University.</p>
            <p> Мога да ви помогна за графичното оформление на вашия продукт, фирма и сайт.</p>
            <button class="btn" @click=${conectForm}> <i>Да обсъдим вашата идея</i></button>
        </section>

</section>
</ul>
</section>`

const tampleteEmailForm = () => html`<div class="container">

    <h2>Google Material Design in CSS3<small>Ask me </small></h2>

    <form>

        <div class="group">
            <input type="text" required>
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Name</label>
        </div>

        <div class="group">
            <input type="text" required>
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Email</label>
        </div>
        <div class="group">
        <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
        </div>
        <div class="btn1">

        <input type="submit" value="Submit">

        </div>
        
    </form>

</div>`


export function homeView(ctx) {

    ctx.render(createTamplete(conectForm));

    async function conectForm() {
        ctx.render(tampleteEmailForm())
    }
}
