var repo = {},
    lastId = 0;
// example object {id:2, name:"Lego"}
module.exports.getAll = function (repoName) {
    var items = [];
    if (repo[repoName] !== undefined) {
        items = repo[repoName];
    }
    return items;
};
module.exports.get = function (repoName, id) {
    // Get a specific item from our items based on it's id
    var items = repo[repoName];
    if (items !== undefined) {
        for (var i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                return items[i];
            }
        }
    }
};
module.exports.create = function (repoName, obj) {
    // give our object an id and add it to our items
    var tempId = lastId + 1;
    if (repo[repoName] === undefined) {
        repo[repoName] = [];
    }
    obj.id = tempId;
    repo[repoName].push(obj);
    lastId = tempId;
    return lastId;
};
module.exports.remove = function (repoName, id) {
    // Remove object with the given id from the items array
    var objectId,
        items = repo[repoName];
    if (items !== undefined) {
        for (var i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                objectId = i;
            }
        }
        if (objectId !== undefined) {
            items.splice(objectId, 1);
        }
    }
};
module.exports.update = function (repoName, id, obj) {
    // Update the object with the given id.
    // Can delete original and then add the object 
    var objectId;
    if (repo[repoName] === undefined) {
        repo[repoName] = [];
    }
    var items = repo[repoName];
    obj.id = id;
    for (var i = 0; i < items.length; i++) {
        if (items[i].id === id) {
            objectId = i;
        }
    }
    if (objectId !== undefined) {
        items.splice(objectId, 1, obj);
    } else {
        items.push(obj);
    }
};