async function loadContent(id, limit = 5, offset = 0){
    try{
        let resData = await axios(BaseApiUrl + `/post/${id}/${limit}/${offset}`);
        return [...resData.data.data];
    } catch(error) {
        return null;
    }
}
async function loadAccount(id){
    try{
        let resData = await axios(BaseApiUrl + `/account/${id}`);
        return resData.data.data;
    } catch(error) {
        return null;
    }
}
function bindDataViewer(inpData){
    let El = document.getElementById("content");
    let strCardEl = "";
    for(let i=0;i<inpData.length;i++){
        strCardEl += `<div class="card-v">
        <div class="header">
            <div class="avatar">
                <img src="${inpData[i].account_profile}">
            </div>
            <div class="account">
                <div class="account-name">
                    <div class="account-name-text">
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
    El.innerHTML += strCardEl;
}
function bindDataViewerAfterEnd(inpData){
    let El = document.getElementById("content");
    let strCardEl = "";
    for(let i=0;i<inpData.length;i++){
        strCardEl += `<div class="card-v">
        <div class="header">
            <div class="avatar">
                <img src="${inpData[i].account_profile}">
            </div>
            <div class="account">
                <div class="account-name">
                    <div class="account-name-text">
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
function bindDataOwner(inpData){
    let El = document.getElementById("content");
    let strCardEl = "";
    for(let i=0;i<inpData.length;i++){
        strCardEl += `<div class="card">
        <div class="header">
            <div class="avatar">
                <img src="${inpData[i].account_profile}">
            </div>
            <div class="account">
                <div class="account-name">
                    <div class="account-name-text">
                        ${inpData[i].account_fname} ${inpData[i].account_lname}
                    </div>
                </div>
                <div class="post-date">
                    <div class="post-date-text">${timeSince(inpData[i].post_date)}</div>
                </div>
            </div>
            <div class="del-post" onclick="delpost(${inpData[i].post_id})">
                <svg width="15" height="15" viewBox="0  0 24 24" fill="#bf1f2e" xmlns="http://www.w3.org/2000/svg"><path d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-7 7.586l3.293-3.293 1.414 1.414-3.293 3.293 3.293 3.293-1.414 1.414-3.293-3.293-3.293 3.293-1.414-1.414 3.293-3.293-3.293-3.293 1.414-1.414 3.293 3.293zm2-10.586h-4v1h4v-1z"/></svg>
            </div>
        </div>
        <div class="content">
            <div class="content-text">${inpData[i].post_desc}</div>
        </div>
    </div>`;
    }
    El.innerHTML += strCardEl;
}
function bindDataOwnerAfterEnd(inpData){
    let El = document.getElementById("content");
    let strCardEl = "";
    for(let i=0;i<inpData.length;i++){
        strCardEl += `<div class="card">
        <div class="header">
            <div class="avatar">
                <img src="${inpData[i].account_profile}">
            </div>
            <div class="account">
                <div class="account-name">
                    <div class="account-name-text">
                        ${inpData[i].account_fname} ${inpData[i].account_lname}
                    </div>
                </div>
                <div class="post-date">
                    <div class="post-date-text">${timeSince(inpData[i].post_date)}</div>
                </div>
            </div>
            <div class="del-post" onclick="delpost(${inpData[i].post_id})">
                <svg width="15" height="15" viewBox="0  0 24 24" fill="#bf1f2e" xmlns="http://www.w3.org/2000/svg"><path d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-7 7.586l3.293-3.293 1.414 1.414-3.293 3.293 3.293 3.293-1.414 1.414-3.293-3.293-3.293 3.293-1.414-1.414 3.293-3.293-3.293-3.293 1.414-1.414 3.293 3.293zm2-10.586h-4v1h4v-1z"/></svg>
            </div>
        </div>
        <div class="content">
            <div class="content-text">${inpData[i].post_desc}</div>
        </div>
    </div>`;
    }
    El.insertAdjacentHTML('beforeend', strCardEl);
}

async function delpost(post_id){
    showLoading();
    await axios.delete(BaseApiUrl + `/post/${post_id}`);
    location.reload();
}

var id;
var mode;
async function valid(){
    isSignIn();
    showLoading();
    showNavbar();
    let paramsObj = getParamsObj();
    if(paramsObj.id == undefined || paramsObj.id == ""){
        window.open("/", "_self");
    }else{
        id = paramsObj.id;
        let srcAccount = JSON.parse(localStorage.getItem("srcAccount"))
        if(id == srcAccount.account_id){
            console.log("OWNNER");
            mode = "OWNNER";
            await OWNNER(srcAccount);
        }else{
            console.log("VIEWER");
            mode = "VIEWER";
            await VIEWER(id);
        }
        hideLoading();
    }
}
valid();

async function VIEWER(id){
    let accountProfile = document.getElementById("account-profile");
    let accountName = document.getElementById("name-account");
    let accountData = await loadAccount(id);
    accountProfile.src = accountData.profile;
    accountName.innerHTML= accountData.first_name + " " + accountData.last_name;
    let postData = await loadContent(id);
    bindDataViewer(postData);
}
async function OWNNER(data){
    let accountProfile = document.getElementById("account-profile");
    let accountName = document.getElementById("name-account");
    accountProfile.src = data.profile;
    accountName.innerHTML= data.first_name + " " + data.last_name;
    let postData = await loadContent(id);
    bindDataOwner(postData);
}
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

            let data = await loadContent(id, 5,5*pageState);
            pageState++;
            document.getElementById("loadMsg").remove();

            if(mode == "VIEWER"){
                bindDataViewerAfterEnd(data);
            }else{
                bindDataOwnerAfterEnd(data);
            }

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