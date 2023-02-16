import instance from "./config";

const getAbuotMe = () => {
    return instance.get("/abuotMe");
};
const updateAbuotMe = (abuotMe) => {
    return instance.put(`/abuotMe/`, abuotMe);
};

export { getAbuotMe, updateAbuotMe };