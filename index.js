colorMode=document.getElementById('colorMode');
rainbowMode=document.getElementById('rainbowMode');
eraserMode=document.getElementById('eraserMode');
clear=document.getElementById('clear');
gridSize=document.getElementById('gridSize');
drawingBox=document.getElementById('drawingBox');
inputBar=document.getElementById('inputBar');
inputValue=document.getElementById('inputValue'); 
colorPicker=document.getElementById('colorPicker')

let iClicked = false;
let rainbowColor=false;
let eraserColor=false;

clear.addEventListener('click', ()=>{
    for(let i=0; i<inputBar.value*inputBar.value; i++){
    drawingBox.children[i].style.backgroundColor='white'
    }
    rainbowColor=false;
    eraserColor=false;
})

colorMode.addEventListener('click', ()=>{
    colorPicker.click();
    rainbowColor=false;
    eraserColor=false;
})

rainbowMode.addEventListener('click', ()=>{
    rainbowColor=true;
    eraserColor=false;
})

eraserMode.addEventListener('click', ()=>{
    rainbowColor=false;
    eraserColor=true;
})

//this is when you edit the input bar


inputBar.addEventListener('input', ()=>{
    inputValue.innerHTML = inputBar.value + 'x' + inputBar.value;
    drawingBox.style.gridTemplateColumns = 'repeat(' + inputBar.value + ', 1fr)';
    drawingBox.style.gridTemplateRows = 'repeat(' + inputBar.value + ', 1fr)';
    console.log(drawingBox.style.gridTemplateRows = 'repeat(' + inputBar.value + ', 1fr)')
    drawingBox.innerHTML=''

    editingGrid()
})


//this is the onload
function editingGrid(){

for (let i = 0; i < inputBar.value * inputBar.value; i++) {
    const gridElement = document.createElement('div')
    gridElement.classList.add('gridElement')
    gridElement.style.border='1px solid black'
    drawingBox.appendChild(gridElement)

    gridElement.addEventListener('mousedown', ()=>{
        iClicked=true;
        if(rainbowColor){
            randomColor='#'+ Math.round(Math.random()*9).toString() + Math.round(Math.random()*9).toString() + Math.round(Math.random()*9).toString() + Math.round(Math.random()*9).toString() + Math.round(Math.random()*9).toString() + Math.round(Math.random()*9).toString()
            gridElement.style.backgroundColor=randomColor
        }
        else if(eraserColor){
            gridElement.style.backgroundColor='white'
        }
        else{
            gridElement.style.backgroundColor=colorPicker.value
        }
    })

    gridElement.addEventListener('mouseover', ()=>{
        if(iClicked){
            if(rainbowColor){
                randomColor='#'+ Math.round(Math.random()*9).toString() + Math.round(Math.random()*9).toString() + Math.round(Math.random()*9).toString() + Math.round(Math.random()*9).toString() + Math.round(Math.random()*9).toString() + Math.round(Math.random()*9).toString()
                gridElement.style.backgroundColor=randomColor
                //colorPicker.value=randomColor //this is to switch the box color
            }
            else if(eraserColor){
                gridElement.style.backgroundColor='white'
            }
            else{
                gridElement.style.backgroundColor=colorPicker.value
            }
        
        }
    })

    gridElement.addEventListener('mouseup', ()=>{
        iClicked=false;
    })

    
  }

drawingBox.addEventListener('mouseleave', ()=>{
    iClicked=false;
})

}

editingGrid()