import React from 'react';
import { Col } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import "./../styles.css"

const data1 = {
  labels: ['>10', '>20', '>30', '>40', '>50', '>60'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const data2 = {
  labels: ['Male','Female'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const VerticalBar = (props) => (
  <>
  <Col>
    <h5 className="text-center mt-4 mb-4">Age Engagemet Rate</h5>
    <Bar className="dataBar"data={data1} options={options} style={{width:"500px",height:"250px"}}/>
  </Col>
  <Col>
    <h5 className="text-center mt-4 mb-4">Gender Engagemet Rate</h5>
    <Bar className="dataBar"data={data2} options={options} style={{width:"500px",height:"250px"}}/>
  </Col>
  </>
);

export { VerticalBar };