# react-ssr-basic

To run app : yarn start


Deploying with docker on heroku:

Required heroku-cli and docker-cli and inside repo.

- docker build -t registry.heroku.com/cryptic-citadel-91205/web
- docker push registry.heroku.com/cryptic-citadel-91205/web
- heroku container:release web
- Open heroku app
- To see logs : heroku logs --tail

Deploying with circleCI:

- All the configurations are inside .circleci/config.yml
- git push origin master