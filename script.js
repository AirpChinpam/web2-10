<script type="text/javacript">
 if(typeof sessionStorage === 'undefined'){
  window.alert("この環境ではWeb Storageが使えません");
  } else {
   var storage = sessionStorage;
   
   function setsessionStorage(){
    var key = document.getElementById("textkey").value;
    var value = document.getElementById("textdata").value;
    
    if(key && value) {
      storage.setItem(key, value);
     }
     key = "";
     value = "";
     viewStorage();
     }
     
    <script type="text/javascript">
      if (typeof sessionStorage === 'undefined') {
         window.alert("この環境ではWeb Storageが使えません");
       } else {
        var storage = sessionStorage;
        
        function setsessionStorage() {
         var key = document.getElementById("textkey").value;
         var value = document.getElementById("textdata").value;
         
         if (key && value) {
          storage.setItem(key, value);
         }
         key = "";
         value = "";
         viewStorage();
        }
        
        function viewStorage() {
         var list = document.getElementById("list")
         while (list.firstChild) list.removeChild(list.firstChild);
         
         for (var i=0; i < storage.length; i++) {
          var _key = storage.key(i);
          
          var tr = document.createElement("tr");
          var td1 = docment.createElement("td");
          var td2 = document.create.Element("td");
          list.appenChild(tr);
          tr.appendChild(td1);
          tr.appendChild(td2);
          td1.innetHTML = _key;
          td2.innerHTML = storage.getItem(_key);
         }
        }
        
        function removeStorage() {
         var key = document.getElementById("textkey").value;
         storage.removeItem(key);
         key = "";
         viewStorage();
        }
        
        function removeallStorage() {
         storage.clear();
         viewStorage();
       }
       
       viewStorage();
      }
      </script>
     if(!window.file) {
       window.alert("本ブラウザではFile APIが使えません");
     } else {
      
       document.getElementById("drop").addEventListener("drop", onDrop, false);
     }
    
   function onDrop(event){
     var files = event.dataTransfer.files;
     var info  = document.getElementById("info");
     var disp  = document.getElementById("disp");
     disp.innerHTML ="";
    
    for(var i=0; i< files.length; i++){
     var f = files[i];
     info.innerHTML += " ファイル名 :" + f.name + "ファイルの型:" + f.size / 1000 + " KB " + "<br />";
     
     var reader  = new FileReader();
     
     if (!f.type.match('image.*') && !f.type.match('text.*')) {
       alert("画像ファイルとテキストファイル以外は表示できません。");
       continue;
     }
     
     reader.onerror = function (evt) {
       disp.innerHTML = "読み取り時にエラーが発生しました。";
     }
     
     if (f.type.match('image.*')) {
      
      reader.onload = function (evt) {
       var li = document.createElement('li');
       var img = document.createElement('img');
       img.src = evt.target.result;
       li.appendChild(img);
       li.innetHTML += "<br />";
       disp.appendChild(li);
      }
      
      reader.readAsDataURL(f);
     }
     reader.readAsText(f, 'utf-8');
    }
   }
   event.preventDefault();
  }

   event.preventDefault();
}
function onDragOver(event){
    event.preventDefault();
}
        </script>
      </body>
     </html>
