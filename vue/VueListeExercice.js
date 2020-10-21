class VueListeExercice{
    constructor(){
        this.html = document.getElementById("html-vue-liste-exercice").innerHTML;
        this.listeExerciceDonnee = null;
    }
    
    initialiserListeExercice(listeExerciceDonnee){
        this.listeExerciceDonnee = listeExerciceDonnee;
    }

    afficher(){
        document.getElementsByTagName("body")[0].innerHTML = this.html;

        let listeExercice = document.getElementById("liste-exercice");
        const listeExerciceItemHTML = listeExercice.innerHTML;
        let listeExerciceHTMLRemplacement = "";

        for(var numeroExercice in this.listeExerciceDonnee){
            let listeExerciceItemHTMLRemplacement = listeExerciceItemHTML;
            listeExerciceItemHTMLRemplacement = listeExerciceItemHTMLRemplacement.replace("{Exercice.id}",this.listeExerciceDonnee[numeroExercice].id);
            listeExerciceItemHTMLRemplacement = listeExerciceItemHTMLRemplacement.replace("{Exercice.id}",this.listeExerciceDonnee[numeroExercice].id);
            listeExerciceItemHTMLRemplacement = listeExerciceItemHTMLRemplacement.replace("{Exercice.nom}",this.listeExerciceDonnee[numeroExercice].nom);
            listeExerciceHTMLRemplacement += listeExerciceItemHTMLRemplacement;
        }
        listeExercice.innerHTML = listeExerciceHTMLRemplacement;
    }
}