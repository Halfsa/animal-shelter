/**a main Ts amit haszálunk */
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
            x.age = YearToNumber(x.age)
            animals.push(x)
            SelectLoad(x.species)
            Tablefull(x)
          }
    })
}

/**A felhasználó által megadott adatoknak a szűrése */
function Search(){
  //console.table(animals)
  /**Output kellő valtozók */
  const tbody = document.getElementById('table-animals')
  /**imput magkapott adatok */
  console.log(animal);
  const min = parseInt((document.getElementById('min') as HTMLInputElement).value)
  const max = parseInt((document.getElementById('max') as HTMLInputElement).value)
  const species = (document.getElementById('species') as HTMLInputElement).value
  const gender = (document.getElementById('gender') as HTMLInputElement).value
  /**Ellenőrzés mielőtt a filtert megcsináljuk */
  /**ha a [min] nem szám vagy nagyobb mint [max]*/
  if(isNaN(min) || min > max){
    alert("Hibás érték: Minimum")
  }
  /**ha a [max] nem szám vagy kissebbb mint [min]*/
  if(isNaN(max) || max < min){
    alert("Hibás érték: Maximum")
  }
  /**Ha olyansmit ír be ami nincs a [animal] listánkba */
  if(!animal.includes(species)){
    alert("Hibás érték: Állatfaj")
  }
  /**ha a [gender] dropdown üresen hadja */
  if(gender == null){
    alert("Hibás érték: Mem")
  }
  /**Ha minden helyes akkor lépünk be a filter-es részbe
   * egy pár változó */
  else{
    let vs:Animals[] = [] 
    vs = animals
    /**A éveket átírjuk napokra */
    /**Filer a felhasználó szerint */
    /**Életkor filter */
    let a = vs.filter(x => x.age <= max && x.age >= min)
    console.table(a)
    /**Nem filter */
    let b = a.filter(x => x.gender == gender)
    console.table(b)
    /**Faj filter */
    let final = b.filter(x => x.species == species)
    console.table(final)
    if(final.length == 0){
      /**Ha nincs ilyen találat */
      alert("Sajnos ilyen állat nincs a menhelyünkön")
    }
    else{
      /**Kiírás table-be */
      console.table(final)
      tbody!.innerHTML = ""
      final.forEach((a) => {
        /**for kiírás */
        const td_species = document.createElement('td')
        const td_name = document.createElement('td')
        const td_age = document.createElement('td')
        const td_gender = document.createElement('td')
        td_species.innerHTML = '<img class="table-img" src="./src/img/' + a.species + '.svg">'
        td_name.textContent = a.name
        td_age.textContent = a.age.toString()
        if(a.gender == "M"){
          td_gender.innerHTML = '<img class="table-img" src="./src/img/male.png" style="width: 5%;height: auto;">'
        }
        else{
          td_gender.innerHTML = '<img class="table-img" src="./src/img/female.png" style="width: 5%;height: auto;">'
        }
        let tr = document.createElement('tr')
        tr.appendChild(td_species)
        tr.appendChild(td_name)
        tr.appendChild(td_age)
        tr.appendChild(td_gender)
        tbody!.appendChild(tr)
      })
    }
  }
}

/**az eddig létező állatokat tartalmazza */
const animal : string[] = []
/**A select dinamikuasn feltöljük ezzel a funcion-nal */
function SelectLoad(x : string){
  /** Select lekérdezzük*/
  const selectSpecies = document.getElementById('species')!
  /**Dinamikusan csinálunk új option-okat */
  const option = document.createElement('option')
  /**Ha a [animal] még nincs*/
  if(!(animal.includes(x))){
    animal.push(x)
    option.value = `${x}`
    option.textContent = `${x}`
    selectSpecies!.appendChild(option)
  } 
}

/**Az éveket átírja korrá */
function YearToNumber(vs:number){
  const year = new Date().getFullYear()
  vs = (year - vs) + 1
  return vs;
}

function Tablefull(x : Animals){
  /**Output kellő valtozók */
  const tbody = document.getElementById('table-animals')
  const tr = document.createElement('tr')
  const td_species = document.createElement('td')
  const td_name = document.createElement('td')
  const td_age = document.createElement('td')
  const td_gender = document.createElement('td')
  /**for kiírás */
  td_species.innerHTML = '<img class="table-img" src="./src/img/' + x.species + '.svg">'
  td_name.textContent = x.name
  td_age.textContent = x.age.toString()
  if(x.gender == "M"){
    td_gender.innerHTML = '<img class="table-img" src="./src/img/male.png" style="width: 5%;height: auto;">'
  }
  else{
    td_gender.innerHTML = '<img class="table-img" src="./src/img/female.png" style="width: 5%;height: auto;">'
  }
  tr.appendChild(td_species)
  tr.appendChild(td_name)
  tr.appendChild(td_age)
  tr.appendChild(td_gender)
  tbody!.appendChild(tr)
}

/**A Search gomb nyomásakor lefútó funcion meghívása */
document.getElementById('Search')!.addEventListener('click', Search)
/**A load lefutó fincion meghívása */
document.addEventListener('DOMContentLoaded', load)