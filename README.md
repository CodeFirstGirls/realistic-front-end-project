# Realistic Front-End Project
Here's a realistic front end project boilerplate for you to try out the following tech: CSS - bootstrap, JS - jQuery, and AJAX / working with data from an API endpoint

## Instructions for Students
### Fork then clone this repository
Forking creates a copy of this repository to your GitHub account so you can make your own changes. It's different from cloning as you take ownership of the copied repo.
- Click 'Fork' at the top right of this page, and select your user area
- Open up GitHub desktop and clone the repository to your computer
- Open up the folder in Atom

### Create a navigation bar
- Load up `index.html` in your web browser and see what it currently looks like, it's not bad, but you're going to make it awesome!
- Open `index.html` in Atom and look at the `<nav>` tag, this is what defines the grey navigation bar you see at the top of your page.
- The navigation bar has a placeholder title of 'Navbar', change this to the name of your site - you can call it whatever you want.
- There's some code that mentions the word 'toggle' quite a lot, let's see what this does. Try reducing the width of your browser like you were on a mobile device, and see what changes. Then, remove this button and try again - what's different?
- Your website is going to have two pages, the home page `index.html` and an 'About Me' page `about.html`, but how will your users get from one page to the other? Add a link to the navbar that links to your `about.html` page.
   - Load your page in your web browser and click on the new link to your about page. Now click on the home link. Wait a second... where's the navbar gone? We've created the navbar in `index.html` but not in `about.html`, so copy this code over to `about.html`
    - Now try? Does it work? No? Look at the href attribute of the 'Home' link, it seems to be pointing to '#'. Now '#' in this case refers to the top of the current page, which isn't much use when you're on the 'About' page and want to go 'Home'. Update this link so it sends us back to `index.html`, and make sure you copy the navbar between `about.html` and `index.html` so it's the same in both.
- Now we're getting somewhere... but that grey looks a bit boring. Why don't we update it to a cooler looking black? This can be controlled by classes that Bootstrap provides, if you look at the `<nav>` classes currently we have `navbar-light` and `bg-light` specified.
- Let's [look at the docs](https://getbootstrap.com/docs/4.0/components/navbar/#color-schemes) to see what we need to change this to in order to make it a darker colour. Once you're done, remember to copy the code so it's the same in both .html files! (Note: in any site more complex than two or three pages you would use templating that would mean you don't have to keep copying things like the navbar every time you update it)

_(todo)_

## Further work / TODO for this repo
- [x] add instructions / backbone for students to create a nav bar
- [ ] add instructions for about me page
- [ ] add instructions on how to host the project on github pages
- [ ] add instructions on making the website responsive
- [ ] add information about APIs
- [ ] add instructions for nice-to-haves / bonuses :
    1. A visually appealing design - good use of CSS and HTML elements, Twitter
    Bootstrap, Jquery & Javascript
    2. A contact form (for example name and email) or an embedded Google form
    3. Social buttons
    4. Use more API endpoints from https://jsonplaceholder.typicode.com/


A Pen created at CodePen.io. You can find this one at https://codepen.io/dianaklee/pen/YeGVzq.

Front-End task to accompany https://slides.com/parisandmilo/coding101-online
