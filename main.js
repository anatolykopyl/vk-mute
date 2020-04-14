const changeUrlDetect = setInterval((function () {
    let oldUrl = '';
    return function () {
        const currentUrl = window.location.href;
        if(currentUrl !== oldUrl){
            oldUrl = currentUrl;
        }
    }
})(),100);