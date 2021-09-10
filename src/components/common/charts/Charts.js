import React, { Component } from "react";

import CanvasJSReact from "../../../vendor/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;
export class ComissionEarned extends Component {
	render() {
		const options = {
			exportEnabled: false,
			animationEnabled: true,
			height: 250,
			data: [
				{
					type: "pie",
					startAngle: 240,
					yValueFormatString: "##0.00\"%\"",
					indexLabel: "{label} {y}",
					dataPoints: [
						{ y: 25, label: "" },
						{ y: 7.31, label: "" },
						{ y: 7.06, label: "" },
						{ y: 4.91, label: "" },
					],
				},
			],
		};

		return <CanvasJSChart options={options} />;
	}
}

export class TotalProperties extends Component {
	render() {
		const options = {
			animationEnabled: true,
			height: 200,
			data: [
				{
					type: "doughnut",
					showInLegend: true,
					yValueFormatString: "#,###'%'",
					dataPoints: [
						{ name: "Unsatisfied", y: 60 },
						{ name: "Very Unsatisfied", y: 40 },
					],
				},
			],
		};

		return <CanvasJSChart options={options} />;
	}
}

export class Token extends Component {
	render() {
		const options = {
			animationEnabled: true,
			height: 150,
			axisY: {
				title: "Net Generation (in Billion kWh)",
				includeZero: false,
				suffix: " kWh",
			},
			data: [
				{
					type: "splineArea",
					xValueFormatString: "YYYY",
					yValueFormatString: "#,##0.## bn kW⋅h",
					showInLegend: true,
					legendText: "kWh = one kilowatt hour",
					dataPoints: [
						{ x: new Date(2008, 0), y: 70.735 },
						{ x: new Date(2009, 0), y: 74.102 },
						{ x: new Date(2010, 0), y: 72.569 },
						{ x: new Date(2011, 0), y: 72.743 },
						{ x: new Date(2012, 0), y: 72.381 },
						{ x: new Date(2013, 0), y: 71.406 },
						{ x: new Date(2014, 0), y: 73.163 },
						{ x: new Date(2015, 0), y: 74.27 },
						{ x: new Date(2016, 0), y: 72.525 },
						{ x: new Date(2017, 0), y: 73.121 },
					],
				},
			],
		};

		return <CanvasJSChart options={options} />;
	}
}

export class SalesTrending extends Component {
	constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
		this.addSymbols = this.addSymbols.bind(this);
	}
	addSymbols(e) {
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if (order > suffixes.length - 1) order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
	toggleDataSeries(e) {
		if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		} else {
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
	render() {
		const options = {
			animationEnabled: true,
			colorSet: "colorSet2",
			height: 400,
			axisX: {
				valueFormatString: "MMMM",
			},
			axisY: {
				prefix: "$",
				labelFormatter: this.addSymbols,
			},
			toolTip: {
				shared: true,
			},
			legend: {
				cursor: "pointer",
				itemclick: this.toggleDataSeries,
				verticalAlign: "bottom",
			},
			data: [
				{
					type: "column",
					name: "Actual Sales",
					showInLegend: true,
					xValueFormatString: "MMMM YYYY",
					yValueFormatString: "$#,##0",
					dataPoints: [
						{ x: new Date(2017, 0), y: 27500 },
						{ x: new Date(2017, 1), y: 29000 },
						{ x: new Date(2017, 2), y: 22000 },
						{ x: new Date(2017, 3), y: 26500 },
						{ x: new Date(2017, 4), y: 33000 },
						{ x: new Date(2017, 5), y: 37000 },
						{ x: new Date(2017, 6), y: 32000 },
						{ x: new Date(2017, 7), y: 27500 },
						{ x: new Date(2017, 8), y: 29500 },
						{ x: new Date(2017, 9), y: 43000 },
						{ x: new Date(2017, 10), y: 55000, indexLabel: "High Renewals" },
						{ x: new Date(2017, 11), y: 39500 },
					],
				},
				{
					type: "line",
					name: "Expected Sales",
					showInLegend: true,
					yValueFormatString: "$#,##0",
					dataPoints: [
						{ x: new Date(2017, 0), y: 38000 },
						{ x: new Date(2017, 1), y: 39000 },
						{ x: new Date(2017, 2), y: 35000 },
						{ x: new Date(2017, 3), y: 37000 },
						{ x: new Date(2017, 4), y: 42000 },
						{ x: new Date(2017, 5), y: 48000 },
						{ x: new Date(2017, 6), y: 41000 },
						{ x: new Date(2017, 7), y: 38000 },
						{ x: new Date(2017, 8), y: 42000 },
						{ x: new Date(2017, 9), y: 45000 },
						{ x: new Date(2017, 10), y: 48000 },
						{ x: new Date(2017, 11), y: 47000 },
					],
				},
				{
					type: "area",
					name: "Profit",
					markerBorderColor: "white",
					markerBorderThickness: 2,
					showInLegend: true,
					yValueFormatString: "$#,##0",
					dataPoints: [
						{ x: new Date(2017, 0), y: 11500 },
						{ x: new Date(2017, 1), y: 10500 },
						{ x: new Date(2017, 2), y: 9000 },
						{ x: new Date(2017, 3), y: 13500 },
						{ x: new Date(2017, 4), y: 13890 },
						{ x: new Date(2017, 5), y: 18500 },
						{ x: new Date(2017, 6), y: 16000 },
						{ x: new Date(2017, 7), y: 14500 },
						{ x: new Date(2017, 8), y: 15880 },
						{ x: new Date(2017, 9), y: 24000 },
						{ x: new Date(2017, 10), y: 31000 },
						{ x: new Date(2017, 11), y: 19000 },
					],
				},
			],
		};

		return (
			<CanvasJSChart options={options} onRef={(ref) => (this.chart = ref)} />
		);
	}
}
