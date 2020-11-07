// 宣告
let count = 0;
// data 數值array
let data1 = ['50','38.875',29,75,66.6,90.5,111,200,60];
let data2 = [24.7,88.3,67];
// data 物件array
let data3 = [
    // {num:數字,color:"顏色",size:數字}
    {num:55,color:"teal",size:200},
    {num:35.8,color:"pink",size:160},
    {num:92.75,color:"gold",size:120},
    {num:77.15,color:"turquoise",size:100},
    {num:16.7,color:"yellowgreen",size:80}];
let arrayPie = document.querySelector('.arrayPie');
let dataPie = document.querySelector('.dataPie');
let dataBtn = document.querySelectorAll('.data');

// arrayPie部分

// data資料跑arrPie()
// arrPie(元件,數字(number/string),顏色(string),大小(number/string))
for(i=0;i<data1.length;i++){   
    arrPie(dataPie,data1[i],'powderblue',160);
}

// 監聽事件
dataBtn.forEach(el=>el.addEventListener('click',choiceData));

// 創建一般資料用Pie
// 元件,數字(number/string),顏色(string),大小(number/string)
function arrPie(elm,number,color,size){
    // number限制
    if(number>100 || number<0){
        return false;
    }
    // 宣告
    let el = elm;
    // 四捨五入到小數後兩位
    let num = Math.round(number*100) / 100;
    let deg = num*3.6;
    let div = document.createElement('div');
    div.setAttribute("class","pie");
    // 
    div.innerHTML=
    `
        <div class="pieLeft pieHalf"></div>
        <div class="pieRight pieHalf"></div>
        <div class="pieNum">%</div>
    `;
    // append完，再改輸入style
    el.append(div);
    div.style.backgroundColor=color;
    div.style.width=size+"px";
    div.style.height=size+"px";
    // 數字動畫
    let countRun = setInterval(() => {
        counter(div.children[2]);
    }, 10);

    // 跑一次數值%style
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

function choiceData(){

    let removePie = document.querySelectorAll('.dataPie .pie');
    // 移除class active 
    dataBtn.forEach(el=>el.classList.remove('active'));
    this.classList.add('active');
    // 移除pie
    removePie.forEach(el=>el.remove());
    // 更新選擇的data跑arrPie
    if(this.innerText==='data1'){
        data1.forEach(el=>arrPie(dataPie,el,'powderblue',160));
    }else{
        data3.forEach(el=>arrPie(dataPie,el.num,el.color,el.size));
    }
 
}


// controlPie部分

// 宣告
let controlPie = document.querySelector('.controlPie');
// ctrlPie(物件,顏色(string),size(number))
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
    // append完，再改輸入設定style
    el.append(div);
    div.children[0].style.backgroundColor=color;
    div.style.width=(size+10)+"px";
    div.children[0].style.width=size+"px";
    div.children[0].style.height=size+"px";

    let input = div.children[1];
    let num = div.children[0].children[2];
    // 監聽事件
    input.addEventListener("input",function(){
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
// 跑ctrlPie
ctrlPie(controlPie,"pink",200);
ctrlPie(controlPie,"teal",100);


// inputPie部分

// 宣告
let inputPie = document.querySelector('.inputPie');
let inputNum = document.querySelector('#inputNum');

data2.forEach(el=>inPie(inputPie,el));

// 監聽事件
inputNum.addEventListener('change',function(){
    if(inputNum.value>100){
        return false;
    }
    let pie = document.querySelectorAll('.inputPie .pie');
    inputPie.removeChild(pie[3]);
    inPie(inputPie,inputNum.value);
})

// inPie(元件，number(number))
function inPie(elm,number){
    if(number>100){
        return false;
    }
    let el = elm;
    let cou = 0;
    // 四捨五入到小數後兩位
    let num = Math.round(number*100) / 100;
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
    // 跑完移除
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
// 
inPie(inputPie,10);

