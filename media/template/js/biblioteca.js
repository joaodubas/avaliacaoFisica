/**
 * @author joaodubas
 */
if (window.Element) {
    var $ = function(idElm){
        return document.getElementById(idElm);
    };
    Element.prototype.removeClass = function(className){
        var regexClass = new RegExp(className);
        this.className = this.className.replace(regexClass, '');
        this.className = this.className.replace(/^\s$/gi, '');
    }
    Element.prototype.addClass = function(className){
        if (this.className.search(className) == -1) {
            if (this.className == '') {
                this.className = className;
            } else {
                this.className = this.className + ' ' + className;
            } 
        } 
    };
    Element.prototype.replaceClass = function(classNameApagar, classNameAdicionar){
        this.removeClass(classNameApagar);
        this.addClass(classNameAdicionar);
    };
} else {
    var $ = function(elm){
        if(typeof idElm == 'string'){
            elm = document.getElementById(elm); 
        }
        for(var indice in __ElementFunction){
            if(elm[indice] == 'undefined'){
                elm[indice] = __ElementFunction[indice];
            }
        }
    };
    var __ElementFunction = {
        removeClass: function(className){
            this.className = removeClassFunction(this, className);
        },
        addClass: function(className){
            this.className = addClassFunction(this, className);
        },
        replaceClass: function(classNameApagar, classNameAdicionar){
            __ElementFunction.removeClass(classNameApagar);
            __ElementFunction.addClass(classNameAdicionar);
        },
    }
}
var _getEvent = function(e){
    return e || window.event;
};
var _getElmTarget = function(e){
    var evt = _getEvent(e);
    return evt.target || evt.srcElement;
};
var _getFormatNodeName = function(elmHtml){
    return elmHtml.nodeName.toLowerCase();
};
