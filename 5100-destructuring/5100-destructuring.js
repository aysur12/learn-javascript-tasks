// Деструктурирующее присваивание https://learn.javascript.ru/task/destruct-user

let user = { name: "John", years: 30 };

const { name, years: age, isAdmin = false } =user;

console.log(name); 
console.log(age); 
console.log(isAdmin);

// Максимальная зарплата https://learn.javascript.ru/task/max-salary

const topSalary= function(salaries) {
  let maxValue = 0;
  let nameWithMaxSalary = null;
  const salariesArr = Object.entries(salaries);


  for(const [name, salaryValue] of salariesArr) {
    if (maxValue < salaryValue) {
      maxValue = salaryValue;
      nameWithMaxSalary = name;
    }
  }

  return nameWithMaxSalary;
}

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(topSalary(salaries))