public class IonEngineControl {

    public static void startEngine() {
        System.out.println("Motor de íons iniciado.");
    }

    public static void setThrust(int value) {
        System.out.println("Empuxo definido para: " + value + "N");
    }

    public static void main(String[] args) {
        startEngine();
        setThrust(10); // exemplo de empuxo
    }
}
