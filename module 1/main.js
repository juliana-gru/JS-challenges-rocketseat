// 1st exercise
const address = {
  street: 'Glebe point road',
  number: 191,
  suburb: 'Glebe',
  city: 'Sydney',
  state: 'NSW'
};

function showAddress(obj) {
  return `O usuário mora em ${obj.city} / ${obj.state}, no bairro ${obj.suburb}, na rua "${obj.street}" com
  nº ${obj.number}.`
}

console.log(showAddress(address));

//2 exercise
function pares(x, y) {
  const pares = []
  
  for (let i = x; i <= y; i++) {
    if (i % 2 === 0) pares.push(i);
  }

  return pares;
}

console.log(pares(-8,9));


// 3rd exercise
function hasJavascript(skills) {
  return skills.includes('Javascript');
}

const skills = ['Javascript', 'Node', 'Php'];
const skills2 = ['Python', 'Java', 'VueJS'];
console.log(hasJavascript(skills));
console.log(hasJavascript(skills2));

// 4th exercise
function experience(years) {
  const xp = years <= 1 ? 'Beginner' 
  : years <= 3 ? 'Intermediate' 
  : years <= 6 ? 'Advanced'
  : 'Jedi';
  return xp;
}

const yearsOfXp = 5;
console.log(experience(yearsOfXp));

//5th exercise
var usuarios = [
  {
  nome: "Diego",
  habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
  nome: "Gabriel",
  habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

function showSkills(users) {
  for (let value of users) {
    const name = value.nome;
    const skills = value.habilidades.join(`, `);
    console.log(`O ${name} possui as habilidades: ${skills}.`);
  }
  // OR (My preferred)
  // users.forEach( user => {
  //   const name = user.nome;
  //   const skills = user.habilidades.join(', ');
  //   console.log(`O ${name} possui as habilidades: ${skills}.`) 
  // })
}

// console.log(showSkills(usuarios));
showSkills(usuarios)
 