
package paquete2;


public class Clase4 {
    private String atributoPrivate = "atributo Privado";
    
    private Clase4(){
        System.out.println("Constructor privado");
    }
    
    //creamos un constructor public para poder crear objetos
    public Clase4(String argumento){ //Aqui se puede llamar al constructor vacio
        this();
        System.out.println("Constructor publico");
    }
    
    //metodo private
    private void metodoPrivado(){
        System.out.println("Metodo privado");
    }

    public String getAtributoPrivate() {
        return atributoPrivate;
    }

    public void setAtributoPrivate(String atributoPrivate) {
        this.atributoPrivate = atributoPrivate;
    }
    
}
//Clase4 clase4 = new Clase4("Publico"); esto va en TestDefault (importar la clase)
//System.out.println(clase4.getAtributoPrivate());
//clase4.setAtributoPrivate("Cambio");
//System.out.println("clase4 = " + clase4.getAtributoPrivate());
