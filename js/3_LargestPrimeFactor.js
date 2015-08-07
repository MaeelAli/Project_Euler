//Largest Prime Factors: 

var isPrime = function(n) {
    
    if (n === 1 || n == 2)
    {
        return true;
    }
    if (n % 2 === 0)
    {
        return false;
    }
    for (var i = 1; i < Math.ceil(Math.sqrt(n))+1; i += 2)
    {
        if ((n % i === 0) && !(i === 1))
        {
            return false;
        }
    }
    return true;
}

var largestPrimeFactor = function(n) {
    var primeFactors = [];
    for (var i = 1; i <= n; i++)
    {
        if ( n % i === 0)
        {
            if (isPrime(i))
            {
                primeFactors.push(i);
            }
        }
       
    }
    console.log(primeFactors);
    var currentLargestPrime = Math.max.apply(null,primeFactors);
    return currentLargestPrime;
}

