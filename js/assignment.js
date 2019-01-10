// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4charts.PieChart3D);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.legend = new am4charts.Legend();

chart.data = [
  {
    name: "Boiler efficiency",
    Design: 86.4,
	class: "rim"
  },
  {
    name: "Power Output",
    Design: 250
  },
  {
    name: "Plant Efficiency",
    Design: 38.16920943134535
  },
  {
    name: "Turbine Cycle Heat Rate",
    Design: 1946.7
  },
  {
    name: "Unit Gross Heat Rate",
    Design: 2253.13
  },
  {
    name: "Coal Firing Rate",
    Design: 171
  }
];

var series = chart.series.push(new am4charts.PieSeries3D());
series.dataFields.value = "Design";
series.dataFields.category = "name";
series.dataFields.category=""
