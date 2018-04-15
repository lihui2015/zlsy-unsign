package com.weex.app.pdfreader.net;

import com.weex.app.pdfreader.bean.BaseBean;
import com.weex.app.pdfreader.bean.ResponseBean;
import com.weex.app.pdfreader.bean.ResponseMessageBean;

import retrofit2.Call;
import retrofit2.Response;

public abstract class SimpleCallback implements retrofit2.Callback<ResponseMessageBean> {

    @Override
    public void onResponse(Call<ResponseMessageBean> call, Response<ResponseMessageBean> response) {
        ResponseMessageBean result = response.body();
        if (result == null) onSuccess(-1, "result is null!");
        else onSuccess(result.getCode(), result.getMessage());
    }

    @Override
    public void onFailure(Call<ResponseMessageBean> call, Throwable t) {

    }

    public abstract void onSuccess(int code, String message);

}
