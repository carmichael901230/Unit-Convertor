function swapTab(choice) {
    var divArr = document.getElementsByClassName("tabbody");
    var btnArr = document.getElementsByTagName("button");
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
// hope I can come up with a better one
function calcLength() {
  var fromSel = parseInt(document.getElementById("fromLength").value);
  var toSel = parseInt(document.getElementById("toLength").value);
  var input = parseFloat(document.getElementById("inputLength").value);
  var output;
  // convert between same unit
  if (fromSel == toSel) {
    output = input;
  }
  // convert from mm
  else if (fromSel == 0) {
    if (toSel == 1)
      output = input/10;
    else if (toSel == 2)
      output = input/100;
    else if (toSel == 3)
      output = input/1000;
    else if (toSel == 4)
      output = input/1000000;
    else if (toSel == 5)
      output = input*6.213711922373e-6;
    else if (toSel == 6)
      output = input*0.003280839895013123;
    else if (toSel == 7)
      output = input*0.0393700787401574848;
  }
  // convert from cm
  else if  (fromSel == 1) {
    if (toSel == 0)
      output = input*10;
    else if (toSel == 2)
      output = input/10;
    else if (toSel == 3)
      output = input/100;
    else if (toSel == 4)
      output = input/100000;
    else if (toSel == 5)
      output = input*6.2137119223736213711922373e-6;
    else if (toSel == 6) 
      output = input*0.03280839895013123;
    else if (toSel == 7)
      output = input*0.393700787401574848;
  }
  // convert from dm
  else if (fromSel == 2) {
    if (toSel == 0)
      output = input*100;
    else if (toSel == 1)
      output = input*10;
    else if (toSel == 3)
      output = input/10;
    else if (toSel == 4)
      output = input/1e4;
    else if (toSel == 5)
      output = input*6.213711922373e-5;
    else if (toSel == 6) 
      output = input*0.3280839895013123;
    else if (toSel == 7)
      output = input*3.93700787401574848;    
  }
  // convert from m
  else if (fromSel == 3) {
    if (toSel == 0)
      output = input*1000;
    else if (toSel == 1)
      output = input*100;
    else if (toSel == 2)
      output = input*10;
    else if (toSel == 4)
      output = input/1000;
    else if (toSel == 5)
      output = input*6.213711922373e-4;
    else if (toSel == 6) 
      output = input*3.280839895013123;
    else if (toSel == 7)
      output = input*39.3700787401574848;   
  }
  // convert from km
  else if (fromSel == 4) {
    if (toSel == 0)
      output = input*1000000;
    else if (toSel == 1)
      output = input*100000;
    else if (toSel == 2)
      output = input*10000;
    else if (toSel == 3)
      output = input*1000;
    else if (toSel == 5)
      output = input*0.6213711922373;
    else if (toSel == 6) 
      output = input*3280.839895013123;
    else if (toSel == 7)
      output = input*39370.0787401574848;
  }
  // convert from mi
  else if (fromSel == 5) {
    if (toSel == 0)
      output = input*1609344;
    else if (toSel == 1)
      output = input*160934.4;
    else if (toSel == 2)
      output = input*16093.44;
    else if (toSel == 3)
      output = input*1609.344;
    else if (toSel == 4)
      output = input*1.609344;
    else if (toSel == 6) 
      output = input*5280;
    else if (toSel == 7)
      output = input*63360;
  }
  // convert from ft
  else if (fromSel == 6) {
    if (toSel == 0)
      output = input*304.8;
    else if (toSel == 1)
      output = input*30.48;
    else if (toSel == 2)
      output = input*3.048;
    else if (toSel == 3)
      output = input*0.3048;
    else if (toSel == 4)
      output = input*3.048e-4;
    else if (toSel == 5) 
      output = input*1.89394e-4;
    else if (toSel == 7)
      output = input*12;
  }
  // convert from in
  else if (fromSel == 7) {
    if (toSel == 0)
      output = input*25.4;
    else if (toSel == 1)
      output = input*2.54;
    else if (toSel == 2)
      output = input*0.254;
    else if (toSel == 3)
      output = input*0.0254;
    else if (toSel == 4)
      output = input*2.54e-5;
    else if (toSel == 5) 
      output = input*1.5783e-5;
    else if (toSel == 6)
      output = input/12;
  }

  
  if (output >= 10000 || output <= 0.0001)
    output = parseFloat(output).toExponential();
  // avoid nan and undefined output
  if (isNaN(output) || output == undefined)
    output = "";
  document.getElementById("outputLength").value = output;
}

function calcWeight() {
	var fromSel = parseInt(document.getElementById("fromWeight").value);
	var toSel = parseInt(document.getElementById("toWeight").value);
	var input = parseFloat(document.getElementById("inputWeight").value);
	var output;
	// convert between same units
	if (fromSel == toSel)
		output = input;
	// convert from mg
	else if (fromSel == 0) {
		if (toSel == 1)
			output = input/1000;
		else if (toSel == 2)
			output = input/1e6;
		else if (toSel == 3)
			output = input/1e9;
		else if (toSel == 4)
			output = input*3.52739619495804e-5;
		else if (toSel == 5)
			output = input*2.20462262184878e-6;
	}
	// convert from g
	else if (fromSel == 1) {
		if (toSel == 0)
			output = input*1000;
		else if (toSel == 2)
			output = input/1000;
		else if (toSel == 3)
			output = input/1e6;
		else if (toSel == 4)
			output = input*3.52739619495804e-2;
		else if (toSel == 5)
			output = input*2.20462262184878e-3;
	}
	// convert from kg
	else if (fromSel == 2) {
		if (toSel == 0)
			output = input*1e6;
		else if (toSel == 1)
			output = input*1000;
		else if (toSel == 3)
			output = input/1e3;
		else if (toSel == 4)
			output = input*35.2739619495804;
		else if (toSel == 5)
			output = input*2.20462262184878;
	}
	// convert from ton
	else if (fromSel == 3) {
		if (toSel == 0)
			output = input*1e9;
		else if (toSel == 1)
			output = input*1e6;
		else if (toSel == 2)
			output = input*1e3;
		else if (toSel == 4)
			output = input*35273.9619495804;
		else if (toSel == 5)
			output = input*2204.62262184878;
	}
	// convert from ounce
	else if (fromSel == 4) {
		if (toSel == 0)
			output = input*28349.523125;
		else if (toSel == 1)
			output = input*28.349523125;
		else if (toSel == 2)
			output = input*0.028349523125;
		else if (toSel == 3)
			output = input*2.8349523125e-5;
		else if (toSel == 5)
			output = input*0.0625;
	}
	// convert from pound
	else if (fromSel == 5) {
		if (toSel == 0)
			output = input*453592.37;
		else if (toSel == 1)
			output = input*453.59237;
		else if (toSel == 2)
			output = input*0.45359237;
		else if (toSel == 3)
			output = input*0.00045359237;
		else if (toSel == 4)
			output = input*16;
	}
	
	if (output >= 10000 || output <= 0.0001)
		output = parseFloat(output).toExponential();
	// avoid nan and undefined output
	if (isNaN(output) || output == undefined)
		output = "";
	document.getElementById("outputWeight").value = output;
}