export default class TimeToString {
    time;
    constructor(time) {
        this.time = new Date(time * 1000);
    }

    ISO() {
        return this.time.toISOString();
    }

    loacl() {
        let y = this.time.getFullYear();
        let m = this.time.getMonth() + 1;
        let d = this.time.getDate();
        return `${y}-${m}-${d}`
    }

    archive() {
        let m = this.time.getMonth() + 1;
        let d = this.time.getDate();
        return `${m}-${d}`
    }
}