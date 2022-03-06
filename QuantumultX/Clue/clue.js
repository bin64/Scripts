var respbody = $response.body;
let obj = JSON.parse(respbody);

obj.subscriptions = [{expiresAt:"2222-02-22T22:22:22",state:"ACTIVE",productGroupId:"pro",features:["forecast","cycleReview","content","recurrentSymptoms","scienceBundles","predictedCycles","pregnancy","dataVisualization","cbc"]}];

$done({body: JSON.stringify(obj)});
