export default () => {
    window.onerror = (msg, url, line) => {
        //todo  錯誤彈窗
        return false;
    };
}