function go()
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
