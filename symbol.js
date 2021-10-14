const symbol=(EnterAnySymbol)=>{

    switch (EnterAnySymbol) {
     case '!':
         return('Exclamation Mark');
     case '$':
         return('Doller Sign');
     case '@':
         return('At the rede Mark');
     case '.':
         return('Full stop');
     case ',':
         return('Comma');
     case ';':
         return('Semi colon');
     case '?':
         return('intgreation mark');
     default:
         return('Not Symbol')
 }
 }
 console.log(symbol('@'));