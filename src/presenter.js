import RoutePoint from './view/route-point.js';
import EditingForm from './view/editing-form.js';
import FormOfCreation from './view/form-of-creation.js';
import EventsList from './view/list-of-events.js';
import Sorting from './view/sorting.js';
import {render} from './render.js';

export default class Presenter {
  list = new EventsList();


  constructor({container}) {
    this.container = container;
  }

  init() {
    render(new Sorting(), this.container);
    render(this.list, this.container);
    render(new EditingForm(), this.pointsList.getElement());
    render(new FormOfCreation(), this.pointsList.getElement());

    for (let i = 0; i < 3; i++) {
      render(new RoutePoint(), this.pointsList.getElement());
    }

  }

}
