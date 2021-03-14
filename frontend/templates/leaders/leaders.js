import { pyramidSort } from '../../helpers/pyramidSort';
import { renderHeader } from '../common/header';
import { renderUser } from '../common/user';
import './leaders.css';

export function renderLeadersTemplate(data) {
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
