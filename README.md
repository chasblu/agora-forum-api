# Agora-forum-api
An online web application for discussions on a forum based on topics and descriptions. Each forum has their own posts which is fully functional.

<img width="473" alt="Screen Shot 2022-05-13 at 5 43 09 PM" src="https://user-images.githubusercontent.com/83252426/168394534-58e48b6d-9efe-471b-be11-d8413fd1f4fd.png">
<img width="812" alt="Screen Shot 2021-07-20 at 9 33 25 AM" src="https://user-images.githubusercontent.com/72947727/126333231-ecaa801e-7599-4787-8e7f-a91a04b1a3d5.png">
<img width="744" alt="Screen Shot 2021-07-20 at 9 33 41 AM" src="https://user-images.githubusercontent.com/72947727/126333249-0e23ccab-4bd1-4c49-a865-cf49e87167ef.png">
<img width="554" alt="Screen Shot 2021-07-20 at 9 33 48 AM" src="https://user-images.githubusercontent.com/72947727/126333260-f7e85535-4079-48eb-bf0f-fe1d85b00d49.png">
<img width="520" alt="Screen Shot 2021-07-20 at 9 33 56 AM" src="https://user-images.githubusercontent.com/72947727/126333296-a9a28e72-323c-46ff-82ad-3626d74e0611.png">
 <img width="715" alt="Screen Shot 2021-07-20 at 9 34 11 AM" src="https://user-images.githubusercontent.com/72947727/126333161-fcfcbdd9-687f-4485-ad14-f4ccc305651b.png">

## Description of Agora-forum-api
 There is a homepage where all the forums are displayed. Each forum is clickable to land you on the post page where you can create and edit posts. There is also a add forum page where you can create a forum with a topic and description of the discussion.  The backend has full CRUD capability.  The forums and posts have a one-to-many relationship where there are many posts to one forum. 

 ### Inspiration  for the project
Our team decided creating a forum would be a great start for something we can build on along the way with each other. We wanted to be able to implement the backend ourselves and be able to extract data of our own. We thought it would be a great way to understand the backend and the front end and have them work asynchronously.

## MVP Goals
-As a user I want to be able to see which forums pages i can visit
-As a user I want to be able to create a new forum page
-As a user I want to be able to post forums pages
-As a user I want to be able to like a post
-As a user I want to be able to edit my posts
-As a user I want to be able to delete my posts

## Stretch Goals

-As a user I want to be able to search for forum pages
-As a user I want to be able comment on someone elses post
-As a user I want to be able to log in
-As a user I want to be able to go to my profile to see all my posts
-As a user I want to be able to see my liked/favorite posts

### Complications during the project
We had encountered some difficulties with the page not updating the newly created forum, post or the edited version. Ultimately, we had to useHistory to go back to the page and also use the original function to have the useEffect rerendered with the new updated information. We also had encountered some bugs with the post data, we were not able to directly use a get route to display all posts since the post information is a subdocument of the forum, so we had to use a show route to display the version of the post we would like to edit.

## Technologies Used
1. Express.JS
2. MongoDB
3. Mongoose
4. Atlas

### Concepts Learned 
1. MERN stack
2. noSQL nonrelational database
3. How to create a one-to-many relationship using a sub-document
