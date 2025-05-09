let boxes=document.querySelectorAll(".box");
let rset=document.querySelector(".rsetbtn");
let newrset=document.querySelector("#newbtn");
let msgc=document.querySelector(".msgcont");
let msg=document.querySelector("#msg");

let turn0=true;
let count=0;

const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetGame=()=>{
    turn0=true;count=0;
    enableBoxes();
    msgc.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0)
        {
            box.innerText="O";
            turn0=false;
            box.style.color="#b0413e";
        }
        else
        {
            box.innerText="X";
            turn0=true;
            box.style.color="blue";
        }
        box.disabled=true;
        checkWinner();
        count++;
    });
});

const disableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
        msg.innerHTML=`<marquee>Congratulations, Winner is ${winner}</marquee>`;
        msgc.classList.remove("hide");
        disableBoxes();
};
const checkWinner=()=>{
    for(let pattern of win){
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if( val1!="" && val2!="" && val3!="")
        {
            if(val1===val2 && val2===val3)
            {
                console.log("winner",val1);
                showWinner(val1);
            }
            else if (count===8) {
                msg.innerHTML="<marquee>Match is Draw, IDIOTS!!</marquee>";
                msgc.classList.remove("hide");
            }
        }
    }
};

newrset.addEventListener("click",resetGame);
rset.addEventListener("click",resetGame);