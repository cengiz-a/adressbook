
import Marionette from 'backbone.marionette';
import RootView from './views/RootView.js';


const App = Marionette.Application.extend({

    region: '#app',

    onStart: function() {
        this.showView(new RootView());
    }

});



export default App;