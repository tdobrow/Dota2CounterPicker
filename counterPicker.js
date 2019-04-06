function readFile(filename) {
  console.log("inside readfile");
  data = d3.tsv(filename, function(data) {
      console.log("Inside d3 funtion");
      console.log(data);
      return data;
  });  
}

function getCounterPick(textBoxValue){
  console.log("hello");
  console.log(textBoxValue);
  readFile("matchData.tsv")
}
