// 
let count = 0;

// arrayPie

// data跑arrPie()
let data1 = ['50','38.875',29,75,66.6,90.5,111,200,60];
let arrayPie = document.querySelector('.arrayPie');
let dataPie = document.querySelector('.dataPie');

for(i=0;i<data1.length;i++){   
    arrPie(dataPie,data1[i],'powderblue',160);
}

// 創建一般資料用Pie
function arrPie(elm,number,color,size){
    // number限制
    if(number>100){
        return false;
    }
    // 元件,數字(number/string),顏色(string),大小(number/string)
    let el = elm;
    let div = document.createElement('div');
    // 四捨五入到小數後兩位
    let num = Math.round(number*100) / 100;
    let deg = num*3.6;
    div.setAttribute("class","pie");

    // 
    div.innerHTML=
    `
        <div class="pieLeft pieHalf"></div>
        <div class="pieRight pieHalf"></div>
        <div class="pieNum">%</div>
    `;
           
    // if(deg<181){
    //     div.innerHTML=
    //     `
    //         <div class="pieLeft pieHalf" ></div>
    //         <div class="pieRight pieHalf" style="transform: rotate(${deg}deg)"></div>
    //         <div class="pieNum">${num}%</div>
    //     `;

    // }else{
    //     div.innerHTML=
    //     `
    //         <div class="pieLeft pieHalf" style="transform: rotate(${deg}deg);background-color: tomato"></div>
    //         <div class="pieRight pieHalf" style="background-color: transparent" ></div>
    //         <div class="pieNum">${num}%</div>
    //     `;
    // }
    
    el.append(div);

    div.style.backgroundColor=color;
    div.style.width=size+"px";
    div.style.height=size+"px";
    // 數字動畫
    let countRun = setInterval(() => {
        counter(div.children[2]);
    }, 10);

    // 
    setTimeout(() => {
    // 清除數字動畫
        clearInterval(countRun);

        if(deg<181){
            div.children[1].style.transition="1s ease-in-out";    
            div.children[1].style.transform=`rotate(${deg}deg)`;
            div.children[2].innerText=`${num}%`;
        }else{
            div.children[0].style.backgroundColor="tomato";
            div.children[0].style.transition="0.8s ease-in-out";
            div.children[0].style.transform=`rotate(${deg}deg)`;
            div.children[1].style.transition="0.3s ease-in-out";
            // div.children[1].style.transform=`rotate(${deg}deg)`;
            div.children[1].style.backgroundColor="transparent";
            div.children[2].innerText=`${num}%`;
        }   
    }, 500);
    
}

// 數字動畫
function counter(el){
    count++;
    if(count === 100){
        count = 0;
    }
    el.innerText= count+"%"  
}


// 
let data3 = [
{num:55,color:"teal",size:200},
{num:35.8,color:"pink",size:160},
{num:92.75,color:"gold",size:120},
{num:77.15,color:"turquoise",size:100},
{num:16.7,color:"yellowgreen",size:80}];
// console.log(data3[0].num);

// data3.forEach(el=>arrPie(arrayPie,el.num,el.color,el.size))

// 
let dataBtn = document.querySelectorAll('.data');

// console.log(dataBtn);

dataBtn.forEach(el=>el.addEventListener('click',choiceData));

// dataBtn.addEventListener('click',function(){
//     console.log(this);
// })

function choiceData(){
    console.log(this.innerText);
    dataBtn.forEach(el=>el.classList.remove('active'));
    this.classList.add('active');
    let removePie = document.querySelectorAll('.dataPie .pie');
    // arrayPie.removeChild(dataPie);
    // let datadocument.createElement('div');
    removePie.forEach(el=>el.remove());
    
    if(this.innerText==='data1'){
        data1.forEach(el=>arrPie(dataPie,el,'powderblue',160));
    }else{
        data3.forEach(el=>arrPie(dataPie,el.num,el.color,el.size));
    }
 
}




// controlPie

// 
let controlPie = document.querySelector('.controlPie');

function ctrlPie(elm,color,size){
   let el = elm;
   let div = document.createElement('div');
   div.setAttribute("class","ctrlPie");
   div.innerHTML=
    `    
        <div class="pie">
            <div class="pieLeft pieHalf"></div>
            <div class="pieRight pieHalf"></div>
            <div class="pieNum">0%</div>
        </div>
        <input class="control" type="range" min="0" max="100" step="1" value="0"></input>  
    `;
    el.append(div);

    div.children[0].style.backgroundColor=color;
    div.style.width=(size+10)+"px";
    div.children[0].style.width=size+"px";
    div.children[0].style.height=size+"px";

    // console.log(div);

    // input = div.children[1];
    // num = div.children[0].children[2];

    let input = div.children[1];
    let num = div.children[0].children[2];
    input.addEventListener("input",function(){
        // console.log(input);
        num.innerText=input.value+"%";
        if(input.value<51){   
            div.children[0].children[1].style.transform=`rotate(${input.value*3.6}deg)`;
            div.children[0].children[0].style.transform=`rotate(0deg)`;
            div.children[0].children[1].style.backgroundColor="inherit";
            div.children[0].children[0].style.backgroundColor="inherit";

        }else{
            div.children[0].children[1].style.transform=`rotate(180deg)`;
            div.children[0].children[0].style.backgroundColor="tomato";
            div.children[0].children[0].style.transform=`rotate(${input.value*3.6}deg)`;
            div.children[0].children[1].style.backgroundColor="transparent";
        }
    })
}
ctrlPie(controlPie,"pink",200);
ctrlPie(controlPie,"teal",100);


// inputPie

// 
let inputPie = document.querySelector('.inputPie');
let data2 = [24.7,88.3,67];

data2.forEach(el=>inPie(inputPie,el));


function inPie(elm,number){
    console.log(number);
    if(number>100){
        return false;
    }
    let el = elm;
    let cou = 0;
    let num = Math.round(number*100) / 100;
    // let deg = num*3.6;
    let div = document.createElement('div');
    div.setAttribute("class","pie");

    // 
    div.innerHTML=
    `
        <div class="pieLeft pieHalf"></div>
        <div class="pieRight pieHalf"></div>
        <div class="pieNum">%</div>
    `;
    el.append(div);

    let run = setInterval(() => {
        
        
        if(cou===Math.round(num)){
          cou = num;
          clearInterval(run);
        }
        

        if(cou<51){
            // div.children[1].style.transition="1s ease-in-out";    
            div.children[1].style.transform=`rotate(${cou*3.6}deg)`;
            div.children[2].innerText=`${cou}%`;
        }else{
            div.children[0].style.backgroundColor="tomato";
            // div.children[0].style.transition="0.8s ease-in-out";
            div.children[0].style.transform=`rotate(${cou*3.6}deg)`;
            // div.children[1].style.transition="0.3s ease-in-out";
            // div.children[1].style.transform=`rotate(${deg}deg)`;
            div.children[1].style.backgroundColor="transparent";
            div.children[2].innerText=`${cou}%`;
        } 

        cou++;



    }, 10);



}

inPie(inputPie,10);
// 
let inputNum = document.querySelector('#inputNum');


inputNum.addEventListener('change',function(){
    if(inputNum.value>100){
        return false;
    }
    let pie = document.querySelectorAll('.inputPie .pie');
    // console.log(pie);
    inputPie.removeChild(pie[3]);
    inPie(inputPie,inputNum.value);
})

