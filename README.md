# Hackernews-Feed
** Git repo : https://github.com/thatsatul/react-ssr-basic.git

** To run app locally in development mode: npm install && npm run dev

** To run app i production mode: npm run prod

** To check lint: npm run lint

** Deploying app with docker on heroku: https://cryptic-citadel-91205.herokuapp.com/

-Required heroku-cli and docker-cli and inside repo.
- docker build -t registry.heroku.com/cryptic-citadel-91205/web .
- docker push registry.heroku.com/cryptic-citadel-91205/web
- heroku container:release web worker
- Open heroku app
- To see logs : heroku logs --tail --app cryptic-citadel-91205

** Deploying app with circleCI CI/CD: https://sapient-g.herokuapp.com/

- All the configurations are inside .circleci/config.yml
- git push origin master
- heroku logs -t --app sapient-g


** PWA Enabled

- Install as native app > App is installable and can run as desktop app.
- Go to https://sapient-g.herokuapp.com/ > Enable developer tool > Click on network > Turn network offline > Reload page > Page comes from cache

** Unit Test Cases: npm run jest

** Unit test cases covrage: npm run jest-coverage

** Jest output :

Acids-Macbook:react-ssr-hydration atulanand$ 
Acids-Macbook:react-ssr-hydration atulanand$ npm run jest

> react-ssr-hydration@1.0.0 jest /Users/atulanand/projects/interviews/react-ssr-hydration
> jest

 PASS  __test__/reducers/news.spec.js
 PASS  __test__/actions/news.spec.js

Test Suites: 2 passed, 2 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        6.872s
Ran all test suites.
Acids-Macbook:react-ssr-hydration atulanand$ 


** Lint output

Acids-Macbook:react-ssr-hydration atulanand$ npm run lint

> react-ssr-hydration@1.0.0 lint /Users/atulanand/projects/interviews/react-ssr-hydration
> eslint . && echo 'Lint successful and no errors found'

Warning: React version not specified in eslint-plugin-react settings. See https://github.com/yannickcr/eslint-plugin-react#configuration .

Lint successful and no errors found

Acids-Macbook:react-ssr-hydration atulanand$ 

** Jest Coverage:

Acids-Macbook:react-ssr-hydration atulanand$ npm run jest-coverage

> react-ssr-hydration@1.0.0 jest-coverage /Users/atulanand/projects/interviews/react-ssr-hydration
> jest --coverage

 PASS  __test__/reducers/news.spec.js
 PASS  __test__/actions/news.spec.js
-------------|----------|----------|----------|----------|-------------------|
File         |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------|----------|----------|----------|----------|-------------------|
All files    |    88.71 |    68.42 |       80 |    88.14 |                   |
 action      |    93.55 |    66.67 |      100 |    92.86 |                   |
  news.js    |       92 |    66.67 |      100 |    90.91 |             17,24 |
  types.js   |      100 |      100 |      100 |      100 |                   |
 reducers    |     87.5 |    85.71 |      100 |     87.5 |                   |
  news.js    |     87.5 |    85.71 |      100 |     87.5 |                30 |
 utils       |    82.61 |       50 |     62.5 |    82.61 |                   |
  request.js |      100 |      100 |      100 |      100 |                   |
  storage.js |       80 |       50 |    57.14 |       80 |       11,15,19,23 |
-------------|----------|----------|----------|----------|-------------------|

Test Suites: 2 passed, 2 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        7.464s
Ran all test suites.
Acids-Macbook:react-ssr-hydration atulanand$ 
