import Marionette from 'backbone.marionette';
import AddingTemplate from '../../templates/addNew.handlebars';
import $ from 'jquery';
import Model from '../models/model';
import List from './CollectionView';

var  addNewView = Marionette.View.extend({

    template: AddingTemplate,

    ui: {
      add: '#add'
    },

    events: {
        'click @ui.add': 'add'
    },

    add: function (e, model) {
        e.preventDefault();

        model = new Model();

        var input = document.getElementById('form');

        var name =      $('input#name').val();
        var firstName = $('input#firstName').val();
        var tel =       $('input#tel').val();
        var ranking =   $('input#ranking').val();
        var email =     $('input#email').val();
        var job =       $('input#job').val();

        if(name && firstName && tel) {
            model.set({firstName: firstName});
            model.set({name: name});
            model.set({tel: tel});
            model.set({ranking: ranking});
            model.set({email: email});
            model.set({job: job});

            List.collection.add(model);
        }else{
            alert("Pflichtfelder ausfüllen (Vorname, Name, Telefon)");
        }

        input.reset();

    },

    initialize() {
        this.render();
    },


});





export default addNewView;

