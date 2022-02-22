function generatePin (){
    const field = document.getElementById('pin-field');
    field.value = parseInt(Math.random()*10000);
    if(field.value.length == 4){
        return field.value;
    }
    else{
        return generatePin();
    }
}
document.getElementById('pin-btn').addEventListener('click',function(){
    generatePin();
})
// pin generate done
    document.getElementById('parent').addEventListener('click',function(event){
        const submitInput = document.getElementById('submit-field');
        const getInitialNumber = event.target.innerText;
        const getNewNumer = submitInput.value;
        submitInput.value =getNewNumer + getInitialNumber;
        if (submitInput.value.length > 4){
            submitInput.value = '';
        }
        if(isNaN(getInitialNumber)){
            if(getInitialNumber == 'C'){
                submitInput.value = '';
            }
        }
    })
// pin submit done
document.getElementById('submit-btn').addEventListener('click',function(){
    const submitInput = document.getElementById('submit-field');
    const field = document.getElementById('pin-field');
 if(submitInput.value == field.value){
     document.getElementById('success').style.display='block';
     document.getElementById('fail').style.display='none';
     submitInput.value = '';
     field.value = '';
 }
 else{
    document.getElementById('success').style.display='none';
    document.getElementById('fail').style.display='block';
    submitInput.value = '';
    field.value = '';
 }
})
// Varification done