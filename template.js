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
//  '\n\n'+
//	'should be a unique ID not already in use at plugins.jquery.com. _Project ' +
//  'title_ should be a human-readable title, and doesn\'t need to contain ' +
//  'the word "jQuery", although it may. For example, a plugin titled "Awesome ' +
//  'Plugin" might have the name "awesome-plugin".' +
	'';


// Template-specific notes to be displayed after question prompts.
exports.after = 
	'You should now run the following commands' +
  '\n'+
	'>bower update' +
  '\n'+
	'>grunt init' +

	'';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {
  init.process({type: 'jquery'}, [
	
		init.prompt('name'),

		{
			name: 'class_name',
			message: 'Name of new class (CamelCase)',
			default: function(value, data, done) {
				var className = data.name;

				className = className.replace(/[\W_]+/g, ' ');
		    className = className.replace(/\w+/g, function(word) {
					return word[0].toUpperCase() + word.slice(1).toLowerCase();
		    });
				className = className.replace(/ /g, '');
				done(null, className);
			},
			validator: /([A-Z])\w+/, 
			warning: 'Only letters. Must start with a upper case letter ("MyClass" not "myClass")'
		},

		init.prompt('description (from README.md)'),
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
		props.licenses = ['MIT'];
		props.year = (new Date()).getFullYear();

		props.jquery_class_name = props.class_name; 
		props.jquery_class_name = props.jquery_class_name.substring(0, 1).toLowerCase() + props.jquery_class_name.substring(1);

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // All done!
    done();
	});

};
