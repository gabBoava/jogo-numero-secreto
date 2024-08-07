alert('Boas vindas ao jogo do número secreto.');
let numMAX = parseInt(Math.random() * 5000);
let numeroS = parseInt(Math.random() * numMAX + 1);
let chute;
let tentv = 1;

while (chute != numeroS) {
    chute = prompt(`Um número entre 1 e ${numMAX}.`);
    if (numeroS == chute) {
        break;
    } else {
        if (numeroS > chute) {
            alert(`O número secreto é maior que ${chute}.`);
        } else {
            alert(`O número secreto é menor que ${chute}.`);
        }
        tentv++;
    }
}

let PLVRtentv = tentv  > 1 ? 'tentativas' : 'tentativa'
alert(`Você descobriu o número secreto ${numeroS} com ${tentv} ${PLVRtentv}.`);