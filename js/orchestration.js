var orchestration = function () {
    var DATA_ATTRIBUTE_PREFIX = "data-";

    function indexLabeling(elements, prefix){

        if(!prefix.startsWith(DATA_ATTRIBUTE_PREFIX)){
            prefix = DATA_ATTRIBUTE_PREFIX ;
        }

        elements.array.forEach(element => {
            element.setAttribute();
        });
    }

    return function () {
        return Object.freeze({
            indexLabeling: indexLabeling
        });
    }();
}();