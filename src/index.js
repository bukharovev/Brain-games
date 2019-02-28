import readlineSync from 'readline-sync';


export default () => {
  const nameUser = readlineSync.question('May i have your name?');
  console.log(`Hello, ${nameUser}!`);
  };