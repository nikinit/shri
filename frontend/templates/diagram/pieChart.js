import './pieChart.css';

export function renderChart(spec) {
    return `
    <div class="pieContainer">
        <div class="pieBackground"></div>
        <div id="pieSlice1" class="hold"><div class="pie"></div></div>
        <div id="pieSlice2" class="hold"><div class="pie"></div></div>
        <div id="pieSlice3" class="hold"><div class="pie"></div></div>
        <div id="pieSlice4" class="hold"><div class="pie"></div></div>
        <div id="pieSlice5" class="hold"><div class="pie"></div></div>
        <div id="pieSlice6" class="hold"><div class="pie"></div></div>
        <div class="innerCircle"><div class="content"><b>Data</b><br>from 16<sup>th</sup> April, 2014</div></div>
    </div>
    `
}
