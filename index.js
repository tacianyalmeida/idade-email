function verificaEmail(email){
   const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
  return regex.test(email) 
};

console.log(verificaEmail('tacianny.allmeida031@gmail.com'))

module.exports = verificaEmail