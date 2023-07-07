// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';

// // import { formatToLocalTime } from '../helper/formatToLocalTime';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend
// );

// const CustomLineChart = ({ data }) => {
//   const [, { daily, timezone }] = data;

//   // min max temp number
//   const minMaxTemp = items =>
//     items.reduce((acc, val) => {
//       acc[0] =
//         acc[0] === undefined || val.temp.day < acc[0] ? val.temp.day : acc[0];
//       acc[1] =
//         acc[1] === undefined || val.temp.day > acc[1] ? val.temp.day : acc[1];
//       return acc;
//     }, []);

//   const [minTemp, maxTemp] = minMaxTemp(daily);

//   const labels = daily.map(({ dt }) => formatToLocalTime(dt, timezone, 'ccc'));

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//         display: false,
//       },
//       title: {
//         display: false,
//         text: 'Chart.js Line Chart',
//       },
//       tooltip: {
//         callbacks: {
//           label: function (context) {
//             let label = context.dataset.label || '';

//             if (label) {
//               label += ': ';
//             }
//             if (context.parsed.y !== null) {
//               label += new Intl.NumberFormat(navigator.language, {
//                 style: 'unit',
//                 unit: 'celsius',
//               }).format(context.parsed.y);
//             }
//             return label;
//           },
//         },
//         bodyFont: {
//           size: 16,
//           family: 'poppins',
//         },
//         intersect: false,
//         backgroundColor: '#fff',
//         titleAlign: 'center',
//         titleColor: 'hsl(224deg 99% 60%)',
//         bodyColor: 'hsl(224deg 99% 60%)',
//         padding: 6,
//         position: 'nearest',
//         displayColors: false,
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           borderDash: [5],
//           color: '#348632',
//         },
//         ticks: {
//           color: 'hsl(0deg 0% 64%)',
//           font: {
//             size: 14,
//             family: 'poppins',
//           },
//         },
//       },
//       y: {
//         grid: {
//           borderDash: [5],
//           color: '#e1e1e1',
//         },
//         max: maxTemp >= 0 ? Math.ceil(maxTemp) + 5 : Math.floor(maxTemp) - -5,
//         min: minTemp >= 0 ? 0 : Math.floor(minTemp) + -5,
//         ticks: {
//           color: 'rgb(49 79 132)',
//           font: {
//             family: 'poppins',
//             size: 14,
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div className="weather__main__dashboard__graph">
//       <h1 className="title">Average Daily Temperature</h1>
//       <Line
//         options={options}
//         data={{
//           labels,
//           datasets: [
//             {
//               tension: 0.5,
//               fill: true,
//               // label: 'Temp',
//               data: daily.map(({ temp: { day } }) => day),
//               borderColor: 'rgb(49 79 132)',
//               backgroundColor: 'rgb(207 213 220 / 40%)',
//               borderWidth: 5,
//               borderJoinStyle: 'miter',
//               borderCapStyle: 'butt',
//               pointBorderColor: 'hsl(224deg 99% 60%)',
//               pointBorderWidth: 8,
//             },
//           ],
//         }}
//       />
//     </div>
//   );
// };

// export default CustomLineChart;
