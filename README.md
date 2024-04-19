# How JWT works with Sessions and Cookies

# Session storage: (client-side store mechanism) allows web applications to store data temporarily, for the duration of the page session.
# The data is accessible only on the page/window created, so once the page is cleared the data is gone.

# Local Storage: (client-side store mechanism) allows web applications to store data accross browser sessions.
# The data is availiable even after the browser is closed, it is also accessible across tas and windows of the same origin (domain.)

# Cookies (client-side store mechanism): are small pieces of data sotred in user's browser by websites.
# Small amounts of data that need to be sent with every HTTP request
# Cookies are sent along with every HTTP request to the same domain allowing servers to maintain state and track user activity. They have an expiration time and can be set persistent(local storage) or session-based(session storage)
# They are suitable for storing small amounts of data that need to be sent with every request