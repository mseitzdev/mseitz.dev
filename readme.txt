MS_Portfolio - See it live on mseitz.dev!

Created by Mitchell Seitz, May 2024

Copyright Mitchell Seitz, May 01 2024-Present
Sources for base code & inspirations below

This is the source code for my developer portfolio website, originally
hand-coded using PHP, HTML, CSS, and JavaScript, and later migrated to
Eleventy (11ty) with AI assistance using Claude Code. The site uses
Nunjucks templates, and outputs clean static HTML with no server-side
dependencies. Please see the bottom of this readme for borrowed code
sources.
_______________________________________________________________________

Getting Started:

   npm install          Install dependencies
   npm start            Run the dev server (http://localhost:8080)
   npm run build        Build the site to _site/
   npm run clean        Remove the _site/ build directory

_______________________________________________________________________

Project Structure:

   src/                 Source files (pages, templates, assets)
     _includes/         Layouts and partials (base template, menu, etc.)
     _data/             Global site data (site title, author, URLs, etc.)
     assets/            CSS, images, and JavaScript
     about/             About Me page
     webDevelopment/    Web development project pages
     androidApps/       Android app project pages
     research/          Research project pages
   _site/               Build output (generated, do not edit)
   Old_PHP/             Original PHP version of the site (for reference)
   .eleventy.js         Eleventy configuration

_______________________________________________________________________

Notes, by topic:

Remember to check chrome, firefox, safari, and edge on macos / windows /
ios / android / ubuntu after major changes.

Background Behavior:
   - When changing background particle behavior, please edit
     src/assets/js/particles/app.js
   - src/assets/js/particles/particles.js has the default values.
   - Clear browser cache and hit refresh.
_______________________________________________________________________

To Do:

- Add website display settings
	- an option to disable/change the background
	- light mode
	- Text Settings / Accessibility
- Fill in Research section content
_______________________________________________________________________

Bugs & Issues:


_______________________________________________________________________

Borrowed Code and Inspirations:

Big thanks to the following sources that helped me make this project

Vincent Garreau, Particles.js:

   https://github.com/VincentGarreau/particles.js

   This is the library I used to make the background for the website,
   and you can find the files in src/assets/js/particles. I modified
   them as needed to suit the needs of this website.

w3 Schools, I based the menu system off of:
   1: https://www.w3schools.com/howto/howto_js_sidenav.asp
   2: https://www.w3schools.com/howto/howto_js_dropdown_sidenav.asp

Anthropic, Claude Code:
   https://claude.ai/claude-code
   Used as an AI development partner for the Eleventy migration and
   site updates.
