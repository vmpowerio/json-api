// Generated by LiveScript 1.2.0
(function(){
  var Resource, toString$ = {}.toString;
  Resource = (function(){
    Resource.displayName = 'Resource';
    var prototype = Resource.prototype, constructor = Resource;
    function Resource(type, id, attrs, links, href){
      var ref$, this$ = this instanceof ctor$ ? this : new ctor$;
      this$.links = links;
      this$.href = href;
      ref$ = [type, id, attrs], this$.type = ref$[0], this$.id = ref$[1], this$.attrs = ref$[2];
      return this$;
    } function ctor$(){} ctor$.prototype = prototype;
    prototype.removeAttr = function(attr){
      var ref$, ref1$;
      if (typeof attrs != 'undefined' && attrs !== null) {
        return ref1$ = (ref$ = this._attrs)[attr], delete ref$[attr], ref1$;
      }
    };
    Object.defineProperty(prototype, 'attrs', {
      get: function(){
        return this._attrs;
      },
      set: function(attrs){
        this._validateAttrs(attrs);
        this._attrs = this._coerceAttrs(attrs);
      },
      configurable: true,
      enumerable: true
    });
    Object.defineProperty(prototype, 'type', {
      get: function(){
        return this._type;
      },
      set: function(type){
        this._validateType(type);
        this._type = type;
      },
      configurable: true,
      enumerable: true
    });
    Object.defineProperty(prototype, 'id', {
      get: function(){
        return this._id;
      },
      set: function(id){
        this._id = id != null ? String(id).toString() : null;
      },
      configurable: true,
      enumerable: true
    });
    prototype._coerceAttrs = function(attrs){
      return attrs;
    };
    prototype._validateAttrs = function(attrs){
      if (attrs != null) {
        if (toString$.call(attrs).slice(8, -1) !== 'Object') {
          throw new Error("if present, attrs must be an object");
        }
        return ["id", "type", "href", "links"].forEach(function(it){
          if (attrs[it] != null) {
            throw new Error(it + " is an ivalid attribute name");
          }
        });
      }
    };
    prototype._validateType = function(type){
      if (!type) {
        throw new Error("type is required");
      }
    };
    return Resource;
  }());
  module.exports = Resource;
}).call(this);
