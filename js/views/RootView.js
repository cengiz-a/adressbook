import Marionette from 'backbone.marionette';
import AddNewView from './addNewView.js';
import DetailView from './detailView.js';
import ListView from './listview.js';
import rootViewTemplate from '../../templates/rootViewTemplate.handlebars';
import listModel from '../models/listModel';
import model from '../models/model';
import list from '../collections/collection';




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

        // old  this.showChildView('list', new ListView({model: model.set({itemName: "example"})}));
        this.showChildView('list', new ListView({collection: list}));
        this.showChildView('details', new DetailView({model: model.set({name: "Cengiz", firstName: "Han", email: "a.c.cengizhan@me.com", job: "cool sein" })}));
        this.showChildView('addNew', new AddNewView({model: listModel}));
    }
});



export default RootView;