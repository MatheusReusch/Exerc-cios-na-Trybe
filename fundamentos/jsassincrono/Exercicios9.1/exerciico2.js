const userFullName = (firstName, lastName ) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ( firstName, nationality ) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback1) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    if (callback1 === userFullName) {
    console.log(callback1(user.firstName, user.lastName));
}
    else if (callback1 === userNationality) {
        console.log(callback1(user.firstName, user.nationality));
    }
    else {console.log('This is not a function')}
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality);
getUser('userNation'); // deve imprimir "Ivan is Russian" depois de um certo tempo