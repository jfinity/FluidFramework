/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

/**
 * Returns a pseudo-random string suitable for avoiding 'id' collisions between DOM elements.
 */
export function randomId() {
    // tslint:disable-next-line:insecure-random
    return Math.random().toString(36).slice(2);
}