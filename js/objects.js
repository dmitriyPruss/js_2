// 1
const studentAlex = {
    name: 'Alex',
    surname: 'Johnson',
    gender: 'female',
    contactDetails: 'France, Paris, Main str., 22',
    showAddress() {
        return this.contactDetails;
    },
    changeGender() {
        return this.gender = 'male'; 
    },
};
const studentAnn = {
    name: 'Ann',
    surname: 'Bubu',
    gender: 'female',
    contactDetails: 'Mexico, Gvadalahara, Maya str., 2012',
    showAddress() {
        return this.contactDetails;
    },
    changeGender() {
        return this.gender = 'male'; 
    },
};
console.log('student.showAddress() :>> ', studentAlex.showAddress());
console.log('student.changeGender() :>> ', studentAlex.changeGender());
console.log('student.showAddress() :>> ', studentAnn.showAddress());
console.log('student.changeGender() :>> ', studentAnn.changeGender());

const studentInfoAlex = showStudentInfo.bind(studentAlex);
const studentInfoAnn = showStudentInfo.bind(studentAnn);
console.log('studentInfo(studentAlex) :>> ', studentInfoAlex(studentAlex));
console.log('studentInfo(studentAnn) :>> ', studentInfoAnn(studentAnn));

function showStudentInfo() {
    return `${this.name} ${this.surname}, ${this.contactDetails}`; 
};
// 2
const university = {
    faculty: 'nuclear experiments',
    department: 'chemistry',
    students: {},
    addStudent(name) {
        const studentName = name.name || `Student N ${Math.round(Math.random() * Math.pow(10, 3))}`;
        const studentSurname = name.surname || '';
        this.students[`${studentName} ${studentSurname}`] = name;
    },
    removeStudent(name) {
        delete this.students[name];
    },
    changeFaculty() {
        return this.faculty = 'UFO searching';
    },
};
console.log('university.changeFaculty() :>> ', university.changeFaculty());
university.addStudent(studentAlex);
university.addStudent(studentAnn);
console.log('university.students :>> ', university.students);
university.removeStudent('Alex Johnson');
console.log('university.students :>> ', university.students);

// 3
const iceAndFire = new PaperBook('J. J. Martin', 'A tale of fire and ice', 1996, 'Dallas publishing');
console.log('iceAndFire :>> ', iceAndFire);
const iceAndFireElectronic = new ElectronicBook('J. J. Martin', 'A tale of fire and ice', 1996, 'Dallas publishing', 'pdf-file', '045er5');
console.log('iceAndFireElectronic :>> ', iceAndFireElectronic);
function PaperBook(author, name, year, publishingHouse) {
    this.author = author;
    this.name = name;
    this.year = year;
    this.publishingHouse = publishingHouse;
};
function ElectronicBook(author, name, year, publishingHouse, format, electronicNumber) {
    PaperBook.call(this, author, name, year, publishingHouse);
    this.format = format;
    this.electronicNumber = electronicNumber;
};