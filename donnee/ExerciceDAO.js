class ExerciceDAO{
    constructor(){
        this.listeExercice = [];
    }

    lister(){
        if(localStorage['exercice']){
            this.listeExercice = JSON.parse(localStorage['exercice']);
        }

        for(let position in this.listeExercice){
            let exercice = new Exercice(this.listeExercice[position].nom,
                this.listeExercice[position].muscle,
                this.listeExercice[position].description,
                this.listeExercice[position].id);

            this.listeExercice[exercice.id] = exercice;
        }
        return this.listeExercice;
    }

    ajouter(exercice){
        if(this.listeExercice.length > 0)
            exercice.id = this.listeExercice[this.listeExercice.length - 1].id + 1;
        else
            exercice.id = 0;
    
        this.listeExercice[exercice.id] = exercice;

        localStorage['exercice'] = JSON.stringify(this.listeExercice);

        console.log("JSON.stringify(this.listeExercice): " + JSON.stringify(this.listeExercice));
    }
}