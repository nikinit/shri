import './index.css';
import './normalize.css';
import { renderLeadersTemplate } from './templates/leaders/leaders';
import { renderDiagramTemplate } from './templates/diagram/diagram';

function renderTemplate(alias, data) {
    switch(alias) {
        case 'leaders':
            return renderLeadersTemplate(data);
        case 'vote':
            return renderVoteTemplate(data);
        case 'chart':
            return renderChartTemplate(data);
        case 'diagram':
            return renderDiagramTemplate(data);
        case 'activity':
            return renderActivityTemplate(data);
    }
}

window.renderTemplate = renderTemplate;
