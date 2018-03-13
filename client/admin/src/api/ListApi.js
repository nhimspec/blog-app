const listapi = {
    user: {
        register: '/api/user/register',
        login: '/api/user/login',
        userInfoApi: '/api/user/info'
    },
    blog: {
        category: {
            getList: '/api/blog/category/list',
            create: '/api/blog/category/create'
        },
        post: {
            getList: '/api/blog/post/list',
            create: '/api/blog/post/create'
        }
    }

};
export default listapi;
