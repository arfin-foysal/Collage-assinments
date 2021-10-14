function Oportor(EnterAnyOperator){
   switch (EnterAnyOperator) {
    case '=':
        return('Equal');
    case '>=':
        return ('Greater then Equal')
    case '<=':
        return('Less then Equal');
    case '==':
        return('Dabol Equal');
    case '+':
        return('Addsion');
    case '-':
        return('Substration');
    case '*':
        return('Multplation');
    case '/':
        return('Division');
    case '%':
        return('Modulus');
    default:
    return('Not a oporator')
}
}
console.log(Oportor('*'));