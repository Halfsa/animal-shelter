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
          }
    })
}

document.addEventListener('DOMContentLoaded', load)