

  function bttt(){
    let int=document.querySelector("input");

    let newurl="http://127.0.0.1:5500/ZEE5/stream.html"+"?url="+ encodeURIComponent(int.value);
    console.log(newurl);
      window.location.assign(newurl);
  }
  