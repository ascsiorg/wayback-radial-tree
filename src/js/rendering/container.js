export function renderContainer () {
  const content = document.createElement('div');
  content.setAttribute('class', 'rt-content');
  const divBtn = document.createElement('div');
  divBtn.setAttribute('class', 'div-btn');

  const sequence = document.createElement('p');
  sequence.setAttribute('class', 'sequence');
  const chart = document.createElement('div');
  chart.setAttribute('id', 'chart');
  content.appendChild(divBtn);
  content.appendChild(sequence);
  content.appendChild(chart);
  content.style.display = 'block';
  return content;
}
