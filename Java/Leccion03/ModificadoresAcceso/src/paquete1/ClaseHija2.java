
package paquete1;


public class ClaseHija2 extends Clase2{
    public ClaseHija2(){
        super();
        this.atributoDefault = "Modificacion del atributo Default";
        System.out.println("atributoDefault = " + this.atributoDefault);
        this.metodoDefault();
        
    }
}
// ClaseHija2 claseH2 = new ClaseHija2(); esto va en TestDefault abajo de psvm
//claseH2.atributoDefault = "Cambio desde la prueba";
//System.out.println("claseH2 atributo default = " + claseH2);
