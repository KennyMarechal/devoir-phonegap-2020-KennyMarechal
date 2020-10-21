class Application {
    constructor(window, exerciceDAO, vueListeExercice, vueAjouterExercice, vueExercice){
        this.window = window;
        this.exerciceDAO = exerciceDAO;

        this.vueListeExercice = vueListeExercice;

        this.vueExercice = vueExercice;

        this.vueAjouterExercice = vueAjouterExercice;
        this.vueAjouterExercice.initialiserActionAjouterExercice(exercice =>this.actionAjouterExercice(exercice));
        this.window.addEventListener("hashchange", () => this.naviguer());
        this.naviguer();
    }

    naviguer(){
        let hash = window.location.hash;

        if(!hash){
            this.vueListeExercice.initialiserListeExercice(this.exerciceDAO.lister());
            this.vueListeExercice.afficher();

        }else if(hash.match(/^#ajouter-exercice/)){
            //console.log("afficher vue ajouter");
            this.vueAjouterExercice.afficher();
        }
        else if(hash.match(/^#exercice\/([0-9]+)/)){
            let navigation = hash.match(/^#exercice\/([0-9]+)/);
            let idExercice = navigation[1];

            this.vueExercice.initialiserExercice(this.exerciceDAO.lister()[idExercice]);
            this.vueExercice.afficher();
        }
    }

    actionAjouterExercice(exercice){
        this.exerciceDAO.ajouter(exercice);
        this.window.location.hash = "#";
    }
}

new Application(window, new ExerciceDAO(), new VueListeExercice(), new VueAjouterExercice(), new VueExercice());