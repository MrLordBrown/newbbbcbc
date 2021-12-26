/*
	Multiverse by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
document.getElementById('body').addEventListener('load', city);

const appDiv = document.getElementById('main');

var data = [
  {
    BuildingName: 'Hawaiian Bamboo Apartments',
    Block: 'Central City',
    Week: 1,
    Image: 1,
  },
  {
    BuildingName: 'One Flame Hotel',
    Block: 'Central City',
    Week: 2,
    Image: 2,
  },
  {
    BuildingName: "Mayor's House",
    Block: 'Central City',
    Week: 3,
    Image: 3,
  },
  {
    BuildingName: 'Event Center',
    Block: 'Central City',
    Week: 4,
    Image: 4,
  },
  {
    BuildingName: 'City Hall',
    Block: 'Central City',
    Week: 5,
    Image: 5,
  },
  {
    BuildingName: 'Hill Valley Clock Tower',
    Block: "80's Block",
    Week: 7,
    Image: 6,
  },
  {
    BuildingName: 'Villa Savoye',
    Block: 'Amazing Homes',
    Week: 11,
    Image: 7,
  },
  {
    BuildingName: 'Eames House',
    Block: 'Amazing Homes',
    Week: 11,
    Image: 8,
  },
  {
    BuildingName: 'Villa Ronconci',
    Block: 'Amazing Homes',
    Week: 12,
    Image: 9,
  },
  {
    BuildingName: 'Falling Water',
    Block: 'Amazing Homes',
    Week: 13,
    Image: 10,
  },
  {
    BuildingName: 'Casa Barragan',
    Block: 'Amazing Homes',
    Week: 14,
    Image: 11,
  },
  {
    BuildingName: 'Heydar Aliyev Center',
    Block: 'Future of Architecture',
    Week: 16,
    Image: 12,
  },
  {
    BuildingName: 'Mars-ONE Habitat Module',
    Block: 'Future of Architecture',
    Week: 18,
    Image: 13,
  },
  {
    BuildingName: 'Form & Nature',
    Block: 'Future of Architecture',
    Week: 19,
    Image: 14,
  },
  {
    BuildingName: 'Natural History Museum',
    Block: 'Future of Architecture',
    Week: 20,
    Image: 15,
  },
  {
    BuildingName: 'Library Tower & Wilshire Grand Hotel',
    Block: 'Los Angeles Skyline',
    Week: 21,
    Image: 16,
  },
  {
    BuildingName: 'Panorama Tower & Four Seasons Miami',
    Block: 'Miami Skyline',
    Week: 25,
    Image: 17,
  },
  {
    BuildingName: 'Space Mountain',
    Block: 'Magic Kingdom',
    Week: 29,
    Image: 18,
  },
  {
    BuildingName: 'Millenium Falcon',
    Block: 'Magic Kingdom',
    Week: 31,
    Image: 19,
  },
  {
    BuildingName: 'Grass Block',
    Block: 'Minecraft',
    Week: 32,
    Image: 20,
  },
  {
    BuildingName: 'Obsidian Block',
    Block: 'Minecraft',
    Week: 32,
    Image: 21,
  },
  {
    BuildingName: 'Maitland House',
    Block: "80's Block",
    Week: 6,
    Image: 22,
  },
  {
    BuildingName: 'Temple of Doom',
    Block: "80's Block",
    Week: 9,
    Image: 23,
  },
  {
    BuildingName: '555 CPW',
    Block: "80's Block",
    Week: 8,
    Image: 24,
  },
  {
    BuildingName: 'Castle of Lions',
    Block: "80's Block",
    Week: 10,
    Image: 25,
  },
  {
    BuildingName: 'Death Star',
    Block: "80's Block",
    Week: 14,
    Image: 26,
  },
  {
    BuildingName: 'Oudhof',
    Block: 'Amazing Homes',
    Week: 15,
    Image: 27,
  },
  {
    BuildingName: 'Skypad Apartments',
    Block: 'Future of Architecture',
    Week: 17,
    Image: 28,
  },
  {
    BuildingName: 'Columbia Business Center & Space Needle',
    Block: 'Seattle Skyline',
    Week: 22,
    Image: 29,
  },
  {
    BuildingName: 'Namsan Tower & Lotte World Building',
    Block: 'Seoul Skyline',
    Week: 23,
    Image: 30,
  },
  {
    BuildingName: 'Ping An Financial Building & K100 Building',
    Block: 'Shenzhen Skyline',
    Week: 24,
    Image: 31,
  },
  {
    BuildingName: 'Benjamin Tower',
    Block: 'North River Skyline',
    Week: 26,
    Image: 32,
  },
  {
    BuildingName: 'Scale',
    Block: 'Architecture Review',
    Week: 33,
    Image: 33,
  },
  {
    BuildingName: 'Liam Tower',
    Block: 'North River Skyline',
    Week: 26,
    Image: 34,
  },
  {
    BuildingName: 'Jailhouse Sam',
    Block: 'North River Skyline',
    Week: 26,
    Image: 35,
  },
  {
    BuildingName: 'Appartamento di Miekele',
    Block: 'North River Skyline',
    Week: 26,
    Image: 36,
  },
  {
    BuildingName: 'Luka Wizards Co.',
    Block: 'North River Skyline',
    Week: 26,
    Image: 37,
  },
  {
    BuildingName: "Luke's Cathedral",
    Block: 'North River Skyline',
    Week: 26,
    Image: 38,
  },
  {
    BuildingName: 'Lee Business Center',
    Block: 'North River Skyline',
    Week: 26,
    Image: 39,
  },
  {
    BuildingName: 'Pagadoa Matthew',
    Block: 'North River Skyline',
    Week: 26,
    Image: 40,
  },
  {
    BuildingName: 'Seuessenstraus Boingenhoppeturm',
    Block: 'North River Skyline',
    Week: 26,
    Image: 41,
  },
  {
    BuildingName: 'Haunted Mansion',
    Block: 'Magic Kingdom',
    Week: 27,
    Image: 42,
  },
  {
    BuildingName: 'Temple of the Forbidden Eye',
    Block: 'Magic Kingdom',
    Week: 28,
    Image: 43,
  },
  {
    BuildingName: 'Penny Nature Castle',
    Block: 'North River Skyline',
    Week: 26,
    Image: 44,
  },
  {
    BuildingName: 'Toontown Town Hall',
    Block: 'Magic Kingdom',
    Week: 30,
    Image: 45,
  },
  {
    BuildingName: 'Space & Section',
    Block: 'Architecture Review',
    Week: 34,
    Image: 46,
  },
  {
    BuildingName: "Sleeping Beauty's Castle",
    Block: 'Magic Kingdom',
    Week: 32,
    Image: 47,
  },
  {
    BuildingName: "Drafter's Stadium",
    Block: 'South River District',
    Week: 49,
    Image: 48,
  },
  {
    BuildingName: 'Nakayama Arcology',
    Block: 'South River District',
    Week: 48,
    Image: 49,
  },
  {
    BuildingName: 'News Print Office Building',
    Block: 'South River District',
    Week: 47,
    Image: 50,
  },
  {
    BuildingName: 'Grand Staircase',
    Block: 'Harry Potter',
    Week: 46,
    Image: 62,
  },
  {
    BuildingName: 'The Burrow',
    Block: 'Harry Potter',
    Week: 44,
    Image: 52,
  },
  {
    BuildingName: 'Entrance Hall',
    Block: 'Harry Potter',
    Week: 45,
    Image: 53,
  },
  {
    BuildingName: 'Azkaban',
    Block: 'Harry Potter',
    Week: 45,
    Image: 54,
  },
  {
    BuildingName: 'Port: Rail Transport',
    Block: 'Logistics',
    Week: 41,
    Image: 55,
  },
  {
    BuildingName: 'Warehousing',
    Block: 'Logistics',
    Week: 43,
    Image: 56,
  },
  {
    BuildingName: 'Air Freight',
    Block: 'Logistics',
    Week: 42,
    Image: 57,
  },
  {
    BuildingName: 'Port: Sea Cargo',
    Block: 'Logistics',
    Week: 40,
    Image: 58,
  },
  {
    BuildingName: 'Surfaces',
    Block: 'Architecture Review',
    Week: 36,
    Image: 59,
  },
  {
    BuildingName: 'Modules & Repetition',
    Block: 'Architecture Review',
    Week: 35,
    Image: 0,
  },
  {
    BuildingName: 'Mass & Density',
    Block: 'Architecture Review',
    Week: 37,
    Image: 0,
  },
  {
    BuildingName: 'Symmetry',
    Block: 'Architecture Review',
    Week: 38,
    Image: 0,
  },
  {
    BuildingName: 'Modular Arboretum',
    Block: 'Architecture Review',
    Week: 39,
    Image: 65,
  },
  {
    BuildingName: 'Main Hall',
    Block: 'Harry Potter',
    Week: 46,
    Image: 51,
  },
  {
    BuildingName: 'South River Tesla Coil',
    Block: 'South River District',
    Week: 50,
    Image: 60,
  },
  {
    BuildingName: '5 South  River',
    Block: 'South River District',
    Week: 51,
    Image: 61,
  },
  {
    BuildingName: 'City Convention Center',
    Block: 'South River District',
    Week: 52,
    Image: 68,
  },
  {
    BuildingName: 'Tokyo Imperial Palace Gardens',
    Block: 'South River Gardens',
    Week: 54,
    Image: 64,
  },
  {
    BuildingName: 'Antigravity Gardens',
    Block: 'South River Gardens',
    Week: 53,
    Image: 0,
  },
  {
    BuildingName: 'Tokyo Imperial Palace',
    Block: 'South River District',
    Week: 54,
    Image: 66,
  },
  {
    BuildingName: 'White Sands National Park Visitor Center',
    Block: 'South River District',
    Week: 55,
    Image: 69,
  },
  {
    BuildingName: 'Central Park',
    Block: 'South River District',
    Week: 56,
    Image: 70,
  },
  {
    BuildingName: 'Downtown East Station',
    Block: 'Magic Kingdom',
    Week: 58,
    Image: 72,
  },
  {
    BuildingName: 'City South Station',
    Block: 'South River District',
    Week: 59,
    Image: 73,
  },

  {
    BuildingName: 'CTA Transit Hub',
    Block: 'City West',
    Week: 60,
    Image: 0,
  },

  {
    BuildingName: 'City Hospital',
    Block: 'City East',
    Week: 62,
    Image: 76,
  },
  {
    BuildingName: 'City Monorail',
    Block: 'Monorail Transit System',
    Week: 57,
    Image: 71,
  },

  {
    BuildingName: 'City Fire Station',
    Block: 'South River District',
    Week: 63,
    Image: 77,
  },
  {
    BuildingName: 'City Police Station',
    Block: 'South River District',
    Week: 64,
    Image: 0,
  },
  {
    BuildingName: 'City Library',
    Block: 'South River District',
    Week: 65,
    Image: 0,
  },
];

var count = Object.keys(data).length;
function city() {
  for (var i = 1; i < count; i++) {
    var container = document.createElement('article');
    var thumbClass = document.createAttribute('class');
    container.setAttributeNode(thumbClass);
    thumbClass.value = 'thumb';

    var headness = document.createElement('h2');
    var image = data[i - 1].Image;
    var inst = data[i - 1].Week;

    var anchor = document.createElement('a');
    var ref = document.createAttribute('href');
    var imgClass = document.createAttribute('class');
    anchor.setAttributeNode(imgClass);
    imgClass.value = 'image';
    anchor.setAttributeNode(ref);

    var imgz = document.createElement('img');
    var srcz = document.createAttribute('src');
    imgz.setAttributeNode('srcz');
    srcz.value =
      'https://raw.githubusercontent.com/MrLordBrown/bcbc/main/s (' +
      image +
      ').png';

    ref.value =
      'https://raw.githubusercontent.com/MrLordBrown/bcbc/23e45c767fb4b54320e137f38fedb87b3b962d63/' +
      inst +
      '.pdf';

    if (i > 4) {
      var lazy = document.createAttribute('loading');
      imgz.setAttributeNode(lazy);
      lazy.value = 'lazy';
    }

    var caption = document.createElement('p');
    caption.innerHTML = data[i - 1].BuildingName;

    console.log(caption.value);
    anchor.appendChild(imgz);
    container.appendChild(anchor);
    container.appendChild(headness);
    appDiv.appendChild(container);
  }
}

city();

(function ($) {
  var $window = $(window),
    $body = $('body'),
    $wrapper = $('#wrapper');

  // Breakpoints.
  breakpoints({
    xlarge: ['1281px', '1680px'],
    large: ['981px', '1280px'],
    medium: ['737px', '980px'],
    small: ['481px', '736px'],
    xsmall: [null, '480px'],
  });

  // Hack: Enable IE workarounds.
  if (browser.name == 'ie') $body.addClass('ie');

  // Touch?
  if (browser.mobile) $body.addClass('touch');

  // Transitions supported?
  if (browser.canUse('transition')) {
    // Play initial animations on page load.
    $window.on('load', function () {
      window.setTimeout(function () {
        $body.removeClass('is-preload');
      }, 100);
    });

    // Prevent transitions/animations on resize.
    var resizeTimeout;

    $window.on('resize', function () {
      window.clearTimeout(resizeTimeout);

      $body.addClass('is-resizing');

      resizeTimeout = window.setTimeout(function () {
        $body.removeClass('is-resizing');
      }, 100);
    });
  }

  // Scroll back to top.
  $window.scrollTop(0);

  // Panels.
  var $panels = $('.panel');

  $panels.each(function () {
    var $this = $(this),
      $toggles = $('[href="#' + $this.attr('id') + '"]'),
      $closer = $('<div class="closer" />').appendTo($this);

    // Closer.
    $closer.on('click', function (event) {
      $this.trigger('---hide');
    });

    // Events.
    $this
      .on('click', function (event) {
        event.stopPropagation();
      })
      .on('---toggle', function () {
        if ($this.hasClass('active')) $this.triggerHandler('---hide');
        else $this.triggerHandler('---show');
      })
      .on('---show', function () {
        // Hide other content.
        if ($body.hasClass('content-active')) $panels.trigger('---hide');

        // Activate content, toggles.
        $this.addClass('active');
        $toggles.addClass('active');

        // Activate body.
        $body.addClass('content-active');
      })
      .on('---hide', function () {
        // Deactivate content, toggles.
        $this.removeClass('active');
        $toggles.removeClass('active');

        // Deactivate body.
        $body.removeClass('content-active');
      });

    // Toggles.
    $toggles
      .removeAttr('href')
      .css('cursor', 'pointer')
      .on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        $this.trigger('---toggle');
      });
  });

  // Global events.
  $body.on('click', function (event) {
    if ($body.hasClass('content-active')) {
      event.preventDefault();
      event.stopPropagation();

      $panels.trigger('---hide');
    }
  });

  $window.on('keyup', function (event) {
    if (event.keyCode == 27 && $body.hasClass('content-active')) {
      event.preventDefault();
      event.stopPropagation();

      $panels.trigger('---hide');
    }
  });

  // Header.
  var $header = $('#header');

  // Links.
  $header.find('a').each(function () {
    var $this = $(this),
      href = $this.attr('href');

    // Internal link? Skip.
    if (!href || href.charAt(0) == '#') return;

    // Redirect on click.
    $this
      .removeAttr('href')
      .css('cursor', 'pointer')
      .on('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        window.location.href = href;
      });
  });

  // Footer.
  var $footer = $('#footer');

  // Copyright.
  // This basically just moves the copyright line to the end of the *last* sibling of its current parent
  // when the "medium" breakpoint activates, and moves it back when it deactivates.
  $footer.find('.copyright').each(function () {
    var $this = $(this),
      $parent = $this.parent(),
      $lastParent = $parent.parent().children().last();

    breakpoints.on('<=medium', function () {
      $this.appendTo($lastParent);
    });

    breakpoints.on('>medium', function () {
      $this.appendTo($parent);
    });
  });

  // Main.
  var $main = $('#main');

  // Thumbs.
  $main.children('.thumb').each(function () {
    var $this = $(this),
      $image = $this.find('.image'),
      $image_img = $image.children('img'),
      x;

    // No image? Bail.
    if ($image.length == 0) return;

    // Image.
    // This sets the background of the "image" <span> to the image pointed to by its child
    // <img> (which is then hidden). Gives us way more flexibility.

    // Set background.
    $image.css('background-image', 'url(' + $image_img.attr('src') + ')');

    // Set background position.
    if ((x = $image_img.data('position'))) $image.css('background-position', x);

    // Hide original img.
    $image_img.hide();
  });

  // Poptrox.
  $main.poptrox({
    baseZIndex: 20000,
    caption: function ($a) {
      var s = '';

      $a.nextAll().each(function () {
        s += this.outerHTML;
      });

      return s;
    },
    fadeSpeed: 300,
    onPopupClose: function () {
      $body.removeClass('modal-active');
    },
    onPopupOpen: function () {
      $body.addClass('modal-active');
    },
    overlayOpacity: 0,
    popupCloserText: '',
    popupHeight: 150,
    popupLoaderText: '',
    popupSpeed: 300,
    popupWidth: 150,
    selector: '.thumb > a.image',
    usePopupCaption: true,
    usePopupCloser: true,
    usePopupDefaultStyling: false,
    usePopupForceClose: true,
    usePopupLoader: true,
    usePopupNav: true,
    windowMargin: 50,
  });

  // Hack: Set margins to 0 when 'xsmall' activates.
  breakpoints.on('<=xsmall', function () {
    $main[0]._poptrox.windowMargin = 0;
  });

  breakpoints.on('>xsmall', function () {
    $main[0]._poptrox.windowMargin = 50;
  });
})(jQuery);
