package fr.uge.vm.rhino;

import org.openjdk.jmh.annotations.Benchmark;

import java.util.Random;

public class RhinoBenchMark {

    private static final int[] INT_ARRAY = new Random(0)
            .ints(1_000_000, 0, 100).toArray();
    private static final I[] OBJ_ARRAY = new Random(0)
            .ints(1_000_000, 0, 100)
            .mapToObj(i -> i < 50? new I.A(i): new I.B(i)).toArray(I[]::new);

    @Benchmark
    public int sum_int(int[] array) {
        var sum = 0;
        for (int j : array) {
            sum += j;
        }
        return sum;
    }

    @Benchmark
    public int sum_int(I[] array) {
        var sum = 0;
        for (I value : array) {
            sum += value.value();
        }
        return sum;
    }
}
