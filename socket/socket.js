
  
      var scolor='blue'
    AFRAME.registerComponent('foo', {
  
  init:function () {
    this.el.setAttribute('light', {color: 'green', intensity: 3})
    },
        tick: function () {
            red=document.querySelector('.red')
            red.addEventListener('click',(e)=>{
        e.preventDefault();
        console.log('Red')
        client.emit('red',{color:'red'})
            })

      client.on('cred',(color1)=>{  
          console.log('inside tick',color1)

          this.el.setAttribute('light', {color: color1, intensity: 3})
      })
     
        }
    })
   
    




    

   

  
 
  