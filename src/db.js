
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

export const connect = () => {
  return mongoose.connect('mongodb://alex:2512@ds249575.mlab.com:49575/jams', {
    useMongoClient: true
  });
};