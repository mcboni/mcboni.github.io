//array of objects with rate initialised to 1.
data=[
    {
        principal:2500,
        time:1.8,
        rate:1,
        
    },
    {
        principal:1000,
        time:5,
        rate:1
    },
    {
        principal:3000,
        time:1,
        rate:1
    },
    {
        principal:2000,
        time:3,
        rate:1
    }
];
    // defining function interest calculator
    function interestCalculator(data){

    // defining empty array to push obejects with their new interest value
   interestData=[];

   // for loop to itrate over the array of objects
    for (let i = 0; i < data.length; i++) {

        //initialising interest variable
        interest = '';

        //Acessing rate value from the default value decleard in object above
         rate = data[i].rate;

        // empty object that will include default values and their interest calculated
        interestPerArrayOfObject = {};

        //Acessing principal value from the default value decleard in object above
         principal = data[i].principal;

        //Acessing time value from the default value decleard in object above
         time = data[i].time;

         // condition 1 to dynamically set the value of rate to 3
    if(principal >= 2500 && time > 1 && time <= 3){
    rate = 3;
    interest = (principal * rate * time) / 100;
    interestPerArrayOfObject  = {
    principal: principal,
    rate: rate,
    time: time,
    interest: interest
    };
    // pushing object into array interestData
    interestData.push(interestPerArrayOfObject );
      
    // condition 2 to dynamically set the value of rate to 4
    }else if(principal >= 2500 && time >= 3){
    rate = 4
    interestPerArrayOfObject = (principal * rate * time) / 100;
    myInterest = {
    principal: principal,
    rate: rate,
    time: time,
    interest: interest
    };

     // pushing object into array interestData
    interestData.push(interestPerArrayOfObject);

    // condition  to dynamically set the value of rate to 2
    }else if(principal < 2500 || time <= 1){
    rate = 2
    interest = (principal * rate * time) / 100;
    interestPerArrayOfObject = {
    principal: principal,
    rate: rate,
    time: time,
    interest: interest
    };
     // pushing object into array interestData
    interestData.push(interestPerArrayOfObject);


        // condition  to fall back to default value for rate.
    }else{
    rate = data[i].rate
    interest = (principal * rate * time) / 100;
    interestPerArrayOfObject = {
    principal: principal,
    rate: rate,
    time: time,
    interest: interest
    };
    interestData.push(interestPerArrayOfObject);
    }
    }
    console.log(interestData);
    return interestData;
    }
    interestCalculator(data);
