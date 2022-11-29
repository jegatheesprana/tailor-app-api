import Customer, {ICustomer} from "./model";


async function getAll(): Promise<ICustomer[]> {
    return await Customer.find()
}

async function getById(id: string): Promise<ICustomer|null> {
    return await Customer.findById(id)
}

interface ICreateCustomer {
    name: string,
    value: string
}

async function create(customer: ICreateCustomer) {
    return await Customer.create(customer)
}

async function updateOne(id: string, newCustomer: ICreateCustomer) {
    return await Customer.updateOne({_id: id}, newCustomer)
}

async function deleteOne(id: any) {
    return await Customer.deleteOne({_id: id})
}

export default {
    getAll,
    getById,
    create,
    updateOne,
    deleteOne
}