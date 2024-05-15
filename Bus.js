const number = (stations) => { 
    
    stations.reduce((passager_restants, [passager_montants, passager_descendants]) => passager_restants + passager_montants - passager_descendants, 0);
}

console.log(number([10, 0], [6, 3], [9, 5]))