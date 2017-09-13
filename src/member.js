// 会员 mock数据
var app = require('./common/server.js');

const apiUrl = {
    queryFans: '/mandab/biz/member/fans/search',
    fansDetail: '/mandab/biz/member/fans/info',
    consume: '/mandab/biz/member/fans/consume',
    searchCard: '/mandab/biz/member/cards/search',
    deleteCard: '/mandab/biz/member/fans/delete',
    upload: '/mandab/biz/member/fans/upload',
    addFans: '/mandab/biz/member/fans/add',
    updateFans: '/mandab/biz/member/fans/update'
};

app.post(apiUrl.queryFans, (req, res) => {
    res.send({
        "status": 0,
        "message": "",
        "data": {
            "pageNo": 1,
            "pageSize": 20,
            "total": 30,
            "fans": [{
                "memberId": 22,
                "name": "ddd",
                "phone": 13333333333,
                "source": 1,
                "lastestConsumeTime": 1502958210209,
                "consumeCount": 30,
                "consumeMoneySum": 3000,
                "cardId": 3,
                "cardName": "3333",
                "birthday": 1502958210209
            }]
        }
    })
});

app.get(apiUrl.fansDetail, (req, res) => {
    res.send({
        "status": 0,
        "message": "",
        "data": {
            "memberId": 22,
            "name": "ddd",
            "phone": 13333333333,
            "source": 1,
            "sex": 2,
            "gmtTime": 1502958210209,
            "consumeCount": 30,
            "consumeMoneySum": 3000,
            "cardId": 10,
            cityId: 10,
            "cardName": "3333",
            "birthday": 1502958210209,
            "hasDefaultCard": 0
        }
    })
});

app.get(apiUrl.consume, (req, res) => {
    let data = [];
    for (let i = 0; i < 20; i++) {
        data.push({
            "id": 2,
            "groupId": 3,
            "memberId": 22,
            "userId": 4444,
            "orderId": 333333,
            "partnerId": 938762,
            "poiId": 342345,
            "poiName": "ceshijiudian",
            "consumeMoney": 3444,
            "orderType": 1,
            "orderSource": 1,
            "consumeTime": 1502958210209
        })
    }
    res.send({
        "status": 0,
        "message": "",
        "data": {
            "pageNo": 1,
            "pageSize": 10,
            "total": 0,
            "pageMemberConsumeHisResult": []
        }
    })
});
app.get(apiUrl.searchCard, (req, res) => {
    let cards = [];
    for (let i = 0; i < 20; i++) {
        cards.push({
            id: i,
            cardId: i,
            cardName: '卡' + i,
            cardStatus: 2
        })
    }
    res.send({
        status: 0,
        message: 'dddd',
        data: {
            cards: cards
        }
    })
});

app.post(apiUrl.deleteCard, (req, res) => {
    res.send({
        "status": 0,
        "message": ""
    })
});

app.post(apiUrl.upload, (req, res) => {
    res.send({
        "status": 0,
        "message": "",
        "data": {
            failedList: []
        }
    })
});

app.post(apiUrl.addFans, (req, res) => {
    res.send({
        "status": 0,
        "message": ""
    })
});

app.post(apiUrl.updateFans, (req, res) => {
    res.send({
        "status": 0,
        "message": ""
    })
});