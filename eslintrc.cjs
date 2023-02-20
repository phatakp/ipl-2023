import path from "path";

module.exports = {
    settings: {
        "import/resolver": {
            node: {
                paths: [path.resolve(__dirname)],
            },
        },
    },
};
