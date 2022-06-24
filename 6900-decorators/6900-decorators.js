// Декоратор-шпион https://learn.javascript.ru/task/spy-decorator

function work(a, b) {
  alert( a + b ); 
}

function spy(func) {
  makeWrapper.calls = [];
  
  function makeWrapper(...args) {
    makeWrapper.calls.push(args);
    return func.apply(this, arguments);
  }

  return makeWrapper;
}

work = spy(work);

work(1, 2);
work(4, 5);

for (let args of work.calls) {
  alert( 'call:' + args.join() );
}

//Задерживающий декоратор https://learn.javascript.ru/task/delay

function f(x) {
  alert(x);
}

function delay(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test");
f1500("test");