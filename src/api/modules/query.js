import merge from 'lodash.merge';
const testData = {message: 'hello'};

//these are generic methods used in the generic controllers for all models
export const controllers = {
    createdOne(model,body){
        return Promise.resolve(testData);
    },
    updateOne(docToUpdate, update){
        return Promise.resolve(testData);
    },
    deleteOne(docToDelete){
        return Promise.resolve(testData);
    },
    getOne(docToGet){
        return Promise.resolve(testData);
    },
    getAll(model){
        return Promise.resolve(testData);
    },
    findByParam(model, id){
        return Promise.resolve(testData);
    }
};

export const createdOne = (model) => (req,res,next) => {};
export const updateOne = (model) => (req,res,next) => {};
export const deleteOne = (model) => (req,res,next) => {};
export const getOne = (model) => (req,res,next) => {};
export const getAll = (model) => (req,res,next) => {};
export const findByParam = (model) => (req,res,next,id) => {};

export const generateControllers = (model, overrides = {}) => {
    const defaults = {
        findByParam: findByParam(model),
        getAll: getAll(model),
        getOne: getOne(model),
        deleteOne: deleteOne(model),
        updateOne: updateOne(model),
        createdOne: createdOne(model)
    }
    return {...defaults, ...overrides};
};


