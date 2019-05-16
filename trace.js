/**
 * Incision into composition to check intermediate values.
 */
const trace = logger => description => value => {
    logger.log(`${description}: ${value}`);
    return value;
};

const consoleTrace = trace(console);

export { trace, consoleTrace };
