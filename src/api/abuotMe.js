import instance from "./config";

const getAbuotMe = () => {
    return instance.get("/abuotMe");
};
const updateAbuotMe = () => {
    return instance.put(`/abuotMe/`);
};

export { getAbuotMe, updateAbuotMe };