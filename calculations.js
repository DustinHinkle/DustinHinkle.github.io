function calculate()
{
    var one = parseFloat(document.getElementById("highOne").value);
    var two = parseFloat(document.getElementById("highTwo").value);
    var three = parseFloat(document.getElementById("highThree").value);
    
    var threeAverage = (one+two+three)/3;

    var yos = parseInt(document.getElementById("yos").value);
    var age = parseInt(document.getElementById("age").value);
    var months = parseInt(document.getElementById("months").value);

    
    if (document.getElementById("spe").checked)
    {
        var rating = "1.7% and any year after 20 is rated for 1%";
        if(yos>20)
        {
            var rate = (threeAverage*.017)*20;
            var temp = yos - 20;
            rate = rate + ((threeAverage*.01)*temp);
        }else
        {
            var rate = (threeAverage*.017)*yos;
        }

        if(age >= 62)
        {
            months = 0;
        }
        var reductionRating = months * (5/12);

        if (reductionRating == 0)
        {
            var annuity = rate;
        }else if (reductionRating > 0)
        {
            var reduction = reductionRating / 100;
            if(yos >= 30)
            {
                var reduction = 0;
                var reductionRating = 0;
            }
            var annuity = rate - (rate * reduction);
        }

    }else if (document.getElementById("normal").checked)
    {
        if (yos >= 20 && age >= 62)
        {
            //1.1%
            var rating = "1.1% ";
            var rate = (threeAverage*.011) * yos;
        }else if (age < 62 || (age >= 62 && yos < 20))
        {
            var rating = "1.0% ";
            var rate = (threeAverage*.01) * yos;
        }
        
        if(age >= 62)
        {
            months = 0;
        }
        var reductionRating = months * (5/12);

        if (reductionRating == 0)
        {
            var annuity = rate;
        }else if (reductionRating > 0)
        {
            var reduction = reductionRating / 100;
            if(yos >= 30)
            {
                var reduction = 0;
                var reductionRating = 0;
            }
            var annuity = rate - (rate * reduction);
        }
    }
    document.getElementById("hidden").style.display = "block";

    document.getElementById("average").innerHTML = "Your three year high average is: " + threeAverage.toFixed(2);
    document.getElementById("rate").innerHTML = "Your rate is " + rating + "for each year of service, which comes to a annuity of: " + rate.toFixed(2);
    document.getElementById("reduction").innerHTML = "Your reduction is: " + reductionRating + "%";
    document.getElementById("final").innerHTML = "Your final estimated annuity is: " + annuity.toFixed(2);
}
function go()
{
    document.getElementById("hidden").style.display = "none";

    if(document.getElementById("highOne").value == "" || document.getElementById("highOne").value <= 0)
    {
        alert("Highest Earning Year must be filled with a number greater than 0.")
    }else if(document.getElementById("highTwo").value == "" || document.getElementById("highTwo").value <= 0)
    {
        alert("Second Highest Earning Year must be filled with a number greater than 0.")
    }else if(document.getElementById("highThree").value == "" || document.getElementById("highThree").value <= 0)
    {
        alert("Third Highest Earning Year must be filled with a number greater than 0.")
    }else if(document.getElementById("yos") == "" || document.getElementById("yos").value <= 0 || document.getElementById("yos").value % 1 != 0)
    {
        alert("Federal Years of Service must be filled with a whole number greater than 0.")
    }else if(document.getElementById("age") == "" || document.getElementById("age").value <= 0 || document.getElementById("age").value % 1 != 0)
    {
        alert("Age must be filled with a whole number greater than 0.")
    }else if(document.getElementById("months") == "" || document.getElementById("months").value < 0 || document.getElementById("months").value % 1 != 0)
    {
        alert("Months must be filled with a whole number greater than 0.")
    }else
    {
        calculate();
    }

}
