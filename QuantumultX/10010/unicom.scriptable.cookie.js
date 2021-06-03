/*

获取方式：打开  中国联通 app 【官方版】-> 首页的流量查询获取 Cookie

===================
【 仅适用于 QX 】 :
===================

[rewrite_local]

hostname = m.client.10010.com

^https:/\/\m\.client\.10010\.com\/mobileserviceimportant\/home\/queryUserInfoSeven\?version=.*  url script-request-header https://raw.githubusercontent.com/bin64/Scripts/main/QuantumultX/10010/unicom.scriptable.cookie.js

*/
const cookieName = '中国联通 cookie for Scriptable'
const cookieKey = '@YaYa_10010.cookie'

const cookieVal = $request.headers['Cookie']

if (cookieVal){
    $notify(`${cookieName}`, '获取Cookie: 成功', '')
    console.log(`[${cookieName}] 获取Cookie: 成功, cookie: ${cookieVal}`)
    if ($prefs.setValueForKey(cookieVal, cookieKey)) {
        $notify(`${cookieName}`, '写入 Cookie: 成功', '')
        console.log(`[${cookieName}] 写入 cookie 成功: ${cookieVal}`)
    }
}else {
    $notify(`${cookieName}`, '已抓取到请求，未获取到 cookie', '')
    console.log(`[${cookieName}] 已抓取到请求，未获取到 cookie`)
}

$done()
