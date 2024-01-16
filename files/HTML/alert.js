// function checkage()
// { 
// let age=prompt('Enter the age')
// if(age>17)
// {
// alert(" Eligible to Vote")
// }
// else
// {
//     alert(" Not Eligible to Vote")
// }
// }
// checkage();
// let res=confirm('Exit the Window')
// if(res!=true)
// {
//   checkage();
// }



// function display()
// {
// let name=document.getElementById("name").value;
// let pass=document.getElementById("pass").value;
// if(name=="Admin" & pass=="we1c@me1")
// {
// swal("Welcome "+name," ","success")
// }
// else
// {
//     swal("Invalid User"," ","error")
// }
// }


function displayopr()
{
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let Opr=document.getElementsById("opr").value;
    // let sub=document.getElementById("Sub").value;
    // let mul=document.getElementById("Multiply").value;
    // let div=document.getElementById("Divide").value;
    // let mod=document.getElementById("Mod").value;
    switch(Opr)
    {
        case 'Add':
            swal(num1+num2);
        case 'Sub':
            swal(num1-num2);
        case 'Mul':
            swal(num1*num2);
        case 'Div':
            swal(num1/num2);
        case 'Mod':
            swal(num1%num2);

    }
}