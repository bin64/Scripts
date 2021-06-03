/*

适用于 Quantumult X - 华住酒店 App 签到

先获取 header，获取方法：https://raw.githubusercontent.com/bin64/Scripts/main/QuantumultX/huazhu/huazhu.cookie.js

*/

const cookieName ='华住酒店 App 签到'
const cookieKey = 'cookie_huazhu'
const fpKey = 'fp_huazhu'

// const cookieKey = 'cookie_httpdev'
// const bodyKey = 'body_httpdev'

let cookieVal = $prefs.valueForKey(cookieKey)
let fpVal = $prefs.valueForKey(fpKey)

 const url = `https://newactivity.huazhu.com/v1/pointStore/signIn`;
// const url = 'https://***.***.***.***/qx/httpdev.php';
 const method = `POST`;
 const headers = {
 'Content-Type' : `application/x-www-form-urlencoded`,
 'Origin' : `https://campaign.huazhu.com`,
 'User-Agent' : `HUAZHU/ios/iPhone13,1/14.3/7.91.92/HUAZHU/ios/iPhone13,1/14.3/7.91.92/HUAZHU/ios/iPhone13,1/14.3/7.91.92/Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148`,
 'Cookie' : cookieVal,
 'fp' : fpVal,
 'Host' : `newactivity.huazhu.com`,
 'Referer' : `https://campaign.huazhu.com/pointsShop/?APP_NeedLoginInfo=True&has_video=true&type=`
 };

 var datetime = new Date()
 const day = datetime.getDate()
 const body = 'day=' + day + '&state=0&channel=APP&' + cookieVal.toLowerCase()

 const myRequest = {
     url: url,
     method: method,
     headers: headers,
     body: body
 };
 
 $task.fetch(myRequest).then(response => {
    //  console.log(response.statusCode + "\n\n" + response.body);
    const result = JSON.parse(response.body);
    let subTitle = ''
    let detail = ''
    if(result.code == 200){
      console.log(result.data.isSign)
      if(result.data.isSign == true){
        title = '华住 App 重复签到'
        subTitle = '已签到'
      }else{
        title = '华住 App 签到成功'
        subTitle = `获得 ${result.data.point} 积分`
      }
    }else{
        title = '华住 App 签到失败'
        subTitle = result.msg
    }
    $notify(title, subTitle, detail)
    console.log(response.body);
     $done();
 }, reason => {
     console.log(reason.error);
     $done();
 });
 
