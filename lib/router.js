Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here .... 
});

Router.route('/', {name: 'welcome'});

Router.route('/about', {name: 'about'});

Router.route('/sponsors', {name:'sponsors'})

Router.route('/graphics', {name:'graphics'})

Router.route('/quiz1', {name:'quiz1'})

Router.route('/quiz2', {name:'quiz2'})

Router.route('/iptable', {name: 'iptable'});
Router.route('/iptable/edit',{name:'ipform'});


Router.route('/people',{name:'people'});
Router.route('/profile/:_id',
	{name:'profile',
	data: function(){ 
		
		return Meteor.users.findOne({_id:this.params._id})
	}
});
Router.route('/profileEdit/:_id',
	{name:'profileEdit',
	data: function(){ return Meteor.users.findOne({_id:this.params._id})}
});
