class Student {
    constructor(name, major, grades) {
        this.name = name;
        this.major = major;
        this.grades = grades;
    }

    addGrade(grade) {
        this.grades.push(grade);
    }

    gpa() {
        let sum = 0;
        for (const number of this.grades) {
            sum += number;
        }
        return sum / this.grades.length;
    }
}

const eva = new Student('Jim', 'English', [85, 87, 88]);
console.log(eva);
const gpa = eva.gpa();
console.log(gpa)

const newStudent = new Student('Jim', 'Filipino', [90, 97, 85, 77]);
const average = newStudent.gpa();
console.log(average);
