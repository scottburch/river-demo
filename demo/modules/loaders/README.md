A loader module to load various types of files.

Currently loads module css files

## Installation

Place these files in a 'modules/loaders' directory and add to the list of loaded modules.

## Use

    /**
    ** my module file
    **/

    that.on_moduleManager_modulesLoaded = function() {
        that.doAction('loadCss', {href: 'css/widgets.css'});
    };

We wait until the modules are loaded to ensure that the loaders module is loaded.

In this example the widgets.css file is in a css directory under the module directory.