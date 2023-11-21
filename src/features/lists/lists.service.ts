import List from './lists.model';

async function getAll() {
    return List.find();
}

async function get(id) {
    return List.findOne({_id: id});
}

async function create(data) {
    return new List(data).save();
}

async function update(id, data) {
    return List.findOneAndUpdate({_id: id}, data);
}

async function remove(id) {
    return List.findByIdAndDelete({_id: id});
}

export { getAll, get, create, update, remove}; 