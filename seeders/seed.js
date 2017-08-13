const models = require('./models');

models.User.create({
  username: 'fonzilla',
  password: 'test',
  createdAt: Date.now(),
  updatedAt: Date.now()
})
.then(result => {
  console.log(result);
})
.catch(err => {
  throw (err);
})

models.User.find({
  where: {
    username: 'fonzilla'
  }
})
.then(user => {
  console.log(user.auth('test'));
  return user.auth('test');
})

process.exit[0]
