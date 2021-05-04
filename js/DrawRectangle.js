function main() {
    var canvas = document.getElementById('example');
    if(!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(189,210,182,1.0)';
    ctx.fillRect(0,0,400,400);
}