import Measurement, {IMeasurement} from "./model";


async function getAll(): Promise<IMeasurement[]> {
    return await Measurement.find()
}

async function getById(id: string): Promise<IMeasurement|null> {
    return await Measurement.findById(id)
}

interface ICreateMeasurement {
    name: string,
    value: string
}

async function create(measurement: ICreateMeasurement) {
    return await Measurement.create(measurement)
}

async function updateOne(id: string, newMeasurement: ICreateMeasurement) {
    return await Measurement.updateOne({_id: id}, newMeasurement)
}

async function deleteOne(id: any) {
    return await Measurement.deleteOne({_id: id})
}

export default {
    getAll,
    getById,
    create,
    updateOne,
    deleteOne
}