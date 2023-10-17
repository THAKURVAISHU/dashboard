import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PieChartBox extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
    this.myChart = null;
  }

  componentDidMount() {
    this.createChart();
  }

  createChart() {
    const options = {
      animationEnabled: true,
      subtitles: [
        {
          text: "65%\nTotal New Customers",
          verticalAlign: "center",
          fontSize: 15,
          padding: 10,
          dockInsidePlotArea: true,
        },
      ],
      data: [
        {
          type: "doughnut",
          dataPoints: [
            { y: 25, color: "#562dba" },
            { y: 20, color: "#cccccc" },
            { y: 10, color: "crimson" },
          ],
        },
      ],
    };

    this.myChart = new CanvasJS.Chart(this.chartRef.current, options);
    this.myChart.render();
  }

  componentWillUnmount() {
    if (this.myChart) {
      this.myChart.destroy();
    }
  }

  render() {
    return (

      <div className="col">
        <div className='col_text'>
          <h3>Customers</h3>
          <p>Custom that buy products</p>
        </div>

        <div ref={this.chartRef} className='canvasjs-chart-canvas'></div>
      </div>

    );
  }
}

export default PieChartBox;
