function clock() {
    var now = new Date();
    var canvas = document.getElementById('canvas');
    var ctx = document.getElementById('canvas').getContext('2d');
    canvas.width = 600;
    canvas.height = 600;
    ctx.save();
    ctx.clearRect(0, 0, 190, 190);
    ctx.translate(300, 300);
    // ctx.scale(0.2, 0.2);
    ctx.rotate(-Math.PI / 2);
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';

   
    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hr  = now.getHours();
    
    hr = hr >= 12 ? hr - 12 : hr;
  
    ctx.fillStyle = 'black';
  
    // write Hours
    ctx.save();
    ctx.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) *sec);
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();
  
    // write Minutes
    ctx.save();
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-5, 0);
    ctx.lineTo(112, 0);
    ctx.stroke();
    ctx.restore();
   
    // Write seconds
    ctx.save();
    ctx.rotate(sec * Math.PI / 30);
    ctx.strokeStyle = '#D40000';
    ctx.fillStyle = '#D40000';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(83, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.arc(0, 0, 2, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore();
  
    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#9e00ff';
    ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
    ctx.stroke();

    
  
    ctx.restore();
  
    window.requestAnimationFrame(clock);
  }
  
  window.requestAnimationFrame(clock);