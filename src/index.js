const axios = require('axios');
import ApiQuery from './js_components/api_query';

import { renderTrendMovies } from './js_components/trendMoviesCards';
import { onSearchMovie } from './js_components/searchMovie';
import getRefs from './js_components/getRefs';
const refs = getRefs();

renderTrendMovies();
<<<<<<< Updated upstream
import modalstudent from './modal-student.js';
=======
refs.form.addEventListener('submit', onSearchMovie);
import './js_components/close-modal';
import './js_components/scroll-up'
>>>>>>> Stashed changes
