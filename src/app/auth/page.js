import React from 'react'

var userScore = 65;
var grade = ""
var islogin = false;
export default function Auth() {
    if (userScore >= 90 && userScore <= 100) {
        grade = 'A'
        
    }
    else if (userScore >= 80 && userScore <= 90) {
        grade = 'B'
    }
    else if (userScore >= 70 && userScore <= 80) {
        grade = 'C'
    }
    else if (userScore >= 60 && userScore <= 70) {
        grade = 'D'
    }
    else {
        grade = 'E'
    }
  return (
    <div>
    <h1>{grade}</h1>
    {false && <h1>Shahzaib</h1>}
    
    </div>
    // <div>
    // { 5 > 6 ?
    //     <button>
    // Login
    // </button>
    // :
    //   <button>
    // Logout
    // </button>   
    // }
    // </div>


    // <div>
    // { !islogin ?
    //     <button>
    // Login
    // </button>
    // :
    //   <button>
    // Logout
    // </button>   
    // }
    // </div>
  )
}
