const theme = require('./app');
const renderLeadersTemplate = require('./templates/leaders/leaders');
const renderDiagramTemplate = require('./templates/diagram/diagram');
function renderTemplate(alias, data) {
    switch(alias) {
        case 'leaders':
            return renderLeadersTemplate(data, theme.theme);
        case 'vote':
            return renderVoteTemplate(data, theme.theme);
        case 'chart':
            return renderChartTemplate(data, theme.theme);
        case 'diagram':
            return renderDiagramTemplate(data, theme.theme);
        case 'activity':
            return renderActivityTemplate(data, theme.theme);
    }
}

module.exports = {
    renderTemplate: renderTemplate
}