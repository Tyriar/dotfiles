; Source https://www.reddit.com/r/OneNote/comments/l2wv8i/horizontal_scrolling/

If WinActive("ahk_exe ONENOTE.EXE") ; If OneNote is active

; Shift + Wheel for horizontal scrolling
+WheelDown::WheelRight
+WheelUp::WheelLeft

#IfWinActive ; Do Nothing. Here to prevent the following hotkeys to get grouped under OneNote active condition
