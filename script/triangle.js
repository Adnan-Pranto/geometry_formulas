function addTraget(){
    const triangleBase = document.getElementById('triangle-base').value;
    const base = parseFloat(triangleBase)
    // console.log( base) 

    const triangleHeight = document.getElementById('triangle-height').value;
    const height = parseFloat(triangleHeight)
    // console.log( height)
    //   calculate value;
    const area = 0.5 * height *base;
    console.log('Area of Triangle is:', area);

    // see the total area 
    const traiArea = document.getElementById('triangle-area');
    traiArea.innerText = area;
}

function addRectangle(){
    const rectHeight = document.getElementById('rectangle-width').value;
    const height = parseFloat(rectHeight);
    // console.log( height)
    
    const rectLength = document.getElementById('rectangle-length').value;
    const length = parseFloat(rectLength );
    // console.log( length)
    // area 
    const area = length* height;
    console.log('rectangle area:', area);

    const myArea = document.getElementById('rectangle-area');
    myArea.innerText = area;

}