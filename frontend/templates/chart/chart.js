import { renderHeader } from '../common/header';
import './chart.css';

const classes = {
    'root' : 'chart',
    'statistics' : 'chart__statistics',
    'bar' : 'chart__statistics-bar',
    'barBest': 'chart__statistics-bar_best',
    'score' : 'chart__statistics-score',
    'scoreBest' : 'chart__statistics-score_best',
    'rectangle' : 'chart__statistics-rectangle',
    'rectangleActive' : 'chart__statistics-rectangle_active',
    'sprintNumber' : 'chart__statistics-sprint-number',
    'users' : 'chart__users',
    'user' : 'chart__user',
    'userAvatar' : 'chart__user-avatar',
    'userInfo' : 'chart__user-info',
    'userName' : 'chart__user-name',
    'userScore' : 'chart__user-score'
}

export function renderChartTemplate(data) {
    const title = data.title;
    const subtitle = data.subtitle;
    const users = data.users;
    const values = data.values;
    const maxValue = Math.max(...values.map(({value}) => value));

    let barsMarkup = '';
    let userBoxesMarkup = '';

    for(let i = 0; i < values.length; i++) {
        barsMarkup += createBar(values[i], maxValue);
    }
    for(let i = 0; i < users.length; i++) {
        userBoxesMarkup += createUserBox(users[i]);
    }

    return `
        <section class="${classes.root}">
            ${renderHeader(title, subtitle)}
            <div class="${classes.statistics}">${barsMarkup}</div>
            <div class="${classes.users}">${userBoxesMarkup}</div>
        </section>
    `;
}

function createBar(bar, maxValue) {
    const isBestBar = bar.value === maxValue;
    
    return `
        <div class="${classes.bar} ${isBestBar ? classes.barBest : ''}">
            <h3 class="${classes.score} ${isBestBar ? classes.scoreBest : ''}">${bar.value === 0 ? '' : bar.value}</h3>
            <div
                class="${classes.rectangle} ${bar.active === true ? classes.rectangleActive : ''}"
                style="height: ${bar.value / maxValue * 70}%">
            </div>
            <h4 class="${classes.sprintNumber}">${bar.title}</h4>
        </div>
    `;
}

function createUserBox(userData) {
    const imagePath = `./images/4x/${userData.avatar}`;
    
    return `
        <div class="${classes.user}">
            <img class="${classes.userAvatar}" src='${imagePath}' alt='avatar'>
            <div class="${classes.userInfo}">
                <h3 class="${classes.userName}">${userData.name}</h3>
                <h4 class="${classes.userScore}">${userData.valueText}</h4>
            </div>
        </div>
    `;
}
