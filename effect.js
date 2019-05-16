/**
 * An `Effect` functor isolates side-effects to yield pure functions, ~ Monad.
 */
class Effect {
    constructor(f) {
        this._f = f;
    }

    /**
     * Takes an regular function and eventually applies it to the
     * delayed value, without triggering the side-effect.
     */
    map(g) {
        return new Effect(x => g(this._f(x)));
    }

    /**
     * Triggers the side-effect.
     */
    run(x) {
        return this._f(x);
    }

    /**
     * Un-nesting `Effect`s.
     */
    join(x) {
        return this._f(x);
    }

    /**
     * Alias for `join` for descriptiveness.
     */
    flatten(x) {
        return this.join(x);
    }

    /**
     * Chaining `Effect`s.
     */
    chain(g) {
        return new Effect(this._f).map(g).join();
    }

    /**
     * Alias for `chain` for descriptiveness.
     */
    flatMap(g) {
        return this.chain(g);
    }

    /**
     * Making an `Effect` from a value.
     */
    of(v) {
        return new Effect(() => v);
    }

    /**
     * Should be named `apply` but that is defined already on Function'
     * prototype.
     */
    use(eff) {
        return eff.map(g => g(this._f()));
    }
}

export { Effect };
