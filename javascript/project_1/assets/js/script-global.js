var BaseApiUrl = 'https://api-ws3.inwcompro.com';

function goToSignUp(){
    window.open('/signup.html','_self')
}
function gotoProfile(account_id){
    window.open('/profile.html?id=' + account_id, '_self' );
}
function goToSignin(){
    window.open('/signin.html','_self')
}

function gotoHome(){
    window.open('/','_self')
}

function showLoading(){
    document.getElementById('loading').style.display = "block";
}

function hideLoading(){
    document.getElementById('loading').style.display = "none";
}

function showNavbar(){
    let srcAccount = localStorage.getItem('srcAccount');
    let navEl = document.getElementById('navbar');
    if(srcAccount != null){
        let profileData = JSON.parse(srcAccount);
        let strEl = `<div class="bar">
        <div class="left" onclick="gotoHome()">
            <img src="./assets/img/logo.png">
        </div>
        <div class="right">
            <div class="account">
                <div class="chip" onclick="gotoProfile(${profileData.account_id})">
                    <div class="avatar">
                        <img src="${profileData.profile}">
                    </div>
                    <div class="name">
                        <p>${profileData.first_name}</p>
                    </div>
                </div>
            </div>
            <div class="signout">
                <div class="btn" onclick="logout()">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTYgMTB2LTVsOCA3LTggN3YtNWgtOHYtNGg4em0tMTYtOHYyMGgxNHYtMmgtMTJ2LTE2aDEydi0yaC0xNHoiLz48L3N2Zz4="/>
                </div>
            </div>
        </div>
    </div>`;
    navEl.innerHTML = strEl;
    }
}
function logout(){
    localStorage.removeItem('srcAccount');
    window.open('/signin.html','_self');
}

function isSignIn(){
    let srcAccount = localStorage.getItem('srcAccount');
    if(srcAccount==null){
        window.open('/signin.html','_self');
    }
}