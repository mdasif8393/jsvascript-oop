let array = ["math", "science", "ict", "english", "bangla"];

const [first, second, ...forth] = array;

// console.log(first, second, forth);

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

const {classTeacher, goodAt: {math, english}} = classTen;

const individualNum = (option) => {
    const {math , english} = option;

    return [math + english , math - english]
}

const result = individualNum({math: 82, english: 60});

const [sum, much] = result;
console.log(sum, much);