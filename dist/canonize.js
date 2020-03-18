'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = canonize;
function canonize(url) {
    var re = new RegExp('(@)?([h,H]ttps?:)?(\/\/)?((telegram|vk|vkontakte)[^\/]*\/)?([A-z]*)', 'i');
    var username = url.match(re);
    return username;
}