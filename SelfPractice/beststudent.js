function bestStudent(students){
    let summeryOfStudents = []
    for(const student of students){
        let totalMarks = 0;
        for(const key in student.marks){
            totalMarks+=student.marks[key];
        }
        summeryOfStudents.push({
            name: student.name,
            total_mark: totalMarks
        });
    }

    let maxNumber = summeryOfStudents[0].total_mark;
    let bestStudent = summeryOfStudents[0].name;
    for(const beststudent of summeryOfStudents){
        if(maxNumber < beststudent.total_mark){
            maxNumber = beststudent.total_mark;
            bestStudent = beststudent.name;
        }
    }
    return bestStudent;
}


console.log(bestStudent([
  {
    name: "A",
    marks: {
      math: 90,
      physics: 85,
      chemistry: 80
    }
  },
  {
    name: "B",
    marks: {
      math: 95,
      physics: 90,
      chemistry: 95
    }
  }
]))