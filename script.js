function drawChart() {
  const ucs = parseFloat(document.getElementById("ucs-input").value);
  const hgb = parseFloat(document.getElementById("hgb-input").value);
  const cci = parseFloat(document.getElementById("cci-input").value);

  const inputData = {
    ucs: ucs,
    hgb: hgb,
    cci: cci
  }

  const logits = [clavien(-2.94, inputData), clavien(-1.35, inputData), clavien(-0.1, inputData), clavien(1.09, inputData)]
  const probs = [
    logits[0],
    logits[1] - logits[0],
    logits[2] - logits[1],
    logits[3] - logits[2],
    1 - logits[3]
  ];

  const ctx = document.getElementById("myChart").getContext("2d");

  const labels = ['Clavien 1', 'Clavien 2', 'Clavien 3', 'Clavien 4', 'Clavien 5'];
  const data = {
    labels: labels,
    datasets: [{
      label: 'P (Clavien Dindo)',
      data: probs,//[65, 59, 80, 81, 56],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  const config = {
    type: 'line',
    data: data,
  };

  const myChart = new Chart(ctx, {
    type: "line",
    data: data,
    config: config
    //options: options,
  });
}

function clavien(b1, inputData) {
  const logit = b1 - 0.18*inputData.cci  - (-0.22 * inputData.hgb) - (-1.54 * inputData.ucs);
  return Math.exp(logit)/(1 + Math.exp(logit))
}
