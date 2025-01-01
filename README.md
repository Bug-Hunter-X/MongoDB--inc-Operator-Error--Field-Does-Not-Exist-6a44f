# MongoDB $inc Operator Error
This repository demonstrates a common error when using the `$inc` operator in MongoDB. The `$inc` operator is used to increment a numeric field by a specified value. However, if the field does not exist, the operation will fail. 

## Bug
The bug lies in the incorrect usage of the `$inc` operator. The following code attempts to increment a field named `counter` by 1. If the `counter` field does not exist, the operation will not create it and the update will fail silently.

```javascript
db.collection('myCollection').updateOne({"_id":ObjectId("65151e9e60d8577779297654")},{$inc:{counter:1}});
```

## Solution
The solution is to use the `$setOnInsert` operator in conjunction with the `$inc` operator. This ensures that the `counter` field is created if it does not exist, and then incremented. Alternatively, you can use the `$set` operator to check if a counter field exists and update it accordingly.

```javascript
db.collection('myCollection').updateOne({"_id":ObjectId("65151e9e60d8577779297654")},{$set:{counter:0},$inc:{counter:1}});
```