function decreaseValue(){
    var product_amt=document.getElementById("product_total_amt").textContent
    var countvalue=document.getElementById("text-box").textContent
    var total=document.getElementById("total_cart_amt").textContent
    var itemvalue=document.getElementById("itemval1").textContent
    var item_code=parseInt(prompt("enter your choosen validity to remove in option 1 or 2 or 3"))
    count=parseInt(countvalue)
    if(item_code==1 || item_code==2 || item_code==3  ){
    if(count ==0){
        countvalue="0"
     alert("There are No items in your cart")   
    }
    else{
        count=count-1
        document.getElementById("text-box").innerHTML=count
        
    }
}
    
    
    
    cost=parseInt(itemvalue)
    prod=parseInt(product_amt)
     tot=parseInt(total)
     if(item_code==1 || item_code==2 || item_code==3  ){
    if(cost==0.00){
        document.getElementById("itemval1").innerHTML=cost
        document.getElementById("product_total_amt").innerHTML=prod
         document.getElementById("total_cart_amt").innerHTML=tot
    }
    else if(item_code==1){
        document.getElementById("itemval1").innerHTML=cost-199
        document.getElementById("prodcut_total_amt").innerHTML=prod-199
        document.getElementById("total_cart_amt").innerHTML=tot-199

        
    }
    else if(item_code==2){
        document.getElementById("itemval1").innerHTML=cost-99*12
        document.getElementById("prodcut_total_amt").innerHTML=prod-99*12
        document.getElementById("total_cart_amt").innerHTML=tot-99*12

    }
    else if(item_code==3){
        document.getElementById("itemval1").innerHTML= cost-59*12*4
        document.getElementById("prodcut_total_amt").innerHTML=prod-59*12*4
        document.getElementById("total_cart_amt").innerHTML=tot-99*12

    }
}
}
function increasevalue(){

    var countvalue=document.getElementById("text-box").textContent
    var product_amt=document.getElementById("product_total_amt").textContent
    var itemvalue=document.getElementById("itemval1").textContent
    var total=document.getElementById("total_cart_amt").textContent
    var item_code=parseInt(prompt("enter your choosen validity to remove in option 1 or 2 or 3"))
    count=parseInt(countvalue)
     if(item_code==1 || item_code==2 || item_code==3  ){
    
    if(count >=5){
        countvalue="5"
     alert("You Cannot Add More Than 5 items")   
    }
    else{
        count=count+1
        document.getElementById("text-box").innerHTML=count
        
    }
}
    
    
    prod=parseInt(product_amt) 
    cost=parseInt(itemvalue)
    tot=parseInt(total)
     if(item_code==1 || item_code==2 || item_code==3  ){
    if(cost==0.00){
        document.getElementById("itemval1").innerHTML=0.00
        document.getElementById("product_total_amt").innerHTML=prod
        document.getElementById("total_cart_amt").innerHTML=tot


    }
    if(item_code==1){
        document.getElementById("itemval1").innerHTML=cost+199
        document.getElementById("product_total_amt").innerHTML=prod+199
        document.getElementById("total_cart_amt").innerHTML=total+50+199


    }
    else if(item_code==2){
        document.getElementById("itemval1").innerHTML=cost+99*12
        document.getElementById("product_total_amt").innerHTML=prod+99*12
        document.getElementById("total_cart_amt").innerHTML=total+99*12+50

    }
    else if(item_code==3){
        document.getElementById("itemval1").innerHTML= cost+59*12*4
        document.getElementById("product_total_amt").innerHTML=prod+59*12*4
        document.getElementById("total_cart_amt").innerHTML=total+59*12+50

    }
         
}
}
// second item 
function decrease(){
    var product_amt=document.getElementById("product_total_amt").textContent
    var countvalue=document.getElementById("text-box2").textContent
    var total=document.getElementById("total_cart_amt").textContent
    var itemvalue=document.getElementById("itemval2").textContent
    var item_code=parseInt(prompt("enter your choosen validity to remove in option 1 or 2 or 3"))
    count=parseInt(countvalue)
    if(item_code==1 || item_code==2 || item_code==3  ){
    if(count ==0){
        countvalue="0"
     alert("There are No items in your cart")   
    }
    else{
        count=count-1
        document.getElementById("text-box2").innerHTML=count
        
    }
}
    
    
    
    cost=parseInt(itemvalue)
    prod=parseInt(product_amt)
     tot=parseInt(total)
     if(item_code==1 || item_code==2 || item_code==3  ){
    if(cost==0.00){
        document.getElementById("itemval2").innerHTML=cost
        document.getElementById("product_total_amt").innerHTML=prod
         document.getElementById("total_cart_amt").innerHTML=tot
    }
    else if(item_code==1){
        document.getElementById("itemval2").innerHTML=cost-199
        document.getElementById("prodcut_total_amt").innerHTML=prod-199
        document.getElementById("total_cart_amt").innerHTML=tot-199

        
    }
    else if(item_code==2){
        document.getElementById("itemval2").innerHTML=cost-99*12
        document.getElementById("prodcut_total_amt").innerHTML=prod-99*12
        document.getElementById("total_cart_amt").innerHTML=tot-99*12

    }
    else if(item_code==3){
        document.getElementById("itemval2").innerHTML= cost-59*12*4
        document.getElementById("prodcut_total_amt").innerHTML=prod-59*12*4
        document.getElementById("total_cart_amt").innerHTML=tot-99*12

    }
}
}
function increase(){

    var countvalue=document.getElementById("text-box2").textContent
    var product_amt=document.getElementById("product_total_amt").textContent
    var itemvalue=document.getElementById("itemval2").textContent
    var total=document.getElementById("total_cart_amt").textContent
    var item_code=parseInt(prompt("enter your choosen validity to remove in option 1 or 2 or 3"))
    count=parseInt(countvalue)
     if(item_code==1 || item_code==2 || item_code==3  ){
    
    if(count >=5){
        countvalue="5"
     alert("You Cannot Add More Than 5 items")   
    }
    else{
        count=count+1
        document.getElementById("text-box2").innerHTML=count
        
    }
}
    
    
    prod=parseInt(product_amt) 
    cost=parseInt(itemvalue)
    tot=parseInt(total)
     if(item_code==1 || item_code==2 || item_code==3  ){
    if(cost==0.00){
        document.getElementById("itemval2").innerHTML=0.00
        document.getElementById("product_total_amt").innerHTML=prod
        document.getElementById("total_cart_amt").innerHTML=tot


    }
    if(item_code==1){
        document.getElementById("itemval2").innerHTML=cost+199
        document.getElementById("product_total_amt").innerHTML=prod+199
        document.getElementById("total_cart_amt").innerHTML=total+50+199


    }
    else if(item_code==2){
        document.getElementById("itemval2").innerHTML=cost+99*12
        document.getElementById("product_total_amt").innerHTML=prod+99*12
        document.getElementById("total_cart_amt").innerHTML=total+99*12+50

    }
    else if(item_code==3){
        document.getElementById("itemval2").innerHTML= cost+59*12*4
        document.getElementById("product_total_amt").innerHTML=prod+59*12*4
        document.getElementById("total_cart_amt").innerHTML=total+59*12+50

    }
         
}
}
function decreasevalue(){
    var product_amt=document.getElementById("product_total_amt").textContent
    var countvalue=document.getElementById("text-box3").textContent
    var total=document.getElementById("total_cart_amt").textContent
    var itemvalue=document.getElementById("itemval3").textContent
    var item_code=parseInt(prompt("enter your choosen validity to remove in option 1 or 2 or 3"))
    count=parseInt(countvalue)
    if(item_code==1 || item_code==2 || item_code==3  ){
    if(count ==0){
        countvalue="0"
     alert("There are No items in your cart")   
    }
    else{
        count=count-1
        document.getElementById("text-box3").innerHTML=count
        
    }
}
    
    
    
    cost=parseInt(itemvalue)
    prod=parseInt(product_amt)
     tot=parseInt(total)
     if(item_code==1 || item_code==2 || item_code==3  ){
    if(cost==0.00){
        document.getElementById("itemval3").innerHTML=cost
        document.getElementById("product_total_amt").innerHTML=prod
         document.getElementById("total_cart_amt").innerHTML=tot
    }
    else if(item_code==1){
        document.getElementById("itemval3").innerHTML=cost-199
        document.getElementById("prodcut_total_amt").innerHTML=prod-199
        document.getElementById("total_cart_amt").innerHTML=tot-199

        
    }
    else if(item_code==2){
        document.getElementById("itemval3").innerHTML=cost-99*12
        document.getElementById("prodcut_total_amt").innerHTML=prod-99*12
        document.getElementById("total_cart_amt").innerHTML=tot-99*12

    }
    else if(item_code==3){
        document.getElementById("itemval3").innerHTML= cost-59*12*4
        document.getElementById("prodcut_total_amt").innerHTML=prod-59*12*4
        document.getElementById("total_cart_amt").innerHTML=tot-99*12

    }
}
}
function increasevalue(){

    var countvalue=document.getElementById("text-box3").textContent
    var product_amt=document.getElementById("product_total_amt").textContent
    var itemvalue=document.getElementById("itemval3").textContent
    var total=document.getElementById("total_cart_amt").textContent
    var item_code=parseInt(prompt("enter your choosen validity to remove in option 1 or 2 or 3"))
    count=parseInt(countvalue)
     if(item_code==1 || item_code==2 || item_code==3  ){
    
    if(count >=5){
        countvalue="5"
     alert("You Cannot Add More Than 5 items")   
    }
    else{
        count=count+1
        document.getElementById("text-box3").innerHTML=count
        
    }
}
    
    
    prod=parseInt(product_amt) 
    cost=parseInt(itemvalue)
    tot=parseInt(total)
     if(item_code==1 || item_code==2 || item_code==3  ){
    if(cost==0.00){
        document.getElementById("itemval3").innerHTML=0.00
        document.getElementById("product_total_amt").innerHTML=prod
        document.getElementById("total_cart_amt").innerHTML=tot


    }
    if(item_code==1){
        document.getElementById("itemval3").innerHTML=cost+199
        document.getElementById("product_total_amt").innerHTML=prod+199
        document.getElementById("total_cart_amt").innerHTML=total+50+199


    }
    else if(item_code==2){
        document.getElementById("itemval3").innerHTML=cost+99*12
        document.getElementById("product_total_amt").innerHTML=prod+99*12
        document.getElementById("total_cart_amt").innerHTML=total+99*12+50

    }
    else if(item_code==3){
        document.getElementById("itemval3").innerHTML= cost+59*12*4
        document.getElementById("product_total_amt").innerHTML=prod+59*12*4
        document.getElementById("total_cart_amt").innerHTML=total+59*12+50

    }
         
}
}

 function checkout(){
        alert("You have Sucessfully Purchased Your Cart items")
     }
        
function remove(){
    alert("You have removed an item")
}
function wish(){
    alert("Item ADDED TO WISH LIST ")
}