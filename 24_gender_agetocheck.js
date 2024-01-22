// 024. Write a Program to accept user’s marital status, gender and age to check if he/she is eligible for marriage or not.



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Enter your marital status (single/married): ', (maritalStatus) => {


    rl.question('Enter your gender (male/female): ', (gender) => {
        rl.question('Enter your age: ', (age) => {

            printcheck(maritalStatus, gender, age);

        });
    });
});

function printcheck(maritalStatus, gender, age) {

    if (maritalStatus == 'single') {
        if (gender == 'male') {
            if (age >= 18) {
                console.log('You are eligible for marriage')
            } else {

                console.log('You are not  eligible for marriage')

            }
        } else if (gender == 'female') {

            if (age >= 18) {
                console.log('You are eligible for marriage')
            } else {

                console.log('You are not  eligible for marriage')

            }
        }
    }
    else if (maritalStatus == 'married') {

        console.log('You are alrady married you are not need to marriage')
    }
}