import mongoose from 'mongoose';

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = mongoose.connect('mongodb://localhost:27017/vuttr', {
      useNewUrlParser: true,
      useFindAndModify: true,
    });
  }
}

export default new Database();
