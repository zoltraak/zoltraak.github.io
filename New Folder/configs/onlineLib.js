
function loadCSS(cssFiles) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = cssFiles;
    document.head.appendChild(link);
}
loadCSS("https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.min.css"); //! BOOTSTRAP ICON
loadCSS("https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css"); //! BOOTSTRAP CSS
loadCSS("https://cdn.jsdelivr.net/npm/animate.css/animate.min.css"); //! ANIMATE CSS
//!DATA TABLES
loadCSS("https://cdn.datatables.net/v/bs5/jq-3.7.0/dt-1.13.6/af-2.6.0/b-2.4.2/b-html5-2.4.2/b-print-2.4.2/date-1.5.1/kt-2.10.0/r-2.5.0/sb-1.6.0/datatables.min.css");

//! DO NOT DELETE
// function loadJSFiles(jsFiles) {
//     document.addEventListener("DOMContentLoaded", function () {
//         const script = document.createElement("script");
//         script.type = "text/javascript";
//         script.src = jsFiles;
//         document.body.appendChild(script);
//         script.async = true;
//     });
// }

function loadJSFiles(jsFiles) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = jsFiles;
    document.head.appendChild(script);
}
loadJSFiles("https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.bundle.min.js"); //! BOOTSTRAP JS
loadJSFiles("https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"); //!JQUERY
loadJSFiles("https://cdn.jsdelivr.net/npm/@floating-ui/dom/dist/floating-ui.dom.umd.min.js"); //! FLOATING UI
//!DATA TABLES
loadJSFiles("https://cdn.datatables.net/v/bs5/jq-3.7.0/dt-1.13.6/af-2.6.0/b-2.4.2/b-html5-2.4.2/b-print-2.4.2/date-1.5.1/kt-2.10.0/r-2.5.0/sb-1.6.0/datatables.min.js");
loadJSFiles("https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/pdfmake.min.js");
loadJSFiles("https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/vfs_fonts.js");