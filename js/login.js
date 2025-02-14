// Aptrinsic Tag
 (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
     (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
   var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
   var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
 })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-GBHANBHUKHYZ-2");

 //code to track first click

 document.addEventListener('DOMContentLoaded', () => {
  let firstClickTracked = false; // Flag to ensure only the first click is tracked

  // Function to track the first click event
  const trackFirstClick = (event) => {
      if (!firstClickTracked) {
          firstClickTracked = true; // Mark that the first click has been tracked

          // Capture details of the clicked element (optional)
          const element = event.target;
          const elementDetails = {
              tagName: element.tagName,
              id: element.id || 'N/A',
              className: element.className || 'N/A',
              innerText: element.innerText.trim() || 'N/A',
          };

          // Log the custom event to Gainsight PX
          if (typeof aptrinsic !== 'undefined') {
              aptrinsic('track', 'homepage_first_click', {
                  clickedElement: elementDetails,
                  timestamp: new Date().toISOString(),
              });
          } else {
              console.error('Gainsight PX SDK (aptrinsic) is not initialized.');
          }

          // Optionally, remove the event listener after the first click is tracked
          document.removeEventListener('click', trackFirstClick);
      }
  };

  // Add an event listener to the document for click events
  document.addEventListener('click', trackFirstClick);
});


function checkIfValidUser() {
    // var user = document.getElementById('email');
    var user = document.getElementById('email').value;
    var b;
    const companyid = {
      i1: "GS-PX",
      i2: "GS-CS",
      i3: "GS-RO",
      i4: "GS-NXT",
      i5: "GS-PRO"
    }
    const companyname = {
      n1: "Product Experience",
      n2: "Customer Success",
      n3: "Revenue Optimization",
      n4: "Gainsight Next",
      n5: "Gainsight PRO"
    }

    if(user == 'demouser@gmail.com' || user == 'saikumar@gmail.com' || user == 'sai24@gmail.com' 
    || user == 'kumar@gmail.com'|| user == 'integration@gmail.com'|| user == 'sai24kumar24@gmail.com' 
    || user == 'skpadala@gainsight.com' || user == 'user11@gmail.com' || user == 'padala@gmail.com')
    {       
        b = user.substr(8, 5);
        var id = b;
        if(user == 'demouser@gmail.com')
        {
            aptrinsic("identify",
            {
            //User Fields
            "id": "beginner" + user,
            "email": user,
            "firstName": "Demo",
            "lastName": "User",
            "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c",
            "level": "Assistant"
            },
            {
            //Account Fields
            "id": companyid.i1, 
            "name": companyname.n1,
            accounttype: "Test"
            });
        } 
        else if(user == 'saikumar@gmail.com')
        {
            aptrinsic("identify",
            {
            //User Fields
            "id": "basic12345" + user,
            "email": user,
            "firstName": "Sai",
            "lastName": "Kumar",
            "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c",
            "level": "Junior"
            },
            {
            //Account Fields
            "id": companyid.i1, 
            "name": companyname.n1,
            accounttype: "Diamond"
            });
        } 
        else if(user == 'padala@gmail.com')
        {
            aptrinsic("identify",
            {
            //User Fields
            "id": "padala" + user,
            "email": user,
            "firstName": "Padala",
            "lastName": "Sai",
            "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c",
            "level": "Junior"
            },
            {
            //Account Fields
            "id": companyid.i1, 
            "name": companyname.n1,
            accounttype: "Diamond"
            });
        } 
        else if(user == 'sai24@gmail.com')
        {
            aptrinsic("identify",
            {
            //User Fields
            "id": id,
            "email": user,
            "firstName": "Sai",
            "lastName": "Padala",
            "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c",
            "level": "Senior"
            },
            {
            //Account Fields
            "id": companyid.i2, 
            "name": companyname.n2,
            accounttype: "Premium"
            });
        }
        else if(user == 'kumar@gmail.com')
        {
            aptrinsic("identify",
            {
            //User Fields
            "id": id,
            "email": user,
            "firstName": "Kumar",
            "lastName": "Padala",
            "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c",
            "level": "Manager"
            },
            {
            //Account Fields
            "id": companyid.i3, 
            "name": companyname.n3,
            accounttype: "Platinum"
            });
        }
        else if(user == 'skpadala@gainsight.com')
        {
            aptrinsic("identify",
            {
            //User Fields
            "id": id,
            "email": user,
            "firstName": "SK",
            "lastName": "Padala",
            "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c",
            "level": "PX L2"
            },
            {
            //Account Fields
            "id": companyid.i1, 
            "name": companyname.n1,
            accounttype: "Platinum"
            });
        }
        else if(user == 'sai24kumar24@gmail.com')
        {
            aptrinsic("identify",
            {
            //User Fields
            "id": id,
            "email": user,
            "firstName": "Sai Kumar",
            "lastName": "Padala",
            "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c",
            "level": "Director"
            },
            {
            //Account Fields
            "id": companyid.i3, 
            "name": companyname.n3,
            accounttype: "Platinum"
            });
        }
        else if(user == 'user11@gmail.com')
        {
            aptrinsic("identify",
            {
            //User Fields
            "id": id,
            "email": user,
            "firstName": "Temp user",
            "lastName": "temp user",
            "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c",
            "level": "Starter"
            },
            {
            //Account Fields
            "id": companyid.i4, 
            "name": companyname.n4,
            accounttype: "Platinum"
            });
        }
        else{
          aptrinsic("identify",
            {
            //User Fields
            "id": id,
            "email": user,
            "firstName": "Unkown",
            "lastName": "user",
            "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c",
            "level": "Associate"
            },
            {
            //Account Fields
            "id": companyid.i1, 
            "name": companyname.n1,
            accounttype: "Premium"
            });
        }
      //route to homepage.html
      alert('There you go!');
      location.replace("homepage.html");
      document.addEventListener('click', trackFirstClickEvent);

    } 
    else
    {
        alert('Invalid user, please use "demouser@gmail.com" to login');
    }
}


// Clearing cookies and resetting Aptrinsic
function deleteAllCookies() {
  console.log("Deleting cookies...");
  aptrinsic('reset');

  // Reset the first click tracker and remove the event listener
  isFirstClickTracked = false;
  document.removeEventListener('click', trackFirstClickEvent);

  alert('Cookies cleared and logout complete.');
}

//Track info on details submission (custom event)
function sendInfo(name, email, dept)
{
  aptrinsic('track', 'Send Information', {"Name": name, "Email": email, "Department": dept});
}

