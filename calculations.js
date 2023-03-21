function average()
{
    var one = document.getElementById("highOne");
    var two = document.getElementById("highTwo");
    var three = document.getElementById("highThree");
    threeAverage = one+two+three / 3;
    document.getElementById("average").innerHTML = threeAverage;
}
function go()
{
    average();
}