<!--
	//カレンダーのID／複数設置する場合に要設定
	var cal_Id = 'cal_1';
	
	calObject[cal_Id] = new Object();
	
	//Xヵ月後のカレンダーを表示する場合 :: 1は当月
	var cal_display_month = 2;
	
	//定休日などはここで設定します。
	//calObject[cal_Id].day[ここに日にちを半角で] = クラス名;
	calObject[cal_Id].day = new Object();
	calObject[cal_Id].text = new Object();
	calObject[cal_Id].day["2017/8/10"] = "holyday";
	calObject[cal_Id].day["2017/8/17"] = "holyday";
	calObject[cal_Id].day["2017/8/18"] = "holyday";
	calObject[cal_Id].day["2017/8/19"] = "holyday";
	calObject[cal_Id].day["2017/9/18"] = "holyday";
	calObject[cal_Id].day["2017/9/23"] = "holyday";
	calObject[cal_Id].day["2017/10/9"] = "holyday";
	calObject[cal_Id].day["2017/10/28"] = "holyday";
	calObject[cal_Id].day["2017/11/3"] = "holyday";
	calObject[cal_Id].day["2017/11/23"] = "holyday";
	calObject[cal_Id].day["2017/12/23"] = "holyday";
	
	//毎週○曜日の場合
	calObject[cal_Id].week = new Object();
	calObject[cal_Id].week["flag"] = 1;
	calObject[cal_Id].week["Sun"] = "Sun";
	calObject[cal_Id].week["Mon"] = "Sun";
	calObject[cal_Id].week["Tue"];
	calObject[cal_Id].week["Wed"];
	calObject[cal_Id].week["Thu"];
	calObject[cal_Id].week["Fri"];
	calObject[cal_Id].week["Sat"];
	
	//毎月○日の場合
	calObject[cal_Id].month = new Object();
	
	//カレンダーをクリックできるようにする場合
	calObject[cal_Id].click = new Object();
	////パラメータを送るURL
	calObject[cal_Id].click["url"];
	////クリック可能にするクラス名(クラス指定なしの場合は指定せず)
	calObject[cal_Id].click["day"];
	
	calObject[cal_Id].today = new Date();
	calObject[cal_Id].cal_year = calObject[cal_Id].today.getYear();
	calObject[cal_Id].cal_month = calObject[cal_Id].today.getMonth() + cal_display_month;
	calObject[cal_Id].cal_day = calObject[cal_Id].today.getDate();
	if(calObject[cal_Id].cal_year < 1900) calObject[cal_Id].cal_year += 1900;
	if(calObject[cal_Id].cal_month < 1){
		calObject[cal_Id].cal_month += 12;
		calObject[cal_Id].cal_year -= 1;
	}
	else if(calObject[cal_Id].cal_month > 12){
		calObject[cal_Id].cal_month -= 12;
		calObject[cal_Id].cal_year = calObject[cal_Id].cal_year + 1;
	}
	
	if(cal_display_month == 1){
		calObject[cal_Id].text[calObject[cal_Id].cal_year+"/"+calObject[cal_Id].cal_month+"/"+calObject[cal_Id].cal_day] = "Today";
		for(i=0;i<calObject[cal_Id].after.length;i++){
			if(calObject[cal_Id].after[i] != undefined){
				nmsec = i * 1000 * 60 * 60 * 24;
				msec  = (new Date()).getTime();
				dt    = new Date(nmsec+msec);
				month = dt.getMonth() + 1;
				date  = dt.getDate();
				year = dt.getYear();
				if(year < 1900) year += 1900;
				calObject[cal_Id].day[year+"/"+month+"/"+date] = calObject[cal_Id].after[i];
			}
		}
	}
	
	document.write("<div class='cal_wrapper'>");
	document.write("<ul class='cal_ui'>");
	document.write("<li class=\"cal_prev\" onclick=\"prevCal('"+cal_Id+"')\"></li>");
	document.write("<li class='cal_to' onclick=\"currentCal('"+cal_Id+"')\"></li>");
	document.write("<li class='cal_next' onclick=\"nextCal('"+cal_Id+"')\"></li>");
	document.write("</ul>");
	document.write("<div id='"+cal_Id+"' class='cal_base'></div>");
	document.write("</div>");
	
	calObject[cal_Id].to_year = calObject[cal_Id].cal_year;
	calObject[cal_Id].to_month = calObject[cal_Id].cal_month;
	calObject[cal_Id].to_day = calObject[cal_Id].cal_day;

	writeCal(calObject[cal_Id].cal_year,calObject[cal_Id].cal_month,calObject[cal_Id].cal_day,cal_Id);
//-->