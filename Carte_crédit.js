const maskify = (numero) => {

    if (numero.lenght <= 4)
        return numero;
    
    else {
        let masked_numero = [];
        masked_numero = numero.slice(3,3);

        return masked_numero;
    }

} 

console.log(1234)
console.log(12345);