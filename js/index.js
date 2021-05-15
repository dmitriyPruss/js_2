function showIfFor() {
    console.clear();

    // if
    // 1) Делится ли число на 5, или на 3, или на 2 без остатка?
    console.groupCollapsed('If - task');
        /**
         * 
         * @param {number} num 
         */
        const isNumberDivisible = function(num) {
            if (num % 5 === 0) {
                console.log('without a remainder');
            } else {
                console.log(`with a remainder ${num % 5}`);
            };

            if (num % 3 === 0) {
                console.log('without a remainder');
            } else {
                console.log(`with a remainder ${num % 3}`);
            };

            if (num % 2 === 0) {
                console.log('without a remainder');
            } else {
                console.log(`with a remainder ${num % 2}`);
            };
        };
        isNumberDivisible(5);
        console.log('');
        isNumberDivisible(120);
    console.groupEnd();

    // for
    // 1) Вывести факториал запрошенного числа. (5!=1*2*3*4*5)
    console.groupCollapsed('For - task 1');
        /**
         * 
         * @param {number} n - an integer number
         * @returns {number} a factorial of number
         */
        const showFactorial = function(n) {
            let res = 1;
            for (let i = 1; i <= n; i++) {
                res *= i;
            };
            return res;
        };
        console.log('showFactorial(8) :>> ', showFactorial(8));
    console.groupEnd('');
    
    // 2) *вычислить сумму первых N элементов последовательности 1 + 1/2 + 1/3 + ...+ 1/N . параметр N задает пользователь
    console.group('For - task 2');
        /**
         * 
         * @returns {number} a sum of some elements
         */
        const showSequence = function() {
            const n = Number(prompt('Enter an integer number, please', 1));
            let res = 0;
            for (let i = 1; i <= n; i++) {
                res += 1 / i;
            };
            return res;
        };
        console.log('showSequence() :>> ', showSequence());
    console.groupEnd();

    // 3) Найти произведение целых чисел в пределах от lim1 до lim2 (например, если lim1=5 и lim2=12 то это произведение всех чисел от 5 до 12).
    console.groupCollapsed('For - task 3');
        /**
         * 
         * @param {number} lim1 
         * @param {number} lim2 
         * @returns {number} a multiply of integers
         */
        const multiplySequence = function(lim1, lim2) {
            let res = 1;
            for (let i = lim1; i <= lim2; i++) {
                res *= i;
            };
            return res;
        };
        console.log('multiplySequence(5, 12) :>> ', multiplySequence(5, 12));
    console.groupEnd();
};

function showFunctions() {
    console.clear();

    // 0) Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие.
    // Ожидаемый вывод:
    // isAdult(20); // true
    // isAdult(4); // false
    console.groupCollapsed('functions - task 0');
        console.log('isAdult(20) :>> ', isAdult(20));// true
        console.log('isAdult(4) :>> ', isAdult(4));; // false
        /**
         * 
         * @param {number} age 
         * @returns {boolean} is age > or < 18
         */
        function isAdult(age) {
            return age >= 18;
        };
    console.groupEnd();

    // 1) *Функция, которая запрашивает число и проверяет простое ли оно (простое число делиться без остатка на себя и на единицу)
    console.group('functions - task 1');
        /**
         * 
         * @returns {number} an entered number
         */
        const giveNumber = function() {
            const num = +prompt('Enter the number, please...');
            if (!Number.isNaN(num)) {
                return num;
            };
            return 1;
        };

        /**
         * 
         * @returns {string} is a number prime or not
         */
        const isPrimeNumber = function() {
            const num = giveNumber();
            let i = 2;
            while (i <= num - 1) {
                if (num % i === 0) {
                    return num + ' isn`t a prime number'; 
                };
                i++;
            }; 
            return num + ' is a prime number';
        };
        console.log('isPrimeNumber() :>> ', isPrimeNumber());
    console.groupEnd();

    // 2) Создать функцию checkMultiplicity, которая принимает два числа и проверяет, делится ли первое на второе:
    console.groupCollapsed('functions - task 2');
        console.log('checkMultiplicity(25, 5) :>> ', checkMultiplicity(25, 5));
        console.log('checkMultiplicity(15, 3) :>> ', checkMultiplicity(15, 3));
        console.log('checkMultiplicity(15, 5) :>> ', checkMultiplicity(15, 5));
        console.log('checkMultiplicity(15, 4) :>> ', checkMultiplicity(15, 4));
        /**
         * 
         * @param {number} a 
         * @param {number} b 
         * @returns {boolean} is a remainder of a division
         */
        function checkMultiplicity(a, b) {
            return a % b === 0;
        };
    console.groupEnd();

    // 3) Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция возвращает true если треугольник возможен и false если нет
    console.groupCollapsed('functions - task 3');
        console.log('isTriangle() :>> ', isTriangle());

        /**
         * 
         * @returns {number[]} an array of three sides of a triangle
         */
        function getTriangleSides() {
            const a = +prompt('side a');
            const b = +prompt('side b');
            const c = +prompt('side c');
            return [a, b, c];
        };

        /**
         * 
         * @returns {boolean} is a triangle true or false
         */
        function isTriangle() {
            const [a, b, c] = getTriangleSides();
            if (a + b > c && a + c > b && b + c > a) {
                return true;
            } else {
                return false;
            };
        };
    console.groupEnd();

    // 4) Написать функции расчета площадей (поверхности) следующих фигур/тел: треугольника, 
    // прямоугольника (конуса, параллелепипеда)
    console.groupCollapsed('functions - task 4');
        console.log('calculateTriangleArea(5, 7, 8) :>> ', calculateTriangleArea(5, 7, 8));
        /**
         * 
         * @param {number} a 
         * @param {number} b 
         * @param {number} c 
         * @returns {number} an area of a triangle
         */
        function calculateTriangleArea(a, b, c) {
            const p = (a + b + c) * 0.5;
            const h = 2 * Math.sqrt(p * (p - a) * (p - b) * (p - c)) / a;
            const s = 0.5 * a * h;
            return s.toFixed(2); 
        };

        console.log('calculateRectangleArea(5, 7) :>> ', calculateRectangleArea(5, 7));
        /**
         * 
         * @param {number} a 
         * @param {number} b 
         * @returns {number} an area of a rectangle 
         */
        function calculateRectangleArea(a, b) {
            const s = a * b;
            return s; 
        };

        console.log('calculateParallelepipedArea(5, 7, 3) :>> ', calculateParallelepipedArea(5, 7, 3));
        /**
         * 
         * @param {number} a 
         * @param {number} b 
         * @param {number} c 
         * @returns {number} an area of a parallelepiped
         */
        function calculateParallelepipedArea(a, b, c) {
            const s = 2 * (a * b + b * c + a * c);
            return s; 
        };

        console.log('calculateConeArea(5, 7) :>> ', calculateConeArea(5, 7));
        /**
         * 
         * @param {number} r 
         * @param {number} l 
         * @returns {number} an area of a cone
         */
        function calculateConeArea(r, l) {
            const s = Math.PI * r * (r + l);
            return s.toFixed(1); 
        };
    console.groupEnd();
};

function showObjects() {
    console.clear();

    // 1. создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные
    //  данные, методы: вывод адреса, смена пола.
    console.groupCollapsed('Objects - task 1');
        const studentAlexi = {
            name: 'Alexi',
            surname: 'Johnson',
            gender: 'female',
            contactDetails: 'France, Paris, Main str., 22',
            changeGender(genderName) {
                return this.gender = genderName; 
            },
        };
        const studentAnn = {
            name: 'Ann',
            surname: 'Bubu',
            gender: 'female',
            contactDetails: 'Mexico, Gvadalahara, Maya str., 2012',
            changeGender(genderName) {
                return this.gender = genderName; 
            },
        };
        console.log('studentAlexi.changeGender("male") :>> ', studentAlexi.changeGender("male"));
        console.log('studentAnn.changeGender("male") :>> ', studentAnn.changeGender("male"));

        const studentInfoAlexi = showAddress.bind(studentAlexi);
        const studentInfoAnn = showAddress.bind(studentAnn);
        console.log('studentInfoAlexi() :>> ', studentInfoAlexi());
        console.log('studentInfoAnn() :>> ', studentInfoAnn());

        function showAddress() {
            return `${this.name} ${this.surname} - ${this.contactDetails}`; 
        };
    console.groupEnd();

    // 2. создать объект, который содержит свойства, о факультете и кафедре, методы: перевод на 
    // другой факультет. (можно на свой выбор)
    console.groupCollapsed('Objects - task 2');
        const university = {
            faculty: 'nuclear experiments',
            department: 'chemistry',
            students: {},
            addStudent(obj) {
                const studentName = obj.name || `Student N ${Math.round(Math.random() * Math.pow(10, 3))}`;
                const studentSurname = obj.surname || '#';
                this.students[`${studentName} ${studentSurname}`] = obj;
            },
            removeStudent(name) {
                delete this.students[name];
            },
            changeFaculty(facultyName) {
                return this.faculty = facultyName;
            },
        };
        console.log('university.changeFaculty("UFO searching") :>> ', university.changeFaculty("UFO searching"));
        university.addStudent(studentAlexi);
        university.addStudent(studentAnn);
        console.log('university.students :>> ', university.students);
        university.removeStudent('Alexi Johnson');
        console.log('university.students :>> ', university.students);
    console.groupEnd();

    // 3. Создать функции-конструкторы:
    // - Книга (автор, название, год издания, издательство)
    // - Электронная версия книги (автор, название, год издания, издательство, формат, электронный
    // номер)
    console.groupCollapsed('Objects - task 3');
        const iceAndFire = new PaperBook('J. J. Martin', 'A tale of fire and ice', 1996, 'Dallas publishing');
        console.log('iceAndFire :>> ', iceAndFire);
        const iceAndFireElectronic = new ElectronicBook('J. J. Martin', 'A tale of fire and ice', 1996, 'Dallas publishing', 'pdf-file', '045er5');
        console.log('iceAndFireElectronic :>> ', iceAndFireElectronic);

        /**
         * 
         * @param {string} author 
         * @param {string} name 
         * @param {number} year 
         * @param {string} publishingHouse 
         * @constructs PaperBook
         */
        function PaperBook(author, name, year, publishingHouse) {
            this.author = author;
            this.name = name;
            this.year = year;
            this.publishingHouse = publishingHouse;
        };

        /**
         * 
         * @param {string} author 
         * @param {string} name 
         * @param {number} year 
         * @param {string} publishingHouse 
         * @param {string} format 
         * @param {string} electronicNumber 
         * @constructs ElectronicBook
         */
        function ElectronicBook(author, name, year, publishingHouse, format, electronicNumber) {
            PaperBook.call(this, author, name, year, publishingHouse);
            this.format = format;
            this.electronicNumber = electronicNumber;
        };
    console.groupEnd();
};