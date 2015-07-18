Vue.filter('basename', function (value) {
    return value.substring(0,value.indexOf('.'));
});