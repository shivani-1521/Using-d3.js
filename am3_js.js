
Plotly.d3.csv("https://raw.githubusercontent.com/shivani-1521/ML-kdd99/master/data5.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

  
var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'S1temp',
  x: unpack(rows, 'date'),
  y: unpack(rows, 's1temp'),
  line: {color: '#17BECF'}
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: 'S2temp',
  x: unpack(rows, 'date'),
  y: unpack(rows, 's2temp'),
  line: {color: '#7F7F7F'}
}



var trace3 = {
  type: "scatter",
  mode: "lines",
  name: 'S3temp',
  x: unpack(rows, 'date'),
  y: unpack(rows, 's3temp'),
  line: {color: '#7F7F7F'}
}

var trace4 = {
  type: "scatter",
  mode: "lines",
  name: 'S1hum',
  x: unpack(rows, 'date'),
  y: unpack(rows, 's1hum'),
  line: {color: '#17BECF'}
}

var trace5 = {
  type: "scatter",
  mode: "lines",
  name: 'S2hum',
  x: unpack(rows, 'date'),
  y: unpack(rows, 's2hum'),
  line: {color: '#7F7F7F'}
}



var trace6 = {
  type: "scatter",
  mode: "lines",
  name: 'S3hum',
  x: unpack(rows, 'date'),
  y: unpack(rows, 's3hum'),
  line: {color: '#7F7F7F'}
}

var trace7 = {
  type: "scatter",
  mode: "lines",
  name: 'S1co2',
  x: unpack(rows, 'date'),
  y: unpack(rows, 's1co2'),
  line: {color: '#17BECF'}
}

var trace8 = {
  type: "scatter",
  mode: "lines",
  name: 'S2co2',
  x: unpack(rows, 'date'),
  y: unpack(rows, 's2co2'),
  line: {color: '#7F7F7F'}
}



var trace9 = {
  type: "scatter",
  mode: "lines",
  name: 'S3co2',
  x: unpack(rows, 'date'),
  y: unpack(rows, 's3co2'),
  line: {color: '#7F7F7F'}
}

var data1 = [trace1,trace2,trace3];
var data2 = [trace4,trace5,trace6];
var data3 = [trace7,trace8,trace9];
    
var layout1 = {
  title: 'Temperature Data', 
  xaxis: {
    autorange: true, 
    range: ['2012-03-26', '2012-05-01'], 
    rangeselector: {buttons: [
        {
          count: 1, 
          label: '1m', 
          step: 'month', 
          stepmode: 'backward'
        }, 
        {
          count: 6, 
          label: '6m', 
          step: 'month', 
          stepmode: 'backward'
        }, 
        {step: 'all'}
      ]}, 
    rangeslider: {range: ['2012-03-26', '2012-05-01']}, 
    type: 'date'
  }, 
  yaxis: {
    autorange: true, 
    range: [60.8700008333, 610.870004167], 
    type: 'linear'
  }
};
var layout2 = {
  title: 'Humidity Data', 
  xaxis: {
    autorange: true, 
    range: ['2012-03-26', '2012-05-01'], 
    rangeselector: {buttons: [
        {
          count: 1, 
          label: '1m', 
          step: 'month', 
          stepmode: 'backward'
        }, 
        {
          count: 6, 
          label: '6m', 
          step: 'month', 
          stepmode: 'backward'
        }, 
        {step: 'all'}
      ]}, 
    rangeslider: {range: ['2012-03-26', '2012-05-01']}, 
    type: 'date'
  }, 
  yaxis: {
    autorange: true, 
    range: [60.8700008333, 610.870004167], 
    type: 'linear'
  }
};
var layout3 = {
  title: 'Carbon dioxide data', 
  xaxis: {
    autorange: true, 
    range: ['2012-03-26', '2012-05-01'], 
    rangeselector: {buttons: [
        {
          count: 1, 
          label: '1m', 
          step: 'month', 
          stepmode: 'backward'
        }, 
        {
          count: 6, 
          label: '6m', 
          step: 'month', 
          stepmode: 'backward'
        }, 
        {step: 'all'}
      ]}, 
    rangeslider: {range: ['2012-03-26', '2012-05-01']}, 
    type: 'date'
  }, 
  yaxis: {
    autorange: true, 
    range: [60.8700008333, 610.870004167], 
    type: 'linear'
  }
};

Plotly.newPlot('myDiv', data1, layout1);
Plotly.newPlot('myDiv2', data2, layout2);
Plotly.newPlot('myDiv3', data3, layout3);
})