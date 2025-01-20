// Aptrinsic Tag
 (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
     (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
   var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
   var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
 })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-GBHANBHUKHYZ-2");

  let isFirstClickTracked = false;

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
    } 

 // Define a flag to track whether the first click has been recorded
// Add an event listener to capture clicks on the entire document
document.addEventListener("click", function (event) {
    // Check if the first click has already been tracked
    if (!isFirstClickTracked) {
        // Get the clicked element's details
        const clickedElement = event.target;

        // Send a custom event to Gainsight PX
        window.aptrinsic("track", "first_click_after_login", {
            elementTag: clickedElement.tagName,  // e.g., BUTTON, DIV, etc.
            elementText: clickedElement.textContent.trim(),  // The text of the clicked element
            elementClass: clickedElement.className,  // Classes applied to the clicked element
            elementId: clickedElement.id,  // ID of the clicked element (if any)
            timestamp: new Date().toISOString()  // Time of the first click
        });

        // Set the flag to true to prevent further tracking
        isFirstClickTracked = true;
    }
});

    else
    {
        alert('Invalid user, please use "demouser@gmail.com" to login');
    }
}



// function checkIfValidUser() {
//     // var user = document.getElementById('email');
//     var user = document.getElementById('email').value;
//     var b;
//     const companyid = {
//       i1: "GS-PX",
//       i2: "GS-CS",
//       i3: "GS-RO",
//       i4: "GS-NXT",
//       i5: "GS-PRO"
//     }
//     const companyname = {
//       n1: "Product Experience",
//       n2: "Customer Success",
//       n3: "Revenue Optimization",
//       n4: "Gainsight Next",
//       n5: "Gainsight PRO"
//     }

//     if(user === 'demouser@gmail.com' || user == 'saikumar@gmail.com' || user == 'sai24@gmail.com' || user == 'kumar@gmail.com'|| user == 'integration@gmail.com'|| user == 'sai24kumar24@gmail.com' || user == 'skpadala@gainsight.com' || user == 'user11@gmail.com' || user == 'padala@gmail.com')
//     {
        
//         b = user.substr(8, 5);
//         var id = b;
//         if(user == 'demouser@gmail.com')
//         {
//             aptrinsic("identify",
//             {
//             //User Fields
//             "id": "beginner" + user,
//             "email": user,
//             "firstName": "Demo",
//             "lastName": "User",
//             "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c",
//             "level": "Assistant",
//             "language": "English"

//             },
//             {
//             //Account Fields
//             "id": companyid.i1, 
//             "name": companyname.n1,
//             accounttype: "Test"
//             });
//         } 
//         else if(user == 'saikumar@gmail.com')
//         {
//             aptrinsic("identify",
//             {
//             //User Fields
//             "id": "basic12345" + user,
//             "email": user,
//             "firstName": "Sai",
//             "lastName": "Kumar",
//             "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c",
//             "level": "Junior"
//             },
//             {
//             //Account Fields
//             "id": companyid.i1, 
//             "name": companyname.n1,
//             accounttype: "Diamond"
//             });
//         } 
//         else if(user == 'padala@gmail.com')
//         {
//             aptrinsic("identify",
//             {
//             //User Fields
//             "id": "padala" + user,
//             "email": user,
//             "firstName": "Padala",
//             "lastName": "Sai",
//             "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c",
//             "level": "Junior"
//             },
//             {
//             //Account Fields
//             "id": companyid.i1, 
//             "name": companyname.n1,
//             accounttype: "Diamond"
//             });
//         } 
        
//         else if(user == 'sai24@gmail.com')
//         {
//             aptrinsic("identify",
//             {
//             //User Fields
//             "id": id,
//             "email": user,
//             "firstName": "Sai",
//             "lastName": "Padala",
//             "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c",
//             "level": "Senior"
//             },
//             {
//             //Account Fields
//             "id": companyid.i2, 
//             "name": companyname.n2,
//             accounttype: "Premium"
//             });
//         }
//         else if(user == 'kumar@gmail.com')
//         {
//             aptrinsic("identify",
//             {
//             //User Fields
//             "id": id,
//             "email": user, 
//             "firstName": "Kumar",
//             "lastName": "Padala",
//             "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c",
//             "level": "Manager"
//             },
//             {
//             //Account Fields
//             "id": companyid.i3, 
//             "name": companyname.n3,
//             accounttype: "Platinum"
//             });
//         }
//         else if(user == 'skpadala@gainsight.com')
//         {
//             aptrinsic("identify",
//             {
//             //User Fields
//             "id": id,
//             "email": user,
//             "firstName": "S K",
//             "lastName": "Padala",
//             "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c",
//             "level": "PX L2"
//             },
//             {
//             //Account Fields
//             "id": companyid.i1, 
//             "name": companyname.n1,
//             accounttype: "Platinum"
//             });
//         }
//         else if(user == 'sai24kumar24@gmail.com')
//         {
//             aptrinsic("identify",
//             {
//             //User Fields
//             "id": id,
//             "email": user,
//             "firstName": "Sai Kumar",
//             "lastName": "Padala",
//             "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c",
//             "level": "Director"
//             },
//             {
//             //Account Fields
//             "id": companyid.i3, 
//             "name": companyname.n3,
//             accounttype: "Platinum"
//             });
//         }
//         else if(user == 'user11@gmail.com')
//         {
//             aptrinsic("identify",
//             {
//             //User Fields
//             "id": id,
//             "email": "556fb80e-76ca-42e1-ac5c-3a47d8694920",
//             "firstName": "Temp user",
//             "lastName": "temp user",
//             "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c",
//             "level": "Starter"
//             },
//             {
//             //Account Fields
//             "id": companyid.i4, 
//             "name": companyname.n4,
//             accounttype: "Platinum"
//             });
//         }
//         else{
//           aptrinsic("identify",
//             {
//             //User Fields
//             "id": id,
//             "email": user,
//             "firstName": "Unkown",
//             "lastName": "user",
//             "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c",
//             "level": "Associate"
//             },
//             {
//             //Account Fields
//             "id": companyid.i1, 
//             "name": companyname.n1,
//             accounttype: "Premium"
//             });
//         }
//       //route to homepage.html
//       alert('There you go!');
//       location.replace("homepage.html");
//     } 
//     else
//     {
//         alert('Invalid user, please use "demouser@gmail.com" to login');
//     }
// }

//clearing cookies
function deleteAllCookies() {
  console.log("deleting cookies...");
 isFirstClickTracked = false;
  aptrinsic('reset');
  // counter = 0;
}

//Track info on details submission (custom event)
function sendInfo(name, email, dept)
{
  aptrinsic('track', 'Send Information', {"Name": name, "Email": email, "Department": dept});
}

// function search(ele)
// {
// 	if(event.key === "Enter")
//   {
//   	aptrinsic('track', "capturetypedtext", {"typedValue": ele.value});
//   	alert(ele.value);
// 	}
// }

// function customEventOnPageLoad()
// {
// 	aptrinsic('set', 'globalContext', {"model":555, "version":"Latest"});
// }

// function HelloFromAlert() {
//   alert("HELLO");
// }

// //var config = {kcAllowedFuncNames : ["HelloFromAlert"]}

// var testString = 'Text';

// function limitSearch()
// {
//   aptrinsic('bot', 'search', {labels: ['test_label']});
// }

// function removeLimit()
// {
//   aptrinsic('bot','search', { labels: [] });f
// }

//custom event for pop up's link
// function linkShown(email, dept)
// {
//   aptrinsic('track', 'Link Shown');
// }
