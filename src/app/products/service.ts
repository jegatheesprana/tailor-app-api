import Product, {IProduct} from "./model";


async function getAll(): Promise<IProduct[]> {
    return await Product.find()
}

async function getById(id: string): Promise<IProduct|null> {
    return await Product.findById(id)
}

interface ICreateProduct {
    id: string,
    name: string,
    description: string,
    unitPrice: number,
}

async function create(product: ICreateProduct) {
    return await Product.create(product)
}

async function updateOne(id: string, newProduct: ICreateProduct) {
    return await Product.updateOne({_id: id}, newProduct)
}

async function deleteOne(id: any) {
    return await Product.deleteOne({_id: id})
}

export default {
    getAll,
    getById,
    create,
    updateOne,
    deleteOne
}