
import backbone from 'backbone';


const myModel = backbone.Model.extend({
    default: {
        firstName: '',
        name: '',
        tel: '',
        ranking: '',
        email: '',
        job: '',
    }
});



export default myModel;

