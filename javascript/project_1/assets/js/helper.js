const formatDate = (strDateFull, mark = "-") => {
  let arrMonth = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
  let strDate = strDateFull.split(" ");
  let arrDate = strDate[0].split(mark);
  let nYear = String(Number(arrDate[0]) + 543);
  let nMonth = arrMonth[Number(arrDate[1]) - 1];
  let nDay = String(Number(arrDate[2]));
  return nDay + " " + nMonth + " " + nYear;
};


function timeSince(dateInp){
  dateInp = dateInp.replace(/-/g,"/");
  let date = Date.parse(dateInp);
  let seconds = Math.floor((new Date() - date) / 1000);
  let interval = seconds / 31536000;
  interval = seconds / 60;
  interval = seconds / 86400;
  if (interval >= 2){
    return formatDate(dateInp, '/');
  }else if (interval > 1){
    return "เมื่อวาน";
  } 
  interval = seconds / 3600;
  if(interval > 1){
    return Math.floor(interval) + " ชั่วโมงที่แล้ว";
  }
  interval = seconds / 60;
  if (interval > 1){
    return Math.floor(interval) + " นาที่ที่ผ่านมา";
  }
  return " เมื่อสักครู่";
}

function getParamsObj(){
  const urlSearchParams = new URLSearchParams(window.location.search)
  const params = Object.fromEntries(urlSearchParams.entries())
  return params;
}
