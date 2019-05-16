/**
 * Composition of functions. Given functions:
 *      f_1 :: t_1 -> t_2
 *      f_2 :: t_2 -> t_3
 *      ...
 *      f_n :: t_n -> t_(n + 1)
 * Then their composition is (f_n o ... o f_1)(x) = f_n(...(f_1(x))...).
 *
 * Note that this requires each function to have exactly one parameter and
 * return value, and their types need to be compatible.
 */
const compose = (...functions) => {
    return x => functions.reduceRight((v, fn) => fn(v), x);
};
