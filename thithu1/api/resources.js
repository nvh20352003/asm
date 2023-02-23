import instance from "./config";

const getResources = () => {
    return instance.get("/resources");
};
const getResource = (id) => {
    return instance.get(`/resources/${id}`);
};
const addResources = (project) => {
    return instance.post("/resources", project);
};
const deleteResources = (id) => {
    return instance.delete(`/resources/${id}`);
};
const updateResources = (project) => {
    return instance.put(`/resources/${project.id}`, project);
};

export { getResources, getResource, addResources, deleteResources, updateResources };