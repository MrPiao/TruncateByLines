TruncateByLines
===============

by A.P.

Introduction
------------

Truncates a block of text to a specified number of lines and adds an ellipsis. Since the ellipsis is an integral part of the truncation algorithm, the ellipsis will never be on an additional line.

Instructions
------------

###Basic Usage

	$(.truncateByLines).truncateByLines();

This will use the default settings (given below) to truncate the content.

###Settings

####Default Settings

	settings = {
		'maxLines' : 2,
		'ellipsis': '...',
		'fullTextToTitle: false
		'toggleFullText': false,
		'lessText': '', //Only used when toggleFullText is true, must be overridden.
		'ellipsisStyle' : {'font-size': '0.7em', 'color': 'blue'}
	};

####Settings Explanation

* *maxLines* sets the number of you would like the text to be truncated to.
* *ellipsis* is the character that is attached at the end of the text when it is truncated. It is not added when there is no truncation.
* *fullTextToTitle* puts the full text to the tooltip of the container of the text.
* *toggleFullText* enables the ellipsis text to be clickable. When clicked the full text will be toggled visible, and *lessText* will take the place of the ellipsis.
* *lessText* is only used when toggleFullText is true. It's the text that is clicked to hide the toggled full text.
* *fullTextContainer* is only used when toggleFullText is true. It determines the container _after_ the truncated text that will hold the full text and is shown and hidden when the ellipsis is clicked.
* *ellipsisStyle* You can style the ellipsis text and the less text by providing a dictionary to this option.

####Settings Override Example

	$(.truncateByLines).truncateByLines({
		'maxLines': 3,
		'fullTextToTitle': true
	});

This will truncate the text to three lines and put the full text into the container's "title" field <=> the tooltip.

Demos
-----

Coming soon!

Changelog
---------

###v 0.3 (8/26/11)

* Added the option "fullTextContainer" so that it is now possible to specify the element type of the container that will be shown and hidden containing the full, non-truncated text.

###v 0.2.1 (8/25/11)

* Fixed a bug where the ellipsis text _may_ end up in an additional line if the last word of the text is shorter than the ellipsis text.

###v 0.2 (8/22/11)

* Took deprecated _trimLongWords_ out as I won't be implementing it soon.
* Added the ability to toggle full text by clicking on the ellipsis text.

###v 0.1 (8/19/11)

* Initial Release
* Truncates text by number of lines
* Able to customize ellipsis text.

Extra Information
-----------------

Coming soon!

