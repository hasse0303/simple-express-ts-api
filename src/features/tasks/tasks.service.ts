import Tasks from './tasks.model';

async function getAll() {
    return Tasks.find();
}

async function get(id) {
    return Tasks.findOne({_id: id})
}

async function create(data) {
    return new Tasks(data).save();
}

async function update(id, data) {
    return Tasks.findOneAndUpdate({_id: id}, data);
}

async function remove(id) {
    return Tasks.findByIdAndDelete({_id: id});
}

export {get, getAll, create, update, remove}