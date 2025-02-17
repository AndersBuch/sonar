function processData(data) {
  // Duplicated code
  for(var i = 0; i < data.length; i++) {
      if(data[i].type == "A") {
          processTypeA(data[i]);
      }
  }
  
  // More duplicated code
  for(var i = 0; i < data.length; i++) {
      if(data[i].type == "B") {
          processTypeB(data[i]);
      }
  }
}

function processTypeA(item) {
  // Security hotspot
  eval(item.code);
}

function processTypeB(item) {
  // Bug
  const result = item.value / 0;
  return result;
}