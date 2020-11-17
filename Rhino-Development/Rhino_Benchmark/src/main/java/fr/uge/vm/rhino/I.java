package fr.uge.vm.rhino;

sealed interface I {
    int value();

    record A(int value) implements I {}
    record B(int value) implements I {}
}
