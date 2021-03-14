import { renderHeader } from '../common/header';
import './vote.css';

const classes = {
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

export function renderVoteTemplate(data) {
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
        userBoxes.push(createUserBox(selectedUserId, users[i]));
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
        <section class="${classes.root}">
            ${renderHeader(data.title, data.subtitle)}
            <div class="${classes.people} ${classes.peopleHorizontal}">

                <div class="${classes.peopleColumn}">
                    ${userBoxes[0 + order]}
                </div>

                <div class="${classes.peopleColumn}">
                    ${userBoxes[1 + order]}
                    ${userBoxes[4 + order]}
                </div>
                
                <div class="${classes.peopleColumn}">
                    <button class="${classes.button}" ${order === 0 ? 'disabled' : ''} ">
                        <img class="${classes.buttonSrc} ${classes.buttonSrcUp}" src="${order === 0 ? buttons.buttonDisabled : buttons.buttonActive}.svg" alt="Фолбэк">
                    </button>
                    <button class="${classes.button}" ${order === usersLimitHorizontal ? 'disabled' : ''} ">
                        <img class="${classes.buttonSrc}" src="${order === usersLimitHorizontal ? buttons.buttonDisabled : buttons.buttonActive}.svg" alt="Фолбэк">
                    </button>
                </div>

                <div class="${classes.peopleColumn}">
                    ${userBoxes[2 + order]}
                    ${userBoxes[5 + order]}
                </div>

                <div class="${classes.peopleColumn}">
                    ${userBoxes[3 + order]}
                </div>
                
            
            </div>
            
            <div class="${classes.people} ${classes.peopleVertical}">
                <div class="${classes.peopleColumn}">
                    ${userBoxes[0 + order]}
                    ${userBoxes[3 + order]}
                    ${userBoxes[6 + order]}
                </div>
                <div class="${classes.peopleColumn}">
                    <button class="${classes.button}" ${order === 0 ? 'disabled' : ''}>
                        <img class="${classes.buttonSrc} ${classes.buttonSrcUp}" src="${order === 0 ? buttons.buttonDisabled : buttons.buttonActive}.svg" alt="Фолбэк">
                    </button>
                    ${userBoxes[1 + order]}
                    ${userBoxes[4 + order]}
                    <button class="${classes.button}" ${order === usersLimitVertical ? 'disabled' : ''}>
                        <img class="${classes.buttonSrc}" src="${order === usersLimitVertical ? buttons.buttonDisabled : buttons.buttonActive}.svg" alt="Фолбэк">
                    </button>
                </div>
                <div class="${classes.peopleColumn}">
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
function createUserBox(selectedUserId, userData) {
    const userAvatar = userData.avatar;
    const userName = userData.name;
    const userId = userData.id;
    const emoji = '👍';
    const imagePath = `./images/4x/${userAvatar}`;
    const userBox = `
        <div class="${classes.user} ${selectedUserId === userId ? classes.userSelected : ''}">
            <div class="${classes.userEmoji}">${selectedUserId === userId ? emoji : ''}</div>
            <img src="${imagePath}" class="${classes.userAvatar}">
            <h3 class="${classes.userName}">${userName}</h3>
        </div>
    `;
    return userBox;
}