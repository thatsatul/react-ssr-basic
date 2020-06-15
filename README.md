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

