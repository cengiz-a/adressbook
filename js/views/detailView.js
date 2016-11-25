import Marionette from 'backbone.marionette';
import  DetailViewTemplate from '../../templates/detail-list.handlebars';


var detailView = Marionette.View.extend({

    template: DetailViewTemplate,

    initialize() {
        console.log("detailView initialized");
        this.render();
    },
});


export default detailView;