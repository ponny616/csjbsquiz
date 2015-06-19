if(Meteor.isClient){

	Template.quiz1.helpers({

		'user': function(){
			return Info.find({}, {sort: {proName: 1, firName: 1, lasName: 1}});
		}
	});

	Template.quiz1.events({
		'click .remove': function(){
			var playerId = this._id;
			Session.set('selectedInfo',playerId);
      		var selectedInfo = Session.get('selectedInfo');
      		Info.remove(selectedInfo);
    	},

		'submit #addInfo': function(event){
			event.preventDefault();
			var projName = event.target.proname.value;
			var firtName = event.target.firname.value;
			var lastName = event.target.lasname.value;
			var deplMeteor = event.target.depmeteor.value;
			var githRepos = event.target.gitrepos.value;
			Info.insert({proName:projName, firName:firtName, lasName:lastName, depMeteor:deplMeteor, gitRepos:githRepos});
		 }
	});
}
