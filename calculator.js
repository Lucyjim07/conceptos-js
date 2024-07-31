class Calculator {

    // Define a stating value
    constructor(start = 0) {
        this.total = start
    }

    // Add multiple numbers to the total
    add(...nums) {
        // console.log(this)

        // with a normal function
        nums.forEach(function (num) {
            // console.log(this)
            this.total += num;
        });

        // with a arrow function
        // cualquier cosa que esté en el contexto del padre, va a estar presente en el contexto interno de la arrow function (clousures)
        // nums.forEach((num) => {
        //     this.total += num;
        // })
    }
}

let count = new Calculator(42)
count.add(3);
console.log(count.total)