# 🚀 Strapi v4 owner (authored) content example



### Authored content

I made this example to show a policy/middleware/controller to manage ownership of content.

Clue files are:


### How was the setup

**1st step**: installation of strapi:
```
yarn create strapi-app strapi4author --quickstart
```

_Note: we use quickstart only for this example_


**2nd**: changing to project dir
```
cd strapi4author
```


**3th**: run in develop mode
```
yarn develop
```


**4th**: we put http://localhost:1337/admin in or browser and create super admin user


**5th**: we go to content type builder and create a new content-type collection named 'notes' ('note' in singular) with these fields:

- text: with the note content
- author: is a relation 1-Many to table user-permissions

![](docimages/creating-note-type.png)
![](docimages/author-field.png)
![](docimages/Content-Type-Builder-Notes.png)


**6th**: generate policy
```
yarn strapi generate
$ strapi generate
? Strapi Generators *policy* - Generate a policy for an API*
? Policy name *is-owner*
? Where do you want to add this policy? *Add policy to root of project*
√  ++ \policies\is-owner.js
Done in 48.02s.
```

It creates a policy file called ./src/policies/is-owner.js


**7th**: we edit the file is-owner.js

See ![src/policies/is-owner.js](./src/policies/is-owner.js)


**8th**: we generate middleware assign-owner.js

```
yarn strapi generate
$ strapi generate
? Strapi Generators *middleware* - Generate a middleware for an API
? Middleware name *assign-owner*
? Where do you want to add this middleware? *Add middleware to root of project*
√  ++ \middlewares\assign-owner.js
Done in 88.63s.
```

:Note: take care of step 13 to run this middleware properly


**9th**: we edit assign-owner.js

See ![middleware/assign-owner.js](src/middleware/assign-owner.js)


**10th**: we edit ./src/api/note/routes/note.js and assign middleware and policies

See ![routes/note.js](src/api/note/routes/note.js)


*11th:* to allow users only view their own notes (and no other users notes) you must customize controller. 

So you edit ./src/api/note/controllers/note.js

See ![routes/note.js](src/api/note/controllers/note.js)


**12th**: you must configure permissions in settings -> roles to only authenticated users to access notes actions

![](docimages/settings-roles.png)


**13th**: you *MUST* give permission to user-permissions plugin to be able fill author relation in assign-owner middleware

![](docimages/Settings-Roles-user-permission.png)


**14th**: you can create some users and check each one logging in (you can use postman)

![](docimages/Postman-1-auth.png)
![](docimages/postman-2-we_put_bearer_auth.png)
![](docimages/Postman-3-createnote.png)

You can check that author automatically assigned:
![](docimages/first-note-created.png)


**15th**: if you try to login with another user and try to update or delete another author content you will get forbidden error


**16th**: optionally you can create another content-type (e.g. tasks) to reuse global policy and middleware created



