const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const nota = (rc, re, func) => {
    func(rc, re)
}

function verifica(rc, re) {
  let acertos = 0;
    for (let i = 0; i < rc.length; i += 1) {
      if (rc[i] === re[i]) {acertos++}
      else if (re[i] == 'N.A') {acertos = acertos + 0}
      else if (rc[i] !== re[i]) {acertos = acertos - 0.5}
  } console.log(acertos)
}

nota(rightAnswers, studentAnswers, verifica)