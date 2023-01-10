import Payment, {IPayment} from "./model";


async function getAll(): Promise<IPayment[]> {
    return await Payment.find()
}

async function getById(id: string): Promise<IPayment|null> {
    return await Payment.findById(id)
}

async function create(payment: IPayment) {
    return await Payment.create(payment)
}

async function updateOne(id: string, newPayment: IPayment) {
    return await Payment.updateOne({_id: id}, newPayment)
}

async function deleteOne(id: any) {
    return await Payment.deleteOne({_id: id})
}

export default {
    getAll,
    getById,
    create,
    updateOne,
    deleteOne
}