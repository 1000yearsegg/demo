/*
 * @Author: liuxingqiao 
 * @Date: 2021-01-18 17:27:51 
 * @Last Modified by:   liuxingqiao 
 * @Last Modified time: 2021-01-18 17:27:51 
 */
/**
 * 响应式rem布局
 */
(function(doc, win) {

    var docEl = doc.documentElement, //浏览器窗口宽度 

        docWidth = 1920, //设计图文档宽度
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {

            var clientWidth = docEl.clientWidth;

            if (!clientWidth) return;

            if (clientWidth >= docWidth) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / docWidth) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);

})(document, window);
