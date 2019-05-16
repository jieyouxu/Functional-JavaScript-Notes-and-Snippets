/**
 * Given:
 *  - An `options` object
 *  - A nullable `key`
 *  - A `defaultOption`
 * Returns the associated value of `options[key]`, or if `options[key]` is
 * falsy or undefined, return the `defaultOption` otherwise.
 */
const optionOrDefault = (defaultOption, options, key) => {
    return options[key] || defaultOption;
};

export { optionOrDefault };
