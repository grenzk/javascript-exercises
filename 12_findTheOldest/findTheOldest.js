const findTheOldest = function (people) {
  people.forEach((person) => {
    const today = new Date();
    const birthDate = new Date(person.yearOfBirth.toString());
    const currentAge = today.getFullYear() - birthDate.getFullYear();

    if ("yearOfDeath" in person) {
      person.age = person.yearOfDeath - person.yearOfBirth;
    } else {
      person.age = currentAge;
    }
  });

  const oldest = people.find((person) => {
    return person.age === Math.max(...people.map((person) => person.age));
  });

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
