var respbody = $response.body;

let obj = JSON.parse(respbody);

//message = obj.data.force_update;

obj.data.force_update = false;

obj.data.show_frequency = '1';
// $notify('title', 'subTitle', message);

// console.log('d');

$done({body: JSON.stringify(obj)});
