import Marionette from 'backbone.marionette';
import AddingTemplate from '../../templates/addNew.handlebars';


const  addNewView = Marionette.View.extend({


    template: AddingTemplate,


    events: {
        'click .neuer-kontakt': 'addNew'
    },

    initialize() {
        this.render();
    },

    addNew: function (e) {
        this.model.set({name: e.target.value});
        this.model.set({firstName: e.target.value});
        this.model.set({email: e.target.value});
        this.model.set({job: e.target.value});
    },


});

export default addNewView;

