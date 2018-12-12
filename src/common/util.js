let xhwsClient = new XinhuaWebSocketClient();

let cp = {
    subArr: [new TagId(0, 0), new TagId(0, 1), new TagId(0, 0), new TagId(0, 1), new TagId(0, 0), new TagId(0, 1), new TagId(0, 0)]
};

// let notifyReceiver = new XinhuaWebSocketNotify();

XinhuaWebSocketNotify.prototype.onChannelOK = function() {
    xhwsClient.doLogon(1, 'admin', 'admin');
};

XinhuaWebSocketNotify.prototype.onLogonResult = function(cmdId, result, obj) {
    console.log('LogonResult: cmdId=' + cmdId.toString() + '; result=' + result.toString());
    console.log('logonResult detail: ' + JSON.stringify(obj))

    if (result < 0) {
        console.error('Login error');
        return;
    }

    xhwsClient.doSubscribe(cp, false);
}

XinhuaWebSocketNotify.prototype.onConnectionClosed = function() {
    console.log('connection closed');
}

XinhuaWebSocketNotify.prototype.onDataChanged = function(vari) {
	this.datas = vari;
    // for (x in vari) {
    //     let v = vari[x];

    //     let h32 = v.tagId.high32.toString();
    //     let l32 = v.tagId.low32.toString();
    //     if (datas[h32]) {
    //         let temp = {};
    //         temp.pointid = l32;
    //         temp.value = v.getValueString();
    //         temp.ts = v.ts;
    //         datas[h32][l32] = temp;
    //     } else {
    //         let temp = {};
    //         temp.plcid = h32;
    //         let temp2 = {};
    //         temp2.value = v.getValueString();
    //         temp2.pointid = l32;
    //         temp2.ts = v.ts;
    //         temp[l32] = temp2;
    //         datas[h32] = temp;
    //     }
    // }
};
export default xhwsClient;