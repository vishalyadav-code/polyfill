//split function
String.prototype.mySplit = function(sepr = ''){
    const output = [];
    let local= ''
    let str=this;
    for (let i = 0; i < str.length; i++) {
      const el = str[i]
      if (el === sepr || (sepr === '' && local)) {
        output.push(local)
        local = ''
      }
      if (el !== sepr) {
        local += el
      }
    }
    if (local) {
      output.push(local)
      local = ''
    }
    return output
  }
  
  const str = 'split function';
  console.log(str.mySplit());
  
  
  
  // JOin Function
  Array.prototype.myJoin=function(join = ''){
      const arr=this;
      let output='';
      for(let i=0;i<arr.length-1;i++){
          output+=""+arr[i]+join;
      }
      output+=""+arr[arr.length-1];
      return output;
  }
  let arr=[1,2,3];
  let string=arr.myJoin('-');
  console.log(str);
  
  // Reverse Function
  
  Array.prototype.myReverse=function(){
      const arr=this;
      let j=arr.length-1;
      for(let i =0 ;i<arr.length/2;i++){
          let temp=arr[i];
          arr[i]=arr[j];
          arr[j]=temp;
          j--;
      }
  }
  let array=[1,2,3];
  array.myReverse();
  console.log(array);