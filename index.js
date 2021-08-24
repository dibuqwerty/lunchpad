let q = document.getElementById('q');
let aq = document.getElementById('qa');
let w = document.getElementById('w');
let aw = document.getElementById('wa');
let ee = document.getElementById('ee');
let ae = document.getElementById('ea');
let r = document.getElementById('r');
let ar = document.getElementById('ra');
let a = document.getElementById('a');
let aa = document.getElementById('aa');
let s = document.getElementById('s');
let as = document.getElementById('sa');
let d = document.getElementById('d');
let ad = document.getElementById('da');
let f = document.getElementById('f');
let af = document.getElementById('fa');
let z = document.getElementById('z');
let az = document.getElementById('za');
let x = document.getElementById('x');
let ax = document.getElementById('xa');
let c = document.getElementById('c');
let ac = document.getElementById('ca');
let v = document.getElementById('v');
let av = document.getElementById('va');

document.body.addEventListener('keydown', function(e){
    var keycode = e.keyCode;
    if(keycode===81){
        console.log(keycode + " was clicked");
        q.className ="clicked";
        aq.play();
    }
    if(keycode===87){
        console.log(keycode + " was clicked");
        w.className ="clicked";
        aw.play();
    }
    if(keycode===69){
        console.log(keycode + " was clicked");
        ee.className ="clicked";
        ae.play();
    }
    if(keycode===82){
        console.log(keycode + " was clicked");
        r.className ="clicked";
        ar.play();
    }
    if(keycode===65){
        console.log(keycode + " was clicked");
        a.className ="clicked";
        aa.play();
    }
    if(keycode===83){
        console.log(keycode + " was clicked");
        s.className ="clicked";
        as.play();
    }
    if(keycode===68){
        console.log(keycode + " was clicked");
        d.className ="clicked";
        ad.play();
    }
    if(keycode===70){
        console.log(keycode + " was clicked");
        f.className ="clicked";
        af.play();
    }
    if(keycode===90){
        console.log(keycode + " was clicked");
        z.className ="clicked";
        az.play();
    }
    if(keycode===88){
        console.log(keycode + " was clicked");
        x.className ="clicked";
        ax.play();
    }
    if(keycode===67){
        console.log(keycode + " was clicked");
        c.className ="clicked";
        ac.play();
    }
    if(keycode===86){
        console.log(keycode + " was clicked");
        v.className ="clicked";
        av.play();
    }
    
})
document.body.addEventListener('keyup', function(e){
    var keycode = e.keyCode;
    if(keycode===81){
        console.log(keycode + " was clicked");
        q.className ="unclicked";
    }
    if(keycode===87){
        console.log(keycode + " was clicked");
        w.className ="unclicked";
    }
    if(keycode===69){
        console.log(keycode + " was clicked");
        ee.className ="unclicked";
    }
    if(keycode===82){
        console.log(keycode + " was clicked");
        r.className ="unclicked";
    }
    if(keycode===65){
        console.log(keycode + " was clicked");
        a.className ="unclicked";
    }
    if(keycode===83){
        console.log(keycode + " was clicked");
        s.className ="unclicked";
    }
    if(keycode===68){
        console.log(keycode + " was clicked");
        d.className ="unclicked";
    }
    if(keycode===70){
        console.log(keycode + " was clicked");
        f.className ="unclicked";
    }
    if(keycode===90){
        console.log(keycode + " was clicked");
        z.className ="unclicked";
    }
    if(keycode===88){
        console.log(keycode + " was clicked");
        x.className ="unclicked";
    }
    if(keycode===67){
        console.log(keycode + " was clicked");
        c.className ="unclicked";
    }
    if(keycode===86){
        console.log(keycode + " was clicked");
        v.className ="unclicked";
    }
    
})