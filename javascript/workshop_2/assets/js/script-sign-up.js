var baseURL = "https://api-ws2.inwcompro.com/v1/account"


async function CreateAccount(){
    let inpUSN = document.getElementById('inpUSN').value.trim().toLowerCase();
    let inpPWD = document.getElementById('inpPWD').value;
    let inpFNAME = document.getElementById('inpFNAME').value;
    let inpLNAME = document.getElementById('inpLNAME').value;
    let dataObj ={
        username : inpUSN,
        password : inpPWD,
        first_name : inpFNAME,
        last_name : inpLNAME,
    }
    // console.log(dataObj)
    try{
        const resData = await axios.post(baseURL,dataObj)
        document.getElementById('msgErr').style.display ="none";
        console.log(resData.status);
        console.log(resData.data);
    }catch(err){
        console.log(err.response.status);
        console.log(err.response.data);
        if(err.response.data.message=="Username already exists!!"){
            document.getElementById('msgErr').style.display='block';
        }else{
            document.getElementById('msgErr').style.display='none';
        }
    }
}

document.getElementById('msgErr').style.display = 'none';