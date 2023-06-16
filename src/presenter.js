import RoutePoint from './view/route-point.js';
import EditingForm from './view/editing-form.js';
import FormOfCreation from './view/form-of-creation.js';
import EventsList from './view/list-of-events.js';
import Sorting from './view/sorting.js';
import {render} from './render.js';
import PointsModel from '../model/points-model';


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

  #renderPoint = (point) => {
    const pointComponent = new PointView(point);
    const pointEditComponent = new FormEditView(point);

    const replacePointToForm = () => {
      this.#list.element.replaceChild(pointEditComponent.element, pointComponent.element);
    };

    const replaceFormToPoint = () => {
      this.#list.element.replaceChild(pointComponent.element, pointEditComponent.element);
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    pointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replacePointToForm();
      document.addEventListener('keydown', onEscKeyDown);
    });

    pointEditComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replaceFormToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    });
    pointEditComponent.element.querySelector('form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceFormToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    });


    render(pointComponent, this.#list.element);


  };

}
