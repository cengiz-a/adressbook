import Marionette from 'backbone.marionette';
import  listViewTemplate from '../../templates/list.handlebars';
import ListItemView from './ListItemView.js';


var listView = Marionette.CollectionView.extend({

    template: listViewTemplate,

    //new

    childView: ListItemView,

    initialize() {
        this.render();
    },

});



export default listView;