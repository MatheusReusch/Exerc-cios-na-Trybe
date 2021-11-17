function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const mostra = (callback) => {
      return callback()
  }
  
  function danoDragao () {
      let dano = randomIntFromInterval(15, dragon.strength)
      return dano 
  }

  function danoWarrior () {
    let dano = randomIntFromInterval(warrior.strength, warrior.strength * 2)
    return dano 
}
let manaConsumida;
 function mago() {
    let dano = randomIntFromInterval(mage.intelligence, mage.intelligence * 2)
    let mana = mage.mana
    if (mana < 15) {manaConsumida = 0; dano = 'Não possui mana suficiente'}
    else if (mana >= 15) {manaConsumida = 15} 
    let objeto = {dano, manaConsumida}
    return objeto
 }

mostra(danoDragao)
mostra(danoWarrior)
console.log(mago().dano)

const gameActions = {
    turnoWarrior: () => {
      dragon.healthPoints = dragon.healthPoints - danoDragao()
      warrior.damage = danoWarrior()
      return battleMembers
    },
    turnoMage: () => {
       dragon.healthPoints = dragon.healthPoints - mago().dano
       mage.damage = mago().dano
       mage.mana = mage.mana - mago().manaConsumida
       return battleMembers
    },
    turnoDragon: () => {
      mage.healthPoints = mage.healthPoints - danoDragao()
      warrior.healthPoints = warrior.healthPoints - danoDragao()
      dragon.damage = danoDragao()
      return battleMembers
    },
    final: () => {
        gameActions.turnoWarrior()
        gameActions.turnoMage()
        gameActions.turnoDragon()
        return {mage, warrior, dragon}
    }
  };

  console.log(gameActions.final())
