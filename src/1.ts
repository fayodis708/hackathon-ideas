const generateRandomCode = () => {
  const codeLength = Math.floor(Math.random() * 10) + 5;
  let code = "";

  for (let i = 0; i < codeLength; i++) {
    code += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  return code;
};
