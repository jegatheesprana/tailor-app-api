import Tailor, {ITailor} from "./model";


async function getAll(): Promise<ITailor[]> {
    return await Tailor.find()
}

async function getById(id: string): Promise<ITailor|null> {
    return await Tailor.findById(id)
}

interface ICreateTailor {
    name: string,
    value: string
}

async function create(tailor: ICreateTailor) {
    return await Tailor.create(tailor)
}

async function updateOne(id: string, newTailor: ICreateTailor) {
    return await Tailor.updateOne({_id: id}, newTailor)
}

async function deleteOne(id: any) {
    return await Tailor.deleteOne({_id: id})
}

export default {
    getAll,
    getById,
    create,
    updateOne,
    deleteOne
}