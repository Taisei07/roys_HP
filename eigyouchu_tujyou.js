// work today library
// SYNCKGRAPHICA

// メッセージの設定
wt_message = new Object();
wt_message.close = "本日の営業は終了しました";
wt_message.holiday = "本日は定休日です";

// 営業時間の設定
var wt_shop_hour = new Object();
wt_shop_hour.open = new Array();
wt_shop_hour.close = new Array();

// 日曜日
wt_shop_hour.open[0] = false;
wt_shop_hour.close[0] = false;

// 月曜日
wt_shop_hour.open[1] = "09:30";
wt_shop_hour.close[1] = "19:00";

// 火曜日(定休日)
wt_shop_hour.open[2] = "09:30";
wt_shop_hour.close[2] = "19:00";

// 水曜日
wt_shop_hour.open[3] = "09:30";
wt_shop_hour.close[3] = "19:00";

// 木曜日
wt_shop_hour.open[4] = false;
wt_shop_hour.close[4] = false;

// 金曜日
wt_shop_hour.open[5] = "09:30";
wt_shop_hour.close[5] = "19:00";

// 土曜日
wt_shop_hour.open[6] = "09:30";
wt_shop_hour.close[6] = "19:00";

var wt_weeksName = new Array('日','月','火','水','木','金','土');
var wt_optgroup = null;

var wt_today = new Date((new Date()).getTime());
var wt_year = wt_today.getYear();
var wt_month = wt_today.getMonth();
var wt_day = wt_today.getDate();
var wt_hour = wt_today.getHours();
var wt_min = wt_today.getMinutes();
if(wt_hour < 10) wt_hour = "0"+wt_hour;
if(wt_min < 10) wt_min = "0"+wt_min;
if (wt_year < 1900) wt_year += 1900;

var wt_now = wt_hour + ":" + wt_min;

if(wt_shop_hour.open[wt_today.getDay()]){
	// 営業日の場合
	if(wt_shop_hour.open[wt_today.getDay()] <= wt_now && wt_now <= wt_shop_hour.close[wt_today.getDay()])
		document.write("ただいま営業中です。本日は"+wt_shop_hour.close[wt_today.getDay()]+"まで営業しております。<br />お問い合わせは 045-324-8281 までお電話ください。");
	else if(wt_shop_hour.open[wt_today.getDay()] > wt_now)
		document.write("本日は"+wt_shop_hour.open[wt_today.getDay()]+"より営業しております。<br />今しばらくお待ちください。");
	else
		document.write("本日の営業は終了しました。<br />申し訳ございませんが、メールにてご連絡いただくか、翌営業日の9時30分以降にお電話ください。")
}
else {
	// 定休日の場合
	document.write("<strong><font size=+1>本日は定休日です。</font></strong><br />");
}

