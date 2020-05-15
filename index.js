
window.addEventListener('load',()=>{
   dataSet=[{
       item:['./headphone1.html','./headphone2.html','./headphone3.html']
   },
{
    item:['./headphone1.html','./headphone2.html','./headphone3.html']
}
]
const page=document.querySelector('#page')
putitems(dataSet);

    
})

function putitems(dataSet){
    console.log(dataSet.length)
   
    $('#page').append(()=>{
     console.log(data.item[0])
        dataSet.map(data=>{

            return (
            <div class="row">
                  <div class="item">
                <iframe  width="450" height="350" src='${data.item[0]}' ></iframe>
            </div>
            </div>
            )
        })

    })
}