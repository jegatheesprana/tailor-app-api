import Material, {IMaterial} from "./model";


async function getAll(): Promise<IMaterial[]> {
    return await Material.find()
}

async function getById(id: string): Promise<IMaterial|null> {
    return await Material.findById(id)
}

interface ICreateMaterial {
    id: string,
    name: string,
    description: string,
    unitPrice: number,
}

async function create(material: ICreateMaterial) {
    return await Material.create(material)
}

async function updateOne(id: string, newMaterial: ICreateMaterial) {
    return await Material.updateOne({_id: id}, newMaterial)
}

async function deleteOne(id: any) {
    return await Material.deleteOne({_id: id})
}

export default {
    getAll,
    getById,
    create,
    updateOne,
    deleteOne
}