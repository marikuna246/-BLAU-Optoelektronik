// ?p=N shows only page N (used for page screenshots; no effect on the PDF)
(function(){ var m=location.search.match(/p=(\d+)/); if(!m) return;
  document.querySelectorAll('.page').forEach(function(s,i){ if(i+1!=+m[1]) s.style.display='none'; else s.style.margin='0'; }); })();
// Fan-angle small multiples — exact geometry (half-angle = angle/2); angles taken from data-angles of #fans
(function(){
  var host=document.getElementById('fans'); if(!host) return;
  var angles=host.getAttribute('data-angles').split(',').map(Number);
  host.style.gridTemplateColumns='repeat('+angles.length+',1fr)';
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
