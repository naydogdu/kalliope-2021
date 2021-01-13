/**  -----------------------------------------------------------------------------------------------
 Namespace
 --------------------------------------------------------------------------------------------------- **/
var uxjs = uxjs || {};

uxjs.nav = {

    init: function() {
        this.showHideNav();
    },

    /**
     * Open/Close nav
     */
    showHideNav: function() {

        var menuToggler = document.querySelector( '[data-menu-toggle]' );
        var menuCloser = document.querySelector( '[data-menu-toggle-close]' );
        var menu = document.querySelector( '[data-menu]' );

        if ( ! menuToggler || ! menuCloser || ! menu ) {
            return false;
        }

        menuToggler.addEventListener( 'click', toggleNav, true );
        menuCloser.addEventListener( 'click', toggleNav, true );

        function toggleNav() {
            menu.classList.toggle( 'hidden' );
        }
    }
}; // uxjs.nav

uxjs.scroller = {

    init: function() {
        this.triggerClick();
    },

    /**
     * Trigger click
     */
    triggerClick: function() {

        var scrollZone = document.querySelector( '#scroller' );
        var slider = document.querySelector( '#slider' );
        var scrollerTrigger = document.querySelector( '#data-trigger-scroller' );

        if ( ! scrollZone || ! slider || ! scrollerTrigger ) {
            return false;
        }

        scrollZone.addEventListener( 'wheel', triggerIt, true );
        scrollZone.addEventListener( 'touchmove', triggerIt, true );
        scrollerTrigger.addEventListener( 'click', triggerAndScrollIt, true );

        /* remove right click on images... */
        slider.addEventListener('contextmenu', event => event.preventDefault());

        function triggerIt(e) {
            e.preventDefault();
            scrollZone.click();
        }

        function triggerAndScrollIt() {
            scrollZone.scrollIntoView({behavior: "smooth"});
            scrollZone.click();
        }
    }
}; // uxjs.scroller


uxjs.domLoaded = {

    init: function() {
        this.removeSpinner();
    },

    /**
     * Remove spinner
     */
    removeSpinner: function() {
        var loader = document.querySelector( '#loader' );

        if ( ! loader ) {
            return false;
        }

        window.addEventListener('load', handleRemove);

        function handleRemove() {
            loader.classList.add("opacity-0");
        }
    }
}; // uxjs.domLoaded

/**
 * DOM ready ?
 *
 * @param {Function} fn Callback.
 */
function isDomReady( fn ) {
    if ( typeof fn !== 'function' ) {
        return;
    }

    if ( document.readyState === 'interactive' || document.readyState === 'complete' ) {
        return fn();
    }

    document.addEventListener( 'DOMContentLoaded', fn, false );
}

isDomReady( function() {
    uxjs.nav.init();
    uxjs.scroller.init();
    uxjs.domLoaded.init();
} );
