class Application {
    constructor(window, exerciceDAO, vueListeExercice, vueAjouterExercice, vueExercice, vueModifierExercice){
        this.window = window;
        this.exerciceDAO = exerciceDAO;

        this.vueListeExercice = vueListeExercice;

        this.vueExercice = vueExercice;

        this.vueModifierExercice = vueModifierExercice;

        this.vueAjouterExercice = vueAjouterExercice;
        this.vueAjouterExercice.initialiserActionAjouterExercice(exercice =>this.actionAjouterExercice(exercice));
        this.vueModifierExercice.initialiserActionModifierExercice(exercice =>this.actionModifierExercice(exercice));
        //this.window.addEventListener("hashchange", () => this.naviguer());
        document.addEventListener('deviceready', () => this.initialiserNavigation(), false);
        //this.naviguer();
    }

    initialiserNavigation(){
    this.window.addEventListener("hashchange", () => this.naviguer());
    setTimeout(()=>this.naviguer(),3000);
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
        else if(hash.match(/^#modifier-exercice\/([0-9]+)/)){
            let navigation = hash.match(/^#modifier-exercice\/([0-9]+)/);
            let idExercice = navigation[1];

            this.vueModifierExercice.initialiserExercice(this.exerciceDAO.lister()[idExercice]);
            this.vueModifierExercice.afficher();
        }
    }

    actionAjouterExercice(exercice){
        this.exerciceDAO.ajouter(exercice);
        this.window.location.hash = "#";
    }

    actionModifierExercice(exercice){
        this.exerciceDAO.modifier(exercice);
        this.window.location.hash = "#";
    }
}

new Application(window, new ExerciceDAO(), new VueListeExercice(), new VueAjouterExercice(), new VueExercice(), new VueModifierExercice());