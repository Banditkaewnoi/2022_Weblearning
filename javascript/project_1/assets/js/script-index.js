async function loadContent(limit=5,offset=0){
    try{
        let resData = await axios(BaseApiUrl + `/post/${limit}/${offset}`);
        return [...resData.data.data];
    } catch (error) {
        return null;
    }
}

function bindData(inpData){
    let srcAccount = JSON.parse(localStorage.getItem('srcAccount'))
    let El = document.getElementById("content");
    let strCardEl = "";
    for(let i=0;i<inpData.length;i++){
        strCardEl += `<div class="card">
        <div class="header">
            <div class="avatar">
                <img src="${inpData[i].account_profile}" onclick="gotoProfile(${inpData[i].post_by})">
            </div>
            <div class="account">
                <div class="account-name">
                    <div class="account-name-text" onclick="gotoProfile(${inpData[i].post_by})">
                        ${inpData[i].account_fname} ${inpData[i].account_lname}
                    </div>
                </div>
                <div class="post-date">
                    <div class="post-date-text">${timeSince(inpData[i].post_date)}</div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-text">${inpData[i].post_desc}</div>
        </div>
    </div>`;
    }
    El.innerHTML = `<div class="card-post">
                        <div class="top">
                            <div class="avatar">
                                <img src="${srcAccount.profile}" id="postAccountImg" />
                            </div>
                            <div class="post-box">
                                <textarea placeholder="คุณกำลังคิดอะไรอยู่" id="inpMSG"></textarea>
                            </div>
                        </div>
                        <hr />
                        <div class="bottom">
                            <div class="post-btn" onclick="postMsg()">
                                <div class="post-btn-text">โพสต์</div>
                            </div>
                        </div>
                    </div>`;
    El.innerHTML += strCardEl;
}

function bindDataAfterEnd(inpData){
    let srcAccount = JSON.parse(localStorage.getItem('srcAccount'))
    let El = document.getElementById("content");
    let strCardEl = "";
    for(let i=0;i<inpData.length;i++){
        strCardEl += `<div class="card">
        <div class="header">
            <div class="avatar">
                <img src="${inpData[i].account_profile}" onclick="gotoProfile(${inpData[i].post_by})">
            </div>
            <div class="account">
                <div class="account-name">
                    <div class="account-name-text" onclick="gotoProfile(${inpData[i].post_by})">
                        ${inpData[i].account_fname} ${inpData[i].account_lname}
                    </div>
                </div>
                <div class="post-date">
                    <div class="post-date-text">${timeSince(inpData[i].post_date)}</div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-text">${inpData[i].post_desc}</div>
        </div>
    </div>`;
    }
    El.insertAdjacentHTML('beforeend', strCardEl);
}

async function postMsg(){
    let selfData = JSON.parse(localStorage.getItem('srcAccount'))
    let reqData = {
         post_desc: document.getElementById('inpMSG').value.trim(),
         post_by: Number(selfData.account_id)
    };
    if(reqData.post_desc.length == 0){
        alert("กรุณากรอกข้อมูล");
    }else{
        showLoading();
        try{
            await axios.post(BaseApiUrl + `/post`, reqData);
            let data = await loadContent();
            bindData(data);
            hideLoading();
        }catch(error){
            hideLoading();
            alert("Error: ไม่สามารถโพสต์ได้");
        }
    }
}
function gotoProfile(account_id){
    window.open('/profile.html?id=' + account_id, '_self' );
}
async function initData() {
        isSignIn();
        showLoading();
        showNavbar();
        let data = await loadContent();
        console.log(data)
        bindData(data);
        hideLoading();
}
initData();

var pageState = 1;
var loadingState = false;
const MyContent = document.getElementById('content');
MyContent.addEventListener('scroll',async()=>{
    if(MyContent.offsetHeight + MyContent.scrollTop >= MyContent.scrollHeight){
       if(!loadingState){
            loadingState = true;
            let El = document.getElementById("content");
            let strCardEl = `<div id="loadMsg" style="text-align:center; margin-top:5vmax; margin-bottom:5vmax;">
                        กำลังโหลดข้อมูล
                        </div>`;
            El.insertAdjacentHTML('beforeend', strCardEl);

            let data = await loadContent(5,5*pageState);
            pageState++;
            document.getElementById("loadMsg").remove();
            bindDataAfterEnd(data);
            if(data.length==0){
                loadingState = true;
                let strCardEl = `<div id="loadMsg" style="text-align:center; margin-top:5vmax; margin-bottom:5vmax;">
                        ไม่พบโพสต์ที่เก่ากว่า
                        </div>`;
                El.insertAdjacentHTML('beforeend', strCardEl);
            }else{
                loadingState = false;
            }
       }
    }
});