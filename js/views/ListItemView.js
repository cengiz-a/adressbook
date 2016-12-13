import Marionette from 'backbone.marionette';
import  listViewTemplate from '../../templates/ListItem.handlebars';
import detailView from './detailView';


var ListItemView = Marionette.View.extend({

    tagName: 'li',
    template: listViewTemplate,



    initialize () {
        this.render();
    },

});

export default ListItemView;

