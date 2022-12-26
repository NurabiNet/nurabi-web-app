import Card from 'react-bootstrap/Card';
import classes from './PersonalityAnalysisCard.module.css'
import './PersonalityAnalysisCard.css'
import Chart from 'react-apexcharts'
import StatusButton from '../status-button/StatusButton';

var options = {
  series: [76],
  chart: {
  type: 'radialBar',
  offsetY: -20,
  sparkline: {
    enabled: true
  }
},
colors: ["#39b970"],
plotOptions: {
  radialBar: {
    startAngle: -90,
    endAngle: 90,
    track: {
      background: "#eeeeee",
      margin: 5, // margin is in pixels
    },
    dataLabels: {
      name: {
        show: false
      },
      value: {
        offsetY: -2,
        fontSize: '22px'
      }
    }
  }
},
grid: {
  padding: {
    top: -10
  }
},
fill: {
  type: "gradient",
  gradient: {
    shade: "dark",
    type: "vertical",
    gradientToColors: ["#87D4F9"],
    stops: [0, 100]
  }
},
labels: ['Average Results'],
}

function PersonalityAnalysisCard(props) { 
  return (
    <Card className="text-center main-card" >
      
      <Card.Body className='mb-4 mt-3'>
        <Chart options={options} series={options.series} type="radialBar"  />
        <p className='mb-4'>Creatiivty Test</p>
        <StatusButton status="pass" background="rgba(57, 185, 112, .1)" color="#39b970" />

        
      </Card.Body>
    </Card>
  );
}

export default PersonalityAnalysisCard;
