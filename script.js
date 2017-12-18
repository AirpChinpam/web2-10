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
      </body>
      </html>
