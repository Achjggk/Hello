let retrnymj = "x";
let ccdiv = document.getElementById('cnt');

function winner() {
    let ff = [];
    for (let i = 1; i < 10; i++) {
        let div = document.getElementById('ti' + i);
        if (div) {
            ff[i] = div.innerHTML;
        } else {
            ff[i] = ""; 
        }
    }
//1
    if (ff[1] == ff[2] && ff[2] == ff[3] && ff[1] != "") {
        ccdiv.innerHTML = `${ff[1]} Winner`;
        document.getElementById('ti1').style.backgroundColor = "black";
        document.getElementById('ti2').style.backgroundColor = "black";
        document.getElementById('ti3').style.backgroundColor = "black";
        console.log('Winner determined');
        setInterval(function(){ccdiv.innerHTML += "."},1000);
        setTimeout(function(){location.reload()},3000);
}
//2
    else if(ff[4] == ff[5] && ff[4] == ff[6] && ff[4] != "") {
            ccdiv.innerHTML = `${ff[4]} Winner`;
            document.getElementById('ti4').style.backgroundColor = "black";
            document.getElementById('ti5').style.backgroundColor = "black";
            document.getElementById('ti6').style.backgroundColor = "black";
            console.log('Winner determined');setInterval(function(){ccdiv.innerHTML+= ".";},1000);
        setTimeout(function(){location.reload()},3000)
        } 
//3     
   else if (ff[7] == ff[8] && ff[8] == ff[9] && ff[7] != "") {
        ccdiv.innerHTML = `${ff[1]} Winner`;
        document.getElementById('ti7').style.backgroundColor = "black";
        document.getElementById('ti8').style.backgroundColor = "black";
        document.getElementById('ti9').style.backgroundColor = "black";
        console.log('Winner determined');setInterval(function(){ccdiv.innerHTML+= ".";},1000);
       setTimeout(function(){location.reload()},3000)
    } 
//4
    else if (ff[1] == ff[4] && ff[4] == ff[7] && ff[7] != "") {
        ccdiv.innerHTML = `${ff[1]} Winner`;
        document.getElementById('ti1').style.backgroundColor = "black";
        document.getElementById('ti4').style.backgroundColor = "black";
        document.getElementById('ti7').style.backgroundColor = "black";
        console.log('Winner determined');setInterval(function(){ccdiv.innerHTML+= ".";},1000);
           setTimeout(function(){location.reload()},3000)
    } 
//5
    else if (ff[2] == ff[5] && ff[5] == ff[8] && ff[5] != "") {
        ccdiv.innerHTML = `${ff[1]} Winner`;
        document.getElementById('ti2').style.backgroundColor = "black";
        document.getElementById('ti5').style.backgroundColor = "black";
        document.getElementById('ti8').style.backgroundColor = "black";
        console.log('Winner determined');setInterval(function(){ccdiv.innerHTML+= ".";},1000);
           setTimeout(function(){location.reload()},3000)
    } 
//6
    else if (ff[3] == ff[6] && ff[6] == ff[9] && ff[3] != "") {
        ccdiv.innerHTML = `${ff[1]} Winner`;
        document.getElementById('ti6').style.backgroundColor = "black";
        document.getElementById('ti2').style.backgroundColor = "black";
        document.getElementById('ti9').style.backgroundColor = "black";
        console.log('Winner determined');setInterval(function(){ccdiv.innerHTML+= ".";},1000);
           setTimeout(function(){location.reload()},3000)
    } 
//7
    else if (ff[1] == ff[5] && ff[5] == ff[9] && ff[1] != "") {
        ccdiv.innerHTML = `${ff[1]} Winner`;
        document.getElementById('ti1').style.backgroundColor = "black";
        document.getElementById('ti5').style.backgroundColor = "black";
        document.getElementById('ti9').style.backgroundColor = "black";
        console.log('Winner determined');setInterval(function(){ccdiv.innerHTML+= ".";},1000);
           setTimeout(function(){location.reload()},3000)
    } 
//8
    else if (ff[3] == ff[5] && ff[5] == ff[7] && ff[7] != "") {
        ccdiv.innerHTML = `${ff[1]} Winner`;
        document.getElementById('ti3').style.backgroundColor = "black";
        document.getElementById('ti5').style.backgroundColor = "black";
        document.getElementById('ti7').style.backgroundColor = "black";
        console.log('Winner determined');setInterval(function(){ccdiv.innerHTML+= ".";},1000);
           setTimeout(function(){location.reload()},3000)
}
  }

function play(id) {
    let divo = document.getElementById('ti' + id);
    if (divo.innerHTML == "" && retrnymj === 'x') {
        retrnymj = "o";
        divo.innerHTML = 'x';
        ccdiv.innerHTML = "o joues";
    } else if (divo.innerHTML == "" && retrnymj === 'o') {
        retrnymj = "x";
        divo.innerHTML = 'o';
        ccdiv.innerHTML = "x joues";
    }
    winner();
}

