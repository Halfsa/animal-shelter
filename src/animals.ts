/**Api jövő adatokhoz egy osztály
*/
export class Animals{
    constructor(public id:number, public name:string, public gender:string, public species:string, public available:boolean, public dateOfBirth:Date){
        if(id <= 0){
            /**Id ellenőrzés */
            throw new Error("Hibás ID")
        }
        if(name.trim() == ""){
            /**név ellenőrzés */
            throw new Error("Nics név" + id)
        }
        if(gender.trim() == ""){
            /**nem ellenőrzés */
            throw new Error("Nics nem" + id)
        }
        if(!(gender == "F" || gender == "M")){
            /**gender helyest tartalmaz */
            throw new Error("Nem megfelő nem" + id)
        }
        if(species.trim() == ""){
            /**faj ellenőrzés */
            throw new Error("Nics faj" + id)
        }
        if(dateOfBirth.valueOf() == null){
            /**date of bith ellenőrzés */
            throw new Error("Nics születési idő" + id)
        }
    }
}