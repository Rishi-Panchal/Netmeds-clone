var prior=JSON.parse(localStorage.getItem("cart-product"))|| [];

displayData(prior);
function displayData(){
    document.getElementById("desc").textContent="";
    prior.map((ele)=>{
        var div=document.createElement("div");

        var divImage=document.createElement("div");
        divImage.setAttribute("id","imagediv");

        var img1=document.createElement("img");
        img1.src=ele.img1;

        var img2=document.createElement("img");
        img2.src=ele.img2;

        var img3=document.createElement("img");
        img3.src=ele.img3;

        var img4=document.createElement("img");
        img4.src=ele.img4;

        var img5=document.createElement("img");
        img5.src=ele.img5;

        divImage.append(img1,img2,img3,img4,img5);

        var divDetails=document.createElement("div");
        divDetails.setAttribute("id","details");

        var name=document.createElement("h1");
        name.textContent=ele.name;

        var divbtn=document.createElement("div");
        divbtn.setAttribute("id","smallbutton");

        var btn1=document.createElement("button");
        btn1.textContent=ele.btn1;

        var btn2=document.createElement("button");
        btn2.textContent=ele.btn2;

        divbtn.append(btn1,btn2);
        divrating=document.createElement("div");
        divrating.setAttribute("id","rating");
        
        // var p=document.createElement('p');
        // p.innerHTML=`<ion-icon id="ionheart" name="heart-outline"></ion-icon>`;
        

        var span=document.createElement("span");
        span.textContent="5.0"

        var imagerate=document.createElement("img");
        imagerate.setAttribute("src","sale_1_05.jpg");
        imagerate.setAttribute("id","rate")

        span.appendChild(imagerate)

        

        divrating.append(span);

        var hr=document.createElement("hr");
        
        var br=document.createElement("br");

        var price=document.createElement("p");
        price.textContent="Best price* ";

        var span=document.createElement("span");
        span.textContent="Rs. "+ele.price;
       
        span.style.color='red';
        span.style.fontSize="20px"

        price.appendChild(span)

        var span1=document.createElement("span");
        span1.textContent="Rs. "+ele.mrp;
        span1.style.textDecoration="line-through"

        var strikedprice=document.createElement("p");
        strikedprice.textContent="MRP "
        strikedprice.style.color="rgb(139,167,201)"
        
        strikedprice.appendChild(span1); 

         var divd=document.createElement("div");

         var per=document.createElement("p");
         per.textContent="(Inclusive of all taxes)";

         var per1=document.createElement("p");
         per1.textContent="*Applicable coupon to be applied during checkout";

         var per2=document.createElement("p");
         per2.textContent="*This product cannot be returned for a refund or exchange.";

         var per3=document.createElement("p");
         per3.textContent="*Mkt: Reckitt Benckiser India Ltd";

         var per4=document.createElement("p");
         per4.textContent="*Country of Origin: India";

         var per5=document.createElement("p");
         per5.textContent="*Delivery charges if applicable will be applied at checkout";

         divd.append(per,per1,per2,per3,per4,per5);

         divmin=document.createElement("div");

         var pere=document.createElement("p");
         pere.textContent="Minimum Order Quantity: 3 know more";

         divmin.append(pere);

         var button=document.createElement("button");
         button.textContent="ADD TO CART";
         button.classList="addTocartpage"

         var hr1=document.createElement("hr");

         var divexpiry=document.createElement("div");
         divexpiry.setAttribute("id","expiry");
        //  divexpiry.style.display="flex";

         var avail=document.createElement("p");
         avail.textContent="Availability & Expiry"
         avail.style.color="rgb(137,136,140)";
         avail.style.fontSize="20px"

         var delivery=document.createElement("p");
         delivery.textContent="Delivering To"
         delivery.style.color="rgb(88,206,220)";
         delivery.style.fontSize="20px"

         var span3=document.createElement("span");
         span3.textContent=" 110002";
         span3.style.fontSize="25px"
         span3.style.color="Black";

         var divavailibity=document.createElement("div");
         
         

         delivery.append(span3);

         divexpiry.append(avail,delivery);

         
         
         divDetails.append(name,divbtn,divrating,br,hr,price,strikedprice,divd,divmin,button,hr1,divexpiry);
         div.append(divImage,divDetails);
         document.getElementById("desc").append(div);
    })
}