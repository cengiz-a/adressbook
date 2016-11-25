import Marionette from 'backbone.marionette';
import AddNewView from './addNewView.js';
import DetailView from './detailView.js';
import ListView from './listview.js';
import rootViewTemplate from '../../templates/rootViewTemplate.handlebars';
import listModel from '../models/listModel';
import model from '../models/model';




var RootView = Marionette.View.extend({

    template: rootViewTemplate,

    regions: {
        list: '#list',
        details: '#details',
        addNew: '#addNew'
    },

    initialize: function () {
        this.render();
    },

    onRender: function() {
        console.log("Views ausgeführt");
        this.showChildView('list', new ListView({model: listModel}));
        this.showChildView('details', new DetailView({model: model}));
        this.showChildView('addNew', new AddNewView({model: model}));
    }
});



export default RootView;