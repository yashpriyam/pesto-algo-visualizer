let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let cvWidth = $('canvas').attr('width');
let cvHeight = $('canvas').attr('height');

let boxSmallNumArr = [];
let circleXpos = [];
function largeBoxes(){
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
    // location.reload(true);
}


function drawBarText(ctx, upperLeftCornerX, upperLeftCornerY, width, height,color,int,boxCount){
    //for drawing bars
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
    // console.log(boxSmallNumArr);
    // console.log(circleXpos);
    ctx.clearRect(0, 0, cvWidth, cvHeight);
    let boxCount = -1;
    let value = document.getElementById("numtofind").value;
    for(let i=30;i<=cvWidth-100;i+=50){
        boxCount++;
        drawBarText(ctx,i,150,50,50,"white",boxSmallNumArr[boxCount],boxCount);
        drawBarText(ctx,i,350,50,50,"white",boxSmallNumArr[boxCount+16],boxCount+16);
        // circleXpos.push(i)
        // console.log(i);
    }
    
    if(ind===33){
        return;
    }else if(ind<=15){
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
    }
};

// console.log(boxSmallNumArr.length);

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
        // console.log(i);
    }
    // console.log(lowIndex,highIndex,midIndex);
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
function linSearch(){
    let value = document.getElementById("numtofind").value;
    if(value==""){
        alert("Please enter a number from the data set to find");
        return;
    }else{
        setInterval(linearSearch,500)
    }
}

function binSearch(){
    let value = document.getElementById("numtofind").value;
    if(value==""){
        alert("Please enter a number from the data set to find");
        return;
    }else{
        setInterval(binarySearch,1000)
    }
}
// console.log(Object.keys(window));
// console.log(Object.values(window));
///////////////////////////////////////////////////////***///////////////////////

let boxLargeNumArr;
let circleSmallXpos = [];
function smallBoxes(){
    // location.reload(true);
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
        circleSmallXpos.push(i)
        // console.log(i);
    }
}
// console.log(boxLargeNumArr);

function drawSmallBarText(ctx, upperLeftCornerX, upperLeftCornerY, width, height,color,int,boxCount){
    //for drawing bars
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
        // console.log(i);
    }
    if(ind2===124){
        return;
    }else if(ind2<=30){
        // drawBar(circleSmallXpos[ind2],150,'black');
        drawSmallCircle(circleSmallXpos[ind2],50,30,'black',3);
        // drawBarText(ctx,circleSmallXpos[ind2],150,50,50,"white",boxSmallNumArr[ind2],ind2);
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
        // console.log(i);
    }
    // console.log(lowInd,highInd,midInd);
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
function smallBoxlinSearch(){
    let value = document.getElementById("numtofind").value;
    if(value==""){
        alert("Please enter a number from the data set to find");
        return;
    }else{
        setInterval(smalllinearSearch,500)
    }
}

function smallBoxbinSearch(){
    let value = document.getElementById("numtofind").value;
    if(value==""){
        alert("Please enter a number from the data set to find");
        return;
    }else{
        setInterval(smallbinarySearch,500)
    }
}

///////////////////////**********************////////////////////////////// */

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
        // console.log(i);
    }
    // console.log(actArr);
// console.log(xPos);
}
// newArr();
function drawBar(ctx, upperLeftCornerX, upperLeftCornerY, width, height,color){
    //for drawing bars
    ctx.save();
    ctx.fillStyle=color;
    ctx.fillRect(upperLeftCornerX,upperLeftCornerY,width,height*2);
    ctx.restore();
    //for writing text:
    ctx.textAlign = "center";
    ctx.fillText(Math.abs(height), upperLeftCornerX+7, upperLeftCornerY+10);
    ctx.restore();
};
// console.log(actArr);

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


function stopFucn(x){
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
    if(stopFucn(actArr)){
        // console.log(stopFucn(actArr));
        clearInterval(setBubble)
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
        }
        
        i++;
        if(i==39){
            i=0;
        }
    }
};
       
function setSelect(){
    setInterval(selectionSort, 25);
}
function setBubble(){
    setInterval(bubbleSort, 50);
}
