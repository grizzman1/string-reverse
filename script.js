var $textInput = $("#textInput"),
      $button = $("#doAction"),
      $display = $("#display");
      
      $button.on("click", function(){
        let word = $textInput.val();
        let reversedWord = word.split("").reverse();
        
        $display.text(reversedWord.join(""));
      });  