let age = 17;

if(age>=18)
{
    // for single statement, {} is optional
    console.log("You are eligible for driving license");
}
else
{
    // for more than 1 statement, {} is mandatory
    console.log("You are not eligible for driving license");
    console.log(`You need to wait for ${18 - age} years`);   
}
