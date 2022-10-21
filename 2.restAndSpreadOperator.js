const classTen = {
    classTeacher: "Mr. X",
    students: 67,
    goodAt: {
        math: 20,
        english: 10,
        science: 17,
        others: 20
    }
}

let array = ["math", "science", "ict", "english", "bangla"];

//rest
const [first, second, ...rest] = array;

//spread operator
const teacherObj = {
    classTeacher: "MR. Y",
    institute: "GOVT School;"
}
const details = {...classTen, ...teacherObj};

const sumOfAllNum = (...numbers) =>{
  return numbers.reduce((sum,num) => sum + num, 0)
}

const result = sumOfAllNum(2, 3,4, 5, 6);
console.log(result);