require('dotenv').config()

const express = require('express')

const app = express()

// const port = 3000

const githubData = {
  "login": "amq001",
  "id": 152616410,
  "node_id": "U_kgDOCRi92g",
  "avatar_url": "https://avatars.githubusercontent.com/u/152616410?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/amq001",
  "html_url": "https://github.com/amq001",
  "followers_url": "https://api.github.com/users/amq001/followers",
  "following_url": "https://api.github.com/users/amq001/following{/other_user}",
  "gists_url": "https://api.github.com/users/amq001/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/amq001/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/amq001/subscriptions",
  "organizations_url": "https://api.github.com/users/amq001/orgs",
  "repos_url": "https://api.github.com/users/amq001/repos",
  "events_url": "https://api.github.com/users/amq001/events{/privacy}",
  "received_events_url": "https://api.github.com/users/amq001/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Aqib Mehtab",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 17,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2023-12-01T12:32:00Z",
  "updated_at": "2024-04-25T17:20:27Z"
}

app.get('/',(req,res)=>{
  res.send('hello world')
})

app.get('/twitter',(req,res)=>{
  res.send('twitter.com/aqib_mehtab')
})

app.get('/login',(req,res)=>{
  res.send('<h1>Please login</h1>')
})

app.get('/youtube',(req,res)=>{
  res.send("<h2>This is my youtube channel</h2>")
})

app.get('/github',(req,res)=>{
  res.json(githubData)
})

app.listen(process.env.PORT,()=>{
  console.log(`Example app listening on port ${process.env.PORT}`)
})