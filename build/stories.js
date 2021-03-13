/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./frontend/templates/leaders/leaders.js


const classes = {
    'root' : 'leaders',
    'title' : 'leaders__title',
    'subtitle' : 'leaders__subtitle',
    'usersBox' : 'leaders__users-box',
    'userBox' : 'leaders__user-box',
    'info' : 'leaders__user-box-info',
    'emoji' : 'leaders__user-box-info_emoji',
    'image' : 'leaders__user-box-info_image',
    'name' : 'leaders__user-box-info_name',
    'value' : 'leaders__user-box-info_value',
    'rectangle' : 'leaders__user-box-rectangle',
    'rectangleFirst' : 'leaders__user-box-rectangle_first',
    'place' : 'leaders__user-box-place'
};

function renderLeadersTemplate(data) {
    const title = data.title;
    const subtitle = data.subtitle;
    const users = data.users;
    const winnerEmoji = data.emoji;
    const lastPlaceEmoji = '👍';
    const isFirst = 0;
    const isLast = 4;
    let userBoxes = [];
    for(let i = 0; i < users.length; i++) {
        if(i === isFirst) {
            userBoxes.push(createUserBox(users[i], i, winnerEmoji));
        }
        else if(i === isLast) {
            userBoxes.push(createUserBox(users[i], i, lastPlaceEmoji));
        }
        else {
            userBoxes.push(createUserBox(users[i], i));
        }
    }
    
    const template = `
        <section class='${classes.root}'>
            <h1 class='${classes.title}'>${title} </h1>
            <h2 class='${classes.subtitle}'>${subtitle}</h2>
            <div class='${classes.usersBox}'>
                ${userBoxes[0]}
                ${userBoxes[1]}
                ${userBoxes[2]}
                ${userBoxes[3]}
                ${userBoxes[4]}
            </div>
        </section>
    `;

    return template;
}

function createUserBox(userData, userPlace, emoji = '') {
    const userName = userData.name;
    const userAvatar = userData.avatar;
    const userValue = userData.valueText;
    const imagePath = `./images/4x/${userAvatar}`;
    const userBox = `
        <div class='${classes.userBox}'>
            <div class='${classes.info}'>
                <div class='${classes.emoji}'>${emoji}</div>
                <img class='${classes.image}' src='${imagePath}' alt='user avatar'>
                <h3 class='${classes.name}'>${userName}</h3>
                <h4 class='${classes.value}'>${userValue}</h4>
            </div>
            <div class='${classes.rectangle} ${userPlace === 0 ? classes.rectangleFirst : ''}'>
                <h5 class='${classes.place}'>${userPlace + 1}</h5>
            </div>
        </div>
    `;

    return userBox;
}

;// CONCATENATED MODULE: ./frontend/templates/diagram/diagram.js


function renderDiagramTemplate(data, theme) {
    const title = data.title;
    const subtitle = data.subtitle;
    const totalText = data.totalText;
    const differenceText = data.differenceText;
    const categories = data.categories;
}

;// CONCATENATED MODULE: ./frontend/templates/chart/chart.js


const chart_classes = {
    'root' : 'chart',
    'title' : 'chart__title',
    'subtitle' : 'chart__subtitle',
    'statistics' : 'chart__statistics',
    'bar' : 'chart__statistics-bar',
    'score' : 'chart__statistics-score',
    'scoreBest' : 'chart__statistics-score_best',
    'rectangle' : 'chart__statistics-rectangle',
    'rectangleBest' : 'chart__statistics-rectangle_best',
    'sprintNumber' : 'chart__statistics-sprint-number',
    'users' : 'chart__users',
    'user' : 'chart__user',
    'userAvatar' : 'chart__user-avatar',
    'userInfo' : 'chart__user-info',
    'userName' : 'chart__user-name',
    'userScore' : 'chart__user-score'
}

function renderChartTemplate(data) {
    console.log(data);
    const title = data.title;
    const subtitle = data.subtitle;
    const users = data.users;
    const values = data.values;
    const maxValue = findMaxValue(values);
    let bars = [];
    let userBoxes = [];
    console.log(maxValue);
    for(let i = 0; i < values.length; i++) {
        bars.push(createBar(values[i], maxValue));
    }
    for(let i = 0; i < users.length; i++) {
        userBoxes.push(chart_createUserBox(users[i]));
    }
    const template = `
        <section class="${chart_classes.root}">
        <h1 class="${chart_classes.title}">${title}</h1>
        <h2 class="${chart_classes.subtitle}">${subtitle}</h2>
        <div class="${chart_classes.statistics}">
            ${bars[0]}
            ${bars[1]}
            ${bars[2]}
            ${bars[3]}

            ${bars[4]}
            ${bars[5]}
            ${bars[6]}
            ${bars[7]}
            ${bars[8]}
            ${bars[9]}
            ${bars[10]}
            ${bars[11]}
            ${bars[12]}

            ${bars[13]}
            ${bars[14]}
            ${bars[15]}

        </div>

        <div class="${chart_classes.users}">
            ${userBoxes[0]}
            ${userBoxes[1]}

            ${userBoxes[2]}
        </div>
    </section>
    `;
    console.log(window.document.body);
    return template;
}
function createBar(bar, maxValue) {
    const sprintNumber = bar.title;
    const score = bar.value;
    const active = bar.active;
    const barTemplate = `
        <div class="${chart_classes.bar}">
            <h3 class="${chart_classes.score} ${score === maxValue ? chart_classes.scoreBest : ''}">${score === 0 ? '' : score}</h3>
            <div class="${chart_classes.rectangle} ${active === true ? chart_classes.rectangleBest : ''}" style="height: ${score / maxValue * 70}%" ></div>
            <h4 class="${chart_classes.sprintNumber}">${sprintNumber}</h4>
        </div>
    `;
    // style="height: calc(${score === maxValue ? '100' : score / maxValue * 70}%)"
    return barTemplate;
}
function chart_createUserBox(userData) {
    const userName = userData.name;
    const userAvatar = userData.avatar;
    const userValue = userData.valueText;
    const imagePath = `./images/4x/${userAvatar}`;
    const userBox = `
        <div class="${chart_classes.user}">
            <img class="${chart_classes.userAvatar}" src='${imagePath}' alt='avatar'>
            <div class="${chart_classes.userInfo}">
                <h3 class="${chart_classes.userName}">${userName}</h3>
                <h4 class="${chart_classes.userScore}">${userValue}</h4>
            </div>
        </div>
    `;
    return userBox;
}
function findMaxValue(values) {
    for(let i = 0; i < values.length; i++) {
        if (values[i].active === true) {
            return values[i].value;
        }
    }
    return 0;
}
;// CONCATENATED MODULE: ./frontend/templates/vote/vote.js


 
const vote_classes = {
    'root' : 'vote',
    'title' : 'vote__title',
    'subtitle' : 'vote__subtitle',
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
    const title = data.title;
    const subtitle = data.subtitle;
    const selectedUserId = data.selectedUserId;
    const buttonDarkDisabled = './images/button-hover-dark';
    const buttonDark = './images/button-dark';
    const buttonLightDisabled = './images/button-hover-light';
    const buttonLight = './images/button-light';
    const users = data.users; // [id. name, avatar, valueText]
    const usersLimitHorizontal = users.length - 6;
    const usersLimitVertical = users.length - 8;
    const userBoxes = [];
    let buttons = {}
    let order = 6; // default order is 0
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
            <h1 class="${vote_classes.title}">${title}</h1>
            <h2 class="${vote_classes.subtitle}">${subtitle}</h2>

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