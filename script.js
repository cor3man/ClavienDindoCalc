function drawChart() {
  document.querySelector("#chart-wrapper").innerHTML = '<canvas id="clavienChart"></canvas>';
  const ctx = document.getElementById("clavienChart").getContext("2d");
  const labels = ['Clavien 1', 'Clavien 2', 'Clavien 3', 'Clavien 4', 'Clavien 5'];

  const probs = calcProbabilities();

  const data = {
    labels: labels,
    datasets: [{
      label: 'P (Clavien Dindo)',
      data: probs,
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  const config = {
    type: 'line',
    data: data,
  };

  const chart = new Chart(ctx, {
    type: "line",
    data: data,
    config: config
    //options: options,
  });

  //chart.destroy();
}

function calcProbabilities() {
  const ucs = parseFloat(document.getElementById("ucs-input").value);
  const hgb = parseFloat(document.getElementById("hgb-input").value);
  const cci = parseFloat(document.getElementById("cci-input").value);

  const inputData = {
    ucs: ucs,
    hgb: hgb,
    cci: cci
  };

  const b0 = [-2.94, -1.35, -0.1, 1.09] 
  const clProbs = b0.map(b0 => clavienProbability(b0, inputData));

  const probs = [
    clProbs[0],
    clProbs[1] - clProbs[0],
    clProbs[2] - clProbs[1],
    clProbs[3] - clProbs[2],
    1 - clProbs[3]
  ];

  return probs;
} 

function clavienProbability(b1, inputData) {
  const logit = b1 - 0.18 * inputData.cci  - (-0.22 * inputData.hgb) - (-1.54 * inputData.ucs);
  return Math.exp(logit)/(1 + Math.exp(logit))
}
