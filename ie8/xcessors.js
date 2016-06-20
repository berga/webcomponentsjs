/*
 @name Xccessors
 @version 0.0.3
 @desc Shim that implements __defineGetter__, __defineSetter__, __lookupGetter__, and __lookupSetter__ in browsers that have ECMAScript 3.1 accessor support but not the legacy methods
 @license http://www.gnu.org/licenses/lgpl.html
 @author Elijah Grey - eligrey.com
 */
(function (methods, o, f) {
    function extendMethod(reqMethod, method, fun) {
        if (reqMethod in o && !(method in {})) o[f][method] = Element[f][method] = Window[f][method] = HTMLDocument[f][method] = fun;
    };
    extendMethod(methods[0], methods[2], function (prop, fun) {
        o[methods[0]](this, prop, { get: fun });
    });
    extendMethod(methods[0], methods[3], function (prop, fun) {
        o[methods[0]](this, prop, { set: fun });
    });
    extendMethod(methods[1], methods[4], function (prop) {
        return o[methods[1]](this, prop).get
            || o[methods[1]](this.constructor.prototype, prop).get;
    });
    extendMethod(methods[1], methods[5], function (prop) {
        return o[methods[1]](this, prop).set
            || o[methods[1]](this.constructor.prototype, prop).set;
    });
})(["defineProperty", "getOwnPropertyDescriptor","__defineGetter__","__defineSetter__","__lookupGetter__","__lookupSetter__"], Object, "prototype");