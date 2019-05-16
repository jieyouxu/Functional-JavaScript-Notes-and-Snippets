/**
 * Similar to compose, but applies functions in the reverse order.
 * Given functions:
 *      f_1 :: t_1 -> t_2
 *      f_2 :: t_2 -> t_3
 *      ...
 *      f_n :: t_n -> t_(n + 1)
 * Then their composition is (f_1 o ... o f_n)(x) = f_n(...(f_1(x))...).
 */
const pipe = (...functions) => {
    return x => functions.reduce((v, fn) => fn(v), x);
};

export { pipe };
