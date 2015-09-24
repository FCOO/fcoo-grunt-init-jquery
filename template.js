/*
 * grunt-init-fcoo-jquery
 * https://gruntjs.com/
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a FCOO repository with a jQuery plugin, including SCSS (and CSS).';

// Template-specific notes to be displayed before question prompts.
exports.notes = 
	'Please enter following information:' +
  '\n\n'+
//	'should be a unique ID not already in use at plugins.jquery.com. _Project ' +
//  'title_ should be a human-readable title, and doesn\'t need to contain ' +
//  'the word "jQuery", although it may. For example, a plugin titled "Awesome ' +
//  'Plugin" might have the name "awesome-plugin".' +
	'';


// Template-specific notes to be displayed after question prompts.
exports.after = 
	'You should now run the following commands' +
  '\n\n'+
	'>bower update' +
  '\n\n'+
	'>grunt MANGLER' +

	'';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {
  init.process({type: 'jquery'}, [
    // Prompt for these values.
    init.prompt('name'),
    {
			name: 'class_name',
			message: 'Name of new class',
			default: 'MyClass', 
//			validator: /^[\w\-\.]+$/, ([A-Z])\w+
			validator: /([A-Z])\w+/, 
			warning: 'Only letters. Must start with a upper case letter ("MyClass" not "myClass")'
		},
		init.prompt('description', '(The description from the README.md file)'),
/*
		init.prompt('github_user'),
		init.prompt('version'),
    init.prompt('repository'),
    init.prompt('homepage'),
*/
    init.prompt('author_name'),
    init.prompt('author_email'),

  ], function(err, props) {


		//Add default values
//		props.class_name = props.class_name || 'MyClass';
		props.licenses = ['MIT'];
		props.year = (new Date()).getFullYear();

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // Generate package.json file, used by npm and grunt.
/*
		init.writePackageJSON('package.json', {
      name: 'jquery-plugin',
      version: '0.0.0-ignored',
      npm_test: 'grunt qunit',
      // TODO: pull from grunt's package.json
      node_version: '>= 0.8.0',
      devDependencies: {
        'grunt-contrib-jshint': '~0.10.0',
        'grunt-contrib-qunit': '~0.2.0',
        'grunt-contrib-concat': '~0.3.0',
        'grunt-contrib-uglify': '~0.2.0',
        'grunt-contrib-watch': '~0.4.0',
        'grunt-contrib-clean': '~0.4.0',
      },
    });
*/




    // All done!
    done();
	});

};
