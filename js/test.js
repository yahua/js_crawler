function test() {
    const label = 'setTimeout';
    console.time(label);
    setTimeout(function () {
        console.timeEnd(label);
        return;
    }, 1000)
    for(var i = 0; i < 100000000; i++) {
        if (i%10000 == 0){
            console.log(i)
        }
    }
}

test();