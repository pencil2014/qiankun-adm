module.exports = (params) => {
    return {
        "code": 0,
        "data": {
            "allColumns": [],
            "configColumns": [],
            "currPage": 1,
            "list": [
                {
                    "applyNo": "2020101000000003",
                    "hasInvoice": "no",
                    "delayInvoice": "no",
                    "payInfo": {
                        "applyPayAmt": 20000.00,
                        "currency": "CNY",
                        "payAccountNo": "3728648324",
                        "payBankAccountId": 0,
                        "payBankBranch": "",
                        "payBankCode": "BOC",
                        "payBankName": "建设银行",
                        "payCompCode": "",
                        "payCompName": "",
                        "payInfoId": 123120,
                        "payWay": "telegraphic_transfers",
                        "payWayDesc": "付款方式描述",
                        "recvAccountName": "北京北京",
                        "recvAccountNo": "600023232",
                        "recvBankAccountId": 0,
                        "recvBankBranch": "",
                        "recvBankCode": "ABC",
                        "recvBankName": "农业银行",
                        "recvCorpCode": "GYS232432",
                        "recvCorpName": "供应商名称"
                    },
                    "payOrderId": 1201392,
                    "prepayAccountId": 123,
                    "prepayApplyTimeStr":"2020-10-10 10:12:23",
                    "remark": "",
                    "settleCompCode": "000001",
                    "settleCompName": "深圳分公司",
                    "state": "VAILD",
                    "confirmStatus":"approved",
                    "confirmStatusDesc":"审批通过",
                    "createdBy": 2103213,
                    "createdName": "",
                    "updatedBy": 2103213,
                    "updatedName": ""
                },
                {
                    "applyNo": "2020101000000001",
                    "hasInvoice": "no",
                    "delayInvoice": "no",
                    "payInfo": {
                        "applyPayAmt": 20000.00,
                        "currency": "CNY",
                        "payAccountNo": "3728648324",
                        "payBankAccountId": 0,
                        "payBankBranch": "",
                        "payBankCode": "BOC",
                        "payBankName": "建设银行",
                        "payCompCode": "",
                        "payCompName": "",
                        "payInfoId": 12312,
                        "payWay": "prepay",
                        "payWayDesc": "付款方式描述",
                        "recvAccountName": "北京北京",
                        "recvAccountNo": "600023232",
                        "recvBankAccountId": 1,
                        "recvBankBranch": "",
                        "recvBankCode": "ABC",
                        "recvBankName": "农业银行",
                        "recvCorpCode": "GYS232432",
                        "recvCorpName": "供应商名称"
                    },
                    "payOrderId": 1201392,
                    "prepayAccountId": 12,
                    "prepayApplyTimeStr":"2020-10-10 10:12:23",
                    "remark": "",
                    "settleCompCode": "000001",
                    "settleCompName": "深圳分公司",
                    "state": "VAILD",
                    "confirmStatus":"refuse",
                    "confirmStatusDesc":"审批通过",
                    "createdBy": 2103213,
                    "createdName": "",
                    "updatedBy": 2103213,
                    "updatedName": ""
                }
            ],
            "pageSize": 10,
            "totalCount": 1,
            "totalPage": 1
        },
        "msg": "success"
    }
}