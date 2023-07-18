class Student {
    constructor(name, major, grades) {
        this.name = name;
        this.major = major;
        this.grades = grades;
    }

    addGrade(grade) {
        this.grades.push(grade)
    }

    gpa() {
        let addGPA = 0;
        for (const grade of this.grades) {
            addGPA += grade;
        }

        return addGPA / this.grades.length;
    }
}


const evaluation = new Student('Jim', 'English', [90, 92, 88, 89, 87, 85]);
const averageGrade = evaluation.gpa();
console.log(evaluation);
console.log(averageGrade);

console.log('------------------');
const newEva = new Student('Ivo', 'Maritime', [93, 94, 96, 88, 85]);
const averageGrade2 = newEva.gpa();
console.log(newEva);
console.log(averageGrade2);

newEva.addGrade(90);
console.log(newEva.gpa())