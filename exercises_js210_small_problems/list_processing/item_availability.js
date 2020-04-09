/*
In: itemid, transactions array
Out: boolean

Rules:
- return true if the net value of quantity is more than 0
- return false otherwise

AL:
- we can retreive all the transaction regarding the item with our transactionsFor method, which returns an array
- we can map over the array and reduce it
  - but on each iteration if the movement is 'out' assign negative value of quantity
  - if it is in, return positive value of quantity

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
                     { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(itemId, transactions) {
  return transactions.filter(item => itemId === item.id);
}

function sum(acc, val) {
  return acc + val;
}

function isItemAvailable(itemId, transactions) {
  transactions = transactionsFor(itemId, transactions);
  return transactions.map(item => {
    if (item.movement === 'out') {
      return -1 * item.quantity;
    } else {
      return item.quantity;
    }
  }).reduce(sum) > 0;
}

console.log(isItemAvailable(105, transactions));

















