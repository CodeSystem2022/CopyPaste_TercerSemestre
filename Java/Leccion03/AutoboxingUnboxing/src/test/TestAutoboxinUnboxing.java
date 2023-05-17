
package test;


public class TestAutoboxinUnboxing {
    public static void main(String[] args) {
        // clases envolventes o wrapper
        //Clases envolventes de tipos primitivos:
        //int= la clase envolvente es Integer
        //long= la clase envolvente es Long
        //float= la clase envolver es Float
        //doluble= la clase envolver es Doluble
        //boolean = la clase envolver es Byte
        //char= la clase envolvente es Character
        //short= la clase envolvente es Short
        int enteroPrim = 10; // tipo primitivo
        System.out.println("enteroPrim = " + enteroPrim);
        Integer entero =10;// tipo objetc con la clase Integer
        System.out.println("entero = " + entero.doubleValue()); //autoboxing: convertir el objeto a un tipo primitivo y viceversa
        
        int entero2= entero; // unboxing: ya no es un objeto es un tipo primitivo
        System.out.println("entero2 = " + entero2);
    }
}
