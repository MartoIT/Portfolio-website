import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { serviceView } from './views/serviceView.js';
import { homeView } from './views/homeView.js';
import { certificateView } from './views/certificatsView.js';
const main = document.querySelector('.root')
page(decoratorContext);

page('/', homeView);
page('/index.html', homeView);
page('/Work', () => console.log(`Work`));
page('/Services', serviceView);
page('/Software', () => console.log(`Software`));
page('/About me', homeView);
page('/certificates', certificateView );

page.start();

function myRender(resultTamplete){
    render(resultTamplete, main)
}

function decoratorContext(ctx, next){
    ctx.render = myRender;
    next()
}