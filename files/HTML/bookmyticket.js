
function bookmyTicket()
{
    alert("Welcome to Book my Tickets")
    let num=prompt("Enter the Number of Tickets for the show")
    if(num!=0 & num<=10)
    {
        pay=num*150
        alert("The Total cost of the Tickets is "+pay)
        let res=confirm('Your Tickets Booked')
        if(res!=true)
        {
            bookmyTicket()
        }

    }
    else if(num>10)
    {
        alert("Maximum booking till 10 tickets")
        bookmyTicket();
    }
    else
    {
        let con=confirm("Are you sure want to cancel the Ticket?")
        if(con!=true)
        {
            bookmyTicket()
        }

    }
}

bookmyTicket()
swal("Thank you for using our Website");
