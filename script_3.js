answer = prompt(`Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?`);

answer = Number(answer)

for(let hashtag = `#`; hashtag.length < (answer + 1); hashtag += `#`){

console.log(hashtag)

}