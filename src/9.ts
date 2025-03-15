export const greet = (name: string): string => {
  const greeting = "Hello" + name;
  console.log(greeting);
  return greeting;
};

export const sayHi = (name: string): string => {
  const message = `Hi, ${name}!`;
  console.log(message);
  return message;
};
