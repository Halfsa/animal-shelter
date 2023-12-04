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
             //throw new Error("Nem megfelő nem" + id)
        }
        if(species.trim() == ""){
            /**faj ellenőrzés */
            throw new Error("Nics faj" + id)
        }
        if(age < 2015 && age > this.current && isNaN(age)){
            /**date of bith ellenőrzés */
            throw new Error("Nics Életkor" + id)
        }
    }
}