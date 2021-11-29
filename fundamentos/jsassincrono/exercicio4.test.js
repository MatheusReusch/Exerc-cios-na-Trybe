const { test, expect } = require("@jest/globals");

test('Não deveria passar!', (done) => {
    setTimeout(() => {
      try {  
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    } catch(error) {
        done(error)
    }
    }, 500);
  });

  const asyncSum = (a, b, callback) => {
    setTimeout(() => {
      const result = a + b;
      callback(result);
    }, 500);
  };

  test('Testando asyncSum, soma 5 mais 10', (done) => {
    asyncSum(5, 10, (result) => {
      try {
        expect(result).toBe(15);
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  function somar(num1, num2, callback) {
    setTimeout(() => {
        const result = num1 + num2
        callback(result)
    }, 2000)
  }

  test('Função soma funciona', (done) => {
    somar(10, 5, (result) => {
        try {
            expect(result).toBe(15)
            done()
        } catch(error) {
            done(error)
        }
    })
  })

  function sub(n1, n2, callback) {
      setTimeout(() => {
        const result = n1 - n2;
        callback(result)
      }, 1000)
  }

  test('Função sub funciona', (done) => {
      sub(10, 5, (result) => {
        try {  
        expect(result).toBe(5)
        done()
    } catch (e) {
      done(e)
    }
      })
  })