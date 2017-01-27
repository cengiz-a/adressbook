
import backbone from 'backbone';


const myModel = backbone.Model.extend({
    default: {
        id: '',
        firstName: '',
        name: '',
        tel: '',
        email: '',
    }
});



export default myModel;

