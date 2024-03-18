const saveButton = document.getElementById("update");
const branchesList = document.getElementById("branches");
const errors = document.getElementById("errors");
chrome.storage.sync.get(({branchesList:[]}), (data)=>{
    branchesList.value=data.branchesList.join('\n')
})
saveButton.addEventListener("click", function(){
    const branches = branchesList.value;
    errors.innerText=""
    const blockList =[];
    for (const b of branches.split('\n')){
        const branch = b.trim();
        if (branch.indexOf(" ") > -1){
            errors.innerText=`Branch '${branch}' contains whitespace`
            return;
        }
        blockList.push(branch);
    }
    chrome.storage.sync.set(({branchesList:blockList}), ()=>{
        errors.innerText=`Saved`
    })
    
})