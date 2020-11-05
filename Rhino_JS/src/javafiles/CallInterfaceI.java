package javafiles;

public class CallInterfaceI {
    public static void callMyInterface(I myInterface){
        System.out.println(new I.A(1));
    }
}