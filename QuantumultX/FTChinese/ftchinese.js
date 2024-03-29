$done({
    body: JSON.stringify({
        environment: "Production",
        receipt: {
            in_app: [{
                quantity: "1",
                product_id: "com.ft.ftchinese.mobile.subscription.vip",
                expires_date: "2099-04-02 22:22:22 Etc/GMT",
                expires_date_ms: "4078779955000",
                expires_date_pst: "2099-04-02 22:22:22 America/Los_Angeles",
                in_app_ownership_type: "PURCHASED"
            }]
        },
        latest_receipt_info: [{
            quantity: "1",
            product_id: "com.ft.ftchinese.mobile.subscription.vip",
            expires_date: "2099-04-02 22:22:22 Etc/GMT",
            expires_date_ms: "4078779955000",
            expires_date_pst: "2099-04-02 22:22:22 America/Los_Angeles",
            in_app_ownership_type: "PURCHASED"
        }],
        latest_receipt: "NA",
        pending_renewal_info: [{
            auto_renew_product_id: "com.ft.ftchinese.mobile.subscription.vip",
            product_id: "com.ft.ftchinese.mobile.subscription.vip",
            auto_renew_status: "0"
        }],
        status: 0
    })
});
