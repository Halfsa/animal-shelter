/** A kapcsolat oldalhoz tartozó TS*/
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Animals } from './animals';

/**Api kapott adatokat tartalmazó tömb [Animals] típússal */
let animals:Animals [] = []
/**Apinak a linkje */
const apiLink = "https://retoolapi.dev/FTJzOW/Animals"