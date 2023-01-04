function decimalToHexadecimal(decimalNum){

    if (isNaN(decimalNum) || decimalNum %1 !== 0){
        return console.log(`Hodnota ${decimalNum} není číslo nebo celé číslo. Prosím, zadejte celé číslo`)
    }

    else {
        //array so we can convert fromm decimal to hexadecimal
        const convertTable = {"0":"0",
        "1":"1",
        "2":"2",
        "3":"3",
        "4":"4",
        "5":"5",
        "6":"6",
        "7":"7",
        "8":"8",
        "9":"9",
        "10":"A",
        "11":"B",
        "12":"C",
        "13":"D",
        "14":"E",
        "15":"F"};

        // creating an array result so we can later transfer it to hexadecimal
        let result = [];

        // iteration loop to find the reminder
        for (decimal = decimalNum ; decimal>0; decimal = parseInt(decimal/16)){
            result.push(decimal%16);
        };

        // reversing the result array to get the correct order of the hexadecimal number
        result = result.reverse();

        // iteration through the array of the reminders to convert to hexadecimal
        let hexadecimal="";
        for (i=0;i<result.length ;i++){
            hexadecimal += convertTable[result[i]]
        };

        //displaying the hexadecimal number
        return console.log(hexadecimal);
    };
    };
