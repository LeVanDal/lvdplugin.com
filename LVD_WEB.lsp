;;; ============================================
;;; LVD_WEB - Mở website LVD Plugin
;;; Gắn vào CUIX: Macro = ^C^CLVD_WEB
;;; ============================================
(defun C:LVD_WEB ()
  (startapp "explorer" "https://levandal.github.io/lvdplugin.com/")
  (princ "\nĐã mở website LVD Plugin AutoCAD Tools.")
  (princ)
)
(princ "\n>> Lệnh LVD_WEB đã sẵn sàng. Gõ LVD_WEB để mở website.")
(princ)
