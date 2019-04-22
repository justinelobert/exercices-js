/* Créez une fonction qui prend deux objets en entrée et écrit dans la console si leur type est identique ou pas.

pareil(2, 3); // le type est le même
pareil(2,"2"); // le type est différent */

/* === permet de vérifier le type de ma varible (string, int, ...) */


function pareil (entry1, entry2){   /* déclaration de ma fonction */
if (typeof entry1 == typeof entry2) {
    console.log("le type est le meme")
}
else{
    console.log("le type est différent")

}
}

pareil(2,3) /* permet d'afficher */
pareil(2,"2")