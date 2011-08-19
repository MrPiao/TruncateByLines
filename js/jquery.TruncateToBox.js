/*!
	TruncateToBox Plugin for jQuery
	v0.1
	Truncates a block of text to a specified number of lines and adds an ellipsis.
	Since the ellipsis is an integral part of the truncation algorithm, the ellipsis
	will never be on an additional line.
	
	NOTE: This is the very first iteration of the plugin, a "minimum viable product."
	All initially planned features are not yet implemented.
	
	Copyright (C) 2011 by Kee Hyuk Park

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
 */
(function( $ ) {

	$.fn.truncateToBox = function( options ) {

		// Default settings
		var settings = {
			'maxLines' : 2,
			'trimLongWords': false,
			'ellipsis': '...',
			'fullTextToTitle': false,
		};

		return this.each(function() {
			// get options
			if ( options ) {
				$.extend( settings, options );
			}

			var $this = $(this);
			
			var needToReset = false;
			var $notDisplayed;
			
			//HACK: Due to complications, I have told the plugin to set the visibility
			//of every hidden element to "visible" at the end.
			if (!$this.is(':visible')) {
				$notDisplayed = $this.parentsUntil(":visible").add($this);
				$notDisplayed.each(function() {
					
					$(this).data('display', $(this).css('display'));
					$(this).data('visibility', $(this).css('visibility'));
					
					if ($(this).is("span") || $(this).is("a") || $(this).is("span"))
						$(this).css('display', 'inline');
					else {
						$(this).css('display', 'block');
					}
					
					$(this).css('visibility', 'hidden');	
				});
				
				needToReset = true;
				
			}
			
			var fullText = $this.text(); //This does not support html tags yet.
			
			if (settings.fullTextToTitle) {
				$this.attr("title", fullText);
			}
			
			$this.empty(); //Fresh slate.
			var $friendSpan = $('<span>' + settings.ellipsis + '</span>');
			$this.append($friendSpan);
			var lastTopOffset = $friendSpan.offset().top;
			//This line height deal is not an exact science.
			var approxLineHeight = parseInt($friendSpan.css('line-height')) * 1.5;
			if (isNaN(approxLineHeight)) {
				approxLineHeight = Math.ceil(parseInt($friendSpan.css('font-size')) * 1.5);
			}
			$friendSpan.remove();
			
			var lineCounter = 1;
			var wordArray = fullText.split(' ');
			//FIX known issue: if a word is longer than the line width, may cause incorrect truncation.
			for (word in wordArray) {
				var lastWord = wordArray[word];
				$this.append(lastWord + " ");
				$this.append($friendSpan);
				var currentTopOffset = $friendSpan.offset().top;
				$friendSpan.remove();
				if (currentTopOffset > lastTopOffset) {
					lineCounter++;
					var trimOverride = false;
					/*
					if (currentTopOffset - lastTopOffset > approxLineHeight) {
						lineCounter++;
						if (lineCounter > settings.maxLines) {
							trimOverride = true;
						}
					}*/
					if (lineCounter > settings.maxLines) {
						if (settings.trimLongWords || trimOverride) {
							alert("Not implemented yet");
						}
						else {
							var text = $this.text();
							var i;
							for (i = 0; i < lastWord.length + 2; i++) {
								text = text.substring(0, text.length-1);
							}
							$this.text(text);
						}
						$this.append($friendSpan);
						break;
					}
					else {
						lastTopOffset = currentTopOffset;
					}
				}
			}
			if (needToReset) {
				$notDisplayed.each(function() {
					$(this).css('display', $(this).data('display'));
					$(this).css('visibility', 'visible');
				});
			}
		}); // END of return this.each(function(){}))
	}
})( jQuery ); // END of truncateToBox