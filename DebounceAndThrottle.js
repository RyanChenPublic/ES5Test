const throttle = (func,timeout) =>{
    let timer = false;

    return function(){
      if(!timer){
          func.apply(this,arguments);
          timer = true;
          setTimeout(function (){
              timer = false;
          },timeout)
      }
    }
}
const func = ()=>{

}

const throttleFunc = throttle(func,250);

