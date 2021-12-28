var respbody = $response.body;
let obj = JSON.parse(respbody);

//message = obj.data.force_update;

obj.data.force_update = false;
// $notify('title', 'subTitle', message);
// console.log(respbody);

$done({body: JSON.stringify(obj)});
