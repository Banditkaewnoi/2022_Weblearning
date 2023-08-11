var authentication = () => {
    let usnInp = document.getElementById('usnInp').value.trim().toLowerCase();
    let pwdInp = document.getElementById('pwdInp').value.trim();
    let dataObj ={
        username : usnInp,
        password : pwdInp,
    }
    console.log(dataObj)
}