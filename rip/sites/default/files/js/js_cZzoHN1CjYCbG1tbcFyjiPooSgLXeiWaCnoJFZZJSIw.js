(function($) {

/**
 * jQuery debugging helper.
 *
 * Invented for Dreditor.
 *
 * @usage
 *   $.debug(var [, name]);
 *   $variable.debug( [name] );
 */
jQuery.extend({
  debug: function () {
    // Setup debug storage in global window. We want to look into it.
    window.debug = window.debug || [];

    args = jQuery.makeArray(arguments);
    // Determine data source; this is an object for $variable.debug().
    // Also determine the identifier to store data with.
    if (typeof this == 'object') {
      var name = (args.length ? args[0] : window.debug.length);
      var data = this;
    }
    else {
      var name = (args.length > 1 ? args.pop() : window.debug.length);
      var data = args[0];
    }
    // Store data.
    window.debug[name] = data;
    // Dump data into Firebug console.
    if (typeof console != 'undefined') {
      console.log(name, data);
    }
    return this;
  }
});
// @todo Is this the right way?
jQuery.fn.debug = jQuery.debug;

})(jQuery);
;
/**
 * @file
 * Contains UX enchancements for codefilter.module.
 */

(function ($) {

  Drupal.behaviors.codefilter = {
    attach: function (context) {
      var $expandablePre = $('pre.codeblock.nowrap-expand', context);
      // Stop if the expandable pre is null.
      // For non prism pages or if the feature is turned off.
      if (!$expandablePre[0]) {
        return;
      }
      // Getting padding as we can't get CSS attribute selectors through JS.
      var em = Number($expandablePre.css('font-size').replace(/[^\d]/g, ''));

      // Provide expanding text boxes when code blocks are too long.
      $expandablePre.find('code').each(function () {
        var $code = $(this);
        var $pre = $code.parent();
        var contents_width = $code.width() + (em * 2);
        var width = $pre.width() + (em * 2);

        if (contents_width > width) {
          $pre.hover(function () {
            $pre.css('width', width).animate({ width: contents_width + 'px' }, {
              duration: 100,
              queue: false
            });
          },
          function () {
            $pre.css('width', contents_width).animate({ width: width + 'px' }, {
              duration: 100,
              queue: false
            });
          });
        }
      });
    }
  }

})(jQuery);
;
