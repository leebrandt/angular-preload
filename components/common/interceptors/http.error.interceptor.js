(function(){

	var httpErrorInterceptor = function($q){
		return{
			response: function(result){
				// var headers = result.headers();
				// console.log(headers)
				// if(headers['content-type'] === 'application/json'){
				// 	return result.data;
				// }
				return result;
			},
			responseError: function(error){
				console.log('Error from call to: ', error.config.url, ': ', error.data.detail);
				return $q.reject(error);
			}

		};
	};

	angular.module('app')
		.factory('HttpErrorInterceptor', ['$q', httpErrorInterceptor])
}())