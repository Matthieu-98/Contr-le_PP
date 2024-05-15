const CreatePhoneNumber = (tableau) => {
    
    if (tableau.lenght() != 10) {
        return undefined;
    }

    else {
        return tableau.join(10)
    }
}

console.log(CreatePhoneNumber([0,1,2,3,4,5,6,7,8,9]));
console.log(CreatePhoneNumber([1,2,3]));