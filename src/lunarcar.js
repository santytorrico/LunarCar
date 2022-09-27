class Car{
    constructor(){
        this.arcar=this.make2Darray(10,10)
        this.arcar[0][0]=1
        this.d="N"
    }
    execute(cadena){
        let resultado="";
            if (cadena.trim() == "")
            {
                resultado += this.findPosition(this.arcar)+ this.d;
            }
            if(cadena=="A"){
                resultado+=this.goForward(this.arcar)+ this.d;
            }
        return resultado;
    }
    findPosition(arr){
        let result = [ -1, -1 ];
        for (var i=0; i<arr.length; i++){
            for (var j=0; j<arr.length; j++){
                if(arr[i][j]==1){
                    result[0] = i;
                    result[1] = j;
                    return result;
                }
            }
        }
        return result;   
    }
    make2Darray(rows,cols){
        var arr = new Array(rows);
        for (var i=0; i<arr.length; i++){
            arr[i] =new Array(cols);
        }
        return arr;
    }
    goForward(arr){
        let actual=this.findPosition(arr)
       // arr[actual[0]][actual[1]]=1;
        arr[actual[0]][actual[1]+1]=1;
        actual[1]=actual[1]+1;

        return actual;
    }
}

export default Car