import { createElement } from '../render.js';

const createTripEventsList = () => (
  `<ul class="trip-events__list">
  </ul>`
);

export default class EventsList {
  getTemplate () {
    return createTripEventsList;
  }

  getElement() {
    if (!this.element){
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
