var respbody = $response.body;

let obj = JSON.parse(respbody);

//message = obj.data.force_update;

obj.data.force_update = false;
// $notify('title', 'subTitle', message);

console.log('d');

$done({body: JSON.stringify(obj)});
