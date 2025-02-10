commit 60fca15cac836a74671a8d1b9fedcca006c71d8d
Author: ilhan orhan <ilhan.orhan007@gmail.com>
Date:   Fri Feb 7 10:26:46 2025 +0200

    chore: add ElementInternals shim (#10782)
    
    With the introduce of the ButtonBadge, some users of jsdom complained of test failures because of the code below, caused by missing ElementInternals API in the jsdom env. As it's likely to need this for the SSR topic,  we now provide a shim for `attachInternals` method, returning a shim for the ElementInternals class.
    
    ```ts
    if (needsOverflowVisible) {
            this._internals.states.add("has-overlay-badge"); // fails in jsdom
    } else {
            this._internals.states.delete("has-overlay-badge"); // fails in jsdom
    }
    ```
