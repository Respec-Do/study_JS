function add(x, y, callback) {
    if (callback) {
        callback(x + y);
    }
    return x + y;
}

add(10, 20, (result) => {
    console.log(result);
});

