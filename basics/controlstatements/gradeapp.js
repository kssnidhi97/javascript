let getMyGrade = function(currentMarks,totalMarks){
    myPercentage=(currentMarks/totalMarks)*100;
    let myGrade;
    if(myPercentage>=90){
        myGrade='A';
    } else if(myPercentage>=80){
        myGrade='B';
    }
    else if(myPercentage>=70){
        myGrade='C';
    }
    else if(myPercentage>=60){
        myGrade='D';
    }
    else if(myPercentage>=50){
        myGrade='E';
    }
    else{
        myGrade='F';
    }
    return `My grade is ${myGrade} and percentage is ${myPercentage}`
};
let hi=getMyGrade(90,100);
console.log(hi);