var Contact = Spine.Model.sub();
Contact.configure("Contact", "contact_name", "contact_phone", "contact_message");

/* @TODO */
/* Persist with Local Storage */
//Contact.extend(Spine.Model.Local);

Contact.include({
	validate: function(){
		//console.log(!_.isNumber(this.contact_phone));
		if ( !this.contact_name )
			 return "Name is required";
		if ( !this.contact_phone )
			return "Only numeric value | Required";
		if ( !this.contact_message )
			return "It's required you to provide a message";
	}
});

var ContactControllerApp = Spine.Controller.sub({
	init: function(){
		Contact.bind("error", function(rec, msg) {
			return alert("Fail to submit - " + msg);
		});
	},

	events: {
		"submit": "submitForm",
		"click .submited-data": "viewData"
	},

	submitForm: function(e){
		e.preventDefault();
		var contact = Contact.fromForm(e.target);
		//contact.save();
		if (contact.save()) {
			alert(	"Name: " + contact.contact_name +
					";\nNumber: " + contact.contact_phone +
					";\nMessage: " + contact.contact_message 
					);
		}
		//console.log(contact);
	},

	viewData: function(e){
		e.preventDefault();
		//console.log(Contact.fetch());
		/* @TODO */
	//	console.log('This retrieve data');
	}

});

$(function(){
	return new ContactControllerApp({
		el: $('#contact-form')
	});
});