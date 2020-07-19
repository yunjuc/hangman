# Hangman Game

The purpose of this project is to create a simple full-stack hangman game. The app is implemented with [React](https://reactjs.org/) on the frontend and [Django](https://www.djangoproject.com/) and [GraphQL](https://graphql.org/) on the backend.

Within this project you will find examples of:
- React components with [Apollo](https://www.apollographql.com/) client
- Component testing with [Jest](https://jestjs.io/) and [Enzyme](https://enzymejs.github.io/enzyme/)
- Django web framework
- GraphQL API with [Graphene](https://graphene-python.org/)
- API testing with [Pytest](https://docs.pytest.org/en/stable/)
- Responsive web design

## Set Up
### Backend

You should have [Pipenv](https://pypi.org/project/pipenv/) installed in your computer before the next step.

- In the **root** folder, run `pipenv install` to install python packages
- Run `pipenv shell` to enter the project's virtualenv
- Run `python manage.py migrate` to create database *(first time only)*
- Run `python manage.py loaddata ./hangman/fixtures/*` to load data *(first time only)*
- Run `python manage.py runsslserver 0.0.0.0:8888` to start the backend server

Run `py.test` to launch the backend test runner.

### Frontend
You should have [Yarn](https://classic.yarnpkg.com/en/) installed in your computer before the next step.

- In the **frontend** folder, run `yarn install` to install node modules
- When the backend server is started, run `yarn start` and the app will be running on [http://localhost:3000](http://localhost:3000) in the browser

Run `yarn test` to launch the frontend test runner.

## Author
Yunju Chen, [yunjuc](https://github.com/yunjuc) | [@yunjuc](http://twitter.com/yunjuc/)
