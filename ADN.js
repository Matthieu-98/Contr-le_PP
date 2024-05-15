var pairs = {'A':'T','T':'A','C':'G','G':'C'};
function DNAStrand(dna){
 return dna.split('').map((v)=> pairs[v]).join('');
}

console.log(DNAStrand("ATTGC"))
console.log(DNAStrand ("GTAT"))