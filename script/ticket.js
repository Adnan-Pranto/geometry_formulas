function myBusTicket() {
    const amountTickect = document.getElementById('quantity').value;
    const number = parseInt(amountTickect)
    const amount = 500 * number;
    // console.log(amount)

    const takaBd = document.getElementById('total-ammount');
   takaBd.innerText = amount;

    // if (amount > = 4) {
    //     console.log('okk')
    // }
    // else {
    //     console.log('invalid')
    // }
}