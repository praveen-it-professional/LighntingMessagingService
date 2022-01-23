({
    handleMessage : function(component, message) {
        if(!$A.util.isUndefinedOrNull(message) && message.getParam("lmsData")!=null){
            component.set("v.messageRecived",message.getParam("lmsData").value);
        }
        
    },
    inptputHandler: function(component, evevnt, helper){
        
    },
    publishMessage:function(component, evevnt, helper){
        let message={ lmsData: {value: component.get('v.message')}}
        console.log('message from aura'+message);
        component.find('smc').publish(message);
    },

})
