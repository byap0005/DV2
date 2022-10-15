var vg_1 = "UnemploymentRate.json";
vegaEmbed("#map", vg_1,{"actions":false}).then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "gender.json";
vegaEmbed("#bar_chart", vg_2, {"actions":false}).then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "linechart.json";
vegaEmbed("#line_chart", vg_3, {"actions":false}).then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "state.json";
vegaEmbed("#bar", vg_4, {"actions":false}).then(function (result) {
    // Access the Vega view instance
    //(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

