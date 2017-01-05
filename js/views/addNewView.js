import Marionette from 'backbone.marionette';
import AddingTemplate from '../../templates/addNew.handlebars';

import Model from '../models/model';
import List from './CollectionView';



var  addNewView = Marionette.View.extend({

    template: AddingTemplate,


    events: {
        'input #name': 'changeName',
        'input #firstName': 'changeFirstName',
        'input #email': 'changeEmail',
        'input #job': 'changeJob',
        'click #add': 'add'
    },

    ui: {
        name: '#name',
        firstName: '#firstName',
        email: '#email',
        job: '#job'
    },
/*
    modelEvents: {
        'change:name': 'actOnChange',
        'change:firstName': 'actOnChange',
        'change:email': 'actOnChange',
        'change:job': 'actOnChange'
    },*/


    add: function (e, model) {
        e.preventDefault();

        model = new Model();

        var input = document.getElementById('form');

        var name = this.getUI('name');

        model.set({firstName: e.target.form[0].value});
        model.set({name: e.target.form[1].value});
        model.set({tel: e.target.form[2].value});
        model.set({ranking: e.target.form[3].value});
        model.set({email: e.target.form[4].value});
        model.set({job: e.target.form[5].value});

        List.collection.add(model);



        input.reset();

    },


    /*actOnChange: function () {
        this.render();
    },*/


    initialize() {
        this.render();
    },
    /*
   changeName: function (e) {

    },

    changeFirstName: function (e) {
        listModel.set({firstName: e.target.value})
    },

    changeEmail: function (e) {
        listModel.set({email: e.target.value})
    },

    changeJob: function (e) {
        listModel.set({job: e.target.value})
    },
*/


});





export default addNewView;

