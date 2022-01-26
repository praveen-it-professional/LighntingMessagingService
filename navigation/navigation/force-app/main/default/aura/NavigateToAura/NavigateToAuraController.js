({
    doInit : function(component,event,helper) {
        var pageRef= component.get('v.pageReference');
        console.log(JSON.stringify(pageRef));
        component.set('v.message',pageRef.state.c__id);
    }
})
