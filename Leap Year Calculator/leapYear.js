// Exercise 6: Leap Year Challenge Exercise

function isLeap(year) {

/**************
A year is a leapyear if it is divisable by 4;
except is that year is also evenly divisible by 100;
unless that year is also evenly divisable by 400;
****************/

    var leapYear;
if (year%4===0){
    if (year%100===0){
       if (year%400===0){
   leapYear = "Leap year.";
    } else {
    leapYear= "Not leap year.";
        }
        } else {
        leapYear= "Leap year.";
    }
    }else {
    leapYear= "Not leap year.";
        }
        return leapYear;
/**************Don't change the code below****************/
}
