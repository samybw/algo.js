function plusGrand(string) {
    let mot = string.split(' ');
   let longMax = 0;
   let grandMot;
   
   for (let i = 0; i < mot.length; i++) {
       if (mot[i].length > longMax) {
           longMax = mot[i].length
           grandMot = mot[i]
       }

      }
      return grandMot   
}     
  console.log(plusGrand('Je suis le meilleur je le roi KingSamy le WolfKingBoss Samy !'));
 
  // biggest word founder 
