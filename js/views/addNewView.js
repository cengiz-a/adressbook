import Marionette from 'backbone.marionette';
import AddingTemplate from '../../templates/addNew.handlebars';
import model from '../models/model';
import list from '../collections/collection';



var  addNewView = Marionette.View.extend({


    template: AddingTemplate,


    events: {
        'input #name': 'changeName',
        'input #firstName': 'changeFirstName',
        'input #email': 'changeEmail',
        'input #job': 'changeJob',
        'click #add': 'add'
    },

    modelEvents: {
        'change:name': 'actOnChange',
        'change:firstName': 'actOnChange',
        'change:email': 'actOnChange',
        'change:job': 'actOnChange'
    },


    add: function () {
        console.log("Running!");
    },

    actOnChange: function () {
        this.render();
    },

    initialize() {
        this.render();
    },

    changeName: function (e) {
        this.model.set({name: e.target.value});
    },

    changeFirstName: function (e) {
        this.model.set({firstName: e.target.value});
    },

    changeEmail: function (e) {
        this.model.set({email: e.target.value});
    },

    changeJob: function (e) {
        this.model.set({job: e.target.value});
    },



});





export default addNewView;

