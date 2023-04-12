// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.








window.addEventListener ("load", myMain, false);
console.log("Content Load Complete")
function myMain (evt) {
    var jsInitChecktimer = setInterval (checkForJS_Finish, 1111);

    function checkForJS_Finish () {
        console.log("Check for ad")

        var img = new Image();
       // img.src = 'https://i.ibb.co/6FdP119/ad.png'; // ad
        img.src = 'https://i.ibb.co/PWRxSLz/wedding.png';
        
        
        options = ["player-ads","browsi_LEADER_BOARD1","sparkles-container"];
        for (let i = 0; i < options.length; i++){
        var list = document.getElementById(options[i]);
        if(list != null) {
                    console.log("Ad Found")
            while (list.children.length>0) {
            list.removeChild(list.firstChild);
            }
            list.appendChild(img);
            clearInterval (jsInitChecktimer);
        } else {
                                console.log("NO AD Found")

        }
    }
}
}