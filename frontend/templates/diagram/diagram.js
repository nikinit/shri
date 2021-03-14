import { renderHeader } from '../common/header';
import './diagram.css';
import { renderChart } from './pieChart';

export function renderDiagramTemplate(data, theme) {
    const totalText = data.totalText;
    const differenceText = data.differenceText;
    const template = `
    <section class="diagram">
        ${renderHeader(data.title, data.subtitle)}
        <div class="diagram__info">
            ${renderChart()}
            <div class="diagram__info-detailed">
                ${renderTable(data.categories)}
            </div>
        </div>
    </section>
    `;
    return template;
}

function renderTable(categories) {
    return categories.reduce((prev, cur) => {
        prev += `
        <div class="diagram__info-detailed-string">
            <div class="diagram__string-color-and-size">
                <div class="diagram__string-color"></div>
                <h3 class="diagram__string-size">${cur.title}</h3>
            </div>
            <div class="diagram__total-and-difference">
                <h3 class="diagram__difference">+${parseInt(cur.differenceText, 10)}</h3>
                <h4 class="diagram__total">${parseInt(cur.valueText, 10)}</h4>
            </div>
        </div>
        `
        return prev;
    }, '')
}
