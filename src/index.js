import mongoose from 'mongoose';
import Promise from 'bluebird';

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const Pet = mongoose.model('Pet', { 
    type: String,
    name: String,
});

const kitty = new Pet({ 
    name: 'Zildjian',
    type: 'cat',
});

kitty.save()
.then(() => {
    console.log('success');
})
.catch((err) => {
    console.log('err', err);
});