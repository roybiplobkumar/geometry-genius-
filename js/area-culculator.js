document.getElementById('triangle-btn').addEventListener('click',function(){
  const base=getValueByInputFiled('base');
  const hight=getValueByInputFiled('hight');
  if(isNaN(base)||isNaN(hight)){
    alert('please input value of triangle')
    return;
  }
  const area=0.5*base*hight;
  setValueInnerText('t-result',area)
  
})

document.getElementById('rectangle-btn').addEventListener('click',function(){
  const base=getValueByInputFiled('w-base');
  const hight=getValueByInputFiled('l-hight');
  if(isNaN(base)||isNaN(hight)){
    alert('please input value of rectangle')
    return;
  }
  const area=base*hight;
  setValueInnerText('r-result',area)
  
})
document.getElementById('parallelogram-btn').addEventListener('click',function(){
  const base=getValueByInputFiled('b-base');
  const hight=getValueByInputFiled('h-hight');
  if(isNaN(base)||isNaN(hight)){
    alert('please input value of rectangle')
    return;
  }
  const area=base*hight;
  setValueInnerText('p-result',area)
  
})

document.getElementById('rhombus-btn').addEventListener('click',function(){
  const base=getValueByInputFiled('d1-base');
  const hight=getValueByInputFiled('d2-hight');
  if(isNaN(base)||isNaN(hight)){
    alert('please input value of parallelogram')
    return;
  }
  const area=0.5*base*hight;
  setValueInnerText('rho-result',area)
  
})
document.getElementById('Pentagon-btn').addEventListener('click',function(){
  const base=getValueByInputFiled('p-base');
  const hight=getValueByInputFiled('b-hight');
  if(isNaN(base)||isNaN(hight)){
    alert('please input value of parallelogram')
    return;
  }
  const area=0.5*base*hight;
  setValueInnerText('penta-result',area)
  
})
document.getElementById('ellipse-btn').addEventListener('click',function(){
  const base=getValueByInputFiled('a-ellipse');
  const hight=getValueByInputFiled('b-ellipse');
  if(isNaN(base)||isNaN(hight)){
    alert('please input value of parallelogram')
    return;
  }
  const area=3.14*base*hight;
  setValueInnerText('ellipse-result',area)
  
})


// Area Calculation js code

function areaCalculation(){
  console.log('clicked')
}
