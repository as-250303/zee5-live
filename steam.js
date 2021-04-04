setTimeout(function(){
    const e = document.querySelector("video"),
    n = e.getElementsByTagName("source")[0].src,
    o = {};
  if(Hls.isSupported()) {
    var config = {
      maxMaxBufferLength: 100,
    };
    const t = new Hls(config);
    t.loadSource(n), t.on(Hls.Events.MANIFEST_PARSED, function(n, l) {
      const s = t.levels.map(e => e.height);
      o.quality = {
        default: s[0],
        options: s,
        forced: !0,
        onChange: e => (function(e) {
          window.hls.levels.forEach((n, o) => {
            n.height === e && (window.hls.currentLevel = o)
          })
        })(e)
      };
      new Plyr(e, o)
    }), t.attachMedia(e), window.hls = t
  } else {
    new Plyr(e, o)
  }
},2000);


window.onload = function () {
  var url = document.location.href,
  
      params = url.split('?')[1].split('&'),
      data = {}, tmp;
  for (var i = 0, l = params.length; i < l; i++) {
       tmp = params[i].split('=');
       data[tmp[0]] = tmp[1];
  }
  console.log(data);
  console.log(url);
  var url2 = "https://zee5-live.ankitzxi05.repl.co/?c="+data.url;
       var xhr = new XMLHttpRequest();
xhr.open("GET", url2);

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
      var mystring = xhr.responseText;
console.log("i am here");
console.log(xhr.responseText);
console.log(mystring);
      document.querySelector("source").src=mystring;
   }};

xhr.send();
}