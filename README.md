# bindingutilWeb
Binding Util provides One-way and Two-way binding with Just single statement.

## Features 
Provides One-way and Two-way Binding different ways as follows :

1. HTML Element to Html Element
2. HTML Element to JavaScript Object
3. JavaScript Object to JavaScript Object
4. Support  chain binding
    
    Input Element binds to->Model Object  binds to -> Label Element
    
5. Support custom and property binding and event to trigger binding event. 
6. Very useful for Model to view binding.
7. Support addBinding and RemoveBinding
8. Support Eventbased binding trigger easy to cleanup
9. Prevent Memory Leak
10. Can be use with all popular javascript frameworks.
11. Provides more control for binding javascript object and HTML Elements

## Dependency 
CreateJS, Jquery

## Syntax 
Add Binding : 
```
plainjs.BindingUtil.getInstance().addBinding(source,sourceProperty,sourceEvent,target,targetProperty,isTwoWayBinding);
```

Remove Binding :

```
plainjs.BindingUtil.getInstance().removeBinding(source,sourceProperty);
```

## Usage ( check testbindingutil.js)
```javascript

// Custom model with property change event
var mymodel = function(){
    this.value = 10;

    this.setValue = function (val){
        this.value = val;
        this.dispatchEvent("change",this);
    }

    this.getValue  = function(){
        return this.value;
    }


};

createjs.EventDispatcher.initialize(mymodel.prototype);
var myCustomModel = new mymodel();



function bindInputTextBox(){
    var srcele = document.getElementById("inputtxt_1");
    var destele = document.getElementById("lbl_1");
    destele.value = myCustomModel.getValue();
    plainjs.BindingUtil.getInstance().addBinding(srcele,"value","change",myCustomModel,"setValue",false);
    plainjs.BindingUtil.getInstance().addBinding(myCustomModel,"getValue","change",destele,"value",false);
}

// Remove Binding example
function removeBindInputTextBox(){
    var srcele = document.getElementById("inputtxt_1");
    plainjs.BindingUtil.getInstance().removeBinding(srcele,"value");
}

// Two-way add binding example
function bindTwowayInputTextBox(){
    var srcele = document.getElementById("inputtxt_11");
    var destele = document.getElementById("lbl_11");
    plainjs.BindingUtil.getInstance().addBinding(srcele,"value","change",destele,"value",true);
}

// Remove Two-way binding example
// Make sure remove binding from source and target element
function removeBindTwowayInputTextBox(){
    var srcele = document.getElementById("inputtxt_11");
    var destele = document.getElementById("lbl_11");
    plainjs.BindingUtil.getInstance().removeBinding(srcele,"value");
    plainjs.BindingUtil.getInstance().removeBinding(destele,"value");
}

// AddBinding example for passwordTextInput
function bindPasswordTextBox(){
    var srcele = document.getElementById("pwd_2");
    var destele = document.getElementById("lbl_2");
    plainjs.BindingUtil.getInstance().addBinding(srcele,"value","change",destele,"value",false);
}

// AddBinding example for checkbox
function bindCheckBoxTextBox(){
    var srcele = document.getElementById("chk_3");
    var destele = document.getElementById("lbl_3");
    plainjs.BindingUtil.getInstance().addBinding(srcele,"checked","change",destele,"value",false);
}

// AddBinding example for dropdown 
function bindSelectionBox(){
    var srcele = document.getElementById("mySelect");
    var destele = document.getElementById("lbl_4");
    plainjs.BindingUtil.getInstance().addBinding(srcele,"value","change",destele,"value",false);
}



