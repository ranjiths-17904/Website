// // /*static and called static*/

// // function f1(data)
// // {
// //     console.log(`Hello : f1 : ${data}`);
// //     f2();
// // }

// // function f2(data)
// // {
// //     console.log("Hello : f2"); /* dynamically concatenated */
// // }

// // setTimeout(f1 , 3000 , "Hello")

// // parameter pass panna first function then time


// /*Asychronous call back */
// function success()
// {
//     console.log("Success")
// }

// function fail()
// {
//     console.log("Fail")
// }

// function error(){
//     console.log("Error occur")
// }

// function exec(data, callback)
// {
//     if(data)
//     {  
//      console.log(`balance : ${data}`);
//     }
//     setTimeout(callback, 2000)
// }
//     function trig()
//     {
//         const data = 5
//         if(data > 0)
//         {
//             exec(data , success)
//         }
//         else if(data <= 0)
//         {
//             exec(data , fail)
//         }
//         else{
//             exec(data , error)
//         }
//     }
//     trig()

// async function API()
// {
//     const response  = await fetch("https://66e526d75cc7f9b6273c69f8.mockapi.io/register")
//     const data = await response.json()
//     console.log(data)
//     return data;
// }
// API()

//async function API()
// {
//     const response  = await fetch("https://66e526d75cc7f9b6273c69f8.mockapi.io/register")
//     const data = response.json() /* await no used error occur
//     console.log(data)
//     return data;
// }
// API()



// async function API()
// {
//     try{
       
//     const response  = await fetch("https://66e526d75cc7f9b6273c69f8.mockapi.io/register")
//     const data = await response.json()
//     console.log(data)
//     return data;
//     }
//     catch(error)
//     {
//         console.log(error)
//     }
// }
// API()
/*Map for loop maari work aaguva  , .map is not a function because it is not a array namba pass panra data array format illaina varum means null or single obj vara*/

async function APIDATA() {
    const apidata = await API()
    console.log(apidata)
}
APIDATA()

async function APIDATA()
{
    const apidata = await API()
    console.log(apidata)
        const mockdata = [{
            "name" : "hello"
        }]

        const structuredatamap = apidata.map((data) => {console.log(data)})
}