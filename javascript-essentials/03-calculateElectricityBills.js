/*
calculate electricity bill based on Units consumed.

unitPrice[
    { "upto 100": "4.2/unit" },
    { "101 - 200": "6/unit" },
    { "201 - 400": "8/unit" },
    { "more than 400": "13/unit" },
]

constraints:
- unit is integer
- non negative no.
- range (0 >= unit <= 10000)
*/

/*
wrong code:
    only calculates the range amount others are free.

example : 
    suppose unit =  401;
    below code : (401 - 400) * 13 = 13.0 ans
    below 400 unit is free for user.❌

function calculateElectricityBill(unit) {
    
    let billAmount = 0;
    
        if(unit <= 100){
            billAmount = ((unit - 0) * 4.2).toFixed(1);
        }else if(unit >= 101 && unit <= 200){
            billAmount = ((unit - 100) * 6).toFixed(1);
        }else if(unit >= 201 && unit <= 400){
            billAmount = ((unit - 200) * 8).toFixed(1);
        }else{
            billAmount = ((unit - 400) * 13).toFixed(1);
        }

    return billAmount;
}

module.exports = { calculateElectricityBill };
*/

function calculateElectricityBill(unit) {

    if (unit <= 0) return "0.0";

    let totalBill = 0;
    let remainingUnit = unit;

    if (remainingUnit > 400) {
        totalBill += (remainingUnit - 400) * 13;
        remainingUnit = 400;
    }

    if (remainingUnit > 200) {
        totalBill += (remainingUnit - 200) * 8;
        remainingUnit = 200;
    }

    if (remainingUnit > 100) {
        totalBill += (remainingUnit - 100) * 6;
        remainingUnit = 100;
    }

    totalBill += remainingUnit * 4.2;
    return totalBill.toFixed(1);
}


/*
 suppose unit = 401;

 totalBill = 0, remainingUnit = 401;

 check condition (401 > 400) : true
                - totalBill += (401 - 400) * 13 => totalBill = 0 + 13 = 13
                - remainingUnit = 400;

 check condition (400 > 200) : true
                - totalBill += (400 - 200) * 8 => totalBill = 13 + 1600 = 1613;
                - remainingUnit = 200;

 check condition (200 > 100) : true
                - totalBill += (200 - 100) * 6 => totalBill = 1613 + 600 = 2213;
                - remainingUnit = 100;

 check condition (100 > 0) : true
                - totalBill += 100 * 4.2 => totalBill = 2213 + 420 = 2633;

                return 2633.0

*/