import './header.css';

export function renderHeader(title, subtitle) {
    return `
        <header class="header">
            <h1 class="header__title">${title}</h1>
            <h2 class="header__subtitle">${subtitle}</h2>
        </header>
    `
}
