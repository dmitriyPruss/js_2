function showIfFor() {
    console.clear();
    // if
    console.groupCollapsed('If - task');
        const isNumberDivisible = function(num) {
            if (num % 5 === 0) {
                console.log('without a remainder');
            } else {
                const remainder = num % 5;
                console.log(`with a remainder ${remainder}`);
            };

            if (num % 3 === 0) {
                console.log('without a remainder');
            } else {
                const remainder = num % 3;
                console.log(`with a remainder ${remainder}`);
            };

            if (num % 2 === 0) {
                console.log('without a remainder');
            } else {
                const remainder = num % 2;
                console.log(`with a remainder ${remainder}`);
            };
        };
        isNumberDivisible(5);
        console.log('');
        isNumberDivisible(120);
    console.groupEnd();

    // for
    // 1
    console.groupCollapsed('For - task 1');
        const showFactorial = function(n) {
            let res = 1;
            for(let i = 1; i <= n; i++) {
                res *= i;
            };
            return res;
        };
        console.log('showFactorial(8) :>> ', showFactorial(8));
    console.groupEnd('');
    // 2
    console.group('For - task 2');
        const showSequence = function() {
            const n = Number(prompt('Enter an integer number, please', 1));
            let res = 1;
            for(let i = 1; i <= n; i++) {
                if(n === 1) {
                    break;
                };
                res += 1 / i;
            };
            return res;
        };
        console.log('Math.round(showSequence()) :>> ', Math.round(showSequence()) );
    console.groupEnd();
    // 3
    console.groupCollapsed('For - task 3');
        const multiplySequence = function(lim1, lim2) {
            let res = lim1;
            for(let i = ++lim1; i <= lim2; i++) {
                res *= i;
            };
            return res;
        };
        console.log('multiplySequence(3, 8) :>> ', multiplySequence(3, 8));
    console.groupEnd();
};

function showFunctions() {
    console.clear();
    // 0
    console.groupCollapsed('functions - task 0');
        console.log('isAdult(20) :>> ', isAdult(20));// true
        console.log('isAdult(4) :>> ', isAdult(4));; // false
        console.log('isAdult(18) :>> ', isAdult(18));; // false
        function isAdult(age) {
            return age >= 18 ? true : false;
        };
    console.groupEnd();
    // 1
    console.group('functions - task 1');
        const giveNumber = function() {
            const num = +prompt('Enter the number, please...');
            if (!Number.isNaN(num)) {
                return num;
            };
            return 1;
        };
        const isPrimeNumber = function() {
            const num = giveNumber();
            let i = 2;
            while(i <= num - 1) {
                if(num % i === 0) {
                    return num + ' isn`t a prime number'; 
                };
                i++;
            }; 
            return num + ' is a prime number';
        };
        console.log('isPrimeNumber(2) :>> ', isPrimeNumber());
    console.groupEnd();
    // 2
    console.groupCollapsed('functions - task 2');
        console.log('checkMultiplicity(25, 5) :>> ', checkMultiplicity(25, 5));
        console.log('checkMultiplicity(15, 3) :>> ', checkMultiplicity(15, 3));
        console.log('checkMultiplicity(15, 5) :>> ', checkMultiplicity(15, 5));
        console.log('checkMultiplicity(15, 4) :>> ', checkMultiplicity(15, 4));

        /**
         * 
         * @param {number} a 
         * @param {number} b 
         * @returns remainder of the division
         */
        function checkMultiplicity(a, b) {
            return a % b === 0 ? true : false;
        };
    console.groupEnd();
    // 3
    console.groupCollapsed('functions - task 3');
        isTriangle(5, 5, 7);
        isTriangle(3, 3, 6);
        
        /**
         * 
         * @param {number} a 
         * @param {number} b 
         * @param {number} c 
         */
        function isTriangle(a, b, c) {
            if(a + b > c && a + c > b && b + c > a) {
                console.log('It is the triangle');
            } else {
                console.log('It isn`t the triangle');
            }
        };
    console.groupEnd();
    // 4
    console.groupCollapsed('functions - task 4');
        console.log('calculateTriangleArea(5, 7, 8) :>> ', calculateTriangleArea(5, 7, 8));
        function calculateTriangleArea(a, b, c) {
            const p = (a + b + c) * 0.5;
            const h = 2 * Math.sqrt(p * (p - a) * (p - b) * (p - c)) / a;
            const s = 0.5 * a * h;
            return s.toFixed(2); 
        };

        console.log('calculateRectangleArea(5, 7) :>> ', calculateRectangleArea(5, 7));
        function calculateRectangleArea(a, b) {
            const s = a * b;
            return s; 
        };

        console.log('calculateParallelepipedArea(5, 7, 3) :>> ', calculateParallelepipedArea(5, 7, 3));
        function calculateParallelepipedArea(a, b, c) {
            const s = 2 * (a * b + b * c + a * c);
            return s; 
        };

        console.log('calculateConeArea(5, 7) :>> ', calculateConeArea(5, 7));
        function calculateConeArea(r, l) {
            const s = Math.PI * r * (r + l);
            return s.toFixed(1); 
        };
    console.groupEnd();
};

function showObjects() {
    console.clear();
    // 1
    console.groupCollapsed('Objects - task 1');
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
    console.groupEnd();
    // 2
    console.groupCollapsed('Objects - task 2');
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
    console.groupEnd();
    // 3
    console.groupCollapsed('Objects - task 3');
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
    console.groupEnd();
};