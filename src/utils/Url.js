const INTERVAL_TIME = 100;

export class UrlController {

    constructor() {
        this._changeListeners = [];
        this._interval = null;
        this._url = window.location.href;
    }

    onChange(cb) {
        this._changeListeners.push(cb);
        if (this._interval === null) {
            this._createInterval();
        }
    }

    removeEventListener(cb) {
        this._changeListeners = this._changeListeners.filter(item=>item !== cb);
        if(this._changeListeners.length === 0) {
            this._clearInterval();
        }
    }

    _intervalTick() {
        const currentUrl = window.location.href;
        if (currentUrl !== this.url) {
            this._broadcast(this.url, currentUrl);
            this.url = currentUrl;
        }

    }

    _broadcast(oldUrl, newUrl) {
        this._changeListeners.forEach(cb => cb(oldUrl, newUrl));
    }

    _createInterval() {
        this.interval = setInterval(() => this._intervalTick(), INTERVAL_TIME)
    }

    _clearInterval() {
        clearInterval(this.interval)
        this.interval = null
    }

}