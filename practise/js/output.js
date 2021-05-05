
function f2() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i);
    }, 1000 *  i);
  }
}

const obj = {
  counter: 1,
  arrowFunc: () => {
      console.log(this);
      console.log(this.counter + 1);
  },
  genericFunc: function() {
      console.log(this);
      console.log(this.counter + 1);
  }
};

obj.arrowFunc();
obj.genericFunc();

const users = [{
  id: 1,
  name: 'first user',
  isActive: true
}, {
  id: 2,
  name: 'second user',
  isActive: false
}];

const activeUsers = users.filter(user => user.isActive);
activeUsers[0].name = 'changed user';
console.log(users);

const people = [
  {
    name: 'Alice', age: 21
  },
  {
    name: 'Max', age: 20
  },
  {
    name: 'Jane', age: 20
  },
  {
    name: 'Kevin', age: 20
  }
];
const a = {
  '20': [
    {
      name: 'Max', age: 20
    },
    {
      name: 'Jane', age: 20
    },
    {
      name: 'Kevin', age: 20
    }
  ],
  '21': [
    {
      name: 'Alice', age: 21
    }
  ]
}

let x = [];
let y = x;

console.log(x===y) // true
console.log(x==y) // true

x = [];

console.log(x===y) // false
console.log(x==y) // false
