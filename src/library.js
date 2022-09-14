import OnlyScroll from 'only-scrollbar';
import './js_components/loadWatchedMovies';
import './js_components/loadQueueMovies'
import './js_components/openModalOnGallery';
import './js_components/scroll-up';
const scroll = new OnlyScroll(document.scrollingElement, {
    damping: 0.8,
});

import loading from './js_components/loading-spinner';

loading();
