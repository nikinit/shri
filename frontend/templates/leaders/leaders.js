import './leaders.css';

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

export function renderLeadersTemplate(data) {
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
