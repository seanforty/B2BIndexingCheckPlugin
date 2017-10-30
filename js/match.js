var urlList = [
	{"root_url":"","tail_url":"","reex":0,"recon":"",url:/shop.ibicn.com\/[0-9]*\/supply\/d[0-9]*.html/g},// 国联资源网
	{"root_url":"","tail_url":"","reex":0,"recon":"",url:/www.cntrades.com\/tradeinfo\/chanpin_detail_[0-9]*.html/g},// 中国贸易网
	{"root_url":"","tail_url":"","reex":0,"recon":"",url:/www.cntrades.com\/b2b\/puzhongdianzikan\/sell\/itemid-[0-9]*.html/g},// 中国贸易网
	{"root_url":"","tail_url":"","reex":0,"recon":"",url:/[a-z0-9]*.cn.makepolo.com\/product\/[0-9]*.html/g},//马可波罗
	{"root_url":"","tail_url":"","reex":0,"recon":"",url:/www.eastsoo.com\/buy\/a-[0-9]*.html/g},//东方供应商
	{"root_url":"","tail_url":"","reex":0,"recon":"",url:/www.tpy888.cn\/sell\/show-[0-9]*.html/g},//太平洋安防网
	{"root_url":"","tail_url":"","reex":0,"recon":"",url:/www.cn5135.com\/OfferDetail-[0-9]*.html/g},//无忧商务网
	{"root_url":"","tail_url":"","reex":0,"recon":"",url:/cn.made-in-china.com\/gongying\/[a-z0-9]*-[A-Za-z0-9]*.html/g},//中国制造网
	{"root_url":"www.bestb2b.com","tail_url":"","reex":0,"recon":"",url:/\/business_[0-9]*.htm/g},//志趣网
	{"root_url":"","tail_url":"","reex":0,"recon":"",url:/www.hooshong.com\/[a-z0-9]*\/offer\/[0-9]*.html/g},//机械在线
	{"root_url":"","tail_url":"","reex":0,"recon":"",url:/www.qjy168.com\/shop\/p[0-9]*/g},//勤加缘网
	{"root_url":"","tail_url":"","reex":0,"recon":"",url:/www.258.com\/product\/[0-9]*.html/g},//258
	{"root_url":"","tail_url":"","reex":0,"recon":"",url:/www.jx188.com\/sell\/[0-9]*.html/g},//中国机械设备网
	{"root_url":"","tail_url":"","reex":0,"recon":"",url:/www.atobo.com.cn\/Products\/Detailed\/[0-9]*.html/g},//阿土伯
	{"root_url":"","tail_url":"","reex":0,"recon":"",url:/www.maijx.com\/sell\/business_info-[0-9]*.html/g},//买卖机械网
	{"root_url":"","tail_url":"","reex":0,"recon":"",url:/product.gongchang.com\/c[0-9]*\/CNC[0-9]*.html/g},//世界工厂
	{"root_url":"","tail_url":"","reex":0,"recon":"",url:/www.globalbuy.cc\/gongyingxinxi\/[0-9]*.html/g},//全球采购网
	{"root_url":"www.jiancai365.cn","tail_url":"","reex":0,"recon":"",url:/\/cp_[0-9]*.htm/g},//中国建材采购网
	{"root_url":"","tail_url":"","reex":0,"recon":"",url:/www.yiwangtui.com\/sell\/show-[0-9]*.html/g},//一网推
	{"root_url":"","tail_url":"","reex":0,"recon":"",url:/www.b2bwj.com\/sell\/show-[0-9]*.html/g},//万金网
	{"root_url":"www.gtobal.com\/sell\/detail-","tail_url":".html","reex":1,"recon":/m=trade&c=detail&a=preview&id=([0-9]{10})&type/,url:/m=trade&c=detail&a=preview&id=([0-9]{10})&type/g},//际通宝
	{"root_url":"","tail_url":"","reex":0,"recon":"",url:/www.qiyegongqiu.net\/sell\/show-[0-9]*.html/g},//中国企业供求网
	{"root_url":"","tail_url":"","reex":0,"recon":"",url:/www.qygq.com\/sell\/[0-9]*\/[0-9]*\/[0-9]*.html/g},//企业供求
	{"root_url":"","tail_url":"","reex":0,"recon":"",url:/www.niczy.com\/sell\/show-[0-9]*.html/g},//商导在线gsby7899872012
	{"root_url":"","tail_url":"","reex":0,"recon":"",url:/Shop.ebdoor.com\/Shops\/[0-9]+\/Products\/[0-9]+.aspx/g}//一比多
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
				if(!urlList[x].reex){
					console.log("弹出窗口:"+urlList[x].root_url + arr[w] + urlList[x].tail_url);
					window.open("https://www.baidu.com/s?wd=http://" + urlList[x].root_url + arr[w] + urlList[x].tail_url);					
				}else{
					var res = arr[w].match(urlList[x].recon)[1]
					console.log("弹出窗口:"+urlList[x].root_url + res + urlList[x].tail_url);
					window.open("https://www.baidu.com/s?wd=http://" + urlList[x].root_url + res + urlList[x].tail_url);		
				}
			}
		}else{
			console.log("["+x+"]未匹配："+urlList[x].url);
		}
	}
});



