const colors =["Red","Green","Blue","Yellow","Orange"];
var ind=[0,0,0,0,0];
var res=[0,0,0,0,0];
var cols=[];

function newGame(){
    document.getElementsByClassName("ans")[0].style.display="none";
    for(let m=0;m<6;m++){
        res[m]=0;
    }
    for(let n=1;n<6;n++){
        let col = Math.floor(Math.random()*5);
        let id="name"+n;
        let name = document.getElementById(id);
        name.innerHTML=colors[col];
        cols.push(col+1);
        let idn="b"+n;
        let ele=document.getElementById(idn);
        ele.style.backgroundColor = "white";
    }
    
}

function colChange(i){
    ind[i-1]++;
    if (ind[i-1]>5){
        ind[i-1]-=5;
    }
    let id="b"+i;
    let ele=document.getElementById(id);
    ele.style.backgroundColor=colors[ind[i-1]-1];
}

function submit(){

    console.log(cols,ind);
    for (let ix=0;ix<5;ix++){
        if (cols[ix]===ind[ix]){
            res[ix]=1;
        }else{
            res[ix]=0;
        }
    }
}

function showResult(){
    console.log(cols,ind);
    for (let ix=0;ix<5;ix++){
        let rid='m'+(ix+1);
        if (res[ix]==1){
            document.getElementById(rid).innerHTML="Passed";
            document.getElementById(rid).style.color="green";
        }else{
            document.getElementById(rid).innerHTML="Failed";
            document.getElementById(rid).style.color="red";
        }
    }
    document.getElementsByClassName("ans")[0].style.display="flex";
}