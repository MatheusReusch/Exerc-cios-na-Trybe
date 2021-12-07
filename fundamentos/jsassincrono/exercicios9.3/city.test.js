// cicles.test.js

const { test, expect, beforeEach } = require("@jest/globals");

let cities = [];

beforeEach(() => {
    cities = []
})

const addCity = (city) => {
  cities.push(city);
  return cities
};

const removeCity = (city) => {
  cities = cities.filter((eachCity) => eachCity !== city);
  return cities
};

test('Função adiciona cidades funciona', () => {
    expect(addCity('Porto Alegre')).toEqual(['Porto Alegre'])
    expect(addCity('BH')).toEqual(['Porto Alegre', 'BH'])
})

test('Função remove cidades funciona', () => {
    cities = ['Porto Alegre', 'BH']
    expect(removeCity('BH')).toEqual(['Porto Alegre'])
})