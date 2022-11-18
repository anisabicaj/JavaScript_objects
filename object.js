// 1. Create an object that describes a car (manufacturer, model, year of release, average speed) and the following methods for working with this object:

// A method that displays the car info 
// A method for counting a time frame necessary to cover a given distance with the average speed. Note that every 4 hours the driver has to take a 1-hour break.

// 2. Create an object that contains separately the numerator and the denominator of a fraction, and the following functions for working with this object:

// A function for adding two fraction objects.
// A function for subtracting two fraction objects.
// A function for multiplying two fraction objects.
// A function for dividing two fraction objects.
// A function for simplifying a fraction object. 



//1
/*
let car = {
    manifacture:'Audi',
    "year of realise": 2019,
    "average speed": 150,
    printInfo() {
        console.log(`Manifacture: ${this.manifacture}, year of realise: ${this["year of realise"]}, average speed: ${this["average speed"]}km/h`);
    },
    timeframe(distance) {
        let hours=0;
        while(distance-this["average speed"]>0)
        {
            distance=distance-this["average speed"];
            if(hours % 4!=0)
            hours++;
            else
            hours=hours + 2;
        }
        console.log("The timeframe is: "+hours);
    }  
}
car.printInfo();
car.timeframe(400);
*/



//2
/*
let fraction = {
    numerator: 216,
    denominator: 36,
};
let fraction1 = {};
fraction1.numerator=1;
fraction1.denominator=6;
function sum(obj1, obj2) {
    console.log(`The sum of these two fractions is: ${obj1.numerator/obj1.denominator + obj2.numerator/obj2.denominator}`);
}
function subtract(obj1, obj2) {
    console.log(`The deduction of these two fractions is: ${obj1.numerator/obj1.denominator - obj2.numerator/obj2.denominator}`);
}
function multiplication(obj1, obj2) {
    console.log(`The multiplication of these two fractions is: ${(obj1.numerator*obj2.numerator)/ (obj1.denominator*obj2.denominator)}`);
}
function division(obj1, obj2) {
    console.log(`The division of these two fractions is: ${(obj1.numerator*obj2.denominator)/ (obj1.denominator*obj2.numerator)}`);
}
function simplify(obj) {
    if(obj.numerator>obj.denominator) {
        for(let i=1; i<=obj.numerator; i++){
            if(obj.numerator%i==0 && obj.denominator%i==0)
            divider=i;
        }
    }else {
        for(let i=1; i<=obj.denominator; i++){
            if(obj.numerator%i==0 && obj.denominator%i==0)
            divider=i;
        }
    }

    obj.numerator=obj.numerator/divider;
    obj.denominator=obj.denominator/divider;
    console.log(`After simplifying the numerator is ${obj.numerator} and denominator is ${obj.denominator}`);
}


sum(fraction,fraction1);
subtract(fraction,fraction1);
multiplication(fraction,fraction1);
division(fraction,fraction1);
simplify(fraction);

*/
