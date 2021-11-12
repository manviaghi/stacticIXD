const spec = {
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  description: 'A simple bar chart with embedded data.',
  width: 250,
  height: 250,
  data: {
    values:[
    {area:"North", sales:5, profit:2},
    {area:"East", sales:25, profit:8},
    {area:"West", sales:15, profit:6},
    {area:"South", sales:20, profit:5},
    {area:"Central", sales:10, profit:3}
  ]
  },
  mark: 'bar',
  mark:{ type:"bar"},
  encoding:{
    x:{field:"area", type:"N", title:"AREA"},
    y:{field:"sales", type:"Q", title:"SALES"}
  }
};

// The first opption the id for the div -> #vis
// the second option is for the spec
vegaEmbed('#vis', spec);

// For the Second Spec
vegaEmbed('#vis2', 'bigFilterSpec.json');

// For the third Spec
vegaEmbed('#vis3', 'separateSpec.json');