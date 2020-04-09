/*
In: number, arr
Out: array

Rules:
- number = id of the object in the transaction array
- arr = transactions array
- array of objects
- each object represents a transaction
  - each transaction has an id, movement, quantity

AL:
- this is a filter operation
- we need to filter over the array
- filter out any objects that don't have an id equal to the one given to us
*/

var transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 15 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ]

function transactionsFor(itemId, transactions) {
  return transactions.filter(item => itemId === item.id);
}

console.log(transactionsFor(101, transactions));