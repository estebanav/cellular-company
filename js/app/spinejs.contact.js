var Contact = Spine.Model.sub();
Contact.configure("Contact", "contact-name", "contact-phone", "contact-message");

Contact.include({
	validate: function(){
		if ( !this.contact-name )
			return "First name is required";
		if ( !_.isNumber(this.contact-phone) )
			return "Must be a number";
	}
});

var ContactControllerApp = Spine.Controller.sub({
	events: {"submit": "submitForm"},

	submitForm: function(e){
		e.preventDefault();
		var contact = Contact.fromForm(e.target);
		console.log(contact);
	}
});

$(function(){
	return new ContactControllerApp({
		el: $('#contact-form')
	});
});