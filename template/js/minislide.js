/*
 * Minislide
 * Code derived from the original idea by Stephen Clark (http://www.sgclark.com/sandbox/minislide/)
 * Updated JS to enable active link indicator to "snap back' derived from Rob L Glazebrook (http://www.rootarcana.com/test/smartmini/)
 */

var minislide = {
    currentTab: 0,
    activeTab: 0,
    destX: 0,
    destW: 0,
    t: 0,
    b: 0,
    c: 0,
    d: 20,
    animInterval: null,
    sliderObj: null,
    aHeight: 0,
    ul: [],
    liArr: [],
    aArr: [],
    init: function() {
        if(!document.getElementById || !document.getElementById("minislide")) return;
        minislide.ul      = document.getElementById("minislide");
        minislide.liArr       = minislide.ul.getElementsByTagName("li");
        minislide.aArr    = minislide.ul.getElementsByTagName("a");
        for(var i = 0, li; li = minislide.liArr[i]; i++) {
            li.onmouseover = minislide.aArr[i].onfocus = function(e) {
                var pos = 0;
                var elem = this.nodeName == "LI" ? this : this.parentNode;
                while(elem.previousSibling) {
                    elem = elem.previousSibling;
                    if(elem.tagName && elem.tagName == "LI") pos++;
                }
                minislide.initSlide(pos);
            }
        }
        minislide.ul.onmouseout = function(e) {
            minislide.initSlide(minislide.currentTab);
        };
        for(var i = 0, a; a = minislide.aArr[i]; i++) {
            if(a.className.search("active") != -1) {
                minislide.activeTab = minislide.currentTab = i;
            }
            a.style.borderBottom  = "0px";
            a.style.paddingBottom = "6px";
        }
        minislide.slideObj        = minislide.ul.parentNode.appendChild(document.createElement("div"));
        minislide.slideObj.appendChild(document.createTextNode(String.fromCharCode(160)));
        minislide.slideObj.id         = "animated-tab";
        minislide.slideObj.style.top      = (minislide.ul.offsetTop + minislide.liArr[minislide.activeTab].offsetTop + minislide.aArr[minislide.activeTab].offsetTop) + "px";
        minislide.slideObj.style.left     = (minislide.ul.offsetLeft + minislide.liArr[minislide.activeTab].offsetLeft + minislide.aArr[minislide.activeTab].offsetLeft) + "px";
        minislide.slideObj.style.width    = minislide.aArr[minislide.activeTab].offsetWidth + "px";
        minislide.aHeight         = minislide.ul.offsetTop + minislide.liArr[minislide.activeTab].offsetTop + minislide.aArr[minislide.activeTab].offsetTop;
        minislide.initSlide(minislide.activeTab, true);
        var intervalMethod = function() { minislide.slideIt(); }
        minislide.animInterval = setInterval(intervalMethod,10);
    },
    cleanUp: function() {
        clearInterval(minislide.animInterval);
        minislide.animInterval = null;
    },
    initSlide: function(pos, force) {
        if(!force && pos == minislide.activeTab) return;
        minislide.activeTab = pos;
        minislide.initAnim();
    },
    initAnim: function() {
        minislide.destX = parseInt(minislide.liArr[minislide.activeTab].offsetLeft + minislide.liArr[minislide.activeTab].getElementsByTagName("a")[0].offsetLeft + minislide.ul.offsetLeft);
        minislide.destW = parseInt(minislide.liArr[minislide.activeTab].getElementsByTagName("a")[0].offsetWidth);
        minislide.t = 0;
        minislide.b = minislide.slideObj.offsetLeft;
        minislide.c = minislide.destX - minislide.b;
        minislide.bW = minislide.slideObj.offsetWidth;
        minislide.cW = minislide.destW - minislide.bW;
        minislide.slideObj.style.top = (minislide.ul.offsetTop + minislide.liArr[minislide.activeTab].offsetTop + minislide.aArr[minislide.activeTab].offsetTop) + "px";
    },
    slideIt:function() {
        // Has the browser text size changed?
        if(minislide.aHeight != minislide.ul.offsetTop + minislide.liArr[minislide.activeTab].offsetTop + minislide.aArr[minislide.activeTab].offsetTop) {
            minislide.initAnim();
            minislide.aHeight = minislide.ul.offsetTop + minislide.liArr[minislide.activeTab].offsetTop + minislide.aArr[minislide.activeTab].offsetTop
        };
        if(minislide.t++ < minislide.d) {
            var x = minislide.animate(minislide.t,minislide.b,minislide.c,minislide.d);
            var w = minislide.animate(minislide.t,minislide.bW,minislide.cW,minislide.d);

            minislide.slideObj.style.width = parseInt(w) + "px";
        } else {
            minislide.slideObj.style.left = minislide.destX + "px";
            minislide.slideObj.style.width = minislide.destW +"px";
        }
    },
    animate: function(t,b,c,d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
    }
}
window.onload = minislide.init;
window.onunload = minislide.cleanUp;

