var Estratti = [];

function FindInEstratti(a) {
  for (let index = 0; index < Estratti.length; index++) {
    if (Estratti[index] === a) return true;
  }

  return false;
}

export function EstraiIndice(arrLength) {
  if (Estratti.length === arrLength) {
    Estratti = [];
  }

  let a;
  let UnLoop = 0;
  do {
    if (UnLoop === 10) {
        Estratti=[]
        return a = Math.floor(Math.random() * (arrLength - 1));
    } else {
      UnLoop++;
      a = Math.floor(Math.random() * (arrLength - 1));
    }
  } while (FindInEstratti(a));
  Estratti.push(a);

  return a;
}
