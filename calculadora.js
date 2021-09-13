var nota1 = Number(prompt('Digite a nota do primeiro bimestre'));

var nota2 = Number(prompt('Digite a nota do segundo bimestre'));

var nota3 = Number(prompt('Digite a nota do terceiro bimestre'));

var nota4 = Number(prompt('Digite a nota do quarto bimestre'));

var media = (nota1 + nota2 + nota3 + nota4)/4

var mediaFinal = media.toFixed(1)

alert(" Sua média é " + mediaFinal)

if (media >= 7){alert("Parabéns, você passou!")}
else if ( 7> media & media >5 ) {alert("Você ficou em recuperação.")}
else {alert("Infelizmente você não obteve nota suficiente para passar e reprovou.")}