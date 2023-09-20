/*
Authors: Ayaan Raza, Tuhin Mythil, Vihaan Sharma
Project: Driver EcoScore for Uber Hackathon
*/

var datas = `
51.8
39.86
81.68
68.91
35.11
96.57
83.89
66.74
80.9
108.93
119.79
102.14
87.78
41.9
89.87
105.25
98.77
86.21
126.9
70.17
139.98
127.22
58.21
67.62
64.83
107.04
67.66
109.33
113.83
99.4
42.68
116.55
37.83
124.09
95.02
33.79
115.08
113.15
108.6
85.27
115.15
84.37
102.43
129.9
88.97
81.41
94.31
131.48
149.62
72.3
93.16
89.87
69.76
85.61
99.84
83.73
103.45
80.21
114.65
133.12
102.48
80.89
70.21
65.52
95.06
109.46
101.86
101.72
75.55
78.51
78.17
113.1
66.96
96.58
102.13
89.53
88.38
65.95
88.8
77.09
56.83
89.71
105.62
74.87
63.59
139.82
109.44
77.47
70.06
78.31
75.19
33.95
71.86
53.02
94.37
70.13
71.9
95.94
139.24
90.44
109.18
117
110.67
71.41
83.92
91.37
31.57
104.92
86.92
77.63
103.99
113.38
63.32
97.63
95.48
108.79
95.23
54.03
95.04
31.22
106.75
91.48
97.59
119.65
75.89
115.61
90.77
109.49
99.73
110.26
124.68
46.13
92.59
52.48
69.19
117.3
84.93
88.5
135.33
103.01
80.17
104.35
83.81
104.87
21.64
74.85
52.4
75.11
41.15
95.55
93.36
51.42
106.6
65.52
67.82
87.41
119.87
91.4
78.49
42.66
85.19
100.45
79.92
107.99
105.25
90.93
130.07
63.7
65.32
115.86
96.95
24.19
100.4
88.34
78.44
93.62
86.44
65.95
93.13
92.21
74.71
106.96
93
81.45
101.44
82.68
113.17
116.17
88.66
82.59
95.53
109.54
74.58
78.8
95.57
134.41
95.11
99.21
74.73
107.32
115.74
64.56
60.78
108.23
78.65
56.26
74.97
84.56
78.39
78.62
78.52
90.15
95.92
72.77
91.22
112.07
137.08
62.64
137.23
105.04
40.81
87.66
92.75
79.89
89.06
54.21
127.57
43.78
127.76
36.92
71.26
84.11
106.44
75.44
120.63
89.52
94.97
76.37
119.91
83.98
106.38
81.17
85.52
75.09
127.28
109.46
75.15
83.15
61.33
108.84
89.75
51.18
89.51
57.42
79.84
87.01
99.36
106.13
108.17
108.72
67.68
84.97
97.83
57.22
99.01
84.13
125.43
57.61
64.48
76.73
136.55
70.03
89.25
103.89
84.61
77.77
98.32
102.64
112.22
98.29
55.78
87.98
107.41
107.71
85.51
80.24
99.81
115.84
79.38
66.45
71.54
93.02
93.8
140.83
111.38
71.15
95.25
63.35
115.88
62.51
79.67
122.28
82.82
134.08
85.56
81.06
80.18
72.06
45.73
82.54
86.11
84.23
84.33
65.41
106.69
93.21
120.63
67.75
96.53
90.26
83.42
108.75
69.49
143.18
64.42
121.82
71.13
97.95
68.14
116
144.67
81.47
127.83
87.89
30.01
88.18
95.26
110.76
101.3
47.58
87.56
84.67
73.4
142.91
121.75
125.79
63.47
132.58
104.09
68.96
109.14
89.93
78.48
116.3
44.13
124.56
100.14
92.89
121.99
93.06
108.72
104.91
84.8
101.62
131.08
80.24
113.64
109.06
134.82
67.46
130.68
52.12
66.91
103.77
71.18
88.08
63.42
57.03
125.37
104.73
93.47
115.94
76.77
99.99
90.35
100.76
72.16
63.57
79.71
96.94
64.64
109.98
64.91
121.59
88.09
90.29
133.5
169.82
116.07
122.94
180
116.33
43.79
95.58
78.32
102.1
81.67
114.72
72.92
65.22
73.6
115.43
35.85
58.41
78.13
111.23
58.91
87.28
55.42
56
149.75
45.25
70.77
115.78
80.57
96.24
89.21
90.65
85.72
124.75
107.38
93.36
131.1
43.63
125.13
111.94
86.76
81.37
99.02
124.36
83.67
79.07
93.49
73.18
103.22
76
78.8
66.02
53.6
79.59
108.85
66.42
117.4
47.73
66.63
89.54
47.8
114.96
92.32
135.43
67.95
113.54
113.9
110.97
77.34
89.95
115.41
90.33
90.04
82.81
85.59
106.92
84.8
41.08
79.77
64.88
138.65
87.7
57.34
86.18
108.7
115.59
163.83
73.76
61
140.1
63.26
87.22
97.76
93.95
101.7
95.83
73.81
92.39
91.05
110.3
103.21
70.66
126.68
75.11
82.12
67.98
92.4
84.18
44.17
70.92
110.9
105.74
75.75
71.92
84.52
37.3
64.49
76.86
89.76
118.68
60.11
79.41
62.03
102.11
26.52
58.94
83.99
48.69
133.37
96.01
112.18
110.19
78.42
74.61
68.38
98.66
61.34
90.47
87.15
116.89
126.59
74.26
101.06
67.2
115.91
79.72
67.51
107.96
104.8
77.25
93.58
71.22
113.6
62.19
102.56
90.31
101.08
85.69
53.04
93.48
59.67
60.02
60.85
110.38
119.68
154.82
70.99
52.67
90.79
35.92
115.47
97.75
106.22
86.24
65.74
122.6
89.96
71.41
118.22
102.71
76.16
84.95
69.09
107.82
64.72
92.78
95.08
46.66
112.27
77.01
113.28
42.02
61.48
45.24
94.26
74.26
79.19
120.87
123.4
73.82
100.17
58.95
120.91
97.52
125.57
125.92
65.12
63.38
45.44
93.94
81.66
62.7
125.49
75.73
85.6
108.06
86.47
70.24
96.55
84.67
71.97
11.33
79.99
103.33
80.3
111.15
78.92
63.06
79.63
137.26
96
103.91
103.57
59.9
103.15
89.03
82.54
119.41
45.77
64.04
130.79
69.05
70.17
110.64
80.23
74.41
121.26
97.33
61.37
81.55
136.24
84.99
112.21
88.75
74.86
138.37
76.19
76.96
61.1
50.91
114.46
39.81
124.87
106.32
131.19
82.42
111.33
123.06
66.19
70.64
99.81
108.3
8.42
97.94
131.86
102.04
28.12
48.57
86.52
97.01
109.94
88.65
77.94
140.35
50.87
89.11
80.46
90.23
72.6
85.2
76.69
58.78
111.53
103.57
114.56
68.92
139.93
57.12
83.56
115.96
126.51
99.59
117.1
67.88
99.02
104.34
115.79
49.89
85.33
68.3
114.02
62.08
90.8
133.62
48.16
100.02
91.25
86.69
90.93
47.01
100.51
78.9
91.15
72.13
98.66
107.26
100.25
75.55
100.48
96.51
123.03
96.1
110.77
162.69
108.7
114.24
98.85
101.59
83.78
96.6
113.78
87.64
104.97
97.75
126.17
87.67
56.48
100.09
92.12
48.63
71.08
71.14
54.23
112.31
94.97
66.59
75.75
92.61
106.46
60.55
42.88
113.19
99.1
75.87
88.87
87.25
120.02
118.85
74.65
77.9
74.37
80.69
100.47
85.46
66.73
109.81
116.14
95.94
81.21
104.64
100.05
92.2
105.93
68.75
64.15
105.12
71.57
81.52
88.97
119.95
94.63
81.83
44.77
84.63
103.89
79.56
114.31
144.86
79.4
36.02
87.7
91.95
81.18
136.23
62.64
76.42
90.95
90.24
125.68
113.15
100.47
111.36
69.81
102.13
74.83
65.29
68.76
97.74
22.25
35.06
69.98
98.8
113.46
67.29
93.01
119.09
113.22
98.49
83.98
92.04
56.85
134.92
89.02
113.09
104.11
70.67
92.14
92.12
139.26
87.71
98.53
116.18
88.22
92.07
109.24
93.25
65.5
101.75
51.42
83.32
65.24
77.46
72.08
63.3
91.96
86.67
91.3
83.77
30.03
131.16
54.77
78.01
88.25
107.98
121.43
104.26
121.09
103.82
72.36
96.91
109.09
88.22
101.35
56.75
91.25
63.01
112.98
25.23
87.85
80.84
123.06
94.73
84.1
90.26
150.42
40.98
132.33
97.71
77.86
73.13
58.93
40.34
71.36
121.27
77.28
76.2
63.04
90.16
57.91
100.56
79.16
57.22
66.87
90.65
82.48
117.04
145.09
109.92
157.45
59.93
89.81
79.22
80.05
81.42
94.31
110.61
95.97
86.73
74.16
83
115.14
90.53
94.31
104.54
51.38
96
73.35
107.84
128.2
125.17
13.1
83.44
71.15
99.05
100.56
80.7
133.63
65.82
78.49
74.46
68.6
76.57
79.47
105.06
83.96
114.95
98.08
105.16
96.17
60.56
79.05
108.16
108.22
111.05
95.44
52.63
41.06
26.7
119.71
75.42
91.69
101.9
53.8
30.78
62.65
83.14
83.37
138.22
91.61
119.81
75.55
110.32
115.09
120.35
121.16
50.49
81.36
94.84
87.1
88.69
69.04
72.57
106.96
120.25
74.19
65.81
96.72
112.45
99.73
56.43
100.99
100.37
89.16
85.81
69.23
126.23
115.71
87.57
97.79
126.72
69.19
80.67
118.86
84.98
`
function create() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var fs = require('fs');
  var filePath = `users/${email}.txt`;
  fs.writeFileSync(filePath, fname);
  console.log(`Created ${filePath}`);

}
var classList;
var totalquizscore = 0;
var listofnumstoadd = [];
var newList = [];
var changecheck;
var count = 0;
function resulting(cname) {
  var allqs = document.getElementsByClassName(cname);
  for (var i = 0; i<(allqs.length); i++) {
    if (allqs[i].checked) {
      classList = allqs[i].className.split(' ');
      numtoadd = parseFloat(classList[1]);
      count = Number(allqs[i].name)-1;
      listofnumstoadd[count] = numtoadd;
    }
  }
  localStorage.setItem('thelist', JSON.stringify(listofnumstoadd));
}
const rows = datas.split('\n');
const oneDimensionalArray = rows.slice(1);
var cco;
function makegraph() {
  cco = 0;
  var totalemit = JSON.parse(localStorage.getItem('thelist'));
  var totalvalues = totalemit[0]*totalemit[1]*totalemit[3] / (1000 * totalemit[4]);
  var ecoscore = 1-totalvalues;
  var x1 = rows;
  var x2 = [totalvalues];
  var trace1 = {
    x: x1,
    type: "histogram",
    name: "Histogram of how much carbon people emit in general",
    opacity: 0.5,
    marker: {
       color: 'green',
    },
  };
  var trace2 = {
    x: x2,
    type: "histogram",
    name: "You are here",
    opacity: 0.6,
    marker: {
       color: 'red',
    },
  };
  
  var data = [trace1, trace2];
  var layout = {barmode: "overlay"};
  Plotly.newPlot('myDiv', data, layout);
  for (var j = 0; j<1000;j++) {
    if (totalvalues > rows[j]) {
      cco += 1;
    }
  }
  cco = (cco/10);
  final_cco = 100-Math.ceil(cco)
  if (final_cco<0){ // True -1<0
    final_cco = 0;
  }
  localStorage.setItem("Score", final_cco);
  document.getElementById("setters").innerHTML="You pollute more than " + cco.toString() + " % of people"; 
}
var qs = [["What can you do to reduce plastic waste?", "Use disposable plastic bags", "Avoid single-use plastics", "Buy more plastic products"],
["Which transportation option is more eco-friendly?", "Walking or biking", "Driving a gas-guzzling SUV", "Flying in a private jet"],
["How can you conserve water at home?", "Leave the tap running while brushing your teeth", "Fix any leaks promptly", "Take long showers every day"],
["What is a sustainable way to source food?", "Eating imported, out-of-season produce", "Buying locally grown, seasonal food", "Consuming processed foods with long shelf lives"],
["Which type of light bulbs is energy-efficient?", "Incandescent bulbs", "LED bulbs", "Halogen bulbs"],
["What is composting?", "Sending food waste to the landfill", "Turning food scraps into nutrient-rich soil", "Recycling plastics"],
["How can you reduce energy consumption in your home?", "Keep all lights and appliances on 24/7", "Use energy-efficient appliances and turn them off when not in use", "Heat your home with an open window in winter"],
["What can you do to support renewable energy?", "Invest in fossil fuel companies", "Install solar panels on your roof", "Keep using non-renewable energy sources"],
["Which of these materials is recyclable?", "Glass", "Styrofoam", "Plastic bags"],
["What's an eco-friendly way to travel long distances?", "Taking a road trip in a gas-guzzler", "Flying in a fuel-efficient airplane", "Using a large cruise ship"],
["How can you reduce paper waste at work or school?", "Print everything double-sided", "Use paper towels for all cleaning", "Print excessively and throw away unused paper"],
["What is a benefit of planting trees?", "Increased carbon emissions", "Improved air quality and carbon capture", "Depletion of natural resources"],
["What can you do to support wildlife conservation?", "Build a shopping mall in a wildlife habitat", "Donate to organizations protecting endangered species", "Collect and trade exotic pets"],
["How can you reduce food waste in your household?", "Buy in bulk and let food spoil", "Plan meals, use leftovers, and compost food scraps", "Always order takeout"],
["Which transportation choice is the most eco-friendly for a daily commute?", "Driving alone in a gas-powered car", "Carpooling or using public transportation", "Riding a bicycle or walking"],
["What can you do to reduce electronic waste (e-waste)?", "Upgrade your smartphone every year", "Recycle old electronic devices", "Dump electronics in the trash"],
["How can you reduce water pollution?", "Pour chemicals down the drain", "Properly dispose of household chemicals", "Dump waste in local rivers"],
["What's a sustainable way to handle clothing?", "Buy new clothes regularly", "Donate or recycle old clothing", "Throw old clothes in the trash"],
["How can you minimize your carbon footprint when traveling by car?", "Drive a fuel-efficient vehicle", "Keep your car engine running while parked", "Avoid carpooling"],
["What is the main goal of eco-friendly practices?", "Maximizing waste and pollution", "Protecting the environment and conserving resources", "Ignoring sustainability concerns"]];

function randomize(arr) {
  let d = arr;
  let chosenItems = [];

  function getRandomValue() {
    if (d.length === 0) {
      d = chosenItems;
      chosenItems = [];
    }
    const index = Math.floor(Math.random() * d.length);
    const choice = d.splice(index, 1)[0];

    chosenItems.push(choice);
    return choice;
  }
  
  return {
    randomItem: getRandomValue
  }
}

const dummyData = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

const randomizeData = randomize(dummyData);

var corrects = [2,1,2,2,2,2,2,2,1,2,1,2,2,2,3,2,2,2,1,2];
var indexesforqs = [];
var listofans = [];
var correctans = 0;
function changeqs() {
  for (var o = 0;o<5;o++) {
    indexesforqs[o] = randomizeData.randomItem();
  }
  for (var h=0;h<5;h++) {
    document.getElementById(h.toString()).innerHTML=qs[indexesforqs[h]][0];
    listofans[3*h] = qs[indexesforqs[h]][1];
    listofans[3*h+1] = qs[indexesforqs[h]][2];
    listofans[3*h+2] = qs[indexesforqs[h]][3];
  }
  for (var s=10;s<25;s++) {
    document.getElementById(s.toString()).innerHTML=listofans[s-10];
  }
  localStorage.setItem('thelist1', JSON.stringify(indexesforqs));
}
var classList1;
var listofnumstoadd1 = [];
var count1 = 0;
var numtoadd = 0;
function resultin(cname) {
  var indexi = JSON.parse(localStorage.getItem('thelist1'));
  var allqs = document.getElementsByClassName(cname);
  for (var i = 0; i<(allqs.length); i++) {
    count1 = Number(allqs[i].name)-1;
    if (allqs[i].checked) {
      classList = allqs[i].className.split(' ');
      idnum = parseFloat(classList[1]);
      for (var e=0;e<5;e++) {
        // console.log(qs[indexi[e]][corrects[indexi[e]]]);
        if (document.getElementById(idnum).textContent == qs[indexi[e]][corrects[indexi[e]]]) {
          numtoadd1 = 1;
          break;
        } else {
          numtoadd1 = 0;
        }
      }
      // console.log(count1);
      // console.log(numtoadd1);
      listofnumstoadd1[count1] = numtoadd1;
    }
  }
  localStorage.setItem('thelist2', JSON.stringify(listofnumstoadd1));
}

function subans() {
  var score = 0;
  var rorw = JSON.parse(localStorage.getItem('thelist2'));
  console.log(rorw);
  for (var f=0;f<rorw.length;f++) {
    if (rorw[f] == 1) {
      score += 1;
    } else {
      score = score;
    }
  }
  score = (score * 100)/(rorw.length);
  console.log(score);
  var ecoscore = score;
  localStorage.setItem("Score", score);
  // cco = (cco/10);
  // final_cco = 100-Math.ceil(cco)
  // if (final_cco<0){ // True -1<0
  //   final_cco = 0;
  // }
  
  console.log(score);
  localStorage.setItem("Score", ecoscore);
  console.log(score);
  document.getElementById("setters").innerHTML="You scored " + score.toString() + " %";
}

var isdriver;
function dri(inp) {
  if (inp == 1) {
    isdriver = true;
  } else {
    isdriver = false;
  }
  console.log(isdriver);
}