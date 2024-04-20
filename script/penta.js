function pentaCalculation(){
    // console.log('aci')
    const pentaPera = getInputValue('pentagon-perameter');
    const pentaApo = getInputValue('pentagon-apothom');
    const area = 0.5 * pentaApo * pentaPera;

    setInnerText('pentagon-area', area)
}
function getInputValue(getInput){
    const inputVale = document.getElementById(getInput).value;
    const input = parseFloat(inputVale);
    return input;
}

function setInnerText(element, value){
 const getText = document.getElementById(element);
 getText.innerText = value;
}