console.log("utilestis osljdkf")

function getValueByInputFiled(input){
    const inputFiledId=document.getElementById(input);
    const inputFiledStr=inputFiledId.value;
    const value=parseFloat(inputFiledStr).toFixed(2);
    return value;
}

function setValueInnerText(text,value){
 let textId=document.getElementById(text);
 textId.innerText=value;
}
