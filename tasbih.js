const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahIncrimentBtn = document.getElementById('subhanAllahIncrimentBtn');
const subhanAllahDecrimentBtn = document.getElementById('subhanAllahDecrimentBtn');

const resetBtn = document.getElementById('resetBtn');


let subhanAllahInitialValue = 0;

subhanAllahIncrimentBtn.addEventListener('click', function (){
if (subhanAllahInitialValue === 33) {
    return alert('subhanAllah complete, Please fill-up another one');
}
    subhanAllahInitialValue += 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue
})

subhanAllahDecrimentBtn.addEventListener('click', function (){
    if (subhanAllahInitialValue === 0) {
        return alert('you cant add negetive value')
    }
    
    subhanAllahInitialValue -= 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue
})

resetBtn.addEventListener('click', function (){
    subhanAllahDisplay.innerText = 0;
    subhanAllahInitialValue = 0;
    alhamdulillahDisplay.innerText=0;
    alhamdulillahInitialValue=0;
    allahAkberDisplay.innerText =0;
    allahAkberInitialValue =0;

})

// alhamdulliah
const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
const alhamdulillahIncrimentBtn = document.getElementById('alhamdulillahIncrimentBtn');
const alhamdulillahDecrimentBtn = document.getElementById('alhamdulillahDecrimentBtn');

let alhamdulillahInitialValue = 0;

alhamdulillahIncrimentBtn.addEventListener('click', function () {
    if (alhamdulillahInitialValue === 33) {
        return alert('alhamdulillah complete, Please fill-up another one')
    }
    alhamdulillahInitialValue += 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue
})

alhamdulillahDecrimentBtn.addEventListener('click', function () {
    if (alhamdulillahInitialValue === 0) {
        return alert('you cant add negetive value')
    }
    alhamdulillahInitialValue -= 1;
    alhamdulillahDisplay.innerText = alhamdulillahInitialValue;
    // subhanAllahInitialValue -= 1;
    // subhanAllahDisplay.innerText = subhanAllahInitialValue
})

let allahAkberInitialValue = 0;

const allahAkberDisplay =document.getElementById('allahAkberDisplay');
const allahAkberIncrimentBtn =document.getElementById('allahAkberIncrimentBtn');
const allahAkberDecrimentBtn = document.getElementById('allahAkberDecrimentBtn');

allahAkberIncrimentBtn.addEventListener('click', function () {
    if (allahAkberInitialValue === 34) {
        return alert('you are done for now')
    }
    allahAkberInitialValue += 1;
    allahAkberDisplay.innerText = allahAkberInitialValue;
});

allahAkberDecrimentBtn.addEventListener('click', function () {
    if (allahAkberInitialValue === 0) {
        return alert('you cant add negetive value')
    }
    allahAkberInitialValue -= 1;
    allahAkberDisplay.innerText = allahAkberInitialValue
})

