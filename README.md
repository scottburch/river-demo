This is a demonstration of how to use the [river webapp framework](https://github.com/scottburch/river-js) to easily create web applications.
Here I will only describe the demo code.  For a better understanding of the river framework please click on the preceeding link.

## INSTALLING

    git clone git://github.com/scottburch/river-demo.git
    cd river-demo
    git submodule init
    git submodule update

Load index.html using your favorite browser.

## MODULES

### desktop
This module renders the "desktop" or page that everything else renders into.  It uses the mustache module to do the actual rendering.  It listens to the "moduleLoaded"
event from river to know when to render the desktop.

### jquery
This is a jquery abstraction module.  It provides some basic actions using jquery for dom manipulation.
Providing an abstraction module allows us to replace jquery with any library that we like.

### mustache
This is a mustache abstration module.  It provides some basic html templating actions.
Again, providing an abstraction module allows us to replace mustache with another templating library without changing any other code.

### serverRequest
This is a server request stub.  Since we have no server at this time, it simply echos back the data it receives as if it was returned from a server.
notice how the code does not have to be attached to a server to work.  We can simply change these actions to do real communication and no other code needs to know.

### taskCreator
This module handles the rendering of views and creation of tasks.
We have separated the creation of tasks from how they are viewd so that they are not tied together and can easily be moved separately.

### taskList
This module handles the rendering of the task list.
It also handles the editing and deleting of tasks.

## FILES

### boot.js
This file starts up the river application and provides the list of modules to load

### text.js
This is a plugin for require.js to load text files.  It is used by the mustache module.



