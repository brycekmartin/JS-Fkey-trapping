    $(function(){
        var SHIFT = false;
        $('input').live('keydown', function (e){
            if (e.keyCode == 16){
                SHIFT = true;
            }
            
            if (e.keyCode == 112 && SHIFT){
                LogMsg('F13 pressed');
                return false;
            }
            else if (e.keyCode == 112){
                  LogMsg('F1 pressed');
                  return false;
            }
            else if (e.keyCode == 113 && SHIFT){
                LogMsg('F14 pressed');
                return false;
            }    
            else if (e.keyCode == 113){
                LogMsg('F2 pressed');
                return false;
            }
            else if (e.keyCode == 114 && SHIFT){
                LogMsg('F15 pressed');
                return false;
            }
            else if (e.keyCode == 114){
                LogMsg('F3 pressed');
                return false;
            }
            else if (e.keyCode == 115 && SHIFT){
                LogMsg('F16 pressed');
                return false;
            }
            else if (e.keyCode == 115){
                LogMsg('F4 pressed');
                return false;
            }
            else if (e.keyCode == 116 && SHIFT){
                LogMsg('F17 pressed');
                return false;
            }
            else if (e.keyCode == 116){
                LogMsg('F5 pressed');
                return false;
            }
            else if (e.keyCode == 117 && SHIFT){
                LogMsg('F18 pressed');
                return false;
            }
            else if (e.keyCode == 117){
                LogMsg('F6 pressed');
                return false;
            }
            else if (e.keyCode == 118 && SHIFT){
                LogMsg('F19 pressed');
                return false;
            }
            else if (e.keyCode == 118){
                LogMsg('F7 pressed');
                return false;
            }
            else if (e.keyCode == 119 && SHIFT){
                LogMsg('F20 pressed');
                return false;
            }
            else if (e.keyCode == 119){
                LogMsg('F8 pressed');
                return false;
            }
            else if (e.keyCode == 120 && SHIFT){
                LogMsg('F21 pressed');
                return false;
            }
            else if (e.keyCode == 120){
                LogMsg('F9 pressed');
                return false;
            }
            else if (e.keyCode == 121 && SHIFT){
                LogMsg('F22 pressed');
                return false;
            }
            else if (e.keyCode == 121){
                LogMsg('F10 pressed');
                return false;
            }
            else if (e.keyCode == 122 && SHIFT){
                LogMsg('F23 pressed');
                return false;
            }
            else if (e.keyCode == 122){
                LogMsg('F11 pressed');
                return false;
            }
            else if (e.keyCode == 123 && SHIFT){
                LogMsg('F24 pressed');
                return false;
            }
            else if (e.keyCode == 123){
                LogMsg('F12 pressed');
                return false;
            }
            else if (e.keyCode == 16 && e.keyCode == 113){
                LogMsg('F13 pressed');
                return false;
            }
            else{
                return true;
            }
                
        });
        
        $('input').live('keyup', function (e){
            if (e.keyCode == 16){
                SHIFT = false;
                //return false;
            } 
        });
        
    
        function LogMsg(msg){
            $('<div/>')
            .append(msg)
            .appendTo('#output');
        }
        
    });