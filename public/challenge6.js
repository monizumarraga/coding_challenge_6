
let array_to_order=[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
/*let array_to_order=[1, "2", "3", 2, 4, 3, "1"];*/
let array_string=array_to_order.filter(a=>{
	return typeof(a)==="string";
});
let array_num=array_to_order.filter(a=>{
	return typeof(a)==="number";
});
let button1=document.getElementBtId("question1")

let array_ordered=[];

function join(array_order) {
	if (array_order.length>0) {
		array_order=array_order.sort(function(a, b) {
  			return a - b;
		});
		let array_prov=array_order.map(a=>{
			return a;
		});
		do{
			let elem1=array_prov.shift();
			while (elem1===array_prov[0]) {
				let elem1=array_prov.shift();
			}
			let elem2=array_order.filter((num) => {
				return num === elem1;
			})
			array_ordered.push(elem2);
		} while (array_prov.length>0);
	}
};

function tot_join (){
	join(array_num);
	join(array_string);
}

button1.addEventListener("click", tot_join())

alert("1st question result")
array_ordered.forEach(function(element) {
  alert(element);
});
/*
let array_number=[1,2,3,1,2];
let target_number=4;
let array_result=[];

function added_numbers(array_check, number) {
	for(let i=0; i<array_check.length; i++){
		for(let j=i+1; j<array_check.length; j++){
		if (((array_check[i] + array_check[j])===number) && (array_result.length===0)){
			array_result=[array_check[i], array_check[j]];
		}
	}
	}
}

added_numbers(array_number, target_number);

alert("2nd question result")  
alert(array_result);


let rgb=[255, 0, 155];
let hex_calc=[];
let rgb_detect=true;


let hex="FF0006";
let rgb_calc=[];
let hex_arr=[];

if (typeof(rgb)==="object" && rgb.length===3){
	rgb.forEach(function(i){
		if (typeof(i)!="number" || i<0 || i>255){
			rgb_detect=false;
		}
	})
}

alert(typeof(hex))
if (typeof(hex)==="string" && hex.length===6){

}


const rgbHex= require ('rgb-hex'):
rgbHex(1,2,3);
const hexRgb = require('hex-rgb');
hexRgb('4183c4');


function rgb_to_hex (){
	rgb.forEach(function(i){
		let hex_col = i.toString(16);
		hex_calc.push(hex_col.toUpperCase());
	})
	alert("rgb(" + rgb.join(",") + ") => hex " + hex_calc.join(""))
}

function hex_to_rgb (){
	for (let i=0; i<hex.length; i=i+2) {
		hex_arr.push(hex.substr(i, 2));
	}
	hex_arr.forEach(function(i){
		let rgb_col = parseInt(i.slice(0,2), 16);
		rgb_calc.push(rgb_col);
	})
	alert("hex " + hex + " => rgb(" + rgb_calc.join(",") +")")
}

alert("3rd question result")



if (rgb_detect===true){
	rgb_to_hex();
}

hex_to_rgb ();

*/