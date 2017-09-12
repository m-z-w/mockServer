
var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const apiUrl = {
    queryFans: '/mandab/biz/member/fans/search',
    fansDetail: '/mandab/biz/member/fans/info',
    consume: '/mandab/biz/member/fans/consume',
    searchCard: '/mandab/biz/member/cards/search',
    deleteCard: '/mandab/biz/member/fans/delete',
    upload: '/mandab/biz/member/fans/upload',
    addFans: '/mandab/biz/member/fans/add',
    updateFans: '/mandab/biz/member/fans/update',
    getRights: '/api/v1/ebooking/rating/getHosRights'
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
    for(let i = 0; i < 20; i++) {
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
    for(let i = 0; i < 20; i++) {
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

app.get(apiUrl.getRights, (req, res) => {
    res.send({
        "status": 0,
        "message": "",
        "data": {
            poiId: 3333,
            dataMonth: 1505201015345,
            startDate: 1505201015345,
            endDate: 1505201015345,
            rightsIds: [1,2],
            rightsTemplateModels: [{
                rightsId: 1,
                rightsName: '彩冠权益',
                imageUrl: '',
                pcBrightIconUrl: 'http://p1.meituan.net/codeman/0ae7390ea5e442a17d30b8492ee8318e16957.png',
                pcDarkIconUrl: 'http://p0.meituan.net/codeman/7a49e018f7a6acce4e71f6686f2702a612007.png',
                appBrightIconUrl: '',
                appDarkIconUrl: '',
                minScore: 0.4,
                rightsStandard: '权益内容：优选酒店活动，位置在酒店顶部banner、底部特价酒店专区。上线时间：周期延长为1个月，每月15日上线，次月15日 线。获取规则：HOS指数≥3分。'
            }, {
                rightsId: 2,
                rightsName: '金冠权益',
                imageUrl: '',
                pcBrightIconUrl: 'http://p0.meituan.net/codeman/643a4795776675d329258970814ad25815832.png',
                pcDarkIconUrl: 'http://p0.meituan.net/codeman/7a49e018f7a6acce4e71f6686f2702a612007.png',
                appBrightIconUrl: '',
                appDarkIconUrl: '',
                minScore: 0.4,
                rightsStandard: '权益内容：优选酒店活动，位置在酒店顶部banner、底部特价酒店专区。上线时间：周期延长为1个月，每月15日上线，次月15日 线。获取规则：HOS指数≥3分。'
            }, {
                rightsId: 3,
                rightsName: '银冠权益',
                imageUrl: '',
                pcBrightIconUrl: 'http://p0.meituan.net/codeman/1cfc4b160fca0e2838686533c34fa1b217340.png',
                pcDarkIconUrl: 'http://p0.meituan.net/codeman/7a49e018f7a6acce4e71f6686f2702a612007.png',
                appBrightIconUrl: '',
                appDarkIconUrl: '',
                minScore: 0.4,
                rightsStandard: '权益内容：优选酒店活动，位置在酒店顶部banner、底部特价酒店专区。上线时间：周期延长为1个月，每月15日上线，次月15日 线。获取规则：HOS指数≥3分。'
            }, {
                rightsId: 4,
                rightsName: '广告权益',
                imageUrl: '',
                pcBrightIconUrl: 'http://p0.meituan.net/codeman/cb16abf36d76fc2c12a14e31045a349322363.png',
                pcDarkIconUrl: 'http://p0.meituan.net/codeman/7a49e018f7a6acce4e71f6686f2702a612007.png',
                appBrightIconUrl: '',
                appDarkIconUrl: '',
                minScore: 0.4,
                rightsStandard: '权益内容：优选酒店活动，位置在酒店顶部banner、底部特价酒店专区。上线时间：周期延长为1个月，每月15日上线，次月15日 线。获取规则：HOS指数≥3分。'
            }]
        }
    })
})

var server = app.listen(7777, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
