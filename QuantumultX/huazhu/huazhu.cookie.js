/*

华住酒店 App 自动签到，适用于 QX

hostname = newactivity.huazhu.com

^https\:\/\/newactivity\.huazhu\.com\/v1\/pointStore\/signIn url script-request-header https://raw.githubusercontent.com/bin64/Scripts/main/QuantumultX/huazhu/huazhu.cookie.js

*/



const cookieName = '华住 App cookie'
const cookieKey = 'cookie_huazhu'
const fpKey = 'fp_huazhu'
const cookieVal = $request.headers['Cookie']
const bodyVal = $request.headers['fp']

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

if (bodyVal){
    $notify(`${cookieName}`, '获取 body: 成功', '')
    console.log(`[${cookieName}] 获取 body: 成功, body: ${bodyVal}`)
    if ($prefs.setValueForKey(bodyVal, fpKey)) {
        $notify(`${cookieName}`, '写入 body: 成功', '')
        console.log(`[${cookieName}] 写入 body 成功: ${bodyVal}`)
    }
}else {
    $notify(`${cookieName}`, '已抓取到请求，未获取到 fp', '')
    console.log(`[${cookieName}] 已抓取到请求，未获取到 fp`)
}

$done()
