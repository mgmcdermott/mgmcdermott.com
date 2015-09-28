$(function() {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var data = [
    { label: 'a', value: 0 },
    { label: 'b', value: 0 },
    { label: 'c', value: 0 },
    { label: 'd', value: 0 },
    { label: 'e', value: 0 },
    { label: 'f', value: 0 },
    { label: 'g', value: 0 },
    { label: 'h', value: 0 },
    { label: 'i', value: 0 },
    { label: 'j', value: 0 },
    { label: 'k', value: 0 },
    { label: 'l', value: 0 },
    { label: 'm', value: 0 },
    { label: 'n', value: 0 },
    { label: 'o', value: 0 },
    { label: 'p', value: 0 },
    { label: 'q', value: 0 },
    { label: 'r', value: 0 },
    { label: 's', value: 0 },
    { label: 't', value: 0 },
    { label: 'u', value: 0 },
    { label: 'v', value: 0 },
    { label: 'w', value: 0 },
    { label: 'x', value: 0 },
    { label: 'y', value: 0 },
    { label: 'z', value: 0 },
    { label: 'Other', value: 0 }
  ];

  var DRAWN = false;

  function sortByLogin(a, b) {
    if (a.login < b.login) {
      return -1;
    }
    if (a.login > b.login) {
      return 1;
    }
    return 0;
  }

  $('#searchGH').click(function() {
    // Get request string from input and make GET request to GitHub
    var input = $('#githubQ').val();
    $.get('https://api.github.com/search/users?q=' + input, function(response) {
      // If already drawn, set each value to 0
      if (DRAWN) {
        $.each(data, function(index, letterObj) {
          letterObj.value = 0;
        });
      }
      // Sort the objects in the items array by their login attribute and keep at
      // most 5 of them
      var allData = response.items.sort(sortByLogin).slice(0, 5);

      // Iterate over 5 objects
      $.each(allData, function(index, obj) {
        // Get length of login string and iterate over each character
        var i = obj.login.length;
        while (i--) {
          // Iterate over data array and check if current character matches with
          // the label key. If so, increment that letter's value
          // If not, increment the 'Other' value
          var currentChar = obj.login[i].toLowerCase();
          $.each(data, function(index, letterObj) {
            if (currentChar === letterObj.label) {
              letterObj.value++;
            } else if (alphabet.indexOf(currentChar) === -1) {
              // currentChar is not in the alphabet
              // Dangerous but easiest way of incrementing the 'Other' value
              // since it is at end of the data array and order is maintained
              // Set as variable for readability
              var other = data[data.length - 1];
              // Increment
              other.value++;
            }
          });
        }
      });
      if (DRAWN) {
        redrawChart();
      } else {
        renderChart();
      }
    });
  });

  var margin = {top: 20, right: 20, bottom: 20, left: 20};
  var HEIGHT = 500 - margin.top - margin.bottom;
  var BAR_WIDTH = 30
  var WIDTH = BAR_WIDTH * data.length - margin.left - margin.right;

  var x = d3.scale.ordinal()
    .rangeRoundBands([0, WIDTH], .1);

  var y = d3.scale.linear()
    .range([HEIGHT, 0]);

  var xAxis = d3.svg.axis()
    .scale(x)
    .orient('bottom');

  var yAxis = d3.svg.axis()
    .scale(y)
    .orient('left')
    .ticks(5);

  var chart = d3
    .select('.chart')
    .attr('width', WIDTH + margin.left + margin.right)
    .attr('height', HEIGHT + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  function renderChart() {

    x.domain(data.map(function(d) { return d.label; }));
    y.domain([0, 15]);

    chart.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + HEIGHT + ')')
      .call(xAxis)
    .append('text')
      .attr('y', 30)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('Letter');

    chart.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
    .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('Count');

    chart.selectAll('.bar')
      .data(data)
    .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', function(d) { return x(d.label); })
      .attr('width', x.rangeBand())
      .attr('y', function(d) { return y(d.value); })
      .attr('height', function(d) { return HEIGHT - y(d.value); });

    DRAWN = true;
  }

  function redrawChart() {
    // Chart already drawn so set a transition to the new values
    chart
      .selectAll('rect')
      .data(data)
      .transition()
      .duration(1000)
      .attr('y', function(d) { return y(d.value); })
      .attr('height', function(d) { return HEIGHT - y(d.value); });
  }
  renderChart();
});
