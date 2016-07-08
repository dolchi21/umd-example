(function(factory){

	if (typeof module === 'object' && module.exports) {
		module.exports = factory(require('axios'));
	} else {
		window.User = factory(window.axios);
	}

})(function UserFactory(axios){
	
	function User(username){
		this._name = username;
		function name(){
			return this._name;
		}
		this.name = name;
	}

	User.random = function(){
		return axios.get('http://some-url.com/users/random/').then(function(response){
			return new User(response.data);
		});
	}
	
	return User;
	
});