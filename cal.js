(function(){
     
    let ans = document.querySelector('.ans');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('#clear');
    let equal = document.querySelector('#equal');
    let back =document.querySelector('#back')

    buttons.forEach(function(button){
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            ans.value += value;
        })
    })



    equal.addEventListener('click', function(e){
        if(ans.value === ''){
            ans.value=" ";
        }else{
            let answer=eval(ans.value);
            ans.value=answer;
        }
    })


    clear.addEventListener('click',function(e){
        ans.value='';
    })

    back.addEventListener('click',function(e){
        let backspace=ans.innerText.slice(0,-1);
        ans.value=backspace;
    })


})();