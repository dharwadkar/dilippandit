function getMeta(metaName) {
    let metas = document.getElementsByTagName('meta');
    //console.log("Meta elements are", metas)

    for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('name') === metaName) {
            //console.log("Each Meta is: ", metas[i])
            return metas[i].getAttribute('value');
        }
    }
    return '';
}
/* Usage in browser console
console.log(getMeta('description')); */