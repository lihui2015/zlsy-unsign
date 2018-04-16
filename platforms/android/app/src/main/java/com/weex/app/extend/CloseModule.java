package com.weex.app.extend;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.common.WXModule;
import com.taobao.weex.devtools.common.LogUtil;
import com.weex.app.WXPageActivity;
import com.weex.app.util.CacheActivity;

import static com.taobao.weex.ui.ExternalLoaderComponentHolder.TAG;

/**
 * Created by apple on 2018/4/13.
 */

public class CloseModule extends WXModule{

    @JSMethod(uiThread = false)
    public void closeApp() {
        LogUtil.e("触发关闭效果");
        CacheActivity.finishActivity();
    }

}
