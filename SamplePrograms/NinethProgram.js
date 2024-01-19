function displayName(person) {
  console.log(`${person.first}${person.last}`);
}

const persons = {
  first: "Virat",

  last: "Kohli",

  twitter: "@vkohli",

  company: "Cricketer",
};
displayName(persons);
