export default function canonize(url) {
    const re = new RegExp('(@)?([h,H]ttps?:)?(\/\/)?((telegram|vk|vkontakte)[^\/]*\/)?([A-z]*)', 'i');
    const username = url.match(re)[6];
    return '@' + username
}