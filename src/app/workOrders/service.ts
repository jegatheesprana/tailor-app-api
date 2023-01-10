import WorkOrder, {IWorkOrder} from "./model";


async function getAll(): Promise<IWorkOrder[]> {
    return await WorkOrder.find()
}

async function getById(id: string): Promise<IWorkOrder|null> {
    return await WorkOrder.findById(id)
}

async function create(workOrder: IWorkOrder) {
    return await WorkOrder.create(workOrder)
}

async function updateOne(id: string, newWorkOrder: IWorkOrder) {
    return await WorkOrder.updateOne({_id: id}, newWorkOrder)
}

async function deleteOne(id: any) {
    return await WorkOrder.deleteOne({_id: id})
}

export default {
    getAll,
    getById,
    create,
    updateOne,
    deleteOne
}