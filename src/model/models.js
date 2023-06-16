import { genereateDestination, DESCRIPTION, CITIES, getRandomNumber} from '../mock/destination.js';
import { genereatePoint } from '../mock/generation-of-points.js';
import { genereateOffers } from '../mock/generation-of-offers.js';

export default class PointsModel {
  points = [genereatePoint(genereateDestination(DESCRIPTION[getRandomNumber(0,5)], CITIES[getRandomNumber(0,7)]), genereateOffers()),
    genereatePoint(genereateDestination(DESCRIPTION[getRandomNumber(0,5)], CITIES[getRandomNumber(0,7)]), genereateOffers()),
    genereatePoint(genereateDestination(DESCRIPTION[getRandomNumber(0,5)], CITIES[getRandomNumber(0,7)]), genereateOffers())];

  getPoints = () => this.points;
}
