function objectsProblem1(name, pop, treasury) {
    let objectInfo ={
        name: name, 
        population: pop,
        treasury: treasury,
    }
    for (let key in objectInfo){
        console.log(`${key}: ${objectInfo[key]}`);
    }

    
}
objectsProblem1('Plovdiv',
450000,
129300012
);