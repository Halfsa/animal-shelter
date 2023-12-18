/**Api jövő adatokhoz egy osztály
*/
export class Animals{
    /**A jelenlegi időt kapja meg */
    current = new Date().getFullYear()
    constructor(public id:number, public name:string, public gender:string, public species:string, public age:number){
        if(id <= 0 && isNaN(id)){
            /**Id ellenőrzés */
            throw new Error("Hibás ID")
        }
        this.id = id
        name = name.trim()
        this.name = name
        if(name == ""){
            /**név ellenőrzés */
            throw new Error("Nics név" + id)
        }
        gender = gender.trim()
        if(gender == ""){
            /**nem ellenőrzés */
            throw new Error("Nics nem" + id)
        }
        if(!(gender == "F" || gender == "M")){
            /**gender helyest tartalmaz */
            throw new Error("Nem megfelő nem" + id)
        }
        this.gender = gender
        species = species.trim()
        if(species == ""){
            /**faj ellenőrzés */
            throw new Error("Nics faj" + id)
        }
        this.species = species
        if(age < 2015 && age > this.current && isNaN(age)){
            /**date of bith ellenőrzés */
            throw new Error("Nics Életkor" + id)
        }
        this.age = age
    }
}