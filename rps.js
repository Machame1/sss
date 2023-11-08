const score= {
    wins:0,
    loses:0,
    ties:0
};

//  document.getElementById('hi').innerHTML=`wins:${score.wins} loses:${score.loses} ties:${score.ties}`;
syam();

function player(game){
    const com=pick();
let res='';
if(game==='scissors'){    
if(com==='rock'){
    res='you lose';
}
else if(com==='paper'){
    res='you win';
}
else if(com==='scissors'){
    res='tie';
}
} 
else if(game==='paper'){    
if(com==='rock'){
    res='you win';
}
else if(com==='paper'){
    res='tie';
}
else if(com==='scissors'){
    res='you lose';
 } }

else if(game==='rock'){    
if(com==='rock'){ 
    res='tie';
}
else if(com==='paper'){
    res='you lose';
}
else if(com==='scissors'){
    res='you win';
} 
}
if(res==='you win'){
score.wins+=1;
}
else if(res==='you lose'){
score.loses+=1;
}
else if(res==='tie'){
score.ties+=1;
}
// document.getElementById('hi').innerHTML=`wins:${score.wins} loses:${score.loses} ties:${score.ties}`
syam();
document.getElementById('sam').
innerHTML=res;
document.getElementById('she').innerHTML=
` you choose <img src="${game}-emoji.png " class="rock"> computer choose <img src="${com}-emoji.png " class="rock">

`
// document.querySelector('.sam').innerHTML=res;
//document.querySelector('.sum').innerHTML=`you ${game}-${com}computer`;

}  
function syam(){
document.getElementById('hi').innerHTML=`wins:${score.wins} loses:${score.loses} ties:${score.ties}`


}
function pick(){       
const r =Math.random();
    let com=''; 

    
    if(r>=0&&r<1/3){
       com='rock'; 
    }
    else if(r>=1/3&&r<2/3){
        com='paper';
    }
    else if (r>=2/3&&r<1){
        com='scissors';
    }
    return com;
}