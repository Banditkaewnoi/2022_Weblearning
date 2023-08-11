var baseUrl = "https://api-ws2.inwcompro.com/v1/post";
var PostList = []

async function loadData() {
    try {
        let resData = await axios.get(baseUrl)
        PostList = [...resData.data.data]
    }catch (error){
        console.log(error.response.data)
    }
}
async function appendData() {
    document.getElementById('padId').innerHTML = ""
    await loadData()

    let elCard ="";
    for(let i = 0; i<PostList.length; i++){
        elCard += `
            <div class="card" onclick="showPopup(${PostList[i].post_id})">
                    <div class="row1">
                        <div class="el">${PostList[i].post_title}</div>
                    </div>
                    <div class="row2">
                        <div class="el">Post By ${PostList[i].post_by}</div>
                        <div class="el">${PostList[i].post_created_date}</div>
                    </div>
                </div>
        `
    }
    document.getElementById('padId').innerHTML =elCard

}
appendData()
function closePopup(){
    document.getElementById('popup').style.display = 'none'
}
async function loadDataPost(post_id) {
    try {
        let resData = await axios.get(baseUrl+'/'+post_id)
        return resData.data.data
    }catch (error){
        return null
    }
}
async function showPopup(post_id){
    let dataPost = await loadDataPost(post_id)
    if(dataPost != null){
        document.getElementById('popup').style.display = 'block'
        document.getElementById('popup').innerHTML  = ""
        let elCardPopup = `
                            <div class="card">
                                    <div class="closeBtn" onclick="closePopup()">
                                        <div class="closeBtnText">X</div>
                                    </div>
                                    <div class="title">${dataPost.post_title}</div>
                                    <div class="desc">${dataPost.post_description}</div>
                                    <div class="footer">
                                        <div class="el">${dataPost.post_by}</div>
                                        <div class="el">${dataPost.post_created_date}</div>
                                    </div>
                            </div>
                        `
        document.getElementById('popup').innerHTML = elCardPopup
    }
    
}




