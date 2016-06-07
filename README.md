<h1 align="center">Node.js GraphQL Example</h1>
<p align="center">
    <sup>A simple GraphQL example using Node.js, Express.js, PostgreSQL and Sequelize</sup>
    <br>
</p>

###Usage
Start the server
```bash
npm start
```
Navigate to the GraphQL endpoint
```
http://localhost:3000/graphql
```
Add any query to the url paramater, for example:
```
http://localhost:3000/graphql?query={customers{first_name, last_name, email}}
http://localhost:3000/graphql?query={customers(id: 1){first_name, last_name, email}}

```
