import _ from 'lodash'
import print from './print'

function component() {
    var div = document.createElement('div')
    div.innerHTML = '分分 第三方'
    // div.innerHTML = _.join(['hello', 'lalal'])
    div.onclick = print
    div.className = 'hello'
    return div
}
 let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
 document.body.appendChild(element);

