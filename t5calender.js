function LeapYear(year)
{
    let a=0;
if((a==year%4) && (a!=year%100))
{
    console.log(year + " It is a leap year ");
}
else
{
    console.log(year + " It is not a leap ");
}
}
LeapYear(2024);
