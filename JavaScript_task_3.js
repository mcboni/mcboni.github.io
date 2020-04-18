//Defining function
function CheckRemender(x){
    // declaring variable to store string values
    var str="";
   // defining an empty array that would receive results of function
    var ResultArray=[];

    var i;
    // for loop to itrate ove range of number passed as argument in the function
    for(i=1;i<=x;i++){


        // if statement to check if a number is divisible by 2 and not 3 and 5
        if(i%2==0 && i%3!=0 && i%5!=0){

            ResultArray.push( str="yu");
        
           
        } 


         // if statement to check if a number is divisible by 3 and not 2 and 5
         if(i%3==0 && i%2!=0 && i%5!=0){
            ResultArray.push( str="gi"); 
        }



         // if statement to check if a number is divisible by 5 and not 2 and 3
        if(i%5==0 && i%3!=0 && i%2!=0){                                           
            ResultArray.push( str="oh"); 
        }



         // if statement to check if a number is divisible by 2 and 5
        if(i%2==0 && i%5==0){
            ResultArray.push( str=("yu-oh")); 
        }


         // if statement to check if a number is divisible by 2 and 3
        if(i%2==0 && i%3==0){
            ResultArray.push( str=("yu-gi")); 
        }


 // if statement to check if a number is divisible by 3 and 5
        if(i%3==0 && i%5==0){
            ResultArray.push( str=("gi-oh")); 
        }


         // if statement to check if a number is not divisibl by 2, 3 and 5

        if(i%5!==0 && i%2!==0 && i%3!==0 ){
            ResultArray.push( str=i); 
           
        } 
    }
    // return statemen for function
    return  ResultArray;

}
// calling function with argument 100
CheckRemender(100);

//calling function with argunment 40
CheckRemender(40);

