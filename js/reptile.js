
//通过用户id获取信息,参数直接写在url中
flyio.get('/user?id=133')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

//query参数通过对象传递
flyio.get('/user', {
    id: 133
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });