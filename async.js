// console.log("I");
// console.log("am");

// setTimeout(()=>{
//     console.log("Async JS")
// },2000)
// console.log("sync");
// console.log("javascript");

function loadingData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Loading Data");
            reject("Hello");
        },2000)
    })
}
function collectingData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("collecting data");
            resolve();
        },2000)
    })
}
function approvingData(){
    console.log("Approving Data")
}
function approved(){
    console.log("Approved")
}

// loadingData().then(collectingData).then(approvingData).then(approved);

async function ex(){
    await loadingData();
    await collectingData();
    await approvingData();
    await approved();
}

ex().then().catch(err=>{
    console.log(err);
});
