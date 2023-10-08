var spaless = function () {

    var registeredComponents = [];

    function registerComponent(serlizedElement) {
        registeredComponents.push(createElementFromSerlizedElement(serlizedElement));
    }

    function createElementFromSerlizedElement(serlizedElement) {
        var temporaryElement = document.createElement("div");
        temporaryElement.innerHTML += serlizedElement;
        return temporaryElement.firstElementChild;
    }
    
    return function () {
        return Object.freeze({
        });
    }();
}();