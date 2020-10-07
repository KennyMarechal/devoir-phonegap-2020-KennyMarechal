class ExerciceDAO{
    constructor(){
        this.listeExercice = [{nom:"Curl", muscle:"Bicep", description:"Pour les bras", id:0},
        {nom:"Squat", muscle:"Quadricep", description:"Pour les cuisses", id:1},
        {nom:"Traction", muscle:"Dos", description:"Pour le dos", id:2}]
    }

    lister(){
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
        if(this.listeExercice.length > 0){
            exercice.id = this.listeExercice[this.listeExercice.length - 1].id + 1;
        }
        else{
            exercice.id = 0;
        }
        this.listeExercice[exercice.id] = exercice;
    }
}