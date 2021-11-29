const userFullName = (firstName, lastName) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = (firstName, nationality) => `${firstName} is ${nationality}`;

const getUser = (callback1, callback2) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  }; 
  const primnome = userToReturn.firstName
  const lastnome = userToReturn.lastName
  return callback1(primnome, lastnome) + ' - ' + callback2(primnome, userToReturn.nationality)
};

console.log(getUser(userFullName, userNationality)); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"


