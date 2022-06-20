import api from "./api";

async function getAll() {
    return await api.get(`/url?accountId=123123`);
}

async function getById(id) {
    return await api.get(`/url?accountId=123123/${id}`);
}

async function create(data) {
    return await api.post(`/url?accountId=123123`, data);
}

async function update(id, data) {
    return await api.put(`/url?accountId=123123/${id}`, data);
}

async function deleteArticle(id) {
    return await api.delete(`/url?accountId=123123/${id}`);
}

export const Article = {
    getAll,
    getById,
    create,
    update,
    delete: deleteArticle,
};