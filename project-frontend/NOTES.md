The application must be an HTML, CSS, and JavaScript frontend with a Rails API backend. All interactions between the client and the server must be handled asynchronously (AJAX) and use JSON as the communication format.

The JavaScript application must use Oject Oriented JavaScript (classes) to encapsulate related data and behavior.

The domain model served by the Rails backend must include a resource with a least one has-many relationship. For example, if you were building an Instagram clone, you might display a list of photos with associated comments.

The backend and frontend must collaborate to demonstrate Client-Server Communication. Your application should have at least 3 AJAX calls, coering at least 2 of Creat, Read, Update, and Delete (CRUD). Your client-side JavaScript code must use fetch with the appropriate HTTP verb, and your Rails API should use RESTful conventions.

AJAX Request:
1. get /items
2. delete /items/:id
3. post /items