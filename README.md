TruncateByLines
===============

by A.P.

Introduction
------------

Truncates a block of text to a specified number of lines and adds an ellipsis. Since the ellipsis is an integral part of the truncation algorithm, the ellipsis will never be on an additional line.

Instructions
------------

###Basic Usage

>$(.truncateByLines).truncateByLines();

This will use the default settings (given below) to truncate the content.

###Settings

####Default Settings

>settings = {
>	'maxLines' : 2,
>	'trimLongWords' : false,
>	'ellipsis': '...',
>	'fullTextToTitle: false
>};

####Settings Explanation

* *maxLines* sets the number of you would like the text to be truncated to.
* *trimLongWords* isn't implemented yet, **don't** use it!!!
* *ellipsis* is the character that is attached at the end of the text when it is truncated. It is not added when there is no truncation.
* *fullTextToTitle* puts the full text to the tooltip of the container of the text.

####Settings Override Example

>$(.truncateByLines).truncateByLines({
>	'maxLines': 3,
>	'fullTextToTitle': true
>});

This will truncate the text to three lines and put the full text into the container's "title" field <=> the tooltip.

Demos
-----

Coming soon!

File Manifest
-------------

Coming soon!

Extra Information
-----------------

Coming soon!

