import Presenter from './presenter.js';
import Filters from './view/filters.js';
import { render } from './render.js';

const filtersContainer = document.querySelector('.trip-controls__filters');
render(new Filters(), filtersContainer);

const container = document.querySelector('.trip-events');
const tripPresenter = new Presenter({container: container});

tripPresenter.init();
