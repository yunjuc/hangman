# Hangman Game
<p align="center">
  <img src="https://user-images.githubusercontent.com/18255878/87886088-1a026800-c9cf-11ea-8d99-d60a2d489068.jpg" />
</p>

The goal of the project is to create a simple full-stack app using [GraphQL](https://graphql.org/). The app is implemented with [React](https://reactjs.org/) on the frontend and [Django](https://www.djangoproject.com/) on the backend. The final app is deployed on Heroku and you can see the live app on [https://hangman-react-django.herokuapp.com/](https://hangman-react-django.herokuapp.com/).

Within this project you will find examples of:
- React components with [Apollo Client](https://www.apollographql.com/docs/react/)
- Frontend unit test with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- Django web framework
- GraphQL API with [Graphene](https://graphene-python.org/)
- Backend unit test with [Pytest](https://docs.pytest.org/en/stable/)

## Set Up
### Backend
*Note: You should have [Pipenv](https://pypi.org/project/pipenv/) installed in your computer before moving to the next step.*

- From the root folder, run `pipenv install` to install python packages. *(first time only)*
- Run `pipenv shell` to enter the project's virtual environment.
- Run `python manage.py migrate` to create database. *(first time only)*
- Run `python manage.py loaddata ./hangman/fixtures/*` to load data. *(first time only)*
- Run `python manage.py runserver` to start the backend server.

To start backend unit test, run `py.test`

### Frontend
*Note: You should have [npm](https://testing-library.com/docs/react-testing-library/intro) or [Yarn](https://classic.yarnpkg.com/en/) installed in your computer before moving to the next step.*

- From the root folder, run `npm install` or `yarn install` to install node modules. *(first time only)*
- With the backend server started, run `npm start` or `yarn start` and the app will be running in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To start the frontend unit test, run `npm test` or `yarn test`

## Author
Yunju Chen, [yunjuc](https://github.com/yunjuc) | [@yunjuc](http://twitter.com/yunjuc/)
