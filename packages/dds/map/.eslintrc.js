/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = {
    "extends": [
        "@fluidframework/eslint-config-fluid/eslint7"
    ],
    "parserOptions": {
        "project": [ "./tsconfig.json", "./test/tsconfig.json" ]
    },
    "rules": {
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "no-null/no-null": "off"
    }
}
