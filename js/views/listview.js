import Marionette from 'backbone.marionette';
import  listViewTemplate from '../../templates/list.handlebars';
import ListItemView from './ListItemView.js';
import List from '../collections/collection';


var listView = Marionette.CollectionView.extend({

    tagName: 'ul',
    className: 'list',


    childView: ListItemView,

    initialize() {
        this.render();
    },

});



export default listView;