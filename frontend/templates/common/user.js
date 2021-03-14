import './user.css';

export function renderUser(userData = {}, options = {}) {
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
