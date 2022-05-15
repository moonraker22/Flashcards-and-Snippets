<h2 align="center">
<strong>KNZ Flashcards And Snippets</strong> 
</h2>

***

<h4 align="center">
A project for CS50
</h4>

***


<div align="center">
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.qLcU7S0-KTkbSmEomofo-wAAAA%26pid%3DApi&f=1" />
</div>

***

I built a fullstack application with many different languages, libraries, and technologies. I used Django as the backend server, I then integrated the Django Rest Framework. I also integrated Graphene, Graphene-Django, and Graphene-Relay to provide data to my frontend.
On the frontend I used the Next.js React library to to render the data from the backend. The app is a flashcards and snippets application where the user can create diffent decks of flashcards arranged by topic. The flashcard has a question with a textarea for the user to type the response. Then the user can click the button to show the answer. In the snippets section the user can save code snippets they like or use organized by category. I spent a lot of time on this app and really used it as a testing ground to learn all the integrated technologies.

***

### Server 
:shipit:

I started the project by using [Cookie Cutter Django](https://github.com/cookiecutter/cookiecutter-django). Cookiecutter Django is a framework for jumpstarting production-ready Django projects quickly. It creates a project with 100% test coverage. It includes 12-Factor based settings via django-environ. It implements Registration via django-allauth. It also includes a custom user model, and a Procfile for deploying to Heroku. I used a PostgreSQL database and the Django ORM using models to store user, flashcards, and snippet data. I then integrated [Graphene-Django](https://docs.graphene-python.org/projects/django/en/latest/) which "provides some additional abstractions that make it easy to add GraphQL functionality to your Django project". Graphene-Django makes it easy to use GraphQL with your Django project. [GraphQL](https://graphql.org/) is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL makes it easy to use one endpoint to query just the data you need from the server. 

***

<div align="center">
    <img src="https://camo.githubusercontent.com/92ec9eb7eeab7db4f5919e3205918918c42e6772562afb4112a2909c1aaaa875/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313630373535343338352f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6c6f676f2e706e67" />
</div>

### Frontend
:shipit:

On the frontend I used the Next.js React library for the UX/UI. According to [NextJS](https://nextjs.org/) "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed."
I enjoyed using NextJS as the file based routing structure makes it easy to create url patterns. It includes static site generation and server side rendering. For the UX/UI I used [MUI](https://mui.com/). MUI is a " accessible library of foundational and advanced components, enabling you to build your design system and develop React applications faster." It is similar to bootstrap in that it makes it easier to create consistant reusable styling for your site. To fetch data from the server I used [Apollo Client](https://www.apollographql.com/docs/react/) which "is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL." It includes some great hooks that aloow you to fetch data in react from a GraphQL server. I experimented with different ways of passing context down the component tree. I tried [Jotai](https://jotai.org/) as well as the React Context API. I created a layout with the [MUI Treasury](https://mui-treasury.com/) which makes it easy to craete navigation and footers for your entire site without having to manually include the elemnts on every page. The UX/UI is far from polished as I integrated a lot of different technologies and really spent a lot of time exploring the features of them however this is not a production site and a learning experience.


