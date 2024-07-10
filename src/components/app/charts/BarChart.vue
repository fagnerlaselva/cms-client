<template>
  <div class="card border-none p-2 py-3 mt-2 mb-4">
    <div class="col-12 col-sm-12 col-lg-12 p-sm-4 top-list">
      <div>
        <canvas height="240px" id="acquisitions"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto';

export default {
  name: 'LineChart',
  setup() {
    onMounted(() => {
      const data = [
        { day: 1, count: 10 },
        { day: 2, count: 20 },
        { day: 3, count: 15 },
        { day: 4, count: 25 },
        { day: 5, count: 22 },
        { day: 6, count: 30 },
        { day: 7, count: 28 },
        { day: 8, count: 17 },
        { day: 9, count: 24 },
        { day: 10, count: 21 },
        { day: 11, count: 103 },
        { day: 12, count: 27 },
        { day: 13, count: 19 },
        { day: 14, count: 29 },
        { day: 15, count: 50 },
        { day: 16, count: 100 },
        { day: 17, count: 101 },
        { day: 18, count: 90 },
        { day: 19, count: 103 },
        { day: 20, count: 103 },
        { day: 21, count: 50 },
        { day: 22, count: 22 },
        { day: 23, count: 30 },
        { day: 24, count: 28 },
        { day: 25, count: 17 },
        { day: 26, count: 24 },
        { day: 27, count: 21 },
        { day: 28, count: 13 },
        { day: 29, count: 27 },
        { day: 30, count: 19 },
        { day: 31, count: 29 }
      ];

      new Chart(
        document.getElementById('acquisitions'),
        {
          type: 'line',
          data: {
            labels: data.map(row => row.day),
            datasets: [
              {
                pointRadius: 0,
                label: '  Visualizações ',
                data: data.map(row => row.count),
                backgroundColor: 'rgba(241, 99, 52, 0.3)',
                borderColor: '#f16334',
                borderWidth: 3,
                fill: true,
                tension: 0.3, // This makes the lines curved. Set to 0 for straight lines.
                pointBackgroundColor: '#f16334',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#fff'
              }
            ]
          },
          options: {
            interaction: {
              intersect: false,
              mode: 'index',
            },
            responsive: true,
            scales: {
              x: {
                display: true, // Hide the x-axis
                ticks: {
                  display: true
                },
                border: {
                  dash: [5, 10],
                  color: 'rgba(211, 69, 52, 0.7)'
                },
                grid: {
                  drawTicks: true,
                  display: true, // Hide the x-axis grid lines
                  drawBorder: false,
                  borderDash: [5, 5],
                  color: 'rgba(211, 69, 52, 0.2)' // Set x-axis border color to white (if displayed)
                }
              },
              y: {
                display: false,
                ticks: {
                  display: false
                },
                grid: {
                  display: false
                },
                border: {
                  dash: [5, 10],
                  color: 'rgba(211, 69, 52, 0.2)' // Set y-axis border color to white (if displayed)
                },
                suggestedMin: 0,
                suggestedMax: 100
              }
            },
            plugins: {
              legend: {
                display: true,
                position: 'top',
                align: 'end',
                borderRadius: 10,
                labels: {
                  pointStyle: 'circle',
                  usePointStyle: true,
                  borderRadius: 10,
                }
              },
              tooltip: {
                backgroundColor: '#101214',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderWidth: 20,
                borderRadius: 20,
                titleFont: { weight: 'bold' },
                padding: 20, // Added padding to tooltip
                callbacks: {
                  title: function (context) {
                    const date = new Date(2024, 7, context[0].dataIndex + 1);
                    return date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' });
                  },
                  label: function (context) {
                    let label = context.dataset.label || '';
                    if (label) {
                      label += ': ';
                    }
                    label += context.raw.toLocaleString();
                    return label + '  Leitores';
                  },
                  labelPointStyle: function () {
                    return {
                      borderRadius: 20,
                      pointStyle: 'circle',
                      rotation: 0,
                      backgroundColor: '#f16334',
                    };
                  }
                },
                displayColors: true
              }
            }
          }
        }
      );
    });
  }
};
</script>

<style scoped>
canvas {
  /* Adjusted height */
  width: 100%;
}
</style>
