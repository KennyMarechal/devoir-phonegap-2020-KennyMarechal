class VueExercice{
    constructor(){
        this.html = document.getElementById("html-vue-exercice").innerHTML;
        this.exercice = null;
    }

    initialiserExercice(exercice){
        this.exercice = exercice;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;

        document.getElementById("exercice-nom").innerHTML = this.exercice.nom;
        document.getElementById("exercice-muscle").innerHTML = this.exercice.muscle;
        document.getElementById("exercice-description").innerHTML = this.exercice.description;
    }
}