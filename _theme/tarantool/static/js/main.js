(function($){
  $.fn.plcholder = function(opts) {
    return this.each(function() {
      var $this = $(this);
      $this.focus(function() {
        if(!$this.val() || $this.val() == $this.attr('data-placeholder')) {
          $this.val('');
          $this.removeClass('p-placeholder');
        }
      }).blur(function() {
        if((!$this.val() || $this.val() == $this.attr('data-placeholder'))) {
          $this.val($this.attr('data-placeholder'));
          $this.addClass('p-placeholder');
        }
      }).blur();
    });
  };
})(jQuery);

$(function() {
  $('input[data-placeholder], textarea[data-placeholder]').plcholder();

  /* var drop_item = '.b-path-list-item-url'; */
  var drop_item = '.b-path-list-item-icon';
  var drop_item_parent = '.b-path-list-item';
  var drop_list = '.b-path-list-drop';
  var open  = 'p-drop-open';
  var close = 'p-drop-close';
  var download_drop_item = '.b-download-list-item-url';
  var download_drop_item_parent = '.b-download-list-item';
  var download_drop_box = '.b-download-list-item-drop';

  if ($(drop_item)) {
    var drop_items = $(drop_item);
    for (var i = 0; i<drop_items.length; i++) {
      if($(drop_items[i]).parents(drop_item_parent).find(drop_list).length!=0) {
        $(drop_items[i]).addClass(close);
      }
    };
  }
  $(drop_item).click(function() {
    if($(this).parents(drop_item_parent).find(drop_list).length != 0) {
      if ($(this).hasClass(close)) {
        $(this).parents(drop_item_parent).find(drop_list).fadeIn(100);
      } else {
        $(this).parents(drop_item_parent).find(drop_list).fadeOut(100);
      }
      $(this).toggleClass(close).toggleClass(open);
      return false;
    }
  });
  $(drop_item_parent).mouseleave(function() {
    if ($(this).find(drop_list).length != 0) {
      if ($(this).find(drop_item).hasClass(open)) {
        $(this).find(drop_item).toggleClass(close).toggleClass(open);
        $(this).find(drop_list).fadeOut(100);
      }
    }
    return false;
  });
  if ($(download_drop_item)) {
    var download_drop_items = $(download_drop_item);
    for (var i = 0; i< download_drop_items.length; i++) {
      if($(download_drop_items[i]).parents(download_drop_item_parent).find(download_drop_box).length != 0) {
        $(download_drop_items[i]).addClass(close);
      }
    };
  }
  $(download_drop_item).click(function() {
    if($(this).parents(download_drop_item_parent).find(download_drop_box).length != 0) {
      if ($(this).hasClass(open)) {
        $(this).parents(download_drop_item_parent).find(download_drop_box).removeClass(open);
      } else {
        $(this).parents(download_drop_item_parent).find(download_drop_box).addClass(open);
      }
      $(this).toggleClass(open)
    }
    return false;
  });
});

function offsetAnchor() {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY - 90);
  }
}

$(document).on('click', 'a[href^="#"]', function(event) {
  window.setTimeout(function() {
    offsetAnchor();
  }, 0);
});

window.setTimeout(offsetAnchor, 0);