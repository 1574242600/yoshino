class Cache {
    static available = true;

    static set(key, value) {
        window.localStorage.setItem(key, value)
        
    }

    static get(key) {
        let value = window.localStorage.getItem(key);
        
        try {
            return JSON.parse(value);
        } catch {
            return value;
        }
    }
    
    static clear() {
        window.localStorage.clear();
    }

}


function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
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