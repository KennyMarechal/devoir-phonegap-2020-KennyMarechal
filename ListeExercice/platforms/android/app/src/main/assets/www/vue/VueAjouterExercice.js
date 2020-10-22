class VueAjouterExercice{
    constructor(){
        this.html = document.getElementById("html-vue-ajouter-exercice").innerHTML;
        this.actionAjouterExercice = null;
    }

    initialiserActionAjouterExercice(actionAjouterExercice){
        this.actionAjouterExercice = actionAjouterExercice;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        document.getElementById("formulaire-ajouter").addEventListener("submit", evenement =>this.enregistrer(evenement));
    }

    enregistrer(evenement){
        evenement.preventDefault();

        let nom = document.getElementById("exercice-nom").value;
        let muscle = document.getElementById("exercice-muscle").value;
        let description = document.getElementById("exercice-description").value;

        this.actionAjouterExercice(new Exercice(nom, muscle, description, null));
    }
}