var HomepageControllerApp = Spine.Controller.sub({

  options: {
    hideTextClass : 'hide-text'
  },

  elements: {
    "p.hidden-text" : "hiddenText" 
      },

  events: {
    "click a.hide-show": "hideShowText"
  },

  init: function(){
    console.log('HomepageController :: init');
    var that = this;
    /*require( ['js/knockout-2.2.0.js'] , function(){
      that.bindings();
    });*/
  },

  /*bindings: function(){
    console.log('HomepaController :: bindigs');
  },*/

  hideShowText : function(e){
    e.preventDefault();
    
    var item = jQuery(e.target);
    var valOriginal = item.html();
    var valNext = item.attr('data-cta');

    this.hiddenText.toggleClass(this.options.hideTextClass);
    item.html( valNext );
    item.attr('data-cta' , valOriginal );
  }

});

$(document).ready(function(){
 return new HomepageControllerApp({
    el: $("body.homepage")
  });
});
