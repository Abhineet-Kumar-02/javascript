const form= document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const height= parseInt(document.querySelector('#height').value) ;
    const weight= parseInt(document.querySelector('#weight').value) ;

    const result=document.querySelector('#results');

    if(height=='' || height<=0||isNaN(height)){
        result.innerHTML=`please write the valid height ${height}`;
    }else if(weight=='' || height<=0||isNaN(weight)){
        result.innerHTML=`please write the valid weight ${weight}`;
    }else{
        const bmi= (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML=`<span> ${bmi} </span>`;
        if(bmi<18.6){
            result.innerHTML+=`<span> underweight </span>`;
        }else if(bmi>18.6 && bmi<24.9){
            result.innerHTML+=`<span> Normal weight </span>`;
        }else{
            result.innerHTML+=`<span> over weight </span>`;
        }
    }

})