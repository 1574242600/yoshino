class Cache {
    static set(key, value) {
        window.localStorage.setItem(key, value);
    }

    static get(key) {
        let value;

        try {
            value = window.localStorage.getItem(key);
            return JSON.parse(value);
        } catch (e) {
            console.warn('localStorage Exception: \n' + e);
            return value;
        }
    }

    static clear() {
        window.localStorage.clear();
    }

}

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        let x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

Cache.available = storageAvailable('localStorage');

export default Cache;