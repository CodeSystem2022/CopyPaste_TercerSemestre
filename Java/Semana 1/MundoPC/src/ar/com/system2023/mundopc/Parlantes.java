package ar.com.system2023.mundopc;


public class Parlantes extends DispositivoEntrada{
       private final int idParlante;
    private static int contadorParlantes;
    
    public Parlantes(String tipoEntrada, String marca){
        super(tipoEntrada, marca);
        this.idParlante = ++Parlantes.contadorParlantes;
        
    }

    @Override
    public String toString() {
        return "Parlantes{" + "idParlante=" + idParlante + '}';
    }

    
}
