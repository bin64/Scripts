/***********************************
hostname = ios-api-2.duolingo.cn




***********************************/

var respbody = $response.body;
let obj = JSON.parse(respbody);
var info_decode = JSON.stringify(obj.responses[0].body).replace(/\\/gm, '').slice(1, -1);
let info_modify = JSON.parse(info_decode);
info_modify.trackingProperties.has_item_streak_repair = true;
info_modify.trackingProperties.has_item_premium_subscription = true;
info_modify.trackingProperties.premium_billing_retry_period = false;
info_modify.trackingProperties.premium_period_length = 1;
info_modify.trackingProperties.premium_free_trial_period = true;
info_modify.trackingProperties.premium_is_winback = false;
info_modify.trackingProperties.premium_is_family_plan = false;
info_modify.trackingProperties.premium_receipt_source = 'apple';
info_modify.trackingProperties.premium_product_id = 'com.duolingo.DuolingoMobile.subscription.Premium.OneMonth.2021Q4FTM7D14D.Trial7.13';
info_modify.trackingProperties.premium_expected_expiration = 7960347962000;
info_modify.trackingProperties.premium_is_renewing = false;
info_modify.shopItems = [{purchaseDate:1647082573,subscriptionInfo:{renewing:false,isInBillingRetryPeriod:false,renewer:"APPLE",isFreeTrialPeriod:true,tier:"one_month",productId:"com.duolingo.DuolingoMobile.subscription.Premium.OneMonth.2021Q4FTM7D14D.Trial7.13",expectedExpiration:7960347962},purchasePrice:1299,id:"premium_subscription"},{purchaseDate:1647082908,id:"streak_repair",purchasePrice:0}];
    info_modify.plusStatus = "PLUS";
    info_modify.subscriptionConfigs = [{vendorPurchaseId:"260001098115570",isInBillingRetryPeriod:false,pauseStart:7960347962,pauseEnd:null,productId:"com.duolingo.DuolingoMobile.subscription.Premium.OneMonth.2021Q4FTM7D14D.Trial7.13"}];
var info_modified = JSON.stringify(info_modify).replace(/\\"/g, '\\"')
obj.responses[0].body = info_modified;
$done({body: JSON.stringify(obj)});
