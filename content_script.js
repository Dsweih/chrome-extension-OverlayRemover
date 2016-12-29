// Domain Name of the tab
var domainName = document.domain;

// MutatiaonObserver instance
var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

// 監控DOM是否有異動
var observer = new MutationObserver(function(mutationRecords) {
    // 異動的Nodes
    for (var i = 0; i < mutationRecords.length; i++) {
        var mutation = mutationRecords[i];
        // 新增的Node
        if (mutation.addedNodes.length > 0) {
            var $addNode = $(mutation.addedNodes);
            // 過濾包含overlayNames的新增Node
            $addNode.filter(function(){
                var className = $(this).attr('class');
                var overlayNames = ['remodal', 'popmake', 'lightbox', 'fancybox'];
                var found;
                if(domainName.indexOf('buzzhand') > -1) {
                    $('body').removeClass('noscroll');
                }
                for(var index in overlayNames) {
                    if(className && className.indexOf(overlayNames[index]) > -1){
                        //console.log(className + '=' + overlayNames[index]);
                        return true;
                    }
                }
                return false;
            }).remove();
        }
    }
});

var observerOption = {
    'childList': true, //監控子節點
    'subtree': true,
    'attributes': false
};

// 監控body內的節點是否異動
observer.observe($('body')[0], observerOption);