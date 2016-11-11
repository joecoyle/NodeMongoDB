var {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://joe:test@ds147537.mlab.com:47537/todoapp', (err, db) =>{
  if(err){
    return console.log('error',err);
  }

  console.log('connected');
  db.collection('todos').find({completed:false}).toArray().then((docs)=>{
    console.log('Todos:');
    console.log(docs);
    // console.log(JSON.stringify(docs,undefined,2));
  }, (err)=>{
    return console.log('could not fetch', err)
  });
});
