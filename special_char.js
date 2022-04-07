function special_char(n)
{
    
    if((n>='a' && n<='z') || (n>='A' && n<= 'Z')) //A to Z = 65 to 90 , a to z= 97 to 122
    console.log("It is a character ");
    if(n>=0 && n<=9)//0 to 9 = 48 to 57 ascii
    console.log("It is a integer ");
    
}
special_char("A");