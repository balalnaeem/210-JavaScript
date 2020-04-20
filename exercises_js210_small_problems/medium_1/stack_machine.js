/*
stack is a list of values that grows and shrinks dynamically.
  - stack may be implemented as an array
  - it uses push and pop methods

stack-and-register uses stack values
each operation operates on a register
register = current value
register is not part of the stack
operation that requires two values, pops the recently pushed item from stack, operates on the popped value and the register and stores the result in the register

Consider a MULT operation in a stack-and-register language. It multiplies the stack value with the register value, removes the value from the stack, and stores the result back in the register.

in: string
out: number(s)

- all arguments are vlaid.
- we won't get uknown tokens
- stack is [] and register is 0 initially

algorithm:
- initialze intial value of stack and register
- convert the commands into an array
-  start a switch statement
- loop over the array of commands, based on the current command
  perform required operation

*/

const VALID_OPS = ['PUSH', 'ADD', 'SUB', 'MULT', 'DIV', 'MOD',
  'POP', 'PRINT'];

function validToken(stack, op) {
  let validity = true;

  if (op !== 'PUSH' && op !== 'PRINT' && stack.length === 0 ) {
    validity = false;
  }

  if (!VALID_OPS.includes(op)) {
    validity = false;
  }

  if (/[0-9]/g.test(op)) {
    validity = true;
  }

  return validity;
}

function minilang(input) {
  let op;
  let stack = [];
  let register = 0;
  let commands = input.split(' ');
  let numReg = new RegExp('[0-9]', 'g');

  for (let i = 0; i < commands.length; i += 1) {
    op = commands[i];
    try {
      if (!validToken(stack, op)) {
        throw new Error('Not a valid command.')
      }
    } catch(e) {
      console.log(e);
      break;
    }

    if (op === 'PRINT') {
      console.log(register);
    } else if (numReg.test(op)) {
      register = Number(op);
    } else if (op === 'PUSH') {
      stack.push(register);
    } else if (op === 'MULT') {
      register *= stack.pop();
    } else if (op === 'ADD') {
      register += stack.pop();
    } else if (op === 'POP') {
      register = stack.pop();
    } else if (op === 'DIV') {
      register = Math.round(register / stack.pop());
    } else if (op === 'MOD') {
      register %= stack.pop();
    } else if (op === 'SUB') {
      register -= stack.pop();
    }
  }

}

minilang('ADD PRINT');




















