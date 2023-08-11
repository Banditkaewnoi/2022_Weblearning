async function Authentication(){
    let reqDataAuth = {
        username : document.getElementById('username').value.trim().toLowerCase(),
        password : document.getElementById('password').value.trim()
    }
    showLoading()
    try{
        let resData = await axios.post(BaseApiUrl + `/account/signin`,reqDataAuth)
        localStorage.setItem('srcAccount',JSON.stringify(resData.data.data))
        window.open('/','_self')
    } catch(error){
        hideLoading()
        document.getElementById('errMsg').innerHTML = '*ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง*'
    }
}