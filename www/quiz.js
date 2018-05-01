function Stream(text) {
  this.property = text;
  
    function print(){
        document.getElementById("Text").innerHTML = "this.property";
    }
};

Stream("fadwad").print();