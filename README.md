# Realistic Front-End Project

Here's a realistic front end project boilerplate for you to try out the following tech: CSS - bootstrap, JS - jQuery, and AJAX / working with data from an API endpoint

## Instructions for Students

### Fork then clone this repository

Forking creates a copy of this repository to your GitHub account so you can make your own changes. It's different from cloning as you take ownership of the copied repo.

- Click 'Fork' at the top right of this page, and select your user area
- Open up GitHub desktop and clone the repository to your computer
- Open up the folder in Atom
- Load up `index.html` in your web browser (Chrome) and see what it currently looks like, it's not bad, but you're going to make it awesome!

### Create a navigation bar

- Open `index.html` in Atom and look at the `<nav>` tag, this is what defines the grey navigation bar you see at the top of your page.
- The navigation bar has a placeholder title of 'Navbar', change this to the name of your site - you can call it whatever you want.
- There's some code that mentions the word 'toggle' quite a lot, let's see what this does. Try reducing the width of your browser like you were on a mobile device, and see what changes. Then, remove this button and try again - what's different?
- Your website is going to have two pages, the home page `index.html` and an 'About Me' page `about.html`, but how will your users get from one page to the other? Add a link to the navbar that links to your `about.html` page.
  - Load your page in your web browser and click on the new link to your about page. Now click on the home link. Wait a second... where's the navbar gone? We've created the navbar in `index.html` but not in `about.html`, so copy this code over to `about.html`
  - Now try? Does it work? No? Look at the href attribute of the 'Home' link, it seems to be pointing to '#'. Now '#' in this case refers to the top of the current page, which isn't much use when you're on the 'About' page and want to go 'Home'. Update this link so it sends us back to `index.html`, and make sure you copy the navbar between `about.html` and `index.html` so it's the same in both.
- Now we're getting somewhere... but that grey looks a bit boring. Why don't we update it to a cooler looking black? This can be controlled by classes that Bootstrap provides, if you look at the `<nav>` classes currently we have `navbar-light` and `bg-light` specified.
- Let's [look at the docs](https://getbootstrap.com/docs/4.0/components/navbar/#color-schemes) to see what we need to change this to in order to make it a darker colour. Once you're done, remember to copy the code so it's the same in both .html files! (Note: in any site more complex than two or three pages you would use templating that would mean you don't have to keep copying things like the navbar every time you update it)

### Add information to your About page

- Open `about.html`. Now that you've linked this to your navigation bar, you should be able to access the page from your home page (`index.html`).
- Can you think of what information to include in a standard "About" page?
	- The standard would be a short bio / paragraph about you, and maybe a picture or a slideshow? You can use Bootstrap to style any media nicely.
	- Perhaps you can add a contact form (you can do this using [Google Forms](http://forms.google.com/)), or a form to subscribe to a mailing list (you can use [Mailchimp](http://mailchimp.com/) or [Tinyletter](http://tinyletter.com/))?
- After you have added some information about yourself, what about some social links (LinkedIn, Twitter, etc.), so that people can find you on popular social sites? Bootstrap has some basic styling on this as well.

### Working with APIs

On to the main event! As you can see, currently on your `index.html` page, in the browser, or at our [example website](http://diana.click/realistic-front-end-project/),
there is some placeholder code about a microblog post. One is hardcoded, and the other has been rendered dynamically using JavaScript. This is being done in `main.js`, which you can find in your `js` subdirectory.

Most front-end clients rely on data being retrieved from a back-end server, and this one of the key skills in our project - learning to work with data from a server. (More information is in your notes :) )

In our project, we're using simple jQuery to work with this data. In modern companies, you can find people using entire libraries to create beautiful front-end clients. Some examples are Vue.js, React and Angular.

- Using your knowledge of JavaScript and jQuery, try to figure out what the code is doing. If it helps, you can write inline comments about what's happening in the code - an example is in line 20.
- Extend the code so that it generates HTML about each post and adds it to the DOM. Some helper code is there for you

### Responsivity

As you can see, we are already using Bootstrap! (line 5 of `index.html`). What components do you think you can add to make this website look prettier across mobile devices?

### Host your project on GitHub Pages

Once you are confident your project is ready to be made available online, push all your changes to your repository on GitHub, then go to the online repository page (on GitHub).

Click on `Settings`, then scroll down to `GitHub Pages`. Choose a branch to set as the source for your website. This is the version of your website that will be live. You can use any branch you like, and most development teams would name a branch called `release`, `prod`, `production`, or the like and use that as the production-ready version of the project.

You can read more about [GitHub's Pages service here](https://pages.github.com/).

## Good website criteria

Finally, check that your website matches the criteria below:

    1. A visually appealing design - good use of CSS and HTML elements, Twitter
    Bootstrap, Jquery & Javascript
    2. A contact form (for example name and email) or an embedded Google form
    3. Social buttons
    4. Use more API endpoints from https://jsonplaceholder.typicode.com/

A Pen created at CodePen.io. You can find this one at [https://codepen.io/dianaklee/pen/YeGVzq](https://codepen.io/dianaklee/pen/YeGVzq).

Front-End task to accompany https://slides.com/parisandmilo/coding101-online
