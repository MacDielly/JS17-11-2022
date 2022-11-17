answer = prompt(`De quel nombre veux-tu calculer la factorielle ?`);

function fact(answer){
    var i, answer, f = 1;
  
    for(i = 1; i <= answer; i++)  
    {
      f = f * i;   // ou f *= i;
    }  
    return f;
}
  
console.log(`Le résultat est : ${fact(answer)}`);