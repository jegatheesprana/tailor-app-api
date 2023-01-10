import CoatRenting, {ICoatRenting} from "./model";


async function getAll(): Promise<ICoatRenting[]> {
    return await CoatRenting.find()
}

async function getById(id: string): Promise<ICoatRenting|null> {
    return await CoatRenting.findById(id)
}

interface ICreateCoatRenting {
    name: string,
    value: string
}

async function create(coatRenting: ICreateCoatRenting) {
    return await CoatRenting.create(coatRenting)
}

async function updateOne(id: string, newCoatRenting: ICreateCoatRenting) {
    return await CoatRenting.updateOne({_id: id}, newCoatRenting)
}

async function deleteOne(id: any) {
    return await CoatRenting.deleteOne({_id: id})
}

export default {
    getAll,
    getById,
    create,
    updateOne,
    deleteOne
}