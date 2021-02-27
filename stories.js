function renderTemplate(alias, data) {
    console.log([alias, data]);
    // TODO: use switch instead of if
    if (alias === 'leaders') {
        renderLeadersTemplate(data)
    }
    if (alias === 'vote') {
        renderVoteTemplate(data)
    }
    if (alias === 'chart') {
        renderChartTemplate(data)
    }
    if (alias === 'diagram') {
        renderDiagramTemplate(data)
    }
    if (alias === 'activity') {
        renderActivityTemplate(data)
    }
}

// function renderHeader(title, subtitle) {
//     // TODO: return 
//     <div class="header">
//         <h1>{title}</h1>
//         <h2>{subtitle}</h2>
//     </div>
// }

function renderLeadersTemplate(data) {
    //const
    const leadersTemplate = document.createElement('div');
    const leadersTitle = document.createElement('h1');
    const leadersSubtitle = document.createElement('h2');
    const usersRatingBox = document.createElement('div');
    const titleText = data.title; // TODO: move title and subtitle to common components
    const subtitleText = data.subtitle;
    const leadersUsers = data.users;
    const emoji = data.emoji; //
    const lastPlaceEmoji = '👍';
    console.log(emoji);
    
    leadersTitle.textContent = titleText;
    leadersSubtitle.textContent = subtitleText;

    leadersTemplate.classList.add('root');
    leadersTitle.classList.add('leaders__title');
    leadersSubtitle.classList.add('leaders__subtitle');
    usersRatingBox.classList.add('leaders__users-box');

    leadersTemplate.appendChild(leadersTitle);
    leadersTemplate.appendChild(leadersSubtitle);
    leadersTemplate.appendChild(usersRatingBox);

    for(let i = 0; i < leadersUsers.length; i++) {
        const userBox = document.createElement('div');
        const userBoxInfo = document.createElement('div');
        const userBoxImage = document.createElement('img');
        const userBoxName = document.createElement('h3');
        const userBoxValue = document.createElement('h4');
        const userBoxRectangle = document.createElement('div');
        const userBoxRectanglePlace = document.createElement('h3');
        const isFirst = i === 0;
        const isLast = i === 4;
        userBoxRectanglePlace.textContent = i+1;

        userBoxName.textContent = leadersUsers[i].name;
        userBoxValue.textContent = leadersUsers[i].valueText;
        userBoxImage.src = leadersUsers[i].avatar;
        

        if(isFirst) {
            userBoxRectangle.classList.add('leaders__user-box-rectangle_first');
            const userBoxEmoji = document.createElement('div');
            userBoxEmoji.classList.add('leaders__user-box-info_emoji');
            userBoxEmoji.textContent = emoji;
            userBoxInfo.appendChild(userBoxEmoji);
        }

        if(isLast) {
            const userBoxEmoji = document.createElement('div');
            userBoxEmoji.classList.add('leaders__user-box-info_emoji');
            userBoxEmoji.textContent = lastPlaceEmoji;
            userBoxInfo.appendChild(userBoxEmoji);
        }

        userBox.classList.add('leaders__user-box');
        userBoxRectanglePlace.classList.add('leaders__user-box-place');
        userBoxRectangle.classList.add('leaders__user-box-rectangle');
        userBoxInfo.classList.add('leaders__user-box-info');
        userBoxImage.classList.add('leaders__user-box-info_image');
        userBoxName.classList.add('leaders__user-box-info_name');
        userBoxValue.classList.add('leaders__user-box-info_value');

        userBoxInfo.appendChild(userBoxImage);
        userBoxInfo.appendChild(userBoxName);
        userBoxInfo.appendChild(userBoxValue);
        userBoxRectangle.appendChild(userBoxRectanglePlace);
        userBox.appendChild(userBoxInfo);
        userBox.appendChild(userBoxRectangle);
        usersRatingBox.appendChild(userBox);
    }

    return leadersTemplate;
}

function renderVoteTemplate(data) {
    
}

function renderChartTemplate(data) {
    
}

function renderDiagramTemplate(data) {
    
}

function renderActivityTemplate(data) {
    
}

module.exports = {
    renderTemplate: renderTemplate
}