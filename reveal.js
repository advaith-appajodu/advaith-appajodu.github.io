// Progressive enhancement only. The page is fully readable without JS.
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.add("js");
  if (reduce) return;

  // Scroll reveal via IntersectionObserver (no scroll listeners).
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  // Pointer tilt on the hero figure, driven by transform only (GPU, no reflow).
  var tilt = document.getElementById("tilt");
  if (tilt && window.matchMedia("(pointer:fine)").matches) {
    var raf = null;
    tilt.addEventListener("mousemove", function (ev) {
      if (raf) return;
      raf = requestAnimationFrame(function () {
        raf = null;
        var r = tilt.getBoundingClientRect();
        var px = (ev.clientX - r.left) / r.width - 0.5;
        var py = (ev.clientY - r.top) / r.height - 0.5;
        tilt.style.transform = "perspective(900px) rotateY(" + (px * 5).toFixed(2) +
          "deg) rotateX(" + (-py * 5).toFixed(2) + "deg) translateY(-2px)";
      });
    });
    tilt.addEventListener("mouseleave", function () { tilt.style.transform = ""; });
  }
})();
