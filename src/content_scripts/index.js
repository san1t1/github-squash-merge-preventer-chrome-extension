function checkBranch(){
    chrome.storage.sync.get(({branchesList:[]}), (data)=>{  
        const targetBranch = document.querySelector("span.commit-ref span.css-truncate-target").innerText
        if (data.branchesList.includes(targetBranch)){
            const button = document.querySelector("button.js-merge-box-button-squash")
            if (button){
                button.disabled=true
            }else{
                setTimeout(checkBranch,125)
            }
        }    
    })
}


window.onload = function() {
    setTimeout(checkBranch, 125)
}
