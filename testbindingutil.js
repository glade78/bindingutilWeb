/*
 * Copyright (c) 2016 Gaurang Lade
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */



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

function removeBindInputTextBox(){
    var srcele = document.getElementById("inputtxt_1");
    plainjs.BindingUtil.getInstance().removeBinding(srcele,"value");
}


function bindTwowayInputTextBox(){
    var srcele = document.getElementById("inputtxt_11");
    var destele = document.getElementById("lbl_11");
    plainjs.BindingUtil.getInstance().addBinding(srcele,"value","change",destele,"value",true);
}

function removeBindTwowayInputTextBox(){
    var srcele = document.getElementById("inputtxt_11");
    var destele = document.getElementById("lbl_11");
    plainjs.BindingUtil.getInstance().removeBinding(srcele,"value");
    plainjs.BindingUtil.getInstance().removeBinding(destele,"value");
}

function bindPasswordTextBox(){
    var srcele = document.getElementById("pwd_2");
    var destele = document.getElementById("lbl_2");
    plainjs.BindingUtil.getInstance().addBinding(srcele,"value","change",destele,"value",false);
}

function bindCheckBoxTextBox(){
    var srcele = document.getElementById("chk_3");
    var destele = document.getElementById("lbl_3");
    plainjs.BindingUtil.getInstance().addBinding(srcele,"checked","change",destele,"value",false);
}


function bindSelectionBox(){
    var srcele = document.getElementById("mySelect");
    var destele = document.getElementById("lbl_4");
    plainjs.BindingUtil.getInstance().addBinding(srcele,"value","change",destele,"value",false);
}








