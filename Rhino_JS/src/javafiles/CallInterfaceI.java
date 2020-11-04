package javafiles;

public static class CallInterfaceI {
    public static void callMyInterface(I myInterface){
        System.out.println(myInterface.new I.A(1));
    }
}