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


//Problem 3 : Resizing any array
    let animals = ['🐅','🐆','🐈','🐒','🦄']
    animals.length = 3
    console.log(animals) //['🐅','🐆','🐈']


// Problem 4 : How to flattern a multi-dimensional array 

    let smileys = ['😂',['🤣','😃','😍','😋','😚','😑','😒'],'😕','🥵','😡','🤬','🤒']

    //flat() function makes the array flat
    console.log(smileys.flat()) //['😂', '🤣', '😃','😍', '😋', '😚','😑', '😒', '😕','🥵', '😡', '🤬','🤒']

    //Multi level array 
    let smileys2 = ['😂',['🤣','😃','😍',['😋','😚'],'😑','😒'],'😕','🥵','😡','🤬','🤒']

    console.log(smileys2.flat(Infinity)) //['😂', '🤣', '😃','😍', '😋', '😚','😑', '😒', '😕','🥵', '😡', '🤬','🤒']

// Problem 5 : Short Conditionals

    const captain = "Kabiddg"

    captain === "Kabid" && console.log('😍')  // if true we use &&
    captain === "Kabid" || console.log('😡')  // if false we use ||


//Problem 6 : Replace all occurances of a string

    const quote = "React is a JS framework & this is most popular framework right now"

    //Replace all occurances of 'framework' with 'library'
    console.log(quote.replace(/framework/g,"Libray"))
 
//Problem 7 : Know to task perfermance

    const startTime = performance.now()

    for(let i = 0; i <= 50; i++){
        console.log(i)
    }

    const endTime = performance.now()

    console.log(`Loop take ${endTime-startTime} mileseconds`)