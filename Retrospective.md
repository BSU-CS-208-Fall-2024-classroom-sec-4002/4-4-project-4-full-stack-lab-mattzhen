# Retrospective

- name: Matt Zhen
- email: mattzhen@u.boisestate.edu

## Experience

Testing for this project was mostly done by checking localhost:3000 visually. Sometimes it threw errors when I tried running the site, then I'd check back on VSCode to see what happened. There was a brief period where I got the ERR_HTTP_HEADERS_SENT error, looked up what it meant and figured out I just had to get rid of the extra res.render that get had. There was also a period where it wasn't updating the page when adding to the todo list, but refreshing the page would have items displaying just fine. Pretty sure it was because it didn't pass the updated database back to the template after updating, so I changed it to do so. There was also a period where main.js wasn't updating the page, ended up using defer to fix that. Most parts of the lab were clear, though I don't think there was a task directly mentioning main.js. It was mentioned in the video and has a todo item in it, though I wasn't sure how much was expected there. The project is mostly done, didn't do the extra credit portion of sanitizing input. Also wouldn't really call the page fancy, but I think it meets requirements. One new thing I learned was how to use localhost along with npm to view the page.

## Known issues or Bugs

Input on the inserting and deleting from the database not sanitized.

## Sources used

Instructor video, CS 208 Zybook, SlingAcademy at: https://www.slingacademy.com/article/fixing-err_http_headers_sent-nodejs-express/
and image sourced from pinterest: https://www.pinterest.com/pin/648377677589946104/