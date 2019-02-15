window.jQuery = function(nodeOrSelector){
    let nodes ={}
    if(typeof nodeOrSelector === 'string'){
        nodes = document.querySelectorAll(nodeOrSelector)
    }else if(nodeOrSelector instanceof Node){
        nodes={
            0: nodeOrSelector,
            length:1
        }
    }
   
    nodes.addClass = function(classes){
        classes.forEach((value) => {
            for(let i=0;i<nodes.length;i++){
                nodes[i].classList.add(value)
            }
         })}
    nodes.text = function(text){
       if(text === undefined){
           var texts=[]
           for(let i=0;i<nodes.length;i++){
           texts.push(nodes[i].textContent)
       }
       return texts
    }else{
        for(let i=0;i<nodes.length;i++){
           nodes[i].textContent=text
        }

       }          
    } 
    return nodes
}   
  
  var nodes2 = jQuery('ul > li')
  


  
  
  
  
  