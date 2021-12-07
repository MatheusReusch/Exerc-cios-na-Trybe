// githubApi.test.js

const { test, expect } = require('@jest/globals');
const fetch = require('node-fetch');
const url = 'https://api.github.com/orgs/tryber/repos'

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
    .catch((error) => error)
);
test('Inclui os repositórios indicados', async() => {
    expect(await getRepos(url)).toContain('sd-01-week4-5-project-todo-list')
    expect(await getRepos(url)).toContain('sd-01-week4-5-project-meme-generator')
})

test('Retorna erro', async() => {
  //console.log(await getRepos('https://www.github.com'))
  const erro = await getRepos('https://www.github.com')
  expect(erro).toEqual(new fetch.FetchError(erro.message))
})