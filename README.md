# 11 Express.js: Note Taker

## Your Task

Your assignment is to modify starter code to create an application cal
will use an Express.js back end and will save and retrieve note data f

The application’s front end has already been created. It's your job to
to Heroku.


## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to c
```


## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left
text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the pag
THEN I am presented with empty fields to enter a new note title and th
```


## Mock-Up

The following images show the web application's appearance and functio

![Existing notes are listed in the left-hand column with empty fields 
11-express-homework-demo-01.png)

![Note titled “Balance accounts” reads, “Balance account books by end 
11-express-homework-demo-02.png)


## Getting Started

On the back end, the application should include a `db.json` file that 

The following HTML routes should be created:

* `GET /notes` should return the `notes.html` file.

* `GET *` should return the `index.html` file.

The following API routes should be created:

* `GET /api/notes` should read the `db.json` file and return all saved

* `POST /api/notes` should receive a new note to save on the request b
client. You'll need to find a way to give each note a unique id when i


## Bonus

You haven’t learned how to handle DELETE requests, but this applicatio
DELETE route to the application using the following guideline:

* `DELETE /api/notes/:id` should receive a query parameter that contai
notes from the `db.json` file, remove the note with the given `id` pro


## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it 
requirements. Examples of incomplete submissions include the following
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria: 


### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the followin

  * Application front end must connect to an Express.js back end.

  * Application back end must store notes that have a unique id in a J

  * Application must be deployed to Heroku.


### Deployment: 36%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository contains application code.


### Application Quality: 11%

* Application console is free of errors.


### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conv

* Repository follows best practices for class/id naming conventions, i

* Repository contains multiple descriptive commit messages.

* Repository contains quality README file with description, screenshot


### Bonus: +10 Points

* Application allows users to delete notes.


## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository, with a unique name and a README de

- - -
© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Re
