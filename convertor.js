function swapTab(choice) {
    var divArr = document.getElementsByClassName("tabbody");
    var btnArr = document.getElementsByTagName("button");
	// "block" display choice and "none" display others
    for (let i=0; i<divArr.length; i++) {
      if (divArr[i].id == choice) {
        divArr[i].style.display = "block";
      }
      else {
        divArr[i].style.display = "none";
      }
    }
    for (let i=0; i<btnArr.length; i++) {
      if (btnArr[i].innerHTML.toLowerCase() == choice) {
        btnArr[i].className = "tabBtn active";
      }
      else {
        btnArr[i].className = "tabBtn";
      }
    }
  }

// a silly function to convert between length units
// hope I can come up with a better algorithm
function calcLength() {
  let fromSel = parseInt(document.getElementById("fromLength").value);
  let toSel = parseInt(document.getElementById("toLength").value);
  let input = parseFloat(document.getElementById("inputLength").value);
  let output = NaN;
  // convert between same unit
  if (fromSel == toSel) {
    output = input;
  }
  else {
    let convertToMeter = [1, 0.001,100,1000,1000000,1000000000,0.0006213689,
                        1.0936132983,3.280839895,39.37007874];
    let temp = input / convertToMeter[fromSel];
    output = temp * convertToMeter[toSel]
  }
  // formate long number
  if (output.toString().length > 5)
	output = parseFloat(output).toPrecision(5);
  // formate huge | tiny number
  if (output >= 10000 || output <= 0.0001)
    output = parseFloat(output).toExponential();
    // avoid nan and undefined output
  if (isNaN(output) || output == undefined)
    output = "";
  document.getElementById("outputLength").value = output;
}

function calcWeight() {
	let fromSel = parseInt(document.getElementById("fromWeight").value);
	let toSel = parseInt(document.getElementById("toWeight").value);
	let input = parseFloat(document.getElementById("inputWeight").value);
	let output = NaN;
	// convert between same units
	if (fromSel == toSel)
    output = input;
  else {
    let convertToKG = [1, 1000,1000000,0.001,35.273990723,2.2046244202];
    let temp = input / convertToKG[fromSel];
    output = temp * convertToKG[toSel];
  }
	
	// formate long number
	if (output.toString().length > 5)
		output = parseFloat(output).toPrecision(5);
	// exponent huge | tiny number
	if (parseFloat(output) >= 10000 || parseFloat(output) <= 0.0001)
    output = parseFloat(output).toExponential();
  // avoid nan and undefined output
	if (isNaN(output) || output == undefined)
    output = "";
	document.getElementById("outputWeight").value = output;
}

function calcVolume() {
  let fromSel = parseInt(document.getElementById("fromVolume").value);
  let toSel = parseInt(document.getElementById("toVolume").value);
  let input = parseFloat(document.getElementById("inputVolume").value);
  let output;
  // convert between same units
	if (fromSel == toSel)
    output = input;
  else {
    // Convert everything to cubic meter, then convert to target unit
    let convertToM3 = [1, 1000000,1000000000,1000,1000000,264.17217686,1056.6887074,2113.3774149,4226.7548297,67628.077276,202884.23183];
    let temp = input / convertToM3[fromSel];
    output = temp * convertToM3[toSel];
    
  }
  // formate long number
	if (output.toString().length > 5)
  output = parseFloat(output).toPrecision(5);
  // exponent huge | tiny number
  if (parseFloat(output) >= 10000 || parseFloat(output) <= 0.0001)
    output = parseFloat(output).toExponential();
  // avoid nan and undefined output
  if (isNaN(output) || output == undefined)
    output = "";
  document.getElementById("outputVolume").value = output;
}

function calcArea() {
  let fromSel = parseInt(document.getElementById("fromArea").value);
  let toSel = parseInt(document.getElementById("toArea").value);
  let input = parseFloat(document.getElementById("inputArea").value);
  let output;
  // convert between same units
	if (fromSel == toSel)
    output = input;
  else {
    // Convert everything to cubic meter, then convert to target unit
    let convertToM2 = [1, 10000,1000000,0.0001,3.861018768e-7,1.1959900463,10.763910417,
                      1550.0031,0.0002471054];
    let temp = input / convertToM2[fromSel];
    output = temp * convertToM2[toSel];
  }
  // formate long number
	if (output.toString().length > 5)
  output = parseFloat(output).toPrecision(5);
  // exponent huge | tiny number
  if (parseFloat(output) >= 10000 || parseFloat(output) <= 0.0001)
    output = parseFloat(output).toExponential();
  // avoid nan and undefined output
  if (isNaN(output) || output == undefined)
    output = "";
  document.getElementById("outputArea").value = output;
}