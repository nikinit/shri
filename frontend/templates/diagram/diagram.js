import './diagram.css';

export function renderDiagramTemplate(data, theme) {
    const classes = {
        
    }
    const title = data.title;
    const subtitle = data.subtitle;
    const totalText = data.totalText;
    const differenceText = data.differenceText;
    const categories = data.categories;
    const template = `
    <section class="root">
        <h1 class="diagram__title">Размер коммитов</h1>
        <h2 class="diagram__subtitle">Спринт №213</h2>
        <div class="diagram__info"> <!--two columns or rows, depends on width-->
            <div class="diagram__info-visualization"> <!--diagram-->
                            
            </div>
            <div class="diagram__info-detailed">

                <div class="diagram__info-detailed-string">
                    <div class="diagram__info-detailed-string-color-and-size"> <!--color and string-->
                        <div class="diagram__info-detailed-string_color_xl"></div>
                        <h3 class="diagram__info-detailed-string_size">> 1001 строки</h3>
                    </div>
                    <div class="diagram__info-detailed-string-total-and-difference"> <!--total and difference-->
                        <h3 class="diagram__info-detailed-string_difference">+8</h3>
                        <h4 class="diagram__info-detailed-string_total">30</h4>
                    </div>
                </div>

                <div class="diagram__info-detailed-string">
                    <div class="diagram__info-detailed-string-color-and-size"> <!--color and string-->
                        <div class="diagram__info-detailed-string_color_l"></div>
                        <h3 class="diagram__info-detailed-string_size">501 — 1000 строк</h3>
                    </div>
                    <div class="diagram__info-detailed-string-total-and-difference"> <!--total and difference-->
                        <h3 class="diagram__info-detailed-string_difference">+6</h3>
                        <h4 class="diagram__info-detailed-string_total">32</h4>
                    </div>
                </div>

                <div class="diagram__info-detailed-string">
                    <div class="diagram__info-detailed-string-color-and-size"> <!--color and string-->
                        <div class="diagram__info-detailed-string_color_m"></div>
                        <h3 class="diagram__info-detailed-string_size">101 — 500 строк</h3>
                    </div>
                    <div class="diagram__info-detailed-string-total-and-difference"> <!--total and difference-->
                        <h3 class="diagram__info-detailed-string_difference">+16</h3>
                        <h4 class="diagram__info-detailed-string_total">58</h4>
                    </div>
                </div>

                <div class="diagram__info-detailed-string">
                    <div class="diagram__info-detailed-string-color-and-size"> <!--color and string-->
                        <div class="diagram__info-detailed-string_color_s"></div>
                        <h3 class="diagram__info-detailed-string_size">1 — 100 строк</h3>
                    </div>
                    <div class="diagram__info-detailed-string-total-and-difference"> <!--total and difference-->
                        <h3 class="diagram__info-detailed-string_difference">+12</h3>
                        <h4 class="diagram__info-detailed-string_total">62</h4>
                    </div>
                </div>

            </div>
        </div>
    </section>
    `;
    return template;
}
