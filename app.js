// Problem 1 : Remove falsy values from any array 

    let miscelaneous = ['🍎',false,'🍊',NaN,0,undefined,'🌶',null,'','🥭']

    //passing Boolean to array.filter() will remove falsy values from array 

    let fruits = miscelaneous.filter(Boolean)
    console.log(`Fruits are ${fruits}`)  //Fruits are 🍎,🍊,🌶,🥭


//Problem 2 : 
