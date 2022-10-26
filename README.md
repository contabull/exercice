# How to start

- Fork this repository as a public repository
- Launch a MySQL docker container by using the `docker-compose.yaml` configuration provided
- In the end of the exercice, send us your forked repository

# Exercice tasks

- Use prisma to interact with the database HINT: [NestJS Docs](https://docs.nestjs.com/recipes/prisma#set-up-prisma)
  - Create a script to migrate your database. 
  - Create a seed file and script to seed some data according to the app specification below.
- Setup a GraphQL endpoint using the code-first approach. Your GQL API should contain the following resolvers: HINT: [NestJS Docs](https://docs.nestjs.com/graphql/quick-start)
  - MUTATION: createAccount -> creates user account
  - QUERY: login -> returns a JWT token
  - MUTATION: updateProfile -> create/updates the profile of the logged in user.
  - QUERY: me -> return the logged in user profile & user data
- Create a React __TypeScript__ application using ViteJS HINT: [ViteJS Docs](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
  - Use [Chakra-UI](https://chakra-ui.com/getting-started)
  - Use [Codegen](https://www.the-guild.dev/graphql/codegen/docs/getting-started) to generate your GraphQL hooks
- Build a simple authentication system following this [Figma file](https://www.figma.com/file/pS3uSRdmNafqjHl3TGwOrn/Authentication-exercice?node-id=0%3A1) (extra points for taking into consideration mobile users):
  - Login page
  - Signup page
  - Dashboard page (only accessible to logged in users) where you can see the user profile
  - Profile edit page (preferably with field validation) HINT: use RHF and Yup

