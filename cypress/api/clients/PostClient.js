import BaseApi from "../base/BaseApi";

class PostClient extends BaseApi {

    getPosts() {
        return this.sendRequest({
            method:'GET',
            url:'/posts'
        });
    }

    getSinglePost(id) {
        return this.sendRequest({
            method:'GET',
            url:`/posts/${id}`
        });
    }

    createPost(postData) {
        return this.sendRequest({
            method:'POST',
            url: '/posts',
            body: postData
        })
    }

    updatePost(id, updatedData) {
        return this.sendRequest({
            method:'PUT',
            url: `/posts/${id}`,
            body: updatedData
        })
    }

    deletePost(id) {
        return this.sendRequest({
            method: 'DELETE',
            url: `/posts/${id}`
        })
    }
}

export default new PostClient();