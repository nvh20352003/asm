import instance from "./config";

const getPosts = () => {
    return instance.get("/post");
};
const getPost = (id) => {
    return instance.get(`/post/${id}`);
};
const addPost = (post) => {
    return instance.post("/posts", post);
};
const deletePost = (id) => {
    return instance.delete(`/posts/${id}`);
};
const updatePost = (post) => {
    return instance.put(`/posts/${post.id}`, post);
};

export { getPost, getPosts, addPost, deletePost, updatePost };