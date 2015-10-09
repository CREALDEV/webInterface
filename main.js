function mainInit() 
{
	
	//
	
	var width = 960, 
    height = 500; //height and width variables 
    var vis = d3.select("#mainArea") 
            .append("svg"); //the is the visual selection

	vis.attr("width", width)
        .attr("height", height); //setting the attributes for height and width
	vis.text("Our Graph")
        .select("#mainArea") //this is the div object on abdul page 
 var nodes = [{x: 30, y: 50},
              {x: 50, y: 80},
              {x: 90, y: 120}]

  vis.selectAll("circle.nodes")
     .data(nodes)
     .enter()
     .append("svg:circle")
     .attr("cx", function(d) { return d.x; })
     .attr("cy", function(d) { return d.y; })

vis.selectAll("circle.nodes")
      .data(nodes)
      .enter()
      .append("svg:circle")
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; })
      .attr("r", "10px")
      .attr("fill", "black") 
      
   var links = [
  {source: nodes[0], target: nodes[1]},
  {source: nodes[2], target: nodes[1]}
				]

vis.selectAll(".line")
   .data(links)
   .enter()
   .append("line")
   .attr("x1", function(d) { return d.source.x })
   .attr("y1", function(d) { return d.source.y })
   .attr("x2", function(d) { return d.target.x })
   .attr("y2", function(d) { return d.target.y })
   .style("stroke", "rgb(6,120,155)");
   
	var mainObject = document.getElementById('mainArea'); //this is a an object right here 	
	//
	
	//~ d3.select('body').style('background-color', 'black');
	//~ d3.select('body').style('foreground-color', 'white');
	//~ mainObject.innerHTML = 'hello'; 
	
};




window.onload=mainInit;

