const classes = {
    'root' : 'root',
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
const classesLight = {
    'root' : 'root_light',
    'title' : 'leaders__title_light',
    'subtitle' : 'leaders__subtitle_light',
    'usersBox' : 'leaders__users-box_light',
    'userBox' : 'leaders__user-box_light',
    'info' : 'leaders__user-box-info_light',
    'emoji' : 'leaders__user-box-info_emoji_light',
    'image' : 'leaders__user-box-info_image_light',
    'name' : 'leaders__user-box-info_name_light',
    'value' : 'leaders__user-box-info_value_light',
    'rectangle' : 'leaders__user-box-rectangle_light',
    'rectangleFirst' : 'leaders__user-box-rectangle_first_light',
    'place' : 'leaders__user-box-place_light'
};

function renderLeadersTemplate(data, theme) {
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
            userBoxes.push(createUserBox(users[i], i, theme, winnerEmoji));
        }
        else if(i === isLast) {
            userBoxes.push(createUserBox(users[i], i, theme, lastPlaceEmoji));
        }
        else {
            userBoxes.push(createUserBox(users[i], i, theme));
        }
    }
    
    const template = `
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>stories</title>
        <link rel="stylesheet" href="./normalize.css">
        <link rel="stylesheet" href="./indexLeaders.css">
    </head>
    <body>
        <div class='${classes.root} ${theme === 'light' ? classesLight.root : ''}'>
            <h1 class='${classes.title} ${theme === 'light' ? classesLight.title : ''}'>${title} </h1>
            <h2 class='${classes.subtitle} ${theme === 'light' ? classesLight.subtitle : ''}'>${subtitle}</h2>
            <div class='${classes.usersBox} ${theme === 'light' ? classesLight.usersBox : ''}'> <!-- rating box! -->
                ${userBoxes[0]}
                ${userBoxes[1]}
                ${userBoxes[2]}
                ${userBoxes[3]}
                ${userBoxes[4]}
            </div>
        </div>
    </body>
    </html>
    `;

    return template;
}

function createUserBox(userData, userPlace, theme, emoji = '') {
    const userName = userData.name;
    const userAvatar = userData.avatar;
    const userValue = userData.valueText;
    const imagePath = `./images/4x/${userAvatar}`;
    const userBox = `
        <div class='${classes.userBox} ${theme === 'light' ? classesLight.userBox : ''}'>

            <div class='${classes.info} ${theme === 'light' ? classesLight.info : ''}'>

                <div class='${classes.emoji} ${theme === 'light' ? classesLight.emoji : ''}'>${emoji}</div>
                <img class='${classes.image} ${theme === 'light' ? classesLight.image : ''}' src='${imagePath}' alt='user avatar'>
                <h3 class='${classes.name} ${theme === 'light' ? classesLight.name : ''}'>${userName}</h3>
                <h4 class='${classes.value} ${theme === 'light' ? classesLight.value : ''}'>${userValue}</h4>
            
                </div>
            
            <div class='${classes.rectangle} ${theme === 'light' ? classesLight.rectangle : ''} ${userPlace === 0 ? classes.rectangleFirst : ''} ${(userPlace === 0 && theme === 'light') ? classesLight.rectangleFirst : ''}'>
                <h5 class='${classes.place} ${theme === 'light' ? classesLight.place : ''}'>${userPlace + 1}</h5>
            </div>
        </div>
    `;

    return userBox;
}

module.exports = renderLeadersTemplate;
