function calculateGrade(score){
    let =grade
    if(score>=90){
        grade='A'
    }
    else if(score>=80){
        grade='B'
    }
    else if(score>=70){
        grade='C'
    }
    else if(score>=60){
        grade='D'
    }
    else{
        grade='F'
    }
    return grade
}
let studentscore=86
let studentGrade=calculateGrade(studentscore)

console.log("Student score :" +studentscore)
console.log("Student Grade :" +studentGrade)