document.getElementById('triangle-btn').addEventListener('click',function(){
  const base=getValueByInputFiled('base');
  const hight=getValueByInputFiled('hight');
  if(isNaN(base)||isNaN(hight)){
    alert('please input value of triangle')
    return;
  }
  const area=(0.5*base*hight).toFixed(2);
  setValueInnerText('t-result',area)
   // set CalculationEntry
   areaCalculation("triangle",area)
  
})

document.getElementById('rectangle-btn').addEventListener('click',function(){
  const base=getValueByInputFiled('w-base');
  const hight=getValueByInputFiled('l-hight');
  if(isNaN(base)||isNaN(hight)){
    alert('please input value of rectangle')
    return;
  }
  const area=(base*hight).toFixed(2);
  setValueInnerText('r-result',area)

   // set CalculationEntry
   areaCalculation("rectangle",area)
  
})
document.getElementById('parallelogram-btn').addEventListener('click',function(){
  const base=getValueByInputFiled('b-base');
  const hight=getValueByInputFiled('h-hight');
  if(isNaN(base)||isNaN(hight)){
    alert('please input value of rectangle')
    return;
  }
  const area=(base*hight).toFixed(2);
  setValueInnerText('p-result',area);
   // set CalculationEntry
   areaCalculation("parallelogram",area);
  
})

document.getElementById('rhombus-btn').addEventListener('click',function(){
  const base=getValueByInputFiled('d1-base');
  const hight=getValueByInputFiled('d2-hight');
  if(isNaN(base)||isNaN(hight)){
    alert('please input value of parallelogram')
    return;
  }
  const area=(0.5*base*hight).toFixed(2);
  setValueInnerText('rho-result',area)
   // set CalculationEntry
   areaCalculation("rhombus",area)
  
})
document.getElementById('Pentagon-btn').addEventListener('click',function(){
  const base=getValueByInputFiled('p-base');
  const hight=getValueByInputFiled('b-hight');
  if(isNaN(base)||isNaN(hight)){
    alert('please input value of parallelogram')
    return;
  }
  const area=(0.5*base*hight).toFixed(2);
  setValueInnerText('penta-result',area);
   // set CalculationEntry
   areaCalculation("Pentagon",area)
  
})
document.getElementById('ellipse-btn').addEventListener('click',function(){
  const base=getValueByInputFiled('a-ellipse');
  const hight=getValueByInputFiled('b-ellipse');
  if(isNaN(base)||isNaN(hight)){
    alert('please input value of parallelogram')
    return;
  }
  const area=(3.14*base*hight).toFixed(2);
  setValueInnerText('ellipse-result',area);

  // set CalculationEntry
  areaCalculation("Ellipse",area)
  
})


// Area Calculation js code

function areaCalculation(areaType, area){
  const parentId=document.getElementById('parent-id');
  const counter=parentId.childElementCount;
  const p=document.createElement('p');
  p.classList.add('text-center')
  p.classList.add('py-3')
  p.classList.add('text-xl')
  p.innerHTML=`${counter+1}. ${areaType} ${area} cm<sup>2</sup> <button class='btn btn-success btn-sm ml-2'>Covert to m<sup>2</sup></button?>`;
  parentId.appendChild(p);
 

}



