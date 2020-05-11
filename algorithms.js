let AlgoForExecution = (myAlgos) => {
    let actionAlgo = myAlgos.options[myAlgos.selectedIndex].innerHTML;
    switch(actionAlgo){
        case "Large Data Set":
            return largeDS();
        case "Small Data Set":
            return smallDS();
        case "Sort/Randomize Array":
            sortingAlgo();
        default:
            return;
    }
}

let disableExecutionButtons = () => {
    let binSearchBtn = document.getElementById("binSearch");
    binSearchBtn.setAttribute("disabled","");
    let linSearchBtn = document.getElementById("linSearch");
    linSearchBtn.setAttribute("disabled","");
    let numToFind = document.getElementById("numtofind");
    numToFind.setAttribute("disabled","");
}
let largeDS = () => {
    smallBoxes();
    let sdsBtn = document.getElementById('smallDS');
    sdsBtn.setAttribute("disabled","");
    let sortingBtn = document.getElementById('sorting');
    sortingBtn.setAttribute("disabled","");
    let linSearchBtn = document.getElementById("linSearch");
    let binSearchBtn = document.getElementById("binSearch");
    linSearchBtn.addEventListener("click",largeDSlinSearch);
    binSearchBtn.addEventListener("click",largeDSbinSearch)
}
let smallDS = () => {
    largeBoxes();
    let ldsBtn = document.getElementById('largeDS');
    ldsBtn.setAttribute("disabled","");
    let sortingBtn = document.getElementById('sorting');
    sortingBtn.setAttribute("disabled","");
    let linSearchBtn = document.getElementById("linSearch");
    let binSearchBtn = document.getElementById("binSearch");
    linSearchBtn.addEventListener("click",linSearch);
    binSearchBtn.addEventListener("click",binSearch)
}
let sortingAlgo = () => {
    newArr();
    document.getElementById("numtofind").setAttribute("disabled","");
    let ldsBtn = document.getElementById('largeDS');
    ldsBtn.setAttribute("disabled","");
    let sdsBtn = document.getElementById('smallDS');
    sdsBtn.setAttribute("disabled","");
    let linSearchBtn = document.getElementById("linSearch");
    let binSearchBtn = document.getElementById("binSearch");
    linSearchBtn.textContent = "Selection Sort";
    binSearchBtn.textContent = "Bubble Sort";
    linSearchBtn.addEventListener("click",setSelect);
    binSearchBtn.addEventListener("click",setBubble)
}
let refresh = () => {
    location.reload(true);
}


let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let cvWidth = $('canvas').attr('width');
let cvHeight = $('canvas').attr('height');
let rangeslider = document.getElementById("sliderRange");
let output = document.getElementById("demo");
output.innerHTML = rangeslider.value;
let controlsetBubble = undefined;
let controlsetSelect = undefined
let controllargeDSbinSearch = undefined
let controllargeDSlinSearch = undefined
let controlbinSearch = undefined
let controllinSearch = undefined


let boxSmallNumArr = [];
let circleXpos = [];
let largeBoxes = () => {
    ctx.clearRect(0, 0, cvWidth, cvHeight);
    let alibi = [];
    for(let i =0;i<=310;i++){
        alibi.push(Math.round(Math.random()*100))
        let some = new Set(alibi);
        boxSmallNumArr = Array.from(some);
        if(boxSmallNumArr.length==32){
            break;
        }
    };
    boxSmallNumArr.sort((a,b)=> a-b);
    let boxCount = -1;
    for(let i=30;i<=cvWidth-100;i+=50){
        boxCount++;
        drawBarText(ctx,i,150,50,50,"white",boxSmallNumArr[boxCount],boxCount);
        drawBarText(ctx,i,350,50,50,"white",boxSmallNumArr[boxCount+16],boxCount+16);
        circleXpos.push(i)
    }
}


function drawBarText(ctx, upperLeftCornerX, upperLeftCornerY, width, height,color,int,boxCount){
    ctx.rect(upperLeftCornerX, upperLeftCornerY, width, height);
    ctx.fillStyle = color;
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.restore();
    ctx.textAlign = "center";
    ctx.font = "10px small-caption";
    ctx.strokeText(int, upperLeftCornerX+25, upperLeftCornerY+28);
    ctx.restore();
    ctx.textAlign = "center";
    ctx.strokeText(boxCount, upperLeftCornerX+25, upperLeftCornerY+70);
    ctx.restore();
};


function drawCircle(upperLeftCornerX,upperLeftCornerY,width,color,linewidth){
    ctx.beginPath();
    ctx.arc(upperLeftCornerX+25, upperLeftCornerY+70, width/3, 0, 2 * Math.PI);
    ctx.lineWidth = linewidth;
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.restore();
}

let ind = 0;
function linearSearch() {
    ctx.clearRect(0, 0, cvWidth, cvHeight);
    let boxCount = -1;
    let value = document.getElementById("numtofind").value;
    for(let i=30;i<=cvWidth-100;i+=50){
        boxCount++;
        drawBarText(ctx,i,150,50,50,"white",boxSmallNumArr[boxCount],boxCount);
        drawBarText(ctx,i,350,50,50,"white",boxSmallNumArr[boxCount+16],boxCount+16);
    };
    if(ind<=15){
        drawCircle(circleXpos[ind],150,50,'black',5);
        if (boxSmallNumArr[ind] == value) {
            drawCircle(circleXpos[ind],150,50,'orange');
            return ind;
        }
        ind++;
    }else if(ind>=16 && ind<=31){
        drawCircle(circleXpos[ind-16],350,50,'black',5);    
        if (boxSmallNumArr[ind] == value) {
            drawCircle(circleXpos[ind-16],350,50,'orange',5);
            return ind;
        }
        ind++;
        if(ind==32){
            alert('Element not found in the current data set.');
            return
        }
    }
};

let lowIndex = 0;
let highIndex = 31;
function binarySearch() {
    let value = document.getElementById("numtofind").value;
    let midIndex = Math.floor((lowIndex + highIndex) / 2);
    ctx.clearRect(0, 0, cvWidth, cvHeight);
    let boxCount = -1;
    for(let i=30;i<=cvWidth-100;i+=50){
        boxCount++;
        drawBarText(ctx,i,150,50,50,"white",boxSmallNumArr[boxCount],boxCount);
        drawBarText(ctx,i,350,50,50,"white",boxSmallNumArr[boxCount+16],boxCount+16);
        circleXpos.push(i)
    }
    if(lowIndex>15){
        drawCircle(circleXpos[lowIndex-16],350,50,'black',5);
    }else{
        drawCircle(circleXpos[lowIndex],150,50,'black',5);
    }
    if(highIndex>15){
        drawCircle(circleXpos[highIndex-16],350,50,'black',5);
    }else{
        drawCircle(circleXpos[highIndex],150,50,'black',5);
    }
    if(midIndex>15){
        drawCircle(circleXpos[midIndex-16],350,50,'black',5);
    }else{
        drawCircle(circleXpos[midIndex],150,50,'black',5);
    }
    if(boxSmallNumArr[midIndex] == value){
        if(midIndex>15){
            drawCircle(circleXpos[midIndex-16],350,50,'orange',5);
        }else{
            drawCircle(circleXpos[midIndex],150,50,'orange',5);
        }
        return midIndex;
    }else if(boxSmallNumArr[midIndex] < value){
        lowIndex = midIndex + 1;
    }else{
        highIndex = midIndex - 1;
    }


}
function linSearch(linSearchspeed){
    let value = document.getElementById("numtofind").value;
    if(linSearchspeed.isTrusted){
        speed=500
    }else{
        speed=linSearchspeed;
    }
    if(value==""){
        alert("Please enter a number from the data set to find");
        return;
    }else{
        disableExecutionButtons();
        controllinSearch = setInterval(linearSearch, (1000-speed));
        return;
    }
}

function binSearch(binSearchspeed){
    let value = document.getElementById("numtofind").value;
    if(binSearchspeed.isTrusted){
        speed=500
    }else{
        speed=binSearchspeed;
    }
    if(value==""){
        alert("Please enter a number from the data set to find");
        return;
    }else{
        disableExecutionButtons();
        controlbinSearch = setInterval(binarySearch, (1000-speed));
        return;
    }
}
///////////////////////////////////////////////////////***///////////////////////

let boxLargeNumArr;
let circleSmallXpos = [];
function smallBoxes(){
    let alibi2 = [];
    for(let i =0;i<=10000;i++){
        alibi2.push(Math.round(Math.random()*1000))
        let some = new Set(alibi2);
        boxLargeNumArr = Array.from(some);    
        if(boxLargeNumArr.length==124){
            break;
        }
    };
    boxLargeNumArr.sort((a,b) => a-b);
    ctx.clearRect(0, 0, cvWidth, cvHeight);
    let boxLargeCount = -1;
    for(let i=30;i<=cvWidth-100;i+=25){
        boxLargeCount++;
        drawSmallBarText(ctx,i,50,25,25,"white",boxLargeNumArr[boxLargeCount],boxLargeCount);
        drawSmallBarText(ctx,i,150,25,25,"white",boxLargeNumArr[boxLargeCount+31],boxLargeCount+31);
        drawSmallBarText(ctx,i,250,25,25,"white",boxLargeNumArr[boxLargeCount+62],boxLargeCount+62);
        drawSmallBarText(ctx,i,350,25,25,"white",boxLargeNumArr[boxLargeCount+93],boxLargeCount+93);
        circleSmallXpos.push(i);
    }
}

function drawSmallBarText(ctx, upperLeftCornerX, upperLeftCornerY, width, height,color,int,boxCount){
    ctx.rect(upperLeftCornerX, upperLeftCornerY, width, height);
    ctx.fillStyle = color;
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.restore();
    ctx.textAlign = "center";
    ctx.font = "10px small-caption";
    ctx.strokeText(int, upperLeftCornerX+13, upperLeftCornerY+16);
    ctx.restore();

    ctx.textAlign = "center";
    ctx.strokeText(boxCount, upperLeftCornerX+15, upperLeftCornerY+43);
    ctx.restore();
};
function drawSmallCircle(upperLeftCornerX,upperLeftCornerY,width,color,linewidth){
    ctx.beginPath();
    ctx.arc(upperLeftCornerX+15, upperLeftCornerY+40, width/3, 0, 2 * Math.PI);
    ctx.lineWidth = linewidth;
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.restore();
}

let ind2 = 0;
function smalllinearSearch() {
    ctx.clearRect(0, 0, cvWidth, cvHeight);
    let value = document.getElementById("numtofind").value;
    let boxLargeCount = -1;
    for(let i=30;i<=cvWidth-100;i+=25){
        boxLargeCount++;
        drawSmallBarText(ctx,i,50,25,25,"white",boxLargeNumArr[boxLargeCount],boxLargeCount);
        drawSmallBarText(ctx,i,150,25,25,"white",boxLargeNumArr[boxLargeCount+31],boxLargeCount+31);
        drawSmallBarText(ctx,i,250,25,25,"white",boxLargeNumArr[boxLargeCount+62],boxLargeCount+62);
        drawSmallBarText(ctx,i,350,25,25,"white",boxLargeNumArr[boxLargeCount+93],boxLargeCount+93);
        circleSmallXpos.push(i)
    }
    if(ind2===124){
        return;
    }else if(ind2<=30){
        drawSmallCircle(circleSmallXpos[ind2],50,30,'black',3);
        if (boxLargeNumArr[ind2] == value) {
            drawSmallCircle(circleSmallXpos[ind2],50,30,'orange');
            return ind2;
        }
        ind2++;
    }else if(ind2>30 && ind2<=61){
        drawSmallCircle(circleSmallXpos[ind2-31],150,30,'black',3);    
        if (boxLargeNumArr[ind2] == value) {
            drawSmallCircle(circleSmallXpos[ind2-31],150,30,'orange',3);
            return ind2;
        }
        ind2++;
    }else if(ind2>61 && ind2<=92){
        drawSmallCircle(circleSmallXpos[ind2-62],250,30,'black',3);    
        if (boxLargeNumArr[ind2] == value) {
            drawSmallCircle(circleSmallXpos[ind2-62],250,30,'orange',3);
            return ind2;
        }
        ind2++;
    }else if(ind2>92 && ind2<=123){
        drawSmallCircle(circleSmallXpos[ind2-93],350,30,'black',3);    
        if (boxLargeNumArr[ind2] == value) {
            drawSmallCircle(circleSmallXpos[ind2-93],350,30,'orange',3);
            return ind2;
        }
        ind2++;
    }
};

let lowInd = 0;
let highInd = 123;
function smallbinarySearch() {
    let midInd = Math.floor((lowInd + highInd) / 2);
    ctx.clearRect(0, 0, cvWidth, cvHeight);
    let value = document.getElementById("numtofind").value;
    let boxLargeCount = -1;
    for(let i=30;i<=cvWidth-100;i+=25){
        boxLargeCount++;
        drawSmallBarText(ctx,i,50,25,25,"white",boxLargeNumArr[boxLargeCount],boxLargeCount);
        drawSmallBarText(ctx,i,150,25,25,"white",boxLargeNumArr[boxLargeCount+31],boxLargeCount+31);
        drawSmallBarText(ctx,i,250,25,25,"white",boxLargeNumArr[boxLargeCount+62],boxLargeCount+62);
        drawSmallBarText(ctx,i,350,25,25,"white",boxLargeNumArr[boxLargeCount+93],boxLargeCount+93);
        circleSmallXpos.push(i)
    }
    if(lowInd<=30){
        drawSmallCircle(circleSmallXpos[lowInd],50,30,'black',3);
    }else if(lowInd>30 && lowInd<=61){
        drawSmallCircle(circleSmallXpos[lowInd-31],150,30,'black',3);
    }else if(lowInd>61 && lowInd<=92){
        drawSmallCircle(circleSmallXpos[lowInd-62],250,30,'black',3);
    }else if(lowInd>92 && lowInd<=123){
        drawSmallCircle(circleSmallXpos[lowInd-93],350,30,'black',3);
    }
    if(highInd<=30){
        drawSmallCircle(circleSmallXpos[highInd],50,30,'black',3);
    }else if(highInd>30 && highInd<=61){
        drawSmallCircle(circleSmallXpos[highInd-31],150,30,'black',3);
    }else if(highInd>61 && highInd<=92){
        drawSmallCircle(circleSmallXpos[highInd-62],250,30,'black',3);
    }else if(highInd>92 && highInd<=123){
        drawSmallCircle(circleSmallXpos[highInd-93],350,30,'black',3);
    }
    if(midInd<=30){
        drawSmallCircle(circleSmallXpos[midInd],50,30,'black',3);
    }else if(midInd>30 && midInd<=61){
        drawSmallCircle(circleSmallXpos[midInd-31],150,30,'black',3);
    }else if(midInd>61 && midInd<=92){
        drawSmallCircle(circleSmallXpos[midInd-62],250,30,'black',3);
    }else if(midInd>92 && midInd<=123){
        drawSmallCircle(circleSmallXpos[midInd-93],350,30,'black',3);
    }
    if(boxLargeNumArr[midInd] == value){
        if(midInd<=30){
            drawSmallCircle(circleSmallXpos[midInd],50,30,'orange',3);
        }else if(midInd>30 && midInd<=61){
            drawSmallCircle(circleSmallXpos[midInd-31],150,30,'orange',3);
        }else if(midInd>61 && midInd<=92){
            drawSmallCircle(circleSmallXpos[midInd-62],250,30,'orange',3);
        }else if(midInd>92 && midInd<=123){
            drawSmallCircle(circleSmallXpos[midInd-93],350,30,'orange',3);
        }
        return midInd;
    }else if(boxLargeNumArr[midInd] < value){
        lowInd = midInd + 1;
    }else{
        highInd = midInd - 1;
    }
}
function largeDSlinSearch(largeDSlinSearchspeed){
    let value = document.getElementById("numtofind").value;
    if(largeDSlinSearchspeed.isTrusted){
        speed=500
    }else{
        speed=largeDSlinSearchspeed;
    }
    if(value==""){
        alert("Please enter a number from the data set to find");
        return;
    }else{
        disableExecutionButtons();
        controllargeDSlinSearch = setInterval(smalllinearSearch, (1000-speed));
        return;
    }
}

function largeDSbinSearch(largeDSbinSearchspeed){
    let value = document.getElementById("numtofind").value;
    if(largeDSbinSearchspeed.isTrusted){
        speed=500
    }else{
        speed=largeDSbinSearchspeed;
    }
    if(value==""){
        alert("Please enter a number from the data set to find");
        return;
    }else{
        disableExecutionButtons();
        controllargeDSbinSearch = setInterval(smallbinarySearch, (1000-speed));
        return;
    }
}

///////////////////////**********************////////////////////////////// */
//////////sorting algos/////////////////
let actArr;
let xPos;
let i = 0;
function newArr(){
    actArr = [];
    xPos = [];
    ctx.clearRect(0, 0, cvWidth, cvHeight);
    for(let i=30;i<=cvWidth-60;i+=20){
        let height = -Math.round(Math.random()*100);
        drawBar(ctx,i,250,15,height,"#FF0000");
        actArr.push(Math.abs(height));
        xPos.push(i);
    }
    

}
function drawBar(ctx, upperLeftCornerX, upperLeftCornerY, width, height,color){
    ctx.save();
    ctx.fillStyle=color;
    ctx.fillRect(upperLeftCornerX,upperLeftCornerY,width,height*2);
    ctx.restore();
    ctx.textAlign = "center";
    ctx.fillText(Math.abs(height), upperLeftCornerX+7, upperLeftCornerY+10);
    ctx.restore();
};


function selectionSort(){
    if(i==actArr.length){
        clearInterval(setSelect)
    }else{
        let len = actArr.length;
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (actArr[min] > actArr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = actArr[i];
            actArr[i] = actArr[min];
            actArr[min] = tmp;
        }
        ctx.clearRect(0, 0, cvWidth, cvHeight);
        let count1 = -1;
        for(let j=30;j<=cvWidth-60;j+=20){
            count1+=1;
            drawBar(ctx,j,250,15,-actArr[count1],"#FF0000");
        }
        i++;
    };
}


function stopFunc(x){
    let sortArr = [...actArr];
    sortArr.sort((a,b)=>a-b);
    for(let i=0;i<=x.length+1;i++){
        if(sortArr[i]==x[i]){
            continue;
        }else{
            return false;
        }
    }return true;
};

function bubbleSort() {
    if(stopFunc(actArr)){
        clearInterval(controlsetBubble)
    }else{
        ctx.clearRect(0, 0, cvWidth, cvHeight);
        if (actArr[i] > actArr[i + 1]) {
            let tmp = actArr[i];
            actArr[i] = actArr[i + 1];
            actArr[i + 1] = tmp;
        }
        let count2 = -1;
        ctx.clearRect(0, 0, cvWidth, cvHeight);
        for(let k of xPos){
            count2+=1;
            if(xPos.indexOf(k)==i){
                drawBar(ctx,xPos[i],250,15,-actArr[i],"green");
            }else{
                drawBar(ctx,k,250,15,-actArr[count2],"#FF0000");
            }
        };
        i++;
        if(i==39){
            i=0;
        };
    }
};
       
function setSelect(setSelectspeed){
    console.log(setSelectspeed);
    if(setSelectspeed.isTrusted){
        speed=500
    }else{
        speed=setSelectspeed
    }
    disableExecutionButtons();
    controlsetSelect = setInterval(selectionSort, (1000-speed));
    return;
}


function setBubble(setBubblespeed){
    console.log(setBubblespeed);
    if(setBubblespeed.isTrusted){
        speed=500
    }else{
        speed=setBubblespeed;
    }
    disableExecutionButtons();
    controlsetBubble = setInterval(bubbleSort, (1000-speed));
    return;
}



rangeslider.oninput = () => {
    output.innerHTML = rangeslider.value;
    if(controlsetBubble){
        clearInterval(controlsetBubble);
        setBubble(rangeslider.value);
    }else if(controlsetSelect){
        clearInterval(controlsetSelect);
        setSelect(rangeslider.value);
    }else if(controllargeDSbinSearch){
        clearInterval(controllargeDSbinSearch);
        largeDSbinSearch(rangeslider.value);
    }else if(controllargeDSlinSearch){
        clearInterval(controllargeDSlinSearch);
        largeDSlinSearch(rangeslider.value);
    }else if(controlbinSearch){
        clearInterval(controlbinSearch);
        binSearch(rangeslider.value);
    }else if(controllinSearch){
        clearInterval(controllinSearch);
        linSearch(rangeslider.value);
    }
};