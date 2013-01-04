/*global $:false, jQuery:true, Spine:true, google:true */
var HomepageControllerApp = Spine.Controller.sub({

  settings: {
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
  },

  hideShowText: function(e){
    e.preventDefault();
   
    var item = jQuery( e.target );
    var valOriginal = item.html( );
    var valNext = item.attr('data-cta');

    this.hiddenText.toggleClass( this.settings.hideTextClass );
    item.html( valNext );
    item.attr( 'data-cta' , valOriginal );
  }

});

$(document).ready(function(){

 return new HomepageControllerApp({
    el: $("body.homepage")
 });

});
