//articles in the vending machine
let articles = {
  A01:{
    name:'Smarlies', quantity: 10, price: 1.60
    },
  A02: {
    name:'Carampar', quantity: 5, price: 0.60
  },
  A03:{
    name:'Avril',  quantity: 2, price: 2.10
  },
  A04: {
    name:'KokoKola',quantity: 1, price: 2.95
  }
}
//show the article table
console.table(articles)

//formate the currency in CHF
let f = new Intl.NumberFormat('fr-CH',
  { style: 'currency', currency: 'CHF' })

// declaring variable
let credit = 0;
let balance = 0;

//function to add credit
function insert(amount) {
  credit += amount
  console.log(f.format(amount))
}
//choose items from vending machine
function choose(code) {
  //condition if the item is existe
  if(code in articles){
    //condition if the item is in stock
    if(articles[code].quantity <= 0){
      console.log(`Item ${articles[code].name}: Out of stock!`)
    }
    else{
      //condition if we have enough crédit
      if(articles[code].price > credit){
        console.log('Not enough money!')
      }
      else{
      articles[code].quantity--;
      credit -= articles[code].price;
      balance += articles[code].price;
      console.log(`Vending ${articles[code].name}`)
      }
    }
  }
  else{
    console.log('Invalid selection!');
  }
}
//function to return change
function getChange() {
  console.log(f.format(credit))
}
//function to return balance
function getBalance() {
  console.log(f.format(balance))
}


//Test
/* insert(3.40)
choose('A01')
getChange() */

/* insert(2.10)
choose('A03')
getChange()
getBalance() */

/* choose('A01') */

/* insert(1.00)
choose('A01')
getChange()
choose('A02')
getChange() */

/* insert(1.00)
choose('A05') */

/* insert(6.00)
choose('A04')
choose('A04')
getChange() */

/* insert(6.00)
choose('A04')
insert(6.00)
choose('A04')
choose('A01')
choose('A02')
choose('A02')
getChange()
getBalance() */