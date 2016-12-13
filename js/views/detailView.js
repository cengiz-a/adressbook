import Marionette from 'backbone.marionette';
import  DetailViewTemplate from '../../templates/detail-list.handlebars';
import CollectionView from './CollectionView';



var detailView = Marionette.View.extend({

    template: DetailViewTemplate,


    initialize() {
        this.render();
    },


});


export default detailView;