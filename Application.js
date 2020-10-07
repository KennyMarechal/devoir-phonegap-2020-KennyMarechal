class Application {
    constructor(window, exerciceDAO, vueListeExercice, vueAjouterExercice){
        this.window = window;
        this.exerciceDAO = exerciceDAO;

        this.vueListeExercice = vueListeExercice;

        this.vueAjouterExercice = vueAjouterExercice;
        this.vueAjouterExercice.initialiserActionAjouterExercice(exercice =>this.actionAjouterExercice(exercice));
        this.window.addEventListener("hashchange", () =>this.naviguer());
        this.naviguer();
    }

    naviguer(){
        let hash = window.location.hash;

        if(!hash){
            this.vueListeExercice.initialiserListeExercice(this.exerciceDAO.lister());
            this.vueListeExercice.afficher();

        }else if(hash.match(/^#ajouter-exercice/)){
            console.log("afficher vue ajouter");
            this.vueAjouterExercice.afficher();
        }
    }

    actionAjouterExercice(exercice){
        this.exerciceDAO.ajouter(exercice);
        this.window.location.hash = "#";
    }
}

new Application(window, new ExerciceDAO(), new VueListeExercice(), new VueAjouterExercice());