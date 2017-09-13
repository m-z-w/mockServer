// hos mock数据
var app = require('./common/server.js');

const apiUrl = {
	getRights: '/api/v1/ebooking/rating/getHosRights'
};

app.get(apiUrl.getRights, (req, res) => {
	res.send({
		"status": 0,
		"message": "",
		"data": {
			poiId: 3333,
			dataMonth: 1505201015345,
			startDate: 1505201015345,
			endDate: 1505201015345,
			rightsIds: [1, 2],
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
});