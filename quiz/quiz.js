var count=0;
var right=0;
var submit=document.getElementById('submit');
var correct=document.getElementById('correct');
var wrong=document.getElementById('wrong');
var next=document.getElementById('next');
var title=document.getElementById('title');
var t1=document.getElementById('o11');
var t2=document.getElementById('o22');
var t3=document.getElementById('o33');
var t4=document.getElementById('o44');
var o1=document.getElementById('o1');
var o2=document.getElementById('o2');
var o3=document.getElementById('o3');
var o4=document.getElementById('o4');
var ques=document.getElementById('ques');
o1.checked=false;
o2.checked=false;
o3.checked=false;
o4.checked=false;



var t=[
{ques: "A complete graph can have",
option:['n2 spanning tree','nn-2 spanning tree','nn-2 spanning tree','nn-2 spanning tree'],
ans :0
}
,
{ques: "What is full form of CSS",
option:['Java','Bootstrap','HTML','None of these'],
ans :3
}
,
{ques: "Which of the following attribute can hold the JavaScript version",
option:['LANGUAGE','SCRIPT','VERSION','None of the above'],
ans :0
}

,
{ques: "What => means in javascript",
option:['Complete Function','Asynchronous Function','Arrow Function','Power Function'],
ans :1
}
,
{ques: "What is output of '2'+2",
option:['22','4','0','None of these'],
ans :0
}
,
{ques: "What is output of '2'-1 ",
option:['1','21','2','None of these'],
ans :0
}
,
{ques: "Which of these is not a valid js version",
option:['EX19','EX05','EX06','None of these'],
ans :0
}
,
{ques: "How to define arrays in javascript",
option:['[]','()','<>','None of these'],
ans :0
}
,
{ques: "How to define object in javascript",
option:['{}','()','<>','None of these'],
ans :0
}

]
display();
//finish();
function display()
{
    ques.innerHTML=t[count].ques
;    //var t1=document.getElementById('o11');
    t1.innerHTML=t[count].option[0];
    //ar t2=document.getElementById('o22');
    t2.innerHTML=t[count].option[1];
    //var t3=document.getElementById('o33');
    t3.innerHTML=t[count].option[2];
    //var t4=document.getElementById('o44');
    t4.innerHTML=t[count].option[3];
}    
    function check()
    { var d=-1;
    
        if(o1.checked===true)
         d=0;
         else if(o2.checked==true)
         d=1;
          else if(o3.checked==true)
         d=2;
          else if(o4.checked==true)
         d=3;
         if(d==-1)
         alert("Please select One Option");
         else
         {
             if(d==t[count].ans)
            {correct.style.display='block';
                

            right++;}
            else
            wrong.style.display='block';
            submit.style.display='none';
            next.style.display='block';
         }
       
    }

    function next1()
    {
        next.style.display='none';
        submit.style.display='block';
        correct.style.display='none';
        wrong.style.display='none';
        count++;
        o1.checked=false;
        o2.checked=false;
        o3.checked=false;
        o4.checked=false;
        if(count==9)
        finish();
        if(count<=8)
        display();
    } 
function finish()
{
    document.getElementById("t1").style.display='none';
        document.getElementById("restart").style.display='block';
        title.innerHTML='Score: '+right;

    var table2=document.getElementById("ta2");
    table2.style.display='block';
    var p1=document.getElementById('q1');
    var p2=document.getElementById('a1');
    p1.innerHTML=(t[0].ques);
    p2.innerHTML=t[0].option[t[0].ans];

    var Q2=document.getElementById("q2");
    var A2=document.getElementById("a2");
    Q2.innerHTML=t[1].ques;
    A2.innerHTML=t[1].option[t[1].ans];

    var Q3=document.getElementById("q3");
    var A3=document.getElementById("a3");
    Q3.innerHTML=t[2].ques;
    A3.innerHTML=t[2].option[t[2].ans];

    var Q4=document.getElementById("q4");
    var A4=document.getElementById("a4");
    Q4.innerHTML=t[3].ques;
    A4.innerHTML=t[3].option[t[3].ans];

    var Q5=document.getElementById("q5");
    var A5=document.getElementById("a5");
        Q5.innerHTML=t[4].ques;
    A5.innerHTML=t[4].option[t[4].ans];

    var Q6=document.getElementById("q6");
    var A6=document.getElementById("a6");
     Q6.innerHTML=t[5].ques;
    A6.innerHTML=t[5].option[t[5].ans];

    var Q7=document.getElementById("q7");
    var A7=document.getElementById("a7");
    Q7.innerHTML=t[6].ques;
    A7.innerHTML=t[6].option[t[6].ans];

    var Q8=document.getElementById("q8");
    var A8=document.getElementById("a8");
        Q8.innerHTML=t[7].ques;
    A8.innerHTML=t[7].option[t[7].ans];

    var Q9=document.getElementById("q9");
    var A9=document.getElementById("a9");
        Q9.innerHTML=t[8].ques;
    A9.innerHTML=t[8].option[t[8].ans];

}

function re()
{
    count=0;
    right=0;
        document.getElementById("t1").style.display='block';
            var table2=document.getElementById("ta2");
    table2.style.display='none';
    title.innerHTML='Quiz';
      document.getElementById("restart").style.display='none';
    display();
}