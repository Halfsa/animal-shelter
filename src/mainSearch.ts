/** A kapcsolat oldalhoz tartozó TS*/
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Animals } from './animals';

/**Api kapott adatokat tartalmazó tömb [Animals] típússal */
let animals:Animals [] = []
/**Apinak a linkje */
const apiLink = "https://retoolapi.dev/iVhTKf/animals"

/**Api megkapjuk az adatokat és azt [animals] tömbe tesszük*/
function load(){
    fetch(apiLink).then(final => {
        /**Fetch sikerességét viszgálja*/
        if(!final.ok){
            throw new Error('Error')
          }
          return final.json()
        }).then(inner => {
          for(let i = 0; i < 30; i++){
            let x = new Animals(parseInt(inner[i].id), inner[i].name, inner[i].gender, inner[i].species, parseInt(inner[i].year))
            animals.push(x)
            SelectLoad(x.species)
          }
    })
}

/**A felhasználó által megadott adatoknak a szűrése */
function Search(){
  /**imput magkapott adatok */
  const min = parseInt((document.getElementById('min') as HTMLInputElement).value)
  const max = parseInt((document.getElementById('min') as HTMLInputElement).value)
  const species = (document.getElementById('species') as HTMLInputElement).value
  const gender = (document.getElementById('gender') as HTMLInputElement).value
  let yearAgeMax : number
  let yearAgeMin : number
  let vs:Animals[] = [] 
  if(min == null || isNaN(min)){
    vs = animals
    yearAgeMax = new Date().getFullYear() - max
    vs.filter(x => x.age == yearAgeMax && x.gender == gender && x.species == species)
    console.table(vs)
  }
  else if(max == null || isNaN(max)){
    vs = animals
    yearAgeMin = new Date().getFullYear() - min
    vs.filter(x => x.age == yearAgeMin && x.gender == gender && x.species == species)
    console.table(vs)
  }
  else if((max == null && min == null) || (isNaN(max) && isNaN(min))){
    vs = animals
    vs.filter(x => x.gender == gender && x.species == species)
    console.table(vs)
  }
  else if(species == null){
    vs = animals
    yearAgeMax = new Date().getFullYear() - max
    yearAgeMin = new Date().getFullYear() - min
    vs.filter(x => x.age == yearAgeMax && x.gender == gender && x.age == yearAgeMin)
    console.table(vs)
  }
  else if(gender == null){
    vs = animals
    yearAgeMax = new Date().getFullYear() - max
    yearAgeMin = new Date().getFullYear() - min
    vs.filter(x => x.age == yearAgeMax && x.species == species && x.age == yearAgeMin)
    console.table(vs)
  }
  else{
    vs = animals
    yearAgeMax = new Date().getFullYear() - max
    yearAgeMin = new Date().getFullYear() - min
    vs.filter(x => x.age == yearAgeMax && x.gender == gender && x.age == yearAgeMin && x.species == species)
    console.table(vs)
  }
}

/**az eddig létező állatokat tartalmazza */
const vs : string[] = []
/**A select dinamikuasn feltöljük ezzel a funcion-nal */
function SelectLoad(x : string){
  /** Select lekérdezzük*/
  const selectSpecies = document.getElementById('species')!
  /**Dinamikusan csinálunk új option-okat */
  const option = document.createElement('option')
  /**Ha a [vs] még nincs*/
  if(!(vs.includes(x))){
    vs.push(x)
    option.value = `${x}`
    option.textContent = `${x}`
    selectSpecies!.appendChild(option)
  } 
}

/**A Search gomb nyomásakor lefútó funcion meghívása */
document.getElementById('Search')!.addEventListener('click', Search)
/**A load lefutó fincion meghívása */
document.addEventListener('DOMContentLoaded', load)