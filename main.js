canvas= new fabric.Canvas('myCanvas');
bw = 30;
bh = 30;
px = 100;
py = 100;

pobj = ""
bobj = ""


function player_upload(){
    fabric.Image.fromURL('player.png', function (Img){
        pobj = Img;
        pobj.scaleToWidth(150);
        pobj.scaleToHeight(140);
        pobj.set({
            top: py,
            left: px
        });
        canvas.add(pobj);
    });
}


function block_upload(get_Img){
    fabric.Image.fromURL(get_Img, function (Img){
        bobj = Img;
        bobj.scaleToWidth(bw);
        bobj.scaleToHeight(bh);
        bobj.set({
            top: py,
            left: px
        });
        canvas.add(bobj);
    });
}


window.addEventListener('keydown', my_keydown);

function my_keydown(e) {
    kp = e.keyCode;
    console.log(kp);

    if(e.shiftKey == true && kp == '65')
    {
        bw = bw + 10;
        bh = bh + 10;
        console.log('Pressing shiftKey and a together');
        document.getElementById('cw').innerHTML = bw;
        document.getElementById('ch').innerHTML = bh;
    }

    if(e.shiftKey == true && kp == '66')
    {
        bw = bw - 10;
        bh = bh - 10;
        console.log('Pressing shiftKey and b together');
        document.getElementById('cw').innerHTML = bw;
        document.getElementById('ch').innerHTML = bh;
    }

    if(kp == '67') {
        block_upload('cloud.jpg');
    }

    if(kp == '68') {
        block_upload('dark_green.png');
    }

    if(kp == '71') {
        block_upload('ground.png');
    }

    if(kp == '76') {
        block_upload('light_green.png');
    }

    if(kp == '82') {
        block_upload('roof.jpg');
    }

    if(kp == '84') {
        block_upload('trunk.jpg');
    }

    if(kp == '85') {
        block_upload('unique.png');
    }

    if(kp == '87') {
        block_upload('wall.jpg');
    }

    if(kp == '89') {
        block_upload('yellow_wall.png');
    }




    if(kp == '37') {
        left();
        console.log('left');
    }

    if(kp == '38') {
        up();
        console.log('up');
    }

    if(kp == '39') {
        right();
        console.log('right');
    }

    if(kp == '40') {
        down();
        console.log('down');
    }


}

function left(){
    if(px>=0){
        px= px-bw;
        canvas.remove(pobj);
        player_upload();
    }
}

function right(){
    if(px<=850){
        px = px+bw;
        canvas.remove(pobj);
        player_upload();
    }
}

function up(){
    if(py>=0){
        py= py-bh;
        canvas.remove(pobj);
        player_upload();
    }
}

function down(){
    if(py<=560){
        py= py+bh;
        canvas.remove(pobj);
        player_upload();
    }
}