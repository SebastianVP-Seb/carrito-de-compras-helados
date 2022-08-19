
export const greet = ( name ) => {
  return `Hola, ${name}!. Saludos`;
}

export const randomRange = ( max, min ) => {
  return Math.trunc(Math.round(Math.random() * (max - min) + min));
}

const TAX = 0.16;
export const calculateIVA = ( mount ) => {
  return (mount * TAX);
}

export const getUser = ( id, username )=>{
  return ({ id, username })
}

export const invertedPhrase = (phrase) => {
  return phrase.split("").reverse().join("")
}