export default () => {
    window.onerror = (msg, url, line) => {
        //todo  錯誤彈窗
        console.error(`${msg} \n ${url} \n ${line}`);
        return false;
    };
};