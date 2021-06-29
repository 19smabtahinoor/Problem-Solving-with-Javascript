// Problem 1 : Remove falsy values from any array 

    let miscelaneous = ['🍎',false,'🍊',NaN,0,undefined,'🌶',null,'','🥭']

    //passing Boolean to array.filter() will remove falsy values from array 

    let fruits = miscelaneous.filter(Boolean)
    console.log(`Fruits are ${fruits}`)  //Fruits are 🍎,🍊,🌶,🥭



//Problem 2 : Convert any value to boolean

    // Using !!(two not sign) in front of anu value   
    console.log(!!"Kabid"); //true
    console.log(!!1) //true
    console.log(!!0) //false
    console.log(!!undefined) //false
