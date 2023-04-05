// let email =document.getElementById("closeenvelope")

// let envelopedisappear = document.getElementById('closeenvelope')
// let envelopeappear = document.getElementById('openenvelope')
// email.addEventListener('mouseover', openFunction)
// email.addEventListener('mouseout', closeFunction)

// function openFunction(){
//   envelopeappear.style.opacity=1
//   envelopedisappear.style.opacity=0
  

// }

// function closeFunction(){
//   envelopeappear.style.opacity=0
//   envelopedisappear.style.opacity=1
  

// }
console.log(12)
var id = null
var id2 = null
var textile = document.getElementById('textile')
var architecture = document.getElementById('architecture')
var ux = document.getElementById('ux')
var otherWorks = document.getElementById('otherWorks')
var slider = document.getElementById('slider')
var container = document.getElementById('container')
var timesClickedTextile = 0;
var timesClickedArchitecture = 0;
var timesClickedUx = 0;
var timesClickedOtherWorks = 0;
pos = 0
pos2 = 90
// ("#textile").click(function() {
//     timesClicked++;

//     if (timesClicked%2==0) {
//         //run second function
//     } else {
//         //run first function
//     }
// })
textile.addEventListener('click', movingTextile)
architecture.addEventListener('click', movingArchitecture)
ux.addEventListener('click', movingUx)
otherWorks.addEventListener('click', movingOtherWorks)


function movingTextile(){
    timesClickedTextile++
    if (timesClickedTextile%2 == 0){
        clearInterval(id)
        id = setInterval(frame, 4)
        document.getElementById('archititle').style.zIndex = '1'
        document.getElementById('uxtitle').style.zIndex = '1'
        document.getElementById('othertitle').style.zIndex = '1'
        function frame(){
            if(pos == 4){
                clearInterval(id)  
                document.getElementById('container').style.overflowX = 'auto'

            } else {
                pos++
                textile.style.marginLeft = pos + '%'
                
            }
        }
        
        clearInterval(id2)
        id2 = setInterval(frame2, 4)
        function frame2(){
            if(pos2 == 100){
                clearInterval(id2)
            } else {
                pos2++
                slider.style.left = pos2 + '%'
            }
        }


    } else {
        clearInterval(id)
        id = setInterval(frame, 4)
        document.getElementById('highlighttext').innerHTML='A collection of my best selling pieces from Etsy shop - AmeleDesign - where I celebrate my Ghanian heritage through print and pattern. '
        document.getElementById('imageChange').src = 'orangebag.jpg'
         document.getElementById('imageChange').style.width='270px'

        document.getElementById('imageChange2').src = 'redyellowpillow.JPG' 
         document.getElementById('imageChange2').style.width='285px'

        document.getElementById('imageChange3').src = 'lamp.JPG'
        document.getElementById('imageChange3').style.width='280px'

        document.getElementById('href').href = 'textile.html'
        document.getElementById('archititle').style.zIndex = '0'
        document.getElementById('uxtitle').style.zIndex = '0'
        document.getElementById('othertitle').style.zIndex = '0'
        
        
        function frame(){
            if (pos == -40){
                clearInterval(id)
                textile.style.width = '502px'
                document.getElementById('container').style.overflowX = 'hidden'
                document.getElementById('container').scrollLeft = 0;

            } else {
                pos--
                textile.style.marginLeft = pos + '%'
            }
        }
        
        clearInterval(id2)
        id2 = setInterval(frame2, 4)
        function frame2(){
            if (pos2 == 43){
                clearInterval(id2)
                
            } else {
                pos2--
                slider.style.left = pos2 + '%'


            }

        }

    }
}
function movingArchitecture(){
    timesClickedArchitecture++;
    if (timesClickedArchitecture%2 == 0){
        
        document.getElementById('textiletitle').style.zIndex = '1'
        clearInterval(id2)
        id2 = setInterval(frame2, 4)
        function frame2(){
            if(pos2 == 100){
                clearInterval(id2)
                document.getElementById('container').style.overflowX = 'auto'

            } else {
                pos2++
                slider.style.left = pos2 + '%'
            }
        }


    } else {
        document.getElementById('textiletitle').style.zIndex = '0'
        document.getElementById('uxtitle').style.zIndex = '0'
        
        clearInterval(id2)
        document.getElementById('highlighttext').innerHTML="A selection of 3D models sketches and ideation from my time studying for my Foundation Diploma at UAL"
        document.getElementById('imageChange').src = 'interiorarchi.jpg'
        document.getElementById('imageChange').style.width='200px'
        
        document.getElementById('imageChange2').src = 'cubism.jpg'
        
        document.getElementById('imageChange3').src = "archi.jpg"
        document.getElementById('imageChange3').style.width='300px'

        document.getElementById('href').href = 'archi.html'
        
        
        id2 = setInterval(frame2, 4)
        function frame2(){
            if (pos2 == 43){
                clearInterval(id2)
                document.getElementById('container').style.overflowX = 'hidden'
                
            } else {
                pos2--
                slider.style.left = pos2 + '%'

            }

        }

    }
    

}
function movingUx(){
    timesClickedUx++
    if (timesClickedUx%2 == 0){
        document.getElementById('archititle').style.zIndex = '1'
        document.getElementById('textiletitle').style.zIndex = '1'
        document.getElementById('othertitle').style.zIndex = '1'
        clearInterval(id)

       
        id = setInterval(frame, 4)
        function frame(){
            if(pos == 4){
                clearInterval(id) 
                document.getElementById('container').style.overflowX = 'auto'
 
            } else {
                pos++
                ux.style.marginLeft = pos + '%'
            }
        }
        
        clearInterval(id2)
        id2 = setInterval(frame2, 4)
        function frame2(){
            if(pos2 == 100){
                clearInterval(id2)
            } else {
                pos2++
                slider.style.left = pos2 + '%'
            }
        }


    } else {
        document.getElementById('archititle').style.zIndex = '0'
        document.getElementById('textiletitle').style.zIndex = '0'
        document.getElementById('othertitle').style.zIndex = '0'
        clearInterval(id)

        document.getElementById('highlighttext').innerHTML="The beginning of my UX design exploration, here I document my expirimentation for personal projects."
        document.getElementById('imageChange').src = 'ux1.1.jpg'
        document.getElementById('imageChange').style.width='400px'
        
        document.getElementById('imageChange2').src = 'ux2.jpg'
        
        document.getElementById('imageChange3').src = "ux3.jpg"
        

        document.getElementById('href').href = 'ux.html'
        
        id = setInterval(frame, 4)
        function frame(){
            if (pos == -84){
                clearInterval(id)
                ux.style.width = '503px'
                document.getElementById('container').style.overflowX = 'hidden'
                document.getElementById('container').scrollLeft = 0;

            } else {
                pos--
                ux.style.marginLeft = pos + '%'
            }
        }
        
        clearInterval(id2)
        id2 = setInterval(frame2, 4)
        function frame2(){
            if (pos2 == 43){
                clearInterval(id2)
            } else {
                pos2--
                slider.style.left = pos2 + '%'

            }

        }

    }

}
function movingOtherWorks(){
    timesClickedOtherWorks++
    if (timesClickedOtherWorks%2 == 0){
        document.getElementById('highlighttext').innerHTML='1 '
        document.getElementById('archititle').style.zIndex = '1'
        document.getElementById('textiletitle').style.zIndex = '1'
        document.getElementById('uxtitle').style.zIndex = '1'
        clearInterval(id)
        id = setInterval(frame, 4)
        function frame(){
            if(pos == 4){
                clearInterval(id)  
                document.getElementById('container').style.overflowX = 'auto'

            } else {
                pos++
                otherWorks.style.marginLeft = pos + '%'
            }
        }
        
        clearInterval(id2)
        id2 = setInterval(frame2, 4)
        function frame2(){
            if(pos2 == 100){
                clearInterval(id2)
            } else {
                pos2++
                slider.style.left = pos2 + '%'
            }
        }


    } else {
        document.getElementById('archititle').style.zIndex = '0'
        document.getElementById('textiletitle').style.zIndex = '0'
        document.getElementById('uxtitle').style.zIndex = '0'
        clearInterval(id)
        document.getElementById('highlighttext').innerHTML="A mixture of paintings, sketching and minature making. Here I explore mediums and "
        document.getElementById('imageChange').src = 'minature.jpg'
        document.getElementById('imageChange').style.width='380px'
        
        document.getElementById('imageChange2').src = 'aishaframptonclerk-folly.jpg'
        document.getElementById('imageChange2').style.width='400px'
       
        document.getElementById('imageChange3').src = 'waterbottle.JPG'
        document.getElementById('imageChange3').style.width='200px'

        document.getElementById('href').href = 'other.html'
        id = setInterval(frame, 4)
        function frame(){
            if (pos == -128){
                clearInterval(id)
                otherWorks.style.width = '505px'
                document.getElementById('container').style.overflowX = 'hidden'
                document.getElementById('container').scrollLeft = 0;

            } else {
                pos--
                otherWorks.style.marginLeft = pos + '%'
            }
        }
        
        clearInterval(id2)
        id2 = setInterval(frame2, 4)
        function frame2(){
            if (pos2 == 43){
                clearInterval(id2)
            } else {
                pos2--
                slider.style.left = pos2 + '%'

            }

        }

    }

}
