angular.module("escola").config(function ($routeProvider) {	
	
	$routeProvider.when("/turmas", {
		templateUrl: "view/turma/turmas.html",
		controller: "turmaCtrl",
		authorize: true,
		resolve:{
			turmas:function(turmaAPI) {
				return turmaAPI.getTurmas();
			}
		}			
	});
	$routeProvider.when("/turmaNew", {
		templateUrl: "view/turma/turmasNew.html",
		controller: "turmaNewCtrl",
		resolve: {
			escolas: function (escolaAPI) {
				return escolaAPI.getEscolas();
			},
			periodos: function (periodoAPI) {
				return periodoAPI.getPeriodos();
			},
			anoLetivos: function (anoLetivoAPI) {
				return anoLetivoAPI.getAnoLetivos();
			}
		}			
	});

	$routeProvider.when("/turmaEdit/:id", {
		templateUrl: "view/turma/turmasEdit.html",
		controller: "turmaEditCtrl",
		resolve: {
			turma: function (turmaAPI, $route) {
				return turmaAPI.getTurma($route.current.params.id);
			}
		}
	});
	
});