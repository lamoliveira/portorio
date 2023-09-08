// get viz

let viz;
const vizContainer = document.getElementById("vizContainer");

const url = "https://demodot.serverhealthcheck.tableautools.com/t/LuizOliveira/views/Resultado_16940342340720/Resultado";

const options = {
    height : "900px",
    width : "1666px",
    hideToolbar: true,
};
 
    
    // call init viz
    function initViz() {
        console.log("initViz...");
    
        viz = new tableau.Viz(vizContainer, url, options);
    }

    let refreshInterval;

    function refreshDataSource() {
        console.log("Going to start Refreshing...");
        refreshInterval = setInterval(() => {
            console.log("Refreshing...");
            viz.refreshDataAsync();

        }, 9000);
    }

function stopRefresh() {
    console.log("Stop the refresh!");
    clearInterval(refreshInterval);
}

    document.getElementById("start").addEventListener("click", refreshDataSource);
    document.getElementById("stop").addEventListener("click", stopRefresh)

  /*   setInterval(() => {
        console.log("Refreshing...");
        viz.refreshDataAsync();

    }, 9000); */

    console.log("inicio...");
    initViz();