var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http){
	
	$http.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded; charset=utf-8';

	$scope.newData={};
	$scope.allData=[];
	$http({
		method : 'get',
		url : 'web_services/get_data.php'
	}).then(function(res){
		console.log(res.data);
		$scope.allData=res.data;
	});	


	$scope.save=function(){
		// console.log($scope.newData);
		if($scope.newData.id)
		{
			$http({
				method : 'post',
				url : 'web_services/update.php',
				data : $.param($scope.newData)
			}).then(function(res){
				// $scope.allData[$scope.index]=$scope.newData;

				for(var i=0; i<$scope.allData.length; i++)
				{
					if($scope.allData[i].id==$scope.newData.id)
					{
						$scope.allData[i]=$scope.newData;
					}
				}
				$("#msgModal").modal('show');
				$scope.msg="Data Updated Succesfully";
			});
		}
		else
		{

			$http({
				method : 'post',
				url : 'web_services/save.php',
				data : $.param($scope.newData)
			}).then(function(res){
				$scope.newData.id=res.data.id;
				$scope.allData.push($scope.newData);
				$("#msgModal").modal('show');
				$scope.msg="Data Added Succesfully";
				$scope.newData={};
			});
		}
	}

	$scope.delete=function(obj, index){
		console.log(obj);
		$scope.selectedOjb=obj;
		$scope.index=index;



	}
	$scope.confDelete=function(){
		$http({
			method : 'post',
			url : 'web_services/delete.php',
			data : $.param($scope.selectedOjb)
		}).then(function(res){
			console.log(res.data);
			// var index = $scope.allData.indexOf($scope.selectedOjb);

			$scope.allData.splice($scope.index, 1);
			$("#msgModal").modal('show');
			$scope.msg="Data Deleted Succesfully";
		});	
	}
	$scope.edit=function(obj, index){
		// $scope.newData=obj;
		angular.copy(obj, $scope.newData);
		$scope.index=index;
	}
});
