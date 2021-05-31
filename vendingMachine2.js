//articles in the vending machine
let articles = {
  A01:{
    name:'Smarlies', quantity: 100, price: 1.60
    },
  A02: {
    name:'Carampar', quantity: 50, price: 0.60
  },
  A03:{
    name:'Avril',  quantity: 20, price: 2.10
  },
  A04: {
    name:'KokoKola',quantity: 10, price: 2.95
  }
}
//show the article table
console.table(articles)

//array for the sale throug out the day
let sales = new Array(24).fill(0)

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
        //logic of the vending machine
      articles[code].quantity--;
      credit -= articles[code].price;
      balance += articles[code].price;
      console.log(`Vending ${articles[code].name}`)
      //get the hours of the sale
      let h = new Date().getHours()
      //condition for calculate the sale
        if(sales[h] == 0){
          sales[h] = articles[code].price
        }else{
          sales[h] += articles[code].price
        }
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
//function to return the date/time
function setTime() {
  let now = new Date()
  console.log(now)
}

//function to return the thrr best sale
function bestSale(sales) {
  let arr = [...sales]
  let sor = arr.sort(function(a, b){return b-a}); 
  for (let i = 0; i < 3; i++) {
    console.log(`Hour ${sales.indexOf(sor[i])} generated a revenue of ${sor[i]}`)
    
  }
}
//bestSale(sales)