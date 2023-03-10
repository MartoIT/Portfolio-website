import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { serviceView } from './views/serviceView.js';
import { homeView } from './views/homeView.js';
import { certificateView } from './views/certificatsView.js';
import { workView } from './views/workView.js';
import { softwareView } from './views/softwareView.js';
const main = document.querySelector('.root')
page(decoratorContext);

page('/', homeView);
page('/index.html', homeView);
page('/Work', workView);
page('/Services', serviceView);
page('/Software', softwareView);
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