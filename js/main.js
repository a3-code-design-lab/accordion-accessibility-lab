"use strict";

document.querySelectorAll(".accordion[data-accordion]").forEach((accordion) => {
  const trigger = accordion.querySelector(".accordion-trigger");
  const panel = accordion.querySelector(".accordion-panel");

  // A はクリックのみ。キーボード操作やセマンティクスの不足を意図的に残す。
  // B は button 標準のキーボード操作を使い、ARIA 属性は追加しない。
  trigger.addEventListener("click", () => {
    const isOpen = panel.hidden;

    panel.hidden = !isOpen;
    accordion.classList.toggle("is-open", isOpen);

    // C と F は、表示状態をスクリーンリーダーに伝える属性を同期する。
    if (accordion.dataset.accordion === "c" || accordion.dataset.accordion === "f") {
      trigger.setAttribute("aria-expanded", String(isOpen));
    }
  });
});

// D と E は details / summary の標準動作に任せ、開閉制御を行わない。
