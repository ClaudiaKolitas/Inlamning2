// funktionen skapar en uppgiften i koden: när musen är över click here... så visas detta meddelande.
function over(mOver) {
    mOver.innerHTML = "Accessibility is not about designing for the few. It is designing for us all."
  }
  /* funktionen skapar en uppgiften i koden: när musen är placerad någon annanstans på skärmen så visas detta meddelande.*/
  function out(mOut) {
    mOut.innerHTML = "Want to see it again?"
  }

  const word = new Date().getHours(); /* const används i block men används för att definiera en ny variabel, som t ex let.*/
  let message; /* texten vi vill visa under de olika tidsperioderna*/
  switch (word) { /* Switch(loop) satsen utvärderar ett uttryck och kopplar uttryckets värde med en case 
     och kör satserna som är kopplade med det fallet, */ 
     /* när koden körs så kontrollerna switch med både case genom if och lokal tid, så matchar dem så utförs koden i enligt tiden (kl7-10) och ett meddelande skrivs ut på skärmen där av message betydelse.
     Break avslutar den aktuella loopen, och när kl blir 11-16 så kommer det ett nytt meddelande*/
    
      case 7: case 8: case 9: case 10:
          message = "“Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.”– Bernard M. Baruch";
          break;
      case 11: case 12: case 13: case 14: case 15: case 16:
          message = "“The best way to predict the future is to invent it.”– Alan Kay";
          break;
      case 17: case 18: case 19: case 20: case 21: case 22: case 23:
              message = "“If opportunity doesn’t knock, build a door.”– Milton Berle";
              break;
      default: /* menas med att vi inte något har satt något värde efter 23:00 så det finns det inget värde att kontrollera så då går den in defult läge och då kommer ett nytt meddelande visas  */
          message = "The time is over 00:00, why aren't you sleeping? go to bed and be fears in the morning! - Claudia Kolitas"; 
          break; 
  }

  document.getElementById("switch").innerHTML = message; 
/* dokument,getelementbyid är dom manipulationen vi hämtar switchsatsen och lägger innerhtml för att skriva ut meddelandet.*/