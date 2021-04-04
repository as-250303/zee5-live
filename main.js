

  function bttt(){
    let int=document.querySelector("input");

    let newurl="https://as-250303.github.io/zee5-live/stream.html"+"?url="+ encodeURIComponent(int.value);
    console.log(newurl);
      window.location.assign(newurl);
  }
  
