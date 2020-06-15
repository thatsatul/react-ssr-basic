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

** Deploying app with circleCI CI/CD: https://sapient-git.herokuapp.com/

- All the configurations are inside .circleci/config.yml
- git push origin master
- heroku logs -t --app sapient-git


** PWA Enabled

- App is installable and can run as native
- Go to https://sapient-git.herokuapp.com/ > Enable developer tool > Click on network > Turn network offline > Reload page > Page comes from cache

** Unit Test Cases: npm run jest

** Unit test cases covrage: npm run jest-coverage

