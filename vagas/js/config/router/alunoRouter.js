angular.module("escola").config(function ($routeProvider) {
	
	$routeProvider.when("/alunos", {
		templateUrl: "view/aluno/alunos.html",
		controller: "alunoCtrl",
		
		resolve:{
			alunos:function(alunoAPI) {
				return alunoAPI.getAlunos();
			}
		}
	});
	$routeProvider.when("/alunoNew", {
		templateUrl: "view/aluno/alunoNew.html",
		controller: "alunoNewCtrl"			
	});

	$routeProvider.when("/alunoEdit/:id", {
		templateUrl: "view/aluno/alunoEdit.html",
		controller: "alunoEditCtrl",
		resolve: {
			aluno: function (alunoAPI, $route) {
				return alunoAPI.getAluno($route.current.params.id);
			}
		}
	});
	
});