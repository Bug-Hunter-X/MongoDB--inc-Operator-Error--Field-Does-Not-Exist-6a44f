```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("65151e9e60d8577779297654")},{$inc:{counter:1}});
```