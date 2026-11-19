// Preview helper: ?p=N shows only page N (used for page screenshots; no effect on the PDF)
  (function(){ var m=location.search.match(/p=(\d+)/); if(!m) return;
    document.querySelectorAll('.page').forEach(function(s,i){ if(i+1!=+m[1]) s.style.display='none'; else s.style.margin='0'; }); })();
  // Pulse-control_1 redraw: pulses to scale, on-time / off-time from the BLAU datasheet
  (function(){
    var X=function(t){ return 120+t*10.4; }, NS='http://www.w3.org/2000/svg';
    function series(id, on, off, top, fill, stroke){
      var g=document.getElementById(id); if(!g) return;
      for(var t=0; t+on<=45.0001; t+=on+off){
        var r=document.createElementNS(NS,'rect');
        r.setAttribute('x',X(t).toFixed(2)); r.setAttribute('y',top); r.setAttribute('width',(on*10.4).toFixed(2)); r.setAttribute('height',280-top);
        r.setAttribute('fill',fill); r.setAttribute('stroke',stroke); r.setAttribute('stroke-width','1.4'); g.appendChild(r);
      }
    }
    series('pc1-f2', 15, 15, 188, '#FBE3E6', '#E51837');
    series('pc1-f3', 2.9, 5.8, 142, 'rgba(238,241,228,0.85)', '#8FA05A');
    series('pc1-f4', 0.9, 2.7, 96, 'rgba(221,227,236,0.9)', '#003368');
  })();
  // Fan-angle small multiples — exact geometry (half-angle = angle/2)
  (function(){
    var angles=[5,10,15,20,30,45,60,75,90], host=document.getElementById('fans');
    angles.forEach(function(a){
      var h=34, cx=40, ay=60, hw=h*Math.tan(a*Math.PI/360), ty=ay-h;
      var x1=(cx-hw).toFixed(2), x2=(cx+hw).toFixed(2);
      var svg='<svg viewBox="0 6 80 60" xmlns="http://www.w3.org/2000/svg">'+
        '<polygon points="'+cx+','+ay+' '+x1+','+ty+' '+x2+','+ty+'" fill="#E51837" fill-opacity="0.14"/>'+
        '<line x1="'+cx+'" y1="'+ay+'" x2="'+x1+'" y2="'+ty+'" stroke="#E51837" stroke-width="0.8" stroke-opacity="0.6"/>'+
        '<line x1="'+cx+'" y1="'+ay+'" x2="'+x2+'" y2="'+ty+'" stroke="#E51837" stroke-width="0.8" stroke-opacity="0.6"/>'+
        '<line x1="'+(cx-hw-0.6).toFixed(2)+'" y1="'+ty+'" x2="'+(cx+hw+0.6).toFixed(2)+'" y2="'+ty+'" stroke="#E51837" stroke-width="2.4" stroke-linecap="round"/>'+
        '<rect x="'+(cx-4)+'" y="'+ay+'" width="8" height="4" rx="1" fill="#003368"/></svg>';
      var d=document.createElement('div'); d.className='c'; d.innerHTML=svg+'<div class="a">'+a+'°</div>'; host.appendChild(d);
    });
  })();