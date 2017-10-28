var urlList = [
	{"root_url":"",url:/shop.ibicn.com\/[0-9]*\/supply\/d[0-9]*.html/g},// 国联资源网
	{"root_url":"",url:/www.cntrades.com\/tradeinfo\/chanpin_detail_[0-9]*.html/g},// 中国贸易网
	{"root_url":"",url:/[a-z0-9]*.cn.makepolo.com\/product\/[0-9]*.html/g},//马可波罗
	{"root_url":"",url:/www.eastsoo.com\/buy\/a-[0-9]*.html/g},//东方供应商
	{"root_url":"",url:/www.tpy888.cn\/sell\/show-[0-9]*.html/g},//太平洋安防网
	{"root_url":"",url:/www.cn5135.com\/OfferDetail-[0-9]*.html/g},//无忧商务网
	{"root_url":"",url:/cn.made-in-china.com\/gongying\/[a-z0-9]*-[A-Za-z0-9]*.html/g},//中国制造网
	{"root_url":"www.bestb2b.com",url:/\/business_[0-9]*.htm/g},//志趣网
	{"root_url":"",url:/www.hooshong.com\/[a-z0-9]*\/offer\/[0-9]*.html/g},//机械在线
	{"root_url":"",url:/www.qjy168.com\/shop\/p[0-9]*/g},//勤加缘网
	{"root_url":"",url:/www.258.com\/product\/[0-9]*.html/g},//258
	{"root_url":"",url:/www.jx188.com\/sell\/[0-9]*.html/g},//中国机械设备网
	{"root_url":"",url:/www.atobo.com.cn\/Products\/Detailed\/[0-9]*.html/g},//阿土伯
	{"root_url":"",url:/www.maijx.com\/sell\/business_info-[0-9]*.html/g},//买卖机械网
	{"root_url":"",url:/product.gongchang.com\/c[0-9]*\/CNC[0-9]*.html/g},//世界工厂
	{"root_url":"",url:/www.globalbuy.cc\/gongyingxinxi\/[0-9]*.html/g},//全球采购网
	{"root_url":"www.jiancai365.cn",url:/\/cp_[0-9]*.htm/g},//中国建材采购网
	{"root_url":"",url:/www.yiwangtui.com\/sell\/show-[0-9]*.html/g},//一网推
	{"root_url":"",url:/www.b2bwj.com\/sell\/show-[0-9]*.html/g},//一网推
	{"root_url":"",url:/www.qiyegongqiu.net\/sell\/show-[0-9]*.html/g},//中国企业供求网
	{"root_url":"",url:/www.qygq.com\/sell\/[0-9]*\/[0-9]*\/[0-9]*.html/g},//企业供求
	{"root_url":"",url:/www.niczy.com\/sell\/show-[0-9]*.html/g},//商导在线
	{"root_url":"",url:/b2b.hc360.com\/supplyself\/[0-9]*.html/g},//慧聪网
	{"root_url":"",url:/shop.ebdoor.com\/Shops\/[0-9]*\/Products\/[0-9]*.aspx/g}//一比多
];

function unique(arr) {
    var result = [], hash = {};
    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
        if (!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}

$(function(){
	var abc = $("body").html();
	console.log("==============抓取页面开始================");
	console.log(abc);
	console.log("==============抓取页面结束================");
	for(x in urlList){
		var arr = abc.match(urlList[x].url);
		if(arr && arr.length>0){
			arr = unique(arr);
			console.log("已匹配:"+urlList[x].url);
			for(w in arr){
				console.log("弹出窗口:"+urlList[x].root_url + arr[w]);
				window.open("https://www.baidu.com/s?wd=http://" + urlList[x].root_url + arr[w]);
			}
		}else{
			console.log("["+x+"]未匹配："+urlList[x]);
		}
	}
});



