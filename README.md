# react-ssr-basic
** Git repo : https://github.com/thatsatul/react-ssr-basic.git

** To run app locally: npm install && npm run dev

** To check lint: npm run lint

** Deploying with docker on heroku: https://cryptic-citadel-91205.herokuapp.com/

-Required heroku-cli and docker-cli and inside repo.
- docker build -t registry.heroku.com/cryptic-citadel-91205/web
- docker push registry.heroku.com/cryptic-citadel-91205/web
- heroku container:release web
- Open heroku app
- To see logs : heroku logs --tail

** Deploying with circleCI: https://sapient-git.herokuapp.com/

- All the configurations are inside .circleci/config.yml
- git push origin master
