import Marionette from 'backbone.marionette';
import  listViewTemplate from '../../templates/list.handlebars';


var listView = Marionette.View.extend({

    template: listViewTemplate,

    initialize() {
        this.render();
    },

});



export default listView;