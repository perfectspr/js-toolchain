function fn1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('fn1');
        }, 2000);
    });
}

function fn2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('fn2');
        }, 2000);
    });
}
/*
fn1().then(data => {
    console.log(data);
    fn2().then(data => {
        console.log(data);
    })
})
*/
(async() =>{
    Promise.all([fn1, fn2]);
    //let fn1_name = await fn1();
    //let fn2_name = await fn2();
    //console.log(fn1_name, fn2_name);

})();
