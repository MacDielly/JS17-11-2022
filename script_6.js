arn = prompt(`Quel morceau souhaites tu traduire?`)

arn = arn.match(/.{1,3}/g)

console.log(arn)

arn.forEach(sequence => {
    if (sequence === "UCU" || sequence === "UCC" || sequence === "UCA" || sequence === "UCG" || sequence === "AGU" || sequence === "AGC"){
    arn[sequence] = "Sérine"
    }
    else if (sequence === "CCU" || sequence === "CCC" || sequence === "CCA" || sequence === "CCG"){
    arn[sequence] = "Proline"
    }
    else if (sequence === "UUA" || sequence === "UUG"){
    arn[sequence] = "Leucine"
    }
    else if (sequence === "UUU" || sequence === "UUC"){
    arn[sequence] = "Phénylalanine"
    }
    else if (sequence === "CGU" || sequence === "CGC" || sequence === "CGA" || sequence === "CGG" || sequence === "AGA" || sequence === "AGG"){
    arn[sequence] = "Arginine"
    }
    else if (sequence === "UAU" || sequence === "UAC"){
    arn[sequence] = "Tyrosine"
    }
});

console.log(arn);