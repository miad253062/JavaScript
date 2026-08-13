const countWord = (words) => {
    const wordCount = words.reduce((acc, currentValue) => {
        if(acc[currentValue]){
            acc[currentValue]++
        }else{
            acc[currentValue] = 1;
        }

        return acc;
    }, {})
    return wordCount;
}


const mostFrequent = (words) => {
    const wordCount = words.reduce((acc, currentValue) => {
        if(acc[currentValue]){
            acc[currentValue]++
        }else{
            acc[currentValue] = 1;
        }

        return acc;
    }, {});

    const theWord = Object.entries(wordCount).sort((a, b) => b[1] - a[1])[0][0];
    return theWord;

}

const salaryByDept = (employees) => {
    let result = employees.reduce((acc, currentValue) => {
        if(acc[currentValue.department]){
            acc[currentValue.department] += currentValue.salary;
        }else{
            acc[currentValue.department] = currentValue.salary;
        }

        return acc;
    }, {})

    return result;
}

const highestSalaryDepartment = (employees) => {
    let result = employees.reduce((acc, currentValue) => {
        if(acc[currentValue.department]){
            acc[currentValue.department] += currentValue.salary;
        }else{
            acc[currentValue.department] = currentValue.salary;
        }

        return acc;
    }, {})

    return Object.entries(result).sort((a, b) => b[1] - a[1])[0][0];
}

const margeSameProducts = (products) =>{
    let result = products.reduce((acc, currentValue) => {
        if(acc[currentValue.product]){
            acc[currentValue.product] += currentValue.quantity;
        }else{
            acc[currentValue.product] = currentValue.quantity;
        }

        return acc;

    }, {})
    return Object.entries(result).map(product => {
        return {product: product[0], quantity: product[1]};
    });
}


const mostExpensiveCategory = (products) => {
    let result = products.reduce((acc, currentValue) => {
        if(acc[currentValue.category]){
            acc[currentValue.category] += currentValue.price;
        }else{
            acc[currentValue.category] = currentValue.price;
        }

        return acc;

    }, {})
    return Object.entries(result).map(product => {
        return {category: product[0], price: product[1]};
    }).sort((a, b) => b.price -a.price)[0].category;
}


const evenNumberUsingReduce = (numbers) => {
    return numbers.reduce((acc, currentNumber) => {
        if(!acc.includes(currentNumber) && currentNumber % 2 === 0){
            acc.push(currentNumber)
        }
        return acc;
    }, [])
}



const getTopStudent = (students) => {
    const avgMarks = students.map((student => ({name: student.name, avg: student.marks.reduce((acc, currentNumber) => {return acc+currentNumber}, 0)/student.marks.length})))
    const bestStudent = avgMarks.reduce((best, student) => {return (best.avg > student.avg)? best: student})
    return bestStudent;
}




const students = [
  { name: "Rahim", marks: [80, 75, 90] },
  { name: "Karim", marks: [60, 55, 70] },
  { name: "Hasan", marks: [95, 90, 92] },
  { name: "Sakib", marks: [40, 50, 45] }
];

console.log(getTopStudent(students))