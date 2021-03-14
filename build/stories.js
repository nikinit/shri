/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./frontend/helpers/pyramidSort.js
function pyramidSort(arr, compareFn) {
    const sorted = [...arr].sort(compareFn);
    const pyramidSorted = new Array(arr.length)

    for (let i = 0; i < sorted.length; i++) {
        const originalIndex = sorted.length / i > 2 ? i * 2 : (sorted.length - i) * 2 - 1;
        pyramidSorted[i] = sorted[originalIndex]
    }

    return pyramidSorted;
}

;// CONCATENATED MODULE: ./frontend/templates/common/header.js


function renderHeader(title, subtitle) {
    return `
        <header class="header">
            <h1 class="header__title">${title}</h1>
            <h2 class="header__subtitle">${subtitle}</h2>
        </header>
    `
}

;// CONCATENATED MODULE: ./frontend/templates/common/user.js


function renderUser(userData = {}, options = {}) {
    const { isHorizontal, size, emoji, isSelected, isHoverable, mixCls = '' } = options; // TODO: use this variables
    const { name = '', valueText } = userData; 
    const imagePath = `./images/4x/${userData.avatar}`;

    return `
        <div class='user ${mixCls}'>
            ${emoji ? `<div class='user__emoji'>${emoji}</div>` : ''}
            <img class='user__image' src='${imagePath}' alt='${userData.name}'>
            <h3 class='user__title'>${name}</h3>
            ${valueText ? `<h4 class='user__subtitle'>${valueText}</h4>` : ''}
        </div>
    `;
}

;// CONCATENATED MODULE: ./frontend/templates/leaders/leaders.js





function renderLeadersTemplate(data) {
    const { users, emoji } = data;
    const sortedUsers = pyramidSort(users, (u1, u2) => u1.valueText - u2.valueText)
    let participants = '';
    for(let i = 0; i < sortedUsers.length; i++) {
        participants += renderParticipant(sortedUsers, i, emoji)
    }
    
    return `
        <section class='leaders'>
            ${renderHeader(data.title, data.subtitle)}
            <div class='leaders__participants'>${participants}</div>
        </section>
    `;
}

function renderParticipant(users, userIndex, winnerEmoji) {
    const userData = users[userIndex];
    const isLeader = parseInt(userData.valueText, 10) === Math.max(...users.map(({valueText}) => parseInt(valueText, 10)));
    const distanceFromLeader = Math.abs(Math.floor(users.length / 2) - userIndex);
    const position = Math.floor(users.length / 2) - userIndex >= 0 ? 'left' : 'right';
    const styles = `
        ${position}: ${16 * distanceFromLeader}px;
        z-index: ${Math.floor(users.length / 2) - distanceFromLeader}
    `

    return `
        <div
            class='leaders__participant ${isLeader ? '' : `leaders__participant_${position}`}'
            style="${styles}"
        >
            ${renderUser(userData, { emoji: isLeader ? winnerEmoji : undefined, mixCls: 'leaders__participant-user' })}
            <div class='leaders__participant-rectangle ${isLeader ? 'leaders__participant-rectangle_first' : ''}'>
                <h5 class='leaders__participant-place'>${distanceFromLeader * 2 + (position === 'left' ? 1 : 0)}</h5>
            </div>
        </div>
    `;
}

;// CONCATENATED MODULE: ./frontend/templates/diagram/pieChart.js


function renderChart(spec) {
    return `
    <div class="pieContainer">
        <div class="pieBackground"></div>
        <div id="pieSlice1" class="hold"><div class="pie"></div></div>
        <div id="pieSlice2" class="hold"><div class="pie"></div></div>
        <div id="pieSlice3" class="hold"><div class="pie"></div></div>
        <div id="pieSlice4" class="hold"><div class="pie"></div></div>
        <div id="pieSlice5" class="hold"><div class="pie"></div></div>
        <div id="pieSlice6" class="hold"><div class="pie"></div></div>
        <div class="innerCircle"><div class="content"><b>Data</b><br>from 16<sup>th</sup> April, 2014</div></div>
    </div>
    `
}

;// CONCATENATED MODULE: ./frontend/templates/diagram/diagram.js




function renderDiagramTemplate(data, theme) {
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

;// CONCATENATED MODULE: ./frontend/templates/chart/chart.js



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

function renderChartTemplate(data) {
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

;// CONCATENATED MODULE: ./frontend/templates/vote/vote.js



const vote_classes = {
    'root' : 'vote',
    'people' : 'vote__people',
    'peopleHorizontal' : 'vote__people_horizontal',
    'peopleVertical' : 'vote__people_vertical',
    'peopleColumn' : 'vote__people-column',
    'buttons' : 'vote__people-buttons',
    'button' : 'vote__people-buttons-button',
    'buttonUp' : 'vote__people-buttons-button_up',
    'buttonDown' : 'vote__people-buttons-button_down',
    'buttonSrc' : 'vote__people-buttons-button-src',
    'buttonSrcUp' : 'vote__people-buttons-button-src_up',
    'user' : 'vote__people-user',
    'userSelected' : 'vote__people-user_selected',
    'userEmoji' : 'vote__people-user-emoji',
    'userAvatar' : 'vote__people-user-avatar',
    'userName' : 'vote__people-user-name'
}

function renderVoteTemplate(data) {
    const selectedUserId = data.selectedUserId;
    const buttonDarkDisabled = './images/button-hover-dark';
    const buttonDark = './images/button-dark';
    const buttonLightDisabled = './images/button-hover-light';
    const buttonLight = './images/button-light';
    const users = data.users; // [id. name, avatar, valueText]
    const usersLimitHorizontal = users.length - 6;
    const usersLimitVertical = users.length - 8;
    const userBoxes = [];
    // TODO: MAX: render user from user.js
    let buttons = {}
    let order = 0; // default order is 0
    for (let i = 0; i < users.length; i++) {
        userBoxes.push(vote_createUserBox(selectedUserId, users[i]));
    }
    if (document.body.classList.contains('theme_light')) {
        buttons.buttonActive = buttonLight;
        buttons.buttonDisabled = buttonLightDisabled;
    }
    else {
        buttons.buttonActive = buttonDark;
        buttons.buttonDisabled = buttonDarkDisabled;
    }
    const template = `
        <section class="${vote_classes.root}">
            ${renderHeader(data.title, data.subtitle)}
            <div class="${vote_classes.people} ${vote_classes.peopleHorizontal}">

                <div class="${vote_classes.peopleColumn}">
                    ${userBoxes[0 + order]}
                </div>

                <div class="${vote_classes.peopleColumn}">
                    ${userBoxes[1 + order]}
                    ${userBoxes[4 + order]}
                </div>
                
                <div class="${vote_classes.peopleColumn}">
                    <button class="${vote_classes.button}" ${order === 0 ? 'disabled' : ''} ">
                        <img class="${vote_classes.buttonSrc} ${vote_classes.buttonSrcUp}" src="${order === 0 ? buttons.buttonDisabled : buttons.buttonActive}.svg" alt="Фолбэк">
                    </button>
                    <button class="${vote_classes.button}" ${order === usersLimitHorizontal ? 'disabled' : ''} ">
                        <img class="${vote_classes.buttonSrc}" src="${order === usersLimitHorizontal ? buttons.buttonDisabled : buttons.buttonActive}.svg" alt="Фолбэк">
                    </button>
                </div>

                <div class="${vote_classes.peopleColumn}">
                    ${userBoxes[2 + order]}
                    ${userBoxes[5 + order]}
                </div>

                <div class="${vote_classes.peopleColumn}">
                    ${userBoxes[3 + order]}
                </div>
                
            
            </div>
            
            <div class="${vote_classes.people} ${vote_classes.peopleVertical}">
                <div class="${vote_classes.peopleColumn}">
                    ${userBoxes[0 + order]}
                    ${userBoxes[3 + order]}
                    ${userBoxes[6 + order]}
                </div>
                <div class="${vote_classes.peopleColumn}">
                    <button class="${vote_classes.button}" ${order === 0 ? 'disabled' : ''}>
                        <img class="${vote_classes.buttonSrc} ${vote_classes.buttonSrcUp}" src="${order === 0 ? buttons.buttonDisabled : buttons.buttonActive}.svg" alt="Фолбэк">
                    </button>
                    ${userBoxes[1 + order]}
                    ${userBoxes[4 + order]}
                    <button class="${vote_classes.button}" ${order === usersLimitVertical ? 'disabled' : ''}>
                        <img class="${vote_classes.buttonSrc}" src="${order === usersLimitVertical ? buttons.buttonDisabled : buttons.buttonActive}.svg" alt="Фолбэк">
                    </button>
                </div>
                <div class="${vote_classes.peopleColumn}">
                    ${userBoxes[2 + order]}
                    ${userBoxes[5 + order]}
                    ${userBoxes[7 + order]}
                </div>
            </div>
        </section>

        <script>
        
        </script>
    `;
    return template;
}

// TODO: можно ли вместо написания функций в script написать их в отдельном файле, а потом перенести по ссылке?
function vote_createUserBox(selectedUserId, userData) {
    const userAvatar = userData.avatar;
    const userName = userData.name;
    const userId = userData.id;
    const emoji = '👍';
    const imagePath = `./images/4x/${userAvatar}`;
    const userBox = `
        <div class="${vote_classes.user} ${selectedUserId === userId ? vote_classes.userSelected : ''}">
            <div class="${vote_classes.userEmoji}">${selectedUserId === userId ? emoji : ''}</div>
            <img src="${imagePath}" class="${vote_classes.userAvatar}">
            <h3 class="${vote_classes.userName}">${userName}</h3>
        </div>
    `;
    return userBox;
}
;// CONCATENATED MODULE: ./frontend/stories.js







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

/******/ })()
;