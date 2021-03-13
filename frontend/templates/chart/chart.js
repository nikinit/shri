import './chart.css';

const classes = {
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

export function renderChartTemplate(data) {
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
        userBoxes.push(createUserBox(users[i]));
    }
    const template = `
        <section class="${classes.root}">
        <h1 class="${classes.title}">${title}</h1>
        <h2 class="${classes.subtitle}">${subtitle}</h2>
        <div class="${classes.statistics}">
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

        <div class="${classes.users}">
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
        <div class="${classes.bar}">
            <h3 class="${classes.score} ${score === maxValue ? classes.scoreBest : ''}">${score === 0 ? '' : score}</h3>
            <div class="${classes.rectangle} ${active === true ? classes.rectangleBest : ''}" style="height: ${score / maxValue * 70}%" ></div>
            <h4 class="${classes.sprintNumber}">${sprintNumber}</h4>
        </div>
    `;
    // style="height: calc(${score === maxValue ? '100' : score / maxValue * 70}%)"
    return barTemplate;
}
function createUserBox(userData) {
    const userName = userData.name;
    const userAvatar = userData.avatar;
    const userValue = userData.valueText;
    const imagePath = `./images/4x/${userAvatar}`;
    const userBox = `
        <div class="${classes.user}">
            <img class="${classes.userAvatar}" src='${imagePath}' alt='avatar'>
            <div class="${classes.userInfo}">
                <h3 class="${classes.userName}">${userName}</h3>
                <h4 class="${classes.userScore}">${userValue}</h4>
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