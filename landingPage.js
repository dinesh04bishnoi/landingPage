// action="http://api-in21.leadsquared.com/v2/ProspectActivity.svc/CreateCustom?accessKey=u$ra84a0116e56c5e98e21b3f27550556da&secretKey=87f3bfcf6ed54af88a8b39328fcea18ba1f3db2d"


//  // jquery transit is used to handle the animation


//  $('input').focusin(function() {
//     $('label').transition({x:'80px'},500,'ease').next()
//     .transition({x:'5px'},500, 'ease');
// //setTimeout needed for Chrome, for some reson there is no animation from left to right, the pen is immediately present. Slight delay to adding the animation class fixes it
//      setTimeout(function(){
//         $('label').next().addClass('move-pen');
//       },100);
    
//     });
      
//       $('input').focusout(function() {
//       $('label').transition({x:'0px'},500,'ease').next()
//        .transition({x:'-100px'},500, 'ease').removeClass('move-pen');
//       });

//       // for select box

var modalWrap = null;

const showModal = () =>{
// do'nt create multiple modal box
    if(modalWrap !== null){
        modalWrap.remove();
    }

    modalWrap = document.createElement('div');
    modalWrap.innerHTML = `
    <form  name="alphavalidate" method="post" >
    <div class="modal fade" tabindex="-1">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          
          <h4 class="modal-title">Modal Header</h4>
          
          <button type="button" class="close" data-dismiss="modal" onclick="close();">&times;</button>
        </div>
        <div class="modal-body">
        <div class="wrap center">
        <div class="wrap-label">
           <label for="name">Full Name</label>
           <p class="iconicfill-pen-alt2"><i class="fas fa-pencil-alt"></i></p>
        </div>
        <input type="text" name="name" id="name" required>
      </div>
      <div class="wrap center">
        <div class="wrap-label">
           <label for="email">Email</label>
           <p class="iconicfill-pen-alt2"><i class="fas fa-pencil-alt"></i></p>
        </div>
        <input type="email" name="email" id="email" required>
      </div>
      <div class="wrap center">
        <div class="wrap-label">
           <label for="phone">Phone Number</label>
           <p class="iconicfill-pen-alt2"><i class="fas fa-pencil-alt"></i></p>
        </div>
        <input type="number" name="phone" id="phone" required>
      </div>
      <div class="wrap center">
        <div class="wrap-label">
           <label for="notes">Notes</label>
           <p class="iconicfill-pen-alt2"><i class="fas fa-pencil-alt"></i></p>
        </div>
        <input type="text" id="notes" >
      </div>

      <div class="wrap center">   
      <div class="wrap-label">
           <label for="propertyType">Property Type</label>
           <p class="iconicfill-pen-alt2"><i class="fas fa-pencil-alt"></i></p>
        </div>     
      <select name="propertyType" id="propertyType">
      <option value="Residential">Residential</option>
      <option value="Commercial">Commercial</option>    
     </select>
      </div>

      <div class="wrap center">   
     
     


      <button type="submit" class="btn btn-primary" style="margin-left:40%">Submit</button>
      
        </div>
       
      </div>
      
    </div>
  </div>  
  </form>
    `;
    document.body.append(modalWrap);

    var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));

    modal.show();
}

const  close = ()=>{
    showModal.modal('hide');
}

function check_Alpha(letters){
    var regex = /^[a-zA-Z]+$/;
    if(letters.name.value == " "){
        alert("Name Field cannot be left empty");
        letters.name.focus();
        return false;
      }
    if(regex.test(letters.name.value) == false){
   alert("Name must be in alphabets only");
   letters.name.focus();
   return false;
    }
    
    return true;
  }
//phone number
  function check_phone(phno){
    if(phno.phone.value == " "){
        alert("Phone number Field cannot be left empty");
        phno.phone.focus();
        return false;
      }
    var phoneregex =/^((\\+91-?)|0)?[0-9]{10}$/;
    if(phoneregex.test(phno.phone.value) == false){
        alert("Phone number must be  10 digits ");
        phno.phone.focus();
        return false;
         }
         
         return true;
  }

  //email

  function check_Email(mail){
    var emailregex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
    if(emailregex.test(mail.email.value)){
      return true;
      alert("Congrats! This is a valid Email email");
    }
    else{
      alert("This is not a valid email address");
      return false;
    }
  }

// $("select").on("click" , function() {
  
//     $(this).parent(".select-box").toggleClass("open");
    
//   });
  
//   $(document).mouseup(function (e)
//   {
//       var container = $(".select-box");
  
//       if (container.has(e.target).length === 0)
//       {
//           container.removeClass("open");
//       }
//   });
  
  
//   $("select").on("change" , function() {
    
//     var selection = $(this).find("option:selected").text(),
//         labelFor = $(this).attr("id"),
//         label = $("[for='" + labelFor + "']");
      
//     label.find(".label-desc").html(selection);
      
//   });
 // <div class="modal-footer">
        //   <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        // </div>
        let selectedBudget = document.querySelector('select');
        let result  = document.querySelector('h2');

        selectedBudget.addEventListener('change', ()=>{
            result.innerText = selectedBudget.options[selectedBudget.selectedIndex].text;
            console.log(selectedBudget.selectedIndex);
        })


        // dropdown for budget


//         <div class="wrap-label">
//         <label for="budget">Budget</label>
//         <p class="iconicfill-pen-alt2"><i class="fas fa-pencil-alt"></i></p>
//      </div>     
//    <select name="budget" id="budget">
//    <option value="25L-50L">25L-50L</option>
//    <option value="50L-75L">50L-75L</option>
//    <option value="75L-1Cr">25L-50L</option>
//    <option value="1Cr-1.5Cr">1Cr-1.5Cr</option> 
//     <option value="1.5Cr-2Cr">1.5Cr-2Cr</option>
//    <option value="2Cr-2.5Cr">2Cr-2.5Cr</option1.5Cr-2Cr
//   </select>
//    </div>
