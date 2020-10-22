class VueModifierExercice{
    constructor(){
        this.html = document.getElementById("html-vue-modifier-exercice").innerHTML;
        this.exercice = null;
        this.actionModifierExercice = null;
    }

    initialiserExercice(exercice){
        this.exercice = exercice;
    }

    initialiserActionModifierExercice(actionModifierExercice){
        this.actionModifierExercice = actionModifierExercice;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;

        document.getElementById("exercice-nom-modifier").value = this.exercice.nom;
        document.getElementById("exercice-muscle").value = this.exercice.muscle;
        document.getElementById("exercice-description").value = this.exercice.description;

        document.getElementById("formulaire-modifier").addEventListener("submit", evenement =>this.modifier(evenement));
    }

    modifier(evenement){
        evenement.preventDefault();

        let nom =  document.getElementById("exercice-nom-modifier").value;
        let muscle = document.getElementById("exercice-muscle").value;
        let description = document.getElementById("exercice-description").value;
        let id = this.exercice.id;

        this.actionModifierExercice(new Exercice(nom, muscle, description, id));
    }
}