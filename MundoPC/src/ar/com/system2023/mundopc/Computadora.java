package ar.com.system2023.mundopc;


public class Computadora {
    private final int idComputadora;
    private String nombre;
    private Monitor monitor;
    private Teclado teclado;
    private Raton raton;
    private Parlantes parlantes;
    private static int contadorComputadoras;
    
        //constructor vacio
    private Computadora(){
        this.idComputadora = ++Computadora.contadorComputadoras;
        
    }
    //constructor2
    public Computadora(String nombre, Monitor monitor, Teclado teclado, Raton raton, Parlantes parlantes){
        this();
        this.nombre = nombre;
        this.monitor = monitor;
        this.teclado = teclado;
        this.raton = raton;
        this.parlantes = parlantes;
    }
public int getidComputadora(){
    return idComputadora;
}
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Monitor getMonitor() {
        return monitor;
    }

    public void setMonitor(Monitor monitor) {
        this.monitor = monitor;
    }

    public Teclado getTeclado() {
        return teclado;
    }

    public void setTeclado(Teclado teclado) {
        this.teclado = teclado;
    }

    public Raton getRaton() {
        return raton;
    }

    public void setRaton(Raton raton) {
        this.raton = raton;
    }
    
    public Parlantes getParlantes() {
        return parlantes;
    }

    public void setParlantes(Parlantes parlantes) {
        this.parlantes = parlantes;
    }
    
}
