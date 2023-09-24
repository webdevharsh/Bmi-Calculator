let height_slider = document.querySelector('.container .height input');
let weight_slider = document.querySelector('.container .weight input');
let height_value = document.querySelector('.container .height h4');
let weight_value = document.querySelector('.container .weight h4');
let calculate_btn = document.querySelector('.container .calculate-btn');
let health_status = document.querySelector('.container .result .final-result .health-status');
let bmi_value = document.querySelector('.container .result .final-result .bmi');
let range = document.querySelector('.container .result .final-result .range');
let go_back_btn = document.querySelector('.container .result .final-result .go-back-btn');

//InnerHtml Height Value In Height Text
height_slider.addEventListener('input',()=>{
 height_value.innerHTML = height_slider.value + `<span> cm</span>`;      
});

//InnerHtml Weight Value In Weight Text
weight_slider.addEventListener('input',()=>{
 weight_value.innerHTML = weight_slider.value + `<span> kg</span>`;   
});

//Calculate Bmi On Click
calculate_btn.addEventListener('click',()=>{
let height = height_slider.value;
let weight = weight_slider.value;

//Bmi Formula To Calculate Bmi
let bmi = (weight / Math.pow((height / 100),2)).toFixed(1);

//InnerHtml Bmi Value 
bmi_value.innerHTML = bmi;

if(bmi < 18.5){
 //alert('underweight')    
 health_status.innerHTML = 'UnderWeight';
 health_status.style.color = '#ffc44d';
 range.innerHTML = 'You are in the Under weight range.'
}else if(bmi >= 18.5 && bmi <= 24.9){
 health_status.innerHTML = 'Normal Weight';
 health_status.style.color = '#4AC38D';
 range.innerHTML = 'You are in the Normal weight range.'
}else if(bmi >= 25 && bmi <= 29.9){
 health_status.innerHTML = 'OverWeight';
 health_status.style.color = '#ff884d';
 range.innerHTML = 'You are in the Over weight range.'
}else{
 health_status.innerHTML = 'Obesity';
 health_status.style.color = '#ff5e57';
 range.innerHTML = 'You are in the Obese range.You have to work hard.'
}

//Hide Settings Box And Show Results Box
document.querySelector('.container .settings').style.display = 'none';
document.querySelector('.container .result').style.display = 'block'
});

go_back_btn.addEventListener('click',()=>{
document.querySelector('.container .settings').style.display = 'block';
document.querySelector('.container .result').style.display = 'none'       
})
