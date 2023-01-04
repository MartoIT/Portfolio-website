import { html } from '../../node_modules/lit-html/lit-html.js'

const createTamplete = () => html`<section class="services">
    <video playsinline autoplay muted loop poster="polina.jpg" id="bgvid">
        <source src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/blurry-trees.mov" autoplay loop
            playsinline muted>
    </video>
    <article class="video-article">
        <span class="video-span">
            <p class="video-p">Billboard</p>
            <p class="video-p">Banners</p>
            <p class="video-p">Outdoor advertising</p>
            <p class="video-p">Advertising gifts and souvenirs</p>
            <p class="video-p">Brochure advertising</p>
            <p class="video-p">Print advertising</p>
        </span>

    </article>
</section>`


export function serviceView(ctx) {
    
    ctx.render(createTamplete());
}
